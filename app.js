// =========================================================================
// KOZMIČNI KOMPAS IBN ARABIJA - DATOTEKA: app.js 
// POWERED BY KARAT SOFT DESIGN
// =========================================================================

const mansionsData = [
    { id: 1, name: "Al-Sharatain", arabic: "أ – Alif", divine: "Al-Badi'", meaning: "Prvobitni Kreator", level: "Prvi Razum (Intellect)", quran: "Sura Al-Baqarah (2:1) - Skrivnost Alif" },
    { id: 2, name: "Al-Butain", arabic: "ب – Ba", divine: "Al-Ba'ith", meaning: "Prebujalec", level: "Univerzalna Duša", quran: "Sura Al-Fatiha (1:1) - Začetna črka Ba" },
    { id: 3, name: "Al-Thurayya", arabic: "ج – Jim", divine: "Al-Warith", meaning: "Vrhovni Dedič", level: "Prvobitna Materija", quran: "Sura Al-Hijr (15:16) - Ozvezdja" },
    { id: 4, name: "Al-Dabarain", arabic: "د – Dal", divine: "Al-Hayy", meaning: "Večno Živi", level: "Prvobitna Materija", quran: "Sura Al-Ikhlas (112:2) - Gospodar" },
    { id: 5, name: "Al-Haq'ah", arabic: "ه – Ha", divine: "Al-Shakur", meaning: "Hvaležni", level: "Sfera Oblike (Forma)", quran: "Sura Taha (20:1) - Črka Ha" },
    { id: 6, name: "Al-Han'ah", arabic: "و – Waw", divine: "Al-Ghani", meaning: "Neodvisni / Bogati", level: "Sfera Teles (Corpus)", quran: "Sura Al-An'am (6:133) - Neodvisen" },
    { id: 7, name: "Al-Dhira", arabic: "ز – Zay", divine: "Al-Muqaddir", meaning: "Določevalec Usode", level: "Sfera Elementov", quran: "Sura Al-Qadr (97:1) - Noč usode" },
    { id: 8, name: "Al-Nathrah", arabic: "ح – Ha", divine: "Al-Rab", meaning: "Gospodar", level: "Mineralno kraljestvo", quran: "Sura Al-Fatiha (1:2) - Rabbi-l-'alamin" },
    { id: 9, name: "Al-Tarf", arabic: "ط – Ta", divine: "Al-Latif", meaning: "Subtilni", level: "Rastlinsko kraljestvo", quran: "Sura Al-An'am (6:103) - On je Subtilni" },
    { id: 10, name: "Al-Jabhah", arabic: "ي – Ya", divine: "Al-Qabid", meaning: "Tisti, ki krči", level: "Živalsko kraljestvo", quran: "Sura Al-Baqarah (2:245) - Allah krči" },
    { id: 11, name: "Al-Zubrah", arabic: "ك – Kaf", divine: "Al-Hayyi", meaning: "Skrbni", level: "Sfera Angelov", quran: "Sura Maryam (19:1) - Skrbstvo" },
    { id: 12, name: "Al-Sarfah", arabic: "ل – Lam", divine: "Al-Muhyi", meaning: "Podeljevalec Življenja", level: "Sfera Jinnom", quran: "Sura Al-Inshirah (94:1) - Oživitev" },
    { id: 13, name: "Al-Awwa", arabic: "م – Mim", divine: "Al-Mumit", meaning: "Prinašalec Smrti", level: "Človeška stopnja", quran: "Sura Ali 'Imran (3:185) - Okus smrti" },
    { id: 14, name: "Al-Simak", arabic: "ن – Nun", divine: "Al-Aziz", meaning: "Vsemogočni", level: "Duhovna hierarhija", quran: "Sura Al-Qalam (68:1) - Nun in pero" },
    { id: 15, name: "Al-Ghafr", arabic: "س – Sin", divine: "Al-Musawwir", meaning: "Oblikovalec", level: "Sfera fiksnega Neba", quran: "Sura Yasin (36:1) - Srce Qur'ana" },
    { id: 16, name: "Al-Zubana", arabic: "ع – Ayn", divine: "Al-Muqtadir", meaning: "Močni / Vladajoči", level: "Saturnova Sfera", quran: "Sura Al-Qamar (54:42) - Močni" },
    { id: 17, name: "Iklil al-Jabhah", arabic: "ف – Fa", divine: "Al-Alim", meaning: "Vsevedni", level: "Jupitrova Sfera", quran: "Sura Al-Baqarah (2:255) - Ayat al-Kursi" },
    { id: 18, name: "Al-Qalb", arabic: "ص – Sad", divine: "Al-Qahir", meaning: "Podreditelj", level: "Marsova Sfera", quran: "Sura Sad (38:1) - Resnica" },
    { id: 19, name: "Al-Shaulah", arabic: "ق – Qaf", divine: "Al-Nur", meaning: "Svetloba", level: "Sončeva Sfera", quran: "Sura Al-Nur (24:35) - Luč nebes" },
    { id: 20, name: "Al-Na'aim", arabic: "ر – Ra", divine: "Al-Musawwir", meaning: "Prinašalec milosti", level: "Venerina Sfera", quran: "Sura Al-Anbiya (21:107) - Milost" },
    { id: 21, name: "Al-Baldah", arabic: "ش – Shin", divine: "Al-Muhsi", meaning: "Števec vsega", level: "Merkurjeva Sfera", quran: "Sura Al-Jinn (72:28) - Prešteto" },
    { id: 22, name: "Sa'd al-Dhabih", arabic: "ت – Ta", divine: "Al-Subbuh", meaning: "Popolnoma Čisti", level: "Lunina Sfera", quran: "Sura Al-Isra (17:44) - Slavljenje" },
    { id: 23, name: "Sa'd al-Bula", arabic: "ث – Tha", divine: "Al-Quddus", meaning: "Sveti", level: "Sfera Vode", quran: "Sura Al-Jumu'ah (62:1) - Sveti" },
    { id: 24, name: "Sa'd al-Su'ud", arabic: "خ – Kha", divine: "Al-Ahad", meaning: "Edini", level: "Sfera Zraka", quran: "Sura Al-Ikhlas (112:1) - Eden" },
    { id: 25, name: "Sa'd al-Ahbiyah", arabic: "ذ – Dhal", divine: "Al-Samad", meaning: "Večni Utok", level: "Sfera Ognja", quran: "Sura Al-Ikhlas (112:2) - Samad" },
    { id: 26, name: "Al-Fargh al-Mukdim", arabic: "ض – Dad", divine: "Al-Awwal", meaning: "Prvi", level: "Sfera Zemlje", quran: "Sura Al-Hadid (57:3) - Prvi in Zadnji" },
    { id: 27, name: "Al-Fargh al-Muahir", arabic: "ظ – Za", divine: "Al-Akhir", meaning: "Zadnji", level: "Sublunarni svet", quran: "Sura Al-Hadid (57:3) - Al-Akhir" },
    { id: 28, name: "Risha al-Hut", arabic: "غ – Ghayn", divine: "Al-Zahir", meaning: "Manifestirani", level: "Popoln Človek", quran: "Sura Fussilat (41:53) - Obzorja" }
];

const step = 360 / 28;
let currentHighlighted = null;
let customDateActive = false;
let selectedDate = new Date();
function drawWheel() {
    const wheelG = document.getElementById('wheel');
    const linesG = document.getElementById('mansion-lines');
    if (!wheelG || !linesG) return;
    
    wheelG.innerHTML = ""; 
    linesG.innerHTML = ""; 

    const rIn = 140;
    const rOut = 290;
    const cx = 325;
    const cy = 325;
    const rad = Math.PI / 180;

    // 1. IZRIS 28 SEKTORJEV IN AZURNIH LOČNIC ZA DVORCE (Z USKLAJENIM IZHODIŠČEM -90°)
    mansionsData.forEach((m, index) => {
        // Dodana rotacija -90 stopinj, da se 0° poravna s čistim vrhom kroga
        const startAngle = index * step - 90;
        const endAngle = (index + 1) * step - 90;
        
        const x1_in = cx + rIn * Math.cos(startAngle * rad);
        const y1_in = cy + rIn * Math.sin(startAngle * rad);
        const x2_in = cx + rIn * Math.cos(endAngle * rad);
        const y2_in = cy + rIn * Math.sin(endAngle * rad);
        
        const x1_out = cx + rOut * Math.cos(startAngle * rad);
        const y1_out = cy + rOut * Math.sin(startAngle * rad);
        const x2_out = cx + rOut * Math.cos(endAngle * rad);
        const y2_out = cy + rOut * Math.sin(endAngle * rad);

        const pathData = `M ${x1_in} ${y1_in} L ${x1_out} ${y1_out} A ${rOut} ${rOut} 0 0 1 ${x2_out} ${y2_out} L ${x2_in} ${y2_in} A ${rIn} ${rIn} 0 0 0 ${x1_in} ${y1_in} Z`;

        const path = document.createElementNS("http://w3.org", "path");
        path.setAttribute("d", pathData);
        path.setAttribute("class", "mansion-sector");
        path.setAttribute("id", `sector-${m.id}`);
        path.addEventListener('click', () => highlightMansion(m.id));

        // Poravnava številk dvorcev točno na sredino polja
        const midAngle = startAngle + step / 2;
        const rText = rIn + (rOut - rIn) / 2;
        const tx = cx + rText * Math.cos(midAngle * rad);
        const ty = cy + rText * Math.sin(midAngle * rad);

        const text = document.createElementNS("http://w3.org", "text");
        text.setAttribute("x", tx);
        text.setAttribute("y", ty);
        text.setAttribute("class", "wheel-text");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "central");
        text.textContent = m.id;

        wheelG.appendChild(path);
        wheelG.appendChild(text);

        // Zunanje azurne ločnice, podaljšane navzven čez rob stopinj
        const x_mansion_ext = cx + (rOut + 15) * Math.cos(startAngle * rad);
        const y_mansion_ext = cy + (rOut + 15) * Math.sin(startAngle * rad);
        
        const mLine = document.createElementNS("http://w3.org", "line");
        mLine.setAttribute("x1", x1_out);
        mLine.setAttribute("y1", y1_out);
        mLine.setAttribute("x2", x_mansion_ext);
        mLine.setAttribute("y2", y_mansion_ext);
        linesG.appendChild(mLine);
    });

    // 2. IZRIS FINE GRADACIJE ZODIAKALNIH STOPINJ (Z USKLAJENIM IZHODIŠČEM -90°)
    for (let d = 0; d < 360; d += 10) {
        const angle = d - 90; // Umerjanje stopinj na vrh kroga (0° = Oven)
        const x_tick_start = cx + rOut * Math.cos(angle * rad);
        const y_tick_start = cy + rOut * Math.sin(angle * rad);
        const x_tick_end = cx + (rOut + 6) * Math.cos(angle * rad);
        const y_tick_end = cy + (rOut + 6) * Math.sin(angle * rad);

        const line = document.createElementNS("http://w3.org", "line");
        line.setAttribute("x1", x_tick_start);
        line.setAttribute("y1", y_tick_start);
        line.setAttribute("x2", x_tick_end);
        line.setAttribute("y2", y_tick_end);
        line.setAttribute("class", "degree-tick");
        wheelG.appendChild(line);

        // Izpis številčnih oznak vsakih 30 stopinj (meje znamenj)
        if (d % 30 === 0) {
            const tx = cx + (rOut + 22) * Math.cos(angle * rad);
            const ty = cy + (rOut + 22) * Math.sin(angle * rad);
            const text = document.createElementNS("http://w3.org", "text");
            text.setAttribute("x", tx);
            text.setAttribute("y", ty);
            text.setAttribute("class", "degree-text");
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("dominant-baseline", "central");
            text.textContent = d + "°";
            wheelG.appendChild(text);
        }
    }
}

function populateTable() {
    const tbody = document.getElementById('mansion-table-body');
    if (!tbody) return;
    tbody.innerHTML = "";
    
    mansionsData.forEach((m, index) => {
        const startDeg = (index * step).toFixed(1);
        const endDeg = ((index + 1) * step).toFixed(1);

        let hz = 963;
        if (m.id >= 1 && m.id <= 5) hz = 963;
        else if (m.id >= 6 && m.id <= 10) hz = 852;
        else if (m.id >= 11 && m.id <= 15) hz = 741;
        else if (m.id >= 16 && m.id <= 18) hz = 639;
        else if (m.id === 19) hz = 528; 
        else if (m.id >= 20 && m.id <= 22) hz = 417;
        else hz = 396;

        const tr = document.createElement('tr');
        tr.setAttribute('id', `row-${m.id}`);
        tr.innerHTML = `
            <td><b>${m.id}</b></td>
            <td><span style="color: var(--accent-color); font-weight: bold;">${m.name}</span></td>
            <td><small style="font-family: monospace;">${startDeg}° - ${endDeg}°</small></td>
            <td class="arabic-text">${m.arabic}</td>
            <td>
                <span style="font-family: monospace; font-size: 1rem; color: #f43f5e; display: block; margin-bottom: 4px;">${m.divine}</span>
                <button onclick="playFrequency(${hz}, this)" style="padding: 3px 8px; font-size: 0.7rem; background: #1e293b; color: #fbbf24; border: 1px solid #334155; border-radius: 4px; cursor: pointer;">Hz ${hz}</button>
            </td>
            <td>${m.meaning}</td>
            <td><small>${m.level}</small></td>
            <td class="quran-text">${m.quran}</td>
        `;
        
        tr.addEventListener('mouseenter', () => {
            const el = document.getElementById(`sector-${m.id}`);
            if (el) el.classList.add('active');
        });
        tr.addEventListener('mouseleave', () => {
            if (currentHighlighted !== m.id) {
                const el = document.getElementById(`sector-${m.id}`);
                if (el) el.classList.remove('active');
            }
        });
        tr.addEventListener('click', () => highlightMansion(m.id));
        tbody.appendChild(tr);
    });
}
function highlightMansion(id) {
    if (currentHighlighted) {
        const prevSector = document.getElementById(`sector-${currentHighlighted}`);
        const prevRow = document.getElementById(`row-${currentHighlighted}`);
        if (prevSector) prevSector.classList.remove('active');
        if (prevRow) prevRow.classList.remove('highlighted');
    }
    currentHighlighted = id;
    const nextSector = document.getElementById(`sector-${id}`);
    const nextRow = document.getElementById(`row-${id}`);
    if (nextSector) nextSector.classList.add('active');
    if (nextRow) {
        nextRow.classList.add('highlighted');
        nextRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function getPreciseAstronomicalData(date) {
    const time = date.getTime();
    const julianDate = (time / 86400000) + 2440587.5;
    const D = julianDate - 2451545.0; 
    
    let g = (357.529 + 0.98560028 * D) % 360;
    if (g < 0) g += 360;
    let q = (280.459 + 0.98564736 * D) % 360;
    if (q < 0) q += 360;
    let sunLongitude = (q + 1.915 * Math.sin(g * Math.PI / 180) + 0.020 * Math.sin(2 * g * Math.PI / 180)) % 360;
    if (sunLongitude < 0) sunLongitude += 360;

    let L0 = (218.316 + 13.176396 * D) % 360;
    if (L0 < 0) L0 += 360;
    let M = (134.963 + 13.064993 * D) % 360;
    if (M < 0) M += 360;
    
    let moonLongitude = (L0 + 6.289 * Math.sin(M * Math.PI / 180)) % 360;
    if (moonLongitude < 0) moonLongitude += 360;

    let phaseAngle = (moonLongitude - sunLongitude) % 360;
    if (phaseAngle < 0) phaseAngle += 360;
    
    let illumination = ((1 - Math.cos(phaseAngle * Math.PI / 180)) / 2) * 100;
    let age = (phaseAngle / 360) * 29.530588853;

    let phaseIdx = Math.floor(((age + 1.845) % 29.53) / 3.69) % 8;
    const phases = ["Mlaj", "Naraščajoči srp", "Prvi krajec", "Naraščajoča svetloba", "Polna Luna", "Iztetek", "Zadnji krajec", "Padajoči srp"];
    const icons = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

    return {
        moonAge: age,
        moonLong: moonLongitude,
        sunLong: sunLongitude,
        illumination: illumination.toFixed(0),
        phaseStr: phases[phaseIdx],
        icon: icons[phaseIdx]
    };
}

function updateEngine() {
    const targetDate = customDateActive ? selectedDate : new Date();

    if(!customDateActive) {
        document.getElementById('local-time').textContent = targetDate.toLocaleTimeString('sl-SI');
        document.getElementById('utc-time').textContent = targetDate.toUTCString().substring(17, 25) + ' UTC';
    } else {
        document.getElementById('local-time').textContent = targetDate.toLocaleDateString('sl-SI') + " (Fiksirano)";
        document.getElementById('utc-time').textContent = targetDate.toISOString().substring(11,19) + ' UTC';
    }

    const astro = getPreciseAstronomicalData(targetDate);
    
    document.getElementById('moon-illumination').textContent = astro.illumination + "% (" + astro.moonAge.toFixed(1) + " d)";
    document.getElementById('moon-status').textContent = astro.phaseStr + " [" + astro.illumination + "%]";
    document.getElementById('moon-icon').textContent = astro.icon;

    // --- SONČEVO LETO ZAČETEK NA 0° OVNA (ARIES ≈ 20. MAREC) ---
    let ariesStart = new Date(targetDate.getFullYear(), 2, 20); 
    if (targetDate < ariesStart) {
        ariesStart = new Date(targetDate.getFullYear() - 1, 2, 20);
    }
    const sunDiffDays = Math.floor((targetDate - ariesStart) / (1000 * 60 * 60 * 24)) + 1;
    let geoDan = Math.floor((sunDiffDays / 365.2422) * 360);
    if (geoDan <= 0) geoDan = 360;
    
    const geoDayEl = document.getElementById('geo-day');
    if (geoDayEl) geoDayEl.textContent = geoDan + ". dan / 360°";

    // --- LUNARNI LETNI DAN ZAČETEK NA 0° RAKA (CANCER ≈ 21. JUNIJ) ---
    let cancerStart = new Date(targetDate.getFullYear(), 5, 21); 
    if (targetDate < cancerStart) {
        cancerStart = new Date(targetDate.getFullYear() - 1, 5, 21);
    }
    const moonDiffDays = Math.floor((targetDate - cancerStart) / (1000 * 60 * 60 * 24)) + 1;
    let lunarYearDay = Math.floor((moonDiffDays / 365.2422) * 354.36);
    if (lunarYearDay <= 0) lunarYearDay = 354;
    
    // Astronomski izračun koledarskega leta s fiksnim umerjanjem za 1448 AH
    const timeForJD = targetDate.getTime();
    const jdForHijri = (timeForJD / 86400000) + 2440587.5;
    let currentHijriYear = Math.floor((jdForHijri - 1948439.5) / 354.36707);
    
    if (targetDate.getFullYear() === 2026 && targetDate.getMonth() >= 5 && targetDate.getDate() >= 16) {
        currentHijriYear = 1448;
    } else if (targetDate.getFullYear() === 2026 && (targetDate.getMonth() < 5 || (targetDate.getMonth() === 5 && targetDate.getDate() < 16))) {
        currentHijriYear = 1447;
    }

    document.getElementById('hijri-year').textContent = lunarYearDay + ". d / " + currentHijriYear + " AH";

    let liveMansionIdx = Math.floor(astro.moonLong / step) + 1;
    if(liveMansionIdx > 28) liveMansionIdx = 28;

    const sunMarker = document.getElementById('sun-marker');
    if (sunMarker) {
        const rad = Math.PI / 180;
        const cx = 325, cy = 325, rOut = 290;
        const sunAngleRad = (astro.sunLong - 90) * rad; 
        const sx = cx + rOut * Math.cos(sunAngleRad);
        const sy = cy + rOut * Math.sin(sunAngleRad);
        sunMarker.setAttribute("cx", sx);
        sunMarker.setAttribute("cy", sy);
        sunMarker.style.display = "block";
    }
    // --- PREMIK DINAMIČNE LUNE PO LUNARNIH DVORCIH (KARAT SOFT DESIGN) ---
    const moonMarker = document.getElementById('moon-marker');
    if (moonMarker) {
        const rad = Math.PI / 180;
        const cx = 325, cy = 325, rOut = 290;
        // Računanje kota Lune (-90 stopinj za poravnavo z vrhom 0°)
        const moonAngleRad = (astro.moonLong - 90) * rad; 
        const mx = cx + rOut * Math.cos(moonAngleRad);
        const my = cy + rOut * Math.sin(moonAngleRad);
        moonMarker.setAttribute("cx", mx);
        moonMarker.setAttribute("cy", my);
        moonMarker.style.display = "block";
    }


    document.querySelectorAll('.mansion-sector').forEach(s => s.classList.remove('live-mansion'));
    document.querySelectorAll('tr').forEach(r => r.classList.remove('live-row'));

    const activeSector = document.getElementById("sector-" + liveMansionIdx);
    const activeRow = document.getElementById("row-" + liveMansionIdx);
    if(activeSector) activeSector.classList.add('live-mansion');
    if(activeRow) activeRow.classList.add('live-row');

    if (!currentHighlighted) {
        highlightMansion(liveMansionIdx);
    }

    const zodiacSigns = ["Oven (Aries)", "Bik (Taurus)", "Dvojčka (Gemini)", "Rak (Cancer)", "Lev (Leo)", "Devica (Virgo)", "Tehtnica (Libra)", "Škorpijon (Scorpio)", "Strelec (Sagittarius)", "Kozorog (Capricorn)", "Vodnar (Aquarius)", "Ribi (Pisces)"];
    let sunSignIdx = Math.floor(astro.sunLong / 30);
    let sunDegInSign = Math.floor(astro.sunLong % 30);
    let sunSignStr = `☉ ${zodiacSigns[sunSignIdx]} (${sunDegInSign}°)`;
    
    let moonSignIdx = Math.floor(astro.moonLong / 30);
    let moonDegInSign = Math.floor(astro.moonLong % 30);
    let moonSignStr = `☽ ${zodiacSigns[moonSignIdx]} (${moonDegInSign}°)`;
    
    const zodiacEl = document.getElementById('zodiac-positions');
    if (zodiacEl) {
        zodiacEl.textContent = `${sunSignStr}  |  ${moonSignStr}`;
    }
}

let audioCtx = null;
let currentOscillator = null;
let currentGainNode = null;
let lastActiveButton = null;

function playFrequency(hz, buttonElement) {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (currentOscillator && lastActiveButton === buttonElement) {
        stopCurrentTone();
        return;
    }
    if (currentOscillator) {
        stopCurrentTone();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(hz, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.05);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();

    currentOscillator = osc;
    currentGainNode = gainNode;
    lastActiveButton = buttonElement;

    buttonElement.textContent = "Ustavi";
    buttonElement.style.background = "#f43f5e";
    buttonElement.style.color = "#ffffff";
    buttonElement.style.borderColor = "#f43f5e";
}

function stopCurrentTone() {
    if (!currentOscillator || !currentGainNode) return;
    const localOsc = currentOscillator;
    const localGain = currentGainNode;
    const localButton = lastActiveButton;

    localGain.gain.setValueAtTime(localGain.gain.value, audioCtx.currentTime);
    localGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);

    setTimeout(() => {
        try {
            localOsc.stop();
            localOsc.disconnect();
            localGain.disconnect();
        } catch (e) {}
    }, 350);

    if (localButton) {
        const hzText = localButton.getAttribute("onclick").match(/\d+/);
        localButton.textContent = "Hz " + hzText;
        localButton.style.background = "#1e293b";
        localButton.style.color = "#fbbf24";
        localButton.style.borderColor = "#334155";
    }

    currentOscillator = null;
    currentGainNode = null;
    lastActiveButton = null;
}

document.addEventListener("DOMContentLoaded", () => {
    drawWheel();
    populateTable();
    updateEngine();
    
    const btnCalc = document.getElementById('btn-calc');
    if (btnCalc) {
        btnCalc.addEventListener('click', () => {
            const inputVal = document.getElementById('calc-date').value;
            if(inputVal) {
                selectedDate = new Date(inputVal);
                customDateActive = true;
                currentHighlighted = null; 
                updateEngine();
            }
        });
    }

    const btnReset = document.getElementById('btn-reset');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            customDateActive = false;
            currentHighlighted = null;
            document.getElementById('calc-date').value = "";
            updateEngine();
        });
    }

    setInterval(() => {
        if (!customDateActive) updateEngine();
    }, 1000);
});
