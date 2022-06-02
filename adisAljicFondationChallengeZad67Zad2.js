/* 2. Napisati funkciju koja racuna broj dana izmedju dva datuma. Datum u funkciju
prosljedjujete kao string u formatu DD.MM.YYYY.
PRIMJERI:
countDays(‘22.07.2022’, ‘30.12.2022’) → 161
countDays(‘19.09.2022’, ‘17.05.2023’) → 240 */
// "19.09.2022", "17.05.2023"

const FindLeapYear = (year) => {
    let cnt = 0
    for (let i = 1600; i <year; i++) {
        if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)) {
            cnt++
        }
    }
    return cnt
}

const calculateDaysBetweenDates = (string1, string2) => {
    if (string2.length == 11 && string2[2] == "." && string2[5] == "." && string2[string2.length - 1] == "." && Number(string2.slice(0, 2)) > 0
        && Number(string2.slice(0, 2)) < 32 && Number(string2.slice(3, 5)) > 0 && Number(string2.slice(3, 5)) <= 12 && Number(string2.slice(-5, -1)) > 0
        && string1.length == 11 && string1[2] == "." && string1[5] == "." && string1[string1.length - 1] == "." && Number(string1.slice(0, 2)) > 0
        && Number(string1.slice(0, 2)) < 32 && Number(string1.slice(3, 5)) > 0 && Number(string1.slice(3, 5)) <= 12 && Number(string1.slice(-5, -1)) > 0) {
            
            
            const daysToDate = (string) => {
                
            let days = 0

               if (Number(string.slice(3, 5)) == 1) {days += 0}
            else if (Number(string.slice(3, 5)) == 2) {days += 28*24*3600}
            else if (Number(string.slice(3, 5)) == 3) {days += (28 + 31)*24*3600}
            else if (Number(string.slice(3, 5)) == 4) {days += (28 + 31 + 30)*24*3600}
            else if (Number(string.slice(3, 5)) == 5) {days += (28 + 31 + 30 + 31)*24*3600}
            else if (Number(string.slice(3, 5)) == 6) {days += (28 + 31 + 30 + 31 + 30)*24*3600}
            else if (Number(string.slice(3, 5)) == 7) {days += (28 + 31 + 30 + 31 + 30 + 31)*24*3600}
            else if (Number(string.slice(3, 5)) == 8) {days += (28 + 31 + 30 + 31 + 30 + 31 + 31)*24*3600}
            else if (Number(string.slice(3, 5)) == 9) {days += (28 + 31 + 30 + 31 + 30 + 31 + 31 + 30)*24*3600}
            else if (Number(string.slice(3, 5)) == 10) {days += (28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31)*24*3600}
            else if (Number(string.slice(3, 5)) == 11) {days += (28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30)*24*3600}
            else if (Number(string.slice(3, 5)) == 12) {days += (28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31)*24*3600}
            
            let daysFromYears = (Number(string.slice(-5, -1)) -2000)*365
            let numberOfDays = Number(string.slice(0, 2))*24*3600
            let summDaysFrom = numberOfDays + daysFromYears
            let daysFromLeapYear = FindLeapYear(daysFromYears)*24*3600
            
            let totalDays = summDaysFrom + daysFromLeapYear + days
            if (FindLeapYear(string.slice(-5, -1))) {totalDays += 24*3600}

            return totalDays/3600/24
        }

   
        return Math.trunc(daysToDate(string2) - daysToDate(string1))
    }

    else return "Unesite datum u formatu DD.MM.YYYY."

}
console.log(calculateDaysBetweenDates("22.07.2022.", "30.12.2022."))
// console.log(FindLeapYear(2020))
// "19.09.2022.", "17.05.2023."
// "22.07.2022.", "30.12.2022."


