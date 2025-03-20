function myFunction() {
    var n = document.getElementById('numberInput').value;
    var str = "<table>";

    for (let i = 1; i <= n; i++) {
        str += "<tr>";
        for (let j = 1; j <= n; j++) {
            // 如果是第一列（j == 1），套用藍色樣式
            if (j === 1) {
                str += `<td style="background-color: #01b7ff; color: white;"> ${i} * ${j} = ${i * j}</td>`;
            } else {
                str += `<td> ${i} * ${j} = ${i * j}</td>`;
            }
        }
        str += "</tr>";
    }
    str += "</table>";

    document.getElementById("myId").innerHTML = str;
}
