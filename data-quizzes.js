window.UNIT_QUIZZES = [
  {
    unit: 1,
    unitTitle: "หน่วยที่ 1 หลักการบริหารจัดการระบบเครือข่ายและการเลือกใช้อุปกรณ์",
    cognitiveScore: 5,
    totalUnitScore: 12,
    hoursTP: "2/8",
    questions: [
      {
        id: "u1q1",
        level: "ความรู้",
        question: "1. ตามกรอบการบริหารจัดการระบบเครือข่ายมาตรฐาน ISO (FCAPS Model) ข้อใดหมายถึงการตรวจจับ วินิจฉัย และแก้ไขปัญหาเมื่ออุปกรณ์หรือสายสัญญาณเกิดการขัดข้อง",
        options: [
          "ก. Fault Management",
          "ข. Configuration Management",
          "ค. Accounting Management",
          "ง. Performance Management"
        ],
        answerIndex: 0,
        explanation: "Fault Management (F) คือการจัดการข้อผิดพลาด ครอบคลุมการตรวจจับ แจ้งเตือน วินิจฉัย และแก้ไขความขัดข้องของระบบเครือข่าย"
      },
      {
        id: "u1q2",
        level: "ความรู้",
        question: "2. มาตรฐานอาชีพสถาบันคุณวุฒิวิชาชีพ (องค์การมหาชน) รหัส 40104 ที่ใช้อ้างอิงในรายวิชา 31901-2011 การจัดการระบบเครือข่าย ตรงกับอาชีพและระดับใด",
        options: [
          "ก. อาชีพนักพัฒนาซอฟต์แวร์ ระดับ 3",
          "ข. อาชีพช่างสนับสนุนด้านเทคนิค ระดับ 5",
          "ค. อาชีพผู้ดูแลฐานข้อมูล ระดับ 4",
          "ง. อาชีพนักวิเคราะห์ระบบ ระดับ 6"
        ],
        answerIndex: 1,
        explanation: "รายวิชา 31901-2011 อ้างอิงมาตรฐานอาชีพ สถาบันคุณวุฒิวิชาชีพ (องค์การมหาชน) อาชีพช่างสนับสนุนด้านเทคนิค ระดับ 4 และ รหัส 40104 อาชีพช่างสนับสนุนด้านเทคนิค ระดับ 5"
      },
      {
        id: "u1q3",
        level: "ความเข้าใจ",
        question: "3. ในการออกแบบเครือข่ายแบบลำดับชั้น (Three-Tier Hierarchical Design) สวิตช์ในชั้นใดทำหน้าที่เชื่อมต่อโดยตรงกับเครื่องคอมพิวเตอร์ลูกข่าย โทรศัพท์ IP Phone และจ่ายไฟ PoE",
        options: [
          "ก. Core Layer",
          "ข. Distribution Layer",
          "ค. Access Layer",
          "ง. Backbone Layer"
        ],
        answerIndex: 2,
        explanation: "Access Layer ทำหน้าที่เป็นจุดเชื่อมต่อกับอุปกรณ์ปลายทาง (End Devices) เช่น PC, IP Phone, Access Point รวมถึงการทำ PoE และ Port Security"
      },
      {
        id: "u1q4",
        level: "ความเข้าใจ",
        question: "4. เครื่องมือใดใช้สำหรับกระแทกสายสัญญาณ UTP เข้ากับแผงกระจายสาย (Patch Panel) หรือเต้ารับตัวเมีย (Keystone Jack)",
        options: [
          "ก. RJ45 Crimping Tool",
          "ข. Impact Punch Down Tool",
          "ค. Optical Time-Domain Reflectometer (OTDR)",
          "ง. Fusion Splicer"
        ],
        answerIndex: 1,
        explanation: "Impact Punch Down Tool ใช้สำหรับกดและตัดปลายสายทองแดง UTP ลงในร่อง IDC ของ Keystone Jack และ Patch Panel"
      },
      {
        id: "u1q5",
        level: "การนำไปใช้",
        question: "5. หากต้องการเชื่อมต่อสวิตช์ระหว่างอาคารเรียน 2 หลังที่มีระยะห่างกัน 350 เมตร ที่ความเร็ว 10 Gbps ควรเลือกใช้วัสดุและอุปกรณ์ในข้อใดจึงจะเหมาะสมที่สุด",
        options: [
          "ก. สาย UTP Cat5e พร้อมหัว RJ45",
          "ข. สาย UTP Cat6A พร้อมหัว RJ45",
          "ค. สาย Fiber Optic พร้อมโมดูล SFP+ 10G",
          "ง. สาย Coaxial RG-6 พร้อมหัว BNC"
        ],
        answerIndex: 2,
        explanation: "สาย UTP รองรับระยะทางสูงสุดไม่เกิน 100 เมตร สำหรับระยะทาง 350 เมตร ที่ความเร็ว 10 Gbps ต้องใช้สาย Fiber Optic ร่วมกับโมดูล SFP+ 10G"
      }
    ]
  },
  {
    unit: 2,
    unitTitle: "หน่วยที่ 2 การจัดการ VLAN และ Inter-VLAN Routing",
    cognitiveScore: 6,
    totalUnitScore: 13,
    hoursTP: "2/8",
    questions: [
      {
        id: "u2q1",
        level: "ความรู้",
        question: "1. มาตรฐาน IEEE ใดที่ใช้สำหรับการติดป้ายกำกับเฟรมข้อมูล (Frame Tagging) เพื่อส่งข้อมูลหลาย VLAN ผ่านลิงก์ Trunk",
        options: [
          "ก. IEEE 802.1D",
          "ข. IEEE 802.1Q",
          "ค. IEEE 802.3ad",
          "ง. IEEE 802.3af"
        ],
        answerIndex: 1,
        explanation: "IEEE 802.1Q เป็นมาตรฐานสากลในการทำ VLAN Tagging บนพอร์ต Trunk โดยแทรกแท็กขนาด 4 ไบต์ลงใน Ethernet Frame"
      },
      {
        id: "u2q2",
        level: "ความเข้าใจ",
        question: "2. ข้อใดกล่าวถึงหน้าที่ของ Native VLAN บนลิงก์ Trunk มาตรฐาน 802.1Q ได้ถูกต้อง",
        options: [
          "ก. ใช้สำหรับรับ-ส่งเฟรมข้อมูลที่ไม่ได้ติดป้ายแท็ก (Untagged Frames) บนลิงก์ Trunk",
          "ข. ใช้สำหรับบล็อกพอร์ตที่เกิดวงวนสัญญาณเท่านั้น",
          "ค. ใช้สำหรับเข้ารหัสข้อมูลก่อนส่งออกสู่อินเทอร์เน็ต",
          "ง. ใช้สำหรับแจกหมายเลข IP ให้กับเครื่องลูกข่ายอัตโนมัติ"
        ],
        answerIndex: 0,
        explanation: "Native VLAN คือ VLAN ที่กำหนดไว้สำหรับรองรับเฟรมข้อมูลที่ไม่มีการติดแท็ก (Untagged) ที่วิ่งผ่านพอร์ต Trunk ซึ่งทั้งสองฝั่งของ Trunk ต้องตั้งค่า Native VLAN ให้ตรงกัน"
      },
      {
        id: "u2q3",
        level: "การนำไปใช้",
        question: "3. ในการตั้งค่า Inter-VLAN Routing แบบ Router-on-a-Stick บนอินเทอร์เฟซย่อย (Sub-interface) Gi0/0.20 สำหรับ VLAN 20 ต้องใช้คำสั่งใดก่อนกำหนดหมายเลข IP Address",
        options: [
          "ก. switchport access vlan 20",
          "ข. switchport mode trunk",
          "ค. encapsulation dot1Q 20",
          "ง. ip routing vlan 20"
        ],
        answerIndex: 2,
        explanation: "บน Sub-interface ของเราเตอร์ ต้องระบุคำสั่ง encapsulation dot1Q <vlan-id> ก่อนเสมอ จึงจะสามารถกำหนด ip address ได้"
      },
      {
        id: "u2q4",
        level: "การนำไปใช้",
        question: "4. เมื่อกำหนดค่า Inter-VLAN Routing บน Layer 3 Switch ด้วยการสร้าง interface vlan 10 และ interface vlan 20 แล้ว ต้องรันคำสั่งใดใน Global Configuration Mode เพื่อให้สวิตช์ทำหน้าที่หาเส้นทางข้าม VLAN ได้",
        options: [
          "ก. ip routing",
          "ข. router inter-vlan",
          "ค. switchport trunk allowed vlan all",
          "ง. ip default-gateway"
        ],
        answerIndex: 0,
        explanation: "บน Layer 3 Switch ต้องเปิดฟังก์ชันการหาเส้นทางระดับ Layer 3 ด้วยคำสั่ง ip routing มิฉะนั้นสวิตช์จะทำงานเฉพาะระดับ Layer 2"
      },
      {
        id: "u2q5",
        level: "การวิเคราะห์",
        question: "5. หากผู้ดูแลระบบตรวจสอบสถานะบน Layer 3 Switch แล้วพบว่า interface Vlan30 มีสถานะเป็น up / line protocol is down สาเหตุในข้อใดมีความเป็นไปได้มากที่สุด",
        options: [
          "ก. ลืมตั้งรหัสผ่าน enable secret บนสวิตช์",
          "ข. ไม่มีพอร์ตใดๆ บนสวิตช์ที่เป็นสมาชิกของ VLAN 30 (หรือพอร์ต Trunk) ที่เชื่อมต่อและมีสถานะ Up อยู่เลย",
          "ค. เครื่องลูกข่ายใน VLAN 30 ตั้งค่า DNS Server ผิด",
          "ง. สาย Console ที่ต่อกับสวิตช์หลวม"
        ],
        answerIndex: 1,
        explanation: "SVI (interface vlan X) จะมีสถานะ Line Protocol เป็น Up ได้ก็ต่อเมื่อ 1) มีการสร้าง VLAN X ในฐานข้อมูล VLAN แล้ว และ 2) มีพอร์ตอย่างน้อย 1 พอร์ตใน VLAN X (หรือ Trunk) ที่เป็นสถานะ Up และอยู่ในสถานะ STP Forwarding"
      }
    ]
  },
  {
    unit: 3,
    unitTitle: "หน่วยที่ 3 การจัดเส้นทางเครือข่ายและการจัดสรรหมายเลข IP (IP Routing, DHCP, DHCP Snooping)",
    cognitiveScore: 8,
    totalUnitScore: 14,
    hoursTP: "2/8",
    questions: [
      {
        id: "u3q1",
        level: "ความรู้",
        question: "1. ค่าความน่าเชื่อถือของเส้นทาง (Administrative Distance - AD) เริ่มต้นของเส้นทางแบบ Static Route มีค่าเท่าใด",
        options: [
          "ก. 0",
          "ข. 1",
          "ค. 90",
          "ง. 110"
        ],
        answerIndex: 1,
        explanation: "Directly Connected มีค่า AD = 0, Static Route มีค่า AD = 1, EIGRP = 90 และ OSPF = 110"
      },
      {
        id: "u3q2",
        level: "ความเข้าใจ",
        question: "2. เพราะเหตุใดเมื่อวาง DHCP Server ไว้ที่ศูนย์ข้อมูลกลาง (VLAN 100) เครื่องลูกข่ายที่อยู่ใน VLAN 10 จึงไม่สามารถขอรับ IP ได้หากไม่ตั้งค่าเพิ่มเติมบน Gateway",
        options: [
          "ก. เพราะข้อความ DHCP Discover เป็น Broadcast ซึ่งเราเตอร์หรือ SVI จะไม่ส่งต่อข้ามเครือข่าย (Broadcast Domain)",
          "ข. เพราะ DHCP Server รองรับการแจก IP ได้เพียงครั้งละ 1 เครื่องเท่านั้น",
          "ค. เพราะเครื่องลูกข่ายใน VLAN 10 ไม่มี MAC Address",
          "ง. เพราะสายไฟเบอร์ออปติกไม่รองรับโพรโทคอล UDP"
        ],
        answerIndex: 0,
        explanation: "DHCP Discover เป็นแพ็กเกจ Broadcast ซึ่งไม่สามารถข้าม Layer 3 Gateway ได้ จึงต้องตั้งค่า DHCP Relay (ip helper-address) บนอินเทอร์เฟซ Gateway ของแต่ละ VLAN"
      },
      {
        id: "u3q3",
        level: "การนำไปใช้",
        question: "3. ข้อใดคือคำสั่งกำหนดเส้นทางสำรอง (Floating Static Route) ไปยังเครือข่าย 172.16.50.0/24 ผ่าน Next-hop 10.0.0.2 โดยให้ทำงานเฉพาะเมื่อเส้นทางหลัก (OSPF AD 110) ล่มเท่านั้น",
        options: [
          "ก. ip route 172.16.50.0 255.255.255.0 10.0.0.2 1",
          "ข. ip route 172.16.50.0 255.255.255.0 10.0.0.2 150",
          "ค. ip route 0.0.0.0 0.0.0.0 10.0.0.2",
          "ง. ip helper-address 10.0.0.2"
        ],
        answerIndex: 1,
        explanation: "Floating Static Route ต้องกำหนดค่า AD ให้สูงกว่าเส้นทางหลัก เนื่องจากเส้นทางหลักเป็น OSPF (AD = 110) จึงต้องกำหนดค่า AD ต่อท้ายให้มากกว่า 110 เช่น 150"
      },
      {
        id: "u3q4",
        level: "การวิเคราะห์",
        question: "4. เมื่อเปิดใช้งาน DHCP Snooping บนสวิตช์แล้ว หากผู้ดูแลระบบลืมตั้งค่าคำสั่ง ip dhcp snooping trust บนพอร์ต Uplink ที่เชื่อมต่อไปยัง DHCP Server ขององค์กร จะเกิดผลอย่างไร",
        options: [
          "ก. เครื่องลูกข่ายทุกเครื่องจะได้รับ IP Address เร็วขึ้นกว่าเดิม",
          "ข. เครื่องลูกข่ายจะไม่สามารถรับหมายเลข IP จาก DHCP Server ขององค์กรได้เลย เพราะข้อความ DHCP Offer/ACK ถูกบล็อกที่พอร์ต Uplink",
          "ค. สวิตช์จะรีบูตตัวเองอัตโนมัติทุก 5 นาที",
          "ง. พอร์ตทุกพอร์ตจะเปลี่ยนเป็น Trunk อัตโนมัติ"
        ],
        answerIndex: 1,
        explanation: "เมื่อเปิด DHCP Snooping ค่าเริ่มต้นของทุกพอร์ตจะกลายเป็น Untrusted ซึ่งบล็อกข้อความ DHCP Offer และ ACK จากฝั่งเซิร์ฟเวอร์ ดังนั้นพอร์ต Uplink ที่ต่อไปยัง DHCP Server จริงต้องตั้งเป็น ip dhcp snooping trust เสมอ"
      },
      {
        id: "u3q5",
        level: "การประเมินค่า",
        question: "5. ในการป้องกันการโจมตีแบบ DHCP Starvation Attack (ที่ผู้โจมตีปลอม MAC Address ส่งคำขอ DHCP Request จำนวนมหาศาลจน IP ใน Pool หมด) ควรตั้งค่าคำสั่งใดควบคู่กับ DHCP Snooping บนพอร์ตลูกข่าย",
        options: [
          "ก. ip dhcp snooping trust",
          "ข. ip dhcp snooping limit rate 15",
          "ค. ip dhcp excluded-address",
          "ง. no ip dhcp snooping"
        ],
        answerIndex: 1,
        explanation: "คำสั่ง ip dhcp snooping limit rate <จำนวนแพ็กเกจต่อวินาที> บนพอร์ตลูกข่าย (Untrusted) ช่วยจำกัดอัตราการส่งแพ็กเกจ DHCP เข้ามาไม่ให้เกินเกณฑ์ที่กำหนด ป้องกัน DHCP Starvation ได้อย่างมีประสิทธิภาพ"
      }
    ]
  },
  {
    unit: 4,
    unitTitle: "หน่วยที่ 4 ความเสถียรของระบบเครือข่ายระดับ Layer 2 (Loop Guard, Spanning Tree, Link Aggregation)",
    cognitiveScore: 7,
    totalUnitScore: 13,
    hoursTP: "2/8",
    questions: [
      {
        id: "u4q1",
        level: "ความรู้",
        question: "1. ในกระบวนการเลือกตั้ง Root Bridge ของ Spanning Tree Protocol (STP) สวิตช์จะพิจารณาเลือกจากเงื่อนไขใด",
        options: [
          "ก. สวิตช์ที่มีค่า Bridge ID (Bridge Priority + MAC Address) สูงที่สุด",
          "ข. สวิตช์ที่มีค่า Bridge ID (Bridge Priority + MAC Address) ต่ำที่สุด",
          "ค. สวิตช์ที่มีจำนวนพอร์ตมากที่สุด",
          "ง. สวิตช์ที่เปิดเครื่องเป็นตัวสุดท้าย"
        ],
        answerIndex: 1,
        explanation: "Spanning Tree Protocol จะเลือกสวิตช์ที่มีค่า Bridge ID (ประกอบด้วยค่า Priority เริ่มต้น 32768 ตามด้วย MAC Address) ต่ำที่สุด เป็น Root Bridge"
      },
      {
        id: "u4q2",
        level: "ความเข้าใจ",
        question: "2. ฟีเจอร์ Loop Guard ของ Spanning Tree ทำหน้าที่ป้องกันปัญาวงวนสัญญาณในสถานการณ์ใด",
        options: [
          "ก. เมื่อพอร์ต Non-Designated (เช่น Alternate/Blocking Port) หยุดได้รับเฟรม BPDU เนื่องจากสายไฟเบอร์มีปัญหาส่งสัญญาณทางเดียว (Unidirectional Link Failure)",
          "ข. เมื่อเครื่องลูกข่ายขอหมายเลข IP ซ้ำกัน",
          "ค. เมื่อเราเตอร์หาเส้นทางออกอินเทอร์เน็ตไม่พบ",
          "ง. เมื่อผู้ใช้พิมพ์รหัสผ่าน SSH ผิดเกิน 3 ครั้ง"
        ],
        answerIndex: 0,
        explanation: "Loop Guard ป้องกันไม่ให้พอร์ตที่อยู่ในสถานะ Blocking/Alternate เปลี่ยนตัวเองเป็น Forwarding โดยผิดพลาดเมื่อหยุดได้รับ BPDU จากฝั่งตรงข้าม โดยจะล็อกพอร์ตไว้ในสถานะ loop-inconsistent"
      },
      {
        id: "u4q3",
        level: "การนำไปใช้",
        question: "3. ในการทำ Link Aggregation ตามมาตรฐานสากล IEEE 802.3ad (LACP) ข้อใดคือการจับคู่โหมดระหว่างสวิตช์ 2 ฝั่งที่สามารถสร้าง Port-channel สำเร็จ",
        options: [
          "ก. ฝั่งที่ 1: Passive <---> ฝั่งที่ 2: Passive",
          "ข. ฝั่งที่ 1: Active <---> ฝั่งที่ 2: Passive (หรือ Active <---> Active)",
          "ค. ฝั่งที่ 1: Active <---> ฝั่งที่ 2: Auto",
          "ง. ฝั่งที่ 1: Passive <---> ฝั่งที่ 2: Desirable"
        ],
        answerIndex: 1,
        explanation: "LACP ใช้โหมด Active และ Passive โดยต้องมีอย่างน้อย 1 ฝั่งเป็น Active (Active-Active หรือ Active-Passive) จึงจะส่งแพ็กเกจ LACP เจรจาสร้างลิงก์รวมสำเร็จ (ส่วน Desirable/Auto เป็นของ PAgP)"
      },
      {
        id: "u4q4",
        level: "การวิเคราะห์",
        question: "4. เมื่อผู้ดูแลระบบใช้คำสั่ง show etherchannel summary บนสวิตช์ แล้วพบผลลัพธ์ว่า Group 1: Po1(SU) และพอร์ตสมาชิกแสดง Gi0/1(P) Gi0/2(P) หมายความว่าอย่างไร",
        options: [
          "ก. Port-channel 1 เป็น Layer 2 (S) ที่กำลังทำงานปกติ (U - In use) และพอร์ตทั้งสองถูกรวมอยู่ในกลุ่มเรียบร้อยแล้ว (P - Bundled)",
          "ข. Port-channel 1 ถูกระงับการทำงาน (Suspended) และพอร์ตทั้งสองถูกบล็อก",
          "ค. Port-channel 1 เป็น Layer 3 Routed Port ที่สายขาด",
          "ง. พอร์ต Gi0/1 และ Gi0/2 ทำงานแยกอิสระต่อกัน (Stand-alone)"
        ],
        answerIndex: 0,
        explanation: "สัญลักษณ์ S = Layer 2, U = In use (ใช้งานอยู่ปกติ) และ P = Bundled in port-channel แสดงว่าการทำ Link Aggregation สำเร็จสมบูรณ์"
      },
      {
        id: "u4q5",
        level: "การประเมินค่า/สร้างสรรค์",
        question: "5. ในการออกแบบเครือข่ายระหว่าง Distribution Switch กับ Access Switch หากต้องการทั้งแบนด์วิดท์ที่เพิ่มขึ้นเป็น 2 Gbps และป้องกันลูปไปพร้อมกัน ควรออกแบบและตั้งค่าอย่างไร",
        options: [
          "ก. ต่อสายแลน 2 เส้นแล้วปิด Spanning Tree ทั้งหมดโดยไม่ทำ EtherChannel",
          "ข. ต่อสายแลน 2 เส้น มัดรวมด้วย LACP EtherChannel (mode active) ตั้งค่า Port-channel เป็น Trunk และเปิด Rapid-PVST+ พร้อม Loop Guard",
          "ค. ต่อสายแลน 1 เส้นแล้วเปลี่ยนค่า MTU เป็น 9000",
          "ง. ตั้งค่าพอร์ตทั้งสองเป็น Access Port คนละ VLAN"
        ],
        answerIndex: 1,
        explanation: "การมัดรวมสายด้วย LACP EtherChannel ช่วยเพิ่มแบนด์วิดท์เป็น 2 Gbps และให้ STP มองเห็นเป็นลิงก์ตรรกะเดียวที่ไม่ถูกบล็อก ควบคู่กับการเปิด Rapid-PVST+ และ Loop Guard เพื่อความปลอดภัยสูงสุด"
      }
    ]
  },
  {
    unit: 5,
    unitTitle: "หน่วยที่ 5 ความปลอดภัยของระบบเครือข่าย (NAT, Access Control List, Firewall)",
    cognitiveScore: 8,
    totalUnitScore: 14,
    hoursTP: "2/8",
    questions: [
      {
        id: "u5q1",
        level: "ความรู้",
        question: "1. การทำ NAT รูปแบบใดที่ช่วยให้เครื่องคอมพิวเตอร์ภายในองค์กรหลายร้อยเครื่องสามารถใช้อินเทอร์เน็ตพร้อมกันผ่าน Public IP เพียงหมายเลขเดียวได้โดยอาศัยหมายเลขพอร์ต (Port Number) ในการแยกแยะเซสชัน",
        options: [
          "ก. Static NAT",
          "ข. Dynamic NAT แบบ 1 ต่อ 1",
          "ค. PAT (Port Address Translation) หรือ NAT Overload",
          "ง. Reverse ARP"
        ],
        answerIndex: 2,
        explanation: "PAT (NAT Overload) ใช้คำสั่ง overload เพื่อแปลงหลาย Private IP ให้แชร์ Public IP เดียวกันโดยจำแนกแต่ละการเชื่อมต่อด้วยหมายเลขพอร์ต TCP/UDP"
      },
      {
        id: "u5q2",
        level: "ความเข้าใจ",
        question: "2. ข้อใดคือค่า Wildcard Mask ที่ถูกต้องสำหรับเครือข่าย 192.168.10.0/24 (Subnet Mask 255.255.255.0) ในการเขียนคำสั่ง Access Control List (ACL)",
        options: [
          "ก. 255.255.255.0",
          "ข. 0.0.0.255",
          "ค. 0.0.255.255",
          "ง. 255.0.0.0"
        ],
        answerIndex: 1,
        explanation: "Wildcard Mask คำนวณได้จาก 255.255.255.255 ลบด้วย Subnet Mask (255.255.255.0) ได้ผลลัพธ์คือ 0.0.0.255"
      },
      {
        id: "u5q3",
        level: "การนำไปใช้",
        question: "3. ตามหลักการปฏิบัติที่ดีที่สุด (Best Practice) ควรนำ Extended ACL ไปผูกใช้งาน (ip access-group) ที่ตำแหน่งใดในเครือข่าย",
        options: [
          "ก. ผูกไว้ที่อินเทอร์เฟซที่อยู่ใกล้กับเครือข่ายต้นทาง (Closest to Source) มากที่สุด",
          "ข. ผูกไว้ที่อินเทอร์เฟซที่อยู่ใกล้กับเครือข่ายปลายทาง (Closest to Destination) มากที่สุด",
          "ค. ผูกไว้บนสาย Console ของสวิตช์เท่านั้น",
          "ง. ผูกไว้ที่ ISP Router ของผู้ให้บริการอินเทอร์เน็ต"
        ],
        answerIndex: 0,
        explanation: "เนื่องจาก Extended ACL ระบุได้ทั้งต้นทาง ปลายทาง และพอร์ตบริการ จึงควรนำไปวางใกล้ต้นทางมากที่สุด เพื่อบล็อกทราฟฟิกที่ไม่ต้องการทันทีโดยไม่ให้วิ่งไปสิ้นเปลืองแบนด์วิดท์ในเครือข่าย"
      },
      {
        id: "u5q4",
        level: "การวิเคราะห์",
        question: "4. Stateful Inspection Firewall มีข้อได้เปรียบเหนือกว่า Stateless Packet Filtering ACL อย่างไร",
        options: [
          "ก. ไม่ต้องใช้ไฟฟ้าในการทำงาน",
          "ข. จดจำสถานะการเชื่อมต่อใน State Table ทำให้ทราฟฟิกที่เริ่มต้นจากโซนภายใน (Inside) สามารถรับแพ็กเกจตอบกลับจากภายนอกได้อัตโนมัติ ในขณะที่บล็อกการเชื่อมต่อแปลกปลอมที่เริ่มจากภายนอก",
          "ค. สามารถเพิ่มความเร็วสายแลนจาก 1 Gbps เป็น 100 Gbps ได้",
          "ง. ไม่ต้องกำหนดหมายเลข IP บนอินเทอร์เฟซใดๆ"
        ],
        answerIndex: 1,
        explanation: "Stateful Firewall ตรวจสอบและบันทึกสถานะของเซสชัน (Connection State) จึงแยกแยะได้ว่าแพ็กเกจที่วิ่งเข้ามาเป็นแพ็กเกจตอบกลับของเซสชันที่ได้รับอนุญาตหรือเป็นการบุกรุกใหม่จากภายนอก"
      },
      {
        id: "u5q5",
        level: "การประเมินค่า",
        question: "5. ในการออกแบบโซนความปลอดภัยของ Firewall หากองค์กรมีเซิร์ฟเวอร์เว็บไซต์ประชาสัมพันธ์ (Public Web Server) ที่ต้องเปิดให้บุคคลภายนอกบนอินเทอร์เน็ตเข้าชมได้ ควรวางเซิร์ฟเวอร์นี้ไว้ในโซนใดเพื่อความปลอดภัยสูงสุดของฐานข้อมูลภายใน",
        options: [
          "ก. วางไว้ใน Inside LAN รวมกับเครื่องคอมพิวเตอร์ของแผนกการเงิน",
          "ข. วางไว้ในโซน DMZ (Demilitarized Zone) และเปิดกฎ Firewall อนุญาตเฉพาะพอร์ต TCP 80/443 จาก Outside มายัง DMZ เท่านั้น",
          "ค. วางไว้ใน Management VLAN 99",
          "ง. เชื่อมต่อตรงกับโมเด็มโดยไม่ผ่าน Firewall"
        ],
        answerIndex: 1,
        explanation: "การแยกเซิร์ฟเวอร์ที่ต้องให้บริการสาธารณะไว้ในโซน DMZ ช่วยจำกัดขอบเขตความเสียหาย หาก Web Server ถูกโจมตี ผู้บุกรุกก็จะไม่สามารถเข้าถึงเครือข่าย Inside LAN ขององค์กรได้"
      }
    ]
  },
  {
    unit: 6,
    unitTitle: "หน่วยที่ 6 การเชื่อมต่อระยะไกลและการเพิ่มประสิทธิภาพเครือข่าย (VPN, Load Balance, QoS)",
    cognitiveScore: 7,
    totalUnitScore: 14,
    hoursTP: "2/8",
    questions: [
      {
        id: "u6q1",
        level: "ความรู้",
        question: "1. ในการเชื่อมต่อเครือข่ายระหว่างสำนักงานใหญ่กับสาขาย่อยแบบถาวรผ่านอินเทอร์เน็ต โดยตั้งค่าที่ตัวเราเตอร์หรือไฟร์วอลล์ของทั้งสองฝั่งโดยตรง เรียกว่า VPN ประเภทใด",
        options: [
          "ก. Site-to-Site VPN",
          "ข. Client-less Web Portal",
          "ค. Local Area VLAN",
          "ง. Bluetooth PAN"
        ],
        answerIndex: 0,
        explanation: "Site-to-Site VPN (LAN-to-LAN VPN) ใช้เชื่อมต่อเครือข่ายของสองสาขาเข้าด้วยกันผ่านอุปกรณ์เกตเวย์โดยที่เครื่องลูกข่ายไม่ต้องติดตั้งโปรแกรม VPN Client"
      },
      {
        id: "u6q2",
        level: "ความเข้าใจ",
        question: "2. ในสถาปัตยกรรม IPsec VPN โพรโทคอลใดใน IKE Phase 2 ที่ทำหน้าที่ทั้งการเข้ารหัสข้อมูล (Encryption) และการตรวจสอบความถูกต้องของข้อมูล (Authentication & Integrity)",
        options: [
          "ก. AH (Authentication Header)",
          "ข. ESP (Encapsulating Security Payload)",
          "ค. Telnet",
          "ง. TFTP"
        ],
        answerIndex: 1,
        explanation: "ESP (Encapsulating Security Payload - IP Protocol 50) ให้บริการทั้งการเข้ารหัสความลับของข้อมูล (Confidentiality) เช่น AES-256 และการตรวจสอบความถูกต้องไม่ถูกปลอมแปลง (Integrity/Authentication) เช่น SHA-256"
      },
      {
        id: "u6q3",
        level: "การนำไปใช้",
        question: "3. ในการทำ Multi-WAN Load Balance & Failover ฟีเจอร์ใดบนเราเตอร์ที่ใช้ส่งแพ็กเกจ ICMP Ping ไปตรวจสอบสถานะการออกอินเทอร์เน็ตของลิงก์ ISP อย่างต่อเนื่องเพื่อสั่งสลับเส้นทางอัตโนมัติเมื่ออินเทอร์เน็ตล่ม",
        options: [
          "ก. IP SLA ร่วมกับ Object Tracking (track)",
          "ข. DHCP Snooping",
          "ค. PortFast",
          "ง. Banner MOTD"
        ],
        answerIndex: 0,
        explanation: "IP SLA ทำหน้าที่ส่งโพรบตรวจสอบ (เช่น icmp-echo 8.8.8.8) และทำงานร่วมกับ track เพื่อถอนหรือสลับเส้นทางใน Routing Table / PBR โดยอัตโนมัติเมื่อลิงก์ปลายทางไม่สามารถออกอินเทอร์เน็ตได้"
      },
      {
        id: "u6q4",
        level: "การวิเคราะห์",
        question: "4. ในการจัดทำนโยบาย Quality of Service (QoS) สำหรับทราฟฟิกเสียงโทรศัพท์ VoIP และวิดีโอประชุมทางไกล (ซึ่งไวต่อความหน่วงและ Jitter มากที่สุด) ควรเลือกใช้การจัดคิวรูปแบบใดใน Policy-Map",
        options: [
          "ก. Low Latency Queuing (LLQ) โดยใช้คำสั่ง priority",
          "ข. Best-Effort FIFO Queuing โดยไม่ต้องตั้งค่าใดๆ",
          "ค. สั่ง Drop แพ็กเกจเสียงทั้งหมดเมื่อเครือข่ายหนาแน่น",
          "ง. จำกัดความเร็วไว้ที่ 64 kbps ด้วย DHCP"
        ],
        answerIndex: 0,
        explanation: "Low Latency Queuing (LLQ - คำสั่ง priority) จะสร้างคิวด่วนพิเศษ (Strict Priority Queue) ให้แพ็กเกจเสียงและวิดีโอได้รับการส่งออกก่อนคิวข้อมูลทั่วไปเสมอ ช่วยลด Latency และ Jitter"
      },
      {
        id: "u6q5",
        level: "การประเมินค่า",
        question: "5. ข้อใดเปรียบเทียบความแตกต่างระหว่างการจำกัดแบนด์วิดท์แบบ Traffic Policing กับ Traffic Shaping ในระบบ QoS ได้ถูกต้อง",
        options: [
          "ก. Policing จะตัด (Drop) หรือลดระดับความสำคัญของแพ็กเกจที่เกินเพดานทันที ส่วน Shaping จะเก็บแพ็กเกจส่วนเกินไว้ใน Buffer แล้วทยอยส่งออกอย่างราบเรียบ",
          "ข. Policing ใช้สำหรับเพิ่มความเร็วอินเทอร์เน็ตเป็น 2 เท่า ส่วน Shaping ใช้สำหรับปิดพอร์ตสวิตช์",
          "ค. Policing ทำงานที่ระดับ Layer 1 เท่านั้น ส่วน Shaping ทำงานบนสาย Console",
          "ง. ทั้งสองวิธีเหมือนกันทุกประการไม่มีข้อแตกต่าง"
        ],
        answerIndex: 0,
        explanation: "Traffic Policing บังคับเพดานแบนด์วิดท์โดยการ Drop (หรือ Remark) ทราฟฟิกส่วนที่พุ่งเกินทันที (ลักษณะกราฟฟันเลื่อย) ในขณะที่ Traffic Shaping ใช้บัฟเฟอร์ช่วยหน่วงทราฟฟิกที่พุ่งสูงให้ส่งออกด้วยอัตราคงที่อย่างราบเรียบ"
      }
    ]
  },
  {
    unit: 7,
    unitTitle: "หน่วยที่ 7 การบำรุงรักษา สำรองอุปกรณ์ และจัดทำรายงานระบบเครือข่าย",
    cognitiveScore: 6,
    totalUnitScore: 13,
    hoursTP: "2/8",
    questions: [
      {
        id: "u7q1",
        level: "ความรู้",
        question: "1. โพรโทคอลใดที่ใช้สำหรับซิงค์เวลาของอุปกรณ์เครือข่ายทุกตัว (Router, Switch, Firewall) ให้ตรงกับเซิร์ฟเวอร์เวลามาตรฐาน เพื่อให้เวลาในบันทึกเหตุการณ์ (Syslog Timestamp) ตรงกันทั้งองค์กร",
        options: [
          "ก. NTP (Network Time Protocol)",
          "ข. FTP (File Transfer Protocol)",
          "ค. SMTP (Simple Mail Transfer Protocol)",
          "ง. ARP (Address Resolution Protocol)"
        ],
        answerIndex: 0,
        explanation: "NTP (Network Time Protocol - UDP Port 123) ใช้สำหรับซิงโครไนซ์นาฬิกาของอุปกรณ์เครือข่ายให้ตรงกัน ซึ่งเป็นสิ่งจำเป็นในการวิเคราะห์ลำดับเหตุการณ์ใน Syslog"
      },
      {
        id: "u7q2",
        level: "ความเข้าใจ",
        question: "2. ตัวชี้วัด MTTR (Mean Time To Repair / Recovery) ในงานบำรุงรักษาระบบเครือข่ายหมายถึงข้อใด และผู้ดูแลระบบควรทำให้มีค่าเป็นอย่างไร",
        options: [
          "ก. ระยะเวลาเฉลี่ยที่ใช้ในการซ่อมแซมหรือสับเปลี่ยนอุปกรณ์สำรองจนระบบกลับมาทำงานได้ปกติ ซึ่งควรทำให้มีค่าต่ำที่สุด (สั้นที่สุด)",
          "ข. ระยะเวลาอายุการใช้งานของสายแลน ซึ่งควรทำให้สั้นที่สุด",
          "ค. จำนวนพอร์ตทั้งหมดของสวิตช์ในองค์กร",
          "ง. ความเร็วในการดาวน์โหลดไฟล์จากอินเทอร์เน็ต"
        ],
        answerIndex: 0,
        explanation: "MTTR คือเวลาเฉลี่ยตั้งแต่เกิดเหตุขัดข้องจนกู้คืนระบบกลับมาใช้งานได้ การมีแผนสำรองอุปกรณ์ (Spare Parts) และไฟล์สำรองคอนฟิก (Config Backup) ที่พร้อมใช้งานจะช่วยลดค่า MTTR ให้สั้นที่สุด"
      },
      {
        id: "u7q3",
        level: "การนำไปใช้",
        question: "3. หากต้องการสำรองไฟล์การตั้งค่าปัจจุบันของสวิตช์ไปเก็บไว้ที่เซิร์ฟเวอร์ TFTP (IP: 192.168.99.100) ต้องใช้คำสั่งใด",
        options: [
          "ก. copy running-config tftp:",
          "ข. copy tftp: startup-config",
          "ค. erase startup-config",
          "ง. show running-config tftp"
        ],
        answerIndex: 0,
        explanation: "คำสั่ง copy running-config tftp: ใช้คัดลอกค่าคอนฟิกที่กำลังทำงานอยู่ส่งไปจัดเก็บไว้บน TFTP Server (ส่วนการกู้คืนกลับมาที่อุปกรณ์สำรองใช้ copy tftp: startup-config)"
      },
      {
        id: "u7q4",
        level: "การวิเคราะห์",
        question: "4. ในการจัดเก็บและตรวจสอบความพร้อมใช้งานของอุปกรณ์สำรอง (Cold/Warm Spare Switch) ข้อใดเป็นแนวปฏิบัติที่ถูกต้องที่สุด",
        options: [
          "ก. เก็บไว้ในกล่องปิดผนึกโดยไม่ต้องเปิดเครื่องหรืออัปเดต Firmware เลยเป็นเวลา 5 ปี",
          "ข. จัดเก็บในสภาพแวดล้อมที่เหมาะสม ระบุรหัสและรุ่นชัดเจน นำมาเปิดทดสอบ POST และพอร์ตตามรอบเวลา อัปเดต Firmware ให้ตรงกับตัวหลัก และเตรียมไฟล์คอนฟิกล่าสุดพร้อมโหลดใช้งานทันที",
          "ค. นำอุปกรณ์สำรองไปแจกให้พนักงานใช้ที่บ้าน",
          "ง. ถอดพัดลมและชุดจ่ายไฟออกแยกเก็บคนละอาคารโดยไม่จดบันทึก"
        ],
        answerIndex: 1,
        explanation: "อุปกรณ์สำรองต้องได้รับการตรวจสอบความพร้อมใช้งานตามรอบเวลา (ทดสอบ POST, พอร์ต, อัปเดต Firmware และทดสอบโหลดไฟล์คอนฟิก) เพื่อให้มั่นใจว่าเมื่อเกิดเหตุฉุกเฉินจะสามารถนำมาสับเปลี่ยนได้ทันทีโดยไม่เสียเวลา"
      },
      {
        id: "u7q5",
        level: "การประเมินค่า/สร้างสรรค์",
        question: "5. ในการจัดทำรายงานสรุปผลการทำงานของระบบเครือข่ายประจำเดือน (รอบ 720 ชั่วโมง) หากระบบเครือข่ายหลักเกิดเหตุขัดข้องรวม 1 ชั่วโมง 26 นาที 24 วินาที (1.44 ชั่วโมง) ค่าความพร้อมใช้งาน (Network Availability %) มีค่าเท่าใด",
        options: [
          "ก. 95.00%",
          "ข. 98.00%",
          "ค. 99.80%",
          "ง. 100.00%"
        ],
        answerIndex: 2,
        explanation: "เวลาที่ระบบทำงานได้ปกติ (Uptime) = 720 - 1.44 = 718.56 ชั่วโมง คิดเป็น Availability = (718.56 / 720) x 100 = 99.80%"
      }
    ]
  }
];
