import Biscoint from "biscoint-api-node";

async function test() {
  const bc = new Biscoint({
    apiKey: "",
    apiSecret:
      "",
  });

  const buyOffer = await bc.offer({
    base: "ETH",
    amount: "50",
    op: "buy",
    isQuote: true,
  });
  console.log(`Buy offer base amount: ${buyOffer.baseAmount}`);
  const buyConfirm = await bc.confirmOffer({ offerId: buyOffer.offerId });
  console.log(`Buy confirm base amount: ${buyConfirm.baseAmount}`);

  const sellOffer = await bc.offer({
    base: "ETH",
    amount: buyConfirm.baseAmount,
    op: "sell",
    isQuote: false,
  });
  console.log(`Sell offer base amount: ${sellOffer.baseAmount}`);
  const sellConfirm = await bc.confirmOffer({ offerId: sellOffer.offerId });
  console.log(`Sell confirm base amount: ${sellConfirm.baseAmount}`);
}

async function start() {
  await test();
}

start();
