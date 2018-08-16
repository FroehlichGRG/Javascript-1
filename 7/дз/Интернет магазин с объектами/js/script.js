// JavaScript Document
/*jshint esversion: 6 */
var pc={
	pc1SourceBig: 'content/images/big/pc1_big.jpg',
	pc1SourceSmall: 'content/images/small/pc1_small.jpg',
	pc1Caption: `<p>Компьютер 1</p>`,
	pc1Price: `<p>Цена: 12000 рублей</p>`,
	pc2SourceBig: 'content/images/big/pc2_big.jpg',
	pc2SourceSmall: 'content/images/small/pc2_small.jpg',
	pc2Caption: `<p>Компьютер 2</p>`,
	pc2Price: `<p>Цена: 15000 рублей</p>`,
};
var notebooks={
	notebook1SourceBig: 'content/images/big/notebook1_big.jpg',
	notebook1SourceSmall: 'content/images/small/notebook1_small.jpg',
	notebook1Caption: `<p>Ноутбук 1</p>`,
	notebook1Price: `<p>Цена: 20000 рублей</p>`,
	notebook2SourceBig: 'content/images/big/notebook2_big.jpg',
	notebook2SourceSmall: 'content/images/small/notebook2_small.jpg',
	notebook2Caption: `<p>Ноутбук 2</p>`,
	notebook2Price: `<p>Цена: 25000 рублей</p>`,
};
var smartphones={
	smartphone1SourceBig: 'content/images/big/smartphone1_big.jpg',
	smartphone1SourceSmall: 'content/images/small/smartphone1_small.jpg',
	smartphone1Caption: `<p>Смартфон 1</p>`,
	smartphone1Price: `<p>Цена: 5000 рублей</p>`,
	smartphone2SourceBig: 'content/images/big/smartphone2_big.jpg',
	smartphone2SourceSmall: 'content/images/small/smartphone2_small.jpg',
	smartphone2Caption: `<p>Смартфон 2</p>`,
	smartphone2Price: `<p>Цена: 7000 рублей</p>`,
};
function genContent(item, trade){
	'use strict';
	var image =document.createElement('img');
	while(true){
		document.getElementsByClassName('big_picture')[0].innerHTML=``;
		document.getElementsByClassName('caption')[0].innerHTML=``;
		document.getElementsByClassName('small_pictures')[0].innerHTML=``;
		break;
	}
	document.getElementsByClassName('big_picture')[0].appendChild(image);
	if(item===1&&trade===1){
		image.src=pc.pc1SourceBig;
		document.getElementsByClassName('caption')[0].innerHTML=`${pc.pc1Caption}${pc.pc1Price}`;
	}else if(item===1&&trade===2){
		image.src=pc.pc2SourceBig;
		document.getElementsByClassName('caption')[0].innerHTML=`${pc.pc2Caption}${pc.pc2Price}`;
	}else if(item===2&&trade===1){
		image.src=smartphones.smartphone1SourceBig;
		document.getElementsByClassName('caption')[0].innerHTML=`${smartphones.smartphone1Caption}${smartphones.smartphone1Price}`;
	}else if(item===2&&trade===2){
		image.src=smartphones.smartphone2SourceBig;
		document.getElementsByClassName('caption')[0].innerHTML=`${smartphones.smartphone2Caption}${smartphones.smartphone2Price}`;
	}else if(item===3&&trade===1){
		image.src=notebooks.notebook1SourceBig;
		document.getElementsByClassName('caption')[0].innerHTML=`${notebooks.notebook1Caption}${notebooks.notebook1Price}`;
	}else if(item===3&&trade===2){
		image.src=notebooks.notebook2SourceBig;
		document.getElementsByClassName('caption')[0].innerHTML=`${notebooks.notebook2Caption}${notebooks.notebook2Price}`;
	}
	
		for(var i=0; i<2; i++){
			var smallImg=document.createElement('img');
			smallImg.addEventListener('click', changeItem);
			if(item===1&&(trade===1||trade===2)){
				smallImg.src=`content/images/small/pc${i+1}_small.jpg`;
				document.getElementsByClassName('small_pictures')[0].appendChild(smallImg).classList.add(`small_image`);
			}else if(item===2&&(trade===1||trade===2)){
				smallImg.src=`content/images/small/smartphone${i+1}_small.jpg`;
				document.getElementsByClassName('small_pictures')[0].appendChild(smallImg).classList.add(`small_image`);
			}else if(item===3&&(trade===1||trade===2)){
				smallImg.src=`content/images/small/notebook${i+1}_small.jpg`;
				document.getElementsByClassName('small_pictures')[0].appendChild(smallImg).classList.add(`small_image`);
			}
		}
}
document.getElementById('desktops').addEventListener('click', function(){
	'use strict';
	genContent(1,1);
});
document.getElementById('laptops').addEventListener('click', function(){
	'use strict';
	genContent(3,1);
});
document.getElementById('smartphones').addEventListener('click', function(){
	'use strict';
	genContent(2,1);
});
var totalyPrice=0;
function addToBox(){
	'use strict';
	var boxItem=document.getElementsByClassName('big_picture')[0].firstChild.src.split('/').slice(-1).join().split('_');
	var boxDom=document.getElementsByClassName('tradeBox')[0];
	var tradeItem=null;
	var price=document.getElementsByClassName('caption')[0].lastChild.textContent.split(' ');
	if(boxItem[0]==='pc1'||boxItem[0]==='notebook1'||boxItem[0]==='smartphone1'){
		tradeItem={
				wrap: document.createElement('div'),
				image: document.getElementsByClassName('small_pictures')[0].firstChild,
				name: document.getElementsByClassName('caption')[0].firstChild,
				itemPrice: price[1],
			};
	}else if(boxItem[0]==='pc2'||boxItem[0]==='notebook2'||boxItem[0]==='smartphone2'){
		tradeItem={
				wrap: document.createElement('div'),
				image: document.getElementsByClassName('small_pictures')[0].lastChild,
				name: document.getElementsByClassName('caption')[0].firstChild,
				itemPrice: price[1],
			};
	}
	totalyPrice+=+tradeItem.itemPrice;	
	boxDom.appendChild(tradeItem.wrap).innerHTML=`<img src="${tradeItem.image.src}"/><p>${tradeItem.name.textContent}</p><p>Цена: ${tradeItem.itemPrice}</p>`;
	document.getElementById('totalyPrice').innerHTML=`Итого: ${totalyPrice}`;
	return totalyPrice;
}
document.getElementById('letBy').addEventListener('click',addToBox);
function changeItem(){
	'use strict';
	var exist=document.getElementsByClassName('big_picture')[0].firstChild.src;
	exist=exist.split('_').slice(0,1).join().split('/').slice(-1).join();
	if(exist==='pc1'){
		genContent(1,2);
	}else if(exist==='pc2'){
		genContent(1,1);
	}else if(exist==='notebook1'){
		genContent(3,2);
	}else if(exist==='notebook2'){
		genContent(3,1);
	}else if(exist==='smartphone1'){
		genContent(2,2);
	}else if(exist==='smartphone2'){
		genContent(2,1);
	}
}

window.onload=genContent(1,1);
document.getElementsByClassName('big_picture')[0].addEventListener('click', changeItem);