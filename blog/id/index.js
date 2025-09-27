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
      if (currentURL.slice(0, `${rootURL}/blog/id/?${rows[i].ID}`.length) == `${rootURL}/blog/id/?${rows[i].ID}`) {
        load(rows[i])
        break
      }
    }
  })

async function load(f) {
  console.log(f);

  document.querySelector('.entry-title').innerText = f['Tiêu đề']
  document.querySelector('.vamtime').innerText = f['Thời gian']
  document.querySelector('.vamdm').innerText = f['Danh mục']
  let items = ''
  f['Nội dung'].split('=').forEach(element => {
    if (element.split('|')[0] == 'content') {
      items += `<div class="v1"><p>${element.split('|')[1]}</p></div>`
    } else if (element.split('|')[0] == 'img') {
      if (element.split('|')[2]) e = `<p class="wp-caption-text">${element.split('|')[2]}</p>`
      else e = ''
      items += `<div style="width: 639px" class="wp-caption aligncenter">
      <img src="${element.split('|')[1]}" width="629" height="473">
      ${e}</div>`
    } else if (element.split('|')[0] == 'title') {
      items += `<h1 class="title" style="font-size: 24px;font-weight: 600">${element.split('|')[1]}</h1>`
    } else if (element.split('|')[0] == 'a') {
      items += `<a href="${element.split('|')[1]}" target="_blank" style="font-size: 24px;font-weight: 600">${element.split('|')[2]}</a>`
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
  items += `<h1 class="p2"><b>CONTACT US:</b></h1>
  <p class="p2"><span style="color: #000000"><span class="s1"><a style="color: #000000" href="https://www.facebook.com/ubtechvietnam"><span style="text-decoration: underline">Facebook</span></a></span>&nbsp;|&nbsp;<a style="color: #000000" href="https://www.linkedin.com/company/ubtechvietnam/"><span class="s1"><span style="text-decoration: underline">Linkedin</span></span></a>&nbsp;|&nbsp;<span style="text-decoration: underline"><a style="color: #000000;text-decoration: underline" href="https://www.tiktok.com/@ubtechvietnam"><span class="s1">Tiktok</span></a>&nbsp;</span>|&nbsp;<span style="text-decoration: underline"><a style="color: #000000;text-decoration: underline" href="https://www.youtube.com/@ubtechvietnam"><span class="s1">Youtube</span></a></span></span></p>`
  document.querySelector('#vamobody').innerHTML = items
}