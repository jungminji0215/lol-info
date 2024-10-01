interface ItemDetail {
  name: string;
  plaintext: string;
}

export interface Item {
  version: string;
  data: {
    [itemId: string]: ItemDetail;
  };
}
