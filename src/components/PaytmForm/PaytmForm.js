import React from 'react';

import classes from './PaytmForm.module.css';

const PaytmForm = props => {

    console.log(props.data);

    // let data = {...props.data}

    return (
        <form method="post" action="https://securegw-stage.paytm.in/order/process/" name="f1">
            {/* <table>
                <tbody> */}
            <input type="hidden" name="MID" value={props.data.MID} />
            <input type="hidden" name="WEBSITE" value={props.data.WEBSITE} />
            <input type="hidden" name="ORDER_ID" value={props.data.ORDER_ID} />
            <input type="hidden" name="CUST_ID" value={props.data.CUST_ID} />
            <input type="hidden" name="INDUSTRY_TYPE_ID" value={props.data.INDUSTRY_TYPE_ID} />
            <input type="hidden" name="CHANNEL_ID" value={props.data.CHANNEL_ID} />
            <input type="hidden" name="TXN_AMOUNT" value={props.data.TXN_AMOUNT} />
            <input type="hidden" name="CALLBACK_URL" value={props.data.CALLBACK_URL} />
            <input type="hidden" name="CHECKSUMHASH" value={props.data.CHECKSUMHASH} />
            <input type="submit" value="Send Request"></input>
            {/* </tbody>
            </table> */}
            {/* <script type="text/javascript">
                document.f1.submit();
            </script> */}
        </form>
    );
};

export default PaytmForm;