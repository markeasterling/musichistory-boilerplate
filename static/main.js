const viewMusic = $(".view__music");
const addMusic = $(".add__music");
const addSongName = $(".song__name");
const addArtistName = $(".artist__name");
const addAlbumName = $(".album__name");
const addMusicButton = $(".addMusicButton");
const songContainer = $(".song-container");
let songsArray
let moreSongsArray

songs = [];
	songs[songs.length] = "Legs > by ZZTop on the album Eliminator";
	songs[songs.length] = "The Logical Song > by Supertramp on the album Breakfast in America";
	songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
	songs[songs.length] = "Welcome to the Jungle > by Guns & Roses on the album Appetite for Destruction";
	songs[songs.length] = "Ironic > by Alanis Morisette on the album Jagged Little Pill";


$('.addMusicLink').click(() => {
	viewMusic.hide();
	addMusic.show();
});

$('.viewMusicLink').click(() => {
	viewMusic.show();
	addMusic.hide();
});


addMusicButton.click(() => {
	let newSong = `${addSongName.val()} - by ${addArtistName.val()} on the album ${addAlbumName.val()}`;
	addSongName.val("");
	addArtistName.val("");
	addAlbumName.val("");
	songs.push(newSong);
	toDOM(newSong);
});

function toDOM (song) {
	let songToAdd = `<div>${song}</div>`;
	songContainer.append(songToAdd);
};

$.ajax({
	url:"songs.json"
}).done((songs) => {
	let songsArray = songs.songs
	songsArray.forEach((item) => {
	displaySonginDOM = `<p>${item.title} by ${item.artist} on the album: ${item.album}. Genre: ${item.genre}</p>`
	songContainer.append(displaySonginDOM)
	})
})



$.ajax({
	url:"moresongs.json"
}).done((moresongs) => {
	let moreSongsArray = moresongs.songs
	moreSongsArray.forEach((item)=> {
	console.log(item.artist)
	})
})



