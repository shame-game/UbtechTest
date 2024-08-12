if (c == `${o}/admin/Articlemanagement/?create`) {
    Blogcreate()
}
function Blogcreate() {
    vam('#main').innerHTML = `
        <div id="blog">
            <div class="nav blogcreate">
                <span class="hispage">Quay lại</span>
                <h1>Tạo bài viết</h1>
                <span id="savepaege">Lưu bài viết</span>
            </div>
            <div class="main">
                <div class="wrap">
                    <div class="title">
                        <input type="text" placeholder="Nhập tiêu đề của bài viết">
                    </div>
                    <div class="root">
                        <div class="nd"></div>
                        <div class="wrapadd">
                            <div class="add">Thêm thành phần</div>
                            <div class="moreadd">
                                <div class="text">Văn bản</div>
                                <div>
                                    <img src="blob:http://127.0.0.1:5500/687d2cf0-2832-4248-ba1d-7928448f901a">
                                    <input type="file" id="imageInput" accept="image/*" style="display:none">
                                    <div class="img">Hình ảnh</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    vam('.text').onclick = () => {
        createText()
    }
    vam('.img').onclick = () => {
        createImg()
    }
    vam('.hispage').addEventListener("click", function () {
        window.location.href = `${o}/admin/Articlemanagement/`;
    });
    vam('#savepaege').addEventListener('click', () => {
        vams('.root>.nd>.vamc').forEach(t => {
            console.log(t.tagName);
        })
    })
}

function createText() {
    vam('.root>.nd').innerHTML += `<p class="post-input placeholder vamc" contenteditable="true">Viết nội dung vào đây</p>`
    vams('.post-input').forEach((t) => {
        t.addEventListener('focus', function () {
            if (this.textContent === 'Viết nội dung vào đây') {
                this.textContent = '';
                this.classList.remove('placeholder');
            }
        });

        t.addEventListener('blur', function () {
            if (this.textContent.trim() === '') {
                this.textContent = 'Viết nội dung vào đây';
                this.classList.add('placeholder');
            }
        });
    })
    vam('.text').onclick = () => {
        createText()
    }
    vam('.img').onclick = () => {
        createImg()
    }
}
function createImg() {
    vam('#imageInput').click()
    vam('#imageInput').addEventListener('change', () => {
        if (vam('#imageInput').files.length > 0) {
            const file = vam('#imageInput').files[0];
            const imageUrl = URL.createObjectURL(file);
            console.log(convertBlobToDataUrl(imageUrl));

            vam('.root>.nd').innerHTML += `
                <div class="vamc">
                    <img src="${imageUrl}"/>
                    <div>
                        
                    </div>
                </div>`
        }
    });
    vam('.text').onclick = () => {
        createText()
    }

}
function convertBlobToDataUrl(blobUrl) {
    return blobUrl.replace('blob:', 'data:image/png;base64,');
}