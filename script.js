document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const hexCodesDiv = document.getElementById('hexCodes');
    const colorBoxes = [
        document.getElementById('color1'),
        document.getElementById('color2'),
        document.getElementById('color3'),
        document.getElementById('color4'),
        document.getElementById('color5')
    ];

    // Generate random color
    const generateColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Generate palette
    const generatePalette = () => {
        const colors = [];
        for (let i = 0; i < 5; i++) {
            const color = generateColor();
            colors.push(color);
            colorBoxes[i].style.backgroundColor = color;
        }
        hexCodesDiv.textContent = colors.join(', ');
    };

    // Copy HEX codes to clipboard
    const copyHexCodes = () => {
        const hexCodes = hexCodesDiv.textContent;
        navigator.clipboard.writeText(hexCodes).then(() => {
            alert('HEX codes copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    // Event listeners
    generateBtn.addEventListener('click', generatePalette);
    copyBtn.addEventListener('click', copyHexCodes);

    // Generate initial palette
    generatePalette();
});
