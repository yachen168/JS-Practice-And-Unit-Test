/* 15. 有一輛搬運車，限重1噸，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，
在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數
決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。
*/
const rl = require('../readline.module');
const carryEquipments = require('./15.module');

const { quantityOfEquipments, totalWeight } = carryEquipments([0, 0, 0], [30, 20, 50], 0);
console.log(`啞鈴數量：${quantityOfEquipments[0]}，單槓數量：${quantityOfEquipments[1]}，跑步機數量：${quantityOfEquipments[2]}，總重量：${totalWeight}`);

rl.close();