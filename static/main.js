const viewMusic = $(".view__music");
const addMusic = $(".add__music");
const addSongName = $(".song__name");
const addArtistName = $(".artist__name");
const addAlbumName = $(".album__name");
const addGenreName = $(".genre__name");
const addMusicButton = $(".addMusicButton");
const songContainer = $(".song-container");
let songsArray = [];
let allSongsArray =[];


$('.addMusicLink').click(() => {
	viewMusic.hide();
	addMusic.show();
});

$('.viewMusicLink').click(() => {
	viewMusic.show();
	addMusic.hide();
});

addMusicButton.click(() => {
	songObject =
		{
		"title": `${addSongName.val()}`,
		"artist": `${addArtistName.val()}`,
		"album": `${addAlbumName.val()}`,
		"genre": `${addGenreName.val()}`
		}
	songsArray.push(songObject);
	console.log("songsArray",songsArray);
	toDOM(songObject)
});

function toDOM (songObject) {
	let songToAdd = `<p>${songObject.title} by ${songObject.artist} on the album: ${songObject.album}. Genre: ${songObject.genre} <button class="deleteThisSong">delete</button></p>`
	songContainer.append(songToAdd);
};

$.ajax({
	url:"songs.json"
	}).done((songs) => {
		songsArray = songs.songs
		songsArray.forEach((item) => {
		displaySonginDOM = `<p>${item.title} by ${item.artist} on the album: ${item.album}. Genre: ${item.genre} <button class="deleteThisSong">delete</button></p>`
		songContainer.append(displaySonginDOM)
	})
})

$('.more__songs').click(() => {
	$.ajax({
	url:"moresongs.json"
	}).done((moresongs) => {
		let moreSongsArray = moresongs.songs
		moreSongsArray.forEach((item)=> {
		displaySonginDOM = `<p>${item.title} by ${item.artist} on the album: ${item.album}. Genre: ${item.genre} <button class="deleteThisSong">delete</button></p>`
		songContainer.append(displaySonginDOM)
		})
	})
})

songContainer.on('click', '.deleteThisSong', (e) => {
	const row = $(e.target).closest('p')
	row.remove();
})




