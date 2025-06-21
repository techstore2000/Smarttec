function saveData() {
    const fields = ["datum", "kasse", "verkauft", "gewinn", "ware", "eingezahlt", "rueckgabe", "lohn", "safet"];
    const data = fields.map(id => document.getElementById(id).value);
    const row = document.createElement("tr");
    data.forEach(val => {
        const td = document.createElement("td");
        td.textContent = val;
        row.appendChild(td);
    });
    document.getElementById("entries").appendChild(row);
    fields.forEach(id => document.getElementById(id).value = "");
}
