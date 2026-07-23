// js/imageReviewService.js — Module 5: reverse image check on listing photo upload.
//
// Call this right after a seller uploads a property image (imageUrl = the public
// property-images bucket URL). A "flagged" result never auto-rejects the listing — it's
// queued for a human admin to review (a legitimate owner may have posted the same photo
// elsewhere themselves, e.g. previously on Facebook Marketplace).

class ImageReviewError extends AppError {
  constructor(code, message) { super(code, message); this.name = 'ImageReviewError'; }
}

const ImageReviewSvc = {
  /**
   * @param {number} propertyId
   * @param {string} imageUrl - public URL of the uploaded property image
   * @returns {Promise<{ status:'clear'|'flagged', matchCount:number, note:string }>}
   */
  async checkListingImage(propertyId, imageUrl) {
    const { data, error } = await abashonDB.functions.invoke('check-listing-image', {
      body: { propertyId, imageUrl },
    });
    if (error) throw new ImageReviewError('CHECK_FAILED', 'ছবি যাচাই করা যায়নি।');
    if (data && data.code) throw new ImageReviewError(data.code, data.message || 'ছবি যাচাই ব্যর্থ হয়েছে।');
    return data;
  },
};
