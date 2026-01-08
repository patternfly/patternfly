const resemble = require('resemblejs');
const fs = require('fs');

const testImage = 'backstop_data/bitmaps_test/20260107-185111/pf-core__components_input-group_html_variations_0_document_1_tablet.png';
const refImage = 'backstop_data/bitmaps_reference/pf-core__components_input-group_html_variations_0_document_1_tablet.png';

// Use the same resemble options as backstop.js
const resembleOutputOptions = {
  errorType: 'movementDifferenceIntensity',
  ignoreAntialiasing: true,
  largeImageThreshold: 0
};

// misMatchThreshold from backstop.js scenarioDefaults
const misMatchThreshold = 0.001;

// Configure resemble with backstop options
resemble.outputSettings(resembleOutputOptions);

resemble(testImage)
  .compareTo(refImage)
  .onComplete((data) => {
    console.log('\n=== Image Comparison Results ===\n');
    console.log('Mismatch Percentage:', data.misMatchPercentage + '%');
    console.log('Mismatch Threshold (backstop):', misMatchThreshold + '%');
    console.log('Would Pass?', parseFloat(data.misMatchPercentage) <= misMatchThreshold);
    console.log('\nIs Same Dimensions:', data.isSameDimensions);
    console.log('Dimension Difference:', data.dimensionDifference);
    console.log('Analysis Time:', data.analysisTime + 'ms');
    console.log('\nResemble Options:', resembleOutputOptions);

    // Save diff image
    const diffPath = 'backstop_data/diff-output.png';
    fs.writeFileSync(diffPath, data.getBuffer());
    console.log('\nDiff image saved to:', diffPath);
  });
