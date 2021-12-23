
describe("payments test", function(){

beforeEach(function(){
    billAmtInput.value = 10; 
    tipAmtInput.value = 1; 
}); 

it("should add new payment object to allPayments on submitPaymentInfo()", function(){
    submitPaymentInfo(); 

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments.payment1.billAmt).toEqual('10'); 
    expect(allPayments.payment1.tipAmt).toEqual('1'); 
    expect(allPayments.payment1.tipPercent).toEqual(10); 

}); 

it("should create new table row element and append to #paymentTable on appendPaymentTable()", function(){
  let curPayment = createCurPayment(); 
  allPayments['payment1'] = curPayment;

  appendPaymentTable(curPayment);

  let paymentTd = document.querySelectorAll("#paymentTable tbody tr td"); 
  expect(paymentTd.length).toEqual(3); 
  expect(paymentTd[0].innerText).toEqual("$10");
  expect(paymentTd[1].innerText).toEqual("$1"); 
  expect(paymentTd[2].innerText).toEqual("10%"); 
})

it("should create new payment object on createCurPayment()", function() {
  let expectedPayment = {
    billAmt: '10',
    tipAmt: '1',
    tipPercent: 10,
  }

  expect(createCurPayment()).toEqual(expectedPayment);
})

afterEach(function(){
  billAmtInput.value = '';
  tipAmtInput.value = '';
  paymentTbody.innerHTML = '';
  paymentId = 0;
    allPayments = {};
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
})

})