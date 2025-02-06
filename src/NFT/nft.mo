import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor class Nft (name: Text, owner: Principal, content: [Nat8], details: Text, date: Nat) = this {

  private let itemName = name;
  private var nftOwner = owner;
  private let imageBytes = content;
  private let itemContent = details;
  private let dateContent = date;

  public query func getName() : async Text {
    return itemName;
  };
  
  public query func getOwner() : async Principal {
    return nftOwner;
  };

  public query func getAsset() : async [Nat8] {
    return imageBytes;
  };

  public query func getInfo() : async Text {
    return itemContent;
  };

    public query func getDate() : async Nat {
    return dateContent;
  };

  public query func getCanisterId(): async Principal {
    return Principal.fromActor(this)
  };

  public shared(msg) func transferOwnerShip(newOwner: Principal) : async Text {
    if (msg.caller == nftOwner) {
      nftOwner :=  newOwner;
      return "success";
    } else {
      return "Error:Not done by NFT Owner"
    }
  }

};