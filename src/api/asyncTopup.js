/**
 * Mock API for topping up an e-wallet balance.
 * @param {Object} payload - Top-up data.
 * @param {string} payload.userId - The ID of the account owner being topped up.
 * @param {string} payload.usernameSnapshot - The owner's name at the time of the transaction.
 * @param {string} payload.profilePicture - The owner's profile picture.
 * @param {number} payload.amount - The top-up amount (before tax).
 * @param {number} payload.currentBalance - The user's current balance.
 * @param {string} payload.paymentMethod - The selected payment method.
 * @returns {Promise<Object>} Top-up transaction data and the new balance.
 */

const TAX_AMOUNT = 4000;

const apiTopUp = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!payload.amount || payload.amount <= 0) {
        reject("Invalid top-up amount");
        return;
      }

      if (payload.amount < 10000) {
        reject("Minimum top-up amount is Rp 10,000");
        return;
      }

      if (!payload.paymentMethod) {
        reject("Select a payment method first");
        return;
      }

      const newTransaction = {
        id: `TRX-${Date.now()}`,
        senderId: "SYSTEM",
        receiverId: payload.userId,
        receiverNameSnapshot: payload.usernameSnapshot,
        receiverPhoneSnapshot: "",
        profilePicture: payload.profilePicture,
        amount: payload.amount,
        fee: TAX_AMOUNT,
        total: payload.amount + TAX_AMOUNT,
        notes: `Top Up via ${payload.paymentMethod}`,
        transactionType: "TOPUP",
        status: "SUCCESS",
        timestamp: new Date().toISOString(),
      };

      resolve({
        transaction: newTransaction,
        newBalance: payload.currentBalance + payload.amount,
        taxAmount: TAX_AMOUNT,
      });
    }, 1500);
  });
};

export default apiTopUp;
