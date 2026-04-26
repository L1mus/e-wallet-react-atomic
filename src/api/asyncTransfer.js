/**
 * Mock API for performing money transfers between users.
 * @param {Object} payload - Transfer data.
 * @param {string} payload.senderId - Sender's ID.
 * @param {string} payload.receiverId - Receiver's ID.
 * @param {string} payload.receiverNameSnapshot - Receiver's name at the time of the transaction.
 * @param {string} payload.receiverPhoneSnapshot - Receiver's phone number at the time of the transaction.
 * @param {string} payload.profilePicture - The owner's profile picture.
 * @param {number} payload.amount - The transfer amount.
 * @param {number} payload.senderBalance - Sender's current balance (for validation).
 * @param {string} [payload.notes] - Optional notes for the transaction.
 * @returns {Promise<Object>} The successfully created transaction data.
 */

const apiTransfer = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!payload.amount || payload.amount <= 0) {
        reject("Invalid transfer amount");
        return;
      }

      if (payload.amount > payload.senderBalance) {
        reject("Your balance is insufficient to perform this transfer");
        return;
      }

      if (!payload.receiverId) {
        reject("Transfer recipient not found.");
        return;
      }

      const newTransaction = {
        id: `TRX-${Date.now()}`,
        senderId: payload.senderId,
        receiverId: payload.receiverId,
        receiverNameSnapshot: payload.receiverNameSnapshot,
        receiverPhoneSnapshot: payload.receiverPhoneSnapshot,
        profilePicture: payload.profilePicture,
        amount: payload.amount,
        fee: 0,
        total: payload.amount,
        notes: payload.notes || "",
        transactionType: "TRANSFER",
        status: "SUCCESS",
        timestamp: new Date().toISOString(),
      };

      resolve({
        transaction: newTransaction,
        newBalance: payload.senderBalance - payload.amount,
      });
    }, 1500);
  });
};

export default apiTransfer;
