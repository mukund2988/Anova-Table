// script.js
document.addEventListener('DOMContentLoaded', () => {
    const nInput = document.getElementById('n');
    const m1InputsDiv = document.getElementById('m1Inputs');
    const m2InputsDiv = document.getElementById('m2Inputs');
    const m3InputsDiv = document.getElementById('m3Inputs');

    // Function to dynamically generate input fields
    function generateInputs() {
        const n = parseInt(nInput.value);
        m1InputsDiv.innerHTML = '';
        m2InputsDiv.innerHTML = '';
        m3InputsDiv.innerHTML = '';

        for (let i = 0; i < n; i++) {
            m1InputsDiv.innerHTML += `<label>M1[${i + 1}]: <input type="number" class="m1" min="0" required></label>`;
            m2InputsDiv.innerHTML += `<label>M2[${i + 1}]: <input type="number" class="m2" min="0" required></label>`;
            m3InputsDiv.innerHTML += `<label>M3[${i + 1}]: <input type="number" class="m3" min="0" required></label>`;
        }
    }

    // Regenerate inputs when the number of samples changes
    nInput.addEventListener('change', generateInputs);

    // Function to perform calculations
    window.calculateVariance = () => {
        const n = parseInt(nInput.value);
        const df = parseInt(document.getElementById('df').value);
        const df2 = parseInt(document.getElementById('df2').value);

        const m1Inputs = Array.from(document.querySelectorAll('.m1')).map(input => parseInt(input.value) || 0);
        const m2Inputs = Array.from(document.querySelectorAll('.m2')).map(input => parseInt(input.value) || 0);
        const m3Inputs = Array.from(document.querySelectorAll('.m3')).map(input => parseInt(input.value) || 0);

        const m1 = m1Inputs.reduce((a, b) => a + b, 0);
        const m2 = m2Inputs.reduce((a, b) => a + b, 0);
        const m3 = m3Inputs.reduce((a, b) => a + b, 0);

        const sumOfSqSample = [...m1Inputs, ...m2Inputs, ...m3Inputs].reduce((sum, value) => sum + value * value, 0);

        const grandTotal = m1 + m2 + m3;
        const totalN = n * 3;
        const correctionFactor = (grandTotal * grandTotal) / totalN;

        const totalSumOfSqSample = sumOfSqSample - correctionFactor;

        const varianceBetweenSamples = ((m1 * m1 + m2 * m2 + m3 * m3) / n) - correctionFactor;
        const varianceWithinSamples = totalSumOfSqSample - varianceBetweenSamples;

        const varianceBetweenSamplesMeanSquare = varianceBetweenSamples / df;
        const varianceWithinSamplesMeanSquare = varianceWithinSamples / df2;

        const fRatio = varianceBetweenSamplesMeanSquare / varianceWithinSamplesMeanSquare;

        document.getElementById('results').classList.remove('hidden');
        document.getElementById('sumM1').textContent = `M1 Sum: ${m1}`;
        document.getElementById('sumM2').textContent = `M2 Sum: ${m2}`;
        document.getElementById('sumM3').textContent = `M3 Sum: ${m3}`;
        document.getElementById('grandTotal').textContent = `Grand Total: ${grandTotal}`;
        document.getElementById('correctionFactor').textContent = `Correction Factor: ${correctionFactor}`;
        document.getElementById('sumOfSquares').textContent = `Sum of Squares of Sample: ${sumOfSqSample}`;
        document.getElementById('totalSumOfSquares').textContent = `Total Sum of Squares of Sample: ${totalSumOfSqSample}`;
        document.getElementById('varianceBetweenSamples').textContent = `Variance Between Samples: ${varianceBetweenSamples}`;
        document.getElementById('varianceWithinSamples').textContent = `Variance Within Samples: ${varianceWithinSamples}`;
        document.getElementById('varianceBetweenSamplesMeanSquare').textContent = `Mean Square Between Samples: ${varianceBetweenSamplesMeanSquare.toFixed(2)}`;
        document.getElementById('varianceWithinSamplesMeanSquare').textContent = `Mean Square Within Samples: ${varianceWithinSamplesMeanSquare.toFixed(2)}`;
        document.getElementById('fRatio').textContent = `F-ratio: ${fRatio.toFixed(2)}`;
    }
});
