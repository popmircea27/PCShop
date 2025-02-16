import axios from 'axios';

class LaptopReviewsService {
  // Setează URL-ul API-ului backend
  static baseUrl = 'http://localhost:8080/api/laptops/reviews';

  // Obține recenziile pentru un laptop
  static async getReviewsByLaptop(laptopId) {
    try {
      const response = await axios.get(`${this.baseUrl}/laptop/${laptopId}`);
      return response.data;
    } catch (error) {
      console.error('Eroare la obținerea recenziilor pentru laptop:', error);
      throw error;
    }
  }

  static async addReview(laptopId, reviewData) {
    try {
        const response = await axios.post(this.baseUrl, reviewData);
        return response.data;
    } catch (error) {
        console.error('Eroare la adăugarea review-ului:', error);
        throw error;
    }
}



}

export default LaptopReviewsService;
