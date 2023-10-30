var packageBaseURL = "http://localhost:8080/app/api/v1/package";
var hotelBaseURL = "http://localhost:8080/app/api/v1/hotel";

$('#hotel-details').css({display: 'none'});


$('.btnSearch').click(function () {
    $('#package-header').css({display: 'none'});
    $('#hotel-details').css({display: 'block'});
    searchHotelByCategory();

});
/*function searchHotelByCategory() {
    var packageCategory = $("#packageCategory").val();
    $.ajax({
        url: hotelBaseURL + "/get?category=" + packageCategory,
        method: "GET",
        success: function (res) {
            const parentDiv = $('#vehicle-details');
            for (let hotel of res.data) {
                const div = $('<div class="row"><div class="col-3">\n' +
                    '            <img src="data:image/png;base64,${hotel.hotelImage}" alt="...">\n' +
                    '        </div></div>');
                console.log(hotel);
                parentDiv.append(div);
            }
        },
        error:function (ob){
            swal("Oops", ob.responseJSON.message, "error");
        }
    });
}*/
function searchHotelByCategory() {
    var packageCategory = $("#packageCategory").val();
    $.ajax({
        url: hotelBaseURL + "/get?category=" + packageCategory,
        method: "GET",
        success: function (res) {
            const parentDiv = $('#hotel-details');
            parentDiv.empty(); // Clear any previous content

            for (let hotel of res.data) {
                const div = $(`<div class="row"><div class="col-3">
                                <img src="data:image/png;base64,${hotel.hotelImage}" alt="...">
                            </div><div class="col-9">
            <div style="display: flex">
                <h3>${hotel.hotelName}</h3>
                <h3> - </h3>
                <h3>${hotel.hotelLocation}</h3>
                <label>${hotel.hotelCategory}</label>
                <!--<h3><i class='bx bxs-star' style='color:#f99900'  ></i></h3>-->

            </div>
            <div style="display: flex">
                <a href="${hotel.hotelGmapLocation}"><span class="material-symbols-outlined">location_on</span>Location</a>
            </div>
            <div style="display:flex">
                <label>Email :</label>
                <label>${hotel.hotelEmail}</label>
            </div>
            <div style="display:flex">
                <label>Contact :</label>
                <label>${hotel.hotelContact.hotelContact_1}</label>
                <label>/</label>
                <label>${hotel.hotelContact.hotelContact_2}</label>
            </div>
            <div style="display:flex">
                <label>Pet Allow or not :</label>
                <label>${hotel.hotelPetAllow}</label>
            </div>
            <div style="display:flex">
                <label>Cancellation :</label>
                <label>${hotel.hotelCancellationCriteria}</label>
                <button type="button">Show Prices</button>
            </div>
        </div></div>`);
                console.log(hotel);
                parentDiv.append(div);
            }
        },
        error:function (ob){
            swal("Oops", ob.responseJSON.message, "error");
        }
    });
}


