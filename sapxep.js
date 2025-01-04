// Hàm thêm hình ảnh nhom.png và xử lý nhóm hình ảnh
function addGroupIcon() {
    if (document.getElementById("group-icon")) return;

    const groupIcon = document.createElement("img");
    groupIcon.src = "img/nhom.png";
    groupIcon.id = "group-icon";
    groupIcon.style.position = "fixed";
    groupIcon.style.top = "20px";
    groupIcon.style.right = "30px";
    groupIcon.style.width = "50px";
    groupIcon.style.cursor = "pointer";
    groupIcon.style.zIndex = "10";
    document.body.appendChild(groupIcon);

    const groupContainer = document.createElement("div");
    groupContainer.id = "group-container";
    groupContainer.style.position = "fixed";
    groupContainer.style.top = "100px";
    groupContainer.style.right = "20px";
    groupContainer.style.display = "none";
    groupContainer.style.flexDirection = "column";
    groupContainer.style.gap = "10px";
    groupContainer.style.backgroundColor = "rgba(248, 233, 222, 0.99)";
    groupContainer.style.border = "1px solid #ccc";
    groupContainer.style.borderRadius = "8px";
    groupContainer.style.padding = "10px";
    groupContainer.style.zIndex = "20";
    groupContainer.style.maxHeight = "230px";
    document.body.appendChild(groupContainer);

    const groupImages = [
        { id: "amthanh", src: "img/amthanh.png", alt: "Âm thanh" },
        { id: "tailai", src: "img/quaylai.png", alt: "Quay lại" },
        { id: "trangchu", src: "img/trangchu.png", alt: "Trang chủ" },
        { id: "huongdan", src: "img/huongdan.png", alt: "Hướng dẫn" },
    ];

    groupImages.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.id = image.id;
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.style.width = "50px";
        imgElement.style.cursor = "pointer";
        imgElement.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

        imgElement.addEventListener("click", function () {
            playSound();
            handleGroupClick(image.id);
        });

        imgElement.addEventListener("mouseenter", function () {
            imgElement.style.transform = "scale(1.2)";
            imgElement.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        });

        imgElement.addEventListener("mouseleave", function () {
            imgElement.style.transform = "scale(1)";
            imgElement.style.boxShadow = "none";
        });

        groupContainer.appendChild(imgElement);
    });

    let isMouseOverIcon = false;
    let isMouseOverContainer = false;

    groupIcon.addEventListener("mouseenter", function () {
        isMouseOverIcon = true;
        groupContainer.style.display = "flex";
    });

    groupIcon.addEventListener("mouseleave", function () {
        isMouseOverIcon = false;
        setTimeout(() => {
            if (!isMouseOverContainer) groupContainer.style.display = "none";
        }, 200); // Đợi 200ms để đảm bảo không ẩn quá nhanh
    });

    groupContainer.addEventListener("mouseenter", function () {
        isMouseOverContainer = true;
    });

    groupContainer.addEventListener("mouseleave", function () {
        isMouseOverContainer = false;
        setTimeout(() => {
            if (!isMouseOverIcon) groupContainer.style.display = "none";
        }, 200);
    });
}

// Hàm xử lý sự kiện khi người dùng click vào các hình ảnh trong nhóm
function handleGroupClick(imageId) {
    const audio = document.getElementById("background-music");

    switch (imageId) {
        case "amthanh":
            if (audio) {
                const soundButton = document.getElementById("amthanh");
                if (audio.paused) {
                    audio.play();
                    soundButton.src = "img/amthanh.png"; // Biểu tượng bật âm thanh
                } else {
                    audio.pause();
                    soundButton.src = "img/tatamthanh.png"; // Biểu tượng tắt âm thanh
                }
            } else {
                console.error("Không tìm thấy nhạc nền với id 'background-music'");
            }
            break;

        case "tailai":
            location.reload(); // Tải lại trang
            break;

        case "trangchu":
            window.location.href = "Trangchu.html"; // Điều hướng đến trang Trangchu.html
            break;

        case "huongdan":
            // Tạo và hiển thị banghuongdan.png và tat.png
            const guideModal = document.createElement("div");
            guideModal.id = "guide-modal";
            guideModal.style.position = "fixed";
            guideModal.style.top = "50%"; 
            guideModal.style.left = "50%";
            guideModal.style.transform = "translate(-50%, -50%)";
            guideModal.style.width = "1200px"; // Tăng chiều rộng
            guideModal.style.height = "700px"; // Đặt chiều cao cố định
            guideModal.style.display = "flex";
            guideModal.style.alignItems = "center";
            guideModal.style.padding = "10px";
            guideModal.style.zIndex = "1000";
            guideModal.style.justifyContent = "center"; // Căn giữa nội dung bên trong


            // Tạo hình ảnh banghuongdan.png
            const guideImage = document.createElement("img");
            guideImage.src = "img/banghuongdan.png";
            guideImage.alt = "Bảng hướng dẫn";
            guideImage.style.width = "90%"; // Đặt chiều rộng 100% modal
            guideImage.style.height = "auto"; // Tự điều chỉnh chiều cao
            guideImage.style.margin = "auto"; // Đảm bảo căn giữa            

            // Tạo hình ảnh tat.png (nút đóng)
            const closeButton = document.createElement("img");
            closeButton.id = "tat";
            closeButton.src = "img/tat.png";
            closeButton.alt = "Đóng";
            closeButton.style.position = "fixed";
            closeButton.style.top = "1cm"; // Cách mép trên 1cm
            closeButton.style.right = "3cm"; // Cách mép phải 4cm
            closeButton.style.width = "50px"; // Chiều rộng nút
            closeButton.style.height = "50px"; // Chiều cao nút
            closeButton.style.cursor = "pointer";


            // Thêm sự kiện click vào tat.png để đóng bảng hướng dẫn
            closeButton.addEventListener("click", function () {
                playSound();
                guideModal.remove();
            });

            // Thêm hình ảnh vào modal
            guideModal.appendChild(guideImage);
            guideModal.appendChild(closeButton);

            document.body.appendChild(guideModal);
            break;

        default:
            console.log("Không có hành động cho nút này.");
    }
}

// Chỉ giữ một hàm phát âm thanh
function playSound() {
    const sound = new Audio('sound/pop-sound.mp3');
    sound.volume = 0.4; // Âm lượng 40%
    sound.play();
}

document.addEventListener("DOMContentLoaded", function () {
    // Khởi tạo các trạng thái và biến cần thiết
    let state = "initial";
    let trees = [];
    let groups = [];

    function initializeGame() {
        // Thêm âm thanh cho nút "Tạo"
        document.getElementById("tao-image").addEventListener("click", function() {
            playSound(); // Thêm âm thanh
            createTrees();
        });

        // Thêm âm thanh cho nút "Chia"
        document.getElementById("chia-image").addEventListener("click", function() {
            playSound(); // Thêm âm thanh
            splitTrees();
        });

        updateInstructions("Nhấn 'Tạo' để bắt đầu.");
    }

    function updateInstructions(message) {
        const instructionElement = document.getElementById("instructions");
        instructionElement.style.fontFamily = "Arial, sans-serif";
        instructionElement.textContent = message;
    }

    function createTrees() {
        // Kiểm tra xem đã có cây chưa
        if (trees.length > 0) {
            return; // Nếu đã có cây thì không tạo thêm
        }

        const container = document.getElementById("cay-container");
        container.innerHTML = "";

        // Tạo mảng chứa tất cả các số từ 1 đến 100
        const availableNumbers = Array.from({length: 100}, (_, i) => i + 1);
        
        // Tạo 8 số ngẫu nhiên không trùng lặp
        const randomValues = [];
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * availableNumbers.length);
            const value = availableNumbers.splice(randomIndex, 1)[0];
            randomValues.push(value);
        }

        // Kích thước cây và panel giữ nguyên như cũ
        const treeWidth = 150;
        const treeHeight = 200;
        const treeMargin = 15;
        const panelWidth = 8 * treeWidth + (8 - 1) * treeMargin;
        const panelHeight = treeHeight + 2 * treeMargin;

        // Tạo panel xanh
        const greenPanel = document.createElement("div");
        greenPanel.className = "green-panel";
        greenPanel.style.width = `${panelWidth}px`;
        greenPanel.style.margin = "40px auto";
        greenPanel.style.height = `${panelHeight}px`;
        greenPanel.style.border = "3px dashed #8BC34A";
        greenPanel.style.backgroundColor = "#DFF0D8";
        greenPanel.style.borderRadius = "20px";
        greenPanel.style.display = "flex";
        greenPanel.style.justifyContent = "space-between";
        greenPanel.style.alignItems = "center";
        greenPanel.style.padding = `${treeMargin}px`;
        greenPanel.style.boxSizing = "border-box";
        // Thêm panel vào container
        container.appendChild(greenPanel);

        // Tạo cây với các giá trị ngẫu nhiên không trùng lặp
        trees = [];
        for (let i = 0; i < 8; i++) {
            const value = randomValues[i];
            const tree = { id: i, value: value };
            trees.push(tree);

            const treeDiv = document.createElement("div");
            treeDiv.className = "tree-item";
            treeDiv.style.width = `${treeWidth}px`;
            treeDiv.style.height = `${treeHeight}px`;
            treeDiv.style.flexShrink = "0";
            treeDiv.style.position = "relative";

            treeDiv.innerHTML = `
                <img src="img/cayratrai.png" alt="Tree ${i}" style="width: 100%; height: 100%;">
                <div class="tree-value" style="
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    background-color: rgba(255, 255, 255, 0.95);
                    font-size: 18px;
                    font-family: Arial, sans-serif;
                    font-weight: bold;
                    padding: 5px;
                    border-radius: 3px;
                    color: #000;">${value}</div>
            `;
            greenPanel.appendChild(treeDiv);
        }

        // Bắt đầu đếm thời gian 3 phút thay vì 5 phút
        const countdownElement = document.getElementById("countdown-timer");
        const threeMinutes = 3 * 60; // 180 giây thay vì 300 giây
        startCountdown(threeMinutes, countdownElement);

        // Cập nhật trạng thái
        state = "created";
        updateInstructions("Nhấn 'Chia' để phân nhóm cây.");
    }

    function splitTrees() {
        if (state !== "created") {
            updateInstructions("Bạn cần 'Tạo' cây trước khi 'Chia' nhóm.");
            return;
        }

        const container = document.getElementById("cay-container");
        container.innerHTML = ""; // Xóa nội dung cũ

        if (!container.getAttribute("data-split-step")) {
            // Bước 1: Chia làm 2 nhóm, mỗi nhóm 4 cây
            container.setAttribute("data-split-step", "1");
            
            // Tạo 2 panel lớn
            for (let i = 0; i < 2; i++) {
                const groupPanel = document.createElement("div");
                groupPanel.className = "group-panel";
                groupPanel.style.width = `${4 * 150 + 3 * 15}px`; // 4 cây mỗi panel
                groupPanel.style.margin = "20px auto";
                groupPanel.style.height = "230px";
                groupPanel.style.border = "3px solid #4CAF50";
                groupPanel.style.backgroundColor = "#DFF0D8";
                groupPanel.style.borderRadius = "10px";
                groupPanel.style.display = "flex";
                groupPanel.style.justifyContent = "space-between";
                groupPanel.style.alignItems = "center";
                groupPanel.style.padding = "10px";
                groupPanel.style.boxSizing = "border-box";
                
                // Thêm 4 cây vào mỗi panel
                const startIndex = i * 4;
                const groupTrees = trees.slice(startIndex, startIndex + 4);
                
                groupTrees.forEach(tree => {
                    const treeDiv = document.createElement("div");
                    treeDiv.className = "tree-item";
                    treeDiv.style.width = "150px";
                    treeDiv.style.height = "200px";
                    treeDiv.style.position = "relative";

                    treeDiv.innerHTML = `
                        <img src="img/cayratrai.png" alt="Tree ${tree.id}" style="width: 100%; height: 100%;">
                        <div class="tree-value" style="
                            position: absolute;
                            top: -10px;
                            right: -10px;
                            background-color: rgba(255, 255, 255, 0.95);
                            font-size: 18px;
                            font-family: Arial, sans-serif;
                            font-weight: bold;
                            padding: 5px;
                            border-radius: 3px;
                            color: #000;">${tree.value}</div>
                    `;

                    groupPanel.appendChild(treeDiv);
                });
                
                container.appendChild(groupPanel);
                groups[i] = groupTrees;
            }

            updateInstructions("Nhấn 'Chia' lần nữa để chia thành thành các nhóm nhỏ hơn.");
        } else {
            // Bước 2: Chia thành 4 nhóm, mỗi nhóm 2 cây (code gốc của bạn)
            container.removeAttribute("data-split-step");
            
            // [Code gốc của bạn cho việc chia thành 4 nhóm]
            const groupWidth = 2 * 150 + 15;
            const groupHeight = 200 + 30;

            groups = [];
            for (let i = 0; i < 4; i++) {
                const groupPanel = document.createElement("div");
                groupPanel.className = "group-panel";
                groupPanel.style.width = `${groupWidth}px`;
                groupPanel.style.margin = "20px auto";
                groupPanel.style.height = `${groupHeight}px`;
                groupPanel.style.border = "3px solid #4CAF50";
                groupPanel.style.backgroundColor = "#DFF0D8";
                groupPanel.style.borderRadius = "10px";
                groupPanel.style.display = "flex";
                groupPanel.style.justifyContent = "space-between";
                groupPanel.style.alignItems = "center";
                groupPanel.style.padding = "10px";
                groupPanel.style.boxSizing = "border-box";
                groupPanel.style.cursor = "pointer";
                
                const groupTrees = [];
                for (let j = 0; j < 2; j++) {
                    const index = i * 2 + j;
                    const tree = trees[index];
                    groupTrees.push(tree);

                    const treeDiv = document.createElement("div");
                    treeDiv.className = "tree-item";
                    treeDiv.style.width = "150px";
                    treeDiv.style.height = "200px";
                    treeDiv.style.position = "relative";

                    treeDiv.innerHTML = `
                        <img src="img/cayratrai.png" alt="Tree ${tree.id}" style="width: 100%; height: 100%;">
                        <div class="tree-value" style="
                            position: absolute;
                            top: -10px;
                            right: -10px;
                            background-color: rgba(255, 255, 255, 0.95);
                            font-size: 18px;
                            font-family: Arial, sans-serif;
                            font-weight: bold;
                            padding: 5px;
                            border-radius: 3px;
                            color: #000;">${tree.value}</div>
                    `;

                    groupPanel.appendChild(treeDiv);
                }

                groupPanel.addEventListener("click", function () {
                    showGroupPanel(groups[i], i);
                });
                
                container.appendChild(groupPanel);
                groups.push(groupTrees);
            }

            state = "split";
            updateInstructions("Hãy chọn nhóm cây để sắp xếp theo yêu cầu!");
        }
    }

    function showGroupPanel(group, groupIndex) {
        group = groups[groupIndex]; // Đảm bảo sử dụng dữ liệu mới nhất
    
        // Số lượng cây và chiều rộng mỗi cây
        const treeWidth = 150;
        const treeHeight = 200;
        const treeGap = 10; // Khoảng cách giữa các cây (px)
    
        // Tính chiều rộng và chiều cao của panel nhạt
        const panelWidth = group.length * treeWidth + (group.length - 1) * treeGap;
        const panelHeight = treeHeight + 50; // Thêm khoảng trống cho nút hoàn tất
    
        // Tạo panel xanh dương đậm
        const darkBluePanel = document.createElement("div");
        darkBluePanel.className = "dark-blue-panel";
        darkBluePanel.style.position = "fixed";
        darkBluePanel.style.top = "50%";
        darkBluePanel.style.left = "50%";
        darkBluePanel.style.transform = "translate(-50%, -50%)";
        darkBluePanel.style.padding = "20px"; // Khoảng cách trong panel
        darkBluePanel.style.backgroundColor = "#89CFF0"; // Màu xanh dương đậm
        darkBluePanel.style.borderRadius = "15px";
        darkBluePanel.style.display = "flex";
        darkBluePanel.style.flexDirection = "column";
        darkBluePanel.style.alignItems = "center";
        darkBluePanel.style.width = `${panelWidth + 40}px`; // Thêm khoảng trống cho nút đóng
        darkBluePanel.style.height = `${panelHeight + 80}px`; // Thêm khoảng trống cho nút hoàn tất
        darkBluePanel.style.zIndex = "1000";
    
        // Tạo panel xanh dương nhạt chứa cây
        const lightBluePanel = document.createElement("div");
        lightBluePanel.className = "light-blue-panel";
        lightBluePanel.style.width = `${panelWidth}px`;
        lightBluePanel.style.height = `${treeHeight}px`;
        lightBluePanel.style.backgroundColor = "#C9EBF6"; // Màu xanh dương nhạt
        lightBluePanel.style.borderRadius = "10px";
        lightBluePanel.style.display = "flex";
        lightBluePanel.style.justifyContent = "space-between";
        lightBluePanel.style.alignItems = "center";
        lightBluePanel.style.boxSizing = "border-box";
        lightBluePanel.style.margin = "auto";
        lightBluePanel.style.gap = `${treeGap}px`; // Khoảng cách giữa các cây
    
        // Thêm lightBluePanel vào darkBluePanel
        darkBluePanel.appendChild(lightBluePanel);
    
        // Thêm các cây vào panel xanh dương nhạt
        group.forEach(tree => {
            const treeDiv = document.createElement("div");
            treeDiv.className = "tree-item";
            treeDiv.style.width = `${treeWidth}px`;
            treeDiv.style.height = `${treeHeight}px`;
            treeDiv.style.position = "relative";
    
            treeDiv.innerHTML = `
                <img src="img/cayratrai.png" alt="Tree ${tree.id}" style="width: 100%; height: 100%;">
                <div class="tree-value" style="
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background-color: rgba(255, 255, 255, 0.95);
                    font-size: 18px;
                    font-family: Arial, sans-serif;
                    font-weight: bold;
                    padding: 5px;
                    border-radius: 3px;
                    color: #000;">${tree.value}</div>
            `;
            lightBluePanel.appendChild(treeDiv);
        });
    
        // Kích hoạt tính năng kéo thả trong lightBluePanel
        new Sortable(lightBluePanel, {
            animation: 150,
            ghostClass: 'sortable-ghost',
            onEnd: function () {
                playSound();
                console.log("Cập nhật vị trí cây trong nhóm.");
            }
        });
    
        // Thêm nút Hoantat.png vào panel xanh dương đậm
        const completeButton = document.createElement("img");
        completeButton.src = "img/Hoantat.png";
        completeButton.alt = "Hoàn tất";
        completeButton.style.width = "170px";
        completeButton.style.height = "50px";
        completeButton.style.cursor = "pointer";
        completeButton.style.marginTop = "15px"; // Khoảng cách phía trên nút
        
    
        completeButton.addEventListener("click", function () {
            playSound();
            // Lấy thứ tự cây mới từ panel xanh dương nhạt
            const sortedTrees = Array.from(lightBluePanel.children).map(treeDiv => {
                const value = parseInt(treeDiv.querySelector(".tree-value").textContent);
                return group.find(tree => tree.value === value);
            });
    
            // Cập nhật thứ tự trong nhóm
            groups[groupIndex] = sortedTrees;
    
            // Cập nh  t hiển thị nhóm cây trong giao diện chính
            const groupPanel = document.getElementsByClassName("group-panel")[groupIndex];
            groupPanel.innerHTML = "";
            sortedTrees.forEach(tree => {
                const treeDiv = document.createElement("div");
                treeDiv.className = "tree-item";
                treeDiv.style.width = `${treeWidth}px`;
                treeDiv.style.height = `${treeHeight}px`;
                treeDiv.style.position = "relative";
    
                treeDiv.innerHTML = `
                    <img src="img/cayratrai.png" alt="Tree ${tree.id}" style="width: 100%; height: 100%;">
                    <div class="tree-value" style="
                        position: absolute;
                        top: -10px;
                        right: -10px;
                        background-color: rgba(255, 255, 255, 0.95);
                        font-size: 18px;
                        font-family: Arial, sans-serif;
                        font-weight: bold;
                        padding: 5px;
                        border-radius: 3px;
                        color: #000;">${tree.value}</div>
                `;
                groupPanel.appendChild(treeDiv);
            });
    
            alert("Nhóm cây đã được sắp xếp!");
            darkBluePanel.remove();
        });
    
        darkBluePanel.appendChild(completeButton);
    
        // Nút đóng panel
        const closeButton = document.createElement("img");
        closeButton.src = "img/dong.png";
        closeButton.alt = "Đóng";
        closeButton.style.position = "absolute";
        closeButton.style.top = "15px";
        closeButton.style.right = "20px";
        closeButton.style.width = "30px";
        closeButton.style.height = "30px";
        closeButton.style.cursor = "pointer";
    
        closeButton.addEventListener("click", function () {
            darkBluePanel.remove();
        });
    
        darkBluePanel.appendChild(closeButton);
    
        document.body.appendChild(darkBluePanel);
    }
    document.getElementById("hopnhat-image").addEventListener("click", function () {
        playSound();
        updateInstructions("Kéo thả các nhóm cây, để hợp nhất. Sau đó, hãy chọn nhóm cây muốn sắp xếp!");
    
        const groupPanels = document.getElementsByClassName("group-panel");
    
        for (let i = 0; i < groupPanels.length; i++) {
            const groupPanel = groupPanels[i];
            groupPanel.setAttribute("draggable", true);
    
            groupPanel.addEventListener("dragstart", function (e) {
                e.dataTransfer.setData("groupIndex", i);
            });
    
            groupPanel.addEventListener("dragover", function (e) {
                e.preventDefault();
            });
    
            groupPanel.addEventListener("drop", function (e) {
                e.preventDefault();
                const fromGroupIndex = parseInt(e.dataTransfer.getData("groupIndex"));
                const toGroupIndex = i;
    
                if (fromGroupIndex !== toGroupIndex) {
                    playSound();
                    const fromGroup = groups[fromGroupIndex];
                    const toGroup = groups[toGroupIndex];
    
                    const mergedGroup = [...toGroup, ...fromGroup]; // Append fromGroup after toGroup
                    groups[toGroupIndex] = mergedGroup;
    
                    updateGroupPanel(groupPanels[toGroupIndex], mergedGroup);
    
                    groupPanels[fromGroupIndex].style.display = "none";
                    groups[fromGroupIndex] = [];
    
                    groupPanels[toGroupIndex].style.width = `${mergedGroup.length * 150 + (mergedGroup.length - 1) * 15}px`;
    
                    alert("Hai nhóm cây đã được hợp nhất!");
                }
            });
        }
    });
    
    document.getElementById("ketthuc-image").addEventListener("click", function () {
        playSound();
        const countdownElement = document.getElementById("countdown-timer");
        const remainingTime = countdownElement.textContent.match(/(\d+):(\d+)/);
    
        // Kiểm tra còn thời gian không
        if (!remainingTime) {
            showRestartDialog();
            return;
        }

        const validationResult = validateAllSteps();
        if (!validationResult) {
            subtractTime(10);
            return;
        }

        // Tính toán thời gian hoàn thành dựa trên 3 phút
        const minutesLeft = parseInt(remainingTime[1]);
        const secondsLeft = parseInt(remainingTime[2]);
        const totalSecondsUsed = 3 * 60 - (minutesLeft * 60 + secondsLeft); // Thay đổi từ 5*60 thành 3*60
        const minutesUsed = Math.floor(totalSecondsUsed / 60);
        const secondsUsed = totalSecondsUsed % 60;
        const timeCompleted = `${minutesUsed}:${secondsUsed < 10 ? "0" : ""}${secondsUsed}`;

        clearInterval(countdownInterval);
        alert(`Chúc mừng bạn đã hoàn thành sắp xếp theo thuật toán Merge Sort, trong ${timeCompleted}!`);
    });

    function validateAllSteps() {
        const remainingGroups = groups.filter(group => group && group.length > 0);
        
        // Kiểm tra trạng thái hiện tại của game
        if (remainingGroups.length === 4) {
            // Bước 1: Kiểm tra 4 panel ban đầu đã được sắp xếp chưa
            const allPanelsSorted = remainingGroups.every(group => isSorted(group));
            if (!allPanelsSorted) {
                alert("Bạn cần sắp xếp các cây trong 4 nhóm cây đầu tiên theo thứ tự từ nhỏ đến lớn!");
                return false;
            }
            return false; // Cần tiếp tục hợp nhất thành 2 panel lớn
        } 
        else if (remainingGroups.length === 2) {
            // Bước 2: Kiểm tra 2 panel lớn sau khi hợp nhất
            const isValidSize = remainingGroups.every(group => group.length === 4);
            const isSortedCorrectly = remainingGroups.every(group => isSorted(group));
            
            if (!isValidSize || !isSortedCorrectly) {
                alert("Bạn cần hợp nhất thành 2 nhóm cây lớn và sắp xếp mỗi nhóm cây theo thứ tự từ nhỏ đến lớn!");
                return false;
            }
            return false; // Cần tiếp tục hợp nhất thành 1 panel duy nhất
        }
        else if (remainingGroups.length === 1) {
            // Bước 3: Kiểm tra panel cuối cùng
            const finalGroup = remainingGroups[0];
            
            if (finalGroup.length === 8 && isSorted(finalGroup)) {
                clearInterval(countdownInterval); // Dừng đồng hồ đếm ngược
                showVictoryDialog(); // Hiển thị dialog chiến thắng
                return true;
            }
            
            if (!isSorted(finalGroup)) {
                alert("Bạn cần sắp xếp các cây trong nhóm cuối cùng theo thứ tự từ nhỏ đến lớn!");
                return false;
            }
            
            return true; // Hoàn thành tất cả các bước
        }
        
        alert("Bạn cần thực hiện theo đúng thứ tự các bước!");
        return false;
    }

    function isSorted(group) {
        if (!group || group.length === 0) return false;
        
        const values = group.map(tree => tree.value);
        for (let i = 1; i < values.length; i++) {
            if (values[i] < values[i - 1]) {
                return false;
            }
        }
        return true;
    }

    function showRestartDialog() {
        const dialog = document.createElement("div");
        dialog.style.position = "fixed";
        dialog.style.top = "50%";
        dialog.style.left = "50%";
        dialog.style.transform = "translate(-50%, -50%)";
        dialog.style.backgroundColor = "#C9EBF6";
        dialog.style.padding = "20px";
        dialog.style.borderRadius = "10px";
        dialog.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        dialog.style.zIndex = "1000";
        dialog.style.fontFamily = "Arial, sans-serif";

        dialog.innerHTML = `
           <div style="text-align: center; margin-top: 50px; font-family: Arial, sans-serif;">
    <p style="margin-bottom: 20px;">Thời gian đã hết! Bạn có muốn chơi lại?</p>
    <div>
        <button onclick="location.reload()" style="margin-right: 10px; padding: 10px 20px; font-family: Arial, sans-serif;">Đồng ý</button>
        <button onclick="window.location.href='Trochoi.html'" style="padding: 10px 20px; font-family: Arial, sans-serif;">Không đồng ý</button>
    </div>
</div>
        `;

        document.body.appendChild(dialog);
    }

    function subtractTime(seconds) {
        const countdownElement = document.getElementById("countdown-timer");
        const remainingTime = countdownElement.textContent.match(/(\d+):(\d+)/);
        if (!remainingTime) return;

        let minutesLeft = parseInt(remainingTime[1]);
        let secondsLeft = parseInt(remainingTime[2]);
        let totalSeconds = minutesLeft * 60 + secondsLeft - seconds;

        if (totalSeconds <= 0) {
            countdownElement.textContent = "Hết giờ!";
            showRestartDialog();
            return;
        }

        minutesLeft = Math.floor(totalSeconds / 60);
        secondsLeft = totalSeconds % 60;
        countdownElement.textContent = `${minutesLeft}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
    }

    function validateInitialPanels() {
        for (let group of groups) {
            if (!isSorted(group)) {
                return false;
            }
        }
        return true;
    }
    
    function validateMergedPanels() {
        const mergedGroups = getMergedGroups();
        if (mergedGroups.length !== 2) {
            return false;
        }
        return true;
    }
    
    function validateSortedMergedPanels() {
        const mergedGroups = getMergedGroups(); // Lấy danh sách panel đã hợp nhất
        if (mergedGroups.length !== 2) { // Kiểm tra có đúng 2 panel lớn không
            return false;
        }
        return mergedGroups.every(isSorted); // Kiểm tra từng panel đã được sắp xếp
    }
    function validateFinalPanel() {
        const finalPanel = getFinalPanel();
        if (!finalPanel) {
            return false;
        }
        return isSorted(finalPanel);
    }

    function isSorted(group) {
        for (let i = 1; i < group.length; i++) {
            if (group[i].value < group[i - 1].value) { // Kiểm tra giá trị không giảm dần
                return false;
            }
        }
        return true;
    }
    
    
    function subtractTime(seconds) {
        const countdownElement = document.getElementById("countdown-timer");
        const remainingTime = countdownElement.textContent.match(/(\d+):(\d+)/);
        if (!remainingTime) return;
    
        let minutesLeft = parseInt(remainingTime[1]);
        let secondsLeft = parseInt(remainingTime[2]);
        let totalSeconds = minutesLeft * 60 + secondsLeft - seconds;
    
        if (totalSeconds <= 0) {
            countdownElement.textContent = "Hết giờ!";
            showRestartDialog();
            return;
        }
    
        minutesLeft = Math.floor(totalSeconds / 60);
        secondsLeft = totalSeconds % 60;
        countdownElement.textContent = `${minutesLeft}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
    }
    
    function showRestartDialog() {
        const dialog = document.createElement("div");
        dialog.style.position = "fixed";
        dialog.style.top = "50%";
        dialog.style.left = "50%";
        dialog.style.transform = "translate(-50%, -50%)";
        dialog.style.backgroundColor = "white";
        dialog.style.padding = "20px";
        dialog.style.borderRadius = "10px";
        dialog.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        dialog.style.zIndex = "1000";
    
        dialog.innerHTML = `
            <p style="margin-bottom: 20px;">Thời gian đã hết! Bạn có muốn chơi lại?</p>
            <button onclick="location.reload()" style="margin-right: 10px;">Đồng ý</button>
            <button onclick="window.location.href='Trochoi.html'">Không đồng ý</button>
        `;
    
        document.body.appendChild(dialog);
    }
    
    function getMergedGroups() {
        return groups.filter(group => group && group.length > 0);
    }
    
    function getFinalPanel() {
        const mergedGroups = getMergedGroups();
        if (mergedGroups.length !== 1) {
            return null;
        }
        return mergedGroups[0];
    }
    
    function updateGroupPanel(panel, group) {
        panel.innerHTML = ""; // Clear previous content
        group.forEach(tree => {
            const treeDiv = document.createElement("div");
            treeDiv.className = "tree-item";
            treeDiv.style.width = "150px";
            treeDiv.style.height = "200px";
            treeDiv.style.position = "relative";
    
            treeDiv.innerHTML = `
                <img src="img/cayratrai.png" alt="Tree ${tree.id}" style="width: 100%; height: 100%;">
                <div class="tree-value" style="
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    background-color: rgba(255, 255, 255, 0.95);
                    font-size: 18px;
                    font-family: Arial, sans-serif;
                    font-weight: bold;
                    padding: 5px;
                    border-radius: 3px;
                    color: #000;">${tree.value}</div>
            `;
            panel.appendChild(treeDiv);
        });
    }
    
// Hàm kiểm tra sắp xếp panel 
function isPanelSorted(panel) {
    const treeValues = Array.from(panel.children).map(treeDiv => {
        return parseInt(treeDiv.querySelector(".tree-value").textContent);
    });
    for (let i = 1; i < treeValues.length; i++) {
        if (treeValues[i] < treeValues[i - 1]) {
            return false;
        }
    }
    return true;
}

// Hàm hợp nhất hai panel cuối cùng và yêu cầu người chơi hợp nhất
function notifyMergeFinalPanels() {
    const remainingGroups = groups.filter(group => group.length > 0);
    if (remainingGroups.length !== 2) {
        alert("Thao tác sai thuật toán! Vẫn còn thời gian, hãy tranh thủ làm lại nhé.");
        subtractTime(10);
        return;
    }

    alert("Hãy kéo thả để hợp nhất hai nhóm cây cuối cùng thành một nhóm cây duy nhất!");
}

// Hàm xử lý khi người chơi click vào panel cuối cùng để sắp xếp
function setupFinalPanelSorting(panel, group) {
    const sortingPanel = document.createElement("div");
    sortingPanel.className = "sorting-panel";
    sortingPanel.style.position = "fixed";
    sortingPanel.style.top = "50%";
    sortingPanel.style.left = "50%";
    sortingPanel.style.transform = "translate(-50%, -50%)";
    sortingPanel.style.padding = "20px";
    sortingPanel.style.backgroundColor = "#89CFF0";
    sortingPanel.style.borderRadius = "15px";
    sortingPanel.style.display = "flex";
    sortingPanel.style.flexDirection = "column";
    sortingPanel.style.alignItems = "center";
    sortingPanel.style.zIndex = "1000";

    const treeContainer = document.createElement("div");
    treeContainer.style.display = "flex";
    treeContainer.style.gap = "10px";
    treeContainer.style.marginBottom = "20px";

    group.forEach(tree => {
        const treeDiv = document.createElement("div");
        treeDiv.className = "tree-item";
        treeDiv.style.width = "150px";
        treeDiv.style.height = "200px";

        treeDiv.innerHTML = `
            <img src="img/cayratrai.png" alt="Tree ${tree.id}" style="width: 100%; height: 100%;">
            <div class="tree-value" style="
                position: absolute;
                top: -10px;
                right: -10px;
                background-color: rgba(255, 255, 255, 0.95);
                font-size: 18px;
                font-family: Arial, sans-serif;
                font-weight: bold;
                padding: 5px;
                border-radius: 3px;
                color: #000;">${tree.value}</div>
        `;

        treeContainer.appendChild(treeDiv);
    });

    sortingPanel.appendChild(treeContainer);

    new Sortable(treeContainer, {
        animation: 150,
        ghostClass: 'sortable-ghost',
    });

    const completeButton = document.createElement("button");
    completeButton.textContent = "Hoàn tất sắp xếp";
    completeButton.style.padding = "10px 20px";
    completeButton.style.fontSize = "16px";
    completeButton.style.cursor = "pointer";

    completeButton.addEventListener("click", function () {
        if (isPanelSorted(treeContainer)) {
            alert("Bạn đã sắp xếp đúng thứ tự! Hãy nhấn Kết thúc để hoàn thành.");
            groups = [group]; // Cập nhật nhóm cuối cùng
            sortingPanel.remove();
        } else {
            alert("Sắp xếp sai thứ tự, hãy thử lại.");
        }
    });

    sortingPanel.appendChild(completeButton);
    document.body.appendChild(sortingPanel);
}



function showCompletionDialog() {
    // Tạo dialog container
    const dialog = document.createElement("div");
    dialog.style.position = "fixed";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, -50%)";
    dialog.style.backgroundColor = "white";
    dialog.style.padding = "20px";
    dialog.style.borderRadius = "10px";
    dialog.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    dialog.style.zIndex = "1000";
    dialog.style.textAlign = "center";

    // Thêm nội dung
    dialog.innerHTML = `
        <p style="margin-bottom: 20px; font-size: 18px;">Chúc mừng bạn đã hoàn thành thuật toán Merge Sort. Bạn có muốn chơi lại chứ?</p>
        <div style="display: flex; justify-content: center; gap: 20px;">
            <button onclick="location.reload()" 
                style="padding: 10px 20px; 
                background-color: #4CAF50; 
                color: white; 
                border: none; 
                border-radius: 5px; 
                cursor: pointer;">Có</button>
            <button onclick="window.location.href='Trochoi.html'" 
                style="padding: 10px 20px; 
                background-color: #f44336; 
                color: white; 
                border: none; 
                border-radius: 5px; 
                cursor: pointer;">Không</button>
        </div>
    `;

    document.body.appendChild(dialog);
}

// Hàm tính toán thời gian đã hoàn thành
function calculateElapsedTime() {
    const countdownElement = document.getElementById("countdown-timer");
    const currentTime = countdownElement.textContent.match(/\d+/g);
    const totalSecondsRemaining = parseInt(currentTime[0]) * 60 + parseInt(currentTime[1]);
    const totalSecondsElapsed = 180 - totalSecondsRemaining; // 180 giây = 3 phút ban đầu

    const minutes = Math.floor(totalSecondsElapsed / 60);
    const seconds = totalSecondsElapsed % 60;

    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Hàm trừ thời gian
function subtractTime(seconds) {
    const countdownElement = document.getElementById("countdown-timer");
    let currentTime = countdownElement.textContent.match(/\d+/g);
    if (!currentTime) return;

    let totalSeconds = parseInt(currentTime[0]) * 60 + parseInt(currentTime[1]);
    totalSeconds = Math.max(totalSeconds - seconds, 0);

    const minutes = Math.floor(totalSeconds / 60);
    const secondsLeft = totalSeconds % 60;
    countdownElement.textContent = `Thời gian: ${minutes < 10 ? "0" : ""}${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;

    if (totalSeconds === 0) {
        countdownElement.textContent = "Hết giờ!";
        countdownElement.style.backgroundColor = "#D32F2F";
        countdownElement.style.borderColor = "#B71C1C";
        alert("Đã hết thời gian, bạn hãy luyện tập thêm nhé!");
        showRestartButton();
    }
}

// Hàm hiển thị nút chơi lại
function showRestartButton() {
    const restartButton = document.createElement("button");
    restartButton.textContent = "Chơi lại";
    restartButton.style.position = "fixed";
    restartButton.style.top = "50%";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translate(-50%, -50%)";
    restartButton.style.padding = "10px 20px";
    restartButton.style.fontSize = "18px";
    restartButton.style.backgroundColor = "#4CAF50";
    restartButton.style.color = "#fff";
    restartButton.style.border = "none";
    restartButton.style.borderRadius = "5px";
    restartButton.style.cursor = "pointer";

    restartButton.addEventListener("click", function () {
        location.reload();
    });

    document.body.appendChild(restartButton);
}

// Gọi notifyMergeFinalPanels khi nhấn Kết thúc nếu còn 2 panel
const mergeButton = document.getElementById("ketthuc-image");
mergeButton.addEventListener("click", function () {
    const remainingGroups = groups.filter(group => group.length > 0);
    if (remainingGroups.length === 2) {
        // Hợp nhất 2 panel
        const mergedPanel = document.getElementById("merged-panel");
        remainingGroups[0].concat(remainingGroups[1]).forEach(item => mergedPanel.appendChild(item));
        
        // Sắp xếp các phần tử trong panel hợp nhất
        const items = Array.from(mergedPanel.children);
        const sortedItems = items.sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));
        sortedItems.forEach(item => mergedPanel.appendChild(item));

        // Kiểm tra và thông báo hoàn thành
        const remainingTime = document.getElementById("time-display").textContent;
        if (remainingTime !== "00:00") {
            clearInterval(countdownInterval);
            alert("Chúc mừng! Bạn đã hoàn thành thuật toán Merge Sort.");
        }
    } else if (remainingGroups.length === 1) {
        checkCompletion();
    } else {
        alert("Thao tác sai thuật toán! Vẫn còn thời gian, hãy tranh thủ làm lại nhé.");
        subtractTime(10);
    }
});

initializeGame();
});

// Sửa lại hàm startCountdown để chỉ chạy khi được gọi
let countdownInterval = null;

function startCountdown(duration, display) {
    // Xóa interval cũ nếu có
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    let timer = duration, minutes, seconds;
    
    // Thêm style cho display
    display.style.backgroundColor = "#C9EBF6"; // Màu xanh dương nhạt
    display.style.border = "6px solid #2196F3"; // Đổi màu viền sang xanh dương đậm hơn
    display.style.padding = "10px 20px";
    display.style.borderRadius = "10px";
    display.style.fontWeight = "bold";
    display.style.fontFamily = "Arial, sans-serif";

    countdownInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `Thời gian: ${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            display.textContent = "Hết giờ!";
            display.style.backgroundColor = "#D32F2F";
            display.style.borderColor = "#B71C1C";
            
            // Thêm code cho dialog hết giờ
            const timeoutDialog = document.createElement("div");
            timeoutDialog.style.position = "fixed";
            timeoutDialog.style.top = "50%";
            timeoutDialog.style.left = "50%";
            timeoutDialog.style.transform = "translate(-50%, -50%)";
            timeoutDialog.style.backgroundColor = "lightblue";
            timeoutDialog.style.padding = "30px";
            timeoutDialog.style.borderRadius = "15px";
            timeoutDialog.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
            timeoutDialog.style.zIndex = "1000";
            timeoutDialog.style.minWidth = "300px";
            timeoutDialog.style.textAlign = "center";
            timeoutDialog.style.fontFamily = "Arial, sans-serif";

            timeoutDialog.innerHTML = `
                <p style="font-weight: bold; color: darkblue; font-size: 18px; margin-bottom: 20px;">
                    Đã <span style="color: darkred;">hết thời gian</span>, bạn hãy luyện tập thêm nhé!
                </p>
                <p style="font-weight: bold; color: black; font-size: 18px; margin-bottom: 20px;">
                    Bạn có muốn chơi lại chứ?
                </p>
                <div style="display: flex; justify-content: center; gap: 20px;">
                    <button onclick="window.location.href='sapxep.html'" 
                        style="padding: 10px 20px; 
                        background-color: #4CAF50; 
                        color: white; 
                        border: none; 
                        border-radius: 5px; 
                        cursor: pointer;
                        font-weight: bold;">Đồng ý</button>
                    <button onclick="window.location.href='Trochoi.html'" 
                        style="padding: 10px 20px; 
                        background-color: #f44336; 
                        color: white; 
                        border: none; 
                        border-radius: 5px; 
                        cursor: pointer;
                        font-weight: bold;">Không đồng ý</button>
                </div>
            `;

            document.body.appendChild(timeoutDialog);
        }
    }, 1000);
}

function showVictoryDialog() {
    // Tạo dialog container
    const dialog = document.createElement("div");
    dialog.style.position = "fixed";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, -50%)";
    dialog.style.backgroundColor = "#87CEFA"; // Màu xanh nhạt
    dialog.style.padding = "30px";
    dialog.style.borderRadius = "15px";
    dialog.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
    dialog.style.zIndex = "1000";
    dialog.style.minWidth = "300px";
    dialog.style.textAlign = "center";
    dialog.style.display = "flex";
    dialog.style.flexDirection = "column";
    dialog.style.gap = "20px";
    dialog.style.fontFamily = "Arial, sans-serif";

    // Thêm nội dung
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = `
        <h2 style="color: #003399; margin-bottom: 15px; font-family: Arial, sans-serif;">Chúc mừng bạn đã thu hoạch trái cây thành công!</h2>
        <p style="color: #000; font-size: 16px; margin-bottom: 20px; font-family: Arial, sans-serif; font-weight: normal; line-height: 1.5; text-align: justify;">
            Bạn đã hoàn thành trò chơi sắp xếp theo thuật toán sắp xếp trộn (Merge Sort). Qua trò chơi, bạn không chỉ nắm được cách hoạt động của thuật toán mà còn hiểu rõ hơn về việc chia nhỏ, sắp xếp và hợp nhất dữ liệu. Hãy tiếp tục khám phá và chinh phục những thuật toán thú vị khác để rèn luyện tư duy logic và nâng cao kỹ năng của bạn nhé!
        </p>
        <p style="font-size: 18px; margin-bottom: 20px; font-family: Arial, sans-serif; font-weight: bold; color: #000;">
            Bạn có muốn chơi lại chứ?
        </p>
    `;

    // Container cho các nút
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "center";
    buttonContainer.style.gap = "20px";
    buttonContainer.style.marginTop = "auto"; // Đẩy xuống dưới cùng

    // Nút Đồng ý
    const acceptButton = document.createElement("button");
    acceptButton.textContent = "Đồng ý";
    acceptButton.style.padding = "10px 20px";
    acceptButton.style.backgroundColor = "#4CAF50";
    acceptButton.style.color = "white";
    acceptButton.style.border = "none";
    acceptButton.style.borderRadius = "5px";
    acceptButton.style.cursor = "pointer";
    acceptButton.style.fontSize = "16px";
    acceptButton.style.fontFamily = "Arial, sans-serif";

    // Nút Không đồng ý
    const declineButton = document.createElement("button");
    declineButton.textContent = "Không đồng ý";
    declineButton.style.padding = "10px 20px";
    declineButton.style.backgroundColor = "#f44336";
    declineButton.style.color = "white";
    declineButton.style.border = "none";
    declineButton.style.borderRadius = "5px";
    declineButton.style.cursor = "pointer";
    declineButton.style.fontSize = "16px";
    declineButton.style.fontFamily = "Arial, sans-serif";

    // Thêm sự kiện click cho các nút
    acceptButton.addEventListener("click", function() {
        playSound();
        window.location.href = "sapxep.html";
    });

    declineButton.addEventListener("click", function() {
        playSound();
        window.location.href = "Trochoi.html";
    });

    // Thêm hiệu ứng hover cho các nút
    [acceptButton, declineButton].forEach(button => {
        button.addEventListener("mouseenter", function() {
            this.style.opacity = "0.9";
            this.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseleave", function() {
            this.style.opacity = "1";
            this.style.transform = "scale(1)";
        });
        button.style.transition = "all 0.3s ease";
    });

    // Ghép các phần tử lại với nhau
    buttonContainer.appendChild(acceptButton);
    buttonContainer.appendChild(declineButton);
    dialog.appendChild(messageDiv);
    dialog.appendChild(buttonContainer);

    // Thêm dialog vào body
    document.body.appendChild(dialog);
}
