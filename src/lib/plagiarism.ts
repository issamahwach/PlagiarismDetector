export default class Plagiarism {
  firstText: string;
  secondText: string;

  constructor(firstText: string, secondText: string) {
    this.firstText = firstText;
    this.secondText = secondText;
  }

  static checkPlagiarism(
    firstText: string,
    secondText: string,
    outputType: "percentage" | "scale" = "scale"
  ): number | string {
    // Tokenize the texts into words
    const words1: string[] = firstText.split(/\s+/);
    const words2: string[] = secondText.split(/\s+/);

    // Create a set of unique words from both texts
    const uniqueWords: Set<string> = new Set([...words1, ...words2]);

    // Create vectors representing the frequency of each word in the texts
    const vector1: number[] = Array.from(uniqueWords).map((word) =>
      words1.includes(word) ? 1 : 0
    );

    const vector2: number[] = Array.from(uniqueWords).map((word) =>
      words2.includes(word) ? 1 : 0
    );

    // Calculate the dot product of the vectors
    const dotProduct: number = vector1.reduce(
      (acc, value, index) => acc + value * vector2[index],
      0
    );

    // Calculate the magnitude of each vector
    const magnitude1: number = Math.sqrt(
      vector1.reduce((acc, value) => acc + value ** 2, 0)
    );
    const magnitude2: number = Math.sqrt(
      vector2.reduce((acc, value) => acc + value ** 2, 0)
    );

    // Calculate the cosine similarity
    const similarity: number = dotProduct / (magnitude1 * magnitude2);

    if (outputType === "percentage") {
      // Convert the similarity to a percentage
      const similarityPercentage: number = similarity * 100;
      return `${similarityPercentage.toFixed(2)}%`;
    } else {
      // Return the similarity as a scale between 0 and 1
      return similarity;
    }
  }
}
