var Icon_url = "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/6e/74/b9/6e74b9e2-1d45-6017-76d1-eb733918c537/AppIcon-1x_U007emarketing-0-5-0-85-220.png/120x120.png";

var ProcessName = "MHNow";
var search_lower_limit = "0x100000000";
var search_upper_limit = "0x160000000";

var black_diablos_addr = null;
var pukei_pukei_addr = null;

function has_number(s)
{
    if (!s || isNaN(s) || s === "" || /\s/g.test(s)){
        return false;
    }
    return true;
}