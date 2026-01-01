let url = '1NXfdD0-AKypCdLQv2bHWve9CSNtoxGQQaz_wOFiTDq4'


let currentURL = window.location.href;
let rootURL = window.location.protocol + "//" + window.location.host
function processString(input) {
  let result = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  result = result.replace(/Đ/g, 'D');
  result = result.replace(/đ/g, 'd');
  result = result.replace(/\s+/g, '-');
  return result;
}
let i = 0
fetchSheet.fetch({ gSheetId: url }).then((rows) => {
  console.log(rows);
  
  let items = ''
  for (let i in rows) {
    if (i > 10) break
    items += `<article class="eael-grid-post eael-post-grid-column" data-id="26709">
      <div class="eael-grid-post-holder">
        <div class="eael-grid-post-holder-inner">
          <div class="eael-entry-media">
            <div class="eael-entry-overlay fade-in">
              <i class="" aria-hidden="true"></i><a
                href="${rootURL}/blog/id/?${rows[i].ID}"></a>
            </div>
            <div class="eael-entry-thumbnail eael-image-ratio">
              <img width="354" height="266"
                src="${rows[i].Banner}"
                class="attachment-full size-full wp-image-26710"
                alt="${rows[i]['Tiêu đề']}"
                decoding="async" loading="lazy"/>
            </div>
          </div>
          <div class="eael-entry-wrapper">
            <header class="eael-entry-header">
              <h2 class="eael-entry-title">
                <a class="eael-grid-post-link"
                  href="${rootURL}/blog/id/?${rows[i].ID}">${rows[i]['Tiêu đề']}</a>
              </h2>
            </header>
            <div class="eael-entry-header-after">
              <div class="eael-entry-meta">
                <span class="eael-posted-on"><time
                  datetime="${rows[i]['Thời gian']}">${rows[i]['Thời gian']}</time></span>
              </div>
            </div>
            <div class="eael-entry-content">
              <div class="eael-grid-post-excerpt">
                <p class="g">
                  ${f()}
                </p > <a
    href="${rootURL}/blog/id/?${rows[i].ID}=${processString(rows[i]['Tiêu đề'])}"
    class="eael-post-elements-readmore-btn">Xem
    thêm</a>
              </div >
            </div >
          </div >
        </div >
      </div >
    </article > `
    i++
    function f() {
      let c = ''
      for (let d in rows[i]['Nội dung'].split('=')) {
        let l = rows[i]['Nội dung'].split('=')
        if (l[d].split('|')[0] == 'content') {
          c = l[d].split('|')[1]
          break
        }
      }
      return c
    }
  }
  document.querySelector('.vamlist').innerHTML = items
})
