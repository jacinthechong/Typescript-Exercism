interface DNA {
  [DNANucleotide: string]: string;
}

const DnaToRna: DNA = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export function toRna(DNASequence: string): string {
  let DNASequenceArray: string[] = DNASequence.split('');
  const RNASequenceArray: string[] = DNASequenceArray.map((nucleotide) => {
    if (!DnaToRna[nucleotide]) {
      throw new Error('Invalid input DNA.');
    }
    return DnaToRna[nucleotide];
  })
  return RNASequenceArray.join('');
}
