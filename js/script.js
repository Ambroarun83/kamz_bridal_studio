

$(document).ready(function() {
    new WOW().init();
    $('.menu-icon').click(function(){
        $('.menu-div').show().css('right','0px');
        $(this).hide();
    })
    $('.close-menu').click(function(){
        $('.menu-div').hide().css('right','-200px');
        $('.menu-icon').show();
    })
    $('ul>li>a').click(function(){
        let x = $('.menu-div').css().has();
    })
    const curYear = new Date().getFullYear();
    document.getElementById("copyright_text").textContent = `Kamz Bridal Studio Copyright © `+ curYear ;





    $('#submit_cust').click(function(){
        let cus_id = $('#cus_id').val();
        $.post('customer_info.php',{cus_id:cus_id},function(data){

            $('#coll_table_div').empty();
            
            var htm = `<table class="table table-hover">
                        <tr class="table-dark">
                            <th>Name</th>
                            <th>Request ID</th>
                            <th>Collection ID</th>
                            <th>Paid Date</th>
                            <th>Amount</th>
                        </tr>
                        <tbody>`;
            $.map(data,function(value){
                htm += `
                    <tr>
                        <td>`+value['cus_name']+`</td>
                        <td>`+value['req_id']+`</td>
                        <td>`+value['coll_code']+`</td>
                        <td>`+value['coll_date']+`</td>
                        <td>`+value['total_paid_track']+`</td>
                    </tr>`;
            });

                $('#coll_table_div').append(htm)
        },'json')
    })
})
