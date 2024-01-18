document.addEventListener("DOMContentLoaded", function () {
    // Fetch file list and populate the HTML dynamically
    fetchFileList();
});

async function fetchFileList() {
    try {
        const response = await fetch("files.json"); // Assuming you have a JSON file with the list of files
        const fileList = await response.json();

        if (fileList && Array.isArray(fileList)) {
            const ulElement = document.getElementById("fileList");

            fileList.forEach((file) => {
                const liElement = document.createElement("li");
                const aElement = document.createElement("a");

                aElement.href = `files/${file}`;
                aElement.textContent = file;

                liElement.appendChild(aElement);
                ulElement.appendChild(liElement);
            });
        } else {
            console.error("Invalid file list format");
        }
    } catch (error) {
        console.error("Error fetching file list:", error);
    }
}
