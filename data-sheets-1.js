window.LEARNING_SHEETS_PART1 = [
  {
    week: 1,
    unit: 1,
    unitTitle: "หน่วยที่ 1 หลักการบริหารจัดการระบบเครือข่ายและการเลือกใช้อุปกรณ์",
    weekTitle: "ปฐมนิเทศและหลักการบริหารจัดการระบบเครือข่ายคอมพิวเตอร์",
    dutyRef: "งานหลัก 1 จัดหาและเลือกใช้อุปกรณ์เครือข่าย (งานย่อย 1.1)",
    standardRef: "มาตรฐานอาชีพ สถาบันคุณวุฒิวิชาชีพ อาชีพช่างสนับสนุนด้านเทคนิค ระดับ 4 และ รหัส 40104 ระดับ 5",
    knowledgeSheet: {
      sheetNo: 1,
      title: "ใบความรู้ที่ 1 : ปฐมนิเทศรายวิชาและหลักการบริหารจัดการระบบเครือข่ายคอมพิวเตอร์ตามหลักการออกแบบ",
      objectives: [
        "1. อธิบายโครงสร้างรายวิชา ผลลัพธ์การเรียนรู้ และมาตรฐานอาชีพช่างสนับสนุนด้านเทคนิค ระดับ 4-5 ได้",
        "2. อธิบายกรอบการบริหารจัดการเครือข่ายตามมาตรฐาน ISO FCAPS Model ได้อย่างถูกต้อง",
        "3. จำแนกสถาปัตยกรรมการออกแบบเครือข่ายองค์กรแบบลำดับชั้น (Three-Tier Hierarchical Network Design) ได้"
      ],
      overview:
        "การจัดการระบบเครือข่าย (Network Management) คือกระบวนการวางแผน กำหนดค่า ตรวจสอบ ควบคุม และบำรุงรักษาทรัพยากรเครือข่ายทั้งฮาร์ดแวร์และซอฟต์แวร์ เพื่อให้ระบบเครือข่ายขององค์กรทำงานได้อย่างมีเสถียรภาพ (High Availability) ปลอดภัย (Security) และรองรับการขยายตัวในอนาคต (Scalability) โดยสอดคล้องกับมาตรฐานอาชีพสถาบันคุณวุฒิวิชาชีพ (TPQI) รหัส 40104 อาชีพช่างสนับสนุนด้านเทคนิค ระดับ 5",
      sections: [
        {
          heading: "1. กรอบการบริหารจัดการระบบเครือข่ายตามมาตรฐาน ISO (FCAPS Model)",
          content:
            "องค์การมาตรฐานสากล (ISO) ได้กำหนดโมเดลมาตรฐานสำหรับการบริหารจัดการระบบเครือข่ายไว้ 5 ด้านหลัก เรียกว่า FCAPS ได้แก่:",
          bullets: [
            "F - Fault Management (การจัดการข้อผิดพลาด): การตรวจจับ แจ้งเตือน วินิจฉัย และแก้ไขปัญหาเมื่ออุปกรณ์หรือลิงก์เกิดการขัดข้อง เช่น การใช้ SNMP Trap และ Syslog",
            "C - Configuration Management (การจัดการค่าคอนฟิก): การตั้งค่าอุปกรณ์ การจัดเก็บไฟล์สำรองคอนฟิก (Backup/Restore) และการควบคุมเวอร์ชันของการตั้งค่าเครือข่าย",
            "A - Accounting Management (การจัดการบัญชีและทรัพยากร): การติดตามและบันทึกปริมาณการใช้งานเครือข่ายของแต่ละแผนกหรือผู้ใช้ เพื่อวางแผนจัดสรรทรัพยากร",
            "P - Performance Management (การจัดการประสิทธิภาพ): การวัดผลแบนด์วิดท์ (Throughput), ความหน่วง (Latency), Jitter และ Packet Loss รวมถึงการทำ QoS และ Load Balance",
            "S - Security Management (การจัดการความปลอดภัย): การควบคุมสิทธิ์การเข้าถึง การตั้งค่า Firewall, ACL, NAT, DHCP Snooping และการเชื่อมต่อระยะไกลด้วย VPN"
          ]
        },
        {
          heading: "2. หลักการออกแบบเครือข่ายองค์กรแบบลำดับชั้น (Hierarchical Network Design)",
          content:
            "การออกแบบเครือข่ายในองค์กรสมัยใหม่แบ่งโครงสร้างออกเป็น 3 ลำดับชั้น (Three-Tier Architecture) เพื่อให้ง่ายต่อการบริหารจัดการและลดผลกระทบเมื่อเกิดจุดเสีย:",
          bullets: [
            "1) Access Layer (ชั้นการเข้าถึง): เชื่อมต่อกับอุปกรณ์ปลายทาง (End Devices) เช่น PC, IP Phone, Access Point ทำหน้าที่แบ่ง VLAN, Port Security, DHCP Snooping และ PoE",
            "2) Distribution Layer (ชั้นกระจายสัญญาณ): รวบรวมการเชื่อมต่อจาก Access Switch ทำหน้าที่ Inter-VLAN Routing, การกรองทราฟฟิกด้วย ACL, การทำ QoS และ Redundancy (STP/LACP)",
            "3) Core Layer (ชั้นแกนหลัก): หัวใจหลักของเครือข่ายที่ต้องการความเร็วในการสวิตชิ่งและเราติ้งสูงสุด (High-Speed Backbone) เชื่อมต่อไปยัง Server Farm, Firewall และ Edge Router ออกสู่อินเทอร์เน็ต"
          ]
        },
        {
          heading: "3. มาตรฐานอาชีพช่างสนับสนุนด้านเทคนิค (TPQI ระดับ 4 และ รหัส 40104 ระดับ 5)",
          content:
            "ผู้เรียนในรายวิชา 31901-2011 จะได้ฝึกปฏิบัติให้ครอบคลุมสมรรถนะย่อยของมาตรฐานอาชีพ ได้แก่ 40104.01 การกำหนดค่าระบบเครือข่ายระดับ Layer 2/Layer 3 (VLAN, Routing, DHCP), 40104.02 การกำหนดค่าความปลอดภัยและการเชื่อมต่อระยะไกล (Firewall, ACL, VPN) และ 40104.03 การบำรุงรักษาและจัดทำรายงานระบบเครือข่าย"
        }
      ],
      cliReference: `! ตัวอย่างคำสั่งพื้นฐานในการตั้งชื่ออุปกรณ์และตรวจสอบสถานะเบื้องต้น (Cisco IOS)
Switch> enable
Switch# configure terminal
Switch(config)# hostname NYK-ACC-SW01
NYK-ACC-SW01(config)# banner motd # Authorized Access Only - Nakhon Nayok Technical College #
NYK-ACC-SW01(config)# service password-encryption
NYK-ACC-SW01(config)# end
NYK-ACC-SW01# show version
NYK-ACC-SW01# show ip interface brief`,
      summary:
        "ผู้ดูแลระบบเครือข่ายมืออาชีพต้องเข้าใจทั้งหลักการ FCAPS Model และสถาปัตยกรรมเครือข่ายแบบ 3 ลำดับชั้น (Access, Distribution, Core) เพื่อให้สามารถออกแบบ ตั้งค่า และแก้ไขปัญหาเครือข่ายในองค์กรได้อย่างเป็นระบบ"
    },
    activitySheet: {
      sheetNo: 1,
      title: "ใบกิจกรรมที่ 1 : วิเคราะห์ปัญหาเครือข่ายองค์กรตามกรอบ FCAPS และลำดับชั้นเครือข่าย",
      duration: "60 นาที",
      scenario:
        "กรณีศึกษา: วิทยาลัยแห่งหนึ่งมีอาคารเรียน 4 อาคาร ปัจจุบันเชื่อมต่อสวิตช์ทุกตัวต่อพ่วงกันแบบ Daisy-Chain โดยไม่มีการแบ่งลำดับชั้น และไม่มีการบันทึกค่าคอนฟิก เมื่อสวิตช์ตัวหนึ่งในอาคาร 2 ค้าง ส่งผลให้อินเทอร์เน็ตทั้งวิทยาลัยใช้งานไม่ได้ และใช้เวลาหาจุดเสียนานกว่า 4 ชั่วโมง",
      questions: [
        {
          qNo: 1,
          question: "1. จากกรณีศึกษา ปัญหาที่เกิดขึ้นเกี่ยวข้องกับองค์ประกอบใดใน FCAPS Model บ้าง จงวิเคราะห์พร้อมยกเหตุผลประกอบ",
          suggestedAnswer:
            "เกี่ยวข้องกับ 1) Fault Management (ขาดระบบตรวจจับและระบุตำแหน่งอุปกรณ์ที่เสียอย่างรวดเร็ว) 2) Configuration Management (ไม่มีการจัดทำผังและสำรองค่าคอนฟิก) และ 3) Performance Management (การต่อพ่วงแบบ Daisy-Chain ทำให้เกิดคอขวดและ Broadcast กระจายทั่วเครือข่าย)"
        },
        {
          qNo: 2,
          question: "2. หากต้องปรับปรุงโครงสร้างเครือข่ายตามหลัก Three-Tier Hierarchical Design ควรจัดวางสวิตช์ในแต่ละอาคารอย่างไร",
          suggestedAnswer:
            "แยกสวิตช์เป็น 3 ชั้น ได้แก่ 1) Core Switch ที่ศูนย์ข้อมูลกลาง 2) Distribution Switch ประจำแต่ละอาคาร เชื่อมต่อเข้าหา Core ด้วยไฟเบอร์ออปติกแบบมีเส้นทางสำรอง และ 3) Access Switch ประจำแต่ละชั้น/ห้องเรียน เชื่อมเข้าหา Distribution Switch ของอาคารตนเอง"
        },
        {
          qNo: 3,
          question: "3. จงระบุคุณลักษณะและเจตคติที่สำคัญของช่างสนับสนุนด้านเทคนิค ระดับ 5 ในการปฏิบัติงานดูแลเครือข่ายองค์กร",
          suggestedAnswer:
            "ต้องมีความละเอียดรอบคอบในการตรวจสอบการตั้งค่า มีความรับผิดชอบต่อความปลอดภัยของข้อมูลองค์กร สื่อสารและจัดทำเอกสารแผนผังเครือข่ายให้ทีมเข้าใจตรงกัน และทำงานร่วมกันเป็นทีมได้อย่างมีประสิทธิภาพ"
        }
      ]
    },
    jobSheet: {
      sheetNo: 1,
      title: "ใบงานที่ 1 : การสำรวจแผนผังเครือข่ายและการตั้งค่าพื้นฐานอุปกรณ์เครือข่าย (Initial Device Configuration)",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. เครื่องคอมพิวเตอร์พร้อมโปรแกรมจำลองเครือข่าย (Cisco Packet Tracer / GNS3 / EVE-NG) หรืออุปกรณ์จริง 1 ชุด",
        "2. สวิตช์ระดับจัดการได้ (Managed Switch Layer 2/3) จำนวน 2 เครื่อง และเราเตอร์ จำนวน 1 เครื่อง",
        "3. สาย Console (RJ45 to DB9/USB) และสาย UTP Cat6"
      ],
      topology:
        "เชื่อมต่อ PC-Admin เข้ากับพอร์ต Console ของ Router (NYK-CORE-R1) และ Switch (NYK-DIST-SW1, NYK-ACC-SW1) โดยกำหนด Management IP ของ Switch ที่ 192.168.1.2/24 และ Gateway ที่ 192.168.1.1/24",
      steps: [
        "ขั้นที่ 1: วาดแผนผังเครือข่ายแบบ Hierarchical (Core Router -> Distribution Switch -> Access Switch -> End Devices)",
        "ขั้นที่ 2: เชื่อมต่อสาย Console เข้ากับสวิตช์และเราเตอร์ เปิดโปรแกรม Terminal (9600 bps, 8-N-1)",
        "ขั้นที่ 3: ตั้งชื่ออุปกรณ์ (Hostname), รหัสผ่านเข้าใช้งาน (Enable Secret, Console, VTY SSH) และข้อความแจ้งเตือน (Banner MOTD)",
        "ขั้นที่ 4: กำหนดหมายเลข IP สำหรับบริหารจัดการ (Management SVI VLAN 1 เบื้องต้น) และ Default Gateway บนสวิตช์",
        "ขั้นที่ 5: บันทึกค่าคอนฟิกลงใน NVRAM (copy running-config startup-config) และทดสอบการ Ping ระหว่างอุปกรณ์"
      ],
      checkpoints: [
        "ตั้งค่า Hostname, Enable Secret และเข้ารหัสรหัสผ่านด้วย service password-encryption สำเร็จ",
        "กำหนด IP Address บนอินเทอร์เฟซบริหารจัดการและตั้งค่า Default Gateway ถูกต้อง",
        "ทดสอบ Ping จากสวิตช์ไปยังเราเตอร์ (192.168.1.1) สำเร็จ 100%",
        "บันทึกไฟล์คอนฟิกและตรวจสอบด้วยคำสั่ง show running-config และ show startup-config"
      ],
      solutionCli: `enable
configure terminal
hostname NYK-ACC-SW1
enable secret Nyk@Admin2567
service password-encryption
no ip domain-lookup
interface vlan 1
 ip address 192.168.1.2 255.255.255.0
 no shutdown
exit
ip default-gateway 192.168.1.1
line con 0
 password Console@123
 login
 logging synchronous
exit
end
copy running-config startup-config`
    },
    assignmentSheet: {
      sheetNo: 1,
      title: "ใบมอบหมายงานที่ 1 : สำรวจและจัดทำผังโครงสร้างเครือข่าย (Network Topology Diagram) ของหน่วยงาน",
      taskDescription:
        "ให้ผู้เรียนสำรวจระบบเครือข่ายในห้องปฏิบัติการคอมพิวเตอร์หรืออาคารเรียนของแผนกวิชาเทคโนโลยีสารสนเทศ แล้วเขียนแผนผังเครือข่ายทั้งแบบกายภาพ (Physical Topology) และแบบตรรกะ (Logical Topology) พร้อมระบุบทบาทของอุปกรณ์แต่ละตัวตามโมเดล Core / Distribution / Access",
      deliverables: [
        "1. แผนผัง Physical & Logical Topology (วาดด้วย Draw.io / Visio หรือเครื่องมือในเว็บแอปนี้)",
        "2. ตารางสรุปบทบาทหน้าที่ของอุปกรณ์เครือข่ายในห้องปฏิบัติการตามกรอบ FCAPS"
      ],
      rubric: "ความถูกต้องของแผนผัง 4 คะแนน | การจำแนกลำดับชั้นอุปกรณ์ 3 คะแนน | ความเรียบร้อยและตรงเวลา 3 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 2,
    unit: 1,
    unitTitle: "หน่วยที่ 1 หลักการบริหารจัดการระบบเครือข่ายและการเลือกใช้อุปกรณ์",
    weekTitle: "คุณสมบัติของอุปกรณ์เครือข่ายและการเลือกใช้เครื่องมือ",
    dutyRef: "งานหลัก 1 จัดหาและเลือกใช้อุปกรณ์เครือข่าย (งานย่อย 1.1 ตรวจสอบคุณสมบัติและจัดหาอุปกรณ์เครือข่าย)",
    standardRef: "มาตรฐานอาชีพ สถาบันคุณวุฒิวิชาชีพ อาชีพช่างสนับสนุนด้านเทคนิค ระดับ 4-5",
    knowledgeSheet: {
      sheetNo: 2,
      title: "ใบความรู้ที่ 2 : คุณสมบัติของอุปกรณ์เครือข่าย เกณฑ์การจัดหา และการเลือกใช้เครื่องมือ",
      objectives: [
        "1. จำแนกประเภทและคุณสมบัติทางเทคนิคของอุปกรณ์เครือข่าย (Switch L2/L3, Router, Firewall, Access Point, Transceiver) ได้",
        "2. เลือกใช้เครื่องมือติดตั้งและตรวจสอบระบบเครือข่ายให้เหมาะสมกับชนิดของสายสัญญาณและอุปกรณ์ได้",
        "3. จัดทำตารางสรุปรายการวัสดุและอุปกรณ์เครือข่าย (BOM / BOQ) ที่ระบุชื่อ ยี่ห้อ/รุ่น คุณสมบัติ และจำนวนได้"
      ],
      overview:
        "การจัดหาและเลือกใช้อุปกรณ์เครือข่ายให้เหมาะสมกับขนาดและความต้องการขององค์กร เป็นงานหลักลำดับแรกของผู้ดูแลระบบเครือข่าย หากเลือกอุปกรณ์ที่มี Switching Capacity หรือ Forwarding Rate ต่ำกว่าปริมาณทราฟฟิกจริง จะทำให้เครือข่ายเกิดคอขวด ในทางกลับกันหากเลือกเกินความจำเป็นจะทำให้สิ้นเปลืองงบประมาณ",
      sections: [
        {
          heading: "1. ประเภทและคุณสมบัติสำคัญของอุปกรณ์เครือข่ายระดับองค์กร",
          content: "ในการอ่านใบกำหนดคุณสมบัติทางเทคนิค (Datasheet / Specification) ต้องพิจารณาพารามิเตอร์หลักดังนี้:",
          bullets: [
            "Managed Switch (Layer 2 / Layer 3): พิจารณาจำนวนพอร์ต (24/48 Ports Gigabit/Multi-Gigabit), พอร์ต Uplink (SFP+ 10Gbps), Switching Capacity (Gbps), Forwarding Rate (Mpps), ขนาด MAC Address Table, มาตรฐาน PoE+ (802.3at) / PoE++ (802.3bt) และกำลังไฟรวม (PoE Budget วัตต์)",
            "Enterprise Router: พิจารณาจำนวนพอร์ต WAN/LAN, WAN Throughput (Mbps/Gbps), ความสามารถในการทำ NAT, IPsec VPN Throughput, Dynamic Routing (OSPF/BGP) และ Multi-WAN Load Balancing",
            "Next-Generation Firewall (NGFW): พิจารณา Firewall Throughput, Threat Protection / IPS Throughput, Concurrent Sessions, SSL Inspection และ VPN Peers",
            "สายสัญญาณและหัวต่อ (Cabling & Transceivers): สาย UTP Cat6 (1Gbps/10Gbps 55m), Cat6A (10Gbps 100m), สาย Fiber Optic แบบ Single-mode (OS2 สำหรับระยะไกล) และ Multi-mode (OM3/OM4 สำหรับภายในอาคาร) พร้อมโมดูล SFP (1G) และ SFP+ (10G)"
          ]
        },
        {
          heading: "2. เครื่องมือสำหรับการติดตั้งและตรวจสอบระบบเครือข่าย",
          content: "การเลือกใช้เครื่องมือให้ถูกประเภทช่วยลดความเสียหายของวัสดุและเพิ่มความแม่นยำในการวิเคราะห์ปัญหา:",
          bullets: [
            "เครื่องมือเข้าหัวและติดตั้ง: คีมเข้าหัว RJ45 (Crimping Tool), เครื่องมือกระแทกสายลง Keystone Jack / Patch Panel (Punch Down Tool 110 Block), คีมปอกสายไฟเบอร์ (Fiber Stripper & Cleaver), เครื่องเชื่อมสายไฟเบอร์ (Fusion Splicer)",
            "เครื่องมือวัดและทดสอบสายสัญญาณ: UTP Cable Tester / Cable Certifier (ตรวจวัด Wiremap, ความยาวสาย, NEXT, Attenuation), Optical Power Meter & Visual Fault Locator (VFL), เครื่อง OTDR สำหรับหาจุดขาดของสายไฟเบอร์",
            "เครื่องมือซอฟต์แวร์ตรวจสอบเครือข่าย: Wireshark (Packet Analyzer), Nmap (Port/Network Scanner), iPerf3 (ทดสอบ Throughput), SNMP Monitoring"
          ]
        },
        {
          heading: "3. การจัดทำรายการวัสดุและอุปกรณ์เครือข่าย (Bill of Materials - BOM)",
          content:
            "รายการสรุปวัสดุและอุปกรณ์เครือข่ายตามมาตรฐานวิชาชีพ ต้องระบุ 1) ลำดับที่ 2) ชื่อวัสดุและอุปกรณ์ 3) ยี่ห้อและรุ่น (Brand/Model) 4) คุณสมบัติทางเทคนิคโดยย่อ 5) จำนวนและหน่วยนับ และ 6) ตำแหน่งที่นำไปติดตั้งหรือวัตถุประสงค์การใช้งาน"
        }
      ],
      cliReference: `! คำสั่งตรวจสอบคุณสมบัติฮาร์ดแวร์ พอร์ต SFP และการใช้พลังงาน PoE บนสวิตช์
NYK-DIST-SW1# show version
NYK-DIST-SW1# show inventory
NYK-DIST-SW1# show interfaces status
NYK-DIST-SW1# show interfaces transceiver
NYK-DIST-SW1# show power inline`,
      summary:
        "การตรวจสอบคุณสมบัติของอุปกรณ์จาก Datasheet และการเลือกเครื่องมือที่เหมาะสมกับวัสดุ เป็นพื้นฐานสำคัญในการจัดหาและสรุปรายการวัสดุอุปกรณ์เครือข่าย (BOM) ให้คุ้มค่าและตรงตามหลักการออกแบบ"
    },
    activitySheet: {
      sheetNo: 2,
      title: "ใบกิจกรรมที่ 2 : เปรียบเทียบ Datasheet อุปกรณ์เครือข่ายและการเลือกใช้เครื่องมือ",
      duration: "60 นาที",
      scenario:
        "บริษัทซอฟต์แวร์แห่งหนึ่งต้องการติดตั้งเครือข่ายสำหรับสำนักงานใหม่ มีคอมพิวเตอร์ 40 เครื่อง, โทรศัพท์ IP Phone 40 เครื่อง (กินไฟเครื่องละ 7W), กล้องวงจรปิด IP Camera 8 ตัว (กินไฟตัวละ 15W) และต้องการเชื่อมต่อไปยังห้อง Server ที่อยู่ห่างออกไป 250 เมตร ด้วยความเร็ว 10 Gbps",
      questions: [
        {
          qNo: 1,
          question: "1. ต้องเลือกใช้สวิตช์ Access Switch กี่พอร์ต กี่ตัว และต้องมี PoE Budget รวมขั้นต่ำกี่วัตต์จึงจะจ่ายไฟให้ IP Phone และ IP Camera ได้เพียงพอ",
          suggestedAnswer:
            "มีอุปกรณ์ปลายทางรวม 88 พอร์ต ควรใช้ Managed PoE+ Switch ขนาด 48 พอร์ต จำนวน 2 ตัว (รวม 96 พอร์ต) ส่วนกำลังไฟ PoE ขั้นต่ำ = (40 x 7W) + (8 x 15W) = 280W + 120W = 400W (ควรเลือกสวิตช์ที่มี PoE Budget ตัวละ 370W ขึ้นไป รวม 2 ตัว = 740W เพื่อเผื่อสำรอง)"
        },
        {
          qNo: 2,
          question: "2. การเชื่อมต่อไปยังห้อง Server ระยะทาง 250 เมตร ที่ความเร็ว 10 Gbps สามารถใช้สาย UTP Cat6 ได้หรือไม่ เพราะเหตุใด และควรเลือกสายสัญญาณพร้อมโมดูลใดทดแทน",
          suggestedAnswer:
            "ใช้สาย UTP Cat6 ไม่ได้ เนื่องจากสาย UTP รองรับระยะสูงสุดไม่เกิน 100 เมตร (และ Cat6 ที่ 10Gbps ได้เพียง 55 เมตร) จึงต้องเลือกใช้สาย Fiber Optic (เช่น Multi-mode OM3/OM4 ร่วมกับโมดูล SFP+ 10GBASE-SR หรือ Single-mode OS2 ร่วมกับ SFP+ 10GBASE-LR)"
        },
        {
          qNo: 3,
          question: "3. จงระบุเครื่องมือที่ต้องใช้ในการเข้าหัวสาย UTP เข้ากับ Patch Panel และเครื่องมือที่ใช้ทดสอบสายไฟเบอร์ออปติกหลังติดตั้งเสร็จ",
          suggestedAnswer:
            "การเข้าสายกับ Patch Panel ใช้คีมปอกสายและเครื่องมือกระแทกสาย (Impact Punch Down Tool) ส่วนการทดสอบสายไฟเบอร์ออปติกใช้ Visual Fault Locator (VFL) ตรวจเช็คแสงทะลุผ่าน และใช้ Optical Power Meter (OPM) หรือ OTDR วัดค่าการสูญเสียสัญญาณ (dB Loss)"
        }
      ]
    },
    jobSheet: {
      sheetNo: 2,
      title: "ใบงานที่ 2 : การตรวจสอบคุณสมบัติวัสดุอุปกรณ์และจัดทำตารางสรุปรายการวัสดุอุปกรณ์เครือข่าย (Network BOM)",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. อุปกรณ์เครือข่ายจริงในห้องปฏิบัติการ (Router, L2/L3 Switch, Firewall, Access Point, โมดูล SFP)",
        "2. ชุดเครื่องมือเครือข่าย (Crimping Tool, Punch Down Tool, Cable Tester, VFL)",
        "3. เครื่องมือสร้างตารางรายการวัสดุอุปกรณ์เครือข่าย (Network BOM Generator ในเว็บแอปพลิเคชัน)"
      ],
      topology:
        "ตรวจสอบอุปกรณ์จริงและจำลองการจัดหาอุปกรณ์สำหรับเครือข่ายองค์กรขนาด 3 แผนก (ฝ่ายบริหาร ฝ่ายพัฒนาซอฟต์แวร์ และฝ่ายบริการลูกค้า) พร้อมห้อง Server",
      steps: [
        "ขั้นที่ 1: ตรวจสอบหมายเลขรุ่น (Model), Serial Number และคุณสมบัติของอุปกรณ์ด้วยคำสั่ง CLI (show version, show inventory, show interfaces status) และจากฉลากอุปกรณ์",
        "ขั้นที่ 2: ทดสอบสายสัญญาณ UTP Cat6 ด้วยเครื่อง Cable Tester และบันทึกผลการเรียงคู่สายตามมาตรฐาน TIA/EIA-568B",
        "ขั้นที่ 3: ค้นหา Datasheet ของอุปกรณ์หลัก 4 รายการ ได้แก่ Enterprise Router, Layer 3 Switch, Layer 2 PoE Switch และ Next-Gen Firewall",
        "ขั้นที่ 4: สรุปรายการวัสดุและอุปกรณ์ที่ใช้ในเครือข่าย (ประกอบด้วย ชื่อวัสดุและอุปกรณ์, ยี่ห้อ/รุ่น, คุณสมบัติหลัก และจำนวน) ลงในตาราง BOM"
      ],
      checkpoints: [
        "ระบุข้อมูลฮาร์ดแวร์และอินเทอร์เฟซจากคำสั่ง show version และ show inventory ได้ครบถ้วน",
        "ทดสอบและตรวจวัดสายสัญญาณด้วยเครื่องมือวัดได้อย่างถูกต้องและปลอดภัย",
        "สรุปตารางรายการวัสดุอุปกรณ์เครือข่าย (ชื่อวัสดุอุปกรณ์ ยี่ห้อ/รุ่น และจำนวน) ครบถ้วนตามโจทย์"
      ],
      solutionCli: `! คำสั่งตรวจสอบรายละเอียดอุปกรณ์เพื่อบันทึกในตารางตรวจรับพัสดุ/BOM
NYK-CORE-R1# show version | include Cisco|Processor|bytes
NYK-CORE-R1# show inventory
NYK-DIST-SW1# show interfaces status
NYK-DIST-SW1# show power inline`
    },
    assignmentSheet: {
      sheetNo: 2,
      title: "ใบมอบหมายงานที่ 2 : จัดทำข้อกำหนดทางเทคนิค (TOR/BOM) สำหรับระบบเครือข่ายองค์กร",
      taskDescription:
        "ให้ผู้เรียนจัดทำตารางสรุปรายการวัสดุและอุปกรณ์เครือข่าย (BOM) สำหรับอาคารสำนักงาน 3 ชั้น รองรับผู้ใช้งาน 120 คน โดยระบุชื่อวัสดุและอุปกรณ์ ยี่ห้อ/รุ่น คุณสมบัติทางเทคนิค จำนวน และเครื่องมือที่ต้องใช้ในการติดตั้งและทดสอบ",
      deliverables: [
        "1. ตารางสรุปรายการวัสดุและอุปกรณ์เครือข่าย (ชื่ออุปกรณ์ ยี่ห้อ/รุ่น คุณสมบัติ จำนวน ราคาประมาณการ)",
        "2. ตารางจับคู่เครื่องมือที่ใช้ติดตั้งและทดสอบให้เหมาะสมกับวัสดุแต่ละชนิด"
      ],
      rubric: "ความครบถ้วนของรายการอุปกรณ์ 4 คะแนน | ความเหมาะสมของยี่ห้อ/รุ่นกับงาน 4 คะแนน | การเลือกเครื่องมือ 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 3,
    unit: 2,
    unitTitle: "หน่วยที่ 2 การจัดการ VLAN และ Inter-VLAN Routing",
    weekTitle: "หลักการ VLAN และการกำหนดค่า VLAN บนสวิตช์",
    dutyRef: "งานหลัก 2 จัดการเครือข่ายระดับ Layer 2/Layer 3 (งานย่อย 2.1 กำหนดค่า VLAN และ Inter-VLAN Routing)",
    standardRef: "40104.01 กำหนดค่าระบบเครือข่ายระดับ Layer 2/Layer 3 (VLAN, Routing, DHCP)",
    knowledgeSheet: {
      sheetNo: 3,
      title: "ใบความรู้ที่ 3 : หลักการเครือข่ายเสมือน (VLAN) และการกำหนดค่า VLAN บนอุปกรณ์สวิตช์",
      objectives: [
        "1. อธิบายหลักการทำงานและประโยชน์ของการแบ่งเครือข่ายเสมือน (Virtual LAN - VLAN) ได้",
        "2. จำแนกประเภทของ VLAN และความแตกต่างระหว่างพอร์ตแบบ Access Port กับ Trunk Port (IEEE 802.1Q) ได้",
        "3. ปฏิบัติการสร้าง VLAN กำหนดพอร์ตเข้าสู่ VLAN และตั้งค่า Trunk ระหว่างสวิตช์ได้ถูกต้อง"
      ],
      overview:
        "Virtual Local Area Network (VLAN) คือเทคโนโลยีการแบ่งขอบเขตการกระจายสัญญาณ (Broadcast Domain) ในระดับ Layer 2 บนสวิตช์ตัวเดียวกันหรือหลายตัว ให้เสมือนแยกเป็นคนละเครือข่ายทางกายภาพ ช่วยลดปริมาณ Broadcast Traffic เพิ่มความปลอดภัยระหว่างแผนก และบริหารจัดการกลุ่มผู้ใช้งานตามหน้าที่งานได้อย่างยืดหยุ่น",
      sections: [
        {
          heading: "1. ประเภทของ VLAN ในเครือข่ายองค์กร",
          content: "การจัดแบ่ง VLAN ในองค์กรนิยมจำแนกตามวัตถุประสงค์การใช้งานดังนี้:",
          bullets: [
            "Default VLAN: ค่าเริ่มต้นของสวิตช์ทุกพอร์ตจะอยู่ใน VLAN 1 (ไม่ควรใช้สำหรับข้อมูลสำคัญ)",
            "Data VLAN (User VLAN): สำหรับเครื่องคอมพิวเตอร์ของผู้ใช้งานแยกตามแผนก เช่น VLAN 10 (IT), VLAN 20 (HR), VLAN 30 (Account)",
            "Voice VLAN: สำหรับทราฟฟิกเสียงจากโทรศัพท์ IP Phone ซึ่งต้องการความหน่วงต่ำและการจัดลำดับความสำคัญ (QoS CoS)",
            "Management VLAN: สร้างขึ้นเฉพาะสำหรับการรีโมทเข้าไปตั้งค่าอุปกรณ์เครือข่าย (SSH/HTTPS/SNMP) เช่น VLAN 99 เพื่อแยกออกจากผู้ใช้ทั่วไป",
            "Native VLAN: VLAN สำหรับเฟรมข้อมูลที่ไม่ได้ติดป้ายกำกับ (Untagged Frame) ที่วิ่งผ่านลิงก์ Trunk ตามมาตรฐาน 802.1Q (เพื่อความปลอดภัยควรเปลี่ยนจาก VLAN 1 เป็น VLAN อื่นที่ไม่ได้ใช้งาน เช่น VLAN 999)"
          ]
        },
        {
          heading: "2. โหมดการทำงานของพอร์ตสวิตช์: Access Port vs Trunk Port (IEEE 802.1Q)",
          content:
            "พอร์ตบน Managed Switch แบ่งการทำงานหลักออกเป็น 2 โหมด:",
          bullets: [
            "Access Port: ใช้เชื่อมต่อกับอุปกรณ์ปลายทาง (PC, Printer, Server) โดยจะส่งข้อมูลเฉพาะของ VLAN เดียวที่กำหนดไว้ และเฟรมที่ส่งออกไปยัง PC จะไม่มีการติดแท็ก (Untagged)",
            "Trunk Port (IEEE 802.1Q): ใช้เชื่อมต่อระหว่างสวิตช์กับสวิตช์ หรือสวิตช์กับเราเตอร์ เพื่อขนส่งข้อมูลของหลาย VLAN ไปพร้อมกันบนสายเส้นเดียว โดยการแทรก 802.1Q Tag ขนาด 4 ไบต์ (ระบุ VLAN ID 12 บิต รองรับได้ 4,094 VLANs) ลงใน Ethernet Frame Header"
          ]
        }
      ],
      cliReference: `! 1. การสร้าง VLAN และตั้งชื่อบนสวิตช์
Switch(config)# vlan 10
Switch(config-vlan)# name IT_DEPT
Switch(config-vlan)# vlan 20
Switch(config-vlan)# name HR_DEPT
Switch(config-vlan)# vlan 99
Switch(config-vlan)# name MGMT_NET
Switch(config-vlan)# exit

! 2. การกำหนดพอร์ตเป็น Access Port เข้าสู่ VLAN
Switch(config)# interface range fastEthernet 0/1 - 10
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10
Switch(config-if-range)# exit

! 3. การกำหนดพอร์ต Uplink เป็น Trunk Port (IEEE 802.1Q)
Switch(config)# interface gigabitEthernet 0/1
Switch(config-if)# switchport trunk encapsulation dot1q
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk native vlan 99
Switch(config-if)# switchport trunk allowed vlan 10,20,99
Switch(config-if)# end

! 4. คำสั่งตรวจสอบ VLAN และ Trunk
Switch# show vlan brief
Switch# show interfaces trunk`,
      summary:
        "การทำ VLAN ช่วยแยก Broadcast Domain ลดความคับคั่งของเครือข่าย และเพิ่มความปลอดภัย โดยเชื่อมต่อเครื่องลูกข่ายด้วย Access Port และเชื่อมต่อระหว่างสวิตช์ด้วย 802.1Q Trunk Port"
    },
    activitySheet: {
      sheetNo: 3,
      title: "ใบกิจกรรมที่ 3 : การออกแบบแผนผัง VLAN และการวิเคราะห์การทำงานของ 802.1Q Trunk",
      duration: "60 นาที",
      scenario:
        "อาคารสำนักงานมีสวิตช์ 2 ตัว (SW-Floor1 และ SW-Floor2) เชื่อมต่อถึงกันผ่านพอร์ต Gi0/1 มีแผนกไอที (VLAN 10: 192.168.10.0/24), แผนกบุคคล (VLAN 20: 192.168.20.0/24) และแผนกบัญชี (VLAN 30: 192.168.30.0/24) กระจายอยู่ทั้งสองชั้น",
      questions: [
        {
          qNo: 1,
          question: "1. หากเครื่อง PC1 (VLAN 10 ชั้น 1) ส่งแพ็กเกจ ARP Broadcast ออกมา เครื่องใดบ้างในชั้น 1 และชั้น 2 ที่จะได้รับเฟรม Broadcast นี้ เพราะเหตุใด",
          suggestedAnswer:
            "เฉพาะเครื่องที่อยู่ใน VLAN 10 ทั้งในชั้น 1 และชั้น 2 เท่านั้นที่จะได้รับ ARP Broadcast เพราะสวิตช์จะติดแท็ก VLAN ID 10 ส่งข้ามพอร์ต Trunk Gi0/1 ไปยัง SW-Floor2 และส่งออกเฉพาะพอร์ตที่เป็นสมาชิกของ VLAN 10 ส่วน VLAN 20 และ 30 จะไม่ได้รับ"
        },
        {
          qNo: 2,
          question: "2. หากลืมตั้งค่าพอร์ต Gi0/1 ระหว่าง SW-Floor1 และ SW-Floor2 ให้เป็น Trunk (ปล่อยไว้เป็น Access VLAN 1) จะเกิดผลอย่างไรกับเครื่องใน VLAN 10 ที่อยู่คนละชั้น",
          suggestedAnswer:
            "เครื่องใน VLAN 10 ที่อยู่ชั้น 1 และชั้น 2 จะไม่สามารถสื่อสารกันได้เลย เนื่องจากพอร์ต Access VLAN 1 จะยอมให้เฉพาะทราฟฟิกของ VLAN 1 ผ่านเท่านั้น เฟรมของ VLAN 10, 20, 30 จะไม่ถูกส่งข้ามระหว่างสวิตช์"
        },
        {
          qNo: 3,
          question: "3. เหตุใดจึงควรจำกัด VLAN ที่อนุญาตให้ผ่านลิงก์ Trunk ด้วยคำสั่ง switchport trunk allowed vlan แทนการเปิดให้ทุก VLAN (1-4094) ผ่านทั้งหมด",
          suggestedAnswer:
            "เพื่อป้องกันไม่ให้ Broadcast Traffic ของ VLAN ที่ไม่มีผู้ใช้งานในสวิตช์ปลายทางไหลข้ามลิงก์ Trunk โดยไม่จำเป็น และช่วยเพิ่มความปลอดภัยป้องกันการโจมตีแบบ VLAN Hopping"
        }
      ]
    },
    jobSheet: {
      sheetNo: 3,
      title: "ใบงานที่ 3 : การกำหนดค่า VLAN และ IEEE 802.1Q Trunk ระหว่างสวิตช์หลายตัว",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. Managed Switch Layer 2 จำนวน 2 เครื่อง (SW1, SW2)",
        "2. เครื่องคอมพิวเตอร์จำลอง (PC1 - PC6) จำนวน 6 เครื่อง",
        "3. สายสัญญาณ UTP Cat6"
      ],
      topology:
        "SW1 เชื่อมต่อกับ SW2 ที่พอร์ต Gi0/1 (Trunk Allowed VLAN 10,20,30,99) | พอร์ต Fa0/1-5 = VLAN 10 (IT: 192.168.10.0/24) | พอร์ต Fa0/6-10 = VLAN 20 (HR: 192.168.20.0/24) | พอร์ต Fa0/11-15 = VLAN 30 (ACC: 192.168.30.0/24) | Management VLAN 99 (SW1: 192.168.99.11/24, SW2: 192.168.99.12/24)",
      steps: [
        "ขั้นที่ 1: สร้าง VLAN 10 (IT), VLAN 20 (HR), VLAN 30 (ACC) และ VLAN 99 (MGMT) บนสวิตช์ทั้ง 2 ตัว",
        "ขั้นที่ 2: กำหนดพอร์ต Fa0/1-5 เข้า VLAN 10, Fa0/6-10 เข้า VLAN 20 และ Fa0/11-15 เข้า VLAN 30 ในโหมด Access",
        "ขั้นที่ 3: ตั้งค่าพอร์ต Gi0/1 บน SW1 และ SW2 ให้เป็น Trunk (802.1Q) กำหนด Native VLAN 99 และอนุญาตเฉพาะ VLAN 10,20,30,99",
        "ขั้นที่ 4: กำหนด IP Address บน interface vlan 99 ของสวิตช์ทั้งสองตัว",
        "ขั้นที่ 5: ทดสอบการ Ping ระหว่างเครื่อง PC ใน VLAN เดียวกันที่อยู่คนละสวิตช์ และทดสอบ Ping ข้าม VLAN (ต้องไม่ผ่านเพราะยังไม่มีการทำ Routing)"
      ],
      checkpoints: [
        "ตรวจสอบ show vlan brief พบ VLAN 10, 20, 30, 99 พร้อมพอร์ตสมาชิกถูกต้องทั้ง 2 สวิตช์",
        "ตรวจสอบ show interfaces trunk พบพอร์ต Gi0/1 อยู่ในสถานะ trunking (802.1q) และ Native VLAN เป็น 99",
        "PC ใน VLAN เดียวกันที่อยู่คนละสวิตช์สามารถ Ping หากันได้สำเร็จ",
        "PC ต่าง VLAN กันไม่สามารถ Ping หากันได้ (พิสูจน์การแยก Broadcast Domain สำเร็จ)"
      ],
      solutionCli: `vlan 10
 name IT
vlan 20
 name HR
vlan 30
 name ACC
vlan 99
 name MGMT
exit
interface range fa0/1 - 5
 switchport mode access
 switchport access vlan 10
interface range fa0/6 - 10
 switchport mode access
 switchport access vlan 20
interface range fa0/11 - 15
 switchport mode access
 switchport access vlan 30
interface gi0/1
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,20,30,99
interface vlan 99
 ip address 192.168.99.11 255.255.255.0
 no shutdown`
    },
    assignmentSheet: {
      sheetNo: 3,
      title: "ใบมอบหมายงานที่ 3 : ออกแบบตารางจัดสรร VLAN และพอร์ตสวิตช์สำหรับอาคารเรียน 4 ชั้น",
      taskDescription:
        "ให้ออกแบบแผนการจัดสรร VLAN ID, ชื่อ VLAN, Subnet และตารางกำหนดพอร์ตสวิตช์ (Port Allocation Table) สำหรับอาคารเรียน 4 ชั้น ที่ประกอบด้วย เครือข่ายครูอาจารย์, เครือข่ายนักศึกษา, เครือข่ายห้องสมุด, เครือข่ายกล้องวงจรปิด CCTV, เครือข่าย Wi-Fi Guest และเครือข่ายผู้ดูแลระบบ (Management)",
      deliverables: [
        "1. ตารางออกแบบ VLAN Plan (VLAN ID, VLAN Name, Network Address, Subnet Mask, Default Gateway)",
        "2. สคริปต์คำสั่ง CLI สำหรับสร้าง VLAN และกำหนดพอร์ต Access/Trunk บนสวิตช์แต่ละชั้น"
      ],
      rubric: "ความเหมาะสมของการออกแบบ VLAN 4 คะแนน | ความถูกต้องของคำสั่ง CLI 4 คะแนน | ความชัดเจนของเอกสาร 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 4,
    unit: 2,
    unitTitle: "หน่วยที่ 2 การจัดการ VLAN และ Inter-VLAN Routing",
    weekTitle: "การกำหนดค่า Inter-VLAN Routing",
    dutyRef: "งานหลัก 2 จัดการเครือข่ายระดับ Layer 2/Layer 3 (งานย่อย 2.1 กำหนดค่า VLAN และ Inter-VLAN Routing)",
    standardRef: "40104.01 กำหนดค่าระบบเครือข่ายระดับ Layer 2/Layer 3 (VLAN, Routing, DHCP)",
    knowledgeSheet: {
      sheetNo: 4,
      title: "ใบความรู้ที่ 4 : หลักการและการกำหนดค่า Inter-VLAN Routing (Router-on-a-Stick และ Layer 3 Switch SVI)",
      objectives: [
        "1. อธิบายหลักการเชื่อมต่อข้ามเครือข่ายเสมือน (Inter-VLAN Routing) ทั้ง 3 รูปแบบได้",
        "2. กำหนดค่า Inter-VLAN Routing แบบ Router-on-a-Stick ด้วย Sub-interface (802.1Q) บนเราเตอร์ได้",
        "3. กำหนดค่า Inter-VLAN Routing บน Layer 3 Switch ด้วย Switched Virtual Interface (SVI) และคำสั่ง ip routing ได้"
      ],
      overview:
        "หลังจากแบ่งเครือข่ายออกเป็นหลาย VLAN แล้ว อุปกรณ์ที่อยู่คนละ VLAN จะไม่สามารถสื่อสารกันได้โดยตรงในระดับ Layer 2 หากองค์กรต้องการให้แต่ละแผนกติดต่อกับเซิร์ฟเวอร์กลางหรือสื่อสารข้ามแผนกภายใต้การควบคุม จำเป็นต้องใช้อุปกรณ์ระดับ Layer 3 (Router หรือ Layer 3 Switch) ทำหน้าที่หาเส้นทางข้าม VLAN เรียกว่า Inter-VLAN Routing",
      sections: [
        {
          heading: "1. รูปแบบของการทำ Inter-VLAN Routing ทั้ง 3 วิธี",
          content: "การทำ Inter-VLAN Routing แบ่งตามพัฒนาการและสถาปัตยกรรมได้ 3 วิธี:",
          bullets: [
            "1) Legacy Inter-VLAN Routing: ใช้สายแลนแยกเชื่อมต่อระหว่างสวิตช์กับเราเตอร์ 1 เส้นต่อ 1 VLAN สิ้นเปลืองพอร์ตบนเราเตอร์มาก ปัจจุบันไม่นิยมใช้งานแล้ว",
            "2) Router-on-a-Stick (ROAS): ใช้สาย Trunk เพียง 1 เส้นเชื่อมต่อระหว่าง Layer 2 Switch กับพอร์ตกายภาพ 1 พอร์ตของเราเตอร์ แล้วแบ่งพอร์ตเราเตอร์ออกเป็นอินเทอร์เฟซย่อย (Sub-interfaces เช่น Gi0/0.10, Gi0/0.20) พร้อมกำหนด encapsulation dot1Q ให้ตรงกับแต่ละ VLAN เหมาะกับเครือข่ายขนาดเล็กถึงขนาดกลาง",
            "3) Layer 3 Switch using SVI (Switched Virtual Interface): ใช้สวิตช์ระดับ Layer 3 (Multilayer Switch) สร้างอินเทอร์เฟซเสมือนประจำแต่ละ VLAN (interface vlan 10, interface vlan 20) ทำหน้าที่เป็น Default Gateway และประมวลผลการ Routing ด้วยฮาร์ดแวร์ ASIC ความเร็วสูง (Wire-speed) นิยมใช้ในเครือข่ายองค์กรขนาดกลางและขนาดใหญ่"
          ]
        },
        {
          heading: "2. ขั้นตอนสำคัญในการตั้งค่า Layer 3 Switch SVI",
          content:
            "บน Layer 3 Switch เพื่อให้ SVI ของแต่ละ VLAN สถานะเป็น Up/Up และสามารถส่งข้อมูลข้าม VLAN ได้ ต้องตรวจสอบ 3 เงื่อนไขสำคัญคือ 1) ต้องสร้าง VLAN นั้นในฐานข้อมูล Layer 2 ก่อน (vlan 10) 2) ต้องมีพอร์ต Access หรือ Trunk อย่างน้อย 1 พอร์ตที่อยู่ในสถานะเชื่อมต่อ (Up) ใน VLAN นั้น และ 3) ต้องเปิดใช้งานฟังก์ชัน Routing ด้วยคำสั่ง ip routing ใน Global Configuration Mode"
        }
      ],
      cliReference: `! === วิธีที่ 1: Router-on-a-Stick (บน Router) ===
Router(config)# interface gigabitEthernet 0/0
Router(config-if)# no shutdown
Router(config-if)# interface gigabitEthernet 0/0.10
Router(config-subif)# description Gateway for VLAN 10 (IT)
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config-subif)# interface gigabitEthernet 0/0.20
Router(config-subif)# description Gateway for VLAN 20 (HR)
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0
Router(config-subif)# end

! === วิธีที่ 2: Layer 3 Switch SVI (บน Multilayer Switch) ===
L3-Switch(config)# ip routing
L3-Switch(config)# interface vlan 10
L3-Switch(config-if)# ip address 192.168.10.1 255.255.255.0
L3-Switch(config-if)# no shutdown
L3-Switch(config-if)# interface vlan 20
L3-Switch(config-if)# ip address 192.168.20.1 255.255.255.0
L3-Switch(config-if)# no shutdown
L3-Switch(config-if)# end
L3-Switch# show ip route`,
      summary:
        "Inter-VLAN Routing ช่วยให้เครือข่ายต่าง VLAN สื่อสารกันได้ผ่าน Layer 3 โดยวิธี Router-on-a-Stick ใช้ Sub-interface บนเราเตอร์ ส่วนวิธี Layer 3 Switch ใช้ SVI ร่วมกับคำสั่ง ip routing ซึ่งให้ประสิทธิภาพสูงสุดในระดับองค์กร"
    },
    activitySheet: {
      sheetNo: 4,
      title: "ใบกิจกรรมที่ 4 : วิเคราะห์เปรียบเทียบและแก้ไขปัญหา (Troubleshooting) Inter-VLAN Routing",
      duration: "60 นาที",
      scenario:
        "ผู้ดูแลระบบตั้งค่า Inter-VLAN Routing บน Layer 3 Switch โดยสร้าง interface vlan 10 (192.168.10.1/24) และ interface vlan 20 (192.168.20.1/24) เรียบร้อยแล้ว แต่เมื่อใช้คำสั่ง show ip interface brief พบว่า Vlan10 สถานะเป็น up/down และเครื่องลูกข่ายไม่สามารถ Ping ข้ามระหว่าง VLAN 10 กับ VLAN 20 ได้",
      questions: [
        {
          qNo: 1,
          question: "1. สาเหตุใดบ้างที่ทำให้อินเทอร์เฟซ Vlan10 บนสวิตช์มีสถานะเป็น up / line protocol is down",
          suggestedAnswer:
            "เกิดจาก 1) ยังไม่ได้สร้าง VLAN 10 ในฐานข้อมูล VLAN (ลืมพิมพ์คำสั่ง vlan 10) หรือ 2) ไม่มีพอร์ตใดๆ บนสวิตช์ที่เป็นสมาชิกของ VLAN 10 (หรือพอร์ต Trunk) ที่เชื่อมต่ออยู่และมีสถานะเป็น Up (STP Forwarding)"
        },
        {
          qNo: 2,
          question: "2. หากแก้ไขให้ Vlan10 และ Vlan20 มีสถานะเป็น up/up แล้ว และ PC สามารถ Ping ไปยัง Default Gateway ของตนเองได้ แต่ยัง Ping ข้าม VLAN ไม่ได้ สาเหตุหลักเกิดจากลืมคำสั่งใด",
          suggestedAnswer:
            "บน Layer 3 Switch ลืมเปิดใช้งานฟังก์ชันการหาเส้นทางด้วยคำสั่ง ip routing ในโหมด Global Configuration หรือเครื่องลูกข่ายตั้งค่า Default Gateway ไม่ตรงกับ IP ของ SVI"
        },
        {
          qNo: 3,
          question: "3. เปรียบเทียบข้อดี-ข้อจำกัดระหว่าง Router-on-a-Stick กับ Layer 3 Switch SVI สำหรับองค์กรที่มีทราฟฟิกภายในระหว่าง VLAN สูงมาก",
          suggestedAnswer:
            "Router-on-a-Stick มีข้อจำกัดเรื่องคอขวดบนสาย Trunk เส้นเดียวที่เชื่อมเข้าพอร์ตเราเตอร์ (ทราฟฟิกต้องวิ่งไป-กลับบนสายเส้นเดิม) ส่วน Layer 3 Switch SVI ทำการสวิตช์และเราต์ด้วยชิป ASIC ภายในตัวสวิตช์ที่ความเร็วระดับหลายสิบ Gbps จึงเหมาะกับองค์กรที่มีทราฟฟิกสูงมากกว่า"
        }
      ]
    },
    jobSheet: {
      sheetNo: 4,
      title: "ใบงานที่ 4 : การปฏิบัติการกำหนดค่า Inter-VLAN Routing แบบ Router-on-a-Stick และ Layer 3 Switch",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. Router 1 เครื่อง, Layer 3 Switch (เช่น Cisco 3560/3650) 1 เครื่อง และ Layer 2 Switch 1 เครื่อง",
        "2. เครื่องคอมพิวเตอร์จำลอง 4 เครื่อง (VLAN 10, VLAN 20, VLAN 30, VLAN 99)"
      ],
      topology:
        "ตอนที่ 1: Router-on-a-Stick (R1 Gi0/0 เชื่อมต่อ Trunk กับ SW1 Gi0/1) | ตอนที่ 2: Layer 3 Switch SVI (MLS1 ทำหน้าที่เป็น Core/Distribution กำหนด SVI สำหรับ VLAN 10, 20, 30, 99 และเปิด ip routing)",
      steps: [
        "ขั้นที่ 1 (ตอนที่ 1): บน R1 สร้าง Sub-interface Gi0/0.10 (192.168.10.1/24), Gi0/0.20 (192.168.20.1/24), Gi0/0.30 (192.168.30.1/24) พร้อมกำหนด encapsulation dot1Q",
        "ขั้นที่ 2: ตั้งค่าพอร์ต Gi0/1 ของ SW1 ที่ต่อกับ R1 ให้เป็น Trunk และทดสอบ Ping ข้าม VLAN",
        "ขั้นที่ 3 (ตอนที่ 2): เปลี่ยนมาใช้ Layer 3 Switch (MLS1) สร้าง VLAN 10, 20, 30, 99 และสร้าง interface vlan 10, 20, 30, 99 พร้อมกำหนด IP Gateway",
        "ขั้นที่ 4: รันคำสั่ง ip routing บน MLS1 ตรวจสอบตารางเส้นทางด้วย show ip route และทดสอบ traceroute ข้าม VLAN จากเครื่องลูกข่าย"
      ],
      checkpoints: [
        "กำหนดค่า Sub-interface และ encapsulation dot1Q บน Router ได้ถูกต้องครบทุก VLAN",
        "กำหนดค่า SVI และเปิดใช้งาน ip routing บน Layer 3 Switch จนปรากฏเส้นทาง Connected (C) ครบทุก Subnet ใน show ip route",
        "เครื่องลูกข่ายใน VLAN 10, 20, 30 สามารถ Ping และ Traceroute ข้าม VLAN หากันได้สำเร็จ 100%"
      ],
      solutionCli: `! ตอนที่ 2: Layer 3 Switch Inter-VLAN Routing
MLS1(config)# ip routing
MLS1(config)# vlan 10,20,30,99
MLS1(config-vlan)# exit
MLS1(config)# interface vlan 10
MLS1(config-if)# ip address 192.168.10.1 255.255.255.0
MLS1(config-if)# no shutdown
MLS1(config)# interface vlan 20
MLS1(config-if)# ip address 192.168.20.1 255.255.255.0
MLS1(config-if)# no shutdown
MLS1(config)# interface vlan 30
MLS1(config-if)# ip address 192.168.30.1 255.255.255.0
MLS1(config-if)# no shutdown
MLS1(config)# interface gi0/1
MLS1(config-if)# switchport trunk encapsulation dot1q
MLS1(config-if)# switchport mode trunk`
    },
    assignmentSheet: {
      sheetNo: 4,
      title: "ใบมอบหมายงานที่ 4 : ออกแบบระบบ Inter-VLAN Routing และ Routed Port เชื่อมต่อสู่อินเทอร์เน็ต",
      taskDescription:
        "ให้ออกแบบและเขียนสคริปต์การตั้งค่า Layer 3 Switch ที่ทำหน้าที่เป็นตัวกลางทำ Inter-VLAN Routing ให้กับ 4 แผนกภายในองค์กร และเปลี่ยนพอร์ต Gi0/24 ให้เป็น Routed Port (no switchport) เพื่อเชื่อมต่อไปยัง Edge Router ขององค์กร",
      deliverables: [
        "1. แผนผังการเชื่อมต่อระหว่าง Access Switch -> Layer 3 Distribution Switch -> Edge Router",
        "2. สคริปต์คำสั่งตั้งค่า SVI, Routed Port (no switchport) และผลการทดสอบ show ip route"
      ],
      rubric: "ความถูกต้องของการตั้งค่า SVI และ ip routing 5 คะแนน | การตั้งค่า Routed Port 3 คะแนน | แผนผังและรายงานผล 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 5,
    unit: 3,
    unitTitle: "หน่วยที่ 3 การจัดเส้นทางเครือข่ายและการจัดสรรหมายเลข IP (IP Routing, DHCP, DHCP Snooping)",
    weekTitle: "การกำหนดเส้นทางเครือข่ายด้วย IP Routing",
    dutyRef: "งานหลัก 2 จัดการเครือข่ายระดับ Layer 2/Layer 3 (งานย่อย 2.2 กำหนดค่า IP Routing, DHCP และ DHCP Snooping)",
    standardRef: "40104.01 กำหนดค่าระบบเครือข่ายระดับ Layer 2/Layer 3 (VLAN, Routing, DHCP)",
    knowledgeSheet: {
      sheetNo: 5,
      title: "ใบความรู้ที่ 5 : หลักการจัดเส้นทางเครือข่ายและการกำหนดค่า IP Routing (Static, Default, Floating Static & Dynamic Routing)",
      objectives: [
        "1. อธิบายหลักการทำงานของตารางจัดเส้นทาง (Routing Table) ค่า Administrative Distance (AD) และ Longest Prefix Match ได้",
        "2. กำหนดค่าเส้นทางแบบคงที่ (Static Route), เส้นทางปริยาย (Default Route) และเส้นทางสำรอง (Floating Static Route) ได้",
        "3. ตรวจสอบและแก้ไขปัญหาเส้นทางเครือข่ายด้วยคำสั่ง show ip route, ping และ traceroute ได้"
      ],
      overview:
        "IP Routing คือกระบวนการที่อุปกรณ์ระดับ Layer 3 (Router หรือ Layer 3 Switch) ใช้ตัดสินใจเลือกเส้นทางที่ดีที่สุดในการส่งต่อแพ็กเกจข้อมูล (Packet Forwarding) จากเครือข่ายต้นทางไปยังเครือข่ายปลายทางที่อยู่คนละวงแลนหรือต่างสาขา โดยอ้างอิงข้อมูลจากตารางจัดเส้นทาง (Routing Table)",
      sections: [
        {
          heading: "1. องค์ประกอบของ Routing Table และค่าความน่าเชื่อถือ (Administrative Distance - AD)",
          content:
            "เมื่อเราเตอร์เรียนรู้เส้นทางไปยังเครือข่ายปลายทางเดียวกันจากหลายแหล่ง จะใช้ค่า Administrative Distance (AD) เป็นตัวตัดสินใจเลือกเส้นทางที่เชื่อถือได้มากที่สุด (ค่า AD ยิ่งน้อยยิ่งดี) และใช้หลัก Longest Prefix Match (Subnet Mask ที่เฉพาะเจาะจงที่สุด) ในการส่งแพ็กเกจ:",
          bullets: [
            "Directly Connected (C): เครือข่ายที่เชื่อมต่อโดยตรงกับพอร์ตของเราเตอร์ ค่า AD = 0",
            "Static Route (S): เส้นทางที่ผู้ดูแลระบบกำหนดเองด้วยมือ ค่า AD = 1",
            "EBGP (B): โพรโทคอลเชื่อมระหว่างผู้ให้บริการอินเทอร์เน็ต ค่า AD = 20",
            "EIGRP (D): โพรโทคอลจัดเส้นทางอัตโนมัติ ค่า AD = 90",
            "OSPF (O): โพรโทคอลจัดเส้นทางอัตโนมัติแบบ Link-State มาตรฐานสากล ค่า AD = 110",
            "RIP (R): โพรโทคอลแบบ Distance Vector ค่า AD = 120"
          ]
        },
        {
          heading: "2. ประเภทของ Static Routing ที่ใช้ในองค์กร",
          content: "การกำหนดเส้นทางแบบ Static Route นิยมใช้งานใน 3 รูปแบบสำคัญ:",
          bullets: [
            "1) Standard Static Route: กำหนดเส้นทางไปยังเครือข่ายปลายทางเฉพาะเจาะจง เช่น เชื่อมต่อระหว่างสำนักงานใหญ่กับสาขา หรือระหว่าง Core Router กับ Layer 3 Switch ภายในองค์กร",
            "2) Default Static Route (0.0.0.0 0.0.0.0): เส้นทางออกสู่อินเทอร์เน็ต (Gateway of Last Resort) สำหรับแพ็กเกจที่ไม่ตรงกับเครือข่ายภายในใดๆ ในตาราง Routing",
            "3) Floating Static Route: เส้นทางสำรองที่กำหนดค่า AD ให้สูงกว่าเส้นทางหลัก (เช่น กำหนด AD = 5 หรือ AD = 200) จะทำงานอัตโนมัติทันทีเมื่อเส้นทางหลักล่ม"
          ]
        }
      ],
      cliReference: `! 1. การกำหนด Static Route ไปยังเครือข่ายภายในของ Layer 3 Switch
Router(config)# ip route 192.168.10.0 255.255.255.0 10.0.0.2
Router(config)# ip route 192.168.20.0 255.255.255.0 10.0.0.2

! 2. การกำหนด Default Route ออกสู่อินเทอร์เน็ต (ISP Gateway)
Router(config)# ip route 0.0.0.0 0.0.0.0 203.113.10.1

! 3. การกำหนด Floating Static Route (เส้นทางสำรองผ่านลิงก์สำรอง โดยตั้งค่า AD = 10)
Router(config)# ip route 0.0.0.0 0.0.0.0 202.44.20.1 10

! 4. ตัวอย่างการเปิดใช้งาน OSPF (Dynamic Routing) เบื้องต้น
Router(config)# router ospf 1
Router(config-router)# network 10.0.0.0 0.0.0.3 area 0
Router(config-router)# default-information originate
Router(config-router)# end

! 5. คำสั่งตรวจสอบตารางเส้นทาง
Router# show ip route
Router# traceroute 192.168.20.10`,
      summary:
        "การจัดเส้นทางเครือข่ายอย่างถูกต้องต้องกำหนดเส้นทางทั้งขาไปและขากลับ (Bidirectional Routing) โดยใช้ Static Route สำหรับเครือข่ายที่มีโครงสร้างแน่นอน ใช้ Default Route สำหรับออกสู่อินเทอร์เน็ต และใช้ Floating Static หรือ OSPF สำหรับระบบเส้นทางสำรอง"
    },
    activitySheet: {
      sheetNo: 5,
      title: "ใบกิจกรรมที่ 5 : วิเคราะห์ตาราง Routing Table และแก้ไขปัญหา Asymmetric / Missing Return Route",
      duration: "60 นาที",
      scenario:
        "เครือข่ายองค์กรมี Layer 3 Switch (MLS1: 10.0.0.2/30) ซึ่งดูแล VLAN 10 (192.168.10.0/24) และ VLAN 20 (192.168.20.0/24) เชื่อมต่อกับ Edge Router (R1: 10.0.0.1/30) ผู้ดูแลระบบตั้งค่า Default Route บน MLS1 ชี้ไปที่ 10.0.0.1 แล้ว แต่เครื่องใน VLAN 10 ยังไม่สามารถ Ping ไปยังพอร์ต WAN ของ R1 (203.113.10.2) ได้",
      questions: [
        {
          qNo: 1,
          question: "1. เพราะเหตุใดเครื่องใน VLAN 10 จึงยัง Ping ไปที่พอร์ต WAN ของ R1 ไม่สำเร็จ ทั้งที่ตั้ง Default Route บน MLS1 ไปยัง R1 แล้ว",
          suggestedAnswer:
            "เพราะ R1 ยังไม่มีเส้นทางขากลับ (Return Route) ไปยังเครือข่าย 192.168.10.0/24 และ 192.168.20.0/24 เมื่อแพ็กเกจ ICMP Echo Request ไปถึง R1 แล้ว R1 ไม่ทราบว่าจะส่ง Echo Reply กลับไปที่ Next-hop ใด จึงทิ้งแพ็กเกจ"
        },
        {
          qNo: 2,
          question: "2. จงเขียนคำสั่ง Static Route แบบสรุปรวมเส้นทาง (Summary Static Route) บน R1 เพียงบรรทัดเดียว ที่ครอบคลุมทั้ง 192.168.10.0/24 และ 192.168.20.0/24 ชี้กลับมายัง MLS1 (10.0.0.2)",
          suggestedAnswer:
            "R1(config)# ip route 192.168.0.0 255.255.224.0 10.0.0.2 (ครอบคลุมตั้งแต่ 192.168.0.0 ถึง 192.168.31.255)"
        },
        {
          qNo: 3,
          question: "3. หากองค์กรมีลิงก์เชื่อมต่อระหว่างสำนักงานใหญ่กับสาขา 2 เส้นทาง (Fiber หลัก 1Gbps และ 4G/5G สำรอง) จะตั้งค่า Floating Static Route อย่างไรให้ใช้สาย Fiber เป็นหลักและสลับไป 4G/5G อัตโนมัติเมื่อสายหลักขาด",
          suggestedAnswer:
            "ตั้งค่า Static Route เส้นทางหลักผ่าน Fiber ด้วยค่า AD ปกติ (= 1) และตั้งค่า Static Route เส้นทางสำรองผ่านเกตเวย์ 4G/5G โดยระบุค่า AD ต่อท้ายให้สูงกว่า 1 เช่น ip route 172.16.0.0 255.255.0.0 <4G-NextHop> 10"
        }
      ]
    },
    jobSheet: {
      sheetNo: 5,
      title: "ใบงานที่ 5 : การกำหนดค่า Static Route, Default Route และ Floating Static Route ในเครือข่ายองค์กร",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. Router จำนวน 2 เครื่อง (HQ-Router และ Branch-Router) และ Layer 3 Switch 1 เครื่อง (HQ-L3SW)",
        "2. เครื่องคอมพิวเตอร์ลูกข่ายในสำนักงานใหญ่และสาขา"
      ],
      topology:
        "HQ-L3SW (VLAN 10: 192.168.10.0/24, VLAN 20: 192.168.20.0/24) <--(10.0.0.0/30)--> HQ-Router <--ลิงก์หลัก (172.16.1.0/30) & ลิงก์สำรอง (172.16.2.0/30)--> Branch-Router (LAN: 192.168.50.0/24)",
      steps: [
        "ขั้นที่ 1: กำหนดหมายเลข IP บนอินเทอร์เฟซเชื่อมต่อระหว่าง HQ-L3SW, HQ-Router และ Branch-Router ตามแผนผัง",
        "ขั้นที่ 2: บน HQ-L3SW กำหนด Default Route ชี้ไปยัง HQ-Router (10.0.0.1)",
        "ขั้นที่ 3: บน HQ-Router กำหนด Static Route ขากลับมายัง VLAN 10 และ VLAN 20 (ชี้ไปที่ 10.0.0.2) และกำหนด Static Route ไปยัง Branch LAN (192.168.50.0/24) ผ่านลิงก์หลัก (172.16.1.2) พร้อม Floating Static Route ผ่านลิงก์สำรอง (172.16.2.2 AD 10)",
        "ขั้นที่ 4: บน Branch-Router กำหนด Static Route และ Floating Static Route กลับมายังเครือข่ายสำนักงานใหญ่",
        "ขั้นที่ 5: ทดสอบ Ping, Traceroute และจำลองการสั่ง shutdown ลิงก์หลักเพื่อทดสอบการสลับไปใช้ Floating Static Route อัตโนมัติ"
      ],
      checkpoints: [
        "ตาราง Routing Table ของทุกอุปกรณ์แสดงเส้นทาง Static (S) และ Default (S*) ถูกต้อง",
        "ทดสอบ Ping และ Traceroute จาก VLAN 10 สำนักงานใหญ่ไปยัง LAN สาขา (192.168.50.10) สำเร็จ",
        "เมื่อจำลองสายหลักขาด (shutdown) ระบบสลับไปใช้เส้นทางสำรอง (Floating Static Route AD 10) ได้โดยการสื่อสารไม่หยุดชะงัก"
      ],
      solutionCli: `! บน HQ-Router
ip route 192.168.10.0 255.255.255.0 10.0.0.2
ip route 192.168.20.0 255.255.255.0 10.0.0.2
ip route 192.168.50.0 255.255.255.0 172.16.1.2
ip route 192.168.50.0 255.255.255.0 172.16.2.2 10

! บน Branch-Router
ip route 192.168.0.0 255.255.224.0 172.16.1.1
ip route 192.168.0.0 255.255.224.0 172.16.2.1 10`
    },
    assignmentSheet: {
      sheetNo: 5,
      title: "ใบมอบหมายงานที่ 5 : ออกแบบตาราง Routing สำหรับเครือข่ายองค์กร 3 สาขา",
      taskDescription:
        "ให้ออกแบบแผนผังหมายเลข IP และเขียนตารางสรุปคำสั่ง Static Route / Floating Static Route สำหรับองค์กรที่มีสำนักงานใหญ่ 1 แห่ง และสาขาย่อย 2 แห่ง เชื่อมต่อกันแบบสามเหลี่ยม (Full Mesh) เพื่อให้มีเส้นทางสำรองทุกสาขา",
      deliverables: [
        "1. แผนผังเครือข่าย 3 สาขา พร้อมระบุ Subnet ของ LAN และ WAN Point-to-Point (/30)",
        "2. ชุดคำสั่ง Static Route และ Floating Static Route ของเราเตอร์ทั้ง 3 สาขา"
      ],
      rubric: "การออกแบบ Subnet ถูกต้อง 3 คะแนน | ความถูกต้องของเส้นทางหลักและสำรอง 5 คะแนน | การตรวจสอบเส้นทาง 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 6,
    unit: 3,
    unitTitle: "หน่วยที่ 3 การจัดเส้นทางเครือข่ายและการจัดสรรหมายเลข IP (IP Routing, DHCP, DHCP Snooping)",
    weekTitle: "การกำหนดค่า DHCP และการป้องกันด้วย DHCP Snooping",
    dutyRef: "งานหลัก 2 จัดการเครือข่ายระดับ Layer 2/Layer 3 (งานย่อย 2.2 กำหนดค่า IP Routing, DHCP และ DHCP Snooping)",
    standardRef: "40104.01 กำหนดค่าระบบเครือข่ายระดับ Layer 2/Layer 3 (VLAN, Routing, DHCP)",
    knowledgeSheet: {
      sheetNo: 6,
      title: "ใบความรู้ที่ 6 : การจัดสรรหมายเลข IP อัตโนมัติด้วย DHCP, DHCP Relay และการป้องกันด้วย DHCP Snooping",
      objectives: [
        "1. อธิบายขั้นตอนการทำงานของโพรโทคอล DHCP (DORA Process) และหลักการของ DHCP Relay Agent ได้",
        "2. กำหนดค่า DHCP Server Pool, Excluded Address และ ip helper-address สำหรับเครือข่ายหลาย VLAN ได้",
        "3. อธิบายภัยคุกคามจาก Rogue DHCP Server และกำหนดค่า DHCP Snooping บนสวิตช์เพื่อป้องกันเครือข่ายได้"
      ],
      overview:
        "Dynamic Host Configuration Protocol (DHCP) ช่วยแจกจ่ายหมายเลข IP, Subnet Mask, Default Gateway และ DNS Server ให้กับเครื่องลูกข่ายในองค์กรโดยอัตโนมัติ อย่างไรก็ตาม หากมีผู้ใช้แอบนำเราเตอร์ไร้สายส่วนตัวมาเสียบเข้ากับพอร์ตสวิตช์ในองค์กร หรือมีผู้ไม่หวังดีทำ Rogue DHCP Attack แจก Gateway ปลอมเพื่อดักจับข้อมูล (Man-in-the-Middle) จะทำให้เครือข่ายล่มและเกิดความเสี่ยงด้านความปลอดภัย จึงต้องเปิดใช้งานฟีเจอร์ DHCP Snooping บนสวิตช์",
      sections: [
        {
          heading: "1. กระบวนการทำงานของ DHCP (DORA Process) และ DHCP Relay (ip helper-address)",
          content: "การขอรับหมายเลข IP ของเครื่องลูกข่ายประกอบด้วย 4 ขั้นตอน (DORA):",
          bullets: [
            "1) DHCP Discover (Broadcast): เครื่องลูกข่ายส่งข้อความค้นหา DHCP Server ในเครือข่าย",
            "2) DHCP Offer (Unicast/Broadcast): DHCP Server เสนอหมายเลข IP ที่ว่างอยู่พร้อมพารามิเตอร์ให้เครื่องลูกข่าย",
            "3) DHCP Request (Broadcast): เครื่องลูกข่ายตอบกลับเพื่อยืนยันขอใช้งานหมายเลข IP ที่ได้รับเสนอ",
            "4) DHCP Acknowledge - ACK: DHCP Server ยืนยันการให้เช่า IP (Lease Time) และบันทึกลงในตาราง DHCP Binding",
            "DHCP Relay Agent (ip helper-address): เนื่องจากข้อความ DHCP Discover เป็น Broadcast ซึ่งไม่สามารถข้าม VLAN หรือข้ามเราเตอร์ได้ จึงต้องตั้งค่าคำสั่ง ip helper-address <IP-ของ-DHCP-Server> บนอินเทอร์เฟซ Gateway (SVI หรือ Sub-interface) เพื่อแปลง Broadcast เป็น Unicast ส่งต่อไปยัง DHCP Server กลาง"
          ]
        },
        {
          heading: "2. การป้องกัน Rogue DHCP Server ด้วยเทคโนโลยี DHCP Snooping",
          content:
            "DHCP Snooping เป็นฟีเจอร์ความปลอดภัยระดับ Layer 2 บนสวิตช์ ทำหน้าที่เสมือนไฟร์วอลล์คัดกรองข้อความ DHCP โดยแบ่งพอร์ตบนสวิตช์ออกเป็น 2 ประเภท:",
          bullets: [
            "Trusted Port (พอร์ตที่เชื่อถือได้): พอร์ตที่เชื่อมต่อกับ DHCP Server ขององค์กร หรือพอร์ต Uplink/Trunk ที่เชื่อมไปยัง Core/Distribution Switch อนุญาตให้ส่งข้อความ DHCP Offer และ DHCP ACK ผ่านได้",
            "Untrusted Port (พอร์ตที่ไม่เชื่อถือ - ค่าเริ่มต้นของทุกพอร์ต): พอร์ตที่เชื่อมต่อกับเครื่องลูกข่ายทั่วไป อนุญาตให้ส่งเฉพาะคำขอ (Discover/Request) เท่านั้น หากมีข้อความ DHCP Offer หรือ ACK ส่งมาจากพอร์ต Untrusted สวิตช์จะบล็อกทิ้งทันที และสามารถจำกัดอัตราการส่งแพ็กเกจ (Rate Limit) เพื่อป้องกัน DHCP Starvation Attack ได้ด้วย"
          ]
        }
      ],
      cliReference: `! === 1. การตั้งค่า DHCP Server สำหรับหลาย VLAN บน Router/L3 Switch ===
Router(config)# ip dhcp excluded-address 192.168.10.1 192.168.10.10
Router(config)# ip dhcp excluded-address 192.168.20.1 192.168.20.10

Router(config)# ip dhcp pool VLAN10_IT_POOL
Router(dhcp-config)# network 192.168.10.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.10.1
Router(dhcp-config)# dns-server 8.8.8.8 1.1.1.1
Router(dhcp-config)# domain-name nyk.ac.th
Router(dhcp-config)# exit

! กรณี DHCP Server อยู่คนละวงแลน ให้ตั้งค่า DHCP Relay บน SVI/Gateway
L3-Switch(config)# interface vlan 20
L3-Switch(config-if)# ip helper-address 10.0.0.1

! === 2. การตั้งค่า DHCP Snooping บน Access Switch ===
Access-SW(config)# ip dhcp snooping
Access-SW(config)# ip dhcp snooping vlan 10,20,30
Access-SW(config)# no ip dhcp snooping information option

! กำหนดพอร์ต Uplink ที่เชื่อมไปยัง DHCP Server ให้เป็น Trusted
Access-SW(config)# interface gigabitEthernet 0/1
Access-SW(config-if)# ip dhcp snooping trust

! กำหนดพอร์ตลูกข่ายให้จำกัดอัตราการขอ IP (ป้องกัน DHCP Starvation)
Access-SW(config)# interface range fastEthernet 0/1 - 24
Access-SW(config-if-range)# ip dhcp snooping limit rate 15
Access-SW(config-if-range)# end

! คำสั่งตรวจสอบ
Router# show ip dhcp binding
Access-SW# show ip dhcp snooping
Access-SW# show ip dhcp snooping binding`,
      summary:
        "การจัดสรร IP ในองค์กรอย่างมีประสิทธิภาพต้องสำรอง IP สำหรับอุปกรณ์สำคัญด้วย excluded-address และเปิดใช้งาน DHCP Snooping บน Access Switch เสมอ เพื่อบล็อก Rogue DHCP Server บนพอร์ตลูกข่าย"
    },
    activitySheet: {
      sheetNo: 6,
      title: "ใบกิจกรรมที่ 6 : วิเคราะห์เหตุการณ์ Rogue DHCP Attack และการออกแบบพอร์ต Trusted / Untrusted",
      duration: "60 นาที",
      scenario:
        "เช้าวันจันทร์ เจ้าหน้าที่แผนกบัญชีจำนวน 15 คนแจ้งว่าคอมพิวเตอร์เชื่อมต่อเครือข่ายได้แต่เข้าใช้งานระบบบัญชีและอินเทอร์เน็ตไม่ได้ เมื่อตรวจสอบด้วยคำสั่ง ipconfig /all บนเครื่องที่มีปัญหา พบว่าได้รับ IP 192.168.0.105 และ Default Gateway เป็น 192.168.0.1 แทนที่จะเป็น IP ของแผนกบัญชี (192.168.30.x Gateway 192.168.30.1)",
      questions: [
        {
          qNo: 1,
          question: "1. จากอาการดังกล่าว เกิดปัญหาใดขึ้นในระบบเครือข่ายของแผนกบัญชี และทำไมเครื่องลูกข่ายจึงไปรับ IP ที่ผิดพลาดนั้น",
          suggestedAnswer:
            "เกิดจากมี Rogue DHCP Server ในวงแลนแผนกบัญชี (เช่น มีผู้ใช้นำเราเตอร์ Wi-Fi บ้านมาเสียบสายแลนเข้าช่อง LAN ของตัวเราเตอร์ Wi-Fi ซึ่งเปิด DHCP 192.168.0.1 ไว้) เมื่อเครื่องลูกข่ายส่ง DHCP Discover ออกไป เราเตอร์แปลกปลอมอยู่ใกล้กว่าจึงตอบ DHCP Offer กลับมาถึงก่อน DHCP Server จริงขององค์กร"
        },
        {
          qNo: 2,
          question: "2. หากเปิดใช้งาน DHCP Snooping บนสวิตช์แผนกบัญชี พอร์ตใดต้องตั้งเป็น Trusted และพอร์ตใดต้องเป็น Untrusted",
          suggestedAnswer:
            "พอร์ต Uplink (เช่น Gi0/1) ที่เชื่อมต่อไปยัง Distribution Switch / DHCP Server ขององค์กรต้องตั้งค่าเป็น Trusted (ip dhcp snooping trust) ส่วนพอร์ต Fa0/1 - 24 ที่เชื่อมต่อไปยังโต๊ะทำงานของผู้ใช้ทั้งหมดต้องปล่อยเป็น Untrusted พร้อมกำหนด limit rate"
        },
        {
          qNo: 3,
          question: "3. ตาราง DHCP Snooping Binding Database ที่สวิตช์สร้างขึ้นอัตโนมัติ เก็บข้อมูลใดบ้าง และนำไปต่อยอดกับฟีเจอร์ความปลอดภัยอื่นใดได้",
          suggestedAnswer:
            "เก็บข้อมูล MAC Address ของลูกข่าย, IP Address ที่ได้รับแจก, Lease Time, VLAN ID และหมายเลขพอร์ตสวิตช์ที่เชื่อมต่อ ซึ่งฐานข้อมูลนี้สามารถนำไปใช้ต่อยอดกับ Dynamic ARP Inspection (DAI) และ IP Source Guard (IPSG) เพื่อป้องกันการปลอมแปลง IP/ARP Spoofing"
        }
      ]
    },
    jobSheet: {
      sheetNo: 6,
      title: "ใบงานที่ 6 : การกำหนดค่า Multi-VLAN DHCP Server, DHCP Relay และการป้องกันด้วย DHCP Snooping",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. Core Router (ทำหน้าที่เป็น Central DHCP Server) 1 เครื่อง",
        "2. Layer 3 Distribution Switch 1 เครื่อง และ Layer 2 Access Switch 1 เครื่อง",
        "3. เครื่องลูกข่าย PC 3 เครื่อง และเครื่องจำลอง Rogue DHCP Server 1 เครื่อง"
      ],
      topology:
        "Core Router (10.0.0.1/30) <--> L3-SW (10.0.0.2/30, SVI VLAN 10: 192.168.10.1/24, SVI VLAN 20: 192.168.20.1/24) <--> Access-SW (Gi0/1 Trunk, Fa0/1-10 VLAN 10, Fa0/11-20 VLAN 20, Fa0/24 ต่อกับ Rogue DHCP Server)",
      steps: [
        "ขั้นที่ 1: บน Core Router ตั้งค่า ip dhcp excluded-address และสร้าง DHCP Pool สำหรับ VLAN 10 และ VLAN 20",
        "ขั้นที่ 2: บน L3-SW ตั้งค่าคำสั่ง ip helper-address 10.0.0.1 ภายใต้ interface vlan 10 และ interface vlan 20",
        "ขั้นที่ 3: บน Access-SW เปิดใช้งาน ip dhcp snooping สำหรับ vlan 10,20 และสั่ง no ip dhcp snooping information option",
        "ขั้นที่ 4: ตั้งค่าพอร์ต Gi0/1 ของ Access-SW เป็น ip dhcp snooping trust และกำหนด ip dhcp snooping limit rate 10 บนพอร์ตลูกข่าย Fa0/1-24",
        "ขั้นที่ 5: ทดสอบขอรับ IP จากเครื่องลูกข่าย และจำลองการเปิด Rogue DHCP Server ที่พอร์ต Fa0/24 เพื่อพิสูจน์ว่าสวิตช์บล็อก DHCP Offer แปลกปลอมได้จริง"
      ],
      checkpoints: [
        "เครื่องลูกข่ายใน VLAN 10 และ VLAN 20 ได้รับหมายเลข IP, Gateway และ DNS จาก Central DHCP Server ผ่าน DHCP Relay ถูกต้อง",
        "ตรวจสอบ show ip dhcp snooping บน Access-SW แสดงพอร์ต Gi0/1 เป็น Trusted (Yes) และพอร์ตลูกข่ายเป็น Untrusted (No)",
        "Rogue DHCP Server ที่ต่ออยู่กับพอร์ต Fa0/24 ไม่สามารถแจก IP ปลอมให้กับเครื่องลูกข่ายได้"
      ],
      solutionCli: `! บน Core Router
ip dhcp excluded-address 192.168.10.1 192.168.10.10
ip dhcp excluded-address 192.168.20.1 192.168.20.10
ip dhcp pool VLAN10
 network 192.168.10.0 255.255.255.0
 default-router 192.168.10.1
 dns-server 8.8.8.8
ip dhcp pool VLAN20
 network 192.168.20.0 255.255.255.0
 default-router 192.168.20.1
 dns-server 8.8.8.8

! บน L3-SW
interface vlan 10
 ip helper-address 10.0.0.1
interface vlan 20
 ip helper-address 10.0.0.1

! บน Access-SW
ip dhcp snooping
ip dhcp snooping vlan 10,20
no ip dhcp snooping information option
interface gi0/1
 ip dhcp snooping trust
interface range fa0/1 - 24
 ip dhcp snooping limit rate 10`
    },
    assignmentSheet: {
      sheetNo: 6,
      title: "ใบมอบหมายงานที่ 6 : ออกแบบระบบ Central DHCP Server และมาตรการป้องกัน Layer 2 DHCP Security",
      taskDescription:
        "ให้ผู้เรียนออกแบบการตั้งค่า DHCP Server แบบรวมศูนย์สำหรับองค์กรที่มี 4 VLAN พร้อมกำหนดช่วง IP สำรองสำหรับเซิร์ฟเวอร์และเครื่องพิมพ์ และเขียนคู่มือขั้นตอนการเปิดใช้งาน DHCP Snooping บนสวิตช์ทุกตัวในเครือข่าย",
      deliverables: [
        "1. ตารางจัดสรรช่วง IP Address Pool และ Excluded Address ของทั้ง 4 VLAN",
        "2. สคริปต์คำสั่งตั้งค่า DHCP Pool, DHCP Relay และ DHCP Snooping พร้อมคำอธิบายทีละบรรทัด"
      ],
      rubric: "การออกแบบ DHCP Pool & Excluded IP 4 คะแนน | การตั้งค่า Relay & Snooping 4 คะแนน | ความชัดเจนของคู่มือ 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 7,
    unit: 4,
    unitTitle: "หน่วยที่ 4 ความเสถียรของระบบเครือข่ายระดับ Layer 2 (Loop Guard, Spanning Tree, Link Aggregation)",
    weekTitle: "การป้องกันปัญหาวงวนสัญญาณด้วย Spanning Tree และ Loop Guard",
    dutyRef: "งานหลัก 3 รักษาความเสถียรของระบบเครือข่าย (งานย่อย 3.1 ป้องกันวงวนสัญญาณด้วย Spanning Tree และ Loop Guard)",
    standardRef: "มาตรฐานอาชีพ สถาบันคุณวุฒิวิชาชีพ อาชีพช่างสนับสนุนด้านเทคนิค ระดับ 4-5",
    knowledgeSheet: {
      sheetNo: 7,
      title: "ใบความรู้ที่ 7 : การป้องกันปัญหาวงวนสัญญาณระดับ Layer 2 ด้วย Spanning Tree Protocol (STP/RSTP) และ Loop Guard",
      objectives: [
        "1. อธิบายสาเหตุและผลกระทบของปัญหาวงวนสัญญาณระดับ Layer 2 (Broadcast Storm, MAC Database Instability) ได้",
        "2. อธิบายกระบวนการทำงานของ Spanning Tree Protocol (Root Bridge Election, Port Roles & States) และ Rapid PVST+ ได้",
        "3. กำหนดค่า Spanning Tree Priority, PortFast, BPDU Guard และ Loop Guard บนสวิตช์เพื่อรักษาความเสถียรของเครือข่ายได้"
      ],
      overview:
        "ในการออกแบบเครือข่ายให้มีความเสถียรสูง (High Availability) จำเป็นต้องเดินสายสัญญาณสำรอง (Redundant Links) ระหว่างสวิตช์เพื่อป้องกันจุดเสี่ยงจุดเดียว (Single Point of Failure) แต่การเชื่อมต่อสวิตช์เป็นวงรอบ (Physical Loop) โดยไม่มีกลไกควบคุม จะทำให้เกิดวงวนสัญญาณระดับ Layer 2 (Switching Loop) ซึ่งทำให้เครือข่ายล่มภายในไม่กี่วินาที ดังนั้นจึงต้องใช้ Spanning Tree Protocol (STP) และกลไกปกป้องอย่าง Loop Guard",
      sections: [
        {
          heading: "1. อันตรายของ Layer 2 Switching Loop และการทำงานของ Spanning Tree Protocol (STP)",
          content:
            "เนื่องจาก Ethernet Frame ในระดับ Layer 2 ไม่มีฟิลด์ TTL (Time-To-Live) เหมือน IP Packet เมื่อเกิดลูป เฟรม Broadcast จะวิ่งวนไม่รู้จบ (Broadcast Storm) กินแบนด์วิดท์และ CPU ของสวิตช์เต็ม 100% STP (IEEE 802.1D) และ RSTP (IEEE 802.1w) จึงป้องกันลูปโดยใช้ 3 ขั้นตอนหลัก:",
          bullets: [
            "1) เลือกตั้ง Root Bridge (สวิตช์ศูนย์กลาง): สวิตช์ทุกตัวส่งเฟรม BPDU แลกเปลี่ยนกัน สวิตช์ที่มีค่า Bridge ID (Priority + MAC Address) ต่ำที่สุด จะได้รับเลือกเป็น Root Bridge (ค่าเริ่มต้น Priority = 32,768)",
            "2) เลือก Root Port (RP) บน Non-Root Switch: พอร์ตบนสวิตช์ลูกที่มีค่า Path Cost เดินทางไปยัง Root Bridge ต่ำที่สุด",
            "3) เลือก Designated Port (DP) และ Alternate/Blocking Port (BLK): ในแต่ละลิงก์จะมีพอร์ตที่ส่งข้อมูลได้ (Designated Port) ส่วนพอร์ตสำรองที่ทำให้เกิดลูปจะถูกบล็อกไว้ในสถานะ Blocking/Alternate และจะเปิดทำงานทันทีเมื่อสายหลักขาด"
          ]
        },
        {
          heading: "2. การเพิ่มความเร็วและกลไกป้องกัน STP: Rapid-PVST+, PortFast, BPDU Guard และ Loop Guard",
          content: "เพื่อให้ Spanning Tree ทำงานได้รวดเร็วและปลอดภัยจากความผิดพลาดของสายสัญญาณ ต้องตั้งค่าเสริมดังนี้:",
          bullets: [
            "Rapid-PVST+ (IEEE 802.1w): ลดเวลาการสลับเส้นทางสำรอง (Convergence Time) จาก 30-50 วินาที เหลือเพียง 1-2 วินาที",
            "PortFast & BPDU Guard: เปิดใช้บนพอร์ต Access ที่เชื่อมต่อกับเครื่องคอมพิวเตอร์ลูกข่าย เพื่อให้พอร์ตเข้าสู่สถานะ Forwarding ทันทีโดยไม่ต้องรอ 30 วินาที และหากมีใครนำสวิตช์มาเสียบที่พอร์ตลูกข่าย (ได้รับ BPDU) BPDU Guard จะสั่งตัดพอร์ตนั้นเป็น err-disabled ทันที",
            "Loop Guard (spanning-tree guard loop): ป้องกันปัญหา Unidirectional Link Failure (เช่น สายไฟเบอร์เส้นส่งหรือเส้นรับขาดไปข้างเดียว) ซึ่งทำให้พอร์ต Blocking ไม่ได้รับ BPDU จากฝั่งตรงข้าม หากไม่มี Loop Guard พอร์ต Blocking จะเข้าใจผิดว่าเส้นทางหลักขาดและเปลี่ยนตัวเองเป็น Forwarding จนเกิดลูปจริง แต่เมื่อเปิด Loop Guard พอร์ตจะถูกเปลี่ยนเป็นสถานะ loop-inconsistent (Blocking) เพื่อป้องกันลูป"
          ]
        }
      ],
      cliReference: `! 1. เปิดใช้งานโหมด Rapid-PVST+ และกำหนด Root Bridge หลักและสำรอง
Core-SW1(config)# spanning-tree mode rapid-pvst
Core-SW1(config)# spanning-tree vlan 10,20,30,99 root primary
Dist-SW2(config)# spanning-tree mode rapid-pvst
Dist-SW2(config)# spanning-tree vlan 10,20,30,99 root secondary

! 2. เปิดใช้งาน Loop Guard บนพอร์ตเชื่อมต่อระหว่างสวิตช์ (Non-Designated / Root / Alternate Ports)
Access-SW(config)# spanning-tree loopguard default
! หรือเปิดเฉพาะพอร์ต Uplink:
Access-SW(config)# interface range gigabitEthernet 0/1 - 2
Access-SW(config-if-range)# spanning-tree guard loop

! 3. เปิดใช้งาน PortFast และ BPDU Guard บนพอร์ตลูกข่าย (Access Ports)
Access-SW(config)# interface range fastEthernet 0/1 - 24
Access-SW(config-if-range)# spanning-tree portfast
Access-SW(config-if-range)# spanning-tree bpduguard enable
Access-SW(config-if-range)# end

! 4. คำสั่งตรวจสอบสถานะ Spanning Tree
Access-SW# show spanning-tree
Access-SW# show spanning-tree summary
Access-SW# show spanning-tree inconsistentports`,
      summary:
        "ผู้ดูแลระบบควรกำหนดให้ Core/Distribution Switch เป็น Root Bridge เสมอ เปิดใช้โหมด Rapid-PVST+ พร้อมเปิด Loop Guard บนลิงก์ระหว่างสวิตช์เพื่อป้องกันลูปจากปัญหาสายสัญญาณส่งทางเดียว และเปิด PortFast + BPDU Guard บนพอร์ตลูกข่าย"
    },
    activitySheet: {
      sheetNo: 7,
      title: "ใบกิจกรรมที่ 7 : วิเคราะห์การเลือกตั้ง Root Bridge และการทำงานของ Loop Guard",
      duration: "60 นาที",
      scenario:
        "เครือข่ายองค์กรมีสวิตช์ 3 ตัวต่อกันเป็นรูปสามเหลี่ยม ได้แก่ SW-Core (Priority 32768, MAC: 0050.7966.6800), SW-Dist (Priority 32768, MAC: 0010.1122.3344) และ SW-Accessรุ่นเก่าในห้องเก็บของ (Priority 32768, MAC: 0001.42AA.BBCC) ทุกพอร์ตเชื่อมต่อด้วยความเร็ว 1 Gbps",
      questions: [
        {
          qNo: 1,
          question: "1. หากปล่อยค่าเริ่มต้นไว้ สวิตช์ตัวใดจะได้รับเลือกเป็น Root Bridge และส่งผลเสียต่อประสิทธิภาพเครือข่ายอย่างไร",
          suggestedAnswer:
            "SW-Access รุ่นเก่าในห้องเก็บของจะได้รับเลือกเป็น Root Bridge เพราะมีค่า Priority เท่ากันที่ 32768 แต่มีค่า MAC Address ต่ำที่สุด (0001.42AA.BBCC) ส่งผลเสียคือทราฟฟิกหลักขององค์กรจะถูกบังคับให้วิ่งอ้อมผ่านสวิตช์รุ่นเก่าที่มีประสิทธิภาพต่ำแทนที่จะวิ่งผ่าน SW-Core"
        },
        {
          qNo: 2,
          question: "2. จงระบุคำสั่งเพื่อบังคับให้ SW-Core เป็น Root Bridge หลัก (Priority 24576 หรือ 4096) และให้ SW-Dist เป็น Secondary Root Bridge",
          suggestedAnswer:
            "บน SW-Core ใช้คำสั่ง spanning-tree vlan 1-4094 root primary (หรือ spanning-tree vlan 1-4094 priority 4096) และบน SW-Dist ใช้คำสั่ง spanning-tree vlan 1-4094 root secondary (หรือ priority 8192)"
        },
        {
          qNo: 3,
          question: "3. Loop Guard แตกต่างจาก BPDU Guard อย่างไร และควรเปิดใช้งานบนพอร์ตประเภทใด",
          suggestedAnswer:
            "BPDU Guard ใช้เปิดบนพอร์ต Access (ที่ต่อกับ PC) โดยจะสั่งบล็อกพอร์ตทันทีที่ 'ได้รับ' เฟรม BPDU เข้ามา ในขณะที่ Loop Guard ใช้เปิดบนพอร์ต Trunk/Uplink ระหว่างสวิตช์ โดยจะสั่งบล็อกพอร์ตเป็น loop-inconsistent เมื่อพอร์ตที่เคยได้รับ BPDU อยู่ๆ ก็ 'หยุดได้รับ' BPDU เพื่อป้องกันการเปลี่ยนสถานะจาก Blocking เป็น Forwarding โดยผิดพลาด"
        }
      ]
    },
    jobSheet: {
      sheetNo: 7,
      title: "ใบงานที่ 7 : การกำหนดค่า Spanning Tree Protocol (Rapid-PVST+) และ Loop Guard บนสวิตช์",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. Managed Switch จำนวน 3 เครื่อง (SW1-Core, SW2-Dist, SW3-Access) เชื่อมต่อกันเป็นวงรอบสามเหลี่ยม",
        "2. เครื่องคอมพิวเตอร์ลูกข่าย 2 เครื่อง"
      ],
      topology:
        "SW1-Core <--(Gi0/1)-- (Gi0/1)--> SW2-Dist | SW1-Core <--(Gi0/2)-- (Gi0/1)--> SW3-Access | SW2-Dist <--(Gi0/2)-- (Gi0/2)--> SW3-Access (ทุกเส้นเป็น Trunk สำหรับ VLAN 10, 20)",
      steps: [
        "ขั้นที่ 1: เชื่อมต่อสวิตช์ทั้ง 3 ตัวเป็นรูปสามเหลี่ยมและตั้งค่าพอร์ตเชื่อมต่อทั้งหมดเป็น 802.1Q Trunk",
        "ขั้นที่ 2: ตรวจสอบสถานะ STP เริ่มต้นด้วยคำสั่ง show spanning-tree เพื่อระบุว่าสวิตช์ตัวใดเป็น Root Bridge และพอร์ตใดถูกบล็อก (BLK)",
        "ขั้นที่ 3: เปลี่ยนโหมดเป็น rapid-pvst บนสวิตช์ทั้ง 3 ตัว และตั้งค่าให้ SW1-Core เป็น Root Primary สำหรับ VLAN 10, 20 และ SW2-Dist เป็น Root Secondary",
        "ขั้นที่ 4: เปิดใช้งาน Loop Guard บนพอร์ต Trunk ของสวิตช์ทั้ง 3 ตัว (spanning-tree guard loop) และเปิดใช้งาน PortFast + BPDU Guard บนพอร์ตลูกข่าย Fa0/1-10",
        "ขั้นที่ 5: ทดสอบดึงสายหลักออก 1 เส้น และจับเวลาการสลับไปใช้สายสำรอง (Failover) พร้อมตรวจสอบสถานะด้วย show spanning-tree"
      ],
      checkpoints: [
        "SW1-Core แสดงสถานะ This bridge is the root สำหรับทุก VLAN และทุกพอร์ตเป็น Designated Forwarding (FWD)",
        "บน SW3-Access มีพอร์ต 1 พอร์ตเป็น Root Port (FWD) และอีก 1 พอร์ตเป็น Alternate Blocking (BLK)",
        "เปิดใช้งาน Loop Guard บนพอร์ต Uplink และ PortFast/BPDU Guard บนพอร์ต Access ครบถ้วน",
        "เมื่อจำลองสายหลักขาด พอร์ตสำรองเปลี่ยนจาก BLK เป็น FWD ภายใน 1-2 วินาที"
      ],
      solutionCli: `! บน SW1-Core
spanning-tree mode rapid-pvst
spanning-tree vlan 10,20 root primary
spanning-tree loopguard default

! บน SW2-Dist
spanning-tree mode rapid-pvst
spanning-tree vlan 10,20 root secondary
spanning-tree loopguard default

! บน SW3-Access
spanning-tree mode rapid-pvst
interface range gi0/1 - 2
 spanning-tree guard loop
interface range fa0/1 - 10
 spanning-tree portfast
 spanning-tree bpduguard enable`
    },
    assignmentSheet: {
      sheetNo: 7,
      title: "ใบมอบหมายงานที่ 7 : ออกแบบโครงสร้าง Per-VLAN Spanning Tree Load Sharing และ Loop Protection",
      taskDescription:
        "ให้ออกแบบการตั้งค่า Rapid-PVST+ สำหรับเครือข่ายที่มี Core Switch 2 ตัว (Core-A และ Core-B) และ Access Switch 2 ตัว โดยออกแบบให้ Core-A เป็น Root Primary ของ VLAN 10, 20 (และเป็น Secondary ของ VLAN 30, 40) ส่วน Core-B เป็น Root Primary ของ VLAN 30, 40 (และเป็น Secondary ของ VLAN 10, 20) เพื่อให้ใช้งานสาย Uplink ทั้งสองเส้นได้อย่างคุ้มค่าพร้อมตั้งค่า Loop Guard",
      deliverables: [
        "1. แผนผังแสดงตำแหน่ง Root Bridge, Root Port, Designated Port และ Alternate Blocking Port แยกตามกลุ่ม VLAN",
        "2. สคริปต์คำสั่ง CLI ของสวิตช์ทั้ง 4 ตัว"
      ],
      rubric: "การออกแบบ PVST+ Load Sharing ถูกต้อง 5 คะแนน | การตั้งค่า Loop Guard & BPDU Guard 3 คะแนน | แผนผังประกอบ 2 คะแนน (รวม 10 คะแนน)"
    }
  }
];
