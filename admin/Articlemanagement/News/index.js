
function Blog() {
    vam('#main').innerHTML = `
        <div id="blog">
            <div class="nav">
                <h1>Quản lý bài viết</h1>
            </div>
            <div class="main">
                <div class="wrap">
                    <div class="wrap_nav">
                        <div>
                            
                        </div>
                        <div>
                            <a class="bt" href="${o}/admin/Articlemanagement/?create">Tạp bài viết</a>
                        </div>
                    </div>
                    <div class="wrap_title">
                        <p></p>
                        <p>Tiêu đề bài viết</p>
                        <p>Ngày viết</p>
                        <p>Thời gian sửa gần nhất</p>
                        <p></p>
                    </div>
                    <div class="wrap_main">
                        
                    </div>
                </div>
            </div>
        </div>
    `
    Load()
}

Blog()
async function Load() {
    let data = await fetchSheet.fetch({ gSheetId: '1NXfdD0-AKypCdLQv2bHWve9CSNtoxGQQaz_wOFiTDq4' }).then((rows) => { return rows })
    vam('#blog .wrap_main').innerHTML = (
        `<div class="boxlist">
            <div class="banner">
                <img src="${data[0]['Banner']}">
            </div>
        </div>`
    )
}
