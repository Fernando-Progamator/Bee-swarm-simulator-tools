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

function calculateTreat() {
    bees = document.getElementById("bees").value;
    levels = document.getElementById("beeslevels").value;
    gifted_puppy = document.getElementById("gifted_puppy").value;

    if (!level || level <= 0 || level > 24 || !bees) {
        return
    }
    bond_from_treat = 10
    if (gifted_puppy == true){
        bond_from_treat += 2
    }
    Treats = (10*bond_for_next_level[level+1]*bees/bond_from_treat)

    alert(Treats)

    document.getElementById("Up_treat").innerHTML = "Treats for up your bees: " + Treats
    document.getElementById("Up_honey").innerHTML = "Honey for up your bees: " + Treats * 10000
}
btn.addEventListener("click", calculateTreat(1, 1, false))