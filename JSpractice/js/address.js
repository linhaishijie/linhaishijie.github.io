let price = +prompt(`请输入商品价格`)
let num = +prompt(`请输入商品数量`)
let address = prompt(`请输入收货地址`)
let total = price * num
document.write(`
    <table>
        <tr>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>商品数量</th>
            <th>总价</th>
            <th>收货地址</th>
        </tr>
        <tr>
            <td>小米12pro</td>
            <td>${price}</td>
            <td>${num}</td>
            <td>${total}</td>
            <td>${address}</td>
        </tr>
</table>
`)