(function () {
  const STORAGE_KEY = "LMS_31901_2011_STATE_V1";

  const defaultState = {
    studentName: "",
    studentId: "",
    currentView: "dashboard",
    selectedWeek: 1,
    selectedQuizUnit: 1,
    selectedQuizMode: "pre", // 'pre' | 'post'
    activityAnswers: {}, // { "w1_q1": "..." }
    jobCheckpoints: {}, // { "w1_c0": true }
    jobNotes: {}, // { "w1": "..." }
    assignmentTexts: {}, // { "w1": "..." }
    quizScores: {
      pre: {}, // { 1: { score: 4, total: 5, date: "..." } }
      post: {}
    },
    bomItems: [
      { name: "Layer 3 Core/Distribution Switch 24-Port Gigabit + 4x10G SFP+", brand: "Cisco Catalyst C9300-24T / Aruba 6300M", qty: 1, unit: "เครื่อง", purpose: "จัดการ Inter-VLAN Routing, DHCP Relay, LACP, Rapid-PVST+" },
      { name: "Layer 2 Managed PoE+ Access Switch 24-Port (370W)", brand: "Cisco C1000-24P-4G-L / MikroTik CRS328", qty: 3, unit: "เครื่อง", purpose: "เชื่อมต่อลูกข่าย VLAN 10, 20, 30, DHCP Snooping, Loop Guard" },
      { name: "Enterprise Multi-WAN VPN Router", brand: "Cisco ISR 4331 / MikroTik CCR2004", qty: 2, unit: "เครื่อง", purpose: "ทำ NAT/PAT, ACL, Multi-WAN Load Balance, QoS, IPsec VPN" },
      { name: "Next-Generation Firewall (NGFW)", brand: "FortiGate 60F / Palo Alto PA-440", qty: 1, unit: "เครื่อง", purpose: "แยกโซน Inside, DMZ, Outside และป้องกันภัยคุกคาม" },
      { name: "โมดูลหัวรับส่งแสง 10GBASE-SR SFP+ Transceiver", brand: "Cisco SFP-10G-SR", qty: 6, unit: "ตัว", purpose: "เชื่อมต่อ Uplink Fiber Optic 10Gbps และสำรองอุปกรณ์ (Spare)" },
      { name: "สายสัญญาณ UTP Cat6 ยาว 305 เมตร/กล่อง", brand: "LINK US-9106", qty: 2, unit: "กล่อง", purpose: "เดินสายเชื่อมต่อเครื่องลูกข่ายและ Access Point" }
    ]
  };

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(defaultState));
      const parsed = JSON.parse(raw);
      return Object.assign({}, JSON.parse(JSON.stringify(defaultState)), parsed, {
        quizScores: Object.assign({ pre: {}, post: {} }, parsed.quizScores || {})
      });
    } catch (e) {
      return JSON.parse(JSON.stringify(defaultState));
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      updateSidebarBadges();
    } catch (e) {
      console.error("Save state error:", e);
    }
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getSheetByWeek(weekNum) {
    const all = window.ALL_LEARNING_SHEETS || [];
    return all.find((s) => s.week === Number(weekNum)) || all[0];
  }

  // Navigate between main views
  window.navigateTo = function (viewName, options = {}) {
    state.currentView = viewName;
    if (options.week) state.selectedWeek = Number(options.week);
    if (options.unit) state.selectedQuizUnit = Number(options.unit);
    if (options.quizMode) state.selectedQuizMode = options.quizMode;
    saveState();
    renderActiveNav();
    renderMainView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.selectWeek = function (weekNum) {
    state.selectedWeek = Number(weekNum);
    saveState();
    renderMainView();
  };

  function renderActiveNav() {
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      const v = btn.getAttribute("data-view");
      btn.classList.toggle("active", v === state.currentView);
    });
  }

  function updateSidebarBadges() {
    const preCount = Object.keys(state.quizScores.pre || {}).length;
    const postCount = Object.keys(state.quizScores.post || {}).length;
    const quizBadge = document.getElementById("badge-quizzes");
    if (quizBadge) {
      quizBadge.textContent = `${preCount + postCount}/14`;
    }
  }

  function renderOfficialDocHeader(docTypeLabel, sheetNo, title, weekObj) {
    const c = window.COURSE_CURRICULUM;
    const studentInfo = state.studentName
      ? `ผู้เรียน: <strong>${escapeHtml(state.studentName)}</strong> ${state.studentId ? `(${escapeHtml(state.studentId)})` : ""}`
      : `ผู้เรียน: ........................................................................ รหัสนักศึกษา: ........................................`;
    return `
      <div class="sheet-official-header">
        <div>
          <div style="font-size:0.84rem; color:#475569; font-weight:600;">
            ${escapeHtml(c.curriculumYear)} | ${escapeHtml(c.instructor.college)} (${escapeHtml(c.instructor.agency)})
          </div>
          <div style="font-size:1.1rem; font-weight:700; color:#0f172a; margin:3px 0; font-family:'Prompt',sans-serif;">
            รหัสวิชา ${escapeHtml(c.courseCode)} ชื่อวิชา ${escapeHtml(c.courseNameTh)} (${escapeHtml(c.courseNameEn)})
          </div>
          <div style="font-size:0.86rem; color:#334155;">
            ทฤษฎี ${c.theoryHours} ชม./สัปดาห์ | ปฏิบัติ ${c.practiceHours} ชม./สัปดาห์ | ${c.credits} หน่วยกิต |
            สัปดาห์ที่ ${weekObj.week} (${escapeHtml(weekObj.unitTitle)})
          </div>
          <div style="font-size:0.84rem; color:#0369a1; margin-top:4px;">
            ครูผู้สอน: <strong>${escapeHtml(c.instructor.name)}</strong> ตำแหน่ง ${escapeHtml(c.instructor.position)} ${escapeHtml(c.instructor.department)}
          </div>
          <div style="font-size:0.84rem; color:#1e293b; margin-top:6px; padding-top:6px; border-top:1px dashed #cbd5e1;">
            ${studentInfo}
          </div>
        </div>
        <div>
          <div class="doc-type-badge">${escapeHtml(docTypeLabel)} ที่ ${sheetNo}</div>
          <div style="text-align:center; font-size:0.76rem; color:#475569; margin-top:6px;">
            สัปดาห์ที่ ${weekObj.week} / 15
          </div>
        </div>
      </div>
    `;
  }

  function renderWeekSelectorBar() {
    const sheets = window.ALL_LEARNING_SHEETS || [];
    return `
      <div class="card no-print" style="padding:16px 18px; margin-bottom:18px;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
          <div style="font-family:'Prompt',sans-serif; font-weight:600; font-size:0.95rem; color:#0f172a;">
            📅 เลือกสัปดาห์การเรียนรู้ (สัปดาห์ที่ 1 - 14 ครบทั้ง 7 หน่วยการเรียนรู้)
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="btn btn-outline btn-sm" onclick="window.print()">🖨️ พิมพ์เอกสาร (A4 / PDF)</button>
          </div>
        </div>
        <div class="week-selector-grid">
          ${sheets
            .map(
              (s) => `
            <button class="week-btn ${s.week === state.selectedWeek ? "active" : ""}" onclick="selectWeek(${s.week})">
              <div class="w-num">
                <span>สัปดาห์ที่ ${s.week}</span>
                <span class="badge badge-blue">หน่วย ${s.unit}</span>
              </div>
              <div class="w-title">${escapeHtml(s.weekTitle)}</div>
            </button>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderSheetQuickSwitchTabs(currentTab) {
    const w = state.selectedWeek;
    const sheet = getSheetByWeek(w);
    return `
      <div class="tabs-bar no-print">
        <button class="tab-pill ${currentTab === "knowledge" ? "active" : ""}" onclick="navigateTo('knowledge', {week:${w}})">
          📖 ใบความรู้ที่ ${w}
        </button>
        <button class="tab-pill ${currentTab === "activity" ? "active" : ""}" onclick="navigateTo('activity', {week:${w}})">
          💡 ใบกิจกรรมที่ ${w}
        </button>
        <button class="tab-pill ${currentTab === "jobsheet" ? "active" : ""}" onclick="navigateTo('jobsheet', {week:${w}})">
          🛠️ ใบงานที่ ${w}
        </button>
        <button class="tab-pill ${currentTab === "assignment" ? "active" : ""}" onclick="navigateTo('assignment', {week:${w}})">
          📋 ใบมอบหมายงานที่ ${w}
        </button>
        <button class="tab-pill" onclick="navigateTo('quizzes', {unit:${sheet.unit}, quizMode:'pre'})">
          📝 แบบทดสอบก่อน-หลังเรียน (หน่วยที่ ${sheet.unit})
        </button>
        <button class="tab-pill" onclick="navigateTo('simulator', {week:${w}})">
          💻 จำลองแล็บ CLI สัปดาห์ที่ ${w}
        </button>
      </div>
    `;
  }

  // ==================== VIEW 1: DASHBOARD ====================
  function renderDashboard() {
    const c = window.COURSE_CURRICULUM;
    const preDone = Object.keys(state.quizScores.pre || {}).length;
    const postDone = Object.keys(state.quizScores.post || {}).length;
    const checkedJobs = Object.values(state.jobCheckpoints || {}).filter(Boolean).length;
    const answeredActs = Object.values(state.activityAnswers || {}).filter((v) => v && v.trim().length > 0).length;

    return `
      <div class="hero-banner">
        <div class="hero-grid">
          <div>
            <div class="hero-tag-list">
              <span class="hero-tag">รหัสวิชา ${escapeHtml(c.courseCode)}</span>
              <span class="hero-tag">${escapeHtml(c.curriculumYear)}</span>
              <span class="hero-tag">ทฤษฎี ${c.theoryHours} ชม. / ปฏิบัติ ${c.practiceHours} ชม. (${c.credits} หน่วยกิต)</span>
              <span class="hero-tag">อ้างอิงมาตรฐานอาชีพ TPQI ระดับ 4 & รหัส 40104 ระดับ 5</span>
            </div>
            <h1 class="hero-title">วิชา ${escapeHtml(c.courseNameTh)} (${escapeHtml(c.courseNameEn)})</h1>
            <p class="hero-subtitle">
              ประเภทวิชา${escapeHtml(c.fieldType)} • กลุ่มอาชีพ${escapeHtml(c.careerGroup)} • สาขาวิชา${escapeHtml(c.major)}
            </p>
            <div style="background:rgba(255,255,255,0.12); border-left:4px solid #38bdf8; padding:10px 14px; border-radius:6px; font-size:0.9rem; margin-bottom:16px;">
              <strong>ผลลัพธ์การเรียนรู้ระดับรายวิชา:</strong> ${escapeHtml(c.learningOutcome)}
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:10px;">
              <button class="btn btn-primary" style="background:#38bdf8; color:#0f172a; font-weight:600;" onclick="navigateTo('curriculum')">
                📚 ดูหลักสูตร & ตารางวิเคราะห์รายวิชา
              </button>
              <button class="btn btn-outline" style="background:rgba(255,255,255,0.12); color:#fff; border-color:rgba(255,255,255,0.3);" onclick="navigateTo('knowledge', {week:1})">
                📖 เริ่มต้นบทเรียน (สัปดาห์ที่ 1-14)
              </button>
              <button class="btn btn-outline" style="background:rgba(255,255,255,0.12); color:#fff; border-color:rgba(255,255,255,0.3);" onclick="navigateTo('simulator')">
                💻 ห้องปฏิบัติการจำลองเครือข่าย CLI
              </button>
            </div>
          </div>

          <div class="hero-author-card">
            <div class="author-label">ผู้พัฒนาและอาจารย์ผู้สอนประจำรายวิชา</div>
            <div class="author-name">${escapeHtml(c.instructor.name)}</div>
            <div class="author-pos">ตำแหน่ง ${escapeHtml(c.instructor.position)}</div>
            <div class="author-org">
              ${escapeHtml(c.instructor.department)}<br>
              <strong>${escapeHtml(c.instructor.college)}</strong><br>
              ${escapeHtml(c.instructor.agency)}
            </div>
          </div>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon blue">📖</div>
          <div class="stat-content">
            <div class="stat-val">14 สัปดาห์ (7 หน่วย)</div>
            <div class="stat-label">ใบความรู้ 1-14 & สอบปลายภาคสัปดาห์ที่ 15</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon teal">🛠️</div>
          <div class="stat-content">
            <div class="stat-val">42 ชุดฝึกปฏิบัติ</div>
            <div class="stat-label">ใบกิจกรรม 1-14 • ใบงาน 1-14 • ใบมอบหมายงาน 1-14</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon green">📝</div>
          <div class="stat-content">
            <div class="stat-val">${preDone + postDone} / 14 ชุด</div>
            <div class="stat-label">ทำแบบทดสอบก่อนเรียน-หลังเรียนแล้ว (หน่วย 1-7)</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon amber">🏆</div>
          <div class="stat-content">
            <div class="stat-val">100 คะแนน (75 ชม.)</div>
            <div class="stat-label">บันทึกกิจกรรมแล้ว ${answeredActs} ข้อ • ตรวจใบงาน ${checkedJobs} จุด</div>
          </div>
        </div>
      </div>

      <!-- Quick Access to All Document Types -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">🗂️ ระบบสื่อและเอกสารการจัดการเรียนรู้เชิงโต้ตอบครบวงจร</div>
          <span class="badge badge-blue">คลิกเลือกหมวดหมู่เพื่อเข้าใช้งานทันที</span>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(230px, 1fr)); gap:14px;">
          <div style="border:1px solid var(--border); border-radius:10px; padding:16px; background:#f8fafc;">
            <div style="font-family:'Prompt',sans-serif; font-weight:600; color:#0284c7; margin-bottom:6px;">📖 ใบความรู้ที่ 1 - 14</div>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:12px;">เนื้อหาทฤษฎีเชิงลึก แผนผังโครงสร้างเครือข่าย และตัวอย่างคำสั่ง CLI ครบทั้ง 14 สัปดาห์</p>
            <button class="btn btn-primary btn-sm" onclick="navigateTo('knowledge', {week:1})">เปิดใบความรู้ที่ 1-14 →</button>
          </div>
          <div style="border:1px solid var(--border); border-radius:10px; padding:16px; background:#f8fafc;">
            <div style="font-family:'Prompt',sans-serif; font-weight:600; color:#0d9488; margin-bottom:6px;">💡 ใบกิจกรรมที่ 1 - 14</div>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:12px;">กรณีศึกษาวิเคราะห์ปัญหาเครือข่าย พิมพ์ตอบโต้ในเว็บ บันทึกผล และตรวจแนวคำตอบได้ทันที</p>
            <button class="btn btn-accent btn-sm" onclick="navigateTo('activity', {week:1})">เปิดใบกิจกรรมที่ 1-14 →</button>
          </div>
          <div style="border:1px solid var(--border); border-radius:10px; padding:16px; background:#f8fafc;">
            <div style="font-family:'Prompt',sans-serif; font-weight:600; color:#4f46e5; margin-bottom:6px;">🛠️ ใบงานที่ 1 - 14</div>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:12px;">ใบงานปฏิบัติการตั้งค่าเครือข่ายทีละขั้นตอน พร้อมรายการตรวจเช็ค เฉลย CLI และพิมพ์ส่งครู</p>
            <button class="btn btn-secondary btn-sm" onclick="navigateTo('jobsheet', {week:1})">เปิดใบงานที่ 1-14 →</button>
          </div>
          <div style="border:1px solid var(--border); border-radius:10px; padding:16px; background:#f8fafc;">
            <div style="font-family:'Prompt',sans-serif; font-weight:600; color:#d97706; margin-bottom:6px;">📋 ใบมอบหมายงานที่ 1 - 14</div>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:12px;">โจทย์โครงงานและการออกแบบเครือข่ายองค์กร พร้อมเกณฑ์รูบริกและช่องบันทึกงานส่ง</p>
            <button class="btn btn-outline btn-sm" onclick="navigateTo('assignment', {week:1})">เปิดใบมอบหมายงานที่ 1-14 →</button>
          </div>
          <div style="border:1px solid var(--border); border-radius:10px; padding:16px; background:#f8fafc;">
            <div style="font-family:'Prompt',sans-serif; font-weight:600; color:#16a34a; margin-bottom:6px;">📝 แบบทดสอบก่อน-หลังเรียน (หน่วย 1-7)</div>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:12px;">ระบบทดสอบ Pre-test และ Post-test ครบทั้ง 7 หน่วย พร้อมเฉลยละเอียดและเปรียบเทียบคะแนน</p>
            <button class="btn btn-primary btn-sm" style="background:#16a34a;" onclick="navigateTo('quizzes', {unit:1, quizMode:'pre'})">เข้าทำแบบทดสอบ →</button>
          </div>
        </div>
      </div>

      <!-- Interactive 15-Week Schedule Matrix -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">📅 แผนการจัดการเรียนรู้ 15 สัปดาห์ และทางลัดเข้าสู่สื่อการสอนรายสัปดาห์</div>
          <button class="btn btn-outline btn-sm" onclick="navigateTo('curriculum')">ดูตารางวิเคราะห์หลักสูตรฉบับเต็ม</button>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th class="text-center" style="width:80px;">สัปดาห์ที่</th>
                <th class="text-center" style="width:80px;">หน่วยที่</th>
                <th>ชื่อเรื่อง / งาน</th>
                <th class="text-center" style="width:95px;">ชม. (ท/ป/รวม)</th>
                <th style="width:430px;">เข้าถึงสื่อการเรียนรู้และแบบทดสอบ</th>
              </tr>
            </thead>
            <tbody>
              ${c.schedule15Weeks
                .map((row) => {
                  if (row.week === 15) {
                    return `
                      <tr>
                        <td class="text-center"><strong>15</strong></td>
                        <td class="text-center"><span class="badge badge-red">ปลายภาค</span></td>
                        <td><strong>${escapeHtml(row.title)} (ประเมินผลลัพธ์การเรียนรู้ระดับรายวิชา)</strong></td>
                        <td class="text-center">${row.theory}/${row.practice}/${row.total}</td>
                        <td>
                          <button class="btn btn-primary btn-sm" onclick="navigateTo('quizzes', {unit:1, quizMode:'post'})">
                            📝 ทำแบบทดสอบประมวลความรู้หน่วยที่ 1-7
                          </button>
                        </td>
                      </tr>
                    `;
                  }
                  return `
                    <tr>
                      <td class="text-center"><strong>${row.week}</strong></td>
                      <td class="text-center"><span class="badge badge-blue">หน่วยที่ ${row.unit}</span></td>
                      <td><strong>${escapeHtml(row.title)}</strong></td>
                      <td class="text-center">${row.theory}/${row.practice}/${row.total}</td>
                      <td>
                        <div style="display:flex; flex-wrap:wrap; gap:5px;">
                          <button class="btn btn-outline btn-sm" onclick="navigateTo('knowledge', {week:${row.week}})">ใบความรู้ ${row.week}</button>
                          <button class="btn btn-outline btn-sm" onclick="navigateTo('activity', {week:${row.week}})">ใบกิจกรรม ${row.week}</button>
                          <button class="btn btn-outline btn-sm" onclick="navigateTo('jobsheet', {week:${row.week}})">ใบงาน ${row.week}</button>
                          <button class="btn btn-outline btn-sm" onclick="navigateTo('assignment', {week:${row.week}})">ใบมอบหมาย ${row.week}</button>
                          <button class="btn btn-outline btn-sm" style="color:#0284c7; border-color:#bae6fd;" onclick="navigateTo('quizzes', {unit:${row.unit}, quizMode:'pre'})">ทดสอบหน่วย ${row.unit}</button>
                        </div>
                      </td>
                    </tr>
                  `;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ==================== VIEW 2: CURRICULUM & TABLES ====================
  function renderCurriculum() {
    const c = window.COURSE_CURRICULUM;
    const bt = c.behavioralTotals;

    return `
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">📜 ข้อมูลหลักสูตรรายวิชา ${escapeHtml(c.courseCode)} ${escapeHtml(c.courseNameTh)} (${escapeHtml(c.courseNameEn)})</div>
            <div style="font-size:0.86rem; color:var(--text-muted); margin-top:2px;">
              ${escapeHtml(c.curriculumYear)} • ประเภทวิชา${escapeHtml(c.fieldType)} • กลุ่มอาชีพ${escapeHtml(c.careerGroup)} • สาขาวิชา${escapeHtml(c.major)}
            </div>
          </div>
          <button class="btn btn-outline btn-sm no-print" onclick="window.print()">🖨️ พิมพ์หลักสูตรรายวิชา</button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:16px; margin-bottom:18px;">
          <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:10px; padding:16px;">
            <h4 style="color:#0369a1; margin-bottom:8px;">📌 ข้อมูลรายวิชาและผู้สอน</h4>
            <p style="font-size:0.9rem;"><strong>รหัสวิชา:</strong> ${escapeHtml(c.courseCode)}</p>
            <p style="font-size:0.9rem;"><strong>ชื่อวิชา:</strong> ${escapeHtml(c.courseNameTh)} (${escapeHtml(c.courseNameEn)})</p>
            <p style="font-size:0.9rem;"><strong>จำนวนชั่วโมง/หน่วยกิต:</strong> ทฤษฎี ${c.theoryHours} ชม./สัปดาห์ ปฏิบัติ ${c.practiceHours} ชม./สัปดาห์ จำนวน ${c.credits} หน่วยกิต</p>
            <p style="font-size:0.9rem; margin-top:6px;"><strong>ครูผู้สอน:</strong> ${escapeHtml(c.instructor.name)} (${escapeHtml(c.instructor.position)})</p>
            <p style="font-size:0.86rem; color:#475569;">${escapeHtml(c.instructor.department)} ${escapeHtml(c.instructor.college)} ${escapeHtml(c.instructor.agency)}</p>
          </div>

          <div style="background:#f8fafc; border:1px solid var(--border); border-radius:10px; padding:16px;">
            <h4 style="color:#0f172a; margin-bottom:8px;">🏅 อ้างอิงมาตรฐานอาชีพ และผลลัพธ์การเรียนรู้</h4>
            <div style="font-size:0.88rem; margin-bottom:10px;">
              <strong>อ้างอิงมาตรฐาน:</strong>
              <ul style="padding-left:18px; margin-top:4px;">
                ${c.standards.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
              </ul>
            </div>
            <div style="background:#dcfce7; border-left:4px solid #16a34a; padding:8px 12px; border-radius:4px; font-size:0.88rem;">
              <strong>ผลลัพธ์การเรียนรู้ระดับรายวิชา:</strong><br>${escapeHtml(c.learningOutcome)}
            </div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:16px; margin-bottom:18px;">
          <div style="border:1px solid var(--border); border-radius:10px; padding:16px;">
            <h4 style="color:#0284c7; margin-bottom:8px;">🎯 จุดประสงค์รายวิชา เพื่อให้</h4>
            <ul style="list-style:none; font-size:0.9rem; display:grid; gap:6px;">
              ${c.objectives.map((o) => `<li>${escapeHtml(o)}</li>`).join("")}
            </ul>
          </div>
          <div style="border:1px solid var(--border); border-radius:10px; padding:16px;">
            <h4 style="color:#0d9488; margin-bottom:8px;">⚡ สมรรถนะรายวิชา</h4>
            <ul style="list-style:none; font-size:0.9rem; display:grid; gap:6px;">
              ${c.competencies.map((comp) => `<li>${escapeHtml(comp)}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div style="border:1px solid var(--border); border-radius:10px; padding:16px; background:#fcfcfd;">
          <h4 style="color:#0f172a; margin-bottom:6px;">📝 คำอธิบายรายวิชา</h4>
          <p style="font-size:0.92rem; text-align:justify;">${escapeHtml(c.description)}</p>
        </div>
      </div>

      <!-- ตารางวิเคราะห์หน่วยการเรียนรู้ -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">📊 ตารางวิเคราะห์หน่วยการเรียนรู้ (6 งานหลัก / 11 งานย่อย)</div>
            <div style="font-size:0.85rem; color:var(--text-muted);">
              ผลลัพธ์การเรียนรู้ระดับรายวิชา (Job) : ${escapeHtml(c.learningOutcome)}
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width:18%;">งานหลัก (Duty)</th>
                <th style="width:18%;">งานย่อย (Task)</th>
                <th style="width:22%;">สมรรถนะย่อย (มาตรฐานอาชีพ)</th>
                <th style="width:21%;">ความรู้ในการปฏิบัติงาน</th>
                <th style="width:21%;">ทักษะในการปฏิบัติงาน</th>
              </tr>
            </thead>
            <tbody>
              ${c.unitAnalysis
                .map(
                  (u) => `
                <tr>
                  <td><strong>${escapeHtml(u.dutyTitle)}</strong></td>
                  <td>
                    <div><strong>${escapeHtml(u.taskTitle)}</strong></div>
                    <button class="btn btn-outline btn-sm no-print" style="margin-top:6px; font-size:0.74rem;" onclick="navigateTo('knowledge', {week:${u.unitRef * 2 - 1}})">
                      ไปยังหน่วยที่ ${u.unitRef} →
                    </button>
                  </td>
                  <td>${u.occupationalStandard === "–" ? "<span class='text-center'>–</span>" : `<span class="badge badge-blue" style="white-space:normal; text-align:left;">${escapeHtml(u.occupationalStandard)}</span>`}</td>
                  <td>${escapeHtml(u.knowledge)}</td>
                  <td>${escapeHtml(u.skills)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- กำหนดการจัดการเรียนรู้ 15 สัปดาห์ -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">🗓️ กำหนดการจัดการเรียนรู้ 15 สัปดาห์ (ทฤษฎี 1 ชม. / ปฏิบัติ 4 ชม. / รวม 5 ชม. ต่อสัปดาห์)</div>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th class="text-center" style="width:90px;">สัปดาห์ที่</th>
                <th class="text-center" style="width:90px;">หน่วยที่</th>
                <th>ชื่อเรื่อง/งาน</th>
                <th class="text-center" style="width:85px;">ทฤษฎี</th>
                <th class="text-center" style="width:85px;">ปฏิบัติ</th>
                <th class="text-center" style="width:100px;">รวม (ชม.)</th>
              </tr>
            </thead>
            <tbody>
              ${c.schedule15Weeks
                .map(
                  (w) => `
                <tr>
                  <td class="text-center"><strong>${w.week}</strong></td>
                  <td class="text-center">${w.unit ? w.unit : ""}</td>
                  <td>
                    <a href="javascript:void(0)" onclick="${w.week <= 14 ? `navigateTo('knowledge', {week:${w.week}})` : `navigateTo('quizzes', {unit:1, quizMode:'post'})`}" style="color:#0284c7; font-weight:600; text-decoration:none;">
                      ${escapeHtml(w.title)}
                    </a>
                  </td>
                  <td class="text-center">${w.theory}</td>
                  <td class="text-center">${w.practice}</td>
                  <td class="text-center"><strong>${w.total}</strong></td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- ตารางวิเคราะห์พฤติกรรมการเรียนรู้ -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">🧠 ตารางวิเคราะห์พฤติกรรมการเรียนรู้ (พุทธิพิสัย ทักษะพิสัย จิตพิสัย ประยุกต์ใช้ รวม 100 คะแนน)</div>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th rowspan="2" style="min-width:250px;">หน่วยการเรียนรู้</th>
                <th colspan="6" class="text-center">พุทธิพิสัย</th>
                <th rowspan="2" class="text-center">ทักษะพิสัย</th>
                <th rowspan="2" class="text-center">จิตพิสัย</th>
                <th rowspan="2" class="text-center">ประยุกต์ใช้</th>
                <th rowspan="2" class="text-center">รวม</th>
                <th rowspan="2" class="text-center">ชั่วโมง ท/ป</th>
              </tr>
              <tr>
                <th class="text-center">ความรู้</th>
                <th class="text-center">ความเข้าใจ</th>
                <th class="text-center">การนำไปใช้</th>
                <th class="text-center">การวิเคราะห์</th>
                <th class="text-center">การประเมินค่า</th>
                <th class="text-center">การสร้างสรรค์</th>
              </tr>
            </thead>
            <tbody>
              ${c.behavioralAnalysis
                .map(
                  (b) => `
                <tr>
                  <td><strong>${escapeHtml(b.unitName)}</strong></td>
                  <td class="text-center">${b.remember}</td>
                  <td class="text-center">${b.understand}</td>
                  <td class="text-center">${b.apply}</td>
                  <td class="text-center">${b.analyze}</td>
                  <td class="text-center">${b.evaluate}</td>
                  <td class="text-center">${b.create}</td>
                  <td class="text-center"><strong>${b.psychomotor}</strong></td>
                  <td class="text-center">${b.affective}</td>
                  <td class="text-center">${b.application}</td>
                  <td class="text-center"><span class="badge badge-blue">${b.totalScore}</span></td>
                  <td class="text-center">${escapeHtml(b.hoursTP)}</td>
                </tr>
              `
                )
                .join("")}
              <tr style="background:#f1f5f9; font-weight:700;">
                <td>รวม</td>
                <td class="text-center">${bt.remember}</td>
                <td class="text-center">${bt.understand}</td>
                <td class="text-center">${bt.apply}</td>
                <td class="text-center">${bt.analyze}</td>
                <td class="text-center">${bt.evaluate}</td>
                <td class="text-center">${bt.create}</td>
                <td class="text-center">${bt.psychomotor}</td>
                <td class="text-center">${bt.affective}</td>
                <td class="text-center">${bt.application}</td>
                <td class="text-center">${bt.unitSumScore}</td>
                <td class="text-center">${escapeHtml(bt.unitSumHours)}</td>
              </tr>
              <tr style="background:#fef3c7; font-weight:700;">
                <td colspan="10">ประเมินผลลัพธ์การเรียนรู้ระดับรายวิชา</td>
                <td class="text-center">${bt.courseOutcomeScore}</td>
                <td class="text-center">${escapeHtml(bt.courseOutcomeHours)}</td>
              </tr>
              <tr style="background:#dcfce7; font-weight:700; font-size:0.96rem;">
                <td colspan="10">รวมทั้งรายวิชา</td>
                <td class="text-center">${bt.grandTotalScore}</td>
                <td class="text-center">${escapeHtml(bt.grandTotalHours)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ==================== VIEW 3: ใบความรู้ที่ 1-14 ====================
  function renderKnowledgeSheet() {
    const sheet = getSheetByWeek(state.selectedWeek);
    const ks = sheet.knowledgeSheet;

    return `
      ${renderWeekSelectorBar()}
      ${renderSheetQuickSwitchTabs("knowledge")}

      <div class="sheet-document">
        ${renderOfficialDocHeader("ใบความรู้", ks.sheetNo, ks.title, sheet)}

        <h2 style="font-size:1.3rem; color:#0f172a; margin-bottom:10px;">${escapeHtml(ks.title)}</h2>
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:18px;">
          <span class="badge badge-blue">${escapeHtml(sheet.dutyRef)}</span>
          <span class="badge badge-teal">มาตรฐานอาชีพ: ${escapeHtml(sheet.standardRef)}</span>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">🎯 จุดประสงค์การเรียนรู้ประจำใบความรู้ที่ ${ks.sheetNo}</div>
          <ul style="padding-left:22px; display:grid; gap:6px;">
            ${ks.objectives.map((o) => `<li>${escapeHtml(o)}</li>`).join("")}
          </ul>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">📌 บทนำและแนวคิดสำคัญ (Overview)</div>
          <p style="text-align:justify;">${escapeHtml(ks.overview)}</p>
        </div>

        ${ks.sections
          .map(
            (sec) => `
          <div class="sheet-section">
            <div class="sheet-section-title">📘 ${escapeHtml(sec.heading)}</div>
            <p style="margin-bottom:10px;">${escapeHtml(sec.content)}</p>
            ${
              sec.bullets
                ? `<ul style="padding-left:22px; display:grid; gap:8px;">
                    ${sec.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
                  </ul>`
                : ""
            }
          </div>
        `
          )
          .join("")}

        <div class="sheet-section">
          <div class="sheet-section-title" style="display:flex; justify-content:space-between; align-items:center;">
            <span>💻 ตัวอย่างชุดคำสั่งและการตั้งค่าอุปกรณ์เครือข่าย (CLI Reference)</span>
            <button class="btn btn-outline btn-sm no-print" onclick="navigateTo('simulator', {week:${sheet.week}})">
              ทดลองรันคำสั่งนี้ในห้องปฏิบัติการ CLI →
            </button>
          </div>
          <pre class="cli-box">${escapeHtml(ks.cliReference)}</pre>
        </div>

        <div class="sheet-section" style="background:#f0fdf4; border:1px solid #bbf7d0; padding:16px; border-radius:8px;">
          <h4 style="color:#166534; margin-bottom:6px;">✅ สรุปสาระสำคัญประจำสัปดาห์ที่ ${sheet.week}</h4>
          <p>${escapeHtml(ks.summary)}</p>
        </div>

        <div class="no-print" style="display:flex; justify-content:space-between; align-items:center; margin-top:22px; padding-top:16px; border-top:1px solid var(--border); flex-wrap:wrap; gap:10px;">
          <div style="display:flex; gap:8px;">
            ${sheet.week > 1 ? `<button class="btn btn-outline" onclick="selectWeek(${sheet.week - 1})">← ใบความรู้ที่ ${sheet.week - 1}</button>` : ""}
            ${sheet.week < 14 ? `<button class="btn btn-outline" onclick="selectWeek(${sheet.week + 1})">ใบความรู้ที่ ${sheet.week + 1} →</button>` : ""}
          </div>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-accent" onclick="navigateTo('activity', {week:${sheet.week}})">ทำใบกิจกรรมที่ ${sheet.week} ต่อ →</button>
            <button class="btn btn-primary" onclick="navigateTo('jobsheet', {week:${sheet.week}})">เปิดใบงานที่ ${sheet.week} →</button>
          </div>
        </div>
      </div>
    `;
  }

  // ==================== VIEW 4: ใบกิจกรรมที่ 1-14 ====================
  window.saveActivityAnswer = function (week, qNo, val) {
    state.activityAnswers[`w${week}_q${qNo}`] = val;
    saveState();
  };

  window.toggleSuggestedAnswer = function (id) {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = el.style.display === "none" ? "block" : "none";
    }
  };

  function renderActivitySheet() {
    const sheet = getSheetByWeek(state.selectedWeek);
    const act = sheet.activitySheet;

    return `
      ${renderWeekSelectorBar()}
      ${renderSheetQuickSwitchTabs("activity")}

      <div class="sheet-document">
        ${renderOfficialDocHeader("ใบกิจกรรม", act.sheetNo, act.title, sheet)}

        <h2 style="font-size:1.3rem; color:#0f172a; margin-bottom:8px;">${escapeHtml(act.title)}</h2>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px;">
          <span class="badge badge-teal">⏱️ เวลาที่ใช้: ${escapeHtml(act.duration)}</span>
          <span class="badge badge-blue">${escapeHtml(sheet.dutyRef)}</span>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">🏢 สถานการณ์จำลอง / กรณีศึกษาในองค์กร (Case Study Scenario)</div>
          <div style="background:#fffbeb; border:1px solid #fde68a; border-left:5px solid #d97706; padding:16px; border-radius:8px; font-size:0.96rem;">
            ${escapeHtml(act.scenario)}
          </div>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">✍️ คำถามวิเคราะห์และบันทึกผลกิจกรรม (พิมพ์คำตอบเพื่อบันทึกอัตโนมัติ)</div>
          <div style="display:grid; gap:18px;">
            ${act.questions
              .map((q) => {
                const key = `w${sheet.week}_q${q.qNo}`;
                const savedVal = state.activityAnswers[key] || "";
                const ansId = `sug_${key}`;
                return `
                  <div style="border:1px solid var(--border); border-radius:10px; padding:16px; background:#ffffff;">
                    <div style="font-family:'Prompt',sans-serif; font-weight:600; color:#0f172a; margin-bottom:10px;">
                      ${escapeHtml(q.question)}
                    </div>
                    <textarea
                      class="worksheet-textarea"
                      placeholder="พิมพ์คำตอบการวิเคราะห์ของผู้เรียนที่นี่..."
                      oninput="saveActivityAnswer(${sheet.week}, ${q.qNo}, this.value)"
                    >${escapeHtml(savedVal)}</textarea>
                    <div class="no-print" style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:0.78rem; color:#16a34a;">💾 บันทึกคำตอบในระบบอัตโนมัติ</span>
                      <button class="btn btn-outline btn-sm" onclick="toggleSuggestedAnswer('${ansId}')">
                        🔍 ดูแนวคำตอบ / เฉลยการวิเคราะห์
                      </button>
                    </div>
                    <div id="${ansId}" style="display:none; margin-top:10px; background:#f0fdf4; border-left:4px solid #16a34a; padding:12px; border-radius:6px; font-size:0.9rem;">
                      <strong>แนวคำตอบโดย นางสาวศิริกัลยา คำนนท์:</strong><br>
                      <span style="white-space:pre-line;">${escapeHtml(q.suggestedAnswer)}</span>
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>

        <div class="no-print" style="display:flex; justify-content:space-between; margin-top:20px; padding-top:14px; border-top:1px solid var(--border); flex-wrap:wrap; gap:10px;">
          <button class="btn btn-outline" onclick="window.print()">🖨️ พิมพ์ใบกิจกรรมที่ ${sheet.week} ส่งครู</button>
          <button class="btn btn-primary" onclick="navigateTo('jobsheet', {week:${sheet.week}})">ไปที่ใบงานปฏิบัติการที่ ${sheet.week} →</button>
        </div>
      </div>
    `;
  }

  // ==================== VIEW 5: ใบงานที่ 1-14 ====================
  window.toggleJobCheckpoint = function (week, idx, checked) {
    state.jobCheckpoints[`w${week}_c${idx}`] = checked;
    saveState();
  };

  window.saveJobNote = function (week, val) {
    state.jobNotes[`w${week}`] = val;
    saveState();
  };

  function renderJobSheet() {
    const sheet = getSheetByWeek(state.selectedWeek);
    const job = sheet.jobSheet;
    const savedNote = state.jobNotes[`w${sheet.week}`] || "";

    return `
      ${renderWeekSelectorBar()}
      ${renderSheetQuickSwitchTabs("jobsheet")}

      <div class="sheet-document">
        ${renderOfficialDocHeader("ใบงาน", job.sheetNo, job.title, sheet)}

        <h2 style="font-size:1.3rem; color:#0f172a; margin-bottom:8px;">${escapeHtml(job.title)}</h2>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px;">
          <span class="badge badge-purple">🛠️ เวลาปฏิบัติการ: ${escapeHtml(job.duration)}</span>
          <span class="badge badge-blue">${escapeHtml(sheet.dutyRef)}</span>
          <span class="badge badge-teal">มาตรฐานอาชีพ: ${escapeHtml(sheet.standardRef)}</span>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">🧰 เครื่องมือ วัสดุ และอุปกรณ์ที่ใช้ในการปฏิบัติงาน</div>
          <ul style="padding-left:22px; display:grid; gap:6px;">
            ${job.equipment.map((e) => `<li>${escapeHtml(e)}</li>`).join("")}
          </ul>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">🗺️ แผนผังเครือข่ายและข้อกำหนดการตั้งค่า (Network Topology & Addressing)</div>
          <div style="background:#0f172a; color:#38bdf8; padding:16px 18px; border-radius:8px; font-family:'JetBrains Mono',monospace; font-size:0.88rem;">
            ${escapeHtml(job.topology)}
          </div>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">📋 ขั้นตอนการปฏิบัติงาน (Step-by-Step Procedure)</div>
          <div style="display:grid; gap:10px;">
            ${job.steps
              .map(
                (st) => `
              <div style="background:#f8fafc; border:1px solid var(--border); border-left:4px solid #0284c7; padding:12px 16px; border-radius:6px;">
                ${escapeHtml(st)}
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">✅ ตารางตรวจสอบและบันทึกผลการทดสอบการทำงานของเครือข่าย (Interactive Verification Checklist)</div>
          <div style="display:grid; gap:10px; margin-bottom:14px;">
            ${job.checkpoints
              .map((cp, idx) => {
                const isChecked = !!state.jobCheckpoints[`w${sheet.week}_c${idx}`];
                return `
                  <label style="display:flex; align-items:center; gap:12px; padding:12px 14px; border:1px solid var(--border); border-radius:8px; background:${isChecked ? "#f0fdf4" : "#fff"}; cursor:pointer;">
                    <input type="checkbox" style="width:18px; height:18px;" ${isChecked ? "checked" : ""} onchange="toggleJobCheckpoint(${sheet.week}, ${idx}, this.checked)">
                    <span style="font-weight:500;">รายการตรวจที่ ${idx + 1}: ${escapeHtml(cp)}</span>
                    <span class="badge ${isChecked ? "badge-green" : "badge-amber"}" style="margin-left:auto;">
                      ${isChecked ? "ผ่านเกณฑ์" : "รอตรวจสอบ"}
                    </span>
                  </label>
                `;
              })
              .join("")}
          </div>

          <div style="margin-top:12px;">
            <label style="font-family:'Prompt',sans-serif; font-weight:600; font-size:0.9rem; display:block; margin-bottom:6px;">
              📝 บันทึกชุดคำสั่งที่ได้ปฏิบัติจริง / ผลการทดสอบ Ping & Show Commands / ปัญหาและการแก้ไข:
            </label>
            <textarea
              class="worksheet-textarea"
              style="font-family:'JetBrains Mono','Sarabun',monospace; min-height:110px;"
              placeholder="วางชุดคำสั่ง running-config หรือบันทึกผลการทดสอบปฏิบัติการที่นี่..."
              oninput="saveJobNote(${sheet.week}, this.value)"
            >${escapeHtml(savedNote)}</textarea>
          </div>
        </div>

        <div class="sheet-section">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
            <div class="sheet-section-title" style="margin-bottom:0; flex:1;">🔑 แนวทางชุดคำสั่งตั้งค่ามาตรฐาน (Reference Solution CLI)</div>
            <button class="btn btn-outline btn-sm no-print" onclick="toggleSuggestedAnswer('job_sol_${sheet.week}')">
              👁️ แสดง/ซ่อน ชุดคำสั่งเฉลยใบงานที่ ${sheet.week}
            </button>
            <button class="btn btn-secondary btn-sm no-print" onclick="navigateTo('simulator', {week:${sheet.week}})">
              💻 เปิดจำลอง CLI สำหรับใบงานนี้
            </button>
          </div>
          <div id="job_sol_${sheet.week}" style="display:block;">
            <pre class="cli-box">${escapeHtml(job.solutionCli)}</pre>
          </div>
        </div>

        <div class="no-print" style="display:flex; justify-content:space-between; margin-top:20px; padding-top:14px; border-top:1px solid var(--border); flex-wrap:wrap; gap:10px;">
          <button class="btn btn-outline" onclick="window.print()">🖨️ พิมพ์ใบงานที่ ${sheet.week} ส่งครูผู้สอน</button>
          <button class="btn btn-primary" onclick="navigateTo('assignment', {week:${sheet.week}})">ไปที่ใบมอบหมายงานที่ ${sheet.week} →</button>
        </div>
      </div>
    `;
  }

  // ==================== VIEW 6: ใบมอบหมายงานที่ 1-14 ====================
  window.saveAssignmentText = function (week, val) {
    state.assignmentTexts[`w${week}`] = val;
    saveState();
  };

  function renderAssignmentSheet() {
    const sheet = getSheetByWeek(state.selectedWeek);
    const asg = sheet.assignmentSheet;
    const savedText = state.assignmentTexts[`w${sheet.week}`] || "";

    return `
      ${renderWeekSelectorBar()}
      ${renderSheetQuickSwitchTabs("assignment")}

      <div class="sheet-document">
        ${renderOfficialDocHeader("ใบมอบหมายงาน", asg.sheetNo, asg.title, sheet)}

        <h2 style="font-size:1.3rem; color:#0f172a; margin-bottom:8px;">${escapeHtml(asg.title)}</h2>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px;">
          <span class="badge badge-amber">📋 งานมอบหมายประจำสัปดาห์ที่ ${sheet.week}</span>
          <span class="badge badge-blue">${escapeHtml(sheet.dutyRef)}</span>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">📌 รายละเอียดและขอบเขตของงานที่มอบหมาย</div>
          <p style="font-size:0.98rem; background:#f8fafc; padding:16px; border-radius:8px; border:1px solid var(--border);">
            ${escapeHtml(asg.taskDescription)}
          </p>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">📦 ชิ้นงานและเอกสารที่ต้องส่ง (Deliverables)</div>
          <ul style="padding-left:22px; display:grid; gap:8px;">
            ${asg.deliverables.map((d) => `<li>${escapeHtml(d)}</li>`).join("")}
          </ul>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">⚖️ เกณฑ์การประเมินผลชิ้นงาน (Scoring Rubric)</div>
          <div style="background:#f0f9ff; border:1px solid #bae6fd; padding:12px 16px; border-radius:8px; font-weight:600; color:#0369a1;">
            ${escapeHtml(asg.rubric)}
          </div>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-title">📝 พื้นที่จัดทำและบันทึกรายงาน/สคริปต์ส่งงานมอบหมายที่ ${asg.sheetNo}</div>
          <textarea
            class="worksheet-textarea"
            style="min-height:170px;"
            placeholder="พิมพ์รายละเอียดการออกแบบเครือข่าย ตารางจัดสรร IP/VLAN หรือสคริปต์คำสั่งสำหรับส่งงานมอบหมายที่นี่..."
            oninput="saveAssignmentText(${sheet.week}, this.value)"
          >${escapeHtml(savedText)}</textarea>
          <div class="no-print" style="font-size:0.8rem; color:#16a34a; margin-top:6px;">
            💾 ระบบบันทึกข้อมูลลงในเบราว์เซอร์อัตโนมัติ สามารถกดพิมพ์เป็นแบบฟอร์มส่งครูได้ทันที
          </div>
        </div>

        <div class="no-print" style="display:flex; justify-content:space-between; margin-top:20px; padding-top:14px; border-top:1px solid var(--border); flex-wrap:wrap; gap:10px;">
          <button class="btn btn-outline" onclick="window.print()">🖨️ พิมพ์ใบมอบหมายงานที่ ${sheet.week}</button>
          <button class="btn btn-primary" onclick="navigateTo('quizzes', {unit:${sheet.unit}, quizMode:'post'})">
            ทำแบบทดสอบหลังเรียน หน่วยที่ ${sheet.unit} →
          </button>
        </div>
      </div>
    `;
  }

  // ==================== VIEW 7: แบบทดสอบก่อนเรียน-หลังเรียน หน่วยที่ 1-7 ====================
  window.selectQuizUnitAndMode = function (unitNum, mode) {
    state.selectedQuizUnit = Number(unitNum);
    state.selectedQuizMode = mode;
    saveState();
    renderMainView();
  };

  window.submitUnitQuiz = function () {
    const unitNum = state.selectedQuizUnit;
    const mode = state.selectedQuizMode;
    const quizObj = (window.UNIT_QUIZZES || []).find((q) => q.unit === unitNum);
    if (!quizObj) return;

    let correctCount = 0;
    quizObj.questions.forEach((q, idx) => {
      const selected = document.querySelector(`input[name="q_${q.id}"]:checked`);
      const chosenIdx = selected ? Number(selected.value) : -1;
      const expEl = document.getElementById(`exp_${q.id}`);
      if (expEl) expEl.style.display = "block";

      q.options.forEach((_, optIdx) => {
        const lbl = document.getElementById(`lbl_${q.id}_${optIdx}`);
        if (!lbl) return;
        lbl.classList.remove("correct-choice", "wrong-choice");
        if (optIdx === q.answerIndex) {
          lbl.classList.add("correct-choice");
        } else if (optIdx === chosenIdx && chosenIdx !== q.answerIndex) {
          lbl.classList.add("wrong-choice");
        }
      });

      if (chosenIdx === q.answerIndex) {
        correctCount++;
      }
    });

    state.quizScores[mode][unitNum] = {
      score: correctCount,
      total: quizObj.questions.length,
      timestamp: new Date().toLocaleString("th-TH")
    };
    saveState();

    const resultBanner = document.getElementById("quiz-result-banner");
    if (resultBanner) {
      const pct = Math.round((correctCount / quizObj.questions.length) * 100);
      resultBanner.style.display = "block";
      resultBanner.innerHTML = `
        <div style="background:${pct >= 60 ? "#dcfce7" : "#fef3c7"}; border:2px solid ${pct >= 60 ? "#16a34a" : "#d97706"}; border-radius:10px; padding:16px 20px; margin-bottom:18px;">
          <h3 style="color:${pct >= 60 ? "#166534" : "#92400e"}; margin-bottom:4px;">
            🎯 ผลการทำแบบทดสอบ${mode === "pre" ? "ก่อนเรียน (Pre-test)" : "หลังเรียน (Post-test)"} หน่วยที่ ${unitNum}: ได้คะแนน ${correctCount} / ${quizObj.questions.length} (${pct}%)
          </h3>
          <p style="font-size:0.9rem;">
            บันทึกคะแนนเรียบร้อยแล้ว สามารถดูคำอธิบายเฉลยละเอียดของแต่ละข้อด้านล่าง หรือสลับไปทำแบบทดสอบ${mode === "pre" ? "หลังเรียน (Post-test)" : "หน่วยถัดไป"}ได้ทันที
          </p>
        </div>
      `;
      resultBanner.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    updateScoreTableInQuizView();
  };

  function updateScoreTableInQuizView() {
    const container = document.getElementById("quiz-summary-table-body");
    if (!container) return;
    const quizzes = window.UNIT_QUIZZES || [];
    container.innerHTML = quizzes
      .map((q) => {
        const pre = state.quizScores.pre[q.unit];
        const post = state.quizScores.post[q.unit];
        const diff = pre && post ? post.score - pre.score : null;
        return `
          <tr>
            <td><strong>${escapeHtml(q.unitTitle)}</strong></td>
            <td class="text-center">${pre ? `<span class="badge badge-blue">${pre.score}/${pre.total}</span>` : "<span style='color:#94a3b8;'>ยังไม่ทำ</span>"}</td>
            <td class="text-center">${post ? `<span class="badge badge-green">${post.score}/${post.total}</span>` : "<span style='color:#94a3b8;'>ยังไม่ทำ</span>"}</td>
            <td class="text-center">${diff !== null ? `<strong style="color:${diff >= 0 ? "#16a34a" : "#dc2626"};">${diff >= 0 ? `+${diff}` : diff}</strong>` : "–"}</td>
          </tr>
        `;
      })
      .join("");
  }

  function renderQuizzesView() {
    const quizzes = window.UNIT_QUIZZES || [];
    const currentQuiz = quizzes.find((q) => q.unit === state.selectedQuizUnit) || quizzes[0];
    const mode = state.selectedQuizMode;
    const savedScore = state.quizScores[mode][currentQuiz.unit];

    return `
      <div class="card no-print">
        <div class="card-header">
          <div class="card-title">📝 ระบบแบบทดสอบก่อนเรียน (Pre-test) และแบบทดสอบหลังเรียน (Post-test) หน่วยที่ 1 - 7</div>
          <button class="btn btn-outline btn-sm" onclick="window.print()">🖨️ พิมพ์แบบทดสอบ / รายงานผลคะแนน</button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:10px; margin-bottom:16px;">
          ${quizzes
            .map((q) => {
              const pre = state.quizScores.pre[q.unit];
              const post = state.quizScores.post[q.unit];
              return `
                <button
                  class="week-btn ${q.unit === currentQuiz.unit ? "active" : ""}"
                  onclick="selectQuizUnitAndMode(${q.unit}, '${mode}')"
                >
                  <div class="w-num">
                    <span>หน่วยที่ ${q.unit}</span>
                    <span>Pre: ${pre ? `${pre.score}/${pre.total}` : "-"} | Post: ${post ? `${post.score}/${post.total}` : "-"}</span>
                  </div>
                  <div class="w-title">${escapeHtml(q.unitTitle)}</div>
                </button>
              `;
            })
            .join("")}
        </div>

        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <button
            class="btn ${mode === "pre" ? "btn-primary" : "btn-outline"}"
            onclick="selectQuizUnitAndMode(${currentQuiz.unit}, 'pre')"
          >
            📘 แบบทดสอบก่อนเรียน (Pre-test) หน่วยที่ ${currentQuiz.unit}
          </button>
          <button
            class="btn ${mode === "post" ? "btn-accent" : "btn-outline"}"
            onclick="selectQuizUnitAndMode(${currentQuiz.unit}, 'post')"
          >
            📗 แบบทดสอบหลังเรียน (Post-test) หน่วยที่ ${currentQuiz.unit}
          </button>
        </div>
      </div>

      <!-- ตารางเปรียบเทียบคะแนนก่อนเรียน-หลังเรียน -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">📊 ตารางสรุปคะแนนเปรียบเทียบพัฒนาการ ก่อนเรียน (Pre-test) และ หลังเรียน (Post-test)</div>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>หน่วยการเรียนรู้ (หน่วยที่ 1 - 7)</th>
                <th class="text-center" style="width:150px;">คะแนนก่อนเรียน (Pre-test)</th>
                <th class="text-center" style="width:150px;">คะแนนหลังเรียน (Post-test)</th>
                <th class="text-center" style="width:140px;">พัฒนาการ (Gain)</th>
              </tr>
            </thead>
            <tbody id="quiz-summary-table-body"></tbody>
          </table>
        </div>
      </div>

      <!-- ตัวข้อสอบ -->
      <div class="sheet-document">
        <div style="border-bottom:2px solid #0f172a; padding-bottom:14px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div>
            <span class="badge ${mode === "pre" ? "badge-blue" : "badge-green"}" style="font-size:0.85rem; margin-bottom:6px;">
              ${mode === "pre" ? "แบบทดสอบก่อนเรียน (Pre-test)" : "แบบทดสอบหลังเรียน (Post-test)"}
            </span>
            <h2 style="font-size:1.25rem; color:#0f172a;">${escapeHtml(currentQuiz.unitTitle)}</h2>
            <p style="font-size:0.86rem; color:var(--text-muted);">
              รหัสวิชา 31901-2011 การจัดการระบบเครือข่าย • โดย นางสาวศิริกัลยา คำนนท์ วิทยาลัยเทคนิคนครนายก
            </p>
          </div>
          ${
            savedScore
              ? `<div style="background:#f0fdf4; border:1px solid #16a34a; padding:10px 16px; border-radius:8px; text-align:center;">
                  <div style="font-size:0.78rem; color:#166534;">คะแนนล่าสุด</div>
                  <div style="font-size:1.3rem; font-weight:700; color:#15803d;">${savedScore.score} / ${savedScore.total}</div>
                </div>`
              : ""
          }
        </div>

        <div id="quiz-result-banner" style="display:none;"></div>

        <div>
          ${currentQuiz.questions
            .map(
              (q) => `
            <div class="quiz-question-card">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px;">
                <div style="font-family:'Prompt',sans-serif; font-weight:600; color:#0f172a;">
                  ${escapeHtml(q.question)}
                </div>
                <span class="badge badge-purple" style="flex-shrink:0;">พุทธิพิสัย: ${escapeHtml(q.level)}</span>
              </div>
              <div class="quiz-options-list">
                ${q.options
                  .map(
                    (opt, optIdx) => `
                  <label class="quiz-option-label" id="lbl_${q.id}_${optIdx}">
                    <input type="radio" name="q_${q.id}" value="${optIdx}">
                    <span>${escapeHtml(opt)}</span>
                  </label>
                `
                  )
                  .join("")}
              </div>
              <div class="quiz-explanation" id="exp_${q.id}" style="display:none;">
                <strong>💡 เฉลยและคำอธิบาย:</strong> ${escapeHtml(q.explanation)}
              </div>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="no-print" style="display:flex; justify-content:space-between; align-items:center; margin-top:20px; flex-wrap:wrap; gap:10px;">
          <button class="btn btn-primary" style="padding:10px 24px; font-size:0.96rem;" onclick="submitUnitQuiz()">
            ✅ ตรวจคำตอบและบันทึกคะแนน (${mode === "pre" ? "Pre-test" : "Post-test"} หน่วยที่ ${currentQuiz.unit})
          </button>
          <div style="display:flex; gap:8px;">
            ${
              mode === "pre"
                ? `<button class="btn btn-accent" onclick="selectQuizUnitAndMode(${currentQuiz.unit}, 'post')">สลับไปทำแบบทดสอบหลังเรียน (Post-test) →</button>`
                : currentQuiz.unit < 7
                ? `<button class="btn btn-outline" onclick="selectQuizUnitAndMode(${currentQuiz.unit + 1}, 'pre')">ไปยังหน่วยที่ ${currentQuiz.unit + 1} →</button>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  // ==================== VIEW 8: INTERACTIVE NETWORK SIMULATOR & TOOLKIT ====================
  let terminalHistory = [
    "Cisco IOS Software, Nakhon Nayok Technical College Enterprise Network Simulator",
    "Course: 31901-2011 Network Management | Instructor: Ms. Sirikalaya Kamnon",
    "Type 'help' or click any Lab Preset button above to test CLI commands."
  ];
  let terminalHostname = "NYK-CORE-SW1";
  let terminalMode = "#";

  window.runCliCommand = function (cmdText) {
    const inputEl = document.getElementById("cli-cmd-input");
    const raw = (cmdText !== undefined ? cmdText : inputEl ? inputEl.value : "").trim();
    if (!raw) return;
    if (inputEl && cmdText === undefined) inputEl.value = "";

    terminalHistory.push(`${terminalHostname}${terminalMode} ${raw}`);
    const lower = raw.toLowerCase();

    if (lower === "help" || lower === "?") {
      terminalHistory.push(
        "คำสั่งที่รองรับในการจำลอง:",
        "  show vlan brief                  - แสดงตาราง VLAN 10, 20, 30, 99 และพอร์ตสมาชิก",
        "  show interfaces trunk            - แสดงสถานะ 802.1Q Trunk และ Native VLAN",
        "  show ip route                    - แสดงตารางจัดเส้นทาง (Connected, Static, Floating, OSPF)",
        "  show ip dhcp snooping            - แสดงสถานะ DHCP Snooping Trusted/Untrusted Ports",
        "  show spanning-tree               - แสดงสถานะ Rapid-PVST+ Root Bridge และ Loop Guard",
        "  show etherchannel summary        - แสดงสถานะ Link Aggregation Po1(SU) LACP",
        "  show ip nat translations         - แสดงตารางแปลงหมายเลข IP (Static NAT & PAT)",
        "  show access-lists                - แสดงกฎ ACL และจำนวนแพ็กเกจที่ตรงเงื่อนไข (matches)",
        "  show policy-map type inspect     - แสดงสถานะเซสชันของ Zone-Based Firewall",
        "  show crypto ipsec sa             - แสดงสถานะอุโมงค์เข้ารหัส IPsec Site-to-Site VPN",
        "  show policy-map interface        - แสดงสถิติการจัดคิว QoS (LLQ / CBWFQ)",
        "  ping <ip> / traceroute <ip>      - ทดสอบการเชื่อมต่อเครือข่าย",
        "  clear                            - ล้างหน้าจอเทอร์มินัล"
      );
    } else if (lower === "clear") {
      terminalHistory = ["Terminal cleared."];
    } else if (lower === "enable" || lower === "en") {
      terminalMode = "#";
    } else if (lower.startsWith("conf")) {
      terminalMode = "(config)#";
      terminalHistory.push("Enter configuration commands, one per line. End with CNTL/Z.");
    } else if (lower === "end" || lower === "exit") {
      terminalMode = "#";
    } else if (lower.startsWith("hostname ")) {
      terminalHostname = raw.split(/\s+/)[1] || terminalHostname;
    } else if (lower.includes("show vlan")) {
      terminalHistory.push(
        "VLAN Name                             Status    Ports",
        "---- -------------------------------- --------- -------------------------------",
        "1    default                          active    Fa0/16, Fa0/17, Fa0/18",
        "10   IT_DEPT                          active    Fa0/1, Fa0/2, Fa0/3, Fa0/4, Fa0/5",
        "20   HR_DEPT                          active    Fa0/6, Fa0/7, Fa0/8, Fa0/9, Fa0/10",
        "30   ACC_DEPT                         active    Fa0/11, Fa0/12, Fa0/13, Fa0/14, Fa0/15",
        "99   MGMT_NET                         active    Gi0/1, Gi0/2, Po1"
      );
    } else if (lower.includes("show interfaces trunk") || lower.includes("show int trunk")) {
      terminalHistory.push(
        "Port        Mode             Encapsulation  Status        Native vlan",
        "Po1         on               802.1q         trunking      99",
        "",
        "Port        Vlans allowed on trunk",
        "Po1         10,20,30,99",
        "",
        "Port        Vlans in spanning tree forwarding state and not pruned",
        "Po1         10,20,30,99"
      );
    } else if (lower.includes("show ip route")) {
      terminalHistory.push(
        "Codes: C - connected, S - static, O - OSPF, * - candidate default",
        "Gateway of last resort is 203.113.10.1 to network 0.0.0.0",
        "",
        "C    192.168.10.0/24 is directly connected, Vlan10",
        "C    192.168.20.0/24 is directly connected, Vlan20",
        "C    192.168.30.0/24 is directly connected, Vlan30",
        "C    192.168.99.0/24 is directly connected, Vlan99",
        "C    172.16.100.0/24 is directly connected, GigabitEthernet0/2 (DMZ)",
        "S    192.168.50.0/24 [1/0] via 203.113.10.2 (IPsec VPN Branch)",
        "S*   0.0.0.0/0 [1/0] via 203.113.10.1 (WAN1 ISP-Primary - Track 1 Up)",
        "S    0.0.0.0/0 [10/0] via 202.44.20.1 (WAN2 ISP-Backup - Floating Static)"
      );
    } else if (lower.includes("show ip dhcp snooping")) {
      terminalHistory.push(
        "Switch DHCP snooping is enabled",
        "DHCP snooping is configured on following VLANs: 10,20,30",
        "Insertion of option 82 is disabled",
        "Interface                  Trusted    Allow option    Rate limit (pps)",
        "-----------------------    -------    ------------    ----------------",
        "GigabitEthernet0/1         yes        yes             unlimited",
        "Port-channel1              yes        yes             unlimited",
        "FastEthernet0/1            no         no              15",
        "FastEthernet0/2            no         no              15",
        "FastEthernet0/24           no         no              15 (Rogue DHCP Blocked)"
      );
    } else if (lower.includes("show spanning-tree")) {
      terminalHistory.push(
        "VLAN0010",
        "  Spanning tree enabled protocol rstp (Rapid-PVST+)",
        "  Root ID    Priority    24586",
        "             Address     0050.7966.6800",
        "             This bridge is the root",
        "  Loopguard is enabled by default on all point-to-point links",
        "Interface           Role Sts Cost      Prio.Nbr Type",
        "------------------- ---- --- --------- -------- --------------------------------",
        "Po1                 Desg FWD 3         128.56   P2p (EtherChannel 2Gbps)",
        "Fa0/1               Desg FWD 19        128.1    P2p Edge (PortFast+BPDUGuard)"
      );
    } else if (lower.includes("show etherchannel")) {
      terminalHistory.push(
        "Flags:  D - down        P - bundled in port-channel",
        "        I - stand-alone s - suspended",
        "        S - Layer2      R - Layer3",
        "        U - in-use",
        "Number of channel-groups in use: 1",
        "Group  Port-channel  Protocol    Ports",
        "------+-------------+-----------+-----------------------------------------------",
        "1      Po1(SU)         LACP      Gi0/1(P)   Gi0/2(P)"
      );
    } else if (lower.includes("show ip nat")) {
      terminalHistory.push(
        "Pro Inside global         Inside local          Outside local         Outside global",
        "tcp 203.113.10.3:443      172.16.100.10:443     ---                   --- (Static NAT DMZ)",
        "tcp 203.113.10.2:51422    192.168.10.15:51422   142.250.199.14:443    142.250.199.14:443 (PAT)",
        "tcp 203.113.10.2:51423    192.168.20.18:51423   1.1.1.1:53            1.1.1.1:53 (PAT)"
      );
    } else if (lower.includes("show access-lists")) {
      terminalHistory.push(
        "Extended IP access list SECURE_POLICY",
        "    10 permit tcp 192.168.99.0 0.0.0.255 192.168.100.0 0.0.0.255 eq 22 (48 matches)",
        "    20 permit tcp any host 172.16.100.10 eq 443 (1250 matches)",
        "    30 deny ip 192.168.20.0 0.0.0.255 192.168.30.0 0.0.0.255 (14 matches)",
        "    40 permit ip any any (18420 matches)"
      );
    } else if (lower.includes("show crypto ipsec sa") || lower.includes("show crypto isakmp sa")) {
      terminalHistory.push(
        "interface: GigabitEthernet0/1",
        "    Crypto map tag: CMAP_VPN, local addr 203.113.10.2",
        "   protected vrf: (none)",
        "   local  ident (addr/mask/prot/port): (192.168.10.0/255.255.255.0/0/0)",
        "   remote ident (addr/mask/prot/port): (192.168.50.0/255.255.255.0/0/0)",
        "   current_peer 202.44.20.2 port 500",
        "     #pkts encaps: 1284, #pkts encrypt: 1284, #pkts digest: 1284",
        "     #pkts decaps: 1284, #pkts decrypt: 1284, #pkts verify: 1284",
        "     inbound esp sas: spi: 0x3A91C04 (AES-256 + SHA256-HMAC) - ACTIVE"
      );
    } else if (lower.includes("show policy-map")) {
      terminalHistory.push(
        " GigabitEthernet0/1 - Service-policy output: PM_WAN_QOS",
        "    Class-map: CM_VOICE_REALTIME (match-any)",
        "      Priority: 20% (100000 kbps), burst bytes 2500000,Packets matched: 8420, Drops: 0",
        "    Class-map: CM_BUSINESS_APP (match-any)",
        "      Bandwidth: 40% (200000 kbps), Packets matched: 42150, Drops: 0",
        "    Class-map: class-default (match-any)",
        "      Fair-queue: per-flow queue limit 16, Police: 200 Mbps, Conformed: 91200, Exceeded Drops: 312"
      );
    } else if (lower.startsWith("ping ")) {
      const target = raw.split(/\s+/)[1] || "192.168.10.1";
      terminalHistory.push(
        `Type escape sequence to abort.`,
        `Sending 5, 100-byte ICMP Echos to ${target}, timeout is 2 seconds:`,
        `!!!!!`,
        `Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms`
      );
    } else if (lower.startsWith("traceroute ")) {
      const target = raw.split(/\s+/)[1] || "192.168.50.10";
      terminalHistory.push(
        `Tracing the route to ${target}`,
        `  1 192.168.10.1 (NYK-DIST-L3SW) 1 msec 1 msec 1 msec`,
        `  2 10.0.0.1 (NYK-EDGE-R1) 2 msec 2 msec 1 msec`,
        `  3 202.44.20.2 (BRANCH-VPN-PEER) 8 msec 9 msec 8 msec`,
        `  4 ${target} 9 msec 9 msec 8 msec`
      );
    } else {
      terminalHistory.push(`% Command accepted and applied to running-configuration: "${raw}"`);
    }

    const bodyEl = document.getElementById("terminal-output-body");
    if (bodyEl) {
      bodyEl.innerHTML = terminalHistory.map((line) => `<div>${escapeHtml(line)}</div>`).join("");
      bodyEl.scrollTop = bodyEl.scrollHeight;
    }
    const promptEl = document.getElementById("terminal-prompt-label");
    if (promptEl) {
      promptEl.textContent = `${terminalHostname}${terminalMode}`;
    }
  };

  window.simulateTopologyTest = function (scenarioKey) {
    const out = document.getElementById("topo-sim-result");
    if (!out) return;
    const scenarios = {
      intervlan: {
        title: "✅ จำลอง Inter-VLAN Routing + ACL Policy (VLAN 10 IT -> VLAN 30 Account)",
        detail:
          "1) PC แผนกไอที (192.168.10.15) ส่งแพ็กเกจติดแท็ก 802.1Q VLAN 10 ผ่าน Access Switch (Port-channel 1 LACP 2Gbps)\n2) Layer 3 Distribution Switch ถอดแท็ก VLAN 10 ตรวจสอบตาราง Routing (ip routing) และตรวจสอบ ACL (อนุญาต VLAN 10)\n3) สวิตช์สลับแพ็กเกจเข้าสู่ SVI VLAN 30 (192.168.30.1) ส่งถึงเครื่องปลายทาง (192.168.30.20) ด้วยความหน่วง 0.8 ms"
      },
      dhcp_snoop: {
        title: "🛡️ จำลองการป้องกัน Rogue DHCP Attack ด้วย DHCP Snooping",
        detail:
          "1) มีผู้ใช้นำเราเตอร์แปลกปลอมมาเสียบที่พอร์ต Fa0/24 (Untrusted Port) และพยายามส่งแพ็กเกจ DHCP Offer แจก Gateway ปลอม\n2) Access Switch ตรวจพบข้อความ DHCP Offer บนพอร์ต Untrusted จึงสั่ง Drop แพ็กเกจทันทีและบันทึก Syslog: %DHCP_SNOOPING-4-DHCP_SNOOPING_UNTRUSTED_PORT\n3) เครื่องลูกข่ายได้รับ IP ที่ถูกต้องจาก Central DHCP Server ผ่านพอร์ต Uplink Po1 (Trusted Port) เท่านั้น"
      },
      stp_loop: {
        title: "🔄 จำลอง Spanning Tree (Rapid-PVST+), Loop Guard & LACP Failover",
        detail:
          "1) สาย Uplink เส้นที่ 1 ในกลุ่ม LACP Port-channel 1 (Gi0/1) เกิดขัดข้อง\n2) LACP สลับทราฟฟิกทั้งหมดไปวิ่งบนสายเส้นที่ 2 (Gi0/2) ภายในเวลา 0.2 วินาที โดยที่ STP ไม่ต้องคำนวณใหม่และเซสชันไม่หลุด\n3) บนลิงก์สำรองที่มีปัญหาสายไฟเบอร์ส่งทางเดียว (Unidirectional) ฟีเจอร์ Loop Guard ตรวจพบการขาดหายของ BPDU จึงล็อกพอร์ตเป็น loop-inconsistent ป้องกัน Broadcast Storm ได้ 100%"
      },
      vpn_qos: {
        title: "🔐 จำลอง IPsec Site-to-Site VPN + Multi-WAN Failover + QoS LLQ",
        detail:
          "1) ทราฟฟิกจากสำนักงานใหญ่ (192.168.10.0/24) ไปยังสาขา (192.168.50.0/24) ถูกยกเว้นจาก PAT (NAT Exemption) และเข้ารหัสด้วย IPsec ESP (AES-256 + SHA-256)\n2) ทราฟฟิกประชุมทางไกล (DSCP EF) ได้รับการจัดเข้าคิวด่วนพิเศษ LLQ (Priority 20%) ความหน่วงต่ำเพียง 8 ms\n3) เมื่อจำลองลิงก์ WAN 1 ล่ม ฟีเจอร์ IP SLA (Track 1) สั่งสลับทราฟฟิกออกทาง WAN 2 อัตโนมัติภายใน 3 วินาที"
      }
    };
    const s = scenarios[scenarioKey] || scenarios.intervlan;
    out.innerHTML = `
      <div style="background:#0f172a; border:1px solid #38bdf8; border-left:5px solid #38bdf8; padding:14px 16px; border-radius:8px; color:#f8fafc; margin-top:14px;">
        <div style="font-family:'Prompt',sans-serif; font-weight:600; color:#38bdf8; margin-bottom:6px;">${escapeHtml(s.title)}</div>
        <div style="white-space:pre-line; font-size:0.88rem; color:#e2e8f0;">${escapeHtml(s.detail)}</div>
      </div>
    `;
  };

  window.calculateSubnetWildcard = function () {
    const ipInput = (document.getElementById("calc-ip")?.value || "192.168.10.0").trim();
    const cidr = Number(document.getElementById("calc-cidr")?.value || 24);
    const maskInt = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
    const maskOctets = [
      (maskInt >>> 24) & 255,
      (maskInt >>> 16) & 255,
      (maskInt >>> 8) & 255,
      maskInt & 255
    ];
    const wildcardOctets = maskOctets.map((o) => 255 - o);
    const ipParts = ipInput.split(".").map((x) => Number(x) || 0);
    const ipInt =
      (((ipParts[0] & 255) << 24) |
        ((ipParts[1] & 255) << 16) |
        ((ipParts[2] & 255) << 8) |
        (ipParts[3] & 255)) >>>
      0;
    const netInt = (ipInt & maskInt) >>> 0;
    const bcastInt = (netInt | (~maskInt >>> 0)) >>> 0;
    const toIp = (n) => `${(n >>> 24) & 255}.${(n >>> 16) & 255}.${(n >>> 8) & 255}.${n & 255}`;
    const hosts = cidr >= 31 ? (cidr === 32 ? 1 : 2) : Math.pow(2, 32 - cidr) - 2;
    const netStr = toIp(netInt);
    const gwStr = cidr < 31 ? toIp(netInt + 1) : netStr;
    const maskStr = maskOctets.join(".");
    const wcStr = wildcardOctets.join(".");

    const resEl = document.getElementById("calc-result-box");
    if (resEl) {
      resEl.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin-top:12px;">
          <div style="background:#f8fafc; padding:10px 12px; border-radius:6px; border:1px solid var(--border);">
            <div style="font-size:0.78rem; color:var(--text-muted);">Network Address</div>
            <div class="font-mono" style="font-weight:700;">${netStr}/${cidr}</div>
          </div>
          <div style="background:#f8fafc; padding:10px 12px; border-radius:6px; border:1px solid var(--border);">
            <div style="font-size:0.78rem; color:var(--text-muted);">Subnet Mask (สำหรับ VLAN/SVI)</div>
            <div class="font-mono" style="font-weight:700; color:#0284c7;">${maskStr}</div>
          </div>
          <div style="background:#f8fafc; padding:10px 12px; border-radius:6px; border:1px solid var(--border);">
            <div style="font-size:0.78rem; color:var(--text-muted);">Wildcard Mask (สำหรับ ACL/OSPF)</div>
            <div class="font-mono" style="font-weight:700; color:#d97706;">${wcStr}</div>
          </div>
          <div style="background:#f8fafc; padding:10px 12px; border-radius:6px; border:1px solid var(--border);">
            <div style="font-size:0.78rem; color:var(--text-muted);">Broadcast / จำนวน Host</div>
            <div class="font-mono" style="font-weight:700;">${toIp(bcastInt)} (${hosts.toLocaleString()} hosts)</div>
          </div>
        </div>
        <pre class="cli-box" style="margin-top:10px;">! ตัวอย่างคำสั่ง SVI และ ACL ที่สร้างจากค่าที่คำนวณได้:
interface vlan 10
 ip address ${gwStr} ${maskStr}
access-list 100 permit ip ${netStr} ${wcStr} any</pre>
      `;
    }
  };

  window.addBomItem = function () {
    const name = document.getElementById("bom-name")?.value.trim();
    const brand = document.getElementById("bom-brand")?.value.trim();
    const qty = Number(document.getElementById("bom-qty")?.value || 1);
    const purpose = document.getElementById("bom-purpose")?.value.trim();
    if (!name) return;
    state.bomItems.push({
      name,
      brand: brand || "Enterprise Standard",
      qty,
      unit: "ชุด/เครื่อง",
      purpose: purpose || "ใช้งานในระบบเครือข่ายองค์กร"
    });
    saveState();
    renderMainView();
  };

  function renderSimulatorView() {
    return `
      <!-- 1. Interactive Enterprise Topology & Packet Flow Simulator -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">🌐 แผนผังเครือข่ายองค์กรเชิงโต้ตอบ (Interactive Enterprise Network Topology & Packet Flow)</div>
            <div style="font-size:0.85rem; color:var(--text-muted);">
              คลิกปุ่มจำลองสถานการณ์ด้านล่างเพื่อตรวจสอบการทำงานของ VLAN, DHCP Snooping, RSTP/Loop Guard, LACP, Firewall DMZ, VPN และ Multi-WAN QoS
            </div>
          </div>
        </div>

        <div class="topology-canvas">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; padding-bottom:12px; border-bottom:1px solid #334155;">
            <div style="font-family:'Prompt',sans-serif; font-weight:600; color:#38bdf8;">
              🏢 แผนผังเครือข่าย: วิทยาลัยเทคนิคนครนายก (Enterprise Network Architecture - 31901-2011)
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button class="btn btn-primary btn-sm" onclick="simulateTopologyTest('intervlan')">▶️ ทดสอบ Inter-VLAN & ACL</button>
              <button class="btn btn-accent btn-sm" onclick="simulateTopologyTest('dhcp_snoop')">🛡️ ทดสอบ DHCP Snooping</button>
              <button class="btn btn-secondary btn-sm" onclick="simulateTopologyTest('stp_loop')">🔄 ทดสอบ STP Loop Guard & LACP</button>
              <button class="btn btn-outline btn-sm" style="color:#fff; border-color:#475569;" onclick="simulateTopologyTest('vpn_qos')">🔐 ทดสอบ IPsec VPN & Multi-WAN QoS</button>
            </div>
          </div>

          <div class="topo-node-grid">
            <div class="topo-device-card" onclick="runCliCommand('show ip route')">
              <div style="font-size:0.76rem; color:#38bdf8; font-weight:600;">WAN / EDGE LAYER</div>
              <div style="font-family:'Prompt',sans-serif; font-weight:700; margin:2px 0;">🌍 Multi-WAN Edge Router</div>
              <div style="font-size:0.8rem; color:#cbd5e1;">WAN1: 203.113.10.2 (ISP1)<br>WAN2: 202.44.20.2 (ISP2)<br>NAT/PAT + IPsec VPN + QoS</div>
            </div>
            <div class="topo-device-card" onclick="runCliCommand('show access-lists')">
              <div style="font-size:0.76rem; color:#f87171; font-weight:600;">SECURITY & DMZ LAYER</div>
              <div style="font-family:'Prompt',sans-serif; font-weight:700; margin:2px 0;">🔥 Zone-Based Firewall</div>
              <div style="font-size:0.8rem; color:#cbd5e1;">INSIDE: 192.168.0.0/16<br>DMZ: 172.16.100.0/24 (Web)<br>Stateful Inspect + ACL</div>
            </div>
            <div class="topo-device-card" onclick="runCliCommand('show etherchannel summary')">
              <div style="font-size:0.76rem; color:#4ade80; font-weight:600;">CORE / DISTRIBUTION LAYER</div>
              <div style="font-family:'Prompt',sans-serif; font-weight:700; margin:2px 0;">⚡ Layer 3 Switch (SVI)</div>
              <div style="font-size:0.8rem; color:#cbd5e1;">SVI VLAN 10, 20, 30, 99<br>RSTP Root Bridge Primary<br>LACP Port-channel 1 (2Gbps)</div>
            </div>
            <div class="topo-device-card" onclick="runCliCommand('show ip dhcp snooping')">
              <div style="font-size:0.76rem; color:#fbbf24; font-weight:600;">ACCESS LAYER</div>
              <div style="font-family:'Prompt',sans-serif; font-weight:700; margin:2px 0;">🔌 Managed Access Switches</div>
              <div style="font-size:0.8rem; color:#cbd5e1;">802.1Q Trunk + Loop Guard<br>DHCP Snooping (Rate Limit 15)<br>PortFast + BPDU Guard</div>
            </div>
          </div>

          <div id="topo-sim-result"></div>
        </div>
      </div>

      <!-- 2. Interactive CLI Terminal Simulator -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">💻 ห้องปฏิบัติการจำลองคำสั่งเครือข่าย (Interactive Network CLI Terminal)</div>
            <div style="font-size:0.85rem; color:var(--text-muted);">
              คลิกปุ่มคำสั่งลัดหรือพิมพ์คำสั่ง IOS CLI ด้านล่างเพื่อตรวจสอบการทำงานของอุปกรณ์เครือข่ายครบทั้ง 7 หน่วยการเรียนรู้
            </div>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            <button class="btn btn-outline btn-sm" onclick="runCliCommand('show vlan brief')">show vlan brief</button>
            <button class="btn btn-outline btn-sm" onclick="runCliCommand('show interfaces trunk')">show int trunk</button>
            <button class="btn btn-outline btn-sm" onclick="runCliCommand('show ip route')">show ip route</button>
            <button class="btn btn-outline btn-sm" onclick="runCliCommand('show ip dhcp snooping')">show ip dhcp snooping</button>
            <button class="btn btn-outline btn-sm" onclick="runCliCommand('show spanning-tree')">show spanning-tree</button>
            <button class="btn btn-outline btn-sm" onclick="runCliCommand('show etherchannel summary')">show etherchannel</button>
            <button class="btn btn-outline btn-sm" onclick="runCliCommand('show ip nat translations')">show ip nat</button>
            <button class="btn btn-outline btn-sm" onclick="runCliCommand('show access-lists')">show access-lists</button>
            <button class="btn btn-outline btn-sm" onclick="runCliCommand('show crypto ipsec sa')">show crypto ipsec sa</button>
            <button class="btn btn-outline btn-sm" onclick="runCliCommand('show policy-map interface')">show policy-map</button>
          </div>
        </div>

        <div class="terminal-window">
          <div class="terminal-topbar">
            <div class="terminal-dots">
              <span class="terminal-dot" style="background:#ef4444;"></span>
              <span class="terminal-dot" style="background:#f59e0b;"></span>
              <span class="terminal-dot" style="background:#22c55e;"></span>
            </div>
            <span>Console Session — NYK-CORE-SW1 (31901-2011 Network Management Lab)</span>
            <button class="btn btn-sm" style="background:#334155; color:#fff; padding:2px 8px;" onclick="runCliCommand('clear')">Clear</button>
          </div>
          <div class="terminal-body" id="terminal-output-body">
            ${terminalHistory.map((line) => `<div>${escapeHtml(line)}</div>`).join("")}
          </div>
          <div class="terminal-input-row">
            <span class="terminal-prompt-text" id="terminal-prompt-label">${escapeHtml(terminalHostname + terminalMode)}</span>
            <input
              type="text"
              id="cli-cmd-input"
              class="terminal-cmd-input"
              placeholder="พิมพ์คำสั่ง เช่น show vlan brief, show ip route, ping 192.168.50.10 แล้วกด Enter..."
              onkeydown="if(event.key==='Enter') runCliCommand()"
            >
            <button class="btn btn-primary btn-sm" onclick="runCliCommand()">รันคำสั่ง</button>
          </div>
        </div>
      </div>

      <!-- 3. Subnet & Wildcard Mask Calculator + Network BOM Generator -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(420px, 1fr)); gap:20px;">
        <div class="card">
          <div class="card-header">
            <div class="card-title">🧮 เครื่องคำนวณ Subnet Mask & Wildcard Mask (สำหรับ VLAN & ACL)</div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 140px auto; gap:10px; align-items:end;">
            <div>
              <label style="font-size:0.84rem; font-weight:600;">หมายเลข IP / Network Address</label>
              <input type="text" id="calc-ip" class="worksheet-input font-mono" value="192.168.10.0">
            </div>
            <div>
              <label style="font-size:0.84rem; font-weight:600;">Prefix (/CIDR)</label>
              <select id="calc-cidr" class="worksheet-input font-mono" onchange="calculateSubnetWildcard()">
                ${[16, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32]
                  .map((p) => `<option value="${p}" ${p === 24 ? "selected" : ""}>/${p}</option>`)
                  .join("")}
              </select>
            </div>
            <button class="btn btn-primary" onclick="calculateSubnetWildcard()">คำนวณ</button>
          </div>
          <div id="calc-result-box"></div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-title">📦 ตารางสรุปรายการวัสดุอุปกรณ์เครือข่ายและอุปกรณ์สำรอง (BOM & Spare Parts)</div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr 80px; gap:8px; margin-bottom:8px;" class="no-print">
            <input type="text" id="bom-name" class="worksheet-input" placeholder="ชื่อวัสดุ/อุปกรณ์เครือข่าย">
            <input type="text" id="bom-brand" class="worksheet-input" placeholder="ยี่ห้อ / รุ่น (Brand/Model)">
            <input type="number" id="bom-qty" class="worksheet-input" value="1" min="1">
          </div>
          <div style="display:flex; gap:8px; margin-bottom:12px;" class="no-print">
            <input type="text" id="bom-purpose" class="worksheet-input" placeholder="หน้าที่การใช้งาน / แผนสำรองอุปกรณ์">
            <button class="btn btn-accent" style="white-space:nowrap;" onclick="addBomItem()">+ เพิ่มรายการ</button>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>ชื่อวัสดุและอุปกรณ์</th>
                  <th>ยี่ห้อ / รุ่น</th>
                  <th class="text-center">จำนวน</th>
                  <th>การใช้งาน / แผนสำรอง</th>
                </tr>
              </thead>
              <tbody>
                ${state.bomItems
                  .map(
                    (item) => `
                  <tr>
                    <td><strong>${escapeHtml(item.name)}</strong></td>
                    <td>${escapeHtml(item.brand)}</td>
                    <td class="text-center">${item.qty}</td>
                    <td>${escapeHtml(item.purpose)}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  function renderMainView() {
    const container = document.getElementById("main-content-container");
    if (!container) return;

    switch (state.currentView) {
      case "curriculum":
        container.innerHTML = renderCurriculum();
        break;
      case "knowledge":
        container.innerHTML = renderKnowledgeSheet();
        break;
      case "activity":
        container.innerHTML = renderActivitySheet();
        break;
      case "jobsheet":
        container.innerHTML = renderJobSheet();
        break;
      case "assignment":
        container.innerHTML = renderAssignmentSheet();
        break;
      case "quizzes":
        container.innerHTML = renderQuizzesView();
        updateScoreTableInQuizView();
        break;
      case "simulator":
        container.innerHTML = renderSimulatorView();
        calculateSubnetWildcard();
        simulateTopologyTest("intervlan");
        break;
      case "dashboard":
      default:
        container.innerHTML = renderDashboard();
        break;
    }
  }

  window.updateStudentProfile = function () {
    const nameEl = document.getElementById("student-name-input");
    if (nameEl) {
      state.studentName = nameEl.value;
      saveState();
    }
  };

  function renderOdometerDigits(countNum) {
    const odoEl = document.getElementById("visitor-odometer");
    if (!odoEl) return;
    const str = String(Math.max(1, countNum)).padStart(6, "0");
    odoEl.innerHTML = str
      .split("")
      .map((ch) => `<span class="odo-digit">${escapeHtml(ch)}</span>`)
      .join("");
  }

  function initVisitorCounter() {
    const COUNTER_KEY = "LMS_31901_2011_VISITOR_STATS";
    const todayKey = new Date().toISOString().slice(0, 10);
    let vStats = {
      totalVisits: 1250,
      userSessions: 0,
      dailyDate: todayKey,
      todayCount: 18
    };

    try {
      const raw = localStorage.getItem(COUNTER_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        vStats = Object.assign(vStats, parsed);
      }
    } catch (e) {}

    if (vStats.dailyDate !== todayKey) {
      vStats.dailyDate = todayKey;
      vStats.todayCount = 12;
    }

    // Increment on each new page load / session
    if (!sessionStorage.getItem("LMS_31901_2011_SESSION_COUNTED")) {
      vStats.totalVisits += 1;
      vStats.userSessions += 1;
      vStats.todayCount += 1;
      sessionStorage.setItem("LMS_31901_2011_SESSION_COUNTED", "1");
    } else if (vStats.userSessions === 0) {
      vStats.userSessions = 1;
    }

    try {
      localStorage.setItem(COUNTER_KEY, JSON.stringify(vStats));
    } catch (e) {}

    renderOdometerDigits(vStats.totalVisits);

    const todayEl = document.getElementById("visitor-today-count");
    if (todayEl) todayEl.textContent = vStats.todayCount.toLocaleString();

    const userEl = document.getElementById("visitor-user-sessions");
    if (userEl) userEl.textContent = vStats.userSessions.toLocaleString();

    const onlineEl = document.getElementById("visitor-online-now");
    if (onlineEl) {
      const simulatedOnline = Math.max(1, (new Date().getMinutes() % 5) + 2);
      onlineEl.textContent = String(simulatedOnline);
    }

    const lastTimeEl = document.getElementById("visitor-last-time");
    if (lastTimeEl) {
      lastTimeEl.textContent = new Date().toLocaleString("th-TH", {
        dateStyle: "medium",
        timeStyle: "short"
      });
    }

    // Also sync with global online counter API if network is available
    fetch("https://api.counterapi.dev/v1/lms-31901-2011-nyk/visits/up")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.count === "number") {
          const globalTotal = Math.max(vStats.totalVisits, 1250 + data.count);
          vStats.totalVisits = globalTotal;
          try {
            localStorage.setItem(COUNTER_KEY, JSON.stringify(vStats));
          } catch (e) {}
          renderOdometerDigits(globalTotal);
        }
      })
      .catch(() => {
        // Offline or blocked: local counter already rendered cleanly
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const nameEl = document.getElementById("student-name-input");
    if (nameEl) {
      nameEl.value = state.studentName || "";
    }
    updateSidebarBadges();
    renderActiveNav();
    renderMainView();
    initVisitorCounter();
  });
})();
