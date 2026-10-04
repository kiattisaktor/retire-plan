// Data Definitions
const BASKETS_DATA = [
  {
    no: 1,
    name: "เงินฝากพิเศษเกษียณสุข สอ.กฟผ.",
    amount: 5000000,
    rate: 3.50,
    tax: "ปลอดภาษี",
    annualIncome: 175000,
    monthlyIncome: 14583,
    color: "#10b981", // Emerald
    role: "โยกจาก PVD สูงสุด 5 ล้านบาท ภายใน 60 วัน (3.5% ปลอดภาษี)"
  },
  {
    no: 2,
    name: "ทุนเรือนหุ้น สอ.กฟผ. (ท่อคุณแม่)",
    amount: 4000000,
    rate: 4.50,
    tax: "ปลอดภาษี",
    annualIncome: 180000,
    monthlyIncome: 15000,
    color: "#3b82f6", // Blue
    role: "โอนตรงให้คุณแม่ 100% แยกบัญชีขาด (15k/ด.)"
  },
  {
    no: 3,
    name: "พันธบัตรรัฐบาล / วอลเล็ต สบม.",
    amount: 6500000,
    rate: 2.295,
    tax: "หลังหักภาษี 15%",
    annualIncome: 149175,
    monthlyIncome: 12431,
    color: "#06b6d4", // Cyan
    role: "ล็อกผลตอบแทนระยะยาว ไร้ความเสี่ยงผิดนัด (เพิ่ม 1 ล้าน)"
  },
  {
    no: 4,
    name: "กองทุนตลาดเงิน Treasury MMF",
    amount: 4000000,
    rate: 1.90,
    tax: "ปลอดภาษี",
    annualIncome: 76000,
    monthlyIncome: 6333,
    color: "#8b5cf6", // Purple
    role: "เสริมสภาพคล่อง T+1 พร้อมสับเปลี่ยน"
  },
  {
    no: 5,
    name: "สลากออมทรัพย์ 3 สถาบัน",
    amount: 3000000,
    rate: 1.20,
    tax: "ดอกเบี้ย+รางวัล",
    annualIncome: 36000,
    monthlyIncome: 3000,
    color: "#f59e0b", // Gold
    role: "ทุนสำรองสภาพคล่องด่านแรก ทยอยดึงใช้หลัง 70"
  },
  {
    no: 6,
    name: "e-Savings + คืนประกัน + เงิน 400 วัน",
    amount: 2500000,
    rate: 1.275,
    tax: "หลังหักภาษี 15%",
    annualIncome: 31875,
    monthlyIncome: 2656,
    color: "#ec4899", // Pink
    role: "สภาพคล่องฉุกเฉิน ดูแลสุขภาพและกองทุนคุณแม่"
  }
];

const ACCUMULATION_DATA = [
  { age: 38, salary: 63000, pvd: 9450, coop: 20000, rmf: 2000, ins: 9583, coopSpec: 0, monthlyTot: 41033, bonusPen: 0, annualTot: 492396, note: "เริ่มแผน: หุ้น สอ. 20k/ด. ล็อกเป้า 4M, RMF 2k/ด., PVD 15%" },
  { age: 39, salary: 66150, pvd: 9923, coop: 20000, rmf: 2000, ins: 9583, coopSpec: 0, monthlyTot: 41506, bonusPen: 0, annualTot: 498072, note: "เงินเดือนโต 5% ต่อปี" },
  { age: 40, salary: 69458, pvd: 10419, coop: 20000, rmf: 2000, ins: 9583, coopSpec: 0, monthlyTot: 42002, bonusPen: 0, annualTot: 504024, note: "สะสมหุ้นสหกรณ์ต่อเนื่อง" },
  { age: 41, salary: 72930, pvd: 10940, coop: 20000, rmf: 2000, ins: 10000, coopSpec: 0, monthlyTot: 42940, bonusPen: 0, annualTot: 515280, note: "ปรับเบี้ยประกันสุขภาพตามอายุ (ช่วง 41-45 ปี)" },
  { age: 42, salary: 76577, pvd: 11487, coop: 20000, rmf: 2000, ins: 10000, coopSpec: 0, monthlyTot: 43487, bonusPen: 0, annualTot: 521844, note: "ส่ง สอ.กฟผ. ปีสุดท้าย ครบเป้า 4,000,000 บาท" },
  { age: 43, salary: 80406, pvd: 12061, coop: 0, rmf: 24000, ins: 10000, coopSpec: 0, monthlyTot: 46061, bonusPen: 0, annualTot: 552732, note: "หยุดส่ง สอ. (ปันผล 15k ให้แม่ 100%), เร่ง RMF 24k/ด." },
  { age: 44, salary: 84426, pvd: 12664, coop: 0, rmf: 24000, ins: 10000, coopSpec: 0, monthlyTot: 46664, bonusPen: 0, annualTot: 559968, note: "เร่งสปีดหุ้นโลก PVD 15% + RMF 24k" },
  { age: 45, salary: 88647, pvd: 13297, coop: 0, rmf: 24000, ins: 10000, coopSpec: 0, monthlyTot: 47297, bonusPen: 0, annualTot: 567564, note: "พอร์ตเติบโตสูงจากพลังดอกเบี้ยทบต้น" },
  { age: 46, salary: 93080, pvd: 13962, coop: 0, rmf: 24000, ins: 10667, coopSpec: 0, monthlyTot: 48629, bonusPen: 0, annualTot: 583548, note: "ปรับเบี้ยประกันสุขภาพช่วงอายุ 46-50 ปี" },
  { age: 47, salary: 97734, pvd: 14660, coop: 0, rmf: 24000, ins: 10667, coopSpec: 0, monthlyTot: 49327, bonusPen: 0, annualTot: 591924, note: "เตรียมแตะเพดานเงินเดือน กฟผ." },
  { age: 48, salary: 100000, pvd: 15000, coop: 0, rmf: 24000, ins: 10667, coopSpec: 0, monthlyTot: 49667, bonusPen: 0, annualTot: 596004, note: "เงินเดือนชนเพดาน 100,000 บ. (PVD คงที่ 15,000/ด.)" },
  { age: 49, salary: 100000, pvd: 15000, coop: 0, rmf: 24000, ins: 10667, coopSpec: 0, monthlyTot: 49667, bonusPen: 0, annualTot: 596004, note: "ปีสุดท้ายของการเร่ง RMF 24k/ด." },
  { age: 50, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 10667, coopSpec: 0, monthlyTot: 41667, bonusPen: 100000, annualTot: 600004, note: "RMF ลดเหลือ 16k + ซื้อบำนาญใหม่ #3 จ่าย 100k/ปี จากโบนัส (1/5)" },
  { age: 51, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 11500, coopSpec: 0, monthlyTot: 42500, bonusPen: 100000, annualTot: 610000, note: "บำนาญใหม่ #3 (2/5) | ปรับเบี้ยสุขภาพช่วง 51-55" },
  { age: 52, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 11500, coopSpec: 0, monthlyTot: 42500, bonusPen: 100000, annualTot: 610000, note: "บำนาญใหม่ #3 (3/5)" },
  { age: 53, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 11500, coopSpec: 0, monthlyTot: 42500, bonusPen: 200000, annualTot: 710000, note: "ซื้อบำนาญ 85/5 (1/5) ซ้อนบำนาญ #3 (4/5) รวมโบนัส 200k/ปี" },
  { age: 54, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 11500, coopSpec: 0, monthlyTot: 42500, bonusPen: 200000, annualTot: 710000, note: "บำนาญ 85/5 (2/5) + บำนาญ #3 (5/5 งวดสุดท้าย) รวม 200k/ปี" },
  { age: 55, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 11500, coopSpec: 0, monthlyTot: 42500, bonusPen: 100000, annualTot: 610000, note: "สับ PVD+RMF เข้าตราสารหนี้ | บำนาญ 85/5 (3/5) | เงินเดือนเหลือใช้เต็มที่" },
  { age: 56, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 12500, coopSpec: 0, monthlyTot: 43500, bonusPen: 100000, annualTot: 622000, note: "บำนาญ 85/5 (4/5) | ปรับเบี้ยสุขภาพช่วง 56-60" },
  { age: 57, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 12500, coopSpec: 0, monthlyTot: 43500, bonusPen: 100000, annualTot: 622000, note: "ส่งสะสมทรัพย์งวดสุดท้าย | บำนาญ 85/5 งวดสุดท้าย (5/5)" },
  { age: 58, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 9167, coopSpec: 0, monthlyTot: 40167, bonusPen: 0, annualTot: 482004, note: "รับเงินคืนสะสมทรัพย์ 250k เข้า e-Savings เหลือส่งบำนาญเดิม+สุขภาพ" },
  { age: 59, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 9167, coopSpec: 0, monthlyTot: 40167, bonusPen: 0, annualTot: 482004, note: "เตรียมความพร้อมก่อนเกษียณ 1 ปี" },
  { age: 60, salary: 100000, pvd: 15000, coop: 0, rmf: 16000, ins: 9167, coopSpec: 0, monthlyTot: 40167, bonusPen: 0, annualTot: 482004, note: "ปีเกษียณ: โยก PVD 5M เข้าฝากพิเศษ สอ. ใน 60 วัน + รับเงินชดเชย 400 วัน 1.312M" }
];

// Utility: format numbers with commas
function formatNumber(num) {
  return new Intl.NumberFormat('th-TH').format(num);
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderBasketsList();
  renderBasketsChart();
  renderAccumulationTable("all");
  setupAgeFilters();
  renderAccumulationChart();
  renderBudgetSplitChart();
  setupSimulator();
});

// Tab Switching
function setupTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}

// Render Basket List
function renderBasketsList() {
  const container = document.getElementById("basket-list-container");
  if (!container) return;

  container.innerHTML = BASKETS_DATA.map(b => `
    <div class="basket-item">
      <div class="basket-left">
        <div class="basket-indicator" style="background-color: ${b.color};"></div>
        <div>
          <div class="basket-name">${b.no}. ${b.name}</div>
          <div class="basket-desc">${b.role} (${b.tax})</div>
        </div>
      </div>
      <div class="basket-right">
        <div class="basket-amount">${formatNumber(b.amount)} ฿</div>
        <div class="basket-income">+${formatNumber(b.monthlyIncome)} ฿/ด. (${b.rate}%)</div>
      </div>
    </div>
  `).join("");
}

// Render Baskets Chart
let basketsChartInstance = null;
function renderBasketsChart() {
  const ctx = document.getElementById("chart-baskets");
  if (!ctx) return;

  const labels = BASKETS_DATA.map(b => b.name);
  const data = BASKETS_DATA.map(b => b.amount);
  const colors = BASKETS_DATA.map(b => b.color);

  basketsChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderWidth: 2,
        borderColor: "#0f172a",
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          titleFont: { family: "Prompt", size: 13, weight: "bold" },
          bodyFont: { family: "Prompt", size: 12 },
          padding: 12,
          boxPadding: 6,
          borderColor: "rgba(255,255,255,0.1)",
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              const b = BASKETS_DATA[context.dataIndex];
              const percent = ((b.amount / 25000000) * 100).toFixed(1);
              return ` ${formatNumber(b.amount)} ฿ (${percent}%) | ดอกเบี้ย +${formatNumber(b.monthlyIncome)} ฿/ด.`;
            }
          }
        }
      },
      cutout: "68%"
    }
  });
}

// Render Accumulation Table
function renderAccumulationTable(filterRange) {
  const tbody = document.getElementById("accumulation-table-body");
  if (!tbody) return;

  let filtered = ACCUMULATION_DATA;
  if (filterRange === "38-42") {
    filtered = ACCUMULATION_DATA.filter(r => r.age >= 38 && r.age <= 42);
  } else if (filterRange === "43-49") {
    filtered = ACCUMULATION_DATA.filter(r => r.age >= 43 && r.age <= 49);
  } else if (filterRange === "50-54") {
    filtered = ACCUMULATION_DATA.filter(r => r.age >= 50 && r.age <= 54);
  } else if (filterRange === "55-60") {
    filtered = ACCUMULATION_DATA.filter(r => r.age >= 55 && r.age <= 60);
  }

  tbody.innerHTML = filtered.map(r => {
    const isSpecialYear = (r.age === 42 || r.age === 43 || r.age === 48 || r.age === 53 || r.age === 57 || r.age === 60);
    const rowClass = isSpecialYear ? 'class="highlight-row"' : "";
    const bonus = r.salary * 2;
    const totalAnnualIncome = r.salary * 14;
    const netSurplus = totalAnnualIncome - r.annualTot;

    return `
      <tr ${rowClass}>
        <td><strong>${r.age}</strong></td>
        <td class="numeric">${formatNumber(r.salary)}</td>
        <td class="numeric" style="color: #60a5fa;">${formatNumber(bonus)}</td>
        <td class="numeric" style="color: #93c5fd; font-weight: 600;">${formatNumber(totalAnnualIncome)}</td>
        <td class="numeric">${formatNumber(r.pvd)}</td>
        <td class="numeric">${r.coop > 0 ? formatNumber(r.coop) : '<span style="color:var(--text-dim);">-</span>'}</td>
        <td class="numeric">${formatNumber(r.rmf)}</td>
        <td class="numeric">${formatNumber(r.ins)}</td>
        <td class="numeric" style="color: var(--cyan-500); font-weight: 600;">${formatNumber(r.monthlyTot)}</td>
        <td class="numeric">${r.bonusPen > 0 ? formatNumber(r.bonusPen) : '<span style="color:var(--text-dim);">-</span>'}</td>
        <td class="numeric" style="color: var(--emerald-400); font-weight: 700;">${formatNumber(r.annualTot)}</td>
        <td class="numeric" style="color: #34d399; font-weight: 600;">${formatNumber(netSurplus)}</td>
        <td class="note-cell">${r.note}</td>
      </tr>
    `;
  }).join("");
}

// Age Filter Buttons
function setupAgeFilters() {
  const pills = document.querySelectorAll("#age-filter-pills .filter-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.getAttribute("data-filter");
      renderAccumulationTable(filter);
    });
  });
}

// Accumulation Chart
let accumulationChartInstance = null;
function renderAccumulationChart() {
  const ctx = document.getElementById("chart-accumulation");
  if (!ctx) return;

  const ages = ACCUMULATION_DATA.map(d => `อายุ ${d.age}`);
  const pvdData = ACCUMULATION_DATA.map(d => d.pvd * 12);
  const coopData = ACCUMULATION_DATA.map(d => d.coop * 12);
  const rmfData = ACCUMULATION_DATA.map(d => d.rmf * 12);
  const insData = ACCUMULATION_DATA.map(d => d.ins * 12);
  const bonusPenData = ACCUMULATION_DATA.map(d => d.bonusPen);

  accumulationChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ages,
      datasets: [
        {
          label: "PVD 15%",
          data: pvdData,
          backgroundColor: "#06b6d4",
          stack: "Stack 0"
        },
        {
          label: "หุ้น สอ.กฟผ.",
          data: coopData,
          backgroundColor: "#3b82f6",
          stack: "Stack 0"
        },
        {
          label: "กองทุน RMF",
          data: rmfData,
          backgroundColor: "#10b981",
          stack: "Stack 0"
        },
        {
          label: "ประกันเดิม 3 ฉบับ",
          data: insData,
          backgroundColor: "#8b5cf6",
          stack: "Stack 0"
        },
        {
          label: "บำนาญใหม่ (โบนัส)",
          data: bonusPenData,
          backgroundColor: "#f59e0b",
          stack: "Stack 0"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false
      },
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "#94a3b8",
            font: { family: "Prompt", size: 12 },
            boxWidth: 14,
            usePointStyle: true,
            pointStyle: "circle"
          }
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          titleFont: { family: "Prompt", size: 13, weight: "bold" },
          bodyFont: { family: "Prompt", size: 12 },
          padding: 12,
          borderColor: "rgba(255,255,255,0.1)",
          borderWidth: 1,
          callbacks: {
            footer: function(items) {
              let total = 0;
              items.forEach(item => { total += item.parsed.y; });
              return `รวมจ่ายทั้งปี: ${formatNumber(total)} บาท`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: "rgba(255, 255, 255, 0.04)" },
          ticks: { color: "#64748b", font: { family: "Prompt", size: 11 } }
        },
        y: {
          stacked: true,
          grid: { color: "rgba(255, 255, 255, 0.04)" },
          ticks: {
            color: "#64748b",
            font: { family: "Prompt", size: 11 },
            callback: function(val) {
              return (val / 1000) + "k";
            }
          }
        }
      }
    }
  });
}

// Budget Split Chart
let budgetSplitChartInstance = null;
function renderBudgetSplitChart() {
  const ctx = document.getElementById("chart-budget-split");
  if (!ctx) return;

  budgetSplitChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["งบกินอยู่ประจำวัน", "งบส่วนเกินรองรับเบี้ยสุขภาพ (Surplus)"],
      datasets: [{
        data: [35000, 15038],
        backgroundColor: ["#3b82f6", "#10b981"],
        borderWidth: 2,
        borderColor: "#0f172a"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#94a3b8",
            font: { family: "Prompt", size: 12 }
          }
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          titleFont: { family: "Prompt", size: 13, weight: "bold" },
          bodyFont: { family: "Prompt", size: 12 },
          padding: 12,
          callbacks: {
            label: function(context) {
              const val = context.parsed;
              const pct = ((val / 50038) * 100).toFixed(1);
              return ` ${context.label}: ${formatNumber(val)} ฿/ด. (${pct}%)`;
            }
          }
        }
      },
      cutout: "60%"
    }
  });
}

// Simulator Logic
function setupSimulator() {
  const sliderLiving = document.getElementById("slider-living");
  const sliderYield = document.getElementById("slider-yield");
  const sliderPension = document.getElementById("slider-pension");

  const valLiving = document.getElementById("val-living-exp");
  const valYield = document.getElementById("val-portfolio-yield");
  const valPension = document.getElementById("val-pension-income");

  const resTotalIncome = document.getElementById("sim-res-total-income");
  const resLiving = document.getElementById("sim-res-living");
  const resSurplus = document.getElementById("sim-res-surplus");
  const resSurplusYear = document.getElementById("sim-res-surplus-year");

  function updateSim() {
    const living = parseFloat(sliderLiving.value);
    const yieldRate = parseFloat(sliderYield.value);
    const pension = parseFloat(sliderPension.value);

    valLiving.textContent = `${formatNumber(living)} ฿`;
    valYield.textContent = `${yieldRate.toFixed(2)}%`;
    valPension.textContent = `${formatNumber(pension)} ฿`;

    // 21M personal capital (excluding 4M coop for mom)
    const personalCapital = 21000000;
    const monthlyInterest = (personalCapital * (yieldRate / 100)) / 12;
    const totalPersonalIncome = monthlyInterest + pension;
    const surplus = totalPersonalIncome - living;

    resTotalIncome.textContent = `${formatNumber(Math.round(totalPersonalIncome))} ฿`;
    resLiving.textContent = `${formatNumber(Math.round(living))} ฿`;
    
    if (surplus >= 0) {
      resSurplus.textContent = `+${formatNumber(Math.round(surplus))} ฿`;
      resSurplus.style.color = "var(--emerald-400)";
      resSurplusYear.textContent = `ปีละ ${formatNumber(Math.round(surplus * 12))} บาท (รองรับเบี้ยสุขภาพได้สบาย)`;
    } else {
      resSurplus.textContent = `-${formatNumber(Math.round(Math.abs(surplus)))} ฿`;
      resSurplus.style.color = "#ef4444"; // Red warning
      resSurplusYear.textContent = `ขาดดุลปีละ ${formatNumber(Math.round(Math.abs(surplus) * 12))} บาท (ต้องดึงเงินต้นมาสมทบ)`;
    }
  }

  sliderLiving.addEventListener("input", updateSim);
  sliderYield.addEventListener("input", updateSim);
  sliderPension.addEventListener("input", updateSim);

  updateSim();
}
