window.LEARNING_SHEETS_PART2 = [
  {
    week: 8,
    unit: 4,
    unitTitle: "หน่วยที่ 4 ความเสถียรของระบบเครือข่ายระดับ Layer 2 (Loop Guard, Spanning Tree, Link Aggregation)",
    weekTitle: "การเพิ่มความเสถียรของเครือข่ายด้วย Link Aggregation",
    dutyRef: "งานหลัก 3 รักษาความเสถียรของระบบเครือข่าย (งานย่อย 3.2 เพิ่มความเสถียรด้วย Link Aggregation)",
    standardRef: "มาตรฐานอาชีพ สถาบันคุณวุฒิวิชาชีพ อาชีพช่างสนับสนุนด้านเทคนิค ระดับ 4-5",
    knowledgeSheet: {
      sheetNo: 8,
      title: "ใบความรู้ที่ 8 : การรวมช่องสัญญาณเพื่อเพิ่มแบนด์วิดท์และความเสถียรด้วย Link Aggregation (EtherChannel / LACP)",
      objectives: [
        "1. อธิบายหลักการทำงานและประโยชน์ของการทำ Link Aggregation (EtherChannel) ได้",
        "2. เปรียบเทียบโพรโทคอลในการสร้าง Link Aggregation ได้แก่ IEEE 802.3ad (LACP), PAgP และ Static (Mode On) ได้",
        "3. กำหนดค่าและตรวจสอบการทำงานของ Layer 2 / Layer 3 EtherChannel ระหว่างสวิตช์ได้อย่างถูกต้อง"
      ],
      overview:
        "เมื่อเชื่อมต่อสายสัญญาณหลายเส้นขนานกันระหว่างสวิตช์ 2 ตัว หากเปิดเพียง Spanning Tree Protocol (STP) สวิตช์จะอนุญาตให้ส่งข้อมูลได้เพียงเส้นเดียวและบล็อกสายที่เหลือทั้งหมดเพื่อป้องกันลูป เทคโนโลยี Link Aggregation (หรือที่ Cisco เรียกว่า EtherChannel) จึงถูกนำมาใช้เพื่อมัดรวมพอร์ตกายภาพหลายพอร์ต (สูงสุด 8 พอร์ต Active) ให้กลายเป็นท่อส่งข้อมูลตรรกะท่อเดียว (Port-channel) ช่วยเพิ่มแบนด์วิดท์รวมและทำงานแบบ Fault-Tolerant โดยที่ STP มองเห็นเป็นลิงก์เดียวจึงไม่ถูกบล็อก",
      sections: [
        {
          heading: "1. โพรโทคอลและโหมดการทำงานของ Link Aggregation",
          content: "การเจรจาสร้างกลุ่มช่องสัญญาณ (Channel Group) แบ่งออกเป็น 3 รูปแบบ:",
          bullets: [
            "1) IEEE 802.3ad LACP (Link Aggregation Control Protocol): มาตรฐานสากลที่ใช้งานข้ามยี่ห้ออุปกรณ์ได้ มี 2 โหมดคือ Active (ส่งแพ็กเกจ LACP เจรจาเชิงรุก) และ Passive (รอรับการเจรจา) ดังนั้นต้องตั้งค่าเป็น Active-Active หรือ Active-Passive จึงจะจับคู่สำเร็จ",
            "2) PAgP (Port Aggregation Protocol): โพรโทคอลเฉพาะของ Cisco มี 2 โหมดคือ Desirable (เชิงรุก) และ Auto (รอรับ) ต้องตั้งค่าเป็น Desirable-Desirable หรือ Desirable-Auto",
            "3) Static Persistence (Mode On): บังคับรวมพอร์ตโดยไม่มีการส่งแพ็กเกจเจรจา ต้องตั้งค่าเป็น On ทั้งสองฝั่ง (ไม่แนะนำในระบบใหญ่เพราะหากฝั่งหนึ่งตั้งค่าผิดอาจเกิดลูปได้)"
          ]
        },
        {
          heading: "2. กฎเหล็กในการรวมพอร์ตเข้าด้วยกัน (Port Consistency Requirements)",
          content:
            "พอร์ตกายภาพทุกพอร์ตที่จะนำมามัดรวมใน Channel-group เดียวกัน ต้องมีคุณสมบัติตรงกันทุกประการ ได้แก่ 1) ความเร็ว (Speed เช่น 1Gbps เท่ากันทั้งหมด) 2) โหมดรับส่งข้อมูล (Full-Duplex) 3) โหมดของพอร์ต (เป็น Access VLAN เดียวกัน หรือเป็น Trunk ที่อนุญาต Allowed VLAN และ Native VLAN ตรงกันทั้งหมด) และเมื่อสร้างอินเทอร์เฟซ Port-channel สำเร็จแล้ว การแก้ไขค่า Trunk หรือ VLAN ควรทำที่ภายใต้ interface port-channel โดยตรง"
        }
      ],
      cliReference: `! 1. การตั้งค่า Layer 2 EtherChannel ด้วยมาตรฐานสากล LACP (IEEE 802.3ad)
SW1(config)# interface range gigabitEthernet 0/1 - 2
SW1(config-if-range)# channel-group 1 mode active
SW1(config-if-range)# exit

! 2. การตั้งค่า Trunk บนอินเทอร์เฟซตรรกะ Port-channel 1
SW1(config)# interface port-channel 1
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 99
SW1(config-if)# switchport trunk allowed vlan 10,20,30,99
SW1(config-if)# exit

! 3. การปรับอัลกอริทึมกระจายโหลด (Load-Balancing Hash Method)
SW1(config)# port-channel load-balance src-dst-ip

! 4. คำสั่งตรวจสอบสถานะ EtherChannel (ต้องขึ้นสถานะ SU = Layer2 In-use และ P = Bundled in port-channel)
SW1# show etherchannel summary
SW1# show etherchannel port-channel
SW1# show interfaces port-channel 1`,
      summary:
        "Link Aggregation ตามมาตรฐาน IEEE 802.3ad (LACP) ช่วยเพิ่มแบนด์วิดท์ระหว่างสวิตช์และให้ความเสถียรแบบ Redundancy ทันทีเมื่อสายเส้นใดเส้นหนึ่งขาด โดยไม่ถูก Spanning Tree สั่งบล็อก"
    },
    activitySheet: {
      sheetNo: 8,
      title: "ใบกิจกรรมที่ 8 : วิเคราะห์การจับคู่โหมด LACP และการแก้ไขปัญหา EtherChannel ไม่ทำงาน",
      duration: "60 นาที",
      scenario:
        "ผู้ดูแลระบบต้องการรวมสาย Uplink 2 เส้น (Gi0/1 และ Gi0/2) ระหว่าง Distribution Switch (SW-A) กับ Access Switch (SW-B) โดยบน SW-A ตั้งค่า channel-group 1 mode passive และบน SW-B ตั้งค่า channel-group 1 mode passive เมื่อตรวจด้วยคำสั่ง show etherchannel summary พบสถานะเป็น (SD) และพอร์ตเป็น (I - Stand-alone)",
      questions: [
        {
          qNo: 1,
          question: "1. เพราะเหตุใด Port-channel 1 จึงไม่รวมลิงก์เข้าด้วยกัน (ขึ้นสถานะ Down / Stand-alone) และควรแก้ไขคำสั่งอย่างไร",
          suggestedAnswer:
            "เพราะตั้งค่าเป็นโหมด Passive ทั้งสองฝั่ง ทำให้ต่างฝ่ายต่างรอรับแพ็กเกจ LACP ไม่มีฝั่งใดเริ่มส่งคำขอเจรจา วิธีแก้ไขคือเปลี่ยนโหมดบนสวิตช์อย่างน้อย 1 ฝั่ง (หรือทั้งสองฝั่ง) ให้เป็น channel-group 1 mode active"
        },
        {
          qNo: 2,
          question: "2. หากบน SW-A พอร์ต Gi0/1 ตั้งค่าเป็น Trunk Allowed VLAN 10,20 แต่พอร์ต Gi0/2 เผลอตั้งไว้เป็น Access VLAN 10 จะเกิดผลอย่างไรต่อการสร้าง EtherChannel",
          suggestedAnswer:
            "สวิตช์จะปฏิเสธการรวมพอร์ตที่มีการตั้งค่าไม่ตรงกันเข้าสู่ Port-channel (หรือสั่งระงับพอร์ตเป็น err-disabled / suspended) เพราะพอร์ตสมาชิกทุกพอร์ตต้องมีโหมด Access/Trunk และรายการ Allowed VLAN ตรงกันทุกประการ"
        },
        {
          qNo: 3,
          question: "3. เมื่อรวมพอร์ต 1 Gbps จำนวน 4 พอร์ตเป็น Port-channel 1 (แบนด์วิดท์รวม 4 Gbps) เหตุใดการโอนไฟล์จาก PC เครื่องเดียวไปยัง Server เครื่องเดียวจึงทำความเร็วสูงสุดได้เพียง 1 Gbps",
          suggestedAnswer:
            "เพราะ EtherChannel กระจายโหลดด้วยวิธี Hash Algorithm (เช่น src-dst-ip หรือ src-dst-mac) เพื่อป้องกันแพ็กเกจในเซสชันเดียวกันไปถึงปลายทางไม่เรียงลำดับ ดังนั้นทราฟฟิกคู่สนทนาเดียวกัน (1 Flow) จะวิ่งผ่านสายกายภาพเส้นเดียว แต่เมื่อมีผู้ใช้งานหลายคนพร้อมกัน ทราฟฟิกรวมทั้งหมดจะกระจายเต็ม 4 Gbps"
        }
      ]
    },
    jobSheet: {
      sheetNo: 8,
      title: "ใบงานที่ 8 : การกำหนดค่า Link Aggregation (LACP EtherChannel) ระหว่างสวิตช์",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. Managed Switch จำนวน 2 เครื่อง (Dist-SW1 และ Acc-SW1)",
        "2. สายสัญญาณ UTP Cat6 จำนวน 4 เส้นสำหรับทำ Uplink Bonding และเครื่องคอมพิวเตอร์ลูกข่าย 4 เครื่อง"
      ],
      topology:
        "Dist-SW1 เชื่อมต่อกับ Acc-SW1 ด้วยสาย 2 เส้นที่พอร์ต Gi0/1 และ Gi0/2 มัดรวมเป็น Port-channel 1 (LACP Active) ทำหน้าที่เป็น 802.1Q Trunk สำหรับ VLAN 10, 20, 30, 99",
      steps: [
        "ขั้นที่ 1: ตรวจสอบสถานะพอร์ต Gi0/1 และ Gi0/2 ก่อนทำ Link Aggregation สังเกตว่า STP บล็อกพอร์ตไว้ 1 พอร์ต",
        "ขั้นที่ 2: เข้าสู่ interface range gi0/1 - 2 บนสวิตช์ทั้งสองตัว ตั้งค่า channel-group 1 mode active",
        "ขั้นที่ 3: เข้าสู่ interface port-channel 1 ตั้งค่าให้เป็น 802.1Q Trunk กำหนด Native VLAN 99 และ Allowed VLAN 10,20,30,99",
        "ขั้นที่ 4: ตั้งค่าโหมดกระจายโหลดด้วยคำสั่ง port-channel load-balance src-dst-ip",
        "ขั้นที่ 5: ตรวจสอบผลด้วย show etherchannel summary (ต้องแสดงสถานะ Po1(SU) และพอร์ต Gi0/1(P) Gi0/2(P)) และทดสอบดึงสายออก 1 เส้นขณะกำลัง Ping ต่อเนื่อง"
      ],
      checkpoints: [
        "คำสั่ง show etherchannel summary แสดงสถานะ Po1(SU) และพอร์ตสมาชิกเป็น (P) ทั้งสองพอร์ต",
        "คำสั่ง show spanning-tree มองเห็นเฉพาะอินเทอร์เฟซ Po1 ในสถานะ Forwarding โดยไม่มีพอร์ตถูกบล็อก",
        "เมื่อจำลองสายขาด 1 เส้น การ Ping ระหว่างเครื่องลูกข่ายยังคงทำงานต่อเนื่องไม่สะดุด"
      ],
      solutionCli: `! บน Dist-SW1 และ Acc-SW1
interface range gi0/1 - 2
 channel-group 1 mode active
exit
interface port-channel 1
 switchport trunk encapsulation dot1q
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,20,30,99
exit
port-channel load-balance src-dst-ip`
    },
    assignmentSheet: {
      sheetNo: 8,
      title: "ใบมอบหมายงานที่ 8 : ออกแบบระบบ Layer 2 & Layer 3 Link Aggregation ในศูนย์ข้อมูลองค์กร",
      taskDescription:
        "ให้ออกแบบโครงสร้างการรวมลิงก์ (Link Aggregation) ทั้งแบบ Layer 2 EtherChannel (ระหว่าง Access Switch กับ Distribution Switch) และแบบ Layer 3 EtherChannel (ระหว่าง Distribution Switch กับ Core Switch โดยกำหนด IP Address บน Port-channel) พร้อมเขียนชุดคำสั่งตั้งค่า",
      deliverables: [
        "1. แผนผังเครือข่ายที่แสดงกลุ่ม Port-channel 1, 2, 3 พร้อมระบุแบนด์วิดท์รวม",
        "2. ชุดคำสั่งตั้งค่าทั้ง Layer 2 LACP Trunk และ Layer 3 Routed Port-channel (no switchport)"
      ],
      rubric: "ความถูกต้องของ Layer 2 LACP 4 คะแนน | ความถูกต้องของ Layer 3 Port-channel 4 คะแนน | แผนผังและตารางสรุป 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 9,
    unit: 5,
    unitTitle: "หน่วยที่ 5 ความปลอดภัยของระบบเครือข่าย (NAT, Access Control List, Firewall)",
    weekTitle: "การกำหนดค่า NAT และ Access Control List (ACL)",
    dutyRef: "งานหลัก 4 จัดการความปลอดภัยของระบบเครือข่าย (งานย่อย 4.1 กำหนดค่า NAT และ Access Control List)",
    standardRef: "40104.02 กำหนดค่าความปลอดภัยและการเชื่อมต่อระยะไกลของระบบเครือข่าย (Firewall, ACL, VPN)",
    knowledgeSheet: {
      sheetNo: 9,
      title: "ใบความรู้ที่ 9 : หลักการทำงานและการกำหนดค่า Network Address Translation (NAT) และ Access Control List (ACL)",
      objectives: [
        "1. อธิบายหลักการทำงานและจำแนกประเภทของ NAT (Static NAT, Dynamic NAT และ PAT / NAT Overload) ได้",
        "2. อธิบายหลักการทำงานของ Access Control List (Standard ACL, Extended ACL, Named ACL) และการคำนวณ Wildcard Mask ได้",
        "3. กำหนดค่า NAT และ ACL บนเราเตอร์เพื่อแปลงหมายเลข IP และควบคุมสิทธิ์การเข้าถึงเครือข่ายตามนโยบายองค์กรได้"
      ],
      overview:
        "เครือข่ายภายในองค์กรใช้หมายเลข Private IP Address (เช่น 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) ซึ่งไม่สามารถสื่อสารบนอินเทอร์เน็ตได้โดยตรง จึงต้องใช้เทคโนโลยี NAT (Network Address Translation) แปลงเป็น Public IP ที่ขอบเครือข่าย (Edge Router) พร้อมทั้งใช้ Access Control List (ACL) เป็นตัวกรองแพ็กเกจ (Packet Filtering) เพื่อกำหนดนโยบายว่าเครือข่ายใดมีสิทธิ์เข้าถึงทรัพยากรใดได้บ้าง",
      sections: [
        {
          heading: "1. คำศัพท์และประเภทของ NAT (Network Address Translation)",
          content: "NAT แบ่งหมายเลข IP ออกเป็น 4 มุมมอง (Inside Local, Inside Global, Outside Local, Outside Global) และมี 3 รูปแบบการใช้งานหลัก:",
          bullets: [
            "1) Static NAT (แปลงแบบ 1 ต่อ 1 คงที่): จับคู่ Private IP ของเซิร์ฟเวอร์ภายใน (เช่น Web Server 192.168.100.10) กับ Public IP คงที่ (เช่น 203.113.10.10) เพื่อให้ภายนอกเข้าถึงเซิร์ฟเวอร์ได้",
            "2) Dynamic NAT (แปลงแบบกลุ่มต่อกลุ่ม): แปลง Private IP เป็น Public IP ที่ว่างอยู่ในกลุ่ม (NAT Pool) แบบ 1 ต่อ 1 ชั่วคราว",
            "3) PAT (Port Address Translation) หรือ NAT Overload: รูปแบบที่นิยมที่สุดในองค์กร แปลง Private IP จำนวนหลายร้อยเครื่องให้ใช้ Public IP เพียงหมายเลขเดียวในการออกอินเทอร์เน็ตพร้อมกัน โดยแยกแยะแต่ละเซสชันด้วยหมายเลขพอร์ตต้นทาง (Source Port Number)"
          ]
        },
        {
          heading: "2. หลักการทำงานและประเภทของ Access Control List (ACL)",
          content:
            "ACL คือชุดของกฎ (Permit / Deny) ที่เรียงลำดับจากบนลงล่าง (Top-Down Processing) เมื่อแพ็กเกจตรงกับบรรทัดใดจะทำงานตามบรรทัดนั้นทันที และที่ท้ายสุดของทุก ACL จะมีกฎซ่อนอยู่เสมอคือ Implicit Deny Any (ปฏิเสธทุกสิ่งที่ไม่ได้รับอนุญาต):",
          bullets: [
            "Standard ACL (หมายเลข 1-99, 1300-1999): ตรวจสอบเฉพาะหมายเลข IP ต้นทาง (Source IP) เท่านั้น หลักการวางควรนำไปผูกไว้ใกล้ปลายทางมากที่สุด (Closest to Destination)",
            "Extended ACL (หมายเลข 100-199, 2000-2699): ตรวจสอบได้อย่างละเอียดทั้ง โพรโทคอล (TCP/UDP/ICMP), Source IP, Destination IP และหมายเลขพอร์ตบริการ (เช่น eq 80, 443, 22) หลักการวางควรนำไปผูกไว้ใกล้ต้นทางมากที่สุด (Closest to Source) เพื่อบล็อกทราฟฟิกที่ไม่ต้องการตั้งแต่เนิ่นๆ",
            "การคำนวณ Wildcard Mask: มีค่าตรงข้ามกับ Subnet Mask (255.255.255.255 ลบด้วย Subnet Mask) โดยบิต 0 หมายถึงต้องตรงกัน และบิต 1 หมายถึงไม่สนใจ เช่น /24 (255.255.255.0) จะมี Wildcard Mask เป็น 0.0.0.255"
          ]
        }
      ],
      cliReference: `! === 1. การตั้งค่า PAT (NAT Overload) ให้เครือข่ายภายในออกอินเทอร์เน็ต ===
Router(config)# access-list 1 permit 192.168.0.0 0.0.255.255
Router(config)# ip nat inside source list 1 interface gigabitEthernet 0/1 overload

! === 2. การตั้งค่า Static NAT สำหรับ Web Server ภายใน ===
Router(config)# ip nat inside source static 192.168.100.10 203.113.10.10

! กำหนดขา Inside (LAN) และ Outside (WAN)
Router(config)# interface gigabitEthernet 0/0
Router(config-if)# ip nat inside
Router(config)# interface gigabitEthernet 0/1
Router(config-if)# ip nat outside

! === 3. การตั้งค่า Extended Named ACL ตามนโยบายความปลอดภัย ===
! นโยบาย: บล็อก VLAN 20 (192.168.20.0/24) ไม่ให้เข้าถึง Server บัญชี (192.168.30.10) แต่เข้าเว็บและใช้งานอื่นได้ปกติ
Router(config)# ip access-list extended POLICY_HR_FILTER
Router(config-ext-nacl)# deny ip 192.168.20.0 0.0.0.255 host 192.168.30.10
Router(config-ext-nacl)# permit ip any any
Router(config-ext-nacl)# exit
Router(config)# interface gigabitEthernet 0/0.20
Router(config-subif)# ip access-group POLICY_HR_FILTER in

! คำสั่งตรวจสอบ
Router# show ip nat translations
Router# show ip nat statistics
Router# show access-lists`,
      summary:
        "PAT (NAT Overload) ช่วยให้เครือข่ายภายในทั้งหมดออกอินเทอร์เน็ตผ่าน Public IP ของพอร์ต WAN ได้ ส่วน Extended ACL ช่วยควบคุมสิทธิ์การเข้าถึงในระดับ IP, โพรโทคอล และพอร์ตบริการตามนโยบายความปลอดภัยขององค์กร"
    },
    activitySheet: {
      sheetNo: 9,
      title: "ใบกิจกรรมที่ 9 : การคำนวณ Wildcard Mask และการออกแบบกฎ ACL ตามนโยบายองค์กร",
      duration: "60 นาที",
      scenario:
        "องค์กรมีนโยบายความปลอดภัย 3 ข้อดังนี้: 1) อนุญาตให้เฉพาะเครื่องผู้ดูแลระบบ (192.168.99.0/24) เท่านั้นที่สามารถรีโมท SSH (TCP Port 22) เข้ามายังอุปกรณ์เครือข่ายและเซิร์ฟเวอร์ (192.168.100.0/24) ได้ 2) อนุญาตให้ทุกแผนกเข้าใช้งาน Web Server (192.168.100.10) ผ่าน HTTPS (TCP Port 443) ได้ และ 3) บล็อกไม่ให้แผนกทั่วไปเข้าถึงเครือข่ายเซิร์ฟเวอร์ในบริการอื่นๆ นอกเหนือจากที่ระบุ แต่ยังให้ใช้อินเทอร์เน็ตได้ตามปกติ",
      questions: [
        {
          qNo: 1,
          question: "1. จงคำนวณค่า Wildcard Mask สำหรับเครือข่าย 192.168.99.0/24, เครือข่าย 172.16.0.0/22 และสำหรับเครื่องโฮสต์เดี่ยว 192.168.100.10/32",
          suggestedAnswer:
            "1) /24 (255.255.255.0) -> Wildcard = 0.0.0.255 | 2) /22 (255.255.252.0) -> Wildcard = 0.0.3.255 | 3) /32 (255.255.255.255) -> Wildcard = 0.0.0.0 (หรือใช้คำสั่ง host 192.168.100.10)"
        },
        {
          qNo: 2,
          question: "2. จงเขียนลำดับคำสั่ง Extended ACL ชื่อ SERVER_PROTECT ให้ตรงตามนโยบายทั้ง 3 ข้อข้างต้น",
          suggestedAnswer:
            "ip access-list extended SERVER_PROTECT\n permit tcp 192.168.99.0 0.0.0.255 192.168.100.0 0.0.0.255 eq 22\n permit tcp any host 192.168.100.10 eq 443\n deny ip any 192.168.100.0 0.0.0.255\n permit ip any any"
        },
        {
          qNo: 3,
          question: "3. หากลืมเขียนบรรทัดสุดท้าย (permit ip any any) ใน ACL ข้างต้น จะเกิดผลกระทบอย่างไรต่อผู้ใช้งาน",
          suggestedAnswer:
            "เนื่องจากท้าย ACL ทุกชุดมี Implicit Deny Any ซ่อนอยู่ หากไม่ใส่ permit ip any any ทราฟฟิกอื่นๆ ทั้งหมด (รวมถึงการออกอินเทอร์เน็ตและการสื่อสารระหว่างแผนกอื่น) จะถูกบล็อกทั้งหมด"
        }
      ]
    },
    jobSheet: {
      sheetNo: 9,
      title: "ใบงานที่ 9 : การปฏิบัติการกำหนดค่า NAT (Static NAT / PAT) และ Access Control List (ACL)",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. Edge Router 1 เครื่อง, ISP Router จำลอง 1 เครื่อง, Layer 3 Switch 1 เครื่อง",
        "2. เครื่องจำลอง Web Server ภายใน 1 เครื่อง, เครื่องผู้ดูแลระบบ (VLAN 99) และเครื่องผู้ใช้ทั่วไป (VLAN 10, 20)"
      ],
      topology:
        "LAN (VLAN 10: 192.168.10.0/24, VLAN 20: 192.168.20.0/24, VLAN 99: 192.168.99.0/24, Server Farm: 192.168.100.0/24) --> Edge Router (Gi0/0 Inside, Gi0/1 Outside: 203.113.10.2/29) --> ISP (203.113.10.1/29)",
      steps: [
        "ขั้นที่ 1: กำหนดขา ip nat inside บนอินเทอร์เฟซฝั่ง LAN (Gi0/0) และ ip nat outside บนอินเทอร์เฟซฝั่ง WAN (Gi0/1) ของ Edge Router",
        "ขั้นที่ 2: สร้าง ACL 1 อนุญาตเครือข่าย 192.168.0.0/16 และผูกคำสั่ง PAT (ip nat inside source list 1 interface gi0/1 overload)",
        "ขั้นที่ 3: ตั้งค่า Static NAT สำหรับ Web Server ภายใน (192.168.100.10) ให้จับคู่กับ Public IP 203.113.10.3",
        "ขั้นที่ 4: สร้าง Extended Named ACL ชื่อ SECURE_POLICY เพื่อควบคุมการเข้าถึง Server Farm ตามโจทย์ และนำไปผูกกับอินเทอร์เฟซด้วยคำสั่ง ip access-group SECURE_POLICY in",
        "ขั้นที่ 5: ทดสอบการออกอินเทอร์เน็ต ตรวจสอบตาราง NAT ด้วย show ip nat translations และตรวจสอบตัวนับแพ็กเกจที่ตรงกับกฎ ACL ด้วย show access-lists"
      ],
      checkpoints: [
        "เครื่องลูกข่ายทุก VLAN สามารถออกสู่อินเทอร์เน็ตได้และปรากฏรายการแปล IP ใน show ip nat translations",
        "เครื่องจากภายนอก (ISP) สามารถเข้าถึง Web Server ผ่าน Public IP 203.113.10.3 ได้สำเร็จ (Static NAT)",
        "คำสั่ง show access-lists แสดงจำนวนแพ็กเกจที่ถูก Permit และ Deny (matches) ตรงตามนโยบายที่กำหนด"
      ],
      solutionCli: `! ตั้งค่า NAT & PAT บน Edge Router
interface gi0/0
 ip nat inside
interface gi0/1
 ip nat outside
exit
access-list 1 permit 192.168.0.0 0.0.255.255
ip nat inside source list 1 interface gi0/1 overload
ip nat inside source static 192.168.100.10 203.113.10.3

! ตั้งค่า Extended ACL
ip access-list extended SECURE_POLICY
 permit tcp 192.168.99.0 0.0.0.255 192.168.100.0 0.0.0.255 eq 22
 permit tcp any host 192.168.100.10 eq 80
 permit tcp any host 192.168.100.10 eq 443
 deny ip any 192.168.100.0 0.0.0.255
 permit ip any any
exit
interface gi0/0
 ip access-group SECURE_POLICY in`
    },
    assignmentSheet: {
      sheetNo: 9,
      title: "ใบมอบหมายงานที่ 9 : ออกแบบนโยบาย Access Control List และ NAT สำหรับองค์กรที่มีหลายแผนก",
      taskDescription:
        "ให้ออกแบบชุดคำสั่ง NAT และ Extended ACL สำหรับองค์กรที่มี 5 แผนก โดยกำหนดสิทธิ์การเข้าถึงระหว่างแผนก การจำกัดสิทธิ์ SSH เข้าสู่ VTY Line ของเราเตอร์และสวิตช์เฉพาะเครื่อง Admin (access-class) และการทำ Port Forwarding ออกสู่อินเทอร์เน็ต",
      deliverables: [
        "1. ตาราง Access Matrix ระบุต้นทาง ปลายทาง พอร์ตบริการ และการอนุญาต (Permit/Deny)",
        "2. สคริปต์คำสั่ง CLI สำหรับ NAT/PAT, Extended ACL และ VTY Line Access-Class"
      ],
      rubric: "ตาราง Access Matrix ชัดเจน 3 คะแนน | ความถูกต้องของคำสั่ง ACL & Wildcard 5 คะแนน | ความถูกต้องของ NAT 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 10,
    unit: 5,
    unitTitle: "หน่วยที่ 5 ความปลอดภัยของระบบเครือข่าย (NAT, Access Control List, Firewall)",
    weekTitle: "การตั้งค่าความปลอดภัยเครือข่ายด้วย Firewall",
    dutyRef: "งานหลัก 4 จัดการความปลอดภัยของระบบเครือข่าย (งานย่อย 4.2 ตั้งค่าความปลอดภัยด้วย Firewall)",
    standardRef: "40104.02 กำหนดค่าความปลอดภัยและการเชื่อมต่อระยะไกลของระบบเครือข่าย (Firewall, ACL, VPN)",
    knowledgeSheet: {
      sheetNo: 10,
      title: "ใบความรู้ที่ 10 : หลักการทำงาน ประเภทของ Firewall และการกำหนดนโยบายความปลอดภัยตามโซนเครือข่าย",
      objectives: [
        "1. อธิบายหลักการทำงานและเปรียบเทียบประเภทของ Firewall (Packet Filtering, Stateful Inspection, Next-Generation Firewall) ได้",
        "2. อธิบายการออกแบบโซนความปลอดภัยเครือข่าย (Inside / Trusted Zone, Outside / Untrusted Zone และ DMZ) ได้",
        "3. กำหนดนโยบายและกฎของ Firewall (Security Zone & Firewall Policy Rules) ตามนโยบายองค์กรได้อย่างถูกต้อง"
      ],
      overview:
        "แม้ว่า ACL บนเราเตอร์จะช่วยกรองแพ็กเกจเบื้องต้นได้ แต่ ACL แบบดั้งเดิมเป็นแบบไร้สถานะ (Stateless) คือตรวจสอบทีละแพ็กเกจโดยไม่จดจำสถานะของการเชื่อมต่อ ในขณะที่ Firewall สมัยใหม่ใช้เทคโนโลยี Stateful Inspection และ Next-Generation Firewall (NGFW) ที่จดจำสถานะเซสชัน (State Table) ตรวจสอบลึกระดับแอปพลิเคชัน (Layer 7 Application Control) และมีระบบป้องกันการบุกรุก (IPS) ในตัว",
      sections: [
        {
          heading: "1. วิวัฒนาการและประเภทของ Firewall",
          content: "Firewall แบ่งตามระดับความสามารถในการตรวจสอบข้อมูลได้ดังนี้:",
          bullets: [
            "1) Stateless Packet Filtering Firewall (Layer 3-4): ตรวจสอบเฉพาะ IP และ Port ของแต่ละแพ็กเกจแยกกัน ไม่จดจำว่าแพ็กเกจนั้นเป็นส่วนหนึ่งของการเชื่อมต่อที่ได้รับอนุญาตหรือไม่",
            "2) Stateful Inspection Firewall (Layer 3-4 State-Aware): บันทึกสถานะการเชื่อมต่อลงในตาราง Connection State Table เมื่อเครื่องภายใน (Inside) เริ่มต้นส่งข้อมูลออกไปยังอินเทอร์เน็ต (Outside) ไฟร์วอลล์จะจำเซสชันไว้และอนุญาตให้แพ็กเกจตอบกลับของเซสชันนั้นไหลกลับเข้ามาได้โดยอัตโนมัติ แต่หากภายนอกพยายามเริ่มต้นเชื่อมต่อเข้ามาเองจะถูกบล็อกทันที",
            "3) Next-Generation Firewall - NGFW (Layer 3-7): รวมความสามารถของ Stateful Firewall เข้ากับ Deep Packet Inspection (DPI), Application Awareness (แยกแยะแอปพลิเคชันได้แม้ใช้พอร์ต 443), Intrusion Prevention System (IPS), Web Filtering, Anti-Malware และการยืนยันตัวตนผู้ใช้ (User Identity)"
          ]
        },
        {
          heading: "2. การออกแบบโซนความปลอดภัย (Security Zones & DMZ Architecture)",
          content: "การตั้งค่า Zone-Based Firewall ในองค์กรแบ่งพื้นที่เครือข่ายออกเป็น 3 โซนมาตรฐาน:",
          bullets: [
            "Inside Zone (Trusted / LAN): เครือข่ายภายในองค์กรที่มีระดับความน่าเชื่อถือสูงสุด (Security Level 100) อนุญาตให้เชื่อมต่อออกไปสู่ DMZ และ Outside ได้",
            "DMZ Zone (Demilitarized Zone / เขตปลอดทหาร): โซนกึ่งเชื่อถือ (Security Level 50) สำหรับวางเซิร์ฟเวอร์ที่ต้องให้บริการแก่บุคคลภายนอก เช่น Public Web Server, Mail Server, DNS Server เพื่อที่หากเซิร์ฟเวอร์ใน DMZ ถูกโจมตี ผู้บุกรุกจะไม่สามารถทะลุเข้ามาถึงเครือข่าย Inside LAN ได้",
            "Outside Zone (Untrusted / WAN Internet): เครือข่ายภายนอกที่มีความเสี่ยงสูง (Security Level 0) ไม่อนุญาตให้เข้าถึง Inside Zone โดยตรง และอนุญาตให้เข้าถึงเฉพาะพอร์ตที่เปิดไว้ในโซน DMZ เท่านั้น"
          ]
        }
      ],
      cliReference: `! === ตัวอย่างการตั้งค่า Zone-Based Policy Firewall (ZBFW) บนอุปกรณ์เครือข่าย ===
! 1. สร้าง Security Zones
Firewall(config)# zone security INSIDE_ZONE
Firewall(config)# zone security OUTSIDE_ZONE
Firewall(config)# zone security DMZ_ZONE

! 2. กำหนดสิ่งที่อนุญาตให้ตรวจสอบแบบ Stateful (Class-Map & Policy-Map)
Firewall(config)# class-map type inspect match-any CM_LAN_TO_WAN
Firewall(config-cmap)# match protocol tcp
Firewall(config-cmap)# match protocol udp
Firewall(config-cmap)# match protocol icmp
Firewall(config-cmap)# exit

Firewall(config)# policy-map type inspect PM_LAN_TO_WAN
Firewall(config-pmap)# class type inspect CM_LAN_TO_WAN
Firewall(config-pmap-c)# inspect
Firewall(config-pmap-c)# exit

! 3. สร้างคู่โซน (Zone-Pair) จาก INSIDE ออกไป OUTSIDE
Firewall(config)# zone-pair security ZP_IN_TO_OUT source INSIDE_ZONE destination OUTSIDE_ZONE
Firewall(config-sec-zone-pair)# service-policy type inspect PM_LAN_TO_WAN
Firewall(config-sec-zone-pair)# exit

! 4. ผูกอินเทอร์เฟซเข้ากับ Security Zone
Firewall(config)# interface gigabitEthernet 0/0
Firewall(config-if)# zone-member security INSIDE_ZONE
Firewall(config)# interface gigabitEthernet 0/1
Firewall(config-if)# zone-member security OUTSIDE_ZONE
Firewall(config-if)# end

! คำสั่งตรวจสอบเซสชันที่กำลังผ่าน Firewall
Firewall# show policy-map type inspect zone-pair sessions`,
      summary:
        "การตั้งค่า Firewall ตามมาตรฐานองค์กรต้องแบ่ง Security Zones (Inside, DMZ, Outside) อย่างชัดเจน และกำหนดกฎแบบ Stateful Inspection โดยยึดหลัก Least Privilege (อนุญาตเฉพาะทราฟฟิกที่จำเป็นต่อการทำงานเท่านั้น)"
    },
    activitySheet: {
      sheetNo: 10,
      title: "ใบกิจกรรมที่ 10 : การออกแบบตารางกฎของไฟร์วอลล์ (Firewall Rulebase) สำหรับโซน Inside, DMZ และ Outside",
      duration: "60 นาที",
      scenario:
        "องค์กรได้ติดตั้งไฟร์วอลล์แยกเครือข่ายเป็น 3 โซน ได้แก่ 1) INSIDE (192.168.10.0/24) 2) DMZ (172.16.100.0/24 มี Web Server ที่ 172.16.100.10 และ Database Server ที่อยู่ในโซน INSIDE ที่ 192.168.10.50) และ 3) OUTSIDE (Internet) โดยต้องการให้ผู้ใช้จากอินเทอร์เน็ตเข้าชมเว็บไซต์ที่ Web Server ใน DMZ ได้ (HTTPS 443) และให้เฉพาะ Web Server ใน DMZ เชื่อมต่อมายัง Database Server ในโซน INSIDE ที่พอร์ต TCP 3306 ได้เท่านั้น",
      questions: [
        {
          qNo: 1,
          question: "1. เพราะเหตุใดจึงต้องนำ Web Server ไปไว้ในโซน DMZ แต่เก็บ Database Server ไว้ในโซน INSIDE",
          suggestedAnswer:
            "เพราะ Web Server ต้องเปิดรับการเชื่อมต่อโดยตรงจากผู้ใช้งานทั่วโลกบนอินเทอร์เน็ตจึงมีความเสี่ยงสูงต่อการถูกโจมตี การแยกไว้ใน DMZ และเก็บข้อมูลสำคัญ (Database Server) ไว้ใน INSIDE โดยเปิดเฉพาะพอร์ต 3306 จาก IP ของ Web Server เท่านั้น ช่วยป้องกันไม่ให้แฮกเกอร์เข้าถึงฐานข้อมูลจากอินเทอร์เน็ตได้โดยตรง (Defense-in-Depth)"
        },
        {
          qNo: 2,
          question: "2. จงเขียนตาราง Firewall Policy Rules (Source Zone, Source IP, Dest Zone, Dest IP, Service/Port, Action, Log) ให้ครบตามความต้องการขององค์กร",
          suggestedAnswer:
            "Rule 1: OUTSIDE (Any) -> DMZ (172.16.100.10) | TCP/443 (HTTPS) | Action: ALLOW (Inspect) | Log: Enabled\nRule 2: DMZ (172.16.100.10) -> INSIDE (192.168.10.50) | TCP/3306 (MySQL) | Action: ALLOW (Inspect) | Log: Enabled\nRule 3: INSIDE (192.168.10.0/24) -> OUTSIDE (Any) | HTTP/HTTPS/DNS | Action: ALLOW (Inspect+NAT)\nRule 4: DMZ (Any) -> INSIDE (Any) | Any | Action: DENY | Log: Enabled (Implicit/Explicit Cleanup Rule)"
        },
        {
          qNo: 3,
          question: "3. การกำหนด Action เป็น 'Inspect' บน Stateful Firewall แตกต่างจากการกำหนด Action เป็น 'Pass/Permit' อย่างไร",
          suggestedAnswer:
            "Action 'Inspect' จะบันทึกเซสชันลงใน State Table และอนุญาตให้ทราฟฟิกขากลับ (Return Traffic) ของเซสชันนั้นวิ่งสวนทางกลับมาได้อัตโนมัติโดยไม่ต้องเขียนกฎขากลับ ส่วน Action 'Pass' เป็นเพียงการปล่อยผ่านทางเดียวแบบไร้สถานะ (Stateless)"
        }
      ]
    },
    jobSheet: {
      sheetNo: 10,
      title: "ใบงานที่ 10 : การตั้งค่าความปลอดภัยเครือข่ายด้วย Zone-Based Firewall และการกำหนดกฎป้องกันโซน DMZ",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. อุปกรณ์ Firewall หรือ Router ที่รองรับ Zone-Based Policy Firewall (ZBFW) 1 เครื่อง",
        "2. สวิตช์สำหรับโซน Inside และโซน DMZ อย่างละ 1 เครื่อง พร้อมเครื่องจำลอง Web Server และ PC ลูกข่าย"
      ],
      topology:
        "Firewall พอร์ต Gi0/0 = INSIDE_ZONE (192.168.10.1/24) | พอร์ต Gi0/1 = OUTSIDE_ZONE (203.113.10.2/29) | พอร์ต Gi0/2 = DMZ_ZONE (172.16.100.1/24, Web Server = 172.16.100.10)",
      steps: [
        "ขั้นที่ 1: สร้าง Security Zone ทั้ง 3 โซน (INSIDE_ZONE, DMZ_ZONE, OUTSIDE_ZONE) และนำอินเทอร์เฟซ Gi0/0, Gi0/1, Gi0/2 เข้าเป็นสมาชิกของแต่ละโซน",
        "ขั้นที่ 2: สร้าง Class-Map และ Policy-Map (Action: Inspect) สำหรับอนุญาตให้ INSIDE ออกไปยัง OUTSIDE และเข้าถึง DMZ ได้",
        "ขั้นที่ 3: สร้าง ACL และ Class-Map สำหรับอนุญาตให้จาก OUTSIDE เข้ามายัง DMZ ได้เฉพาะ IP 172.16.100.10 ที่พอร์ต TCP 80 และ 443 เท่านั้น",
        "ขั้นที่ 4: ผูก Policy-Map เข้ากับ Zone-Pair (IN-to-OUT, IN-to-DMZ, OUT-to-DMZ)",
        "ขั้นที่ 5: ทดสอบการเชื่อมต่อจากแต่ละโซนและตรวจสอบตารางเซสชันด้วยคำสั่ง show policy-map type inspect zone-pair sessions"
      ],
      checkpoints: [
        "เครื่องใน INSIDE_ZONE สามารถ Ping และเปิดเว็บใน DMZ และ OUTSIDE ได้ปกติ",
        "เครื่องจาก OUTSIDE_ZONE สามารถเปิดเว็บ (TCP 80/443) ที่ Web Server ใน DMZ ได้ แต่ไม่สามารถ Ping หรือ SSH เข้าไปได้",
        "เครื่องจาก OUTSIDE_ZONE และ DMZ_ZONE ไม่สามารถเริ่มต้นการเชื่อมต่อเข้ามาใน INSIDE_ZONE ได้ (ถูกบล็อก 100%)"
      ],
      solutionCli: `zone security INSIDE_ZONE
zone security OUTSIDE_ZONE
zone security DMZ_ZONE

ip access-list extended ACL_OUT_TO_DMZ_WEB
 permit tcp any host 172.16.100.10 eq 80
 permit tcp any host 172.16.100.10 eq 443

class-map type inspect match-any CM_IN_TO_OUT
 match protocol tcp
 match protocol udp
 match protocol icmp

class-map type inspect match-all CM_OUT_TO_DMZ
 match access-group name ACL_OUT_TO_DMZ_WEB

policy-map type inspect PM_IN_TO_OUT
 class type inspect CM_IN_TO_OUT
  inspect

policy-map type inspect PM_OUT_TO_DMZ
 class type inspect CM_OUT_TO_DMZ
  inspect

zone-pair security ZP_IN_OUT source INSIDE_ZONE destination OUTSIDE_ZONE
 service-policy type inspect PM_IN_TO_OUT
zone-pair security ZP_OUT_DMZ source OUTSIDE_ZONE destination DMZ_ZONE
 service-policy type inspect PM_OUT_TO_DMZ

interface gi0/0
 zone-member security INSIDE_ZONE
interface gi0/1
 zone-member security OUTSIDE_ZONE
interface gi0/2
 zone-member security DMZ_ZONE`
    },
    assignmentSheet: {
      sheetNo: 10,
      title: "ใบมอบหมายงานที่ 10 : จัดทำเอกสารนโยบายความปลอดภัยไฟร์วอลล์องค์กร (Enterprise Firewall Security Policy)",
      taskDescription:
        "ให้ผู้เรียนออกแบบสถาปัตยกรรมไฟร์วอลล์และตารางกฎความปลอดภัย (Firewall Rulebase Matrix) สำหรับโรงพยาบาลหรือสถาบันการศึกษาที่มีโซนเครือข่าย 4 โซน ได้แก่ Management Zone, Staff Zone, Student/Guest Wi-Fi Zone, Server DMZ Zone และ Internet Zone",
      deliverables: [
        "1. แผนผังโซนความปลอดภัย (Security Zone Architecture Diagram)",
        "2. ตาราง Firewall Policy Rulebase ครบทุกคู่โซน พร้อมระบุเหตุผลด้านความปลอดภัยและสคริปต์การตั้งค่า"
      ],
      rubric: "การแบ่งโซนปลอดภัยตามหลัก Defense-in-Depth 4 คะแนน | ความรัดกุมของกฎ Firewall 4 คะแนน | สคริปต์และเอกสาร 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 11,
    unit: 6,
    unitTitle: "หน่วยที่ 6 การเชื่อมต่อระยะไกลและการเพิ่มประสิทธิภาพเครือข่าย (VPN, Load Balance, QoS)",
    weekTitle: "การเชื่อมต่อระยะไกลอย่างปลอดภัยด้วยเทคโนโลยี VPN",
    dutyRef: "งานหลัก 5 จัดการการเชื่อมต่อระยะไกลและประสิทธิภาพเครือข่าย (งานย่อย 5.1 กำหนดค่า VPN เชื่อมต่อระยะไกล)",
    standardRef: "40104.02 กำหนดค่าความปลอดภัยและการเชื่อมต่อระยะไกลของระบบเครือข่าย (Firewall, ACL, VPN)",
    knowledgeSheet: {
      sheetNo: 11,
      title: "ใบความรู้ที่ 11 : ประเภทของเทคโนโลยี VPN, หลักการเข้ารหัสข้อมูล และการกำหนดค่าเชื่อมต่อระยะไกลอย่างปลอดภัย",
      objectives: [
        "1. จำแนกประเภทของเครือข่ายส่วนตัวเสมือน (Site-to-Site VPN และ Remote Access VPN) ได้",
        "2. อธิบายหลักการรักษาความปลอดภัยของ IPsec VPN (Confidentiality, Integrity, Authentication, Anti-Replay) และขั้นตอน IKE Phase 1 / Phase 2 ได้",
        "3. กำหนดค่าและทดสอบการทำงานของ IPsec Site-to-Site VPN เพื่อเชื่อมต่อระหว่างเครือข่ายสำนักงานใหญ่และสาขาได้"
      ],
      overview:
        "Virtual Private Network (VPN) คือเทคโนโลยีการสร้างอุโมงค์สื่อสารเสมือน (Encrypted Tunnel) ผ่านเครือข่ายสาธารณะ (อินเทอร์เน็ต) เพื่อให้สำนักงานใหญ่สามารถเชื่อมต่อกับสาขาย่อยหรือพนักงานที่ปฏิบัติงานนอกสถานที่ได้อย่างปลอดภัยเสมือนอยู่ในวงแลนเดียวกัน โดยอาศัยการเข้ารหัสข้อมูล (Encryption) และการตรวจสอบความถูกต้องของข้อมูล (Authentication & Integrity) ทำให้ประหยัดค่าเช่าวงจรสื่อสารส่วนตัว (Leased Line / MPLS) ได้อย่างมาก",
      sections: [
        {
          heading: "1. ประเภทของระบบ VPN ในองค์กร",
          content: "การใช้งาน VPN แบ่งออกเป็น 2 รูปแบบหลักตามลักษณะผู้ใช้งาน:",
          bullets: [
            "1) Site-to-Site VPN (LAN-to-LAN VPN): เชื่อมต่อเครือข่ายของสำนักงานใหญ่ (HQ) เข้ากับเครือข่ายของสาขาย่อย (Branch Office) แบบถาวร โดยตั้งค่าอุโมงค์ VPN ไว้ที่ตัว Edge Router หรือ Firewall ของทั้งสองฝั่ง เครื่องคอมพิวเตอร์ภายในสาขาสามารถสื่อสารข้ามสาขาได้ทันทีโดยไม่ต้องลงโปรแกรม VPN Client",
            "2) Remote Access VPN (Client-to-Site VPN): สำหรับพนักงานที่ทำงานจากที่บ้าน (Work From Home) หรือเดินทางไปนอกสถานที่ ใช้ซอฟต์แวร์ VPN Client (เช่น SSL/TLS VPN, OpenVPN, WireGuard, Cisco AnyConnect) ยืนยันตัวตนเชื่อมต่อเข้ามายัง VPN Gateway ขององค์กรเมื่อต้องการใช้งาน"
          ]
        },
        {
          heading: "2. สถาปัตยกรรม IPsec VPN และขั้นตอนการสร้างอุโมงค์ (IKE Phase 1 & Phase 2)",
          content:
            "มาตรฐาน IPsec (Internet Protocol Security) ประกอบด้วยกลไกหลักที่เรียกว่าชุดพารามิเตอร์ CIA + DH และมี 2 เฟสในการสร้างอุโมงค์:",
          bullets: [
            "การเข้ารหัสความลับ (Confidentiality / Encryption): ใช้ขั้นตอนวิธี AES-128, AES-256 (ปลอดภัยสูง มาตรฐานปัจจุบัน) หรือ 3DES",
            "การตรวจสอบความถูกต้องไม่ถูกแก้ไข (Integrity / Hashing): ใช้ SHA-256, SHA-512 หรือ MD5 (HMAC)",
            "การพิสูจน์ตัวตน (Authentication): ใช้กุญแจรหัสลับร่วมกัน (Pre-Shared Key - PSK) หรือใบรับรองดิจิทัล (RSA Digital Certificates)",
            "การแลกเปลี่ยนกุญแจอย่างปลอดภัย (Diffie-Hellman - DH Group): เช่น DH Group 14 (2048-bit), Group 19/20 (Elliptic Curve)",
            "IKE Phase 1 (ISAKMP Tunnel): เราเตอร์สองฝั่งเจรจานโยบายความปลอดภัย พิสูจน์ตัวตน และสร้างอุโมงค์ควบคุมสำหรับการจัดการ",
            "IKE Phase 2 (IPsec Tunnel - ESP): สร้างอุโมงค์ส่งข้อมูลจริงด้วยโพรโทคอล ESP (Encapsulating Security Payload) สำหรับทราฟฟิกที่ตรงกับ ACL ที่กำหนด (Interesting Traffic) และต้องยกเว้นการทำ NAT (NAT Exemption) สำหรับทราฟฟิกที่วิ่งผ่านอุโมงค์ VPN"
          ]
        }
      ],
      cliReference: `! === การตั้งค่า IPsec Site-to-Site VPN บน HQ-Router (WAN: 203.113.10.2 -> Branch WAN: 202.44.20.2) ===
! 1. กำหนดนโยบาย IKE Phase 1 (ISAKMP Policy & Pre-Shared Key)
HQ-Router(config)# crypto isakmp policy 10
HQ-Router(config-isakmp)# encryption aes 256
HQ-Router(config-isakmp)# hash sha256
HQ-Router(config-isakmp)# authentication pre-share
HQ-Router(config-isakmp)# group 14
HQ-Router(config-isakmp)# lifetime 86400
HQ-Router(config-isakmp)# exit
HQ-Router(config)# crypto isakmp key NykVpn@Secret2567 address 202.44.20.2

! 2. กำหนดนโยบาย IKE Phase 2 (IPsec Transform-Set)
HQ-Router(config)# crypto ipsec transform-set TS_AES256_SHA esp-aes 256 esp-sha256-hmac
HQ-Router(cfg-crypto-trans)# mode tunnel
HQ-Router(cfg-crypto-trans)# exit

! 3. กำหนด Interesting Traffic (ACL ระบุวงแลน HQ 192.168.10.0/24 ไปยังวงแลนสาขา 192.168.50.0/24)
HQ-Router(config)# ip access-list extended ACL_VPN_TRAFFIC
HQ-Router(config-ext-nacl)# permit ip 192.168.10.0 0.0.0.255 192.168.50.0 0.0.0.255
HQ-Router(config-ext-nacl)# exit

! 4. สร้าง Crypto Map และนำไปผูกกับพอร์ต WAN
HQ-Router(config)# crypto map CMAP_VPN 10 ipsec-isakmp
HQ-Router(config-crypto-map)# set peer 202.44.20.2
HQ-Router(config-crypto-map)# set transform-set TS_AES256_SHA
HQ-Router(config-crypto-map)# match address ACL_VPN_TRAFFIC
HQ-Router(config-crypto-map)# exit
HQ-Router(config)# interface gigabitEthernet 0/1
HQ-Router(config-if)# crypto map CMAP_VPN

! คำสั่งตรวจสอบสถานะอุโมงค์ VPN
HQ-Router# show crypto isakmp sa
HQ-Router# show crypto ipsec sa`,
      summary:
        "IPsec Site-to-Site VPN ช่วยเชื่อมต่อเครือข่ายระหว่างสาขาผ่านอินเทอร์เน็ตอย่างปลอดภัย โดยทั้งสองฝั่งต้องตั้งค่าพารามิเตอร์ IKE Phase 1, Phase 2, Pre-Shared Key ให้ตรงกัน และกำหนด ACL ของ Interesting Traffic ให้เป็นภาพสะท้อน (Mirror ACL) ของกันและกัน"
    },
    activitySheet: {
      sheetNo: 11,
      title: "ใบกิจกรรมที่ 11 : วิเคราะห์การจับคู่พารามิเตอร์ IPsec VPN และการแก้ไขปัญหา NAT Exemption",
      duration: "60 นาที",
      scenario:
        "ผู้ดูแลระบบตั้งค่า IPsec Site-to-Site VPN ระหว่างสำนักงานใหญ่ (LAN: 192.168.10.0/24, WAN: 203.113.10.2) กับสาขาเชียงใหม่ (LAN: 192.168.50.0/24, WAN: 202.44.20.2) เมื่อตรวจสอบด้วย show crypto isakmp sa พบสถานะเป็น MM_NO_STATE (Phase 1 ไม่สำเร็จ) และเมื่อแก้ Phase 1 สำเร็จแล้ว ทราฟฟิกกลับถูกแปลงเป็น Public IP ด้วย PAT ก่อนเข้าสู่อุโมงค์ VPN",
      questions: [
        {
          qNo: 1,
          question: "1. สาเหตุใดบ้างที่ทำให้การเจรจา IKE Phase 1 (ISAKMP SA) ล้มเหลวและขึ้นสถานะ MM_NO_STATE",
          suggestedAnswer:
            "เกิดจาก 1) รหัสผ่าน Pre-Shared Key ทั้งสองฝั่งสะกดไม่ตรงกัน 2) พารามิเตอร์ใน crypto isakmp policy (Encryption, Hash, Authentication, DH Group) ไม่ตรงกัน 3) ระบุ IP ของ Peer ผิด หรือ 4) Firewall บล็อกพอร์ต UDP 500 / UDP 4500"
        },
        {
          qNo: 2,
          question: "2. บนเราเตอร์สาขาเชียงใหม่ ต้องเขียนคำสั่ง ACL สำหรับกำหนด Interesting Traffic (ACL_VPN_TRAFFIC) อย่างไรจึงจะจับคู่กับสำนักงานใหญ่ได้ถูกต้อง",
          suggestedAnswer:
            "ต้องเขียนเป็นภาพสะท้อน (Mirror) กับฝั่งสำนักงานใหญ่ คือให้ต้นทางเป็น LAN สาขาเชียงใหม่ และปลายทางเป็น LAN สำนักงานใหญ่:\npermit ip 192.168.50.0 0.0.0.255 192.168.10.0 0.0.0.255"
        },
        {
          qNo: 3,
          question: "3. จะตั้งค่า NAT Exemption อย่างไรเพื่อไม่ให้ทราฟฟิกที่ส่งไปหา LAN สาขา (192.168.50.0/24) ถูกแปลงด้วย PAT ออกสู่อินเทอร์เน็ต",
          suggestedAnswer:
            "ใน ACL ที่ใช้ทำ NAT (NAT ACL) ให้เพิ่มบรรทัดแรกเป็น deny ip 192.168.10.0 0.0.0.255 192.168.50.0 0.0.0.255 ก่อนบรรทัด permit ip 192.168.10.0 0.0.0.255 any เพื่อบอกเราเตอร์ว่าไม่ต้องแปลง NAT สำหรับแพ็กเกจที่วิ่งข้ามสาขา แต่ให้ส่งเข้าสู่กระบวนการเข้ารหัส IPsec VPN แทน"
        }
      ]
    },
    jobSheet: {
      sheetNo: 11,
      title: "ใบงานที่ 11 : การกำหนดค่า IPsec Site-to-Site VPN เชื่อมต่อระหว่างเครือข่ายสำนักงานใหญ่และสาขา",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. Router ที่รองรับ Security Package (IPsec K9) จำนวน 2 เครื่อง (HQ-R1 และ Branch-R2) และ ISP Router จำลอง 1 เครื่อง",
        "2. สวิตช์และเครื่องคอมพิวเตอร์ลูกข่ายฝั่งสำนักงานใหญ่และฝั่งสาขา"
      ],
      topology:
        "HQ LAN (192.168.10.0/24) --> HQ-R1 (WAN: 203.113.10.2/30) <===[Internet ISP]===> Branch-R2 (WAN: 202.44.20.2/30) <-- Branch LAN (192.168.50.0/24)",
      steps: [
        "ขั้นที่ 1: ตั้งค่าการเชื่อมต่อ WAN ผ่าน ISP Router และทดสอบว่า HQ-R1 (203.113.10.2) สามารถ Ping ไปยัง Branch-R2 (202.44.20.2) ได้",
        "ขั้นที่ 2: กำหนดค่า IKE Phase 1 (crypto isakmp policy 10: AES-256, SHA, Pre-share, Group 14) และ Pre-Shared Key บนทั้ง HQ-R1 และ Branch-R2",
        "ขั้นที่ 3: กำหนดค่า IKE Phase 2 Transform-Set (esp-aes 256 esp-sha-hmac) และสร้าง Mirror ACL สำหรับ Interesting Traffic ทั้งสองฝั่ง",
        "ขั้นที่ 4: สร้าง Crypto Map ผูกเข้ากับอินเทอร์เฟซ WAN ของเราเตอร์ทั้งสองฝั่ง พร้อมตั้งค่า NAT Exemption สำหรับวงแลนข้ามสาขา",
        "ขั้นที่ 5: ทดสอบ Ping จาก PC สำนักงานใหญ่ (192.168.10.10) ไปยัง PC สาขา (192.168.50.10) เพื่อกระตุ้นให้อุโมงค์ VPN ทำงาน และตรวจสอบด้วย show crypto isakmp sa และ show crypto ipsec sa"
      ],
      checkpoints: [
        "คำสั่ง show crypto isakmp sa แสดงสถานะ QM_IDLE (ACTIVE) ยืนยันว่า IKE Phase 1 สำเร็จ",
        "คำสั่ง show crypto ipsec sa แสดงจำนวนแพ็กเกจ #pkts encaps และ #pkts decaps เพิ่มขึ้นตามจำนวนการส่งข้อมูลจริง",
        "เครื่องลูกข่ายทั้งสองสาขาสื่อสารกันด้วย Private IP ผ่านอุโมงค์เข้ารหัสได้สำเร็จ जबकिยังออกอินเทอร์เน็ตผ่าน PAT ได้ปกติ"
      ],
      solutionCli: `! === บน HQ-R1 ===
crypto isakmp policy 10
 encryption aes 256
 hash sha
 authentication pre-share
 group 14
crypto isakmp key NykVpn@2567 address 202.44.20.2
crypto ipsec transform-set TS_VPN esp-aes 256 esp-sha-hmac
ip access-list extended ACL_VPN
 permit ip 192.168.10.0 0.0.0.255 192.168.50.0 0.0.0.255
crypto map CMAP_VPN 10 ipsec-isakmp
 set peer 202.44.20.2
 set transform-set TS_VPN
 match address ACL_VPN
interface gi0/1
 crypto map CMAP_VPN

! === บน Branch-R2 ===
crypto isakmp policy 10
 encryption aes 256
 hash sha
 authentication pre-share
 group 14
crypto isakmp key NykVpn@2567 address 203.113.10.2
crypto ipsec transform-set TS_VPN esp-aes 256 esp-sha-hmac
ip access-list extended ACL_VPN
 permit ip 192.168.50.0 0.0.0.255 192.168.10.0 0.0.0.255
crypto map CMAP_VPN 10 ipsec-isakmp
 set peer 203.113.10.2
 set transform-set TS_VPN
 match address ACL_VPN
interface gi0/1
 crypto map CMAP_VPN`
    },
    assignmentSheet: {
      sheetNo: 11,
      title: "ใบมอบหมายงานที่ 11 : ออกแบบระบบเชื่อมต่อเครือข่ายระยะไกล (Site-to-Site & Remote Access VPN) สำหรับองค์กร",
      taskDescription:
        "ให้ออกแบบระบบ VPN สำหรับบริษัทที่มีสำนักงานใหญ่กรุงเทพฯ เชื่อมต่อกับสาขานครนายกด้วย IPsec Site-to-Site VPN และรองรับพนักงานฝ่ายไอทีที่ทำงานจากที่บ้านด้วย Remote Access VPN พร้อมจัดทำตารางพารามิเตอร์การเข้ารหัสและสคริปต์การตั้งค่า",
      deliverables: [
        "1. แผนผังสถาปัตยกรรม VPN Tunnel และตารางเปรียบเทียบพารามิเตอร์ความปลอดภัย (IKEv2/IPsec vs SSL/WireGuard)",
        "2. สคริปต์คำสั่งตั้งค่า Site-to-Site VPN และ NAT Exemption ครบทั้งสองฝั่ง"
      ],
      rubric: "การเลือกพารามิเตอร์การเข้ารหัสปลอดภัย 4 คะแนน | ความถูกต้องของสคริปต์ VPN ทั้ง 2 ฝั่ง 4 คะแนน | แผนผังประกอบ 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 12,
    unit: 6,
    unitTitle: "หน่วยที่ 6 การเชื่อมต่อระยะไกลและการเพิ่มประสิทธิภาพเครือข่าย (VPN, Load Balance, QoS)",
    weekTitle: "การเพิ่มประสิทธิภาพเครือข่ายด้วย Load Balance และ QoS",
    dutyRef: "งานหลัก 5 จัดการการเชื่อมต่อระยะไกลและประสิทธิภาพเครือข่าย (งานย่อย 5.2 เพิ่มประสิทธิภาพด้วย Load Balance และ QoS)",
    standardRef: "มาตรฐานอาชีพ สถาบันคุณวุฒิวิชาชีพ อาชีพช่างสนับสนุนด้านเทคนิค ระดับ 4-5",
    knowledgeSheet: {
      sheetNo: 12,
      title: "ใบความรู้ที่ 12 : การจัดการระบบอินเทอร์เน็ตหลายเส้นทาง (Multi-WAN Load Balance) และการจัดการแบนด์วิดท์ (QoS)",
      objectives: [
        "1. อธิบายหลักการจัดการระบบอินเทอร์เน็ตหลายเส้นทาง (Multi-WAN Load Balancing & Failover) ด้วย ECMP, PBR และ IP SLA ได้",
        "2. อธิบายกลไกการจัดการคุณภาพบริการเครือข่าย (Quality of Service - QoS): การจำแนกประเภท (Classification), การติดป้ายความสำคัญ (Marking DSCP/CoS), การจัดคิว (Queuing LLQ/CBWFQ) และการจำกัดแบนด์วิดท์ (Policing/Shaping) ได้",
        "3. กำหนดค่า Load Balance และการจัดการแบนด์วิดท์ (QoS) เพื่อให้เครือข่ายองค์กรทำงานได้อย่างมีประสิทธิภาพสูงสุดได้"
      ],
      overview:
        "องค์กรยุคดิจิทัลจำเป็นต้องเชื่อมต่ออินเทอร์เน็ตจากผู้ให้บริการมากกว่า 1 ราย (Multi-WAN เช่น ISP-1 และ ISP-2) เพื่อกระจายภาระงาน (Load Balancing) และสำรองเส้นทางอัตโนมัติเมื่อลิงก์ใดลิงก์หนึ่งล่ม (Automatic Failover) นอกจากนี้ เมื่อมีทราฟฟิกหลากหลายประเภทวิ่งพร้อมกัน จำเป็นต้องทำ Quality of Service (QoS) เพื่อรับประกันแบนด์วิดท์และความหน่วงต่ำให้กับระบบสำคัญ เช่น ระบบประชุมทางไกล (Voice/Video) และระบบ ERP ขององค์กร",
      sections: [
        {
          heading: "1. การจัดการระบบอินเทอร์เน็ตหลายเส้นทาง (Multi-WAN Load Balance & Failover)",
          content: "เทคนิคการกระจายทราฟฟิกออกสู่อินเทอร์เน็ตหลายเส้นทางในระดับองค์กรมี 3 รูปแบบสำคัญ:",
          bullets: [
            "1) ECMP (Equal-Cost Multi-Path Routing): การกำหนด Default Route 2 เส้นทางที่มีค่า Metric/AD เท่ากัน เพื่อกระจายเซสชันออกทั้ง WAN 1 และ WAN 2 (หรือใช้ Per-Connection Classifier - PCC ใน RouterOS / SD-WAN)",
            "2) PBR (Policy-Based Routing): การกำหนดนโยบายแยกเส้นทางตามกลุ่มผู้ใช้งานหรือประเภทบริการ เช่น ให้เครือข่ายผู้บริหารและเซิร์ฟเวอร์ (VLAN 10, 100) ออกผ่านลิงก์ความเร็วสูง ISP-1 และให้เครือข่ายผู้ใช้ทั่วไป/Wi-Fi (VLAN 20, 30) ออกผ่าน ISP-2",
            "3) IP SLA & Object Tracking (Health Check Failover): การตั้งให้เราเตอร์ส่งแพ็กเกจตรวจสอบ (Ping / HTTP Probe) ไปยังปลายทางบนอินเทอร์เน็ต (เช่น 8.8.8.8 หรือ 1.1.1.1) ตลอดเวลา หากลิงก์ ISP-1 อินเทอร์เน็ตใช้งานไม่ได้ ระบบจะถอนเส้นทาง ISP-1 ออกและย้ายทราฟฟิกทั้งหมดไปออก ISP-2 อัตโนมัติ"
          ]
        },
        {
          heading: "2. การจัดการแบนด์วิดท์และช่องทางของระบบเครือข่าย (Quality of Service - QoS)",
          content: "การจัดลำดับความสำคัญและการควบคุมแบนด์วิดท์ด้วยสถาปัตยกรรม Modular QoS CLI (MQC) ประกอบด้วย 3 ขั้นตอนหลัก:",
          bullets: [
            "1) Classification & Marking (class-map): จำแนกประเภททราฟฟิกด้วย ACL, Protocol (NBAR) หรือ DSCP และตีตราค่าความสำคัญ เช่น เสียง VoIP ใช้ค่า DSCP EF (Expedited Forwarding = 46), วิดีโอประชุมใช้ AF41, ข้อมูลทั่วไปใช้ Best Effort (0)",
            "2) Queuing & Bandwidth Guarantee (policy-map): จัดสรรคิวด่วนพิเศษ (Low Latency Queuing - LLQ ด้วยคำสั่ง priority) ให้กับทราฟฟิกเสียง/วิดีโอ และรับประกันแบนด์วิดท์ขั้นต่ำ (Class-Based Weighted Fair Queuing - CBWFQ ด้วยคำสั่ง bandwidth) ให้กับระบบงานหลัก",
            "3) Traffic Policing & Shaping: การควบคุมเพดานความเร็วสูงสุดของทราฟฟิกที่ไม่สำคัญ (เช่น การดาวน์โหลดไฟล์ขนาดใหญ่หรือ Guest Wi-Fi) ไม่ให้แย่งแบนด์วิดท์ของทั้งองค์กร โดย Policing จะตัดแพ็กเกจส่วนเกินทิ้งทันที ส่วน Shaping จะหน่วงแพ็กเกจไว้ในบัฟเฟอร์เพื่อให้ส่งออกอย่างราบเรียบ"
          ]
        }
      ],
      cliReference: `! === 1. การตั้งค่า Multi-WAN Load Balance (PBR) ร่วมกับ IP SLA Health Check ===
! ตั้งค่า IP SLA ตรวจสอบสถานะอินเทอร์เน็ตของ ISP-1 และ ISP-2
Router(config)# ip sla 1
Router(config-ip-sla)# icmp-echo 8.8.8.8 source-interface gigabitEthernet 0/1
Router(config-ip-sla-echo)# frequency 5
Router(config)# ip sla schedule 1 life forever start-time now
Router(config)# track 1 ip sla 1 reachability

! กำหนด Default Route พร้อมระบบตรวจเช็ค Track
Router(config)# ip route 0.0.0.0 0.0.0.0 203.113.10.1 track 1
Router(config)# ip route 0.0.0.0 0.0.0.0 202.44.20.1 10

! ตั้งค่า Policy-Based Routing (PBR) แยก VLAN 10 ออก ISP-1 และ VLAN 20 ออก ISP-2
Router(config)# access-list 10 permit 192.168.10.0 0.0.0.255
Router(config)# access-list 20 permit 192.168.20.0 0.0.0.255
Router(config)# route-map MULTI_WAN_PBR permit 10
Router(config-route-map)# match ip address 10
Router(config-route-map)# set ip next-hop verify-availability 203.113.10.1 1 track 1
Router(config)# route-map MULTI_WAN_PBR permit 20
Router(config-route-map)# match ip address 20
Router(config-route-map)# set ip next-hop 202.44.20.1

! === 2. การตั้งค่า QoS (MQC: Class-Map, Policy-Map, Service-Policy) ===
Router(config)# class-map match-any CM_VOICE_REALTIME
Router(config-cmap)# match ip dscp ef
Router(config-cmap)# match protocol rtp

Router(config)# class-map match-any CM_BUSINESS_APP
Router(config-cmap)# match ip dscp af31
Router(config-cmap)# match protocol https

Router(config)# policy-map PM_WAN_QOS
Router(config-pmap)# class CM_VOICE_REALTIME
Router(config-pmap-c)# priority percent 20
Router(config-pmap-c)# class CM_BUSINESS_APP
Router(config-pmap-c)# bandwidth percent 40
Router(config-pmap-c)# class class-default
Router(config-pmap-c)# fair-queue
Router(config-pmap-c)# police 20000000 conform-action transmit exceed-action drop
Router(config-pmap-c)# exit

Router(config)# interface gigabitEthernet 0/1
Router(config-if)# service-policy output PM_WAN_QOS

! คำสั่งตรวจสอบ
Router# show ip sla statistics
Router# show track
Router# show policy-map interface gigabitEthernet 0/1`,
      summary:
        "การผสาน Multi-WAN Load Balancing (PBR/ECMP + IP SLA Failover) เข้ากับการจัดการแบนด์วิดท์ด้วย QoS (LLQ/CBWFQ & Traffic Shaping/Policing) ช่วยให้ระบบเครือข่ายขององค์กรใช้งานแบนด์วิดท์ได้อย่างคุ้มค่า มีความเสถียรต่อเนื่อง และไม่เกิดอาการกระตุกในบริการที่สำคัญ"
    },
    activitySheet: {
      sheetNo: 12,
      title: "ใบกิจกรรมที่ 12 : วิเคราะห์การออกแบบนโยบาย Multi-WAN Load Balance และการจัดสรรแบนด์วิดท์ QoS",
      duration: "60 นาที",
      scenario:
        "วิทยาลัยแห่งหนึ่งมีลิงก์อินเทอร์เน็ต 2 เส้น ได้แก่ WAN 1 (Fiber 500 Mbps) และ WAN 2 (Fiber 500 Mbps) ในช่วงเวลาเรียนมักเกิดปัญหาเมื่อนักศึกษาดาวน์โหลดไฟล์วิดีโอขนาดใหญ่และอัปเดตเกม ทำให้ระบบประชุมออนไลน์ของผู้บริหารและระบบทะเบียนวัดผลเกิดอาการค้างและเสียงกระตุก นอกจากนี้เมื่อสัปดาห์ก่อนสายไฟเบอร์ของผู้ให้บริการ WAN 1 ขาดด้านนอกวิทยาลัย แต่เราเตอร์ยังคงส่งแพ็กเกจออกไปทาง WAN 1 เพราะพอร์ตเชื่อมต่อกับ ONU ยังเป็นสถานะ Up อยู่",
      questions: [
        {
          qNo: 1,
          question: "1. เพราะเหตุใดเมื่อสายไฟเบอร์ของ ISP ขาดด้านนอกวิทยาลัย เราเตอร์จึงไม่สลับไปใช้ WAN 2 โดยอัตโนมัติ และต้องใช้ฟีเจอร์ใดแก้ปัญหานี้",
          suggestedAnswer:
            "เพราะพอร์ตสายแลนระหว่างเราเตอร์กับกล่อง ONU ของผู้ให้บริการยังคงเชื่อมต่อกันอยู่ (Line Protocol is Up) เราเตอร์จึงไม่รู้ว่าอินเทอร์เน็ตต้นทางล่ม วิธีแก้ไขคือต้องตั้งค่า IP SLA (ICMP Echo Probe ไปยัง IP ภายนอก เช่น 8.8.8.8) ร่วมกับ Object Tracking (track 1 ip sla 1 reachability) เพื่อตรวจสอบว่าออกอินเทอร์เน็ตได้จริงหรือไม่"
        },
        {
          qNo: 2,
          question: "2. ควรออกแบบการทำ Load Balance ระหว่าง WAN 1 และ WAN 2 อย่างไรเพื่อให้ใช้งานลิงก์ทั้งสองเส้นได้อย่างมีประสิทธิภาพ",
          suggestedAnswer:
            "ใช้ Policy-Based Routing (PBR) หรือ SD-WAN Rules แบ่งให้เครือข่ายระบบงานสำคัญ (ระบบบริหาร ทะเบียน อาจารย์ และ Server) วิ่งออกทาง WAN 1 เป็นหลักโดยมี WAN 2 เป็นสำรอง และให้เครือข่ายห้องปฏิบัติการนักศึกษาและ Wi-Fi วิ่งออกทาง WAN 2 เป็นหลักโดยมี WAN 1 เป็นสำรอง (Active-Active Load Sharing with Mutual Failover)"
        },
        {
          qNo: 3,
          question: "3. จงออกแบบนโยบาย QoS (Policy-Map) บนลิงก์ขนาด 500 Mbps เพื่อแก้ปัญหาเสียง/วิดีโอประชุมกระตุกและจำกัดความเร็วการดาวน์โหลดทั่วไป",
          suggestedAnswer:
            "แบ่งคลาสทราฟฟิกออกเป็น 3 ระดับ: 1) Voice & Video Conferencing (DSCP EF/AF41) ใช้คิวด่วนพิเศษ LLQ (priority percent 20 = 100 Mbps) 2) ระบบงานวิชาการและทะเบียน ใช้ CBWFQ รับประกันแบนด์วิดท์ขั้นต่ำ (bandwidth percent 40 = 200 Mbps) และ 3) Class-Default (ทราฟฟิกดาวน์โหลดทั่วไป) เปิดใช้ Fair-Queue และจำกัดเพดานแบนด์วิดท์ (Shaping/Policing) ไม่ให้กินแบนด์วิดท์เกิน 200 Mbps เมื่อเครือข่ายหนาแน่น"
        }
      ]
    },
    jobSheet: {
      sheetNo: 12,
      title: "ใบงานที่ 12 : การกำหนดค่า Multi-WAN Load Balance และนโยบายจัดการแบนด์วิดท์ (QoS)",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. Edge Router 1 เครื่อง เชื่อมต่อกับ ISP-1 Router และ ISP-2 Router",
        "2. Layer 3 Switch และเครื่องลูกข่ายใน VLAN 10 (Staff) และ VLAN 20 (Student)"
      ],
      topology:
        "VLAN 10 (192.168.10.0/24) & VLAN 20 (192.168.20.0/24) --> Edge Router [Gi0/1 = WAN1 (203.113.10.2/30 -> ISP1 203.113.10.1) | Gi0/2 = WAN2 (202.44.20.2/30 -> ISP2 202.44.20.1)]",
      steps: [
        "ขั้นที่ 1: ตั้งค่า IP SLA 1 และ Track 1 เพื่อตรวจสอบความพร้อมใช้งานของ WAN 1 และตั้งค่า IP SLA 2 / Track 2 สำหรับ WAN 2",
        "ขั้นที่ 2: ตั้งค่า Route-Map สำหรับทำ Policy-Based Routing (PBR) ให้ VLAN 10 ออกทาง WAN 1 (สำรองออก WAN 2) และให้ VLAN 20 ออกทาง WAN 2 (สำรองออก WAN 1) พร้อมตั้งค่า NAT Overload รองรับทั้ง 2 ขา WAN (route-map NAT)",
        "ขั้นที่ 3: สร้าง Class-Map จำแนกทราฟฟิกเสียง/วิดีโอ (DSCP EF), ทราฟฟิกเว็บงานบริการ (HTTP/HTTPS) และทราฟฟิกทั่วไป",
        "ขั้นที่ 4: สร้าง Policy-Map กำหนด LLQ Priority 20%, CBWFQ Bandwidth 40% และ Policing บน Class-Default จากนั้นผูก service-policy output เข้ากับพอร์ต WAN ทั้งสองขา",
        "ขั้นที่ 5: ทดสอบ traceroute จาก VLAN 10 และ VLAN 20 เพื่อยืนยันว่าออกคนละ ISP กันจริง ทดสอบจำลองสาย WAN 1 ล่ม และตรวจสอบสถิติ QoS ด้วยคำสั่ง show policy-map interface"
      ],
      checkpoints: [
        "เครื่องใน VLAN 10 วิ่งออกอินเทอร์เน็ตผ่าน ISP-1 และเครื่องใน VLAN 20 วิ่งออกผ่าน ISP-2 ตามนโยบาย Load Balance",
        "เมื่อจำลองลิงก์ ISP-1 ล่ม IP SLA ตรวจพบและย้ายทราฟฟิกของ VLAN 10 ไปออกทาง ISP-2 โดยอัตโนมัติ",
        "คำสั่ง show policy-map interface แสดงสถิติการจัดคิว Priority (LLQ), Bandwidth (CBWFQ) และ Policing ทำงานถูกต้อง"
      ],
      solutionCli: `! ตั้งค่า IP SLA & Track
ip sla 1
 icmp-echo 203.113.10.1 source-interface gi0/1
 frequency 5
ip sla schedule 1 life forever start-time now
track 1 ip sla 1 reachability

! ตั้งค่า PBR Load Balance
access-list 10 permit 192.168.10.0 0.0.0.255
access-list 20 permit 192.168.20.0 0.0.0.255
route-map PBR_LOAD_BALANCE permit 10
 match ip address 10
 set ip next-hop verify-availability 203.113.10.1 1 track 1
 set ip next-hop 202.44.20.1
route-map PBR_LOAD_BALANCE permit 20
 match ip address 20
 set ip next-hop 202.44.20.1
 set ip next-hop 203.113.10.1
interface gi0/0
 ip policy route-map PBR_LOAD_BALANCE

! ตั้งค่า QoS Policy
class-map match-any CM_VOICE
 match ip dscp ef
class-map match-any CM_WEB
 match protocol http
 match protocol secure-http
policy-map PM_QOS_OUT
 class CM_VOICE
  priority percent 20
 class CM_WEB
  bandwidth percent 40
 class class-default
  fair-queue
interface gi0/1
 service-policy output PM_QOS_OUT
interface gi0/2
 service-policy output PM_QOS_OUT`
    },
    assignmentSheet: {
      sheetNo: 12,
      title: "ใบมอบหมายงานที่ 12 : ออกแบบแผนบริหารจัดการแบนด์วิดท์ (QoS Blueprint) และ Multi-WAN สำหรับองค์กร",
      taskDescription:
        "ให้ออกแบบแผนการจัดสรรแบนด์วิดท์ (QoS Bandwidth Allocation Plan) และการกระจายโหลดอินเทอร์เน็ต 2 เส้นทาง สำหรับองค์กรที่มีทราฟฟิก 5 ประเภท ได้แก่ 1) โทรศัพท์ IP Phone & ประชุมออนไลน์ 2) ระบบฐานข้อมูล ERP 3) เว็บไซต์และอีเมลงานราชการ 4) ระบบสำรองข้อมูล Cloud Backup และ 5) Wi-Fi สำหรับผู้มาติดต่อ",
      deliverables: [
        "1. ตารางจำแนกคลาสทราฟฟิก (Traffic Classification, ค่า DSCP Marking, คิวที่ใช้ และสัดส่วนแบนด์วิดท์ %)",
        "2. สคริปต์คำสั่งตั้งค่า Multi-WAN PBR + IP SLA และ MQC QoS Policy-Map"
      ],
      rubric: "ความเหมาะสมของการจัดสรร QoS 5 ระดับ 4 คะแนน | ความถูกต้องของสคริปต์ Load Balance & QoS 4 คะแนน | เอกสารสรุป 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 13,
    unit: 7,
    unitTitle: "หน่วยที่ 7 การบำรุงรักษา สำรองอุปกรณ์ และจัดทำรายงานระบบเครือข่าย",
    weekTitle: "การบำรุงรักษาระบบเครือข่ายและการจัดทำแผนสำรองอุปกรณ์",
    dutyRef: "งานหลัก 6 บำรุงรักษาและจัดทำรายงานระบบเครือข่าย (งานย่อย 6.1 จัดทำแผนสำรองอุปกรณ์เครือข่าย)",
    standardRef: "40104.03 บำรุงรักษาและจัดทำรายงานระบบเครือข่าย",
    knowledgeSheet: {
      sheetNo: 13,
      title: "ใบความรู้ที่ 13 : การประเมินความเสี่ยง การบำรุงรักษาระบบเครือข่ายเชิงป้องกัน และการจัดทำแผนสำรองอุปกรณ์",
      objectives: [
        "1. อธิบายหลักการบำรุงรักษาระบบเครือข่ายเชิงป้องกัน (Preventive Maintenance - PM) และการบำรุงรักษาเชิงแก้ไข (Corrective Maintenance - CM) ได้",
        "2. วิเคราะห์และประเมินความเสี่ยงของอุปกรณ์เครือข่ายที่มีโอกาสชำรุดเสียหาย (Risk Assessment, MTBF, MTTR, SPOF) ได้",
        "3. จัดทำแผนการสำรองอุปกรณ์เครือข่าย การสำรองไฟล์คอนฟิก (Configuration Backup) และการตรวจสอบความพร้อมใช้งานของอุปกรณ์สำรองได้"
      ],
      overview:
        "ระบบเครือข่ายที่มีความเสถียรสูงไม่ได้เกิดจากการตั้งค่าเพียงครั้งเดียว แต่เกิดจากการบำรุงรักษาเชิงป้องกัน (Preventive Maintenance) อย่างสม่ำเสมอ และการเตรียมแผนสำรองอุปกรณ์เครือข่ายที่มีความเสี่ยงต่อการชำรุดเสียหาย (Spare Parts & Disaster Recovery Plan) เพื่อให้เมื่อเกิดเหตุฉุกเฉิน ทีมวิศวกรสามารถสลับอุปกรณ์สำรองพร้อมกู้คืนไฟล์คอนฟิกกลับมาให้บริการได้ภายในระยะเวลาเป้าหมาย (Recovery Time Objective - RTO)",
      sections: [
        {
          heading: "1. การประเมินความเสี่ยงของอุปกรณ์เครือข่ายและการจัดทำแผนสำรองอุปกรณ์ (Spare Parts Management)",
          content:
            "ในการจัดทำแผนสำรองอุปกรณ์เครือข่าย ต้องประเมินความเสี่ยงจากโอกาสเกิดความเสียหาย (Likelihood) และผลกระทบต่อองค์กร (Impact):",
          bullets: [
            "1) การระบุจุดเสี่ยงต่อการชำรุดเสียหาย: อุปกรณ์ที่ทำงานตลอด 24 ชั่วโมงและมีผลกระทบสูงหากชำรุด เช่น Core/Distribution Switch, Firewall, Edge Router, ชุดจ่ายไฟสำรอง (Redundant Power Supply / UPS), พัดลมระบายความร้อน และโมดูลหัวรับส่งแสง (SFP/SFP+ Transceivers)",
            "2) ตัวชี้วัดความน่าเชื่อถือ: MTBF (Mean Time Between Failures - ระยะเวลาเฉลี่ยระหว่างการเสียแต่ละครั้ง) และ MTTR (Mean Time To Repair - ระยะเวลาเฉลี่ยในการซ่อมหรือเปลี่ยนอุปกรณ์ทดแทนให้ระบบกลับมาทำงานได้)",
            "3) รูปแบบการสำรองอุปกรณ์: Hot Standby (เปิดเครื่องสแตนด์บายพร้อมสลับทำงานอัตโนมัติทันที เช่น HSRP/VRRP หรือ HA Firewall), Warm Standby (มีอุปกรณ์สำรองติดตั้งพร้อมในตู้แร็คและโหลดคอนฟิกไว้แล้ว) และ Cold Spare (จัดเก็บอุปกรณ์สำรองไว้ในคลังพัสดุไอทีพร้อมรายการคอนฟิกล่าสุด)"
          ]
        },
        {
          heading: "2. การจัดเก็บ ตรวจสอบความพร้อมใช้งาน และการสำรองไฟล์คอนฟิก (Configuration Backup)",
          content: "แนวปฏิบัติมาตรฐานตามสมรรถนะอาชีพ 40104.03 มีดังนี้:",
          bullets: [
            "การจัดเก็บอุปกรณ์สำรอง: จัดเก็บในห้องที่ควบคุมอุณหภูมิและความชื้น บรรจุในถุงป้องกันไฟฟ้าสถิต (ESD Bag) ติดป้ายรหัสทรัพย์สิน รุ่น เวอร์ชัน Firmware และตำแหน่งที่สามารถนำไปทดแทนได้",
            "การตรวจสอบความพร้อมใช้งานตามรอบเวลา (Quarterly/Monthly Check): นำอุปกรณ์สำรองมาเปิดทดสอบการทำงาน (Power-On Self-Test - POST), ตรวจสอบพอร์ตทุกพอร์ต, อัปเดต Firmware ให้ตรงกับอุปกรณ์ที่ใช้งานจริงในระบบ",
            "การสำรองไฟล์การตั้งค่า (Configuration & IOS Backup): สำรองไฟล์ running-config / startup-config ไปเก็บไว้บนเซิร์ฟเวอร์กลางผ่าน TFTP / SCP / Git ทุกครั้งที่มีการเปลี่ยนแปลงการตั้งค่า และตั้งเวลาสำรองอัตโนมัติด้วยคำสั่ง archive"
          ]
        }
      ],
      cliReference: `! 1. การตรวจสอบสุขภาพของอุปกรณ์เครือข่าย (CPU, Memory, Temperature, Power, Fan)
NYK-CORE-SW# show processes cpu history
NYK-CORE-SW# show memory statistics
NYK-CORE-SW# show environment all
NYK-CORE-SW# show logging

! 2. การสำรองไฟล์ Configuration ไปยัง TFTP / SCP Server
NYK-CORE-SW# copy running-config tftp://192.168.99.100/NYK-CORE-SW-20261123.cfg
NYK-CORE-SW# copy running-config scp://admin@192.168.99.100/backups/NYK-CORE-SW.cfg

! 3. การตั้งค่าสำรองไฟล์คอนฟิกอัตโนมัติทุกครั้งที่สั่งบันทึก (Archive Configuration)
NYK-CORE-SW(config)# archive
NYK-CORE-SW(config-archive)# path tftp://192.168.99.100/$h-$t
NYK-CORE-SW(config-archive)# write-memory
NYK-CORE-SW(config-archive)# time-period 1440
NYK-CORE-SW(config-archive)# end

! 4. การกู้คืนไฟล์คอนฟิกลงสู่อุปกรณ์สำรอง (Restore to Spare Device)
Spare-SW# copy tftp://192.168.99.100/NYK-CORE-SW-20261123.cfg startup-config
Spare-SW# reload`,
      summary:
        "การจัดทำแผนสำรองอุปกรณ์เครือข่าย การตรวจสอบความพร้อมใช้งานของอุปกรณ์สำรองอย่างสม่ำเสมอ และการสำรองไฟล์ Configuration ไปยังเซิร์ฟเวอร์กลาง ช่วยลดค่า MTTR และป้องกันการหยุดชะงักของระบบเครือข่ายองค์กรได้อย่างเป็นรูปธรรม"
    },
    activitySheet: {
      sheetNo: 13,
      title: "ใบกิจกรรมที่ 13 : การประเมินความเสี่ยง (Risk Matrix) และการจัดทำแผนสำรองอุปกรณ์เครือข่าย",
      duration: "60 นาที",
      scenario:
        "องค์กรแห่งหนึ่งมีอุปกรณ์เครือข่ายที่ใช้งานมาแล้ว 4 ปี ประกอบด้วย: 1) Core L3 Switch จำนวน 1 ตัว (ไม่มีตัวสำรอง) 2) Access PoE Switch จำนวน 8 ตัว (มีพอร์ตว่างเหลือตัวละ 4 พอร์ต) 3) โมดูลไฟเบอร์ SFP+ 10G จำนวน 16 ตัว 4) Edge Firewall จำนวน 1 ตัว และ 5) เครื่องสำรองไฟ UPS ในตู้แร็คหลักที่แบตเตอรี่เริ่มเสื่อม",
      questions: [
        {
          qNo: 1,
          question: "1. จากรายการข้างต้น อุปกรณ์ใดจัดอยู่ในระดับความเสี่ยงวิกฤต (Critical Risk / Single Point of Failure) ที่หากชำรุดจะทำให้เครือข่ายทั้งองค์กรหยุดทำงานทันที",
          suggestedAnswer:
            "ได้แก่ 1) Core L3 Switch (เนื่องจากมีเพียงตัวเดียวและเชื่อมต่อทุกอาคาร) 2) Edge Firewall (เป็นทางออกอินเทอร์เน็ตและ VPN หลักเพียงจุดเดียว) และ 3) แบตเตอรี่ของ UPS ในตู้แร็คหลัก (หากไฟตกหรือไฟดับ อุปกรณ์หลักจะดับทั้งหมด)"
        },
        {
          qNo: 2,
          question: "2. ควรกำหนดแผนการจัดหาและจัดเก็บอุปกรณ์สำรอง (Spare Parts Plan) สำหรับรายการอุปกรณ์ทั้ง 5 รายการอย่างไรให้คุ้มค่างบประมาณที่สุด",
          suggestedAnswer:
            "1) เปลี่ยนแบตเตอรี่ UPS ทันที (Preventive Maintenance) 2) จัดหา Core L3 Switch และ Firewall สำรองอย่างละ 1 ตัว (ตั้งเป็น HA Hot-Standby หรือเตรียมเป็น Warm Standby ที่โหลดคอนฟิกล่าสุดไว้) 3) สำรอง Access PoE Switch รุ่นเดียวกันไว้ในคลัง (Cold Spare) อย่างน้อย 1 ตัวเพื่อใช้สับเปลี่ยนได้กับทั้ง 8 จุด และ 4) สำรองโมดูล SFP+ 10G ไว้ 2-4 ตัวพร้อมสาย Patch Cord"
        },
        {
          qNo: 3,
          question: "3. ขั้นตอนการตรวจสอบความพร้อมใช้งานของอุปกรณ์สำรอง (Spare Readiness Checklist) ก่อนเก็บเข้าคลังและตรวจประจำไตรมาสต้องทำอะไรบ้าง",
          suggestedAnswer:
            "1) เปิดเครื่องตรวจสอบผล POST, พัดลม และภาคจ่ายไฟ 2) ทดสอบเสียบสายทุกพอร์ตและตรวจสอบสถานะไฟ LED 3) ตรวจสอบและอัปเกรดเวอร์ชัน OS/Firmware ให้ตรงกับตัวที่ใช้งานจริง 4) ทดลองโหลดไฟล์คอนฟิกสำรองจาก TFTP Server และ 5) บันทึกวันที่ตรวจสอบพร้อมลงลายมือชื่อผู้ตรวจบนป้ายกำกับอุปกรณ์"
        }
      ]
    },
    jobSheet: {
      sheetNo: 13,
      title: "ใบงานที่ 13 : การบำรุงรักษา สำรองกู้คืนค่าคอนฟิก และตรวจสอบความพร้อมใช้งานของอุปกรณ์สำรอง",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. อุปกรณ์สวิตช์และเราเตอร์หลัก พร้อมอุปกรณ์สำรอง (Spare Switch / Spare Router)",
        "2. เครื่องคอมพิวเตอร์ที่ติดตั้งโปรแกรม TFTP / SCP Server (เช่น TFTPD64 / SolarWinds TFTP)"
      ],
      topology:
        "Core-R1 & Dist-SW1 เชื่อมต่อผ่าน Management VLAN 99 (192.168.99.0/24) ไปยัง Management & TFTP Server (192.168.99.100/24) พร้อมเตรียมอุปกรณ์สำรอง Spare-SW1 สำหรับทดสอบการกู้คืนระบบ",
      steps: [
        "ขั้นที่ 1: ตรวจสอบสถานะสุขภาพของอุปกรณ์หลัก (CPU, Memory, Environment, Interfaces, Error Counters, Flash Storage) และบันทึกลงในแบบฟอร์ม PM Checklist",
        "ขั้นที่ 2: ตั้งค่าเชื่อมต่อ Management Server (192.168.99.100) และใช้คำสั่ง copy running-config tftp: เพื่อสำรองไฟล์คอนฟิกของอุปกรณ์ทุกตัวในเครือข่าย",
        "ขั้นที่ 3: ตั้งค่าฟีเจอร์ archive บนอุปกรณ์หลักเพื่อสำรองไฟล์คอนฟิกอัตโนมัติทุกครั้งที่มีการสั่ง write-memory",
        "ขั้นที่ 4: จำลองเหตุการณ์สวิตช์หลักชำรุด นำอุปกรณ์สำรอง (Spare-SW1) มาตรวจสอบความพร้อมทางกายภาพ ตั้งค่า IP ชั่วคราว และดึงไฟล์คอนฟิกจาก TFTP Server มาทับลงใน startup-config (copy tftp: startup-config)",
        "ขั้นที่ 5: สั่งรีบูตอุปกรณ์สำรอง (reload) และทดสอบว่าอุปกรณ์สำรองกลับมาทำงานแทนตัวหลักได้ครบทุก VLAN และทุกฟังก์ชัน"
      ],
      checkpoints: [
        "บันทึกผลตรวจเช็คสุขภาพอุปกรณ์ (PM Checklist) และจัดทำตารางแผนสำรองอุปกรณ์เครือข่ายครบถ้วน",
        "สำรองไฟล์ running-config ของเราเตอร์และสวิตช์ทุกตัวขึ้นสู่ TFTP Server สำเร็จ",
        "กู้คืนไฟล์คอนฟิกลงสู่อุปกรณ์สำรอง (Spare Device) และทดสอบใช้งานทดแทนอุปกรณ์หลักได้ 100% ภายในเวลาที่กำหนด"
      ],
      solutionCli: `! 1. ตรวจสอบสุขภาพระบบ
show version
show processes cpu
show memory statistics
show environment all
show interfaces counters errors

! 2. สำรองไฟล์คอนฟิกขึ้น TFTP Server
copy running-config tftp://192.168.99.100/Dist-SW1-backup.cfg

! 3. กู้คืนไฟล์คอนฟิกลงบนอุปกรณ์สำรอง (Spare-SW1)
interface vlan 99
 ip address 192.168.99.250 255.255.255.0
 no shutdown
exit
copy tftp://192.168.99.100/Dist-SW1-backup.cfg startup-config
reload`
    },
    assignmentSheet: {
      sheetNo: 13,
      title: "ใบมอบหมายงานที่ 13 : จัดทำแผนการบำรุงรักษาเชิงป้องกัน (PM Plan) และแผนสำรองอุปกรณ์เครือข่ายประจำปี",
      taskDescription:
        "ให้ผู้เรียนจัดทำแผนการบำรุงรักษาระบบเครือข่ายเชิงป้องกัน (Preventive Maintenance Schedule) รายเดือน/รายไตรมาส/รายปี พร้อมตารางประเมินความเสี่ยงและทะเบียนคุมความพร้อมใช้งานของอุปกรณ์สำรอง (Spare Parts Inventory & Readiness Log) สำหรับองค์กร",
      deliverables: [
        "1. ตารางประเมินความเสี่ยงอุปกรณ์เครือข่ายและแผนการจัดเก็บอุปกรณ์สำรอง (ระบุสถานที่เก็บ รหัสอ้างอิง รุ่น และผู้รับผิดชอบ)",
        "2. แบบฟอร์มตรวจสอบความพร้อมใช้งานของอุปกรณ์สำรอง (Spare Readiness Inspection Form) และขั้นตอน SOP การเปลี่ยนอุปกรณ์ฉุกเฉิน"
      ],
      rubric: "ความครบถ้วนของแผนสำรองอุปกรณ์และการประเมินความเสี่ยง 4 คะแนน | แบบฟอร์มตรวจสอบความพร้อมใช้งาน 4 คะแนน | ขั้นตอน SOP กู้คืนระบบ 2 คะแนน (รวม 10 คะแนน)"
    }
  },
  {
    week: 14,
    unit: 7,
    unitTitle: "หน่วยที่ 7 การบำรุงรักษา สำรองอุปกรณ์ และจัดทำรายงานระบบเครือข่าย",
    weekTitle: "การจัดทำรายงานและสรุปผลการทำงานของระบบเครือข่าย",
    dutyRef: "งานหลัก 6 บำรุงรักษาและจัดทำรายงานระบบเครือข่าย (งานย่อย 6.2 จัดทำรายงานสรุปผลการทำงานของเครือข่าย)",
    standardRef: "40104.03 บำรุงรักษาและจัดทำรายงานระบบเครือข่าย",
    knowledgeSheet: {
      sheetNo: 14,
      title: "ใบความรู้ที่ 14 : การตั้งค่าตามแผนผังเครือข่าย การทดสอบการทำงาน และโครงสร้างรายงานสรุปผลระบบเครือข่าย",
      objectives: [
        "1. ตั้งค่าและตรวจสอบการทำงานของระบบเครือข่ายให้ถูกต้องตรงตามแผนผังเครือข่าย (Network Topology & Design Specification) ได้",
        "2. เปิดใช้งานโพรโทคอลเฝ้าระวังและเก็บข้อมูลการทำงานของเครือข่าย (SNMP, Syslog, NTP) เพื่อรวบรวมข้อมูลสถิติได้",
        "3. จัดทำรายงานและสรุปผลการทำงานของระบบเครือข่ายตามโครงสร้างรายงานมาตรฐานวิชาชีพได้ครบถ้วน"
      ],
      overview:
        "ขั้นตอนสำคัญในการบริหารจัดการระบบเครือข่ายระดับมืออาชีพ คือการตรวจสอบยืนยันว่าอุปกรณ์ทุกตัวได้รับการตั้งค่าตรงตามแผนผังเครือข่ายที่ออกแบบไว้ (As-Built Verification) การทดสอบสมรรถนะและความปลอดภัยครบทุกด้าน และการรวบรวมข้อมูลจากระบบเฝ้าระวัง (SNMP, Syslog, Performance Metrics) มาจัดทำเป็นรายงานสรุปผลการทำงานของระบบเครือข่ายเพื่อนำเสนอต่อผู้บริหารและใช้เป็นข้อมูลอ้างอิงในการพัฒนาเครือข่ายต่อไป",
      sections: [
        {
          heading: "1. โพรโทคอลสำคัญในการรวบรวมข้อมูลเพื่อจัดทำรายงานระบบเครือข่าย",
          content: "เพื่อให้ข้อมูลในรายงานมีความแม่นยำและตรวจสอบย้อนหลังได้ ต้องตั้งค่าบริการพื้นฐาน 3 ส่วนบนอุปกรณ์เครือข่ายทุกตัว:",
          bullets: [
            "1) NTP (Network Time Protocol): ซิงค์เวลาของสวิตช์ เราเตอร์ และไฟร์วอลล์ทุกตัวให้ตรงกับเซิร์ฟเวอร์เวลามาตรฐาน เพื่อให้เวลาใน Log (Timestamp) ตรงกันทั้งองค์กร",
            "2) Syslog (System Logging): ส่งข้อความแจ้งเตือนเหตุการณ์ (Event Logs ระดับความรุนแรง 0 Emergency ถึง 7 Debugging) เช่น พอร์ตขึ้น/ลง การล็อกอินผิดพลาด หรือการตรวจพบลูป ไปจัดเก็บที่ Syslog Server กลาง",
            "3) SNMP (Simple Network Management Protocol v2c / v3): ช่วยให้ซอฟต์แวร์ NMS (เช่น Zabbix, PRTG, LibreNMS, Cacti) ดึงค่าสถิติการใช้งาน CPU, Memory, ปริมาณทราฟฟิกเข้า-ออกแต่ละพอร์ต (Bandwidth Utilization) และสถานะ Uptime มาสร้างกราฟรายงานอัตโนมัติ"
          ]
        },
        {
          heading: "2. โครงสร้างรายงานสรุปผลการทำงานของระบบเครือข่ายมาตรฐานองค์กร",
          content: "รายงานสรุปผลการดำเนินงานและทดสอบระบบเครือข่ายที่มีคุณภาพควรประกอบด้วย 6 หัวข้อหลัก:",
          bullets: [
            "ส่วนที่ 1 ข้อมูลทั่วไปและวัตถุประสงค์ (Executive Summary): ภาพรวมของระบบเครือข่าย ช่วงเวลาที่รายงาน และสรุปค่าความพร้อมใช้งาน (Network Availability / SLA Uptime %)",
            "ส่วนที่ 2 แผนผังเครือข่ายและรายการอุปกรณ์ (Network Topology & Asset Inventory): ผัง Physical & Logical Topology ล่าสุด พร้อมตารางรายการอุปกรณ์ (ชื่อ, ยี่ห้อ/รุ่น, IP, VLAN, เวอร์ชัน Firmware และสถานะอุปกรณ์สำรอง)",
            "ส่วนที่ 3 สรุปผลการตั้งค่าและตรวจสอบตามแผนผัง (Configuration & Compliance Audit): ผลการตรวจสอบ VLAN, Trunk, Routing, DHCP Snooping, STP/Loop Guard, LACP, NAT/ACL, Firewall และ VPN",
            "ส่วนที่ 4 ผลการทดสอบสมรรถนะและประสิทธิภาพ (Performance & QoS Test Results): กราฟหรือตารางการใช้แบนด์วิดท์ (Throughput), ค่าความหน่วง (Latency), Packet Loss และผลการทดสอบ Failover",
            "ส่วนที่ 5 สรุปเหตุการณ์ผิดปกติและการบำรุงรักษา (Incident, Security & Maintenance Log): สถิติเหตุการณ์จาก Syslog/Firewall, การแก้ไขปัญหา และสถานะความพร้อมของอุปกรณ์สำรอง",
            "ส่วนที่ 6 ข้อเสนอแนะเพื่อการปรับปรุง (Recommendations): แนวทางการขยายแบนด์วิดท์หรืออัปเกรดอุปกรณ์ในอนาคต"
          ]
        }
      ],
      cliReference: `! 1. การตั้งค่าเวลาให้ตรงกันด้วย NTP และแสดง Timestamp ใน Log
NYK-CORE-R1(config)# ntp server 192.168.99.100
NYK-CORE-R1(config)# clock timezone ICT 7
NYK-CORE-R1(config)# service timestamps log datetime msec localtime show-timezone

! 2. การตั้งค่าส่ง Log ไปยัง Syslog Server กลาง
NYK-CORE-R1(config)# logging host 192.168.99.100
NYK-CORE-R1(config)# logging trap informational

! 3. การตั้งค่า SNMP สำหรับระบบ Monitoring และสร้างกราฟรายงาน
NYK-CORE-R1(config)# access-list 99 permit host 192.168.99.100
NYK-CORE-R1(config)# snmp-server community NYK_MON_RO RO 99
NYK-CORE-R1(config)# snmp-server location NakhonNayok_Technical_College_IT_Bldg
NYK-CORE-R1(config)# snmp-server contact Sirikalaya_Kamnon_IT_Dept
NYK-CORE-R1(config)# snmp-server enable traps

! 4. ชุดคำสั่งตรวจสอบเพื่อนัดทำรายงานสรุปผลการทำงานของเครือข่าย
NYK-CORE-R1# show cdp neighbors detail
NYK-CORE-R1# show ip interface brief
NYK-CORE-R1# show interfaces summary
NYK-CORE-R1# show ntp status
NYK-CORE-R1# show logging`,
      summary:
        "การตั้งค่าการทำงานให้เป็นไปตามแผนผังเครือข่าย การทดสอบการใช้งานอย่างเป็นระบบ และการจัดทำรายงานสรุปผลการทำงานของเครือข่ายที่ครบถ้วนชัดเจน เป็นทักษะสำคัญที่สะท้อนความเป็นมืออาชีพของช่างสนับสนุนด้านเทคนิคตามมาตรฐานอาชีพ"
    },
    activitySheet: {
      sheetNo: 14,
      title: "ใบกิจกรรมที่ 14 : วิเคราะห์ข้อมูลสถิติเครือข่ายและการเขียนรายงานสรุปผลการทำงาน (Network Performance Report)",
      duration: "60 นาที",
      scenario:
        "จากการเก็บข้อมูลระบบเครือข่ายขององค์กรในรอบเดือนที่ผ่านมา (720 ชั่วโมง) พบข้อมูลดังนี้: 1) ลิงก์ WAN 1 ใช้งานได้ปกติตลอดเดือน แต่ลิงก์สายแลนของ Access Switch อาคาร 3 เกิดไฟดับและระบบหยุดทำงานไป 3 ชั่วโมง 36 นาที 2) ปริมาณการใช้แบนด์วิดท์เฉลี่ยของลิงก์ Uplink ระหว่างอาคาร 2 กับ Core Switch (ความเร็ว 1 Gbps) พุ่งสูงถึง 920 Mbps ในช่วงเวลา 13.00-15.00 น. ทุกวัน และ 3) Firewall บล็อกความพยายามสุ่มรหัสผ่าน SSH จากภายนอกได้ 1,450 ครั้ง",
      questions: [
        {
          qNo: 1,
          question: "1. จงคำนวณหาค่าความพร้อมใช้งานของเครือข่าย (Network Availability / Uptime %) ของอาคาร 3 ในรอบเดือนที่ผ่านมา (จากทั้งหมด 720 ชั่วโมง)",
          suggestedAnswer:
            "เวลาที่ใช้งานไม่ได้ (Downtime) = 3 ชั่วโมง 36 นาที = 3.6 ชั่วโมง\nเวลาที่ระบบทำงานได้ (Uptime) = 720 - 3.6 = 716.4 ชั่วโมง\nคิดเป็น Network Availability = (716.4 / 720) x 100 = 99.50%"
        },
        {
          qNo: 2,
          question: "2. จากข้อมูลการใช้งานลิงก์ Uplink อาคาร 2 ที่สูงถึง 920 Mbps จาก 1 Gbps (92% Utilization) ผู้ดูแลระบบควรเขียนข้อเสนอแนะเชิงเทคนิคในรายงานอย่างไรโดยไม่ต้องซื้อสวิตช์ใหม่",
          suggestedAnswer:
            "เสนอแนะให้ดำเนินการ 2 แนวทางร่วมกันคือ 1) เดินสาย UTP/Fiber เพิ่มอีก 1-3 เส้นแล้วตั้งค่าทำ Link Aggregation (LACP EtherChannel) เพื่อเพิ่มแบนด์วิดท์รวมเป็น 2-4 Gbps พร้อมได้ลิงก์สำรอง และ 2) ตั้งค่านโยบาย QoS เพื่อควบคุมทราฟฟิกที่ไม่สำคัญในช่วงเวลาเร่งด่วน"
        },
        {
          qNo: 3,
          question: "3. เหตุใดการตั้งค่า NTP (Network Time Protocol) ให้ตรงกันทุกอุปกรณ์จึงมีความสำคัญอย่างยิ่งต่อการจัดทำรายงานความปลอดภัยจาก Syslog",
          suggestedAnswer:
            "หากเวลาของ Router, Switch และ Firewall ไม่ตรงกัน เมื่อเกิดเหตุการณ์โจมตีหรือระบบล่ม จะไม่สามารถนำ Log จากแต่ละอุปกรณ์มาเรียงลำดับเหตุการณ์ (Event Correlation) เพื่อหาต้นตอของปัญหาได้อย่างถูกต้อง"
        }
      ]
    },
    jobSheet: {
      sheetNo: 14,
      title: "ใบงานที่ 14 : การตั้งค่าการทำงานตามแผนผังเครือข่ายรวม การทดสอบระบบ และการจัดทำรายงานสรุปผล",
      duration: "4 ชั่วโมง",
      equipment: [
        "1. ชุดอุปกรณ์เครือข่ายครบวงจร (Edge Router, Firewall, Layer 3 Distribution Switch, Layer 2 Access Switch, NMS/Syslog Server)",
        "2. แบบฟอร์มรายงานสรุปผลการทำงานของระบบเครือข่ายในเว็บแอปพลิเคชัน"
      ],
      topology:
        "แผนผังเครือข่ายองค์กรสมบูรณ์แบบ (Integrated Enterprise Network Topology): ประกอบด้วย Multi-WAN + NAT/ACL + Firewall Zones + L3 Switch Inter-VLAN + DHCP & DHCP Snooping + RSTP/Loop Guard + LACP EtherChannel + IPsec VPN + QoS + SNMP/Syslog/NTP",
      steps: [
        "ขั้นที่ 1: ตรวจสอบและตั้งค่าอุปกรณ์ทุกตัวให้เป็นไปตามแผนผังเครือข่ายรวม (Integrated Topology) พร้อมเปิดใช้งาน NTP, Syslog และ SNMP",
        "ขั้นที่ 2: ดำเนินการทดสอบการทำงานของอุปกรณ์เครือข่ายตามรายการตรวจสอบ 10 ด้าน (VLAN/Trunk, Inter-VLAN, Routing, DHCP/Snooping, STP/Loop Guard, LACP, NAT/ACL, Firewall, VPN, Load Balance/QoS)",
        "ขั้นที่ 3: ทดสอบประสิทธิภาพเครือข่าย (Ping Latency, Traceroute Path, Failover Time เมื่อดึงสายสำรอง) และบันทึกตัวเลขผลการทดสอบ",
        "ขั้นที่ 4: จัดทำรายงานสรุปผลการทำงานของระบบเครือข่ายตามโครงสร้าง 6 ส่วน พร้อมแนบแผนผัง รายการอุปกรณ์ ผลการทดสอบ และข้อเสนอแนะ"
      ],
      checkpoints: [
        "ตั้งค่าการทำงานของอุปกรณ์ทุกตัวเป็นไปตามแผนผังเครือข่ายที่กำหนดครบทุกฟังก์ชัน",
        "อุปกรณ์ทุกตัวส่งข้อมูลสถานะไปยัง Syslog / SNMP Server พร้อมเวลา NTP ที่ตรงกัน",
        "จัดทำรายงานและสรุปผลการทำงานของเครือข่ายครบถ้วนตามโครงสร้างมาตรฐานและสามารถสั่งพิมพ์เป็นรูปเล่มรายงานได้"
      ],
      solutionCli: `! ตั้งค่า NTP, Syslog, SNMP และตรวจสอบความสมบูรณ์ของเครือข่ายทั้งหมด
ntp server 192.168.99.100
service timestamps log datetime msec localtime
logging host 192.168.99.100
logging trap informational
snmp-server community NYK_NET_RO RO
snmp-server location NYK_Tech_College

! ชุดคำสั่งตรวจสอบสรุปผลเพื่อนำข้อมูลลงตารางรายงาน
show version
show cdp neighbors detail
show vlan brief
show interfaces trunk
show etherchannel summary
show spanning-tree summary
show ip route
show ip dhcp snooping
show ip nat statistics
show access-lists
show crypto ipsec sa
show policy-map interface`
    },
    assignmentSheet: {
      sheetNo: 14,
      title: "ใบมอบหมายงานที่ 14 : จัดทำรูปเล่มรายงานสรุปผลการออกแบบ ตั้งค่า ทดสอบ และบำรุงรักษาระบบเครือข่ายองค์กร (ฉบับสมบูรณ์)",
      taskDescription:
        "ให้ผู้เรียนรวบรวมผลงานการออกแบบและปฏิบัติการตั้งค่าเครือข่ายตลอดทั้งรายวิชา มาจัดทำเป็นรายงานสรุปผลการทำงานของระบบเครือข่ายองค์กรฉบับสมบูรณ์ (Final Network Management Project Report) เพื่อเตรียมนำเสนอในสัปดาห์ที่ 15",
      deliverables: [
        "1. รายงานสรุปผลการทำงานของระบบเครือข่ายองค์กร 6 บท (ประกอบด้วย แผนผังเครือข่าย, ตาราง BOM อุปกรณ์, ค่าคอนฟิกทั้งหมด, ผลการทดสอบสมรรถนะ/ความปลอดภัย และแผนสำรองอุปกรณ์)",
        "2. ไฟล์จำลองเครือข่ายที่ตั้งค่าและทำงานได้จริงครบทุกหัวข้อ"
      ],
      rubric: "ความสมบูรณ์ของโครงสร้างรายงาน 3 คะแนน | ความถูกต้องของการตั้งค่าตามแผนผัง 4 คะแนน | ผลการทดสอบและแผนสำรองอุปกรณ์ 3 คะแนน (รวม 10 คะแนน)"
    }
  }
];

window.ALL_LEARNING_SHEETS = (window.LEARNING_SHEETS_PART1 || []).concat(window.LEARNING_SHEETS_PART2 || []);
