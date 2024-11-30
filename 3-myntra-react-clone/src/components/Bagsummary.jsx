
const Bagsummary=({item})=>{
  const totalMRP=item.reduce((total,item)=>total+ item.original_price,0);
  const currentPrice=item.reduce((total,item)=>total+ item.current_price,0);
    const bagSummary = {
        totalItem: item.length,
        totalMRP: totalMRP,
        totalDiscount: totalMRP- currentPrice,
        finalPayment: totalMRP-(totalMRP- currentPrice)+99
        };

    return<><div className="bag-details-container">
    <div className="price-header">PRICE DETAILS {bagSummary.totalItem} Items </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{bagSummary.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{bagSummary.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{bagSummary.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
    </>
};
export default Bagsummary;