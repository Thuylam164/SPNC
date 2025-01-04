// Thêm hàm phát âm thanh click với âm lượng nhỏ hơn
function playClickSound() {
    const clickSound = new Audio('sound/pop-sound.mp3');
    clickSound.volume = 0.3; // Đặt âm lượng bằng 30% so với mức tối đa
    clickSound.play();
}

// Phát nhạc tự động khi trang được tải (nếu trình duyệt không chặn âm thanh)
window.onload = function() {
    const audio = document.getElementById("background-music");
    audio.play();  // Phát nhạc khi trang được tải
};

// Kích hoạt nhạc khi người dùng nhấn vào nút bắt đầu
document.getElementById("start-button").addEventListener("click", function() {
    playClickSound(); // Thêm âm thanh click
    const audio = document.getElementById("background-music");

    // Phát nhạc khi người dùng nhấn vào start-button
    audio.play();

    const startButton = document.getElementById("start-button");

    // Thêm lớp 'morph' vào hình ảnh start.png để thực hiện hiệu ứng phóng to và biến mất
    startButton.classList.add("morph");

    // Sau khi hiệu ứng phóng to hoàn tất (1 giây), thay đổi nền và ẩn hình ảnh
    setTimeout(function() {
        // Thay đổi background thành thoai1.png
        document.body.style.backgroundImage = "url('img/thoai1.png')";
        // Hiển thị hình ảnh sangphai1.png
        document.body.classList.add("with-sangphai1");
        // Ẩn hình ảnh start.png
        startButton.style.display = "none";
    }, 1000); // Thời gian này phải khớp với thời gian hiệu ứng phóng to (1s)
});
// Thêm sự kiện click cho hình ảnh sangphai1.png
document.addEventListener('DOMContentLoaded', function() {
    const sangphai1 = document.getElementById("sangphai1");
    if (sangphai1) {
        sangphai1.addEventListener("click", function() {
            console.log("Clicked sangphai1"); // Debug log
            playClickSound();
            
            // Ẩn sangphai1
            sangphai1.style.display = "none";

            // Chuyển background
            document.body.style.backgroundImage = "url('img/thoai2.png')";

            // Tìm hoặc tạo sangphai2
            let sangphai2 = document.getElementById("sangphai2");
            let sangtrai2 = document.getElementById("sangtrai2");

            // Nếu không tìm thấy, tạo mới các phần tử
            if (!sangphai2) {
                sangphai2 = document.createElement("img");
                sangphai2.id = "sangphai2";
                sangphai2.src = "img/sangphai2.png";
                sangphai2.alt = "Sang Phai 2";
                document.body.appendChild(sangphai2);
            }

            if (!sangtrai2) {
                sangtrai2 = document.createElement("img");
                sangtrai2.id = "sangtrai2";
                sangtrai2.src = "img/sangtrai2.png";
                sangtrai2.alt = "Sang Trai 2";
                document.body.appendChild(sangtrai2);
            }

            // Thiết lập style cho sangphai2
            Object.assign(sangphai2.style, {
                position: "fixed",
                top: "calc(50%)",
                right: "11cm",
                transform: "translateY(-50%)",
                zIndex: "10",
                width: "48px",
                cursor: "pointer",
                display: "block"
            });

            // Thiết lập style cho sangtrai2
            Object.assign(sangtrai2.style, {
                position: "fixed",
                top: "calc(50%)",
                left: "3cm",
                transform: "translateY(-50%)",
                zIndex: "10",
                width: "48px",
                cursor: "pointer",
                display: "block"
            });

            // Thêm classes vào body
            document.body.classList.add("with-sangphai2", "with-sangtrai2");

            // Thêm event listeners
            sangphai2.addEventListener("click", handleSangPhai2Click);
            sangtrai2.addEventListener("click", handleSangTrai2Click);

            // Debug log
            console.log("sangphai2 display:", sangphai2.style.display);
            console.log("sangtrai2 display:", sangtrai2.style.display);
            console.log("body classes:", document.body.classList);
        });
    }
});

// Hiển thị/ẩn bảng hướng dẫn khi nhấn vào huongdan.png
document.getElementById("guide-button").addEventListener("click", function () {
    playClickSound(); // Thêm âm thanh click
    const guideModal = document.getElementById("guide-modal");

    // Kiểm tra bảng hướng dẫn hiện tại là hiển thị hay ẩn
    if (guideModal.classList.contains("show")) {
        // Nếu bảng hướng dẫn đang hiển thị, ẩn nó
        guideModal.classList.remove("show");
    } else {
        // Nếu bảng hướng dẫn chưa hiển thị, hiển thị nó
        guideModal.classList.add("show");
    }
});

// Ẩn bảng hướng dẫn khi nhấn vào tat.png
document.getElementById("close-button").addEventListener("click", function () {
    playClickSound(); // Thêm âm thanh click
    const guideModal = document.getElementById("guide-modal");
    guideModal.classList.remove("show");
}); 

// Cập nhật lại trang web khi nhấn vào hình ảnh quaylai.png
document.getElementById("back-button").addEventListener("click", function () {
    playClickSound(); // Thêm âm thanh click
    location.reload(); // Tải lại trang web
});

// Bật/tắt nhạc khi nhấn vào amthanh.png
document.getElementById("sound-button").addEventListener("click", function () {
    playClickSound(); // Thêm âm thanh click
    const audio = document.getElementById("background-music");
    const soundButton = document.getElementById("sound-button");

    if (audio.paused) {
        audio.play(); // Nếu nhạc đang tạm dừng, phát nhạc
        soundButton.src = "img/amthanh.png"; // Hiển thị amthanh.png
    } else {
        audio.pause(); // Nếu nhạc đang phát, tạm dừng nhạc
        soundButton.src = "img/tatamthanh.png"; // Thay bằng tatamthanh.png
    }
});



// Sự kiện khi người dùng click vào nút play
document.getElementById("play-button").addEventListener("click", function () {
    playClickSound(); // Thêm âm thanh click
    // Chuyển sang trang sapxep.html
    window.location.href = "sapxep.html";
});

// Thêm sự kiện click độc lập cho play5
document.addEventListener('DOMContentLoaded', function() {
    const play5Element = document.getElementById('play5');
    if (play5Element) {
        play5Element.addEventListener('click', function() {
            window.location.href = 'sapxep.html';
        });
    }
});

// Hàm xử lý click cho sangphai2
function handleSangPhai2Click() {
    console.log("Clicked sangphai2"); // Debug log
    playClickSound();

    // Tìm và ẩn sangphai2 và sangtrai2
    const sangphai2 = document.getElementById("sangphai2");
    const sangtrai2 = document.getElementById("sangtrai2");
    
    if (sangphai2) sangphai2.style.display = "none";
    if (sangtrai2) sangtrai2.style.display = "none";

    // Xóa classes cũ
    document.body.classList.remove("with-sangphai2", "with-sangtrai2");

    // Chuyển background
    document.body.style.backgroundImage = "url('img/thoai3.png')";

    // Tìm sangphai3 và sangtrai3
    const sangphai3 = document.getElementById("sangphai3");
    const sangtrai3 = document.getElementById("sangtrai3");

    if (!sangphai3 || !sangtrai3) {
        console.error("sangphai3 or sangtrai3 not found"); // Debug log
        return;
    }

    // Hiển thị sangphai3 và sangtrai3
    sangphai3.style.display = "block";
    sangtrai3.style.display = "block";

    // Thêm classes mới
    document.body.classList.add("with-sangphai3", "with-sangtrai3");

    // Debug log
    console.log("sangphai3 display:", sangphai3.style.display);
    console.log("sangtrai3 display:", sangtrai3.style.display);
    console.log("body classes:", document.body.classList);

    // Thêm event listener cho sangphai3
    sangphai3.addEventListener("click", handleSangPhai3Click);
}

// Hàm xử lý click cho sangphai3
function handleSangPhai3Click() {
    console.log("Clicked sangphai3"); // Debug log
    playClickSound();

    // Tìm và ẩn sangphai3 và sangtrai3
    const sangphai3 = document.getElementById("sangphai3");
    const sangtrai3 = document.getElementById("sangtrai3");
    
    if (sangphai3) sangphai3.style.display = "none";
    if (sangtrai3) sangtrai3.style.display = "none";

    // Xóa classes cũ
    document.body.classList.remove("with-sangphai3", "with-sangtrai3");

    // Chuyển background
    document.body.style.backgroundImage = "url('img/thoai4.png')";

    // Tìm sangphai4 và sangtrai4
    const sangphai4 = document.getElementById("sangphai4");
    const sangtrai4 = document.getElementById("sangtrai4");

    if (!sangphai4 || !sangtrai4) {
        console.error("sangphai4 or sangtrai4 not found"); // Debug log
        return;
    }

    // Hiển thị sangphai4 và sangtrai4
    sangphai4.style.display = "block";
    sangtrai4.style.display = "block";

    // Thêm classes mới
    document.body.classList.add("with-sangphai4", "with-sangtrai4");

    // Debug log
    console.log("sangphai4 display:", sangphai4.style.display);
    console.log("sangtrai4 display:", sangtrai4.style.display);
    console.log("body classes:", document.body.classList);

    // Thêm event listener cho sangphai4
    sangphai4.addEventListener("click", handleSangPhai4Click);
}

// Hàm xử lý click cho sangphai4
function handleSangPhai4Click() {
    console.log("Clicked sangphai4"); // Debug log
    playClickSound();

    // Tìm và ẩn sangphai4 và sangtrai4
    const sangphai4 = document.getElementById("sangphai4");
    const sangtrai4 = document.getElementById("sangtrai4");
    
    if (sangphai4) sangphai4.style.display = "none";
    if (sangtrai4) sangtrai4.style.display = "none";

    // Chuyển background
    document.body.style.backgroundImage = "url('img/nentrochoi.png')";

    // Tạo và hiển thị banghuongdan
    const banghuongdan = document.createElement("img");
    banghuongdan.id = "banghuongdan";
    banghuongdan.src = "img/banghuongdan.png";
    Object.assign(banghuongdan.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1",
        maxWidth: "70%",
        display: "block"
    });
    document.body.appendChild(banghuongdan);

    // Tạo sangtrai5
    const sangtrai5 = document.createElement("img");
    sangtrai5.id = "sangtrai5";
    sangtrai5.src = "img/sangtrai5.png";
    Object.assign(sangtrai5.style, {
        position: "fixed",
        top: "75%",
        left: "10cm",
        zIndex: "2",
        width: "60px",
        cursor: "pointer",
        display: "block",
        pointerEvents: "auto" // Đảm bảo có thể click
    });
    document.body.appendChild(sangtrai5);

    // Tạo play5
    const play5 = document.createElement("img");
    play5.id = "play5";
    play5.src = "img/play5.png";
    Object.assign(play5.style, {
        position: "fixed",
        top: "75%",
        right: "9cm",
        zIndex: "2",
        width: "55px",
        cursor: "pointer",
        display: "block",
        pointerEvents: "auto" // Đảm bảo có thể click
    });
    document.body.appendChild(play5);

    // Thêm event listener cho sangtrai5 với xử lý trực tiếp
    sangtrai5.onclick = function() {
        console.log("Clicked sangtrai5"); // Debug log
        playClickSound();
        
        // Ẩn các phần tử
        sangtrai5.style.display = "none";
        play5.style.display = "none";
        banghuongdan.style.display = "none";

        // Chuyển background
        document.body.style.backgroundImage = "url('img/thoai4.png')";

        // Tạo và hiển thị sangphai4 và sangtrai4
        const newSangphai4 = document.createElement("img");
        const newSangtrai4 = document.createElement("img");

        // Thiết lập sangphai4
        newSangphai4.id = "sangphai4";
        newSangphai4.src = "img/sangphai4.png";
        Object.assign(newSangphai4.style, {
            position: "fixed",
            top: "calc(50%)",
            right: "11cm",
            transform: "translateY(-50%)",
            zIndex: "10",
            width: "48px",
            cursor: "pointer",
            display: "block",
            pointerEvents: "auto"
        });

        // Thiết lập sangtrai4
        newSangtrai4.id = "sangtrai4";
        newSangtrai4.src = "img/sangtrai4.png";
        Object.assign(newSangtrai4.style, {
            position: "fixed",
            top: "calc(50%)",
            left: "7cm",
            transform: "translateY(-50%)",
            zIndex: "10",
            width: "53px",
            cursor: "pointer",
            display: "block",
            pointerEvents: "auto"
        });

        document.body.appendChild(newSangphai4);
        document.body.appendChild(newSangtrai4);

        // Thêm event listener cho sangphai4 mới
        newSangphai4.onclick = function() {
            console.log("Clicked new sangphai4"); // Debug log
            playClickSound();
            
            // Ẩn sangphai4 và sangtrai4
            newSangphai4.style.display = "none";
            newSangtrai4.style.display = "none";
            
            // Chuyển background về nentrongrau
            document.body.style.backgroundImage = "url('img/nentrochoi.png')";
            
            // Hiển thị lại banghuongdan, play5 và sangtrai5
            banghuongdan.style.display = "block";
            play5.style.display = "block";
            sangtrai5.style.display = "block";
        };

        // Thêm event listener cho sangtrai4
        newSangtrai4.addEventListener("click", handleSangTrai4Click);
    };

    // Event listener cho play5
    play5.onclick = function() {
        playClickSound();
        window.location.href = "sapxep.html";
    };
}

// Hàm xử lý click cho sangtrai2
function handleSangTrai2Click() {
    console.log("Clicked sangtrai2"); // Debug log
    playClickSound();

    // Tìm và ẩn sangphai2 và sangtrai2
    const sangphai2 = document.getElementById("sangphai2");
    const sangtrai2 = document.getElementById("sangtrai2");
    
    if (sangphai2) sangphai2.style.display = "none";
    if (sangtrai2) sangtrai2.style.display = "none";

    // Xóa classes cũ
    document.body.classList.remove("with-sangphai2", "with-sangtrai2");

    // Chuyển background
    document.body.style.backgroundImage = "url('img/thoai1.png')";

    // Tìm hoặc tạo sangphai1
    const sangphai1 = document.getElementById("sangphai1");
    if (!sangphai1) {
        console.error("sangphai1 not found"); // Debug log
        return;
    }

    // Hiển thị sangphai1
    sangphai1.style.display = "block";
    
    // Debug log
    console.log("sangphai1 display:", sangphai1.style.display);
    console.log("body background changed to thoai1.png");
}

// Thêm event listener cho sangtrai2
document.addEventListener('DOMContentLoaded', function() {
    const sangtrai2 = document.getElementById("sangtrai2");
    if (sangtrai2) {
        sangtrai2.addEventListener("click", handleSangTrai2Click);
    } else {
        console.error("sangtrai2 not found"); // Debug log
    }
});

// Hàm xử lý click cho sangtrai3
function handleSangTrai3Click() {
    console.log("Clicked sangtrai3"); // Debug log
    playClickSound();

    // Tìm và ẩn sangphai3 và sangtrai3
    const sangphai3 = document.getElementById("sangphai3");
    const sangtrai3 = document.getElementById("sangtrai3");
    
    if (sangphai3) sangphai3.style.display = "none";
    if (sangtrai3) sangtrai3.style.display = "none";

    // Xóa classes cũ
    document.body.classList.remove("with-sangphai3", "with-sangtrai3");

    // Chuyển background
    document.body.style.backgroundImage = "url('img/thoai2.png')";

    // Tạo hoặc tìm sangphai2 và sangtrai2
    let sangphai2 = document.getElementById("sangphai2");
    let sangtrai2 = document.getElementById("sangtrai2");

    // Nếu không tìm thấy, tạo mới các phần tử
    if (!sangphai2) {
        sangphai2 = document.createElement("img");
        sangphai2.id = "sangphai2";
        sangphai2.src = "img/sangphai2.png";
        sangphai2.alt = "Sang Phai 2";
        document.body.appendChild(sangphai2);
    }

    if (!sangtrai2) {
        sangtrai2 = document.createElement("img");
        sangtrai2.id = "sangtrai2";
        sangtrai2.src = "img/sangtrai2.png";
        sangtrai2.alt = "Sang Trai 2";
        document.body.appendChild(sangtrai2);
    }

    // Thiết lập style cho sangphai2
    Object.assign(sangphai2.style, {
        position: "fixed",
        top: "calc(50%)",
        right: "11cm",
        transform: "translateY(-50%)",
        zIndex: "10",
        width: "48px",
        cursor: "pointer",
        display: "block"
    });

    // Thiết lập style cho sangtrai2
    Object.assign(sangtrai2.style, {
        position: "fixed",
        top: "calc(50%)",
        left: "3cm",
        transform: "translateY(-50%)",
        zIndex: "10",
        width: "48px",
        cursor: "pointer",
        display: "block"
    });

    // Thêm classes vào body
    document.body.classList.add("with-sangphai2", "with-sangtrai2");

    // Thêm event listeners
    sangphai2.addEventListener("click", handleSangPhai2Click);
    sangtrai2.addEventListener("click", handleSangTrai2Click);

    // Debug log
    console.log("sangphai2 display:", sangphai2.style.display);
    console.log("sangtrai2 display:", sangtrai2.style.display);
    console.log("body classes:", document.body.classList);
}

// Thêm event listener cho sangtrai3
document.addEventListener('DOMContentLoaded', function() {
    const sangtrai3 = document.getElementById("sangtrai3");
    if (sangtrai3) {
        sangtrai3.addEventListener("click", handleSangTrai3Click);
    } else {
        console.error("sangtrai3 not found"); // Debug log
    }
});

// Hàm xử lý click cho sangtrai4
function handleSangTrai4Click() {
    console.log("Clicked sangtrai4"); // Debug log
    playClickSound();

    // Tìm và ẩn sangphai4 và sangtrai4
    const sangphai4 = document.getElementById("sangphai4");
    const sangtrai4 = document.getElementById("sangtrai4");
    
    if (sangphai4) sangphai4.style.display = "none";
    if (sangtrai4) sangtrai4.style.display = "none";

    // Xóa classes cũ
    document.body.classList.remove("with-sangphai4", "with-sangtrai4");

    // Chuyển background
    document.body.style.backgroundImage = "url('img/thoai3.png')";

    // Tạo hoặc tìm sangphai3 và sangtrai3
    let sangphai3 = document.getElementById("sangphai3");
    let sangtrai3 = document.getElementById("sangtrai3");

    // Nếu không tìm thấy, tạo mới các phần tử
    if (!sangphai3) {
        sangphai3 = document.createElement("img");
        sangphai3.id = "sangphai3";
        sangphai3.src = "img/sangphai3.png";
        sangphai3.alt = "Sang Phai 3";
        document.body.appendChild(sangphai3);
    }

    if (!sangtrai3) {
        sangtrai3 = document.createElement("img");
        sangtrai3.id = "sangtrai3";
        sangtrai3.src = "img/sangtrai3.png";
        sangtrai3.alt = "Sang Trai 3";
        document.body.appendChild(sangtrai3);
    }

    // Thiết lập style cho sangphai3
    Object.assign(sangphai3.style, {
        position: "fixed",
        top: "calc(50%)",
        right: "5cm",
        transform: "translateY(-50%)",
        zIndex: "10",
        width: "48px",
        cursor: "pointer",
        display: "block"
    });

    // Thiết lập style cho sangtrai3
    Object.assign(sangtrai3.style, {
        position: "fixed",
        top: "calc(50%)",
        left: "7cm",
        transform: "translateY(-50%)",
        zIndex: "10",
        width: "48px",
        cursor: "pointer",
        display: "block"
    });

    // Thêm classes vào body
    document.body.classList.add("with-sangphai3", "with-sangtrai3");

    // Thêm event listeners
    sangphai3.addEventListener("click", handleSangPhai3Click);
    sangtrai3.addEventListener("click", handleSangTrai3Click);

    // Debug log
    console.log("sangphai3 display:", sangphai3.style.display);
    console.log("sangtrai3 display:", sangtrai3.style.display);
    console.log("body classes:", document.body.classList);
}

// Thêm event listener cho sangtrai4
document.addEventListener('DOMContentLoaded', function() {
    const sangtrai4 = document.getElementById("sangtrai4");
    if (sangtrai4) {
        sangtrai4.addEventListener("click", handleSangTrai4Click);
    } else {
        console.error("sangtrai4 not found"); // Debug log
    }
});

// Hàm xử lý click cho sangtrai5
function handleSangTrai5Click() {
    console.log("Clicked sangtrai5"); // Debug log
    playClickSound();

    // Tìm và ẩn sangtrai5, play5 và banghuongdan
    const sangtrai5 = document.getElementById("sangtrai5");
    const play5 = document.getElementById("play5");
    const banghuongdan = document.getElementById("banghuongdan");
    
    if (sangtrai5) sangtrai5.style.display = "none";
    if (play5) play5.style.display = "none";
    if (banghuongdan) banghuongdan.style.display = "none";

    // Chuyển background
    document.body.style.backgroundImage = "url('img/thoai4.png')";

    // Tạo hoặc tìm sangphai4 và sangtrai4
    let sangphai4 = document.getElementById("sangphai4");
    let sangtrai4 = document.getElementById("sangtrai4");

    // Nếu không tìm thấy, tạo mới các phần tử
    if (!sangphai4) {
        sangphai4 = document.createElement("img");
        sangphai4.id = "sangphai4";
        sangphai4.src = "img/sangphai4.png";
        sangphai4.alt = "Sang Phai 4";
        document.body.appendChild(sangphai4);
    }

    if (!sangtrai4) {
        sangtrai4 = document.createElement("img");
        sangtrai4.id = "sangtrai4";
        sangtrai4.src = "img/sangtrai4.png";
        sangtrai4.alt = "Sang Trai 4";
        document.body.appendChild(sangtrai4);
    }

    // Thiết lập style cho sangphai4
    Object.assign(sangphai4.style, {
        position: "fixed",
        top: "calc(50%)",
        right: "11cm",
        transform: "translateY(-50%)",
        zIndex: "10",
        width: "48px",
        cursor: "pointer",
        display: "block"
    });

    // Thiết lập style cho sangtrai4
    Object.assign(sangtrai4.style, {
        position: "fixed",
        top: "calc(50% + 2.2mm)",
        left: "7cm",
        transform: "translateY(-50%)",
        zIndex: "10",
        width: "53px",
        cursor: "pointer",
        display: "block"
    });

    // Thêm classes vào body
    document.body.classList.add("with-sangphai4", "with-sangtrai4");

    // Thêm event listeners
    sangphai4.addEventListener("click", handleSangPhai4Click);
    sangtrai4.addEventListener("click", handleSangTrai4Click);

    // Debug log
    console.log("sangphai4 display:", sangphai4.style.display);
    console.log("sangtrai4 display:", sangtrai4.style.display);
    console.log("body classes:", document.body.classList);
}

// Thêm event listener cho sangtrai5
document.addEventListener('DOMContentLoaded', function() {
    const sangtrai5 = document.getElementById("sangtrai5");
    if (sangtrai5) {
        sangtrai5.addEventListener("click", handleSangTrai5Click);
    } else {
        console.error("sangtrai5 not found"); // Debug log
    }
});


