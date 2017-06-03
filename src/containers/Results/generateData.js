export default function generateData() {
    let results = [];

    for (let i = 0; i < 20; i++) {
        results.push({
            time: `${rand(23)}:${rand(5)}0`,
            price: `${rand(40)} 000`,
            fligtNo: `AA ${rand(9999)}`,
            duration: `${rand(23)}`
        });
    }

    return results;
}

function rand(max) {
    return Math.round(Math.random() * max);
}