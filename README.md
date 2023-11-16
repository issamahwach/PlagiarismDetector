# Plagiarism Detection Project

![Project Cover Image](https://github.com/issamahwach/plagiarismDetector/blob/main/public/cover.png?raw=true)

Demo: [⭐ Click Here ⭐](https://plagiarism-detector-one.vercel.app)

## Overview

This project implements a simple plagiarism detection algorithm using cosine similarity between two texts. The algorithm tokenizes the input texts into words, creates vectors representing the frequency of each word, and calculates the cosine similarity between the vectors.

## Features

- **Cosine Similarity Calculation:** Utilizes cosine similarity to measure the similarity between two texts.
- **Output Types:** Choose between percentage or scale (between 0 and 1) for the similarity output.
- **Tokenization:** Texts are tokenized into words, and unique words are considered for vector creation.

### Configuration

- Modify the `outputType` parameter in the `checkPlagiarism` function to choose between 'percentage' or 'scale' output.
