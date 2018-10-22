/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<3cd5a1fc809d50d1a1e1762b1c83a454>>
 *
 * Generated by CLDRGenScript
 *
 * @flow
 */
const IntlVariations = require('IntlVariations');
const IntlCLDRNumberType32 = {
  getVariation(n: number): number {
    if (n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n === 2) {
      return IntlVariations.NUMBER_TWO;
    } else if (n >= 3 && n <= 6) {
      return IntlVariations.NUMBER_FEW;
    } else if (n >= 7 && n <= 10) {
      return IntlVariations.NUMBER_MANY;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType32;
