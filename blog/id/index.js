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
fetchSheet
  .fetch({ gSheetId: url }).then((rows) => {
    for (let i in rows) {
      if (currentURL == `${rootURL}/blog/id/?${rows[i].ID}=${processString(rows[i]['Tiêu đề'])}`) load(rows[i])
      break
    }
  })

async function load(f) {
  document.querySelector('.entry-title').innerText = f['Tiêu đề']
  document.querySelector('.vamtime').innerText = f['Thời gian']
  document.querySelector('.vamdm').innerText = f['Danh mục']
  let items = ''
  f['Nội dung'].split('=').forEach(element => {
    if (element.split('|')[0] == 'content') {
      items += `<div class="v1"><p>${element.split('|')[1]}</p></div>`
    } else if (element.split('|')[0] == 'img') {
      items += `<div style="width: 639px" class="wp-caption aligncenter">
      <img src="${element.split('|')[1]}" width="629" height="473">
      <p class="wp-caption-text">${element.split('|')[2]}</p></div>`
    }

  });
  let data = await fetchSheet.fetch({ gSheetId: url }).then((rows) => {
    let Vcategory = {}
    for (let i in rows) {
      Vcategory[rows[i]['Danh mục']] ? Vcategory[rows[i]['Danh mục']]++ : Vcategory[rows[i]['Danh mục']] = 1
    }
    return Vcategory
  })
  let l = ''
  Object.keys(data).forEach(t => {
    l += (
      `<li class="cat-item cat-item-55">
        <a>${t}</a> (${data[t]})
      </li>`
    )
  })
  document.querySelector('.vamtag').innerText += ` ${f['TAG']}`
  document.querySelector('.vamcategory>ul').innerHTML = l
  document.querySelector('#vamobody').innerHTML = items
}