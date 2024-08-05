if (c == `${o}/admin/Articlemanagement/?create`) {
    Blogcreate()
}
function Blogcreate() {
    vam('#main').innerHTML = `
        <div id="blog">
            <div class="nav">
                <h1>Tạo bài viết</h1>
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
}

function createText() {
    vam('.root>.nd').innerHTML += `<p class="post-input placeholder" contenteditable="true">Viết nội dung vào đây</p>`
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
            vam('.root>.nd').innerHTML += `
                <div>
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
