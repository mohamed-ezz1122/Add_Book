var siteNameInpute=document.getElementById('siteName')
var sitUrlInpute=document.getElementById('sitUrl')
var masigError=document.querySelector('.masigError')
var texterror=document.querySelector('.errorUrl')


var bookSorre=[]

function getBookName()
{
if(addRegex() && addRegexUrl())
{
    book={
        siteName:siteNameInpute.value,
        sitUrl:sitUrlInpute.value,
    }
    console.log(siteName)

    bookSorre.push(book)
    
    addBooks(bookSorre)
    cleer()
    sitUrlInpute.classList.replace('is-invalid','is-valid')
    texterror.classList.replace("d-block", 'd-none')
    masigError.classList.replace("d-block", 'd-none')
}
else
{
    sitUrlInpute.classList.add('is-invalid')
    texterror.classList.replace("d-none", 'd-block')
    masigError.classList.replace("d-none", 'd-block')
}
   

}

function addBooks(arry){

    var bag=``
    for(var i=0 ; i<arry.length ; i++){
        bag+=`<tr>
        <td>${i+1}</td>
        <td>${arry[i].siteName}</td>
        <td>
            <a href="https://${arry[i].sitUrl}" target="_blank" class="btn btn-main "  ><i class="fa-solid fa-eye"></i>Visited</a>
        </td>
        <td><button onclick="deleteBook(${i})"  class="btn btn-delet "><i class="fa-regular fa-trash-can" ></i>Delete</button></td>
    </tr>
        `
    }
    document.getElementById('tBody').innerHTML=bag
}
function cleer()
{
    siteNameInpute.value=''
    sitUrlInpute.value=''

}

function deleteBook(bookIndex)
{
    bookSorre.splice(bookIndex,1)
    addBooks(bookSorre)
}



function searchBook(term)
{
    var searchArry=[]
    for (var i=0; i<bookSorre.length ; i++)
    {
        if(bookSorre[i].siteName.toLowerCase().includes(term.toLowerCase()))
        {
            searchArry.push(bookSorre[i])

        }
    }
    addBooks(searchArry)

}


function addRegex()
{
    var texterror=document.querySelector('.errorSiteName')
    var regex=/^[A-Z][a-z]{3,8}$/;
    if(regex.test(siteNameInpute.value))
    {
        siteNameInpute.classList.replace('is-invalid','is-valid')
        texterror.classList.replace("d-block", 'd-none')
        return true;
    }
    else
    {
        siteNameInpute.classList.add('is-invalid')
        texterror.classList.replace("d-none", 'd-block')
        return false;
    }
    
}
document.querySelector('.urlSit').addEventListener('input',function(){addRegexUrl()})
function addRegexUrl()
{
    
    var regex=/^[a-z]{4,10}\.com$/
    if(regex.test(sitUrlInpute.value))
    {
       
        return true;
    }
    else
    {
        
       return false;
    }
    
}

document.querySelector('.btnMasig').addEventListener("click",function(){hiddenDialog()})
function hiddenDialog()
{
var masigError=document.querySelector('.masigError')
masigError.classList.replace("d-block", 'd-none')
}

