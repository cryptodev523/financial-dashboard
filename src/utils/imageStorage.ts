export const imageStorage = {
  // Convert File to base64 string
  fileToBase64: (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  },

  // Save image to localStorage
  saveImage: (userId: string, base64Image: string) => {
    localStorage.setItem(`userImage_${userId}`, base64Image);
  },

  // Get image from localStorage
  getImage: (userId: string): string | null => {
    return localStorage.getItem(`userImage_${userId}`);
  },
};
