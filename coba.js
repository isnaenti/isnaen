document.addEventListener("DOMContentLoaded", () => {
    const PointTable = document.getElementById("pointTable").getElementsByTagName('tbody')[0];

    fetch("point.json") // Ganti "point.json" dengan nama file JSON Anda
        .then(response => response.json())
        .then(data => {
            let rowNum = 1; // Nomor urut awal
            data.features.forEach(feature => {
                if (feature.geometry.type === "Point") {
                    const row = PointTable.insertRow();
                    const numCell = row.insertCell(0);
                    const nameCell = row.insertCell(1);
                    const coordinatesCell = row.insertCell(2);
                    const typeCell = row.insertCell(3);
                    
                    numCell.innerText = rowNum; // Mengisi nomor urut
                    nameCell.innerText = feature.properties.name;
                    coordinatesCell.innerText = JSON.stringify(feature.geometry.coordinates);
                    typeCell.innerText = feature.geometry.type;
                    
                    rowNum++; // Menambah nomor urut setiap kali menambahkan baris
                }
            });
        })
        .catch(error => console.error("Terjadi kesalahan:", error));
});

document.addEventListener("DOMContentLoaded", () => {
    const PointTable = document.getElementById("polygonTable").getElementsByTagName('tbody')[0];

    fetch("polygon.json") // Ganti "point.json" dengan nama file JSON Anda
        .then(response => response.json())
        .then(data => {
            let rowNum = 1; // Nomor urut awal
            data.features.forEach(feature => {
                if (feature.geometry.type === "Polygon") {
                    const row = PointTable.insertRow();
                    const numCell = row.insertCell(0);
                    const nameCell = row.insertCell(1);
                    const coordinatesCell = row.insertCell(2);
                    const typeCell = row.insertCell(3);
                    
                    numCell.innerText = rowNum; // Mengisi nomor urut
                    nameCell.innerText = feature.properties.name;
                    coordinatesCell.innerText = JSON.stringify(feature.geometry.coordinates);
                    typeCell.innerText = feature.geometry.type;
                    
                    rowNum++; // Menambah nomor urut setiap kali menambahkan baris
                }
            });
        })
        .catch(error => console.error("Terjadi kesalahan:", error));
});


document.addEventListener("DOMContentLoaded", () => {
    const PointTable = document.getElementById("linestringTable").getElementsByTagName('tbody')[0];

    fetch("linestring.json") // Ganti "point.json" dengan nama file JSON Anda
        .then(response => response.json())
        .then(data => {
            let rowNum = 1; // Nomor urut awal
            data.features.forEach(feature => {
                if (feature.geometry.type === "LineString") {
                    const row = PointTable.insertRow();
                    const numCell = row.insertCell(0);
                    const nameCell = row.insertCell(1);
                    const coordinatesCell = row.insertCell(2);
                    const typeCell = row.insertCell(3);
                    
                    numCell.innerText = rowNum; // Mengisi nomor urut
                    nameCell.innerText = feature.properties.name;
                    coordinatesCell.innerText = JSON.stringify(feature.geometry.coordinates);
                    typeCell.innerText = feature.geometry.type;
                    
                    rowNum++; // Menambah nomor urut setiap kali menambahkan baris
                }
            });
        })
        .catch(error => console.error("Terjadi kesalahan:", error));
});

