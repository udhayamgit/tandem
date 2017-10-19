export enum PCExpressionType {
  STRING,
  BLOCK,
  ELEMENT,
  SELF_CLOSING_ELEMENT,
  TEXT_NODE,
  COMMENT,
  ATTRIBUTE,
  START_TAG,
  END_TAG
};

export type ExpressionLocation = {
  start: number;
  end: number;
};

export type PCExpression = {
  type: PCExpressionType;
  location: ExpressionLocation;
};

export type PCString = {
  value: string;
} & PCExpression;

export type PCComment = {
  value: string;
} & PCExpression;

export type PCBlock = {
  value: string;
} & PCExpression;

export type VSAttributeValue = {
  
} & PCExpression;

export type PCAttribute = {
  location: ExpressionLocation;
  name: string;
  value: PCExpression;
} & PCExpression;

export type PCStartTag = {
  name: string;
  attributes: PCAttribute[];
} & PCExpression;

export type PCEndTag = {
  name: string;
} & PCExpression;

export type PCSelfClosingElement = {

} & PCStartTag;

export type PCElement = {
  startTag: PCStartTag;
  endTag: PCEndTag;
  children: Array<PCElement | PCSelfClosingElement | PCBlock | PCString>;
} & PCExpression;