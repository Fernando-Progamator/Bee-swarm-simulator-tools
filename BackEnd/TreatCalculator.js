bond_for_next_level = [
    10, 40, 200, 750, 
    4000, 15000, 60000,
    270000, 450000, 1200000,
    2000000, 4000000, 7000000,
    15000000, 120000000, 450000000,
    1900000000, 7500000000, 15000000000,
    475000000000, 4500000000000, 95000000000000,
    900000000000000, 9000000000000000
]

btn = document.getElementById("calculate_treat_btn")

sufixes = ["K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "Ud", "Dd", "Td", "Qad", "Qid", "Sxd", "Spd", "Ocd", "Nod", "Vg"];

if (btn) {
    console.log("Button found")
}

function numberToStringWithSuffix(number) {
    if (number < 1000) {
        return number.toString();
    }
    let zeros = Math.floor(Math.log10(number));
    let suffixIndex = Math.floor(zeros / 3) - 1;
    let suffix = sufixes[suffixIndex] || "";
    let value = number / Math.pow(1000, suffixIndex + 1);
    return value.toFixed(2) + suffix;
}
function calculateTreat() {
    bees = Number(document.getElementById("bees").value);
    levels = Number(document.getElementById("beeslevels").value);
    bond_bonusses = Number(document.getElementById("bond_from_treat_bonus").value) / 10;

    console.log(bond_bonusses)

    bond_from_treat = 10 + bond_bonusses;

    Treats = (bond_for_next_level[levels+1]/(bond_from_treat*10)) * bees


    document.getElementById("Up_treat").innerHTML = "Treats for up your bees: " + numberToStringWithSuffix(Treats)
    document.getElementById("Up_honey").innerHTML = "Honey for up your bees: " + numberToStringWithSuffix(Treats * 10000)
}
btn.addEventListener("click", calculateTreat())