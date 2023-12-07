$(document).ready(() => {
  let firstRowPictureLength, secondRowPictureLength;
  const allPhotosFirstRow = $('.firstRow > .firstRowPhotos');
  const allPhotosSecondRow = $(".secondRow > .secondRowPhotos");
  $("#left").on("click", () => {
    // First Row Animation

    let firstRowCurrentPhoto = allPhotosFirstRow.filter('.current'),
      firstRowNextPhoto = firstRowCurrentPhoto.next();
    let firstRowLength = parseInt($('.firstRow').width());
    firstRowLength += 70;
    firstRowPictureLength = parseFloat(firstRowCurrentPhoto.width());
    firstRowPictureLength += 10.166;
    $(".firstRow .firstRowPhotos").animate({
      left: "-=" + firstRowPictureLength + ""
    }, 400);
    firstRowCurrentPhoto.animate({
      left: "+=" + firstRowLength + ""
    }, 400);
    if (!firstRowNextPhoto.length) firstRowNextPhoto = allPhotosFirstRow.first();
    firstRowCurrentPhoto.removeClass('current');
    firstRowNextPhoto.addClass('current');

    // Second Row Animation

    let secondRowCurrentPhoto = allPhotosSecondRow.filter('.current'),
      secondRowNextPhoto = secondRowCurrentPhoto.next();
    let secondRowLength = parseInt($('.secondRow').width());
    secondRowLength -= 39;
    secondRowPictureLength = parseInt(secondRowCurrentPhoto.width());
    secondRowPictureLength += 10.166;
    $(".secondRow .secondRowPhotos").animate({
      left: "-=" + secondRowPictureLength + ""
    }, 400);
    secondRowCurrentPhoto.animate({
      left: "+=" + secondRowLength + ""
    }, 400);
    if (!secondRowNextPhoto.length) secondRowNextPhoto = allPhotosSecondRow.first();
    secondRowCurrentPhoto.removeClass('current');
    secondRowNextPhoto.addClass('current');
  });
  $("#right").on("click", () => {
    // First Row Animation

    let firstRowCurrentPhoto = allPhotosFirstRow.filter('.current').prev(),
      firstRowNextPhoto = firstRowCurrentPhoto.prev();
    if (!firstRowCurrentPhoto.length) {
      firstRowCurrentPhoto = allPhotosFirstRow.last();
      firstRowNextPhoto = firstRowCurrentPhoto.prev();
    }
    allPhotosFirstRow.filter('.current').removeClass('current');
    firstRowCurrentPhoto.addClass('current');
    let firstRowLength = parseInt($('.firstRow').width());
    firstRowLength += 70;
    firstRowPictureLength = parseInt(firstRowCurrentPhoto.width());
    firstRowPictureLength += 10.166;
    $(".firstRow .firstRowPhotos").animate({
      left: "+=" + firstRowPictureLength + ""
    }, 400);
    firstRowCurrentPhoto.animate({
      left: "-=" + firstRowLength + ""
    }, 400);

    // Second Row Animation

    let secondRowCurrentPhoto = allPhotosSecondRow.filter('.current').prev(),
      secondRowNextPhoto = secondRowCurrentPhoto.prev();
    if (!secondRowCurrentPhoto.length) {
      secondRowCurrentPhoto = allPhotosSecondRow.last();
      secondRowNextPhoto = secondRowCurrentPhoto.prev();
    }
    allPhotosSecondRow.filter('.current').removeClass('current');
    secondRowCurrentPhoto.addClass('current');
    let secondRowLength = parseInt($('.secondRow').width());
    secondRowLength -= 39;
    secondRowPictureLength = parseInt(secondRowCurrentPhoto.width());
    secondRowPictureLength += 10.166;
    $(".secondRow .secondRowPhotos").animate({
      left: "+=" + secondRowPictureLength + ""
    }, 400);
    secondRowCurrentPhoto.animate({
      left: "-=" + secondRowLength + ""
    }, 400);
  });
});