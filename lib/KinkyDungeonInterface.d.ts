/**
 * Generated from source code of Kinky Dungeon.
 * Permission to create and redistribute this document is granted
 * by the README document in the Kinky Dungeon project, quoted below.
 * 
 * Begin quote
This source code is made available for those looking to make mods or contribute to Kinky Dungeon. You may download it, modify it for personal use, link to it, and use it to develop content under the Kinky Contributor License seen below. However, things you may not do:

    Re-host the code in its entirety
    Charge money for the source code or any modifications to it
    Claim it as your own
    Use assets from the game without permission from Strait Laced Games LLC

You may redistribute parts of the code as part of a mod, with the following stipulations:

    You may not charge for mods or restrict access to unpaid users in any way (passwords, secret links, etc)
    You may solicit donations (e.g. Patreon) with respect to mods you create
    You must credit Strait Laced Games LLC

Kinky Contributor License (Takes effect as of March 6 2023): Definitions: KINKY DUNGEON - The game currently known as Kinky Dungeon. If the project is later released under a different name or with substantial engine changes, it will still be considered Kinky Dungeon for the purpose of this license, so long as no project under the previous name is being sold or monetized in any way by me (Ada18980). Ada18980 - The individual developer of Kinky Dungeon at the time of this writing

    By contributing to the game you grant me (Ada18980) and any limited liability corporation owned by me a perpetual, nonrevocable, nontransferable license to: a) Distribute the contribution as part of Kinky Dungeon's source code b) Distribute the contribution as part of a paid version of Kinky Dungeon c) Make changes to the contribution for the purpose of Kinky Dungeon development d) Enlist the help of others to make changes to the contribution for the purpose of Kinky Dungeon development e) Use the content in promotional material related to Kinky Dungeon such as videos, banners, teasers

    You may release your own work under any license you choose, but that license shall not apply to Kinky Dungeon itself or any of its code

    You maintain copyright to all contributions you make
 * End of quote
 */

declare type Named = {
    name: string;
};
interface NamedAndTyped extends Named {
    /** Type of the item*/
    type?: string;
}
/** Kinky Dungeon Typedefs*/
interface item extends NamedAndTyped {
    id: number;
    /** Used in order to boost performance */
    linkCache?: string[];
    /** If the item has a different curse from the base curse */
    curse?: string;
    /** Name of the item*/
    name: string;
    /** Type of the item*/
    type?: string;
    /** Faction of the applied item */
    faction?: string;
    /** When added to the inventory, is added as a different item instead. Good for cursed items! */
    inventoryVariant?: string;
    /** Events associated with the item*/
    events?: KinkyDungeonEvent[];
    /** Number of consumables in the inventory*/
    quantity?: number;
    /** Type of lock, Red, Blue, or Gold (potentially more in future)*/
    lock?: string;
    /** Bool to describe if the item is tethered to the leashing enemy*/
    tetherToLeasher?: boolean;
    /** Bool to describe if the item is tethered to KinkyDungeonJailGuard()*/
    tetherToGuard?: boolean;
    /** ID of leashing enemy*/
    tetherEntity?: number;
    /** Leashing location*/
    tetherLocation?: {
        x: number;
        y: number;
    };
    /** Location of the tether*/
    tx?: number;
    /** Location of the tether*/
    ty?: number;
    /** Length of the tether*/
    tetherLength?: number;
    /** Stores the previously linked item*/
    dynamicLink?: item;
    /** Generic item data, able to be manipulated thru events*/
    data?: Record<string, any>;
    /** Escape progress tracking*/
    pickProgress?: number;
    /** Escape progress tracking*/
    struggleProgress?: number;
    /** Escape progress tracking*/
    cutProgress?: number;
    /** Escape progress tracking*/
    unlockProgress?: number;
    /** Number of escape attempts, integer*/
    attempts?: number;
    /** Can be used to make an item tighter and harder to escape, reduces with each escape attempt*/
    tightness?: number;
    /** Determines the current trap attached to the restraint*/
    trap?: string;
    /** Can make the item itself show in quick inv*/
    showInQuickInv?: boolean;
}
interface consumable {
    name: string;
    /** 1 - (Rarity * sub value) = sub threshold */
    sub?: number;
    rarity: number;
    type: string;
    shop?: boolean;
    spell?: string;
    potion?: boolean;
    noHands?: boolean;
    arousalMode?: boolean;
    /** Data var */
    data?: Record<string, string | number>;
    /** Requirement that overrides all other requirements */
    prereq?: string;
    /** Requirement in addition to all other requirements such as not being gagged for potions, bound, etc */
    postreq?: string;
    /** Minimum effectiveness when gagged */
    gagFloor?: number;
    /** Max gag amount to use */
    gagMax?: number;
    /** delay before use */
    delay?: number;
    needMouth?: boolean;
    /** Max strictness allowed before the item cant be used */
    maxStrictness?: number;
    mp_instant?: number;
    mpool_instant?: number;
    wp_instant?: number;
    sp_instant?: number;
    ap_instant?: number;
    mp_gradual?: number;
    wp_gradual?: number;
    sp_gradual?: number;
    ap_gradual?: number;
    arousalRatio?: number;
    scaleWithMaxMP?: boolean;
    scaleWithMaxSP?: boolean;
    scaleWithMaxAP?: boolean;
    scaleWithMaxWP?: boolean;
    duration?: number;
    power?: number;
    amount?: number;
    rechargeCost?: number;
    aura?: string;
    buff?: string;
    costMod?: number;
    shrine?: string;
    sfx?: string;
    noConsumeOnUse?: boolean;
    useQuantity?: number;
    /** Support for multiple effects */
    sideEffects?: string[];
}
declare type KDHasTags = {
    tags: any;
};
interface KDRestraintProps extends KDRestraintPropsBase {
    name: string;
    Group: string;
}
interface KDRestraintPropsBase {
    /** Used in standalone to replace Color */
    Filters?: Record<string, LayerFilter>;
    /** TODO Used in standalone to indicate which faction colors map to which filter
     * color is the faction color type
     * override is whether the faction color overrides the filter. If true it will replace the filter in the model. If false it will apply it over the model's filter. Currently unused
    */
    factionFilters?: Record<string, {
        color: string;
        override: boolean;
    }>;
    /** This item is unaffected by shrines */
    noShrine?: boolean;
    /** This item is beneficial and player wont try to struggle from it */
    good?: boolean;
    inventory?: boolean;
    power?: number;
    weight?: number;
    minLevel?: number;
    allFloors?: boolean;
    cloneTag?: string;
    escapeChance?: any;
    events?: KinkyDungeonEvent[];
    enemyTags?: Record<string, number>;
    enemyTagsMult?: Record<string, number>;
    playerTags?: Record<string, number>;
    playerTagsMult?: Record<string, number>;
    /** Like playerTags, but applies if there is NOT the playertag */
    playerTagsMissing?: Record<string, number>;
    /** Like playerTags, but applies if there is NOT the playertag*/
    playerTagsMissingMult?: Record<string, number>;
    shrine?: string[];
    debris?: string;
    debrisChance?: number;
    /** This item is not kept in the lost items chest unless it is magical */
    noRecover?: boolean;
    /** These items can only be applied if an enemy has the items in her inventory or the unlimited enemy tag */
    limited?: boolean;
    /** Forced to allow these, mainly leashes and collars */
    unlimited?: boolean;
    /** Struggling out of this item breaks it permanently. You can avoid this by using Remove to get the last bit if possible */
    struggleBreak?: boolean;
    /** Security levels for chastity. Non-tech belts should have a Tech security of undefined. Magic belts should have undefined for key and tech.
     * KEY can be circumvented by having a key. Normally you cant remove a plug but you can spend a key to unlock a plug slot for 30 turns or until you are hit or a restraint is removed in that slot.
     * 	Key difficulty of 1 can simply be lockpicked, taking a bit of time.
     * 	Key difficulty of 3 becomes a blue key.
     * MAGIC can be circumvented thru CMD: Unlock
     * Tech cannot be circumvented by the player. TODO add keycard to allow this.
     * Undefined means the specified method can not be used
     * Chastity without Security ignores the security system
     * NPC ability to unlock is OR. Having the ability to unlock just one of the security levels means the NPC can unlock.
    */
    Security?: {
        /** Key security level, for low-tech non-mage factions */
        level_key?: number;
        /** Tech security level, for robots and wolfgirls */
        level_tech?: number;
        /** Magic security level, for mage factions */
        level_magic?: number;
    };
    /** Affinity type: Hook, Edge, or Sharp, Sticky, defaults are Hook (struggle), Sharp (Cut), Edge (Pick), Sticky (Unlock), and none (Pick)*/
    affinity?: {
        Struggle?: string[];
        Cut?: string[];
        Remove?: string[];
        Pick?: string[];
        Unlock?: string[];
    };
    /**
     * Makes it so its never impossible to struggle with these methods, usually best combined with struggleMinSpeed
     */
    alwaysEscapable?: string[];
    /**
     * Makes it so enemies, if they would remove this item to place another restraint on, will simply remove this item instead
     * Higher number means resistance to multibind
     */
    protection?: number;
    /**
     * This item only provides protection if its group is being targeted
     */
    protectionCursed?: boolean;
    /** Determines if the item appears in aroused mode only */
    arousalMode?: boolean;
    /** This item lets you access linked items under it */
    accessible?: boolean;
    /** This item lets you CANT access linked items under it */
    inaccessible?: boolean;
    /** This item lets you ignore its inaccessibility for the sake of trussing up the player */
    deepAccessible?: boolean;
    /** WIP, does nothing yet. Should allow you to access the item under even inaccessible stuff */
    alwaysAccessible?: boolean;
    /** Always inaccessible if something is on top of it */
    alwaysInaccessible?: boolean;
    /** This item can be rendered when linked */
    renderWhenLinked?: string[];
    requireSingleTagToEquip?: string[];
    requireAllTagsToEquip?: string[];
    /** This item always renders when linked */
    alwaysRender?: boolean;
    /** When the mentioned items are rendered, changes the type */
    changeRenderType?: Record<string, string>;
    /** Stacking category, used to determine if you can have multiple of these items in a stack */
    linkCategory?: string;
    /** Stacking size, can't exceed 1 */
    linkSize?: number;
    /** Even with the link size, this one can't be duplicated */
    noDupe?: boolean;
    /** Enemies ignore you while you are wearing it */
    ignoreNear?: boolean;
    /** Enemies wont cast spells or ranged attacks while you are wearing it */
    ignoreSpells?: boolean;
    /** Can always struggle even if it's blocked */
    alwaysStruggleable?: boolean;
    /** Model to use in standalone. Defaults to Asset */
    Model?: string;
    Asset?: string;
    /** Sell price of the item */
    value?: number;
    /** Used for when the visual asset in BC is different from the actual group of the item*/
    AssetGroup?: string;
    /** Dont render item if has the tags */
    hideTags?: string[];
    Color?: string[] | string;
    /** Maximum level, wont be used at this or higher. Inclusive. */
    maxLevel?: number;
    /** Determines the floors the restraint can appear on */
    floors?: Record<string, boolean>;
    /** Overrides escapeChance when you have a ghost helping*/
    helpChance?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    /** Determines the penalty to the escape chance at the limit--full struggle progress when struggling, and 0 for cut/remove/unlock/pick*/
    limitChance?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    struggleMinSpeed?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    struggleMaxSpeed?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    /** Multiplier to struggle power */
    struggleMult?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    /** Sound when using an escape method*/
    sfxEscape?: {
        Struggle?: string;
        Cut?: string;
        Remove?: string;
        Pick?: string;
        Unlock?: string;
        NoStamina?: string;
        NoWill?: string;
        NoMagic?: string;
        MagicCut?: string;
        PickBreak?: string;
        KnifeBreak?: string;
        KnifeDrop?: string;
        KeyDrop?: string;
        PickDrop?: string;
    };
    sfxFinishEscape?: {
        Struggle?: string;
        Cut?: string;
        Remove?: string;
        Pick?: string;
        Unlock?: string;
        Destroy?: string;
    };
    /** Remove sound */
    sfxRemove?: string;
    /** Equip sound */
    sfx?: string;
    sfxGroup?: string;
    /** The vibrator will start vibing whenever another linked vibe starts */
    linkedVibeTags?: string[];
    vibeLocation?: string;
    showInQuickInv?: boolean;
    /** The item is a chastity belt */
    chastity?: boolean;
    /** The item is a chastity bra */
    chastitybra?: boolean;
    /** The item is a piercing */
    piercing?: boolean;
    /** The item rubs against the crotch when you move or struggle*/
    crotchrope?: boolean;
    /** The item provides distraction when you walk around*/
    plugSize?: number;
    /** Binding arms hurts a lot of things but isn't as punishing as hands */
    bindarms?: boolean;
    /** Hands count as bound for struggling purposes */
    restricthands?: number;
    /** Binding hands prevents use of weapons and picks */
    bindhands?: number;
    /** harnesses allow enemies to grab you and slow you */
    harness?: boolean;
    /** hobble is the simplest kind of slowing restraint, increasing slow by this amount*/
    hobble?: number;
    /** Multiplier to the max heel level */
    heelpower?: number;
    /** Blocking feet is for restraints that tie the legs together, forcing the player into SLow Level 2 or higher */
    blockfeet?: boolean;
    /** restricvtion bonus */
    restriction?: number;
    /** Your total gag level is the sum of the gag values of all your variables. Ball gags have 0.3-0.75 based on size and harness, muzzles are 1.0 */
    gag?: number;
    /** Higher value = higher vision loss */
    blindfold?: number;
    /** Maximum stamina percentage the player can have in order for the restraint to be applied. 0.25-0.35 for really strict stuff, 0.9 for stuff like ball gags, none for quick restraints like cuffs */
    maxwill?: number;
    Type?: string;
    /** Item is removed when the wearer goes to prison */
    removePrison?: boolean;
    /** stronger version */
    forceRemovePrison?: boolean;
    /** Changes the dialogue text when you fail to remove the item */
    failSuffix?: Record<string, string>;
    /** Changes the dialogue text when you try to struggle completely */
    specStruggleTypes?: string[];
    /** List of Groups removed */
    remove?: string[];
    /** List of tags removed */
    removeShrine?: string[];
    slimeLevel?: number;
    addTag?: string[];
    addPose?: string[];
    /** Adds a pose (standalonepatched only) if this is the top level restraint */
    addPoseIfTopLevel?: string[];
    forbidPose?: string[];
    removePose?: string[];
    OverridePriority?: number;
    Modules?: number[];
    /** When added to the inventory, is added as a different item instead. Good for multiple stages of the same item, like cuffs */
    inventoryAs?: string;
    /** When added to the inventory by self, is added as a different item instead. Good for multiple stages of the same item, like cuffs */
    inventoryAsSelf?: string;
    /** The item is always kept in your inventory no matter how it gets removed, so long as you don't cut it */
    alwaysKeep?: boolean;
    /** The jailer won't remove these */
    noJailRemove?: boolean;
    /** Increases the difficulty of other items */
    strictness?: number;
    /** Overrides the existing strictness zones for the item's group */
    strictnessZones?: string[];
    /** Can be linked by items with this shrine category */
    LinkableBy?: string[];
    DefaultLock?: string;
    HideDefaultLock?: boolean;
    Link?: string;
    UnLink?: string;
    /** Removes when the player is leashed */
    removeOnLeash?: boolean;
    /** player is enclosed */
    enclose?: boolean;
    /** ignore the player if player is 0 stamina and the enemy is non leashing */
    ignoreIfNotLeash?: boolean;
    /** Default tether length */
    tether?: number;
    leash?: boolean;
    /** The vibe can be remote controlled by enemies */
    allowRemote?: boolean;
    /** Multiplies the escape chance */
    escapeMult?: number;
    /** Outfit to force */
    forceOutfit?: string;
    /** Outfit to force (priority default = base power) */
    forceOutfitPriority?: number;
    /** Clothes for dressing */
    alwaysDress?: overrideDisplayItem[];
    /** Clothes for dressing */
    alwaysDressModel?: alwaysDressModel[];
    /** The item always bypasses covering items, such as dresses and chastity belts */
    bypass?: boolean;
    /** The item can only be cut with magical implements */
    magic?: boolean;
    /** The item is regarded as a non-binding item, so the game knows how to handle it. Used for stuff like cuffs which are not binding by default */
    nonbinding?: boolean;
    /** Instantly forces a high slow level, for stuff like slime */
    freeze?: boolean;
    /** Immobilizes the player */
    immobile?: boolean;
    /** The item CAN be trapped, which triggers when you struggle out */
    trappable?: boolean;
    /** The item can only be removed through a special condition known as a curse */
    curse?: string;
    /** The extra difficulty the item adds to the global difficulty var */
    difficultyBonus?: number;
    /** Whether or not the angels will take it off when you call them */
    divine?: boolean;
    /** If this is enabled, then you can spend ancient energy to use a potion at no reduction to potion effectiveness while gagged */
    potionCollar?: boolean;
    /** Always allows potions while this restraint is on */
    allowPotions?: boolean;
    /** Allows the user to walk across slime */
    slimeWalk?: boolean;
    /** Amount of ancient energy it draws per turn */
    enchantedDrain?: number;
    /** Whether or not this is an Ancient item, prison respects it */
    enchanted?: boolean;
    /** Whether or not this is special in some way*/
    special?: boolean;
    /** Faction color index */
    factionColor?: number[][];
    /** Determines if it gets hidden by the 'Hide Armor' option */
    armor?: boolean;
    /** The item can be linked by anything on top*/
    LinkAll?: boolean;
    /** The item can be linked over anything below*/
    AlwaysLinkable?: boolean;
    /** The item always renders items below*/
    UnderlinkedAlwaysRender?: boolean;
    /** The item cannot be linked over anything */
    NoLinkOver?: boolean;
    /** Power to display, not actual power */
    displayPower?: number;
}
interface restraint extends KDRestraintProps {
    power: number;
    preview?: string;
    /** Base weight of the restraint, required */
    weight: number;
    minLevel: number;
    Color: string[] | string;
    /** Descriptor for tightness, e.g. Secure, Thick */
    tightType?: string;
    escapeChance: any;
    enemyTags: Record<string, number>;
    /** Multiplies the weight AFTER, useful for minimizing things */
    enemyTagsMult?: Record<string, number>;
    playerTags: Record<string, number>;
    shrine: string[];
    /** These tags cause the restraint to appear on all floors regardless of map*/
    ignoreFloorTags?: string[];
    /** These tags cause the restraint to appear on all floors regardless of minlevel*/
    ignoreMinLevelTags?: string[];
    /** These tags cause the restraint to appear on all floors regardless of maxlevel*/
    ignoreMaxLevelTags?: string[];
    /**
     * A map of:
     * key - Name of the ApplyVariant
     * value - weight modifiers
     */
    ApplyVariants?: Record<string, {
        weightMod: number;
        weightMult: number;
        playerTags?: Record<string, number>;
        playerTagsMult?: Record<string, number>;
        playerTagsMissing?: Record<string, number>;
        playerTagsMissingMult?: Record<string, number>;
        enemyTags: Record<string, number>;
        enemyTagsMult?: Record<string, number>;
    }>;
}
interface KDEscapeChanceList {
    Struggle?: number;
    Cut?: number;
    Remove?: number;
    Pick?: number;
    Unlock?: number;
}
declare type outfitKey = string;
declare type mapKey = string;
interface floorParams {
    /** Weighted list of successor tileset, positive X */
    successorPositive: Record<string, number>;
    /** Weighted list of successor tileset, negative X */
    successorNegative: Record<string, number>;
    /** Weighted list of successor tileset, same X */
    successorSame: Record<string, number>;
    color: string;
    /** List of factions allowed to be primary or secondary here */
    factionList?: string[];
    /** This code is run after a worldgen */
    worldGenCode?: () => void;
    tagModifiers?: Record<string, number>;
    globalTags?: Record<string, boolean>;
    shadowColor?: number;
    lightColor?: number;
    background: string;
    openness: number;
    density: number;
    torchchance?: number;
    torchlitchance?: number;
    music: Record<string, number>;
    specialChests?: Record<string, number>;
    /** Will add more/less torches on the main path */
    torchchanceboring?: number;
    torchreplace?: {
        sprite: string;
        unlitsprite?: string;
        brightness: number;
    };
    /** These tiles wont alter wall tiles in this tileset */
    noReplace?: string;
    /** Chance of shrine having mana */
    manaChance?: number;
    crackchance: number;
    foodChance?: number;
    barchance: number;
    brightness: number;
    chestcount: number;
    shrinecount: number;
    shrinechance: number;
    ghostchance: number;
    /** Chance to have a closed door */
    doorchance: number;
    /** Chance to have an open door */
    nodoorchance: number;
    doorlockchance: number;
    /** Chance to replace a trap on a door tile with a doortrap instead of deleting the door. Default to trapchance */
    doorlocktrapchance?: number;
    /** Chance to replace a door with a lock */
    doortrapchance?: number;
    minortrapChance?: number;
    chargerchance?: number;
    litchargerchance?: number;
    chargercount?: number;
    trapchance: number;
    barrelChance?: number;
    grateChance: number;
    rubblechance: number;
    brickchance: number;
    cacheInterval: number;
    cageChance?: number;
    wallhookchance?: number;
    ceilinghookchance?: number;
    hallopenness?: number;
    /** FOrces all setpieces to use POIs, useful for tunnel type maps with thick walls to prevent entombe pieces*/
    forcePOI?: boolean;
    gaschance?: number;
    gasdensity?: number;
    gastype?: string;
    wallRubblechance?: number;
    lockmult?: number;
    floodchance?: number;
    forbiddenChance: number;
    forbiddenGreaterChance: number;
    setpieces?: {
        Type: string;
        Weight: number;
    }[];
    traps: {
        Name: string;
        Enemy?: string;
        Spell?: string;
        extraTag?: string;
        Level: number;
        Power: number;
        Weight: number;
        strict?: true;
        teleportTime?: number;
        filterTag?: string;
        filterBackup?: string;
        arousalMode?: boolean;
    }[];
    min_width: number;
    max_width: number;
    min_height: number;
    max_height: number;
    ShopExclusives?: string[];
    ShopExclusivesArousal?: string[];
    enemyTags: string[];
    "defeat_outfit": outfitKey;
    /**
     * key required for jailers INSTEAD of "jailer"
     */
    jailType?: string;
    guardType?: string;
    "shrines": {
        Type: string;
        Weight: number;
    }[];
}
interface overrideDisplayItem {
    /** Bondage club asset */
    Item: string;
    /** Group */
    Group: string;
    /** Standalone model */
    Model?: string;
    /** Color */
    Color: string[] | string;
    /** Filters */
    Filters?: Record<string, LayerFilter>;
    /** Faction color index */
    factionColor?: number[][];
    /** Faction filter index */
    factionFilters?: Record<string, {
        color: string;
        override: boolean;
    }>;
    /** Property for BC compat */
    Property?: any;
    /** Whether or not it overrides items already on */
    override?: boolean;
    /** Uses the player's hair color as the item color */
    useHairColor?: boolean;
    /** Used for overriding BC priority */
    OverridePriority?: number[] | number;
}
interface alwaysDressModel {
    /** Standalone 5.0+ asset */
    Model: string;
    /** Group */
    Group?: string;
    /** Filters */
    Filters?: Record<string, LayerFilter>;
    /** Faction filter index */
    factionFilters?: Record<string, {
        color: string;
        override: boolean;
    }>;
    /** Inherits the filters of the main */
    inheritFilters?: boolean;
    /** Whether or not it overrides items already on */
    override?: boolean;
    /** Uses the player's hair color as the item color */
    useHairColor?: boolean;
}
interface KDLoadout {
    name: string;
    tags?: string[];
    singletag: string[];
    singletag2?: string[];
    forbidtags: string[];
    chance: number;
    items?: string[];
    restraintMult?: number;
    multiplier?: number;
}
interface enemy extends KDHasTags {
    /** This enemy will always kite the player even if player is harmless*/
    alwaysKite?: boolean;
    /** This enemy will give an intro when it first sees you*/
    intro?: string;
    nameList?: string;
    /** Multiplier to tease damage */
    teaseMod?: number;
    /** These enemies always carry these items at the start */
    startingItems?: string[];
    /** Restraint filters */
    RestraintFilter?: {
        /** Increases effective level */
        levelBonus?: number;
        /** Starts with more restraints!! */
        bonusRestraints?: number;
        /** This enemy can apply restraints without needing them in her pockets */
        unlimitedRestraints?: boolean;
        /** Restraints applied must all be from inventory */
        invRestraintsOnly?: boolean;
        /** Restraints applied must all be limited */
        limitedRestraintsOnly?: boolean;
        /** Restraints with more power than this must be in inventory. Default is 3*/
        powerThresh?: number;
        /** These wont be added to the initial inventory 3*/
        ignoreInitial?: string[];
        /** These wont be added to the initial inventory 3*/
        ignoreInitialTag?: string[];
        /** This enemy won't restock restraints out of sight */
        noRestock?: boolean;
        /** Enemy will restock to this percentage */
        restockPercent?: number;
        /** These enemies always restock these restraint items if they dont have them */
        requiredItems?: string[];
    };
    /** Magical properties */
    Magic?: {
        /** Specific cooldown for each spell. For example, Fuuka's FuukaOrb can only be done every 10 turns */
        castCooldownUnique?: Record<string, number>;
        /** Priority for a spell choice */
        priority?: Record<string, number>;
    };
    /** Security levels for accessing chastity */
    Security?: {
        /** Key security level, for low-tech non-mage factions */
        level_key?: number;
        /** Tech security level, for robots and wolfgirls */
        level_tech?: number;
        /** Magic security level, for mage factions */
        level_magic?: number;
    };
    /** Graphical peculiarities */
    GFX?: {
        /** Custom sprite while lying in wait */
        AmbushSprite?: string;
        /** custom sprite width*/
        spriteWidth?: number;
        /** custom sprite height*/
        spriteHeight?: number;
        /** This enemy is affected by lighting */
        lighting?: boolean;
    };
    /** Sound properties */
    Sound?: {
        /** Sound multiplier while moving, default 6 */
        moveAmount?: number;
        /** Constant sound amount */
        baseAmount?: number;
        /** Cast sound amount */
        castAmount?: number;
        /** Attack sound amount */
        attackAmount?: number;
        /** alert sound amount */
        alertAmount?: number;
        /** Decay per turn */
        decay?: number;
    };
    /** Behavior tags */
    Behavior?: {
        /** This enemy will hold still when near the player */
        holdStillWhenNear?: boolean;
        /** If this is true, the intent is that it behaves more as an allied enemy rather than a summon */
        behaveAsEnemy?: boolean;
        /** This enemy will always want to add more restraints~ */
        thorough?: number;
        /** Can't play */
        noPlay?: boolean;
        /** Wont stop tying you until these groups are bound */
        ensureGroupTied?: string[];
        /** Wont stop tying you until these playertags are fulfilled */
        ensurePlayerTag?: string[];
        /** Wont stop tying you until these groups are bound (arousal mode only)*/
        ensureGroupTiedArousal?: string[];
        /** Wont stop tying you until these playertags are fulfilled (arousal mode only)*/
        ensurePlayerTagArousal?: string[];
    };
    /** This enemy wont appear outside of its designated floors even if it shares the tag */
    noOverrideFloor?: boolean;
    /** This tag will be added to the selection tags if the enemy has it, for loot and ambush spawning purposes */
    summonTags?: string[];
    /** This tag will be added to the selection tags if the enemy has it, for loot and ambush spawning purposes. Multiple copies will be pushed*/
    summonTagsMulti?: string[];
    /** If true, this enemy will always be bound to the enemy that summons it */
    alwaysBound?: boolean;
    /** These enemies wont appear in distracted mode */
    arousalMode?: boolean;
    name: string;
    /** Special dialogue played when clicked on instead of standard ally dialogue */
    specialdialogue?: string;
    /** Overrides the default weight reduction for being outside of a miniboss/boss/minor/elite box */
    outOfBoxWeightMult?: number;
    /** Tags, used for determining weaknesses, spawning, restraints applied, and rank*/
    tags: Record<string, boolean>;
    /** Spell resist, formula is spell damage taken = 1 / (1 + spell resist) */
    spellResist?: number;
    /** Whether or not the enemy is friendly to the player and attacks enemies */
    allied?: boolean;
    /** Enemies will prioritize this enemy less than other enemies. Used by allies only. */
    lowpriority?: boolean;
    /** Generates token chance = 1 - 1 / (1 + evasion) */
    evasion?: number;
    /** Generates token chance = 1 - 1 / (1 + block) */
    block?: number;
    /** Amount enemy blocks */
    blockAmount?: number;
    maxdodge?: number;
    maxblock?: number;
    preferDodge?: boolean;
    preferBlock?: boolean;
    /** */
    armor?: number;
    /** Starting data */
    data?: Record<string, string>;
    /** HIde timer */
    hidetimerbar?: boolean;
    Attack?: {
        mustBindorFail?: boolean;
    };
    /** Contains data pertaining to the creature's awareness */
    Awareness?: {
        /** Optional tag to override chase radius */
        chaseradius?: number;
        /** Creature hearing multiplier */
        hearingMult?: number;
        /** Creature hearing base */
        hearingRadius?: number;
        /** Creature vision base, affects awareness gain */
        vision?: number;
        /** multiplies sneak threshold */
        senseSpeed?: number;
    };
    /** Contains data pertaining to the creature's effect on reputation and its behaviors from it */
    Reputation?: {
        /** Optional tag to make an enemy not give up rep when killed */
        noRepLoss?: boolean;
    };
    /** */
    followRange?: number;
    /** wander = wanders randomly
     * hunt = wanders, then follows the player
     * guard = follows a specific point
     * ambush = waits for the player to come near before becoming active
     * patrol = walks between predefined global points on the map
    */
    AI?: string;
    /** HP regen per turn*/
    regen?: number;
    /** */
    visionRadius?: number;
    /** Enemy will not get a vision bonus in one direction*/
    nonDirectional?: boolean;
    /** Enemy will not flip based on the enemy direction*/
    noFlip?: boolean;
    /** Max enemy hp*/
    maxhp?: number;
    /** Max enemy mana */
    maxmana?: number;
    /** enemy mana regen per turn */
    manaregen?: number;
    /** Shield enemy starts with */
    shield?: number;
    /** Shield enemy starts with */
    shieldregen?: number;
    /** Number of turns an enemy can sprint for */
    stamina?: number;
    /** Sprint speed multiplier. Default 1.5*/
    sprintspeed?: number;
    /** HP the enemy starts at */
    startinghp?: number;
    /** */
    minLevel?: number;
    /** */
    maxLevel?: number;
    /** */
    weight?: number;
    /** */
    movePoints?: number;
    /** */
    attackPoints?: number;
    /** String declaring what types of attacks this unit has */
    attack?: string;
    /** */
    attackRange?: number;
    /** */
    terrainTags?: Record<string, number>;
    /** Multiplies the weight AFTER modifiers */
    weightMult?: number;
    /** */
    floors?: Record<string, boolean>;
    /** Enemy events */
    events?: KinkyDungeonEvent[];
    /** */
    allFloors?: boolean;
    /** */
    noblockplayer?: boolean;
    /** */
    triggersTraps?: boolean;
    /** The enemy follows the player at the end of the level */
    keepLevel?: boolean;
    /** Boost to accuracy, 1 + (1 + accuracy)*/
    accuracy?: number;
    /** Blindsight toward the player but not other enemies. Mainly used by allies so they know where the player is. */
    playerBlindSight?: number;
    /** */
    attackWidth?: number;
    /** */
    power?: number;
    /** */
    dmgType?: string;
    /** Tease attacks list to use */
    teaseAttacks?: string;
    /** */
    bound?: string;
    /** Outfit for paperdoll */
    outfit?: string;
    /** Outfit for paperdoll */
    style?: string;
    /** Enemy is not a humanoid, used for skeletons */
    nonHumanoid?: boolean;
    /** */
    color?: string;
    /** counts toward the player's permanent summmon limit */
    CountLimit?: boolean;
    /** Does not target silenced enemies */
    noTargetSilenced?: boolean;
    /** */
    silenceTime?: number;
    /** List of spells*/
    spells?: string[];
    /** starting buffs */
    startBuffs?: any[];
    /** This enemy will not miscast spells when distracted*/
    noMiscast?: boolean;
    /** Sound effect when miscasting */
    miscastsfx?: string;
    /** Message when miscasting */
    miscastmsg?: string;
    /** This enemy knows the unlock command up to this level*/
    unlockCommandLevel?: number;
    /** This enemy must wait this long between unlock command attempts. Default is 90*/
    unlockCommandCD?: number;
    /** Enemy will self cast these */
    selfCast?: Record<string, boolean>;
    /** */
    spellCooldownMult?: number;
    /** */
    spellCooldownMod?: number;
    /** */
    kite?: number;
    /** */
    playerFollowRange?: number;
    /** */
    minSpellRange?: number;
    /** */
    stopToCast?: boolean;
    /** Shows a marker when the creature has a spell ready */
    spellRdy?: boolean;
    /** Casts while moving */
    castWhileMoving?: boolean;
    /** Enemy does not attack */
    noAttack?: boolean;
    /** Disarm counter increased by this fraction when attacked. When it reaches 1, the player's next attack will miss, otherweise it will reduce by this amount per turn */
    disarm?: number;
    /** Boost to power when target is not the player or when the enemy cant tie up the player */
    fullBoundBonus?: number;
    /** Loot*/
    dropTable?: any[];
    /** */
    attackWhileMoving?: boolean;
    /** Doesnt cast spells when the player is out of stamina */
    noSpellsLowSP?: boolean;
    /** Rep changes on death */
    rep?: Record<string, number>;
    /** Rep changes on death */
    factionrep?: Record<string, number>;
    /** Chance to generate as a guard instead */
    guardChance?: number;
    /** When generating clusters of enemies, the clustering units must have this tag*/
    clusterWith?: string;
    /** Chance to ignore the player if the enemy has an ignore tag like ignorenoSP */
    ignorechance?: number;
    /** The enemy count is incremented by this amount when the enemy is spawned during map gen*/
    difficulty?: number;
    /** The enemy will not attack if the path to the player is blocked, and will move closer*/
    projectileAttack?: boolean;
    /** The enemy will use 'buff' tagged spells on allies*/
    buffallies?: boolean;
    /** Special attack property*/
    stunTime?: number;
    /** Stamina damage per hit */
    staminaDamage?: number;
    /** Special attack property. Cooldown of the special attack.*/
    specialCD?: number;
    /** Special attack property. Added to the special attack in addition to the enemy's default attack*/
    specialAttack?: string;
    /** Special attacks ignore stamina requirements */
    specialIgnoreStam?: boolean;
    /** Special attack property. Removed these types from the main attack when special attacking.*/
    specialRemove?: string;
    /** Adds additional restraint tags when special attacking*/
    specialExtraTags?: string[];
    /** removes the specified restraint tags when special attacking*/
    specialRemoveTags?: string[];
    /** Uses a special message for Special attacks */
    specialMsg?: boolean;
    /** specifies a condition for using a special attack*/
    specialCondition?: string;
    /** Special attack property*/
    specialPower?: number;
    /** Special attack property*/
    specialDamage?: string;
    /** Special attack property. Special attack will go on CD when the enemy uses it, not when it hits*/
    specialCDonAttack?: boolean;
    /** Special attack property*/
    specialWidth?: number;
    /** Special attack property*/
    specialRange?: number;
    /** Which shrines the enemy is associated with*/
    shrines?: string[];
    /** */
    followLeashedOnly?: boolean;
    /** */
    blindSight?: number;
    /** */
    specialCharges?: number;
    /** */
    strictAttackLOS?: boolean;
    /** */
    specialAttackPoints?: number;
    /** */
    stealth?: number;
    /** After being seen the enemy can go back into stealth if the player moves away*/
    noReveal?: boolean;
    /** */
    ambushRadius?: number;
    /** For AI = 'ambush', this enemy will wander until it sees the player and triggers the ambush. Mostly used for invisible enemies. */
    wanderTillSees?: boolean;
    /** For kiting enemies, this enemy moves in to attack Only When the player is Disabled. Used on enemies like the Maidforce stalker who stay away from the enemy but have powerful disabling effects like flash bombs*/
    dontKiteWhenDisabled?: boolean;
    /** The special attack only binds on kneeling players*/
    bindOnDisableSpecial?: boolean;
    /** The regular attack only binds on kneeling players*/
    bindOnDisable?: boolean;
    /** Enemy will still try to bind even if (bindOnDisable) is true, if the player isn't actively fighting*/
    smartBind?: boolean;
    /** Sfx when an attack lands*/
    hitsfx?: string;
    /** All lockable restraints will use this lock*/
    useLock?: string;
    /** Uses this lock when using the lock attack */
    attackLock?: string;
    /** Faction that is always applied by this unit's restraints */
    applyFaction?: string;
    /** Faction that is default applied by this unit's restraints */
    defaultFaction?: string;
    /** Minimum range for attack warning tiles, used to prevent high range enemies from attacking all around them*/
    tilesMinRange?: number;
    /** Minimum range to try attacking */
    attackMinRange?: number;
    /** Minimum range to try attacking */
    specialMinRange?: number;
    /** */
    noKiteWhenHarmless?: boolean;
    /** */
    noSpellsWhenHarmless?: boolean;
    /** */
    ignoreStaminaForBinds?: boolean;
    /** */
    sneakThreshold?: number;
    RemoteControl?: {
        /** */
        remote?: number;
        /** */
        remoteAmount?: number;
        /** If the enemy has a remote that can control punishing items (e.g. shock collars), the range that they can control items from */
        punishRemote?: number;
        /** The chance per tick that the enemy will use their remote remote to punish the player when they are within range */
        punishRemoteChance?: number;
    };
    /** Crit strike modifier of the enemy's attacks */
    crit?: number;
    /** */
    bypass?: boolean;
    /** */
    multiBind?: number;
    /** */
    noLeashUnlessExhausted?: boolean;
    /** */
    ethereal?: boolean;
    /** This enemy always dodges regular attacks */
    alwaysEvade?: boolean;
    /** This enemy always blocks regular attacks */
    alwaysBlock?: boolean;
    /** Info for enemy resistance */
    Resistance?: {
        /** Applies a resistance profile to the enemy, which is a preset set of tags */
        profile?: string[];
        /** This enemy cannot dodge if the attacking weapon is magical */
        alwaysHitByMagic?: boolean;
        /** This enemy cannot BLOCK if the attacking weapon is magical */
        alwaysBypassedByMagic?: boolean;
        /** Physical block: applied only when not disabled or vulnerable */
        block_phys?: number;
        /** Magic block: applied only when not disabled or vulnerable */
        block_magic?: number;
        /** Crits are half as effective when enemy is aware */
        toughArmor?: boolean;
        /** Same as tough armor, but also applies while unaware */
        toughArmorAlways?: boolean;
    };
    /** */
    summonRage?: boolean;
    /** */
    noAlert?: boolean;
    /** The enemy will follow enemies defined by this block*/
    master?: masterInfo;
    /** */
    pullTowardSelf?: boolean;
    /** */
    pullDist?: number;
    /** */
    summon?: any[];
    /** */
    sneakthreshold?: number;
    /** */
    blockVisionWhileStationary?: boolean;
    /** */
    squeeze?: boolean;
    /** Enemy will not chase player for being unrestrained. Use on enemies like drones who have lines but dont bind readily */
    noChaseUnrestrained?: boolean;
    /** */
    suicideOnSpell?: boolean;
    /** */
    suicideOnAdd?: boolean;
    /** */
    suicideOnEffect?: boolean;
    /** */
    suicideOnLock?: boolean;
    /** Hostile even on parole */
    alwaysHostile?: boolean;
    /** */
    specialsfx?: string;
    /** Stuns the enemy when the special attack goes on CD without a hit */
    stunOnSpecialCD?: number;
    /** Dash info */
    Dash?: {
        /** Does not dash to the player if the dash is stepped out of the way of*/
        noDashOnSidestep?: boolean;
        /** Does not dash to the player if the dash is dodged*/
        noDashOnMiss?: boolean;
        /** Does not dash to the player if the dash is blocked*/
        noDashOnBlock?: boolean;
        /** Forces the event to play when a dash misses, even if there are no eventable attack types*/
        EventOnDashMiss?: boolean;
        /** Forces the event to play when a dash is blocked, even if there are no eventable attack types*/
        EventOnDashBlock?: boolean;
    };
    attackBonus?: number;
    /** */
    cohesion?: number;
    /** */
    noSpellLeashing?: boolean;
    /** */
    projectileTargeting?: boolean;
    /** */
    ondeath?: any[];
    /** */
    blindTime?: number;
    /** */
    tilesMinRangeSpecial?: number;
    /** */
    convertTiles?: any[];
    /** the enemy sends a special message when pulling the player */
    pullMsg?: boolean;
    /** */
    dashThruWalls?: boolean;
    /** */
    dashThrough?: boolean;
    /** */
    cohesionRange?: number;
    /** */
    kiteChance?: number;
    /** this enemy ignores the player when these flags are set*/
    ignoreflag?: string[];
    /** flags set when the player is hit but no binding occurs*/
    failAttackflag?: string[];
    /** How long to set the flag for */
    failAttackflagDuration?: number;
    /** */
    visionSummoned?: number;
    /** */
    dependent?: boolean;
    /** */
    nopickpocket?: boolean;
    /** */
    attackThruBars?: boolean;
    /** */
    noCancelAttack?: boolean;
    /** */
    keys?: boolean;
    /** If this enemy is always enraged */
    rage?: boolean;
    /** Starting lifetime of enemy*/
    lifespan?: number;
    /** This enemy cant be swapped */
    noDisplace?: boolean;
    /** The enemy will cast spells even if you are in parole */
    spellWhileParole?: boolean;
    /** This line is a suffic to the line they say when they want to play with you */
    playLine?: string;
    /** Blocks vision */
    blockVision?: boolean;
    /** Hit SFX for enemy special attack */
    hitsfxSpecial?: string;
    /** Effect when the enemy misses */
    misssfx?: string;
    /** Effect when the enemy blocks */
    blocksfx?: string;
    /** SFX on certain cues */
    cueSfx?: {
        /** When the enemy takes no damage from a melee attack */
        Block?: string;
        /** When the enemy takes no damage from a magic attack */
        Resist?: string;
        /** When the enemy takes damage in general */
        Damage?: string;
        /** When the player misses it */
        Miss?: string;
    };
    /** The enemyeffect when player is hit */
    effect?: any;
    /** Cant cast spells while winding up an attack */
    noSpellDuringAttack?: boolean;
    /** Base faction of this enemy, overridden by the entity faction */
    faction?: string;
    /** This enemy does not channel its spells */
    noChannel?: boolean;
    /** Focuses player over summmons, ignores decoys */
    focusPlayer?: boolean;
    /** Cant be swapped by another enemy pathing, even if the enemy is a jailer or leasher.
     * For barricades and other dynamically placed barriers, use "immobile" so it doesnt block important enemies
     */
    immobile?: boolean;
    /** Stops casting spells after there are this many enemies */
    enemyCountSpellLimit?: number;
    /** List of animations to be applied */
    Animations?: string[];
}
interface shopItem {
    cost: any;
    rarity: any;
    costMod?: any;
    shoptype: string;
    consumable?: string;
    quantity?: number;
    name: any;
}
interface weapon {
    ignoreshield?: boolean;
    shield_crit?: boolean;
    shield_stun?: boolean;
    shield_freeze?: boolean;
    shield_bind?: boolean;
    shield_snare?: boolean;
    shield_slow?: boolean;
    shield_distract?: boolean;
    shield_vuln?: boolean;
    arousalMode?: boolean;
    /** Modifies the cost by changing the rarity for cost purposes only */
    costMod?: number;
    name: string;
    dmg: number;
    chance: number;
    type: string;
    bind?: number;
    /** For rendering on player portrait */
    angle?: number;
    crit?: number;
    bindcrit?: number;
    bindType?: string;
    distract?: number;
    bindEff?: number;
    distractEff?: number;
    desireMult?: number;
    light?: boolean;
    heavy?: boolean;
    massive?: boolean;
    boundBonus?: number;
    tease?: boolean;
    rarity: number;
    staminacost?: number;
    magic?: boolean;
    cutBonus?: number;
    playSelfBonus?: number;
    playSelfMsg?: string;
    playSelfSound?: string;
    unarmed: boolean;
    shop: boolean;
    noequip?: boolean;
    sfx: string;
    events?: KinkyDungeonEvent[];
    noHands?: boolean;
    silent?: boolean;
    /** Weapon cant be used with arm bondage */
    clumsy?: boolean;
    /** Skip turns after attacking */
    channel?: number;
    /** Slows player after attacking */
    channelslow?: boolean;
    novulnerable?: boolean;
    tags?: string[];
    special?: {
        type: string;
        spell?: string;
        prereq?: string;
        selfCast?: boolean;
        requiresEnergy?: boolean;
        energyCost?: number;
        range?: number;
    };
    /** Can be used with Floating weapon even with no hands */
    telekinetic?: boolean;
}
interface KinkyDungeonEvent {
    /** This is an integer. if an event has this the game skips it and comes back after executing everything else.
     * Best to keep it low for performance reasons, if in a draw loop.
     */
    cloneTags?: string[];
    frequencyMax?: number;
    frequencyMin?: number;
    frequencyStep?: number;
    frequencyTag?: string;
    delayedOrder?: number;
    /** A dynamic event is specified as 'dynamic' and is specified under ItemMap.dynamic
     * (replace ItemMap with the event map you need)
     * This lets you use the same code for multiple events, which is risky but convenient
    */
    dynamic?: boolean;
    trim?: boolean;
    cost?: number;
    offhand?: boolean;
    offhandonly?: boolean;
    cursetype?: string;
    /** This is from a temporary event curse */
    curse?: boolean;
    /**
     * For Dynamic events there is no easy way of getting the 'target' of a targeted event,
     * for example bulletHitEnemy or playerAttack
     * targetType specifies the key in the event data that leads to an entity target
     *
     * Certain constants apply:
     * KDPLAYER - the current player entity
     * KDGUARD - the current jail guard
     * KDLEASHER - the current leasher
     * KDNEAREST - the nearest entity to the player
     * KDNEARESTHOSTILE - the nearest hostile enemy
     */
    targetType?: string;
    /**
     * For Dynamic events there is no easy way of getting the 'attacker' of a targeted event,
     * for example bulletHitEnemy or playerAttack
     * attackerType specifies the key in the event data that leads to an entity which is responsible for the event
     *
     * Certain constants apply:
     * KDPLAYER - the current player entity
     * KDGUARD - the current jail guard
     * KDLEASHER - the current leasher
     * KDNEAREST - the nearest entity to the player
     * KDNEARESTHOSTILE - the nearest hostile enemy
     */
    attackerType?: string;
    tags?: string[];
    duration?: number;
    always?: boolean;
    bindEff?: number;
    type: string;
    trigger: string;
    threshold?: number;
    restraint?: string;
    sfx?: string;
    power?: number;
    distractEff?: number;
    desireMult?: number;
    count?: number;
    player?: boolean;
    bind?: number;
    crit?: number;
    bindcrit?: number;
    distract?: number;
    mult?: number;
    kind?: string;
    original?: string;
    variance?: number;
    damage?: string;
    buffTypes?: string[];
    damageTrigger?: string;
    dist?: number;
    aoe?: number;
    buffType?: string;
    bullet?: boolean;
    melee?: boolean;
    time?: number;
    bindType?: string;
    chance?: number;
    buff?: any;
    lock?: string;
    desc?: string;
    buffSprite?: string;
    msg?: string;
    /** Like a prereq, but always active even if the event doesnt specify*/
    condition?: string;
    /** Specifies a prereq that the event itself can use */
    prereq?: string;
    color?: string;
    filter?: LayerFilter;
    bgcolor?: string;
    /** Vibe */
    edgeOnly?: boolean;
    /** Vibe */
    cooldown?: Record<string, number>;
    /** A required enemy tag */
    requiredTag?: string;
    /** Generic required tags */
    requireTags?: string[];
    /** Generic filtered tags */
    filterTags?: string[];
    /** Type of struggle that this event triggers on */
    StruggleType?: string;
    requireEnergy?: boolean;
    /** Limit of whatever thius event modifies */
    limit?: number;
    energyCost?: number;
    /** The event gets copied to any restraint if the item is linked */
    inheritLinked?: boolean;
    /** Spell to cast at the target */
    spell?: string;
    /** Chance to trigger is 1+(submissive % * subMult)*/
    subMult?: number;
    /** Won't trigger while being leashed */
    noLeash?: boolean;
    /** Stun duration */
    stun?: number;
    /** Chance the player will get warned instead of punshed */
    warningchance?: number;
    /** triggers from this component */
    punishComponent?: string;
    /** List of restraints or other string params */
    list?: string[];
    /** Whether or not the event only triggers on human targets */
    humanOnly?: boolean;
    /** Distance having to do with stealth */
    distStealth?: number;
    /** Dialogue key an enemy should send */
    enemyDialogue?: string;
    escapeMethod?: string;
    enemy?: string;
    prevSlowLevel?: number;
}
declare type masterInfo = {
    type: string;
    range: number;
    loose?: boolean;
    aggressive?: boolean;
    dependent?: boolean;
    maxDist?: number;
    masterTag?: string;
};
interface String {
    KDReplaceOrAddDmg(dmg: string, replaceString?: string): string;
}
interface entity {
    blockedordodged?: number;
    blocks?: number;
    dodges?: number;
    shield?: number;
    visual_hp?: number;
    visual_boundlevel?: number;
    visual_distraction?: number;
    visual_lifetime?: number;
    /** The enemy will follow enemies defined by this block*/
    master?: masterInfo;
    flip?: boolean;
    sprinted?: boolean;
    exertion?: number;
    playLine?: string;
    intro?: string;
    offX?: number;
    offY?: number;
    scaleX?: number;
    scaleY?: number;
    animTime?: number;
    /** Spawn location */
    spawnX?: number;
    /** Spawn location */
    spawnY?: number;
    /** Opinion of you. Positive is good. */
    opinion?: number;
    /** Determines if an enemy can be dommed or not */
    domVariance?: number;
    hideTimer?: boolean;
    Enemy: enemy;
    /** Amount of sound the entity is currently producing */
    sound?: number;
    /** List an enemy ID. Enemy will be bound to this one and dies if not found. BoundTo of -1 indicates bound to the player, and will expire if the player is jailed or passes out*/
    boundTo?: number;
    /** This enemy is weakly bound and simply stunning the caster will delete it */
    weakBinding?: boolean;
    player?: boolean;
    /** This enemy has keys to red locked doors */
    keys?: boolean;
    /** Additional Ondeath, e.g quest markers or rep */
    ondeath?: any[];
    /** Used for misc data */
    data?: Record<string, string>;
    /** Rep changes on death */
    rep?: Record<string, number>;
    /** Rep changes on death */
    factionrep?: Record<string, number>;
    dialogue?: string;
    dialogueDuration?: number;
    dialogueColor?: string;
    dialoguePriority?: number;
    CustomName?: string;
    CustomSprite?: string;
    CustomNameColor?: string;
    rescue?: boolean;
    personality?: string;
    patrolIndex?: number;
    flags?: Record<string, number>;
    gold?: number;
    noDrop?: boolean;
    droppedItems?: boolean;
    specialdialogue?: string;
    aggro?: number;
    id?: number;
    hp: number;
    mana?: number;
    AI?: string;
    moved?: boolean;
    playerdmg?: number;
    idle?: boolean;
    summoned?: boolean;
    boundLevel?: number;
    specialBoundLevel?: Record<string, number>;
    distraction?: number;
    desire?: number;
    lifetime?: number;
    maxlifetime?: number;
    attackPoints?: number;
    attackBonus?: number;
    movePoints?: number;
    aware?: boolean;
    vp?: number;
    tracking?: boolean;
    revealed?: boolean;
    ambushtrigger?: boolean;
    castCooldown?: number;
    castCooldownSpecial?: number;
    castCooldownUnique?: Record<string, number>;
    specialCharges?: number;
    usingSpecial?: boolean;
    ignore?: boolean;
    specialCD?: number;
    disarmflag?: number;
    channel?: number;
    items?: string[];
    tempitems?: string[];
    x: number;
    y: number;
    lastx?: number;
    lasty?: number;
    fx?: number;
    fy?: number;
    action?: string;
    path?: {
        x: number;
        y: number;
    }[];
    gx?: number;
    gy?: number;
    gxx?: number;
    gyy?: number;
    rage?: number;
    hostile?: number;
    /** Indicates that an enemy has been modified and does not eliminate enemy data */
    modified?: boolean;
    faction?: string;
    allied?: number;
    ceasefire?: number;
    bind?: number;
    blind?: number;
    disarm?: number;
    slow?: number;
    freeze?: number;
    teleporting?: number;
    teleportingmax?: number;
    stun?: number;
    silence?: number;
    vulnerable?: number;
    buffs?: any;
    warningTiles?: any;
    visual_x?: number;
    visual_y?: number;
    Analyze?: boolean;
    /** Number of turns the enemy is temporarily hostile for */
    playWithPlayer?: number;
    playWithPlayerCD?: number;
    IntentAction?: string;
    IntentLeashPoint?: {
        x: number;
        y: number;
        type: string;
        radius: number;
    };
    CurrentAction?: string;
    RemainingJailLeashTourWaypoints?: number;
    NextJailLeashTourWaypointX?: number;
    NextJailLeashTourWaypointY?: number;
    KinkyDungeonJailTourInfractions?: number;
}
declare type KinkyDungeonDress = {
    Item: string;
    Group?: string;
    Color: string | string[];
    Filters?: Record<string, LayerFilter>;
    Lost: boolean;
    NoLose?: boolean;
    Property?: any;
    OverridePriority?: number;
    Skirt?: boolean;
}[];
interface KinkyDialogueTrigger {
    dialogue: string;
    allowedPrisonStates?: string[];
    /** Only allows the following personalities to do it */
    allowedPersonalities?: string[];
    blockDuringPlaytime?: boolean;
    /** Whether or not the enemy must be able to talk */
    talk?: boolean;
    noAlly?: boolean;
    /** Exclude if enemy has one of these tags */
    excludeTags?: string[];
    /** Require all of these tags */
    requireTags?: string[];
    /** Require one of these tags */
    requireTagsSingle?: string[];
    /** Require one of these tags */
    requireTagsSingle2?: string[];
    /** Require play to be POSSIBLE */
    playRequired?: boolean;
    /** Require play to be ONGOING */
    onlyDuringPlay?: boolean;
    /** Allow this to happen even out of playtime if the player is submissive enough */
    allowPlayExceptionSub?: boolean;
    /** If any NPC is in combat in last 3 turns this wont happen */
    noCombat?: boolean;
    /** Prevents this from happening if the target is hostile */
    nonHostile?: boolean;
    prerequisite: (enemy: entity, dist: number, AIData: any) => boolean;
    weight: (enemy: entity, dist: number) => number;
}
interface effectTile {
    x?: number;
    y?: number;
    infinite?: boolean;
    lightColor?: number;
    yoffset?: number;
    xoffset?: number;
    name: string;
    /** Has all the functions of this one */
    functionName?: string;
    duration: number;
    priority: number;
    data?: any;
    /** For tiles which can be used to help escape */
    affinities?: string[];
    /** For tiles which can be used to help escape, but only while standing */
    affinitiesStanding?: string[];
    drawOver?: boolean;
    tags: string[];
    pauseDuration?: number;
    pauseSprite?: string;
    brightness?: number;
    /** Deletes the effect tile if it's not on a movable tile */
    noWalls?: boolean;
    /** Radius within which the tile does NOT block vision */
    visionBlockRadius?: number;
    skin?: string;
    /** random = basic effect where it fades in and has a chance to fade out again */
    fade?: string;
    statuses?: Record<string, number>;
    /** Spin to the effect tile sprite */
    spin?: number;
    spinAngle?: number;
}
/** For spells */
interface effectTileRef {
    name: string;
    infinite?: boolean;
    duration?: number;
    data?: any;
    pauseDuration?: number;
    pauseSprite?: string;
    skin?: string;
    statuses?: Record<string, number>;
}
declare type KDPerk = {
    /** Determines if this one goes in the debuffs tree */
    debuff?: boolean;
    /** Determines if this one goes in the buffs tree */
    buff?: boolean;
    category: string;
    id: string | number;
    cost: number;
    block?: string[];
    tags?: string[];
    blocktags?: string[];
    blockclass?: string[];
    locked?: boolean;
    outfit?: string;
    require?: string;
    costGroup?: string;
    startPriority?: number;
    requireArousal?: boolean;
};
interface spell {
    ignoreshield?: boolean;
    shield_crit?: boolean;
    shield_stun?: boolean;
    shield_freeze?: boolean;
    shield_bind?: boolean;
    shield_snare?: boolean;
    shield_slow?: boolean;
    shield_distract?: boolean;
    shield_vuln?: boolean;
    /** Crit damage multiplier of the spell */
    crit?: number;
    /** Sound efgfect that plays when you miscast */
    miscastSfx?: string;
    /** This spell doesnt hurt the target upon directly hitting, only the AoE */
    noDirectDamage?: true;
    /** This spell does not leave a warning to the player */
    hideWarnings?: boolean;
    /** This spell does leave a warning to the player */
    alwaysWarn?: boolean;
    /** Marks the spell as a command word spell to enemies */
    commandword?: boolean;
    /** The spell is used to buff allies */
    buffallies?: boolean;
    /** caster will also target themselves */
    selfbuff?: boolean;
    /** Type of binding applied to the power */
    bindType?: string;
    /** Stops the spell from moving more than 1 tile */
    slowStart?: boolean;
    /** Spinrate of the bullet */
    bulletSpin?: number;
    /** Spinrate of the bullet hit */
    hitSpin?: number;
    /** Forces spell to move more than 1 tile at beginning */
    fastStart?: boolean;
    /** Affects aoe type
     * acceptable values are:
     * vert - creates a vertical line
     * horiz - creates a horizontal line
     * box - uses chebyshev distance
     * cross - creates a vertical and horizontal line
     */
    aoetype?: string;
    aoetypetrail?: string;
    secondaryhit?: string;
    upcastFrom?: string;
    upcastLevel?: number;
    hitColor?: number;
    bulletColor?: number;
    trailColor?: number;
    hitLight?: number;
    bulletLight?: number;
    trailLight?: number;
    goToPage?: number;
    tags?: string[];
    effectTile?: effectTileRef;
    effectTileAoE?: number;
    effectTileDurationMod?: number;
    effectTilePre?: effectTileRef;
    effectTileDurationModPre?: number;
    effectTileLinger?: effectTileRef;
    effectTileDurationModLinger?: number;
    effectTileDensityLinger?: number;
    effectTileTrail?: effectTileRef;
    effectTileDurationModTrail?: number;
    effectTileDensityTrail?: number;
    effectTileTrailAoE?: number;
    effectTileDoT?: effectTileRef;
    effectTileDoT2?: effectTileRef;
    effectTileDistDoT?: number;
    effectTileDurationModDoT?: number;
    effectTileDensityDoT?: number;
    effectTileDensity?: number;
    /** Hides this spell in the spell screen */
    hide?: boolean;
    shotgunCount?: number;
    shotgunFan?: boolean;
    shotgunSpread?: number;
    shotgunDistance?: number;
    shotgunSpeedBonus?: number;
    distractEff?: number;
    desireMult?: number;
    bindEff?: number;
    nonmagical?: boolean;
    damageFlags?: string[];
    /** Wont spawn a trail on the player, ever */
    noTrailOnPlayer?: boolean;
    /** Wont spawn a trail on any entity, ever */
    noTrailOnEntity?: boolean;
    /** Wont spawn a trail on any allied entity, ever */
    noTrailOnAlly?: boolean;
    /** Color of the spell and bullet warningsd */
    color?: string;
    /** Buffs applied by the hit will effect everyone */
    buffAll?: boolean;
    name: string;
    customCost?: string;
    /** Spell does not advance time */
    quick?: boolean;
    /** spell required to unlock this one */
    prerequisite?: string | string[];
    /** blocked if you have this spell */
    blockedBy?: string[];
    /** Spell is hidden if you didnt learn it */
    hideUnlearnable?: boolean;
    /** Spell is hidden if you didnt learn this spell */
    hideWithout?: string;
    /** Spell is hidden if you learned a specific spell */
    hideWith?: string;
    /** Spell is hidden if you DID learn it */
    hideLearned?: boolean;
    /** Automatically learns the spells when you learn it (thru magic screen) */
    autoLearn?: string[];
    /** Automatically learns the spell pages when you learn it (thru magic screen) */
    learnPage?: string[];
    /** This spell wont trigger an aggro action */
    noAggro?: boolean;
    /** Whether the spell defaults to the Player faction */
    allySpell?: boolean;
    /** Spell overrides the faction */
    faction?: string;
    /** Whether the spell defaults to the Enemy faction */
    enemySpell?: boolean;
    /** Whether the spell has a direction offset when fired */
    noDirectionOffset?: boolean;
    /** Hide the spell if arousal mode is off */
    arousalMode?: boolean;
    /** Conjure, Illusion, Elements */
    school?: string;
    /** if the type is special, this is the special type */
    special?: string;
    /** Damage of the spell */
    power?: number;
    /** Amount of aoe power */
    aoedamage?: number;
    /** Damage type */
    damage?: string;
    /** Is the damage teasing */
    tease?: boolean;
    /** size of sprite */
    size?: number;
    /** Prevents multiple instances of the spell from doing damage on the same turn from the same bullet to the same enemy */
    noUniqueHits?: boolean;
    /** AoE */
    aoe?: number;
    /** bind */
    bind?: number;
    /** bind crit mult*/
    bindcrit?: number;
    /** distract */
    distract?: number;
    /** Bonus daMAGE TO BOUND TATRGETS */
    boundBonus?: number;
    /** outfit applied (special parameter) */
    outfit?: string;
    /** speed */
    speed?: number;
    knifecost?: number;
    staminacost?: number;
    manacost: number;
    chargecost?: number;
    minRange?: number;
    noSprite?: boolean;
    /** Learn these flags permanently */
    learnFlags?: string[];
    /** Increases the more you do */
    increasingCost?: boolean;
    decreaseCost?: boolean;
    /** Specific to a class */
    classSpecific?: string;
    /** Verbal, arms, or legs */
    components?: string[];
    /** The bullet's position is always fixed toward the caster */
    followCaster?: boolean;
    /** Spell level */
    level: number;
    /** Whether the spell is passive (like the summon count up) or active like the bolt or toggle spells*/
    passive?: boolean;
    /** An active spell but it has passive effects */
    mixedPassive?: boolean;
    /** Active spell for mana cost purposes, only used to override behavior of passive and toggle spells */
    active?: boolean;
    /** costOnToggle */
    costOnToggle?: boolean;
    /** Type of the spell */
    type: string;
    /** Type of effect on hit */
    onhit?: string;
    /** Duration of the status effect applied */
    time?: number;
    /** For Inert spells, this is the lifetime of the main bullet */
    delay?: number;
    /** Random added onto delay */
    delayRandom?: number;
    /** castRange */
    castRange?: number;
    /** Spell range */
    range?: number;
    /** lifetime of the Hit bullet created by the spell, not the bullet itself in the case of an "inert" bullet*/
    lifetime?: number;
    /** Specifically for the bullet lifetime, currently unused */
    bulletLifetime?: number;
    /** channel turns */
    channel?: number;
    /** Noise spell makes on cast */
    noise?: number;
    /** block */
    block?: number;
    /** played on cast */
    sfx?: string;
    /** Played on damage dealt */
    hitsfx?: string;
    /** Played on bullet impact */
    landsfx?: string;
    /** trailEvadeable */
    trailEvadeable?: boolean;
    /** trailNoblock */
    trailNoblock?: boolean;
    /** trailPower */
    trailPower?: number;
    /** trailHit */
    trailHit?: string;
    /** trailLifetime */
    trailLifetime?: number;
    /** trailTime */
    trailTime?: number;
    /** Random number to increase lifetime by */
    lifetimeHitBonus?: number;
    /** Random number to increase trail lifetime by */
    trailLifetimeBonus?: number;
    /** Playereffect of the trail */
    trailPlayerEffect?: any;
    /** trailChance */
    trailChance?: number;
    /** Creates trails on the projectiles itself too */
    trailOnSelf?: boolean;
    /** trailDamage */
    trailDamage?: string;
    /** trailspawnaoe */
    trailspawnaoe?: number;
    /** Casts a spell as a trail */
    trailcast?: any;
    /** trail */
    trail?: string;
    /** Spell points cost to buy */
    spellPointCost?: number;
    /** Whether the spell heals or not */
    heal?: boolean;
    /** Whether AI treats as a buff */
    buff?: boolean;
    /** The spell needs this condition for an enemy to cast it*/
    castCondition?: string;
    /** Player can only cast spell on a creature or player */
    mustTarget?: boolean;
    /** Player cant target player */
    noTargetPlayer?: boolean;
    /** Only target walls */
    WallsOnly?: boolean;
    /** Spell can be dodged, default cantt be dodged */
    evadeable?: boolean;
    /** Spell can NOT be blocked. default can be blocked */
    noblock?: boolean;
    /** Targeting location */
    meleeOrigin?: boolean;
    /** Cant hit the same enemy twice per turrn, impoprtant for piercing spells */
    noDoubleHit?: boolean;
    /** Doesnt do spellcast on the hit */
    noCastOnHit?: boolean;
    /** Casts a spellcast during the delay */
    castDuringDelay?: boolean;
    /** Casts spell */
    spellcast?: any;
    /** Casts spell on cast */
    extraCast?: any;
    /** spell cast on hit */
    spellcasthit?: any;
    /** List of buffs applied by the spell */
    buffs?: any[];
    /** Whether the spell is off by default */
    defaultOff?: boolean;
    /** List of events  applied by the spell */
    events?: KinkyDungeonEvent[];
    /** List of events  applied by the spell to its hit */
    hitevents?: KinkyDungeonEvent[];
    /** spell pierces */
    piercing?: boolean;
    /** spell pierces enemies */
    pierceEnemies?: boolean;
    /** spell pierces */
    passthrough?: boolean;
    /** Deals DoT */
    dot?: boolean;
    /** spell pierces */
    noTerrainHit?: boolean;
    /** spell pierces */
    noEnemyCollision?: boolean;
    /** If an enemy has one of these tags it will get hit no matter what*/
    alwaysCollideTags?: string[];
    /** trail pierces */
    piercingTrail?: boolean;
    /** nonVolatile */
    nonVolatile?: boolean;
    /** Cancels automove when cast */
    cancelAutoMove?: boolean;
    /** requireLOS */
    requireLOS?: boolean;
    /** selfTargetOnly */
    selfTargetOnly?: boolean;
    /** AI will only target creatures with this tag */
    filterTags?: string[];
    /** Whether or not sends a message on cast */
    msg?: boolean;
    /** Suppress summon message */
    noSumMsg?: boolean;
    /** Targeted like a bolt, showing the aim line */
    projectileTargeting?: boolean;
    /** Adds additional distance on the cast when targeted by an enemy */
    extraDist?: number;
    /** CastInWalls */
    CastInWalls?: boolean;
    /** Allows casting into fog of war */
    CastInDark?: boolean;
    /** noTargetEnemies */
    noTargetEnemies?: boolean;
    /** Exception list for NoTargetEnemies */
    exceptionFactions?: string[];
    /** noTargetAllies */
    noTargetAllies?: boolean;
    /** Sets the enemy's specialCD shared between others */
    specialCD?: number;
    /** AI wont choose this as first choice */
    noFirstChoice?: boolean;
    /** Player effect */
    playerEffect?: any;
    /** Doesnt send cast message */
    noCastMsg?: boolean;
    /** Casts on self always */
    selfcast?: boolean;
    /** Cant miscast */
    noMiscast?: boolean;
    /** summon */
    summon?: any[];
    /** Spell does not show up in the spells scrreen until learned */
    secret?: boolean;
    /** Enemies summoned by this spell will have their default faction and not the caster's faction */
    defaultFaction?: boolean;
}
interface KDQuest {
    name: string;
    npc: string;
    visible: boolean;
    nocancel?: boolean;
    tick?: (delta: any) => void;
    worldgenstart?: () => void;
    accept?: () => void;
    weight: (RoomType: any, MapMod: any, data: any, currentQuestList: any) => number;
    prerequisite: (RoomType: any, MapMod: any, data: any, currentQuestList: any) => boolean;
    tags?: string[];
}
interface KDPoint {
    x: number;
    y: number;
}
interface KDJailPoint extends KDPoint {
    type: string;
    radius: number;
    requireLeash?: boolean;
    requireFurniture?: boolean;
    direction?: {
        x: number;
        y: number;
    };
    restraint?: string;
    restrainttags?: string[];
}
interface KinkyDialogue {
    /** REPLACETEXT -> Replacement */
    data?: Record<string, string>;
    /** Tags for filtering */
    tags?: string[];
    /** Shows the quick inventory */
    inventory?: boolean;
    /** Function to play when clicked. If not specified, nothing happens.  Bool is whether or not to abort current click*/
    clickFunction?: (gagged: boolean, player: entity) => boolean | undefined;
    /** Draw function. Fires each frame. Good for highlighting things, drawing extra buttons, etc. Boolean = true will prevent the rest of dialogue from being drawn, use with caution*/
    drawFunction?: (gagged: boolean, player: entity, delta: number) => boolean;
    /** Function to play when clicked, if considered gagged. If not specified, will use the default function. */
    gagFunction?: (player: entity) => boolean | undefined;
    /** Will not appear unless function returns true */
    prerequisiteFunction?: (gagged: boolean, player: entity) => boolean;
    /** Will appear greyed out unless true */
    greyoutFunction?: (gagged: boolean, player: entity) => boolean;
    greyoutTooltip?: string;
    /** List of personalities supported by this dialogue */
    personalities?: string[];
    /** Jumps to the specified dialogue when clicked, after setting the response string*/
    leadsTo?: string;
    leadsToStage?: string;
    /** Pressing the skip key will click this option */
    skip?: boolean;
    /** After leading to another dialogue, the response will NOT be updated */
    dontTouchText?: boolean;
    exitDialogue?: boolean;
    /** The response the NPC will give when this dialogue is clicked. If response is "null", then it keeps the original, "" uses pregenerated
     * The string name will be "r" + response with a couple of enemy-specific variations
     */
    response?: string;
    /** Whether or not the response is different if you are gagged */
    responseGag?: boolean;
    /** The option for you to select for this dialogue. "" means pregenerated, OK to put "" for top-level KinkyDialogues
     * The string name will be "d" + response
     */
    playertext?: string;
    /** Whether or not this line has a gag-specific dialogue line */
    gag?: boolean;
    /** Threshold at which the player is considered gagged for this dialogue. Default is 0.01*/
    gagThreshold?: number;
    /** Whether or not this option appears while gagged */
    gagDisabled?: boolean;
    /** Whether or not this option appears while ungagged */
    gagRequired?: boolean;
    /** Options to display */
    options?: Record<string, KinkyDialogue>;
    /** Name of a dialogue to get extra options from. Merges them, preferring this dialogue's options if the name is the same */
    extraOptions?: string;
}
interface KinkyVibration {
    sound: string;
    /** Item applying this vibration */
    source: string;
    /** Identification */
    name: string;
    intensity: number;
    /** Location(s) of the vibration */
    location: string[];
    duration: number;
    durationLeft: number;
    /** Will turn off for this long when being denied */
    denyTime?: number;
    denyTimeLeft?: number;
    /** Will deny this many times. */
    denialsLeft?: number;
    /** Always denies instead of orgasm. Overrides edgeOnly in the vibration itself but gets overridden by vibe modifiers */
    alwaysDeny?: boolean;
    /** Chance to deny. 0 or undefined means 100%*/
    denialChance?: number;
    /** Chance to deny if the player is likely to orgasm. 0 or undefined means 100%*/
    denialChanceLikely?: number;
    /** After this much time the orgasms will be unlocked*/
    edgeTime?: number;
    edgeTimeLeft?: number;
    /** The vibration will sense when the player is at max arousal and only decrement the timer then */
    tickEdgeAtMaxArousal?: boolean;
    /** Will repeat this many times */
    loopsLeft?: number;
    /** Orgasm will always be impossible */
    edgeOnly?: boolean;
    /** Table of modifiers */
    VibeModifiers: VibeMod[];
}
interface VibeMod {
    sound: string;
    /** Source of the modifier */
    source: string;
    /** Identifier of the modifier */
    name: string;
    /** Location of the modifier */
    location: string;
    /** Duration of the vibe modifier */
    duration: number;
    durationLeft: number;
    /** Change to intensity, cannot go below 1, capped at the value of the highest/lowest mod*/
    intensityMod: number;
    /** Forces intensity*/
    intensitySetpoint?: number;
    edgeOnly?: boolean;
    forceDeny?: boolean;
    bypassDeny?: boolean;
    bypassEdge?: boolean;
    /** Duration does not tick down while this vibe mod is on */
    extendDuration?: boolean;
    /** Increments the deny chance */
    denyChanceMod?: number;
    /** Increments the deny chance */
    denyChanceLikelyMod?: number;
}
interface KDStruggleData {
    minSpeed: number;
    handBondage: number;
    armsBound: boolean;
    handsBound: boolean;
    failSuffix: string;
    restraint: item;
    struggleType: string;
    struggleGroup: string;
    escapeChance: number;
    origEscapeChance: number;
    helpChance: number;
    limitChance: number;
    strict: number;
    cutSpeed: number;
    affinity: string;
    hasAffinity: boolean;
    restraintEscapeChance: number;
    cost: number;
    noise: number;
    wcost: number;
    escapePenalty: number;
    willEscapePenalty: number;
    canCut: boolean;
    canCutMagic: boolean;
    toolBonus: number;
    toolMult: number;
    buffBonus: number;
    buffMult: number;
    restriction: number;
    struggleTime: number;
    speedMult: number;
    escapeSpeed: number;
    query: boolean;
    maxLimit: number;
    result: string;
    lockType: KDLockType;
    extraLim: number;
    extraLimPenalty: number;
    extraLimThreshold: number;
}
interface KDInventoryActionDef {
    text?: (player: entity, item: item) => string;
    label?: (player: entity, item: item) => string;
    itemlabel?: (player: entity, item: item) => string;
    labelcolor?: (player: entity, item: item) => string;
    itemlabelcolor?: (player: entity, item: item) => string;
    show?: (player: entity, item: item) => boolean;
    valid: (player: entity, item: item) => boolean;
    click: (player: entity, item: item) => void;
    cancel: (player: entity, delta: number) => boolean;
    icon: (player: entity, item: item) => string;
    alsoShow?: string[];
}
interface KinkyDungeonSave {
    KinkyDungeonPlayerEntity: any;
    level: number;
    checkpoint: string;
    rep: Record<string, number>;
    costs: Record<string, number>;
    pcosts: Record<string, number>;
    orbs: number[];
    chests: number[];
    dress: string;
    gold: number;
    points: number;
    progression: string;
    inventoryVariants: Record<string, KDRestraintVariant>;
    consumableVariants: Record<string, KDConsumableVariant>;
    weaponVariants: Record<string, KDWeaponVariant>;
    grounditems: any;
    perks: string[];
    levels: {
        Elements: number;
        Conjure: number;
        Illusion: number;
    };
    rescued: Record<string, boolean>;
    aid: Record<string, boolean>;
    seed: string;
    statchoice: [string, boolean][];
    mapIndex: Record<string, string>;
    id: number;
    idspell: number;
    choices: number[];
    choices_wep: string[];
    choices_arm: string[];
    choices_con: string[];
    choices2: boolean[];
    buffs: Record<string, any>;
    lostitems: any[];
    caches: number[];
    hearts: number[];
    spells: string[];
    inventory: item[];
    KDGameData: KDGameDataBase;
    KDMapData: KDMapDataType;
    KDWorldMap: Record<string, KDWorldSlot>;
    KDEventData: Object;
    KDCurrentWorldSlot: {
        x: number;
        y: number;
    };
    KDPersistentNPCs: string;
    KDPersonalAlt: string;
    flags: [string, number][];
    uniqueHits: [string, boolean][];
    KDCommanderRoles: [number, string][];
    stats: {
        picks: number;
        keys: number;
        bkeys: number;
        mana: number;
        manapool: number;
        stamina: number;
        willpower: number;
        distraction: number;
        distractionlower: number;
        wep: any;
        npp: number;
        diff: number;
    };
    faction: Record<string, Record<string, number>>;
}
interface KDWorldSlot {
    data: Record<string, KDMapDataType>;
    x: number;
    y: number;
    color: string;
    name: string;
    main: string;
}
interface KDMapDataType {
    Checkpoint: string;
    Title: string;
    flags?: string[];
    GroundItems: {
        x: number;
        y: number;
        name: string;
        amount?: number;
    }[];
    Grid: string;
    Traffic: number[][];
    GridWidth: number;
    GridHeight: number;
    FogGrid: any[];
    Tiles: Record<string, any>;
    TilesSkin: Record<string, any>;
    TilesMemory: Record<string, any>;
    EffectTiles: Record<string, Record<string, effectTile>>;
    RandomPathablePoints: Record<string, {
        x: number;
        y: number;
        tags?: string[];
    }>;
    Entities: entity[];
    Bullets: any[];
    StartPosition: {
        x: number;
        y: number;
    };
    EndPosition: {
        x: number;
        y: number;
    };
    ShortcutPositions: {
        x: number;
        y: number;
    }[];
    PatrolPoints: {
        x: number;
        y: number;
    }[];
    MapBrightness: number;
    ConstantX: boolean;
    RoomType: string;
    MapMod: string;
    EscapeMethod: string;
    KillTarget: string;
    KillQuota: number;
    TrapQuota: number;
    TrapsTriggered: number;
    ChestQuota: number;
    ChestsOpened: number;
    QuestQuota: number;
    QuestsAccepted: number;
    KeyQuota: number;
    KeysHeld: number;
    JailPoints: KDJailPoint[];
    ShopItems: shopItem[];
    PoolUses: number;
    PoolUsesGrace: number;
    CategoryIndex: Record<string, {
        category: string;
        tags: string[];
    }>;
    JailFaction: string[];
    GuardFaction: string[];
    MapFaction: string;
}
declare type KDSideRoom = {
    name: string;
    faction?: string;
    weight: number;
    /** Rolled once each time it gets a map mod */
    chance: number;
    /**
     *
     * @param slot Journey slot of the tile to be generated for
     * @param side true = top side, false = bot side
     * @returns {number} - Multiplier to chance
     */
    filter: (slot: KDJourneySlot, side: boolean) => number;
    mapMod: string;
    altRoom: string;
    escapeMethod?: string;
    /** Returns whether it succeeded */
    stairCreation: (tile: any, x: number, y: number) => boolean;
};
declare type MapMod = {
    name: string;
    roomType: string;
    jailType?: string;
    guardType?: string;
    weight: number;
    /**
     *
     * @param slot Journey slot of the tile to be generated for
     * @returns {number} - multiplier to WEIGHT
     */
    filter: (slot: KDJourneySlot) => number;
    tags: string[];
    faction?: string;
    tagsOverride?: string[];
    bonusTags: Record<string, {
        bonus: number;
        mult: number;
    }>;
    spawnBoxes?: any[];
    bonussetpieces?: {
        Type: string;
        Weight: number;
    }[];
    altRoom: string;
    escapeMethod?: string;
};
declare type AIType = {
    /** Indicates that this enemy AI cannot be overridden */
    noOverride?: boolean;
    /** allows you to set an alternative AI type when requested */
    override?: Record<string, string>;
    /** The AI will only wander to visible points */
    strictwander?: boolean;
    /** Indicates that this is a protective AI */
    guard?: boolean;
    /** This enemy is stealthy until the ambush is triggered */
    ambush?: boolean;
    /** This is the tile for the AI which registers as tooltip */
    ambushtile?: string;
    /** Happens at the start immediately after AI is assigned*/
    init: (enemy: entity, player: entity, aidata: any) => void;
    /** Happens before movement. Return true to skip movement loop*/
    beforemove: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Whether the enemy chases the target if it sees them */
    chase: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Similar to chase but not quite.
     * Will the enemy choose to go to the last seen target location?
     * If it sees the target
     * Can be false if you want an enemy to be more reserved about where it goes*/
    trackvisibletarget: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Whether enemy will chase the player across a long distance */
    persist: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Whether the enemy moves toward gx */
    move: (enemy: entity, player: entity, aidata: any) => boolean;
    /** whether the enemy obeys commands like Follow Me and such */
    follower: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Whether the enemy follows sound sources or not */
    followsound: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Whether enemy will randomly wander to nearby points*/
    wander_near: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Whether enemy will randomly choose points on the map to wander to */
    wander_far: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Function to replace wandernear. Return true to cancel stock func, false otherwise*/
    wandernear_func?: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Function to replace wanderfar. Return true to cancel stock func, false otherwise*/
    wanderfar_func?: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Whether it sets gx to gxx when idle, and gy to gyy */
    resetguardposition: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Whether enemy attacks */
    attack: (enemy: entity, player: entity, aidata: any) => boolean;
    /** whether enemy casts spells */
    spell: (enemy: entity, player: entity, aidata: any) => boolean;
    /** This function executes before wander location changes. Return True to override wander behavior */
    aftermove: (enemy: entity, player: entity, aidata: any) => boolean;
    /** This executes after enemy is determined to be idle or not. If true, prevents spells.*/
    afteridle?: (enemy: entity, player: entity, aidata: any) => boolean;
    /** Returns the current wander long delay.*/
    wanderDelay_long?: (enemy: entity, aidata: any) => number;
    /** Returns the current wander short delay.*/
    wanderDelay_short?: (enemy: entity, aidata: any) => number;
};
interface KDAITriggerData {
    /** Determines that the AI can play with the player and initiate a play event */
    playAllowed?: boolean;
    /** A SUBSET of hostile. In some cases an enemy will be hostile but not aggressive.
     * neutrals and allies cannot be aggressive */
    aggressive?: boolean;
    playerDist?: number;
    allowPlayExceptionSub?: boolean;
    ignoreNoAlly?: boolean;
    ignoreCombat?: boolean;
    canTalk?: boolean;
}
/** Container for KD AI data
 * Persistently stored as AIData variable for use in some
 */
interface KDAIData extends KDAITriggerData {
    playerItems?: item[];
    /** The target of the AI, NOT the KinkyDungeonPlayerEntity but rather a target entity which CAN be the player */
    player?: entity;
    /** Whether or not the enemy can talk */
    canTalk?: boolean;
    /** Whether to do a defeat or not */
    defeat?: boolean;
    /** Whether this enemy is idle or not. Gets set to true by default and false if the enemy does ANYTHING */
    idle?: boolean;
    /** Indicates that the enemy has moved, therefore cant attack or cast unless it has the necessary properties */
    moved?: boolean;
    /** Refresh the warning tiles due to whatever reason */
    refreshWarningTiles?: boolean;
    /** Enemy will ignore the player, i.e. will not attack the player or chase the player or do anything to the player */
    ignore?: boolean;
    /** Player is rather tied up and not considered a big threat generally */
    harmless?: boolean;
    /** Enemy belongs to a hostile faction */
    hostile?: boolean;
    /** Enemy belongs to an allied faction */
    allied?: boolean;
    /** This enemy is feeling dominated by the player and will generally act submissive */
    domMe?: boolean;
    /** Hit SFX */
    hitsfx?: string;
    /** Enemy is pretty distracted */
    highdistraction?: boolean;
    /** Enemy is totally distracted */
    distracted?: boolean;
    /** Level of bondage on this enemy, 0-4 */
    bindLevel?: number;
    /** Enemy can ignore locks when opening doors */
    ignoreLocks?: boolean;
    /** Movable tiles for the enemy */
    MovableTiles?: string;
    /** Tiles that the enemy will try to avoid if possible but can still move into if needed */
    AvoidTiles?: string;
    /** Enemy attack type, changes based on special, etc */
    attack?: string;
    range?: number;
    width?: number;
    accuracy?: number;
    damage?: string;
    power?: number;
    /** Enemy has a vibe remote and will vibe the player if it hits the player */
    vibe?: boolean;
    /** Enemy is CAPABLE of leashing, it is a leashing enemy */
    leashing?: boolean;
    /** Enemy would add a leash if it would be aggressive to the player */
    addLeash?: boolean;
    /** Desired restraining level of the player.
     * If the player is this restrained,
     * then the enemy will not add any new bindings and will focus on leashing */
    targetRestraintLevel?: number;
    /** What happens if the player is below the target restraint level */
    addMoreRestraints?: boolean;
    /** The enemy is ABLE to aggro the target, either due to aggression or dominant play */
    canAggro?: boolean;
    /** The enemy actually aggros the target and will make attacks */
    wantsToAttack?: boolean;
    wantsToTease?: boolean;
    /** The enemy actually aggros the target and will cast spells */
    wantsToCast?: boolean;
    /** The enemy wants to pull the player instead of just attacking */
    wantsToLeash?: boolean;
    /** The enemy wants to leash the player, but prefers to pull instead of attack */
    focusOnLeash?: boolean;
    /** Enemy will move toward its target rather than its gx/gy position */
    moveTowardPlayer?: boolean;
    /** The enemy plans to leash the player,
     * important to declare b/c otherwise enemy can close cages, etc during play*/
    intentToLeash?: boolean;
    /** The player is wearing a leash restraint and can be leash pulled */
    leashed?: boolean;
    /** Enemy stops moving when in range of the player */
    holdStillWhenNear?: boolean;
    /** Position to leash/pull the player to */
    leashPos?: {
        x: number;
        y: number;
    };
    /** nearest jail to take the player to */
    nearestJail?: {
        x: number;
        y: number;
        type: string;
        radius: number;
    };
    /** Enemy to follow */
    master?: entity;
    /** Chance that the enemy will kite */
    kiteChance?: number;
    /** Enemy has decided to kite */
    kite?: boolean;
    /** This variable is supposed to make the enemy not take potshots at you while in furniture*/
    ignoreRanged?: boolean;
    /** It's time to change patrol points */
    patrolChange?: boolean;
    /** This enemy is an ALLY and will follow the player */
    allyFollowPlayer?: boolean;
    /** an override situation to not follow the player
     * Usually done by neutral enemies or allies that the player has told to hold still
     */
    dontFollow?: boolean;
    visionMod?: number;
    followRange?: number;
    visionRadius?: number;
    chaseRadius?: number;
    blindSight?: number;
    sneakMult?: number;
    directionOffset?: number;
    playerDistDirectional?: number;
    canSensePlayer?: boolean;
    canSeePlayer?: boolean;
    canSeePlayerChase?: boolean;
    canSeePlayerMedium?: boolean;
    canSeePlayerClose?: boolean;
    canSeePlayerVeryClose?: boolean;
    canShootPlayer?: boolean;
    /** Chance of starting a play event */
    playChance?: number;
    /** Indicates that a play event has started */
    startedDialogue?: boolean;
    /** Play event that has started */
    playEvent?: boolean;
}
interface KDJailRestraint {
    Name: string;
    Level: number;
    Variant?: string;
    Condition?: string;
    Priority?: string;
}
declare type EnemyEvent = {
    /** Extremely important for leash events */
    overrideIgnore?: boolean;
    forceattack?: boolean;
    aggressive?: boolean;
    nonaggressive?: boolean;
    play?: boolean;
    noplay?: boolean;
    /** This event wont get cleared by mass resets, like when you are deposited into a cage */
    noMassReset?: boolean;
    /** Determines if the enemy will attack you */
    decideAttack?: (enemy: entity, target: entity, AIData: any, allied: boolean, hostile: boolean, aggressive: boolean) => boolean;
    /** Determines if the enemy will cast spells */
    decideSpell?: (enemy: entity, target: entity, AIData: any, allied: boolean, hostile: boolean, aggressive: boolean) => boolean;
    /** Determines weight */
    weight: (enemy: entity, AIData: any, allied: boolean, hostile: boolean, aggressive: boolean) => number;
    /** Run when triggered */
    trigger: (enemy: entity, AIData: any) => void;
    /** Run when leashes to the leash point */
    arrive?: (enemy: entity, AIData: any) => boolean;
    /** Run each turn at the end */
    maintain?: (enemy: entity, delta: number, AIData?: any) => boolean;
    /** Run before the move loop */
    beforeMove?: (enemy: entity, AIData: any, delta: number) => boolean;
    /** Run before the attack loop */
    beforeAttack?: (enemy: entity, AIData: any, delta: number) => boolean;
    /** Run before the spell loop */
    beforeSpell?: (enemy: entity, AIData: any, delta: number) => boolean;
};
declare type KDLockType = {
    filter: (Guaranteed: boolean, Floor: number, AllowGold: boolean, Type: string, data: any) => boolean;
    weight: (Guaranteed: boolean, Floor: number, AllowGold: boolean, Type: string, data: any) => number;
    consume_key: boolean;
    lockmult: number;
    penalty?: Record<string, number>;
    pickable: boolean;
    pick_speed: number;
    pick_diff: number;
    pick_lim?: number;
    /** For restraints */
    canPick: (data: any) => boolean;
    doPick: (data: any) => boolean;
    failPick: (data: any) => string;
    breakChance: (data: any) => boolean;
    unlockable: boolean;
    key: string;
    canUnlock: (data: any) => boolean;
    doUnlock: (data: any) => boolean;
    doLock?: (data: any) => void;
    failUnlock: (data: any) => string;
    removeKeys: (data: any) => void;
    levelStart: (item: any) => void;
    shrineImmune: boolean;
    commandlevel: number;
    command_lesser: () => number;
    command_greater: () => number;
    command_supreme: () => number;
    loot_special: boolean;
    loot_locked: boolean;
};
declare type KDBondageStatus = {
    silence: number;
    bind: number;
    slow: number;
    blind: number;
    disarm: number;
    toy: number;
    plug: number;
    belt: number;
};
declare type KDMapTile = {
    name: string;
    w: number;
    h: number;
    primInd: string;
    index: Record<string, string>;
    flexEdge?: Record<string, string>;
    flexEdgeSuper?: Record<string, string>;
    scale: number;
    category: string;
    weight: number;
    grid: string;
    POI: any[];
    Keyring?: any[];
    Jail: any[];
    Tiles: Record<string, any>;
    effectTiles: Record<string, Record<string, effectTile>>;
    Skin: Record<string, any>;
    /** List of inaccessible entrance pairs */
    inaccessible: {
        indX1: number;
        indY1: number;
        dir1: string;
        indX2: number;
        indY2: number;
        dir2: string;
    }[];
    /** tags */
    tags: string[];
    /** tags that make weight 0 if they exist */
    forbidTags?: string[];
    /** tags required or else bad things happen */
    requireTags?: string[];
    /** tags for following 3 */
    indexTags: string[];
    /** tags and max counts before this tile is no longer considered */
    maxTags: number[];
    /** tags and weight bonus */
    bonusTags: number[];
    /** tags and weight mult */
    multTags: number[];
    /** NEGATION operator, triggers the mult if there is NOT a tag */
    notTags?: any[];
};
interface KDBondage {
    color: string;
    /** Multiplier for enemy bondage */
    enemyBondageMult: number;
    /** Order in which enemies will struggle */
    priority: number;
    /** Multiplier for struggle rate */
    struggleRate: number;
    /** Multiplier for the max health component of struggle */
    healthStruggleBoost: number;
    /** Multiplier for the power component of struggle */
    powerStruggleBoost: number;
    /** Multiplier for command level */
    mageStruggleBoost?: number;
}
interface KDCursedVar {
    variant: (restraint: restraint, newRestraintName: string) => any;
    level: number;
}
interface KDDelayedAction {
    data: any;
    time: number;
    commit: string;
    update?: string;
    /** Cancel this in certain cases */
    tags: string[];
}
interface KDBondageMachineFunc {
    eligible_player: (tile: any, x: any, y: any, entity: any) => boolean;
    eligible_enemy: (tile: any, x: any, y: any, entity: any) => boolean;
    function_player: (tile: any, delta: any, x: any, y: any, entity: any) => boolean;
    function_enemy: (tile: any, delta: any, x: any, y: any, entity: any) => boolean;
}
interface KDDroppedItemProp {
    /** When blindfolded, this item will be invisible if your blind level is equal to this or higher */
    tinyness?: number;
    /** This item will be kept when moving between floors*/
    persistent?: boolean;
}
declare type KDParticleData = {
    camX?: number;
    camY?: number;
    zIndex: number;
    fadeEase?: string;
    time: number;
    phase?: number;
    scale?: number;
    scale_delta?: number;
    rotation?: number;
    vy?: number;
    vy_spread?: number;
    vx?: number;
    vx_spread?: number;
    sin_period?: number;
    sin_period_spread?: number;
    sin_x?: number;
    sin_x_spread?: number;
    sin_y?: number;
    sin_y_spread?: number;
    /** Lifetime in ms */
    lifetime: number;
    lifetime_spread?: number;
};
interface KDCursedDef {
    /** Restraints with this curse are unremovable via shrine */
    noShrine?: boolean;
    /** This curse is treated as a type of lock, for display purposes */
    lock?: boolean;
    /** Power multiplier of the curse, similar to a lock's lockmult */
    powerMult?: number;
    /** Fixed power increase */
    powerBoost?: number;
    /** This curse keeps events with the curse property from vanishing */
    activatecurse?: boolean;
    /** custom icon for removing (failure) */
    customIcon_RemoveFailure?: string;
    /** custom icon for removing (success) */
    customIcon_RemoveSuccess?: string;
    /** custom icon for the struggle groups display */
    customIcon_hud?: string;
    /** TODO NOT IMPLEMENTED for a future RemoveCursesWithShrine function */
    shrineRemove?: string[];
    level: number;
    weight: (item: any, allHex?: any) => number;
    customStruggle?: (item: item, Curse?: string) => void;
    customInfo?: (item: item, Curse?: string) => void;
    onApply?: (item: item, host?: item) => void;
    condition: (item: item) => boolean;
    remove: (item: item, host: item) => void;
    events?: KinkyDungeonEvent[];
}
declare type KDRestraintVariant = {
    /** Name prefix */
    prefix?: string;
    /** Name suffix */
    suffix?: string;
    /** The curse to apply with this inventory variant */
    curse?: string;
    /** The lock to apply with this inventory variant */
    lock?: string;
    /** extra events added on */
    events: KinkyDungeonEvent[];
    /** The original restraint this is based on */
    template: string;
    /** If true, this item will not be forcibly kept whenever being added or removed */
    noKeep?: boolean;
};
declare type KDWeaponVariant = {
    /** Name prefix */
    prefix?: string;
    /** Name suffix */
    suffix?: string;
    /** extra events added on */
    events: KinkyDungeonEvent[];
    /** The original weapon this is based on */
    template: string;
};
declare type KDConsumableVariant = {
    /** Name prefix */
    prefix?: string;
    /** Name suffix */
    suffix?: string;
    /** extra events added on */
    events: KinkyDungeonEvent[];
    /** The original consumable this is based on */
    template: string;
};
interface KDSpellComponent {
    /** Returns true if the component is ignored in this case even for partial applications */
    ignore: (spell: spell, x: number, y: number) => boolean;
    /** Returns true if the spell can be cast, or false otherwise */
    check: (spell: spell, x: number, y: number) => boolean;
    /** Run when the spell is cast */
    cast?: (spell: spell, data: any) => void;
    /** Get the name of the component when hovering over spell icon */
    stringShort: (ret: string) => string;
    /** Get the name of the component in the spell description */
    stringLong: (spell: spell) => string;
    /** Returns the component's partial miscast chance, such as from being gagged or wearing heels */
    partialMiscastChance: (spell: spell, x: number, y: number) => number;
    /** Returns the message suffix for failing due to a partial miscast chance */
    partialMiscastType: (spell: spell, x: number, y: number) => string;
}
declare type SpecialCondition = {
    resetCD: boolean;
    criteria: (enemy: entity, AIData: any) => boolean;
};
declare type KDEventData_affinity = {
    entity: entity;
    forceTrue: number;
    forceFalse: number;
    affinity: string;
    group: string;
    Message: boolean;
    canStand: boolean;
    msgedstand: boolean;
    groupIsHigh: boolean;
};
declare type KDEventData_PostApply = {
    player: entity;
    item: item | null;
    host: item;
    keep: boolean;
    Link: boolean;
};
declare type KDEventData_CurseCount = {
    restraints: {
        item: item;
        host: item;
    }[];
    count: number;
    activatedOnly: boolean;
};
declare type KDExpression = {
    priority: number;
    stackable?: boolean;
    criteria: (C: any) => boolean;
    expression: (C: any) => {
        EyesPose: string;
        Eyes2Pose: string;
        BrowsPose: string;
        Brows2Pose: string;
        BlushPose: string;
        MouthPose: string;
    };
};
interface KDPresetLoadout {
    weapon_current: string;
    weapon_other: string;
    armor: string[];
}
interface KDTrainingRecord {
    /** Turns in this floor's session that have been trained */
    turns_trained: number;
    /** Sessions where an opportunity to train was presented but player circumvented it */
    turns_skipped: number;
    /** Sessions where an opportunity to train was presented */
    turns_total: number;
    /** Current training amount */
    training_points: number;
    /** Current training level, basically floor(training_points) */
    training_stage: number;
}
interface KDRopeType {
    tags: string[];
}
interface KDSealGroup {
    /** Whether the seal group is disabled based on the arousal mode */
    arousalMode?: boolean;
    /** Level of difficulty of the seal group */
    level: number;
    /** Prevents this seal group from being a greater seal */
    disallowGreater?: boolean;
    /** Prevents this seal group from being a lesser seal */
    disallowLesser?: boolean;
    /** The seals in this seal group */
    seals: KDSeal[];
}
interface KDSFXGroup {
    /** Sound when using an escape method*/
    sfxEscape?: {
        Struggle?: string;
        Cut?: string;
        Remove?: string;
        Pick?: string;
        Unlock?: string;
        NoStamina?: string;
        NoWill?: string;
        NoMagic?: string;
        MagicCut?: string;
        PickBreak?: string;
        KnifeBreak?: string;
        KnifeDrop?: string;
        KeyDrop?: string;
        PickDrop?: string;
    };
    sfxFinishEscape?: {
        Struggle?: string;
        Cut?: string;
        Remove?: string;
        Pick?: string;
        Unlock?: string;
        Destroy?: string;
    };
    /** Remove sound */
    sfxRemove?: string;
    /** Equip sound */
    sfx?: string;
}
interface KDEnemyAction {
    /** Enemy will not willingly let go of leashes during this action */
    holdleash?: boolean;
    /** Enemy will sprint during this action */
    sprint?: boolean;
    end?: (enemy: any) => void;
    maintain: (enemy: any, delta: any) => boolean;
}
interface KDSeal {
    /** Name of the seal buff */
    name: string;
    /** Color of the seal buff */
    aura: string;
    /** Sprite of the seal buff */
    aurasprite: string;
    /** Events of the seal buff */
    events: KinkyDungeonEvent[];
}
interface KDBoobyTrap {
    minlevel: number;
    filter: (enemy: entity, x: number, y: number, checkpoint: boolean, type: string[]) => boolean;
    weight: (enemy: entity, x: number, y: number, checkpoint: boolean, type: string[]) => number;
    lifetime?: number;
}
interface ApplyVariant {
    nonstackable?: boolean;
    hexes: string[];
    enchants: string[];
    level: number;
    powerBonus: number;
    curse?: string;
    noKeep?: boolean;
    prefix?: string;
    suffix?: string;
    minfloor: number;
    maxfloor?: number;
}
declare enum PosNeutNeg {
    positive = 1,
    neutral = 0,
    negative = -1
}
declare enum ModifierEnum {
    restraint = 0,
    weapon = 1,
    consumable = 2
}
interface KDEnchantmentType {
    level: number;
    filter: (item: string, allEnchant: string[], data: KDHexEnchantWeightData) => boolean;
    weight: (item: string, allEnchant: string[], data: KDHexEnchantWeightData) => number;
    events: (item: string, Loot: any, curse: string, primaryEnchantment: string, enchantments: string[], data: KDHexEnchantEventsData) => KinkyDungeonEvent[];
}
interface KDHexEnchantEventsData {
    variant: {
        events: KinkyDungeonEvent[];
        template: string;
    };
}
interface KDHexEnchantWeightData {
    item: string;
}
interface KDEnchantment {
    tags: string[];
    prefix?: string;
    suffix?: string;
    types: Record<ModifierEnum, KDEnchantmentType>;
}
interface KDModifierEffectType {
    level: number;
    filter: (item: string, positive: PosNeutNeg) => boolean;
    weight: (item: string, positive: PosNeutNeg) => number;
    events: (item: string, positive: PosNeutNeg) => KinkyDungeonEvent[];
}
interface KDModifierEffect {
    tags: string[];
    types: Record<ModifierEnum, KDModifierEffectType>;
}
interface KDModifierConditionType {
    level: number;
    filter: (item: string, effect_positive: KDModifierEffect[], effect_neutral: KDModifierEffect[], effect_negative: KDModifierEffect[]) => boolean;
    weight: (item: string, effect_positive: KDModifierEffect[], effect_neutral: KDModifierEffect[], effect_negative: KDModifierEffect[]) => number;
    events: (item: string, effect_positive: KDModifierEffect[], effect_neutral: KDModifierEffect[], effect_negative: KDModifierEffect[]) => KinkyDungeonEvent[];
}
interface KDModifierCondition {
    tags: string[];
    types: Record<ModifierEnum, KDModifierConditionType>;
}
interface KDSpecialEnemyBuff {
    filter: (enemy: entity, type: string[]) => boolean;
    weight: (enemy: entity, type: string[]) => number;
    apply: (enemy: entity, type: string[]) => void;
}
declare type KDCommanderOrderData = {
    delta: number;
    VavgWeight: number;
    globalIgnore: boolean;
    fleeThresh: number;
    combat: boolean;
    aggressive: boolean;
    invalidChoke: Record<string, boolean>;
};
interface KDCommanderOrder {
    filter: (enemy: entity, data: KDCommanderOrderData) => boolean;
    weight: (enemy: entity, data: KDCommanderOrderData) => number;
    apply: (enemy: entity, data: KDCommanderOrderData) => void;
    maintain: (enemy: entity, data: KDCommanderOrderData) => boolean;
    update: (enemy: entity, data: KDCommanderOrderData) => void;
    remove: (enemy: entity, data: KDCommanderOrderData) => void;
    global_before: (data: KDCommanderOrderData) => void;
    global_after: (data: KDCommanderOrderData) => void;
}
interface KDCollectionEntry {
    name: string;
    color: string;
    type: string;
    sprite: string;
    customSprite: boolean;
    id: number;
    Enemy?: enemy;
    outfit?: string;
    customOutfit?: string;
    hairstyle?: string;
    bodystyle?: string;
    facestyle?: string;
    cosplaystyle?: string;
    /** Status: Guest, Prisoner, Servant, or Manager */
    status: string;
    class: string;
    Faction: string;
    Opinion: number;
    Training: number;
    Willpower: number;
}
interface KDFactionProps {
    nameList?: string[];
    /** Negative - will join their allies on sight against you
     * Neutral - will only join if they see you attacking their ally or their ally is otherwise neutral with you
     * Positive - will only join if their ally would otherwise be neutral with you
     */
    honor: number;
    /** Honor toward specific factions */
    honor_specific: Record<string, number>;
    /** Weight to have them show up in a given floor type and floor count (and in future floor X and floor Y) */
    weight: (Floor: number, Checkpoint: string, tags: string[], X: number, Y: number) => number;
    /** Custom defeat to use */
    customDefeat?: string;
    /** Custom jail allied faction to use */
    jailAlliedFaction?: string;
    /** Backup incase cant find strictly using jailAlliedFaction */
    jailBackupFaction?: string;
    /** Custom jail outfit to use */
    jailOutfit: string;
}
declare type KDJourneySlot = {
    visited: boolean;
    x: number;
    y: number;
    color: string;
    type: string;
    RoomType: string;
    MapMod: string;
    EscapeMethod: string;
    Faction: string;
    SideRooms: string[];
    Checkpoint: string;
    Connections: {
        x: number;
        y: number;
    }[];
    /** Prevents from getting culled */
    protected?: boolean;
};
declare type KDJourneyMap = {
    [_: string]: KDJourneySlot;
};
declare type outfit = {
    name: string;
    dress: string;
    shop: boolean;
    rarity: number;
    events?: KinkyDungeonEvent[];
    costMod?: number;
    palette?: string;
};
declare type KDTile = any;
declare type KDTrapType = (tile: KDTile, entity: entity, x: number, y: number) => {
    msg: string;
    triggered: boolean;
};
declare type KDSprites = {
    [_: string]: (x: number, y: number, fog: boolean, noReplace: string) => string;
};
declare type KDTeaseAttackListsType = {
    [_: string]: string[];
};
declare type KDTeaseAttacksType = {
    [_: string]: KDTeaseAttack;
};
declare type KDTeaseAttack = {
    name: string;
    priority: number;
    blockable: boolean;
    dodgeable: boolean;
    /** Allows this to be added to the list */
    filter: (enemy: entity, player: entity, AIData: any) => boolean;
    /** Returns true if it connects, false otherwise if blocked/ignored somehow */
    apply: (enemy: entity, player: entity, AIData: any, blocked: boolean, evaded: boolean, damageMod: number) => boolean;
};
declare const zip: any;
declare const guessLanguage: {
    detect(text: string): string;
    info(text: string): [string, string, string];
    code(text: string): [number];
    name(text: string): string;
};
declare const PIXI: typeof import('pixi.js') & typeof import('pixi.js-legacy') & {
    filters: typeof import('pixi-filters');
};
declare type PIXIContainer = import('pixi.js').Container;
declare type PIXIMesh = import('pixi.js').Mesh;
declare type PIXIRenderTexture = import('pixi.js').RenderTexture;
declare type PIXITexture = import('pixi.js').Texture;
declare type PIXIPlane = import('pixi.js').SimplePlane;
declare type PIXIBuffer = import('pixi.js').Buffer;
declare type IArrayBuffer = import('pixi.js').IArrayBuffer;
declare type PIXIArray = import('pixi.js').ITypedArray;
declare type PIXIAdjustmentFilter = import('pixi-filters').AdjustmentFilter;
declare type PIXIFilter = import('pixi.js').Filter;
declare type PIXIMatrix = import('pixi.js').Matrix;
declare type PIXIPoint = import('pixi.js').Point;
declare type ISpriteMaskTarget = import('pixi.js').ISpriteMaskTarget;
declare type PIXICLEAR_MODES = import('pixi.js').CLEAR_MODES;
declare type PIXIFilterSystem = import('pixi.js').FilterSystem;
declare type PIXIUnresolvedAsset = any;
declare enum PosePriConditions {
    rotation = 0,
    offset_x = 1,
    offset_y = 2,
    offset_either = 3
}
declare type PoseMod = {
    Layer: string;
    offset_x?: number;
    offset_y?: number;
    scale_x?: number;
    scale_y?: number;
    rotation_x_anchor?: number;
    rotation_y_anchor?: number;
    rotation?: number;
};
/** A set of properties for poses */
declare type PoseProperty = {
    /** Only applied during this pose */
    filter_pose?: string[];
    /** How much this pose rotates the player, in degrees */
    rotation?: number;
    rotation_x_anchor?: number;
    rotation_y_anchor?: number;
    /** Priority of the rotation. Only the highest will rotate the character */
    pri_rotation?: number;
    /** The height offset of the pose*/
    offset_y?: number;
    /** The side-to-side offset of the pose*/
    offset_x?: number;
    offset_xFlip?: number;
    /** Priority of the offset. Only the highest will offset the character at all*/
    pri_offsetx?: number;
    pri_offsety?: number;
    /** Greedy priority: If this pose isn't the top offset in both x and y, it won't do either*/
    greedy_offset?: boolean;
    /** These are modifications to particular layers, such as the head and anything with the head as parent*/
    mods?: PoseMod[];
    /** If any of these conditions are not met the mods will not be applied */
    greedy_mod_conditions?: PosePriConditions[];
    /** Unless a model specifically lists this pose in GlobalDefaultOverride, it will look for images with this prefix instead*/
    global_default?: string;
    /** Does a model flip*/
    flip?: boolean;
};
interface Model extends Namable {
    /** Name of the model, used to identify */
    Name: string;
    /** Folder to find artwork */
    Folder: string;
    /** Layers themselves */
    Layers: Record<string, ModelLayer>;
    /** Protects from stripping, for hair and such */
    Protected?: boolean;
    /** Protects from stripping AND override, for ears, eyes, tail and such */
    SuperProtected?: boolean;
    /** This is a restraint */
    Restraint?: boolean;
    /** Optional group, for items where there can should only be one (like panties or shoes)*/
    Group?: string;
    /** Removes the model if these poses are present*/
    RemovePoses?: string[];
    /** Optional categories for a model to appear in wardrobe*/
    Categories?: string[];
    /** Optional, this appears as a top level item*/
    TopLevel?: boolean;
    /** Optional, this appears under a top level item*/
    Parent?: string;
    /** Adds these as tempposes*/
    AddPose?: string[];
    /** Conditional add pose. They are only added if the specified pose is NOT present */
    AddPoseConditional?: Record<string, string[]>;
    /** Conditional add pose. They are only added if the specified pose is present */
    AddPoseIf?: Record<string, string[]>;
    /** This model hides all items on these layers. Use sparingly */
    HideLayers?: string[];
    /** This model hides all items on these layergroups. Use sparingly */
    HideLayerGroups?: string[];
    /** Default string of colors*/
    DefaultColor?: string[];
    /** Color definition */
    Filters?: Record<string, LayerFilter>;
    /** Hardcoded Lock Type */
    LockType?: string;
    /** Hardcoded body filters */
    ImportBodyFilters?: boolean;
}
interface ModelLayer extends Namable {
    /** Name of the layer, used to identify */
    Name: string;
    /** Layer for priority sorting */
    Layer: string;
    /** Custom override for folder */
    Folder?: string;
    /** Priority offset, -499 to 500 */
    Pri?: number;
    /** Name of the sprite PNG, same as the name by default*/
    Sprite?: string;
    /** This layer only appears if the item is locked */
    LockLayer?: boolean;
    /** Changes the layer if a certain pose exists */
    SwapLayerPose?: Record<string, string>;
    /** Prepends a string to the beginning of the layer if a pose is present. Only the first happens */
    PrependLayerPrefix?: Record<string, string>;
    /** Changes the priority if a certain pose exists */
    SwapPriorityPose?: Record<string, number>;
    /** One of these layers is required*/
    Poses?: Record<string, boolean>;
    /** Adds a displacement map for rope squish and such. If the same sprite is in use it wont be duped*/
    DisplacementSprite?: string;
    /** Which layers to apply displacement to */
    DisplaceLayers?: Record<string, boolean>;
    /** MorphPoses but displacement */
    DisplacementMorph?: Record<string, string>;
    /** Amount of displacement */
    DisplaceAmount?: number;
    /** Prevents displacement maps from applying to this item */
    NoDisplace?: boolean;
    /** [Group, Color] */
    ImportColorFromGroup?: string[];
    /** [Category, Color] */
    ImportColorFromCategory?: string[];
    /** Adds a Erase map for heel deletion and such. If the same sprite is in use it wont be duped*/
    EraseSprite?: string;
    /** Which layers to apply Erase to */
    EraseLayers?: Record<string, boolean>;
    /** MorphPoses but Erase */
    EraseMorph?: Record<string, string>;
    /** Amount of Erase */
    EraseAmount?: number;
    /** Prevents Erase maps from applying to this item */
    NoErase?: boolean;
    /** Invariant displacement */
    EraseInvariant?: boolean;
    /** These layers are ALL REQUIRED to make it appear*/
    RequirePoses?: Record<string, boolean>;
    /** This layer is hidden in this pose*/
    HidePoses?: Record<string, boolean>;
    /** If one of these poses is present then the layer will default to the relevant pose*/
    MorphPoses?: Record<string, string>;
    /** Overrides globaL_default of the listed poses */
    GlobalDefaultOverride?: Record<string, boolean>;
    /** AppendPose does not apply to the displacement map */
    NoAppendDisplacement?: boolean;
    /** AppendPose does not apply to the erase map */
    NoAppendErase?: boolean;
    /** When this pose is present it appends it to the name. Only one can be appended this way */
    AppendPose?: Record<string, string>;
    /** Lists the poses that can be affected by AppendPose*/
    AppendPoseRequire?: Record<string, boolean>;
    /** Hides when this pose plus the layer name is present. E.g. HidePrefixPose: ["Encase"] will hide EncaseShoeLeft if the layer is on ShoeLeft */
    HidePrefixPose?: string[];
    /** Additional suffixes for HidePrefixPose */
    HidePrefixPoseSuffix?: string[];
    /** This layer gets hidden if something else is higher on the priority list */
    HideWhenOverridden?: boolean;
    /** This is the layer used for HideWhenOverridden rather than the default layer */
    HideOverrideLayer?: string;
    /** This is the layer(s) used for HideWhenOverridden rather than the default layer. Uses layer groups*/
    HideOverrideLayerMulti?: string[];
    /** Only the main override layer is used for hiding THIS item */
    ForceSingleOverride?: boolean;
    /** This makes it so HideOverrideLayer is the layer for overriding purposes. Pair with NoOverride to complete the effect */
    CrossHideOverride?: boolean;
    /** Only overrides if the layer is not hidden.*/
    DontAlwaysOverride?: boolean;
    /** This layer does not affect the max priority level */
    NoOverride?: boolean;
    /** Hide this layer if the other layer does not show */
    TieToLayer?: string;
    /** The name is as is */
    Invariant?: boolean;
    /** Displacement maps are treated as Invariant */
    DisplacementInvariant?: boolean;
    /** Applies this layer's filter to a layer when the filter isn't hidden */
    ApplyFilterToLayerGroup?: Record<string, boolean>;
    /** Which filter to apply */
    ApplyFilter?: string;
    /** Disables color filters */
    NoColorize?: boolean;
    /** Inherits colorization from another layer */
    InheritColor?: string;
    /** Offset X */
    OffsetX?: number;
    /** Offset Y */
    OffsetY?: number;
    /** Offset X scale */
    AnchorModX?: number;
    /** Offset Y scale */
    AnchorModY?: number;
    /** Increases layer priority but only if the pose is present */
    AddPriWithPose?: Record<string, number>;
}
declare type LayerFilter = {
    gamma: number;
    saturation: number;
    contrast: number;
    brightness: number;
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
interface Namable {
    Name: string;
}
declare const StandalonePatched = true;
declare const ArcadeDeviousChallenge = false;
declare const ChatRoomCharacter: Character[];
declare const ChatRoomChatLog: {
    Garbled: string;
    Time: number;
    SenderName: string;
}[];
declare const DialogGamingPreviousRoom: string;
declare const MiniGameReturnFunction: string;
/**
 * Returns the expressions of character C as a single big object
 * @param C - The character whose expressions should be returned
 * @returns Expression - The expresssion of a character
 */
declare function WardrobeGetExpression(C: Character): any;
/**
 * Prepares an appearance bundle so we can push it to the server. It minimizes it by keeping only the necessary
 * information. (Asset name, group name, color, properties and difficulty)
 * @param Appearance - The appearance array to bundle
 * @returns The appearance bundle created from the given appearance array
 */
declare function ServerAppearanceBundle(Appearance: Item[]): AppearanceBundle;
declare function AssetGet(family: string, group: string, asset: string): Asset | undefined;
/**
 * Returns a specific reputation value for the player
 * @param RepType - Type/name of the reputation to get the value of.
 * @returns Returns the value of the reputation. It can range from 100 to -100, and it defaults to 0 if the player never earned this type of reputation before.
 */
declare function ReputationGet(RepType: string): number;
declare function DialogSetReputation(a: string, b: number): void;
declare let ChatRoomCharacterUpdate: (C: Character) => void;
declare function ChatRoomPublishCustomAction(msg: string, LeaveDialog: boolean, Dictionary: any): void;
declare const TypedItemDataLookup: {
    [_: string]: any;
};
declare const ModularItemDataLookup: {
    [_: string]: any;
};
declare function TypedItemSetOption(C: PlayerCharacter, item: Item, options: any, option: any, push?: boolean): void;
declare function TypedItemSetOptionByName(a: Character, b: Item, c: string, d: boolean): void;
declare function ModularItemMergeModuleValues({ asset, modules }: {
    asset: any;
    modules: any;
}, moduleValues: number[]): ItemProperties;
declare function ExtendedItemSetType(C: any, Options: any, Option: any): void;
declare function ExtendedItemExit(): void;
declare let MiniGameVictory: boolean;
declare function InventoryRemove(C: Character, AssetGroup: string, Refresh?: boolean): void;
declare function InventoryGetLock(Lock: Item): any;
declare function InventoryAllow(C: PlayerCharacter, asset: Asset, prerequisites?: string | string[], setDialog?: boolean): boolean;
declare function InventoryWear(C: Character, AssetName: any, AssetGroup: any, ItemColor: any, Difficulty: undefined, MemberNumber: undefined, Craft: undefined, Refresh?: boolean): void;
declare function InventoryLock(C: Character, Item: Item, Lock: string, MemberNumber: number, Update?: boolean): void;
declare function InventoryUnlock(C: Character, Item: string): void;
declare let KDPatched: boolean;
declare let ServerURL: string;
declare function ServerSend(Message: string, Data: any): void;
declare function ServerPlayerIsInChatRoom(): boolean;
declare function CharacterAppearanceLoadCharacter(C: Character): void;
declare function CharacterChangeMoney(C: Character, amount: number): void;
declare function DrawImage(Image: string, X: number, Y: number, Invert?: boolean): boolean;
declare let CharacterAppearanceBuildCanvas: (C: Character) => void;
declare let CharacterRefresh: (C: Character, push?: boolean) => void;
declare function suppressCanvasUpdate<T>(f: () => T): T;
declare let Player: PlayerCharacter;
declare let KeyPress: number | string;
declare let CurrentModule: string;
declare let CurrentScreen: string;
declare let CurrentCharacter: Character | NPCCharacter | null;
declare let CurrentOnlinePlayers: number;
declare let CurrentDarkFactor: number;
declare let CommonIsMobile: boolean;
declare let CommonCSVCache: {
    [_: string]: string[][];
};
declare let CutsceneStage: number;
declare let CommonPhotoMode: boolean;
declare let GameVersion: string;
declare const GameVersionFormat: RegExp;
declare let CommonVersionUpdated: boolean;
declare let CommonTouchList: any;
/**
 * An enum encapsulating possible chatroom message substitution tags. Character name substitution tags are interpreted
 * in chatrooms as follows (assuming the character name is Ben987):
 * SOURCE_CHAR: "Ben987"
 * DEST_CHAR: "Ben987's" (if character is not self), "her" (if character is self)
 * DEST_CHAR_NAME: "Ben987's"
 * TARGET_CHAR: "Ben987" (if character is not self), "herself" (if character is self)
 * TARGET_CHAR_NAME: "Ben987"
 * Additionally, sending the following tags will ensure that asset names in messages are correctly translated by
 * recipients:
 * ASSET_NAME: (substituted with the localized name of the asset, if available)
 */
declare const CommonChatTags: {
    SOURCE_CHAR: string;
    DEST_CHAR: string;
    DEST_CHAR_NAME: string;
    TARGET_CHAR: string;
    TARGET_CHAR_NAME: string;
    ASSET_NAME: string;
};
/**
 * A map of keys to common font stack definitions. Each stack definition is a
 * two-item array whose first item is an ordered list of fonts, and whose
 * second item is the generic fallback font family (e.g. sans-serif, serif,
 * etc.)
 */
declare const CommonFontStacks: {
    Arial: (string | string[])[];
    TimesNewRoman: (string | string[])[];
    Papyrus: (string | string[])[];
    ComicSans: (string | string[])[];
    Impact: (string | string[])[];
    HelveticaNeue: (string | string[])[];
    Verdana: (string | string[])[];
    CenturyGothic: (string | string[])[];
    Georgia: (string | string[])[];
    CourierNew: (string | string[])[];
    Copperplate: (string | string[])[];
};
/**
 * Checks if a variable is a number
 * @param n - Variable to check for
 * @returns Returns TRUE if the variable is a finite number
 */
declare function CommonIsNumeric(n: any): boolean;
/**
 * Gets the current time as a string
 * @returns Returns the current date and time in a yyyy-mm-dd hh:mm:ss format
 */
declare function CommonGetFormatDate(): string;
/**
 * Detects if the user is on a mobile browser
 * @returns Returns TRUE if the user is on a mobile browser
 */
declare function CommonDetectMobile(): boolean;
/**
 * Gets the current browser name and version
 * @returns Browser info
 */
declare function CommonGetBrowser(): {
    Name: string;
    Version: string;
};
/**
 * Parse a CSV file content into an array
 * @param str - Content of the CSV
 * @returns Array representing each line of the parsed content, each line itself is split by commands and stored within an array.
 */
declare function CommonParseCSV(str: string): string[][];
/**
 *  Read a CSV file from cache, or fetch it from the server
 * @param Array - Name of where the cached text is stored
 * @param Path - Path/Group in which the screen is located
 * @param Screen - Screen for which the file is for
 * @param File - Name of the file to get
 */
declare function CommonReadCSV(Array: string, Path: string, Screen: string, File: string): void;
/**
 * AJAX utility to get a file and return its content. By default will retry requests 10 times
 * @param Path - Path of the resource to request
 * @param Callback - Callback to execute once the resource is received
 * @param RetriesLeft - How many more times to retry if the request fails - after this hits zero, an error will be logged
 */
declare function CommonGet(Path: string, Callback: (this: XMLHttpRequest, xhr: XMLHttpRequest) => void, RetriesLeft?: number): void;
/**
 * Retry handler for CommonGet requests. Exponentially backs off retry attempts up to a limit of 1 minute. By default,
 * retries up to a maximum of 10 times.
 * @param Path - The path of the resource to request
 * @param Callback - Callback to execute once the resource is received
 * @param RetriesLeft - How many more times to retry - after this hits zero, an error will be logged
 */
declare function CommonGetRetry(Path: string, Callback: (this: XMLHttpRequest, xhr: XMLHttpRequest) => void, RetriesLeft?: number): void;
/**
 * Catches the clicks on the main screen and forwards it to the current screen click function if it exists, otherwise it sends it to the dialog click function
 * @param event - The event that triggered this
 */
declare function CommonClick(event: MouseEvent | TouchEvent): void;
/**
 * Returns TRUE if a section of the screen is currently touched on a mobile device
 * @param X - The X position
 * @param Y - The Y position
 * @param W - The width of the square
 * @param H - The height of the square
 * @param TL - Can give a specific touch event instead of the default one
 */
declare function CommonTouchActive(X: number, Y: number, W: number, H: number, TL: any): boolean;
/**
 * @param event - The event that triggered this
 */
declare function CommonKeyDown(event: KeyboardEvent): void;
/**
 * Calls a basic dynamic function if it exists, for complex functions, use: CommonDynamicFunctionParams
 * @param FunctionName - Name of the function to call
 */
declare function CommonDynamicFunction(FunctionName: string): void;
/**
 * Calls a dynamic function with parameters (if it exists), also allow ! in front to reverse the result. The dynamic function is the provided function name in the dialog option object and it is prefixed by the current screen.
 * @param FunctionName - Function name to call dynamically
 * @returns Returns what the dynamic function returns or FALSE if the function does not exist
 */
declare function CommonDynamicFunctionParams(FunctionName: string): any;
/**
 *  Calls a named global function with the passed in arguments, if the named function exists. Differs from
 *  CommonDynamicFunctionParams in that arguments are not parsed from the passed in FunctionName string, but
 *  passed directly into the function call, allowing for more complex JS objects to be passed in. This
 *  function will not log to console if the provided function name does not exist as a global function.
 * @param FunctionName - The name of the global function to call
 * @param args - zero or more arguments to be passed to the function (optional)
 * @returns Returns the result of the function call, or undefined if the function name isn't valid
 */
declare function CommonCallFunctionByName(FunctionName: string, ...args: any): any;
/**
 * Behaves exactly like CommonCallFunctionByName, but logs a warning if the function name is invalid.
 * @param FunctionName - The name of the global function to call
 * @param args - zero or more arguments to be passed to the function (optional)
 * @returns Returns the result of the function call, or undefined if the function name isn't valid
 */
declare function CommonCallFunctionByNameWarn(FunctionName: string, ...args: any): any;
/**
 * Sets the current screen and calls the loading script if needed
 * @param NewModule - Module of the screen to display
 * @param NewScreen - Screen to display
 */
declare function CommonSetScreen(NewModule: string, NewScreen: string): void;
/**
 * Gets the current time in ms
 */
declare function CommonTime(): number;
/**
 * Checks if a given value is a valid HEX color code
 * @param Value - Potential HEX color code
 * @returns Returns TRUE if the string is a valid HEX color
 */
declare function CommonIsColor(Value: string): boolean;
/**
 * Checks whether an item's color has a valid value that can be interpreted by the drawing
 * functions. Valid values are null, undefined, strings, and an array containing any of the
 * aforementioned types.
 * @param Color - The Color value to check
 * @returns Returns TRUE if the color is a valid item color
 */
declare function CommonColorIsValid(Color: any): boolean;
/**
 * Get a random item from a list while making sure not to pick the previous one.
 * @param ItemPrevious - Previously selected item from the given list
 * @param ItemList - List for which to pick a random item from
 * @returns The randomly selected item from the list
 */
declare function CommonRandomItemFromList<T>(ItemPrevious: T, ItemList: T[]): T;
/**
 * Checks whether two item colors are equal. An item color may either be a string or an array of strings.
 * @param C1 - The first color to check
 * @param C2 - The second color to check
 * @returns TRUE if C1 and C2 represent the same item color, FALSE otherwise
 */
declare function CommonColorsEqual(C1: string | string[], C2: string | string[]): boolean;
/**
 * Checks whether two arrays are equal. The arrays are considered equal if they have the same length and contain the same items in the same
 * order, as determined by === comparison
 * @param a1 - The first array to compare
 * @param a2 - The second array to compare
 * @returns TRUE if both arrays have the same length and contain the same items in the same order, FALSE otherwise
 */
declare function CommonArraysEqual(a1: any[], a2: any[]): boolean;
/**
 * Creates a simple memoizer.
 * The memoized function does calculate its result exactly once and from that point on, uses
 * the result stored in a local cache to speed up things.
 * @param func - The function to memoize
 * @returns The result of the memoized function
 */
declare function CommonMemoize<T extends Function>(func: T): MemoizedFunction<T>;
/**
 * Memoized getter function. Returns a font string specifying the player's
 * preferred font and the provided size. This is memoized as it is called on
 * every frame in many cases.
 * @param size - The font size that should be specified in the
 * returned font string
 * @returns A font string specifying the requested font size and
 * the player's preferred font stack. For example:
 * 12px "Courier New", "Courier", monospace
 */
declare const CommonGetFont: MemoizedFunction<(size: number) => string>;
/**
 * Memoized getter function. Returns a font string specifying the player's
 * preferred font stack. This is memoized as it is called on every frame in
 * many cases.
 * @returns A font string specifying the player's preferred font
 * stack. For example:
 * "Courier New", "Courier", monospace
 */
declare const CommonGetFontName: MemoizedFunction<() => string>;
/**
 * Takes an array of items and converts it to record format
 * @param arr The array of items
 * @returns Output in object format
 */
declare function CommonPackItemArray(arr: {
    Group: string;
    Name: string;
    Type?: string | null;
}[]): {
    [group: string]: {
        [name: string]: string[];
    };
};
/**
 * Takes an record format of items and converts it to array
 * @param arr Object defining items
 * @return The array of items
 */
declare function CommonUnpackItemArray(arr: {
    [group: string]: {
        [name: string]: string[];
    };
}): {
    Group: string;
    Name: string;
    Type?: string;
}[];
/**
 * A simple deep equality check function which checks whether two objects are equal. The function traverses recursively
 * into objects and arrays to check for equality. Primitives and simple types are considered equal as defined by `===`.
 * @param obj1 - The first object to compare
 * @param obj2 - The second object to compare
 * @returns TRUE if both objects are equal, up to arbitrarily deeply nested property values, FALSE
 * otherwise.
 */
declare function CommonDeepEqual(obj1: any, obj2: any): boolean;
/**
 * Adds all items from the source array to the destination array if they aren't already included
 * @param dest - The destination array
 * @param src - The source array
 * @returns The destination array
 */
declare function CommonArrayConcatDedupe<T>(dest: T[], src: T[]): T[];
/**
 * Common noop function
 */
declare function CommonNoop(): void;
/**
 * Redirects the address to HTTPS for all production environments, returns the proper heroku server
 * @returns Returns the proper server to use in production or test
 */
declare function CommonGetServer(): string;
declare let MouseX: number;
declare let MouseY: number;
/**
 * Check if the mouse position is within the boundaries of a given zone (Useful for UI components)
 * @param Left - Starting position on the X axis
 * @param Top - Starting position on the Y axis
 * @param Width - Width of the zone
 * @param Height - Height of the zone
 * @returns Returns TRUE if the click occurred in the given zone
 */
declare function MouseIn(Left: number, Top: number, Width: number, Height: number): boolean;
/**
 * Check if the mouse position is within the boundaries of a given zone along the X axis
 * @param Left - Starting position on the X axis
 * @param Width - Width of the zone
 * @returns Returns TRUE if the click occurred in the given zone
 */
declare function MouseXIn(Left: number, Width: number): boolean;
/**
 * Check if the mouse position is within the boundaries of a given zone along the Y axis
 * @param Top - Starting position on the Y axis
 * @param Height - Height of the zone
 * @returns Returns TRUE if the click occurred in the given zone
 */
declare function MouseYIn(Top: number, Height: number): boolean;
/**
 * A common check for whether the specified position is being hovered over
 * @param Left - Starting position on the X axis
 * @param Top - Starting position on the Y axis
 * @param Width - Width of the zone
 * @param Height - Height of the zone
 * @returns Returns TRUE if the mouse is currently hovering over the specified zone
 */
declare function MouseHovering(Left: number, Top: number, Width: number, Height: number): boolean;
/**
 * The main game canvas where everything will be drawn
 * @type {CanvasRenderingContext2D}
 */
declare let MainCanvas: CanvasRenderingContext2D;
declare let TempCanvas: CanvasRenderingContext2D;
declare let ColorCanvas: CanvasRenderingContext2D;
declare let CharacterCanvas: CanvasRenderingContext2D;
declare let BlindFlash: boolean;
declare let DrawingBlindFlashTimer: number;
declare const DrawCacheImage: Map<string, HTMLImageElement>;
declare let DrawCacheLoadedImages: number;
declare let DrawCacheTotalImages: number;
declare let DrawLastDarkFactor: number;
/**
 * A list of the characters that are drawn every frame
 */
declare let DrawLastCharacters: Character[];
/**
 * A list of elements to draw at the end of the drawing process.
 * Mostly used for hovering button labels.
 */
declare let DrawHoverElements: Function[];
/**
 * Converts a hex color string to a RGB color
 * @param color - Hex color to conver
 * @returns RGB color
 */
declare function DrawHexToRGB(color: string): RGBColor;
/**
 * Converts a RGB color to a hex color string
 * @param color - RGB color to conver
 * @returns Hex color string
 */
declare function DrawRGBToHex(color: number[]): string;
declare let PIXICanvas: any;
/**
 * Loads the canvas to draw on with its style and event listeners.
 */
declare function DrawLoad(): void;
/**
 * Returns the image file from cache or build it from the source
 * @param Source - URL of the image
 * @returns Image file
 */
declare function DrawGetImage(Source: string): HTMLImageElement;
/**
 * Reloads all character canvas once all images are loaded
 */
declare function DrawGetImageOnLoad(): void;
/**
 * Attempts to redownload an image if it previously failed to load
 * @param Img - Image tag that failed to load
 * @param IsAsset - Whether or not the image is part of an asset
 */
declare function DrawGetImageOnError(Img: HTMLImageElement & {
    errorcount?: number;
}, IsAsset: boolean): void;
/**
 * Draws a basic circle
 * @param CenterX - Position of the center of the circle on the X axis
 * @param CenterY - Position of the center of the circle on the Y axis
 * @param Radius - Radius of the circle to draw
 * @param LineWidth - Width of the line
 * @param LineColor - Color of the circle's line
 * @param FillColor - Color of the space inside the circle
 * @param Canvas - The canvas element to draw onto, defaults to MainCanvas
 */
declare function DrawCircle(CenterX: number, CenterY: number, Radius: number, LineWidth: number, LineColor: string, FillColor?: string, Canvas?: CanvasRenderingContext2D): void;
/**
 * Draws a progress bar with color
 * @param x - Position of the bar on the X axis
 * @param y - Position of the bar on the Y axis
 * @param w - Width of the bar
 * @param h - Height of the bar
 * @param value - Current progress to display on the bar
 * @param foreground - Color of the first part of the bar
 * @param background - Color of the bar background
 * @returns Nothing
 */
declare function DrawProgressBar(x: number, y: number, w: number, h: number, value: number, foreground?: string, background?: string): void;
/**
 * Constantly looping draw process. Draws beeps, handles the screen size, handles the current blindfold state and draws the current screen.
 * @param time - The current time for frame
 */
declare function DrawProcess(time: number): void;
/**
 * Draws every element that is considered a "hover" element such has button tooltips.
 */
declare function DrawProcessHoverElements(): void;
declare let Character: Character[];
declare let CharacterNextId: number;
declare const CharacterDeafLevels: Map<EffectName, number>;
declare const CharacterBlurLevels: Map<EffectName, number>;
/**
 * An enum representing the various character archetypes
 * ONLINE: The player, or a character representing another online player
 * NPC: Any NPC
 * SIMPLE: Any simple character, generally used internally and not to represent an actual in-game character
 */
declare let CharacterType: {
    [_: string]: CharacterType;
};
/**
 * Loads a character into the buffer, creates it if it does not exist
 * @param CharacterID - ID of the character
 * @param CharacterAssetFamily - Name of the asset family of the character
 * @param Type - The character type
 * @returns The newly loaded character
 */
declare function CharacterReset(CharacterID: number, CharacterAssetFamily: string, Type?: CharacterType): Character;
/**
 * Attributes a random name for the character, does not select a name in use
 * @param C - Character for which to attribute a name
 */
declare function CharacterRandomName(C: Character): void;
/**
 * Create a minimal character object
 * @param AccName - The account name to give to the character
 * @returns  The created character
 */
declare function CharacterLoadSimple(AccName: string): Character;
/**
 * Deletes an NPC from the buffer
 * @param NPCType - Account name of the npc to delete
 */
declare function CharacterDelete(NPCType: string): void;
/**
 * Adds a pose to a character's pose list, does not add it if it's already there
 * @param C - Character for which to add a pose to its list
 * @param NewPose - The name of the pose to add
 */
declare function CharacterAddPose(C: Character, NewPose: string): void;
/**
 * Checks if a certain pose is whitelisted and available for the pose menu
 * @param C - Character to check for the pose
 * @param Type - Pose type to check for within items
 * @param Pose - Pose to check for whitelist
 * @returns TRUE if the character has the pose available
 */
declare function CharacterItemsHavePoseAvailable(C: Character, Type: string | undefined, Pose: string): boolean;
/**
 * Checks whether the items on a character set a given pose on the character
 * @param C - The character to check
 * @param pose - The name of the pose to check for
 * @param excludeClothes - Ignore clothing items in the check
 * @returns Returns true if the character is wearing an item that sets the given pose, false otherwise
 */
declare function CharacterDoItemsSetPose(C: Character, pose: string, excludeClothes?: boolean): boolean;
/**
 * Loads a character's canvas by sorting its appearance and drawing it.
 * @param C - Character to load the canvas for
 */
declare function CharacterLoadCanvas(C: Character): void;
/**
 * Reloads all character canvases in need of being redrawn.
 */
declare function CharacterLoadCanvasAll(): void;
/**
 * Removes all appearance items from the character
 * @param C - Character to undress
 */
declare function CharacterNaked(C: Character): void;
/**
 * Sets a new pose for the character
 * @param C - Character for which to set the pose
 * @param NewPose - Name of the pose to set as active
 * @param ForceChange - TRUE if the set pose(s) should overwrite current active pose(s)
 */
declare function CharacterSetActivePose(C: Character, NewPose: string, ForceChange?: boolean): void;
/**
 * Sets a specific facial expression for the character's specified AssetGroup, if there's a timer, the expression will expire after it, a
 * timed expression cannot override another one.
 * @param C - Character for which to set the expression of
 * @param AssetGroup - Asset group for the expression
 * @param Expression - Name of the expression to use
 * @param Timer - Optional: time the expression will last
 * @param Color Optional: color of the expression to set
 */
declare function CharacterSetFacialExpression(C: Character, AssetGroup: string, Expression: string, Timer?: number, Color?: string | string[]): void;
/**
 * Resets the character's facial expression to the default
 * @param C - Character for which to reset the expression of
 */
declare function CharacterResetFacialExpression(C: Character): void;
/**
 * Gets the currently selected character
 */
declare function CharacterGetCurrent(): Character | null;
/**
 * Returns the nickname of a character, or the name if the nickname isn't valid
 * Also validates if the character is a GGTS drone to alter her name
 * @param C - The character breaking from their owner
 * @returns The nickname to return
 */
declare function CharacterNickname(C: Character): string;
/**
 * Loads an NPC into the character array. The appearance is randomized, and a type can be provided to dress them in a given style.
 * @param NPCType - Archetype of the NPC
 * @returns The randomly generated NPC
 */
declare function CharacterLoadNPC(NPCType: string): NPCCharacter;
/**
 * Removes all items except for clothing and slave collars from the character
 * @param C - Character to release
 */
declare function CharacterReleaseTotal(C: Character): void;
declare const CharacterName: string[];
declare let TextScreenCache: TextCache | null;
declare const TextAllScreenCache: Map<string, TextCache>;
/**
 * Finds the text value linked to the tag in the buffer
 * @param TextTag - Tag for the text to find
 * @returns Returns the text associated to the tag, will return a missing tag text if the tag was not found.
 */
declare function TextGet(TextTag: string): string;
/**
 * Loads the CSV text file of the current screen into the buffer. It will get the CSV from the cache if the file was already fetched from
 * the server
 * @param TextGroup - Screen for which to load the CSV of
 */
declare function TextLoad(TextGroup?: string): void;
/**
 * Cache the Module and TextGroup for later use, speeds up first use
 */
declare function TextPrefetch(Module: string, TextGroup: string): void;
/**
 * A class that can be used to cache a simple key/value CSV file for easy text lookups. Text lookups will be automatically translated to
 * the game's current language, if a translation is available.
 */
declare class TextCache {
    private path;
    private warn;
    private language;
    cache: any;
    translationcache: any;
    private rebuildListeners;
    private loaded;
    /**
     * Creates a new TextCache from the provided CSV file path.
     * @param path - The path to the CSV lookup file for this TextCache instance
     * @param warn - prefix for warning when key is not found
     */
    constructor(path: string, warn?: string);
    /**
     * Gets the current translation path
     * @returns {string}
     */
    getPath(): string;
    /**
     * Looks up a string from this TextCache. If the cache contains a value for the provided key and a translation is available, the return
     * value will be automatically translated. Otherwise the EN string will be used. If the cache does not contain a value for the requested
     * key, the key will be returned.
     * @param key - The text key to lookup
     * @returns The text value corresponding to the provided key, translated into the current language, if available
     */
    get(key: string): string;
    /**
     * Adds a callback function as a rebuild listener. Rebuild listeners will
     * be called whenever the cache has completed a rebuild (either after
     * initial construction, or after a language change).
     * @param callback - The callback to register
     * @param immediate - Whether or not the callback should be called on registration
     * @returns A callback function which can be used to unsubscribe the added listener
     */
    onRebuild(callback: Function, immediate?: boolean): Function;
    /**
     * Kicks off a build of the text lookup cache
     */
    buildCache(): void;
    /**
     * Fetches and parses the CSV file for this TextCache
     * @returns A promise resolving to an array of string arrays, corresponding to lines of CSV values in the CSV
     * file.
     */
    fetchCsv(): Promise<string[][]>;
    /**
     * Stores the contents of a CSV file in the TextCache's internal cache
     * @param lines - An array of string arrays corresponding to lines in the CSV file
     * Update 15.12.2023 - Certain languages already have this.cache, so they are not processed
     */
    cacheLines(lines: string[][]): void;
    /**
     * Translates the contents of a CSV file into the current game language
     * @param lines - An array of string arrays corresponding to lines in the CSV file
     * @returns A promise resolving to an array of string arrays corresponding to lines in the CSV file with the
     * values translated to the current game language
     */
    translate(lines: string[][]): Promise<string[][]>;
    /**
     * Maps lines of a CSV to equivalent CSV lines with values translated according to the corresponding translation file
     * @param lines - An array of string arrays corresponding to lines in the CSV file
     * @param translations - An array of strings in translation file format (with EN and translated values on alternate lines)
     * @returns An array of string arrays corresponding to lines in the CSV file with the
     * values translated to the current game language
     * Update 15.12.2023 - For certain languages (current only RU), the method of transferring to direct writing to this.cache via arrays has been changed
     */
    buildTranslations(lines: string[][], translations: string[]): string[][];
    /**
    * Translates a string to another language from the array,
    * the translation is always the one right after the english line
    * Works for certain languages as a replacement for TranslationStringCache
    * And writes the string directly to this.cache
    * @param S - The original english string to translate
    * @param massiven - working array
    * @param massivru - data from translation file
    * @param numberl - index of lines array
    * @param {Map<string, number>} translationsStringLineCache
     */
    buildTranslationsRU(S: string, massiven: string[][], massivru: string[], numberl: number, translationsStringLineCache: any): string;
}
/**
* Gets the current item / cloth worn a specific area (AssetGroup)
* @param C - The character on which we must check the appearance
* @param AssetGroup - The name of the asset group to scan
* @returns Returns the appearance which is the item / cloth asset, color and properties
*/
declare function InventoryGet(C: Character, AssetGroup: string): Item | null;
declare let Asset: any[];
declare let InventoryAdd: (a: any, b: any, c: any) => void;
declare let InventoryAvailable: (a: any, b: any, c: any) => boolean;
declare let KDTextBoxStyle: {
    backgroundColor: string;
    fontFamily: string;
    fontSize: string;
    color: string;
    lineHeight: number;
};
/**
 * Handles the value of a HTML element. It sets the value of the element when the Value parameter is provided or it returns the value when the parameter is omitted
 * @param ID - The id of the element for which we want to get/set the value.
 * @param Value - The value to give to the element (if applicable)
 * @returns The value of the element (When no value parameter was passed to the function)
 */
declare function ElementValue(ID: string, Value?: string | null): string;
/**
 * Handles the content of a HTML element. It sets the content of the element when the Content parameter is provided or it returns the value when the parameter is omitted
 * @param ID - The id of the element for which we want to get/set the value.
 * @param Content - The content/inner HTML to give to the element (if applicable)
 * @returns The content of the element (When no Content parameter was passed to the function)
 */
declare function ElementContent(ID: string, Content?: string): string;
/**
 * Creates a new text area element in the main document. Does not create a new element if there is already an existing one with the same ID
 * @param ID - The id of the text area to create.
 */
declare function ElementCreateTextArea(ID: string): void;
/**
 * Creates a new text input element in the main document.Does not create a new element if there is already an existing one with the same ID
 * @param ID - The id of the input tag to create.
 * @param Type - Type of the input tag to create.
 * @param Value - Value of the input tag to create.
 * @param MaxLength - Maximum input tag of the input to create.
 * @returns The created HTML input element
 */
declare function ElementCreateInput(ID: string, Type: string, Value: string, MaxLength?: string): HTMLInputElement | undefined;
/**
 * Creates a new range input element in the main document. Does not create a new element if there is already an
 * existing one with the same id
 * @param id - The id of the input tag to create
 * @param value - The initial value of the input
 * @param min - The minimum value of the input
 * @param max - The maximum value of the input
 * @param step - The increment size of the input
 * @param thumbIcon - The icon to use for the range input's "thumb" (handle). Can currently be set to "lock"
 * or "blindfold". If not set, the slider will have a default appearance with no custom thumb.
 * @param vertical - Whether this range input is a vertical slider (defaults to false)
 * @returns The created HTML input element
 */
declare function ElementCreateRangeInput(id: string, value: number, min: number, max: number, step: number, thumbIcon?: string, vertical?: boolean): HTMLInputElement;
/**
 * Creates a dropdown element and adjusts it to the BC look and feel. In the HTML Code this will look like this:
 * <div> -- enclosing div used for css and postioning
 *     <select> -- the select statement with its options
 *         <option 1>
 *         <option n>
 *     </select>
 *     <div></div> -- the div representing the currently selected item
 *     <div> -- div for the various options
 *        <div>Option 1</div>
 *        <div>Option n</div>
 *     </div>
 * </div>
 * This construct is built automatically and ignores the original select statement. All the logic is handled by
 * event handlers that are connected to the various divs. See comments in the code.
 * What this function cannot handle at the moment:
 * - The size is always set to 1
 * - Multiple selects are impossible
 * @param ID - The name of the select item. The outer div will get this name, for positioning. The select
 * tag will get the name ID+"-select"
 * @param Options - The list of options for the current select statement
 * @param ClickEventListener - An event listener to be called, when the value of the drop down box changes
 */
declare function ElementCreateDropdown(ID: string, Options: string[], ClickEventListener?: EventListenerOrEventListenerObject): void;
/**
 * Closes all select boxes in the current document, except the current select box
 * @param elmnt - The select box to exclude from the closing
 */
declare function ElementCloseAllSelect(elmnt: object): void;
/**
 * Creates a new div element in the main document. Does not create a new element if there is already an existing one with the same ID
 * @param ID - The id of the div tag to create.
 */
declare function ElementCreateDiv(ID: string): void;
/**
 * Removes an element from the main document
 * @param ID - The id of the tag to remove from the document.
 */
declare function ElementRemove(ID: string): void;
/**
 * Draws an existing HTML element at a specific position within the document. The element is "centered" on the given coordinates by dividing its height and width by two.
 * @param ElementID - The id of the input tag to (re-)position.
 * @param X - Center point of the element on the X axis.
 * @param Y - Center point of the element on the Y axis.
 * @param W - Width of the element.
 * @param H - Height of the element.
 */
declare function ElementPosition(ElementID: string, X: number, Y: number, W: number, H?: number): void;
/**
 * Draws an existing HTML element at a specific position within the document. The element will not be centered on its given coordinates unlike the ElementPosition function.
 * @param ElementID - The id of the input tag to (re-)position.
 * @param Font - The size of the font to use.
 * @param X - Starting point of the element on the X axis.
 * @param Y - Starting point of the element on the Y axis.
 * @param W - Width of the element.
 * @param H - Height of the element.
 */
declare function ElementPositionFix(ElementID: string, Font: number, X: number, Y: number, W: number, H: number): void;
/**
 * Sets a custom data-attribute to a specified value on a specified element
 * @param ID - The id of the element to create/set the data attribute of.
 * @param Name - Name of the data attribute. ("data-" will be automatically appended to it.)
 * @param Value - Value to give to the attribute.
 */
declare function ElementSetDataAttribute(ID: string, Name: string, Value: string): void;
/**
 * Sets an attribute to a specified value on a specified element
 * @param ID - The id of the element to create/set the data attribute of.
 * @param Name - Name of the attribute.
 * @param Value - Value to give to the attribute.
 */
declare function ElementSetAttribute(ID: string, Name: string, Value: string): void;
/**
 * Scrolls to the end of a specified element
 * @param ID - The id of the element to scroll down to the bottom of.
 */
declare function ElementScrollToEnd(ID: string): void;
/**
 * Returns the given element's scroll position as a percentage, with the top of the element being close to 0 depending on scroll bar size, and the bottom being around 1.
 * To clarify, this is the position of the bottom edge of the scroll bar.
 * @param ID - The id of the element to find the scroll percentage of.
 * @returns A float representing the scroll percentage.
 */
declare function ElementGetScrollPercentage(ID: string): number | null;
/**
 * Checks if a given HTML element is scrolled to the very bottom.
 * @param ID - The id of the element to check for scroll height.
 * @returns Returns TRUE if the specified element is scrolled to the very bottom
 */
declare function ElementIsScrolledToEnd(ID: string): boolean;
/**
 * Gives focus to a specified existing element for non-mobile users.
 * @param ID - The id of the element to give focus to.
 */
declare function ElementFocus(ID: string): void;
/**
 * Toggles HTML elements that were created by a given screen. When toggled off, they are hidden (not removed)
 * @param Screen - Screen for which to hide the elements generated
 * @param ShouldDisplay - TRUE if we are toggling on the elements, FALSE if we are hiding them.
 */
declare function ElementToggleGeneratedElements(Screen: string, ShouldDisplay: boolean): void;
declare let TranslationLanguage: string;
declare let TranslationCache: {};
/**
 * Dictionary for all supported languages and their files
 * @constant
 */
declare let TranslationDictionary: {
    LanguageCode: string;
    LanguageName: string;
    EnglishName: string;
    Files: string[];
}[];
/**
 * Checks if a file can be translated in the selected language
 * @param FullPath - Full path of the file to check for a corresponding translation file
 * @returns Returns TRUE if a translation is available for the given file
 */
declare function TranslationAvailable(FullPath: string): boolean;
/**
 * Parse a TXT translation file and returns it as an array
 * @param str - Content of the translation text file
 * @returns Array of strings with each line divided. For each translated line, the english string precedes the translated one in the array.
 */
declare function TranslationParseTXT(str: string): string[];
/**
 * Translates a string to another language from the array, the translation is always the one right after the english line
 * @param S - The original english string to translate
 * @param T - The active translation dictionary
 * @param CharacterName - Name of the character if it is required to replace it within the string.
 * @returns The translated string
 */
declare function TranslationString(S: string, T: string[], CharacterName: string): string;
/**
 * build [translationsStringLineCache, translationsLineStringCache] for TranslationStringCache
 * @param translations - An array of strings in translation file format (with EN and translated values on alternate lines)
 * @param CharacterName - Name of the character if it is required to replace it within the string.
 * @returns The translated cache [translationsStringLineCache, translationsLineStringCache]
 */
declare function TranslationStringCachePreBuild(translations: string[], CharacterName: string): [Map<string, number>, Map<number, string>];
/**
 * Translates a string to another language from the array,
 * the translation is always the one right after the english line
 * this is the cache mode of TranslationString
 * @param S - The original english string to translate
 * @param translationsStringLineCache - The active translation dictionary <string, stringLine>
 * @param translationsLineStringCache - The active translation dictionary <stringLine, string>
 * @returns The translated string
 */
declare function TranslationStringCache(S: string, translationsStringLineCache: Map<string, number>, translationsLineStringCache: Map<number, string>): string;
/**
 * Translates a set of tags. Rerenders the login message when on the login page.
 * @param S - Array of current tag-value pairs
 * @param T - The active translation dictionary
 */
declare function TranslationTextArray(S: {
    Tag: string;
    Value: string;
}[], T: string[]): void;
/**
 * Translate an array of tags in the current selected language
 * @param Text - Array of current tag-value pairs
 */
declare function TranslationText(Text: {
    Tag: string;
    Value: string;
}[]): void;
/**
 * Changes the current language and save the new selected language to local storage
 */
declare function TranslationNextLanguage(): void;
/**
 * Loads the previous translation language from local storage if it exists
 */
declare function TranslationLoad(): void;
declare let CharacterAppearancePreviousEmoticon: any;
/**
 * Resets the character to it's default appearance
 */
declare function CharacterAppearanceSetDefault(C: Character): void;
/**
 * Removes all items that can be removed, making the character naked. Checks for a blocking of CosPlayItem removal.
 */
declare function CharacterAppearanceNaked(C: Character): void;
/**
 * Sets an item in the character appearance
 * @param C - The character whose appearance should be changed
 * @param Group - The name of the corresponding groupr for the item
 * @param ItemAsset - The asset collection of the item to be changed
 * @param NewColor - The new color (as "#xxyyzz" hex value) for that item
 * @param DifficultyFactor - The difficulty, on top of the base asset difficulty, that should be assigned
 * to the item
 * @param ItemMemberNumber- The member number of the player adding the item - defaults to -1
 * @param Refresh - Determines, wether the character should be redrawn after the item change
 */
declare function CharacterAppearanceSetItem(C: Character, Group: string, ItemAsset: any, NewColor: string | string[], DifficultyFactor?: number, ItemMemberNumber?: number, Refresh?: boolean): void;
/**
 * Serialises a character's appearance into an abbreviated string for backup purposes
 * @param C - The character whose appearance should be serialised
 * @returns A serialised version of the character's current appearance
 */
declare function CharacterAppearanceStringify(C: Character): string;
declare function AppearanceItemStringify(Item: any[]): string;
/**
 * Restores a character's appearance from a serialised string generated by CharacterAppearanceStringify
 * @param C - The character whose appearance should be restored
 * @param backup - The serialised appearance to restore
 * @param clothesOnly - The serialised appearance to restore
 */
declare function CharacterAppearanceRestore(C: Character, backup: string, clothesOnly?: boolean): void;
declare function AppearanceItemParse(stringified: string): any[];
declare function AppearanceCleanup(C: Character): void;
declare function addTextKey(Name: any, Text: any): void;
declare function deleteTextKey(Name: any): void;
/**
 * Creates a restraint using a set of reasonable defaults and adds it to the list of restraints.
 *
 * @param {KDRestraintProps} props
 * A list of restraint props to be applied.  At minimum, the "name", "Group" and "Asset" props should be provided.
 *
 * @param {string} [displayName]
 * The name displayed to the user for the restraint.
 *
 * @param {string} [flavorText]
 * Text that describes the "look and feel" of the restraint.
 *
 * @param {string} [functionText]
 * Text that describes how the restraint operates.
 * @returns The created restraint.
 */
declare function KinkyDungeonCreateRestraint(props: KDRestraintProps, displayName?: string, flavorText?: string, functionText?: string): any;
/**
 * This function adds cursed variants to the restraint list
 * @param {restraint} Restraint - The restraint to have extra variants added onto
 * @param {string[]} Variants - Names of the cursed variants to apply. Must be from KDCursedVars
 */
declare function KinkyDungeonAddCursedVariants(Restraint: restraint, Variants: string[]): void;
/**
 * Gets a list of curses applied to the item
 * @param {string} Restraint
 * @param {boolean} [includeOrig] - includes thje original item
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @returns {string[]}
 */
declare function KinkyDungeonGetCurses(Restraint: string, includeOrig?: boolean, minLevel?: number, maxLevel?: number): string[];
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {ModifierEnum} Type
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @returns {string[]}
 */
declare function KinkyDungeonGetVariantEffectByList(List: string | string[], Type: ModifierEnum, minLevel?: number, maxLevel?: number): string[];
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {string} item
 * @param {ModifierEnum} Type
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @param {PosNeutNeg} [positive] - for gating severity
 * @returns {Record<string, number>}
 */
declare function KinkyDungeonGetVariantEffectByListWeighted(List: string | string[], Type: ModifierEnum, item: string, minLevel?: number, maxLevel?: number, positive?: PosNeutNeg): Record<string, number>;
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {ModifierEnum} Type
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @returns {string[]}
 */
declare function KinkyDungeonGetVariantConditionByList(List: string | string[], Type: ModifierEnum, minLevel?: number, maxLevel?: number): string[];
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {string} item
 * @param {ModifierEnum} Type
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @param {KDModifierEffect[]} [effect_positive] - for gating severity
 * @param {KDModifierEffect[]} [effect_neutral] - for gating severity
 * @param {KDModifierEffect[]} [effect_negative] - for gating severity
 * @returns {Record<string, number>}
 */
declare function KinkyDungeonGetVariantConditionByListWeighted(List: string | string[], Type: ModifierEnum, item: string, minLevel?: number, maxLevel?: number, effect_positive?: KDModifierEffect[], effect_neutral?: KDModifierEffect[], effect_negative?: KDModifierEffect[]): Record<string, number>;
/**
 *
 * @param {string | string[]} ListEffect
 * @param {string | string[]} ListCondition
 * @param {string} item
 * @param {ModifierEnum} Type
 * @param {number} minLevel
 * @param {number} maxLevel
 * @param {PosNeutNeg} pos
 */
declare function KDGenerateEffectConditionPair(ListEffect: string | string[], ListCondition: string | string[], Type: ModifierEnum, item: string, minLevel: number, maxLevel: number, pos: PosNeutNeg): KinkyDungeonEvent[];
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {boolean} [includeOrig] - includes thje original item
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @returns {string[]}
 */
declare function KinkyDungeonGetHexByList(List: string | string[], includeOrig?: boolean, minLevel?: number, maxLevel?: number): string[];
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {string} item
 * @param {boolean} [includeOrig] - includes thje original item
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @param {string[]} [allHex] - for gating curse severity
 * @returns {Record<string, number>}
 */
declare function KinkyDungeonGetHexByListWeighted(List: string | string[], item: string, includeOrig?: boolean, minLevel?: number, maxLevel?: number, allHex?: string[]): Record<string, number>;
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {ModifierEnum} Type
 * @param {boolean} [includeOrig] - includes thje original item
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @returns {string[]}
 */
declare function KinkyDungeonGetEnchantmentsByList(List: string | string[], Type: ModifierEnum, includeOrig?: boolean, minLevel?: number, maxLevel?: number): string[];
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {string} item
 * @param {ModifierEnum} Type
 * @param {boolean} [includeOrig] - includes thje original item
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @param {string[]} [allEnchant] - for gating curse severity
 * @returns {Record<string, number>}
 */
declare function KinkyDungeonGetEnchantmentsByListWeighted(List: string | string[], Type: ModifierEnum, item: string, includeOrig?: boolean, minLevel?: number, maxLevel?: number, allEnchant?: string[]): Record<string, number>;
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {boolean} [includeOrig] - includes thje original item
 * @param {number} [minRarity] - for gating curse severity
 * @param {number} [maxRarity] - for gating curse severity
 * @returns {string[]}
 */
declare function KinkyDungeonGetWeaponsByList(List: string | string[], includeOrig?: boolean, minRarity?: number, maxRarity?: number): string[];
/**
 * Gets a list of curses applied to the item
 * @param {string} WeaponList
 * @param {boolean} [includeOrig] - includes thje original item
 * @param {number} [minRarity] - for gating curse severity
 * @param {number} [maxRarity] - for gating curse severity
 * @returns {Record<string, number>}
 */
declare function KinkyDungeonGetWeaponsByListWeighted(WeaponList: string, includeOrig?: boolean, minRarity?: number, maxRarity?: number): Record<string, number>;
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {boolean} [includeOrig] - includes thje original item
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @returns {string[]}
 */
declare function KinkyDungeonGetCurseByList(List: string | string[], includeOrig?: boolean, minLevel?: number, maxLevel?: number): string[];
/**
 * Gets a list of curses applied to the item
 * @param {string | string[]} List
 * @param {string} item
 * @param {boolean} [includeOrig] - includes thje original item
 * @param {number} [minLevel] - for gating curse severity
 * @param {number} [maxLevel] - for gating curse severity
 * @returns {Record<string, number>}
 */
declare function KinkyDungeonGetCurseByListWeighted(List: string | string[], item: string, includeOrig?: boolean, minLevel?: number, maxLevel?: number): Record<string, number>;
/**
 * Creates a restraint using an existing restraint as a base and adds it to the list of restraints.
 *
 * @param {string} clonedName
 * The name of the restraint to be cloned.
 *
 * @param {string} newName
 * The name of the newly created restraint.
 *
 * @param {object} props
 * A list of restraint props to be applied.  Anything that isn't supplied with be identical to the base object.
 *
 * @returns The created restraint.
 */
declare function KinkyDungeonCloneRestraint(clonedName: string, newName: string, props: object): any;
/**
 * Registers text for a named restraint.
 *
 * @param {string} name
 * The name of the restraint used by the system.
 *
 * @param {string} displayName
 * The name displayed to the user for the restraint.
 *
 * @param {string} flavorText
 * Text that describes the "look and feel" of the restraint.
 *
 * @param {string} functionText
 * Text that describes how the restraint operates.
 */
declare function KinkyDungeonAddRestraintText(name: string, displayName: string, flavorText: string, functionText: string): void;
/**
 * Registers text for a named restraint.
 *
 * @param {string} restraint - The name of the restraint used by the system.
 * @param {string} newRestraint - The name of the new restraint used by the system.
 *
 */
declare function KinkyDungeonDupeRestraintText(restraint: string, newRestraint: string): void;
type KDPosNeutNeg = PosNeutNeg;
declare namespace KDPosNeutNeg {
    const positive: number;
    const neutral: number;
    const negative: number;
}
type KDModifierEnum = ModifierEnum;
declare namespace KDModifierEnum {
    const restraint_1: number;
    export { restraint_1 as restraint };
    export const looserestraint: number;
    export const weapon: number;
    export const consumable: number;
}
declare function cloneDeep(obj: any): any;
declare namespace defaultRestraint {
    const inventory: boolean;
    const power: number;
    const weight: number;
    const minLevel: number;
    const allFloors: boolean;
    namespace escapeChance {
        const Struggle: number;
        const Cut: number;
        const Remove: number;
    }
    const events: any[];
    const enemyTags: any[];
    const playerTags: any[];
    const shrine: any[];
}
/**
 * @type {Record<string, Record<string, number>>}
 */
declare let KDCursedVariantsCreated: Record<string, Record<string, number>>;
declare namespace KDShaders {
    namespace Kawase {
        const code: string;
    }
    namespace Darkness {
        const code_1: string;
        export { code_1 as code };
    }
    namespace FogFilter {
        const code_2: string;
        export { code_2 as code };
    }
    namespace MultiplyFilter {
        const code_3: string;
        export { code_3 as code };
    }
    namespace GammaFilter {
        const code_4: string;
        export { code_4 as code };
    }
    namespace Solid {
        const code_5: string;
        export { code_5 as code };
    }
}
/**
 * Function to reset certain state variables of auto struggle
 */
declare function KDInitAutoStruggle(): void;
/**
 * Updates the wiggle point
 * @param {entity} player
 * @param {boolean} [force]
 */
declare function KDAS_UpdateWigglePoint(player: entity, force?: boolean): void;
/**
 * Returns if the player is on the wiggle point or not
 * @param {entity} player
 * @returns {boolean}
 */
declare function KDAS_InWigglePoint(player: entity): boolean;
/**
 * Returns an array of tiles the player can move near the wiggle points
 * @param {entity} player
 * @param {boolean} goCloser - If the player has to move closer to the wiggle point
 * @returns {{x: number, y: number}[]}
 */
declare function KDAS_GetMovableWigglePoint(player: entity, goCloser: boolean): {
    x: number;
    y: number;
}[];
/**
 *
 * @param {string} result
 * @returns {number}
 */
declare function KDAS_SwitchFavor(result: string): number;
/**
 *
 * @param {string} result
 * @returns {number}
 */
declare function KDAS_SwitchDelay(result: string): number;
/**
 * Master function for handling the Auto Struggle state machine
 * @param {entity} player
 */
declare function KDHandleAutoStruggle(player: entity): void;
/**
 * Updates the KDAutoStruggleData state data to accurately reflect the player
 * @param {entity} player
 */
declare function KDAutoStruggleEvaluate(player: entity): void;
/**
 * Updates the KDAutoStruggleData decidedAction variable
 * @param {entity} player
 */
declare function KDAutoStruggleMakeDecision(player: entity): void;
/**
 * Executes the run decision
 * @param {entity} player
 */
declare function KDAutoStruggleRunDecision(player: entity): KDAS_Result;
declare function KDAutoWaitIndexID(player: any, group: any, index: any, action: any): string;
declare namespace KDAutoStruggleData {
    const lastTick: number;
    const lastActionQueue: KDAS_Result[];
    const decidedAction: string;
    const possibleActions: {
        action: KDAS_Action;
        weight: number;
    }[];
    const totalDespair: Record<string, number>;
    const currentFocusGroup: string;
    const currentFocusIndex: number;
    const currentFocusDespair: number;
    const currentFocusDespairTarget: number;
    const overallDespair: number;
    const lastDelay: number;
    const wigglePoint: {
        x: number;
        y: number;
    };
    const wiggleDist: number;
}
/** @type {Record<string, {itemweight?: (player: entity, item: item) => number, playerweight?: (player: entity) => number, action: (player: entity) => KDAS_Result}>} */
declare let KDAutoStruggleActions: Record<string, {
    itemweight?: (player: entity, item: item) => number;
    playerweight?: (player: entity) => number;
    action: (player: entity) => KDAS_Result;
}>;
type KDAS_Result = {
    action: string;
    id: string;
    result: string;
    favorability: number;
    delay: number;
};
type KDAS_Action = {
    action: string;
    id: string;
    group: string;
    index: number;
};
declare namespace KDClassReqs {
    function Trainee(): boolean;
}
declare namespace KDClassStart {
    export function Fighter(): void;
    export function Rogue(): void;
    export function Mage(): void;
    export function Peasant(): void;
    export function Trainee_1(): void;
    export { Trainee_1 as Trainee };
}
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string} img
 * @param {string} type
 * @param {KDParticleData} data
 */
declare function KDAddParticle(x: number, y: number, img: string, type: string, data: KDParticleData): void;
declare function KDUpdateParticles(delta: any): void;
declare function KDRemoveParticle(id: any): void;
/**
 * Draws arousal heart particles
 * @param {number} pinkChance - 0 to 1
 * @param {number} density - 0 to 1
 * @param {number} purpleChance - 0 to 1
 */
declare function KDDrawArousalParticles(pinkChance: number, density: number, purpleChance: number): void;
declare function KDDrawVibeParticles(density: any): void;
declare function KDAddShockwave(x: any, y: any, size: any, spr?: string, attachToCamera?: boolean): void;
/**
 *
 */
declare function KDCreateVibeParticle(): void;
/**
 *
 * @param {number} pinkChance - 0 to 1
 * @param {number} purpleChance - 0 to 1
 */
declare function KDCreateArousalParticle(pinkChance: number, purpleChance: number): void;
/** @type {Map<Number, {info: any, sprite: any}>} */
declare let KDParticles: Map<number, {
    info: any;
    sprite: any;
}>;
declare let KDParticleid: number;
declare let lastArousalParticle: number;
declare let lastVibeParticle: number;
/**
 *
 * @param {string} item
 * @param {ModifierEnum} type
 * @param {KDModifierEffect[]} pos
 * @param {KDModifierEffect[]} neut
 * @param {KDModifierEffect[]} neg
 * @returns {KinkyDungeonEvent[]}
 */
declare function KDGenericEffects(item: string, type: ModifierEnum, pos: KDModifierEffect[], neut: KDModifierEffect[], neg: KDModifierEffect[]): KinkyDungeonEvent[];
declare namespace KDModifierEffectVariantList {
    const Common: string[];
}
declare namespace KDModifierConditionVariantList {
    const Common_1: string[];
    export { Common_1 as Common };
}
/**@type {Record<string, KDModifierEffect>} */
declare let KDModifierEffects: Record<string, KDModifierEffect>;
/**@type {Record<string, KDModifierCondition>} */
declare let KDModifierConditions: Record<string, KDModifierCondition>;
declare namespace KDHexVariantList {
    const Base: string[];
    const Common: string[];
    const CursedCollar: string[];
    const CursedCollar2: string[];
}
/** @type {Record<string, {level: number, weight: (item: string, allHex: string[], data: KDHexEnchantWeightData) => number, events: (data: KDHexEnchantEventsData) => KinkyDungeonEvent[]}>} */
declare let KDEventHexModular: Record<string, {
    level: number;
    weight: (item: string, allHex: string[], data: KDHexEnchantWeightData) => number;
    events: (data: KDHexEnchantEventsData) => KinkyDungeonEvent[];
}>;
/**
 *
 * @param {number} amt
 * @param {string} item
 * @param {any} Loot
 * @param {string} curse
 * @param {string} primaryEnchantment
 * @returns {number}
 */
declare function KDGenericMultEnchantmentAmount(amt: number, item: string, Loot: any, curse: string, primaryEnchantment: string): number;
/**
 * Normalized for stats that are multiplicative, E.G mana costs
 * Only works for stuff normalized to a range of (0-100)
 * @param {number} amt
 * @param {string} item
 * @param {any} Loot
 * @param {string} curse
 * @param {string} primaryEnchantment
 * @returns {number}
 */
declare function KDNormalizedMultEnchantmentAmount(amt: number, item: string, Loot: any, curse: string, primaryEnchantment: string): number;
declare function KDGetItemPower(item: any): number;
declare function KDGetItemRarity(item: any): number;
/**
 *
 * @param {string} item
 * @param {*} Loot
 * @param {string} curse
 * @param {string} primaryEnchantment
 * @param {string[]} enchantments
 * @param {KDHexEnchantEventsData} data
 * @param {string[]} types
 * @returns {string}
 */
declare function KDEnchantDetermineKind(item: string, Loot: any, curse: string, primaryEnchantment: string, enchantments: string[], data: KDHexEnchantEventsData, types: string[]): string;
declare namespace KDEnchantVariantList {
    const Common: string[];
    const Gold: string[];
    const CommonWeapon: string[];
}
/** @type {Record<string, KDEnchantment>} */
declare let KDEventEnchantmentModular: Record<string, KDEnchantment>;
/**
 * @type {Record<string, AIType>}
 */
declare let KDAIType: Record<string, AIType>;
/**
 * @type {Record<string, KDLoadout>}
 */
declare let KDLoadouts: Record<string, KDLoadout>;
/**
 * @type {Record<string, ApplyVariant>}
 */
declare let KDApplyVariants: Record<string, ApplyVariant>;
declare let KDMarketRateDecay: number;
/**
 * @type {Record<string, KDInventoryActionDef>}
 */
declare let KDInventoryAction: Record<string, KDInventoryActionDef>;
declare function KDGetSleepWillFraction(): number;
declare function KDInitInventory(): void;
declare function KinkyDungeonDefaultStats(Load: any): void;
declare function KinkyDungeonGetVisionRadius(): number;
/**
 *
 * @param {entity} entity
 * @returns {{radius: number, mult: number, vision: number, visionmult: number, blindsight: number}}
 */
declare function KDEntitySenses(entity: entity): {
    radius: number;
    mult: number;
    vision: number;
    visionmult: number;
    blindsight: number;
};
/**
 *
 * @returns {{radius: number, mult: number}}
 */
declare function KinkyDungeonGetHearingRadius(): {
    radius: number;
    mult: number;
};
/** Returns if the player is automatically doing stuff
 * @returns {boolean}
 */
declare function KDIsAutoAction(): boolean;
/**
 * Disables all automatic actions
 */
declare function KDDisableAutoWait(): void;
declare function KinkyDungeonInterruptSleep(): void;
declare function KDGetStamDamageThresh(): number;
/**
 *
 * @param {any} bullet
 * @param {entity} entity
 * @param {boolean} [suppressAdd]
 * @returns {boolean}
 */
declare function KDBulletAlreadyHit(bullet: any, entity: entity, suppressAdd?: boolean): boolean;
declare function KinkyDungeonDealDamage(Damage: any, bullet: any, noAlreadyHit: any, noInterrupt: any, noMsg: any): {
    happened: any;
    string: string;
};
declare function KinkyDungeonUpdateDialogue(entity: any, delta: any): void;
/**
 *
 * @param {entity} entity
 * @param {string} dialogue
 * @param {string} color
 * @param {number} duration
 * @param {number} priority
 * @param {boolean} [force]
 * @param {boolean} [nooverride]
 */
declare function KinkyDungeonSendDialogue(entity: entity, dialogue: string, color: string, duration: number, priority: number, force?: boolean, nooverride?: boolean): void;
declare function KinkyDungeonChangeDistraction(Amount: any, NoFloater: any, lowerPerc: any, minimum?: number): number;
declare function KinkyDungeonChangeDesire(Amount: any, NoFloater: any): number;
declare function KinkyDungeonChangeStamina(Amount: any, NoFloater: any, Pause: any, NoSlow: any, minimum?: number, slowFloor?: number, Regen?: boolean): void;
/**
 *
 * @param {number} Amount]
 * @param {boolean} [NoFloater]
 * @param {number} [PoolAmount]
 * @param {boolean} [Pause]
 * @param {boolean} [spill]
 */
declare function KinkyDungeonChangeMana(Amount: number, NoFloater?: boolean, PoolAmount?: number, Pause?: boolean, spill?: boolean, minimum?: number): void;
declare function KinkyDungeonChangeWill(Amount: any, NoFloater: any, minimum?: number): void;
declare function KDChangeBalance(Amount: any, NoFloater: any): number;
declare function KinkyDungeonChangeCharge(Amount: any, NoFloater: any): void;
declare function KinkyDungeonHasStamina(Cost: any, AddRate: any): boolean;
declare function KinkyDungeonHasWill(Cost: any, AddRate: any): boolean;
declare function KinkyDungeonHasMana(Cost: any, AddRate: any): boolean;
declare function KinkyDungeonSetMaxStats(delta: any): {
    distractionRate: number;
    staminaRate: number;
};
/**
 *
 * @param {boolean} [NoOverride]
 * @param {boolean} [e]
 * @param {weapon} [weapon]
 * @returns {boolean}
 */
declare function KinkyDungeonCanUseWeapon(NoOverride?: boolean, e?: boolean, weapon?: weapon): boolean;
declare function KDGetDistractionRate(delta: any): number;
declare function KDGetDistractionDesireRate(): number;
/**
 *
 * @param {number} delta
 */
declare function KinkyDungeonUpdateStats(delta: number): void;
declare function KDGetEnvironmentalDmg(): number;
declare function KDUpdatePerksBonus(): void;
declare function KinkyDungeonCalculateMiscastChance(): void;
declare function KinkyDungeonGetBlindLevel(): number;
declare function KinkyDungeonCapStats(): void;
declare function KDIsHogtied(C: any): any;
declare function KDIsKneeling(C: any): any;
declare function KinkyDungeonLegsBlocked(): boolean;
declare function KinkyDungeonCanStand(): boolean;
declare function KinkyDungeonCanKneel(): boolean;
declare function KinkyDungeonCalculateHeelLevel(delta: any, overrideKneel: any): void;
declare function KinkyDungeonCalculateSlowLevel(delta: any): void;
/**
 * Returns the total level of gagging, 1.0 or higher meaning "fully gagged" and 0.0 being able to speak.
 * @param   {boolean} [AllowFlags] - Whether or not flags such as allowPotions and blockPotions should override the final result
 * @return  {number} - The gag level, sum of all gag properties of worn restraints
 */
declare function KinkyDungeonGagTotal(AllowFlags?: boolean, gagMult?: number): number;
declare function KinkyDungeonCanTalk(Loose: any): boolean;
declare function KinkyDungeonCalculateSubmissiveMult(): number;
declare function KinkyDungeonCanPlayWithSelf(): boolean;
declare function KinkyDungeonCanTryOrgasm(): boolean;
declare function KDGetOrgasmCost(): number;
/**
 * @param {number} [tease] - The teasing power
 * @returns {{orig: number, final: number}}
 */
declare function KDGetPlaySelfPower(tease?: number): {
    orig: number;
    final: number;
};
declare function KinkyDungeonDoPlayWithSelf(tease: any): number;
declare function KDGetPlaySelfThreshold(): number;
/**
 * Try to let go...
 * @param {number} [Bonus]
 * @param {number} [Auto] - whether this was automatically triggered or not. 0 = manual, 1 = forced by enemy/vibe, 2 - player character can't resist
 */
declare function KinkyDungeonDoTryOrgasm(Bonus?: number, Auto?: number): void;
declare function KinkyDungeonIsChaste(Breast: any): boolean;
declare function KinkyDungeonChastityMult(): number;
/**
 *
 * @param {any} buffs
 * @param {string} type
 * @returns {number}
 */
declare function KDBuffResist(buffs: any, type: string): number;
/**
 *
 * @param {entity} player
 * @returns {boolean}
 */
declare function KDIsEdged(player: entity): boolean;
declare function KDGetHeelTraining(): number;
declare function KDTrip(delta: any): void;
declare function KDGetRecoverBalance(): number;
declare function KDGetBalanceRate(): number;
declare function KDTripDuration(): number;
declare function KDGetBalanceCost(): number;
/**
 * Goes thru all training categories and advances them by an amount, and resets the turns
 */
declare function KDAdvanceTraining(): void;
/**
 *
 * @param {string} Name
 * @param {boolean} trained
 * @param {boolean} skipped
 * @param {number} total
 * @param {number} bonus - Multiplier for turns trained or skipped
 */
declare function KDTickTraining(Name: string, trained: boolean, skipped: boolean, total: number, bonus?: number): void;
declare function KDForcedToGround(): any;
declare function KDBalanceDmgMult(): number;
declare function KDFitnessMult(): number;
/** @type {any} */
declare let KinkyDungeonPlayerEntity: any;
declare let KDBaseBalanceDmgLevel: number;
declare let KDShadowThreshold: number;
declare let KDSleepWillFraction: number;
declare let KDSleepWillFractionJail: number;
declare let KDShieldRatio: number;
declare let KDMaxStat: number;
declare let KDMaxStatStart: number;
declare let KDMaxStatStartPool: number;
declare let KDStamDamageThresh: number;
declare let KDStamDamageThreshBonus: number;
declare let KDSleepRegenWill: number;
declare let KinkyDungeonStatDistractionMax: number;
declare let KDDistractionLowerPercMult: number;
declare let KinkyDungeonStatDistractionLower: number;
declare let KinkyDungeonStatDistractionLowerCap: number;
declare let KinkyDungeonStatArousalLowerRegenSleep: number;
declare let KinkyDungeonDistractionUnlockSuccessMod: number;
declare let KinkyDungeonStatDistraction: number;
declare let KinkyDungeonCrotchRopeDistraction: number;
declare let KinkyDungeonStatDistractionRegen: number;
declare let KinkyDungeonStatDistractionRegenPerUpgrade: number;
declare let KDNoUnchasteBraMult: number;
declare let KDNoUnchasteMult: number;
declare let KDDistractionDecayMultDistractionMode: number;
declare let KDDistractedAmount: number;
declare let KinkyDungeonStatDistractionMiscastChance: number;
declare let KinkyDungeonMiscastChance: number;
declare let KinkyDungeonVibeLevel: number;
declare let KinkyDungeonTeaseLevel: number;
/** This is super powerful teasing that bypasses chastity */
declare let KinkyDungeonTeaseLevelBypass: number;
declare let KinkyDungeonOrgasmVibeLevel: number;
declare let KinkyDungeonDistractionPerVibe: number;
declare let KinkyDungeonDistractionPerPlug: number;
declare let KinkyDungeonVibeCostPerIntensity: number;
declare let KinkyDungeonStatWillpowerExhaustion: number;
declare let KinkyDungeonSleepTurnsMax: number;
declare let KinkyDungeonStatStaminaMax: number;
declare let KinkyDungeonStatStamina: number;
declare let KinkyDungeonStatStaminaRegen: number;
declare let KinkyDungeonStatStaminaRegenPerUpgrade: number;
declare let KinkyDungeonStatStaminaRegenPerUpgradeWill: number;
declare let KDNarcolepticRegen: number;
declare let KinkyDungeonStatStaminaRegenJail: number;
declare let KinkyDungeonStatStaminaRegenSleep: number;
declare let KinkyDungeonStatStaminaRegenSleepBedMultiplier: number;
declare let KinkyDungeonStatStaminaRegenWait: number;
declare let KinkyDungeoNStatStaminaLow: number;
declare let KDSprintCostBase: number;
declare let KDSprintCostSlowLevel: number[];
declare let KinkyDungeonStatWillMax: number;
declare let KinkyDungeonStatWill: number;
declare let KinkyDungeonStatWillRate: number;
declare let KinkyDungeonStatManaMax: number;
declare let KinkyDungeonStatMana: number;
declare let KinkyDungeonStatManaPool: number;
declare let KinkyDungeonStatManaPoolMax: number;
declare let KDManaPoolRatio: number;
declare let KinkyDungeonStatManaRate: number;
declare let KinkyDungeonStatManaRegen: number;
declare let KinkyDungeonStatManaLowRegen: number;
declare let KDMeditationRegen: number;
declare let KinkyDungeonStatManaRegenLowThreshold: number;
declare let KinkyDungeonStatManaPoolRegen: number;
declare let KinkyDungeonStatStaminaRegenPerSlowLevel: number;
declare let KinkyDungeonStatStaminaCostStruggle: number;
declare let KinkyDungeonStatStaminaCostRemove: number;
declare let KinkyDungeonStatStaminaCostTool: number;
declare let KinkyDungeonStatStaminaCostPick: number;
declare let KinkyDungeonStatWillCostStruggle: number;
declare let KinkyDungeonStatWillCostRemove: number;
declare let KinkyDungeonStatWillCostTool: number;
declare let KinkyDungeonStatWillCostPick: number;
declare let KinkyDungeonStatWillCostUnlock: number;
declare let KinkyDungeonStatWillCostEscape: number;
declare let KinkyDungeonStatWillBonusEscape: number;
declare let KinkyDungeonStaminaRate: number;
declare let KinkyDungeonStatBeltLevel: number;
declare let KinkyDungeonStatPlugLevel: number;
declare let KinkyDungeonPlugCount: number;
declare let KinkyDungeonStatVibeLevel: number;
declare let KinkyDungeonStatEdged: boolean;
declare let KinkyDungeonStatDistractionGainChaste: number;
declare let KinkyDungeonSlowLevel: number;
declare let KinkyDungeonBlindLevelBase: number;
declare let KinkyDungeonBlindLevel: number;
declare let KinkyDungeonStatBlind: number;
declare let KinkyDungeonStatFreeze: number;
declare let KinkyDungeonStatBind: number;
declare let KinkyDungeonDeaf: boolean;
declare let KinkyDungeonSleepiness: number;
declare let KinkyDungeonSleepinessMax: number;
declare let KinkyDungeonGold: number;
declare let KinkyDungeonLockpicks: number;
declare let KinkyDungeonRedKeys: number;
declare let KinkyDungeonBlueKeys: number;
declare let KinkyDungeonHasCrotchRope: boolean;
declare let KinkyDungeonTorsoGrabChance: number;
declare let KinkyDungeonTorsoGrabChanceBonus: number;
declare let KinkyDungeonWeaponGrabChance: number;
/**
 * Your inventory contains items that are on you
 * @type {Map<string, Map<string, item>>}
 */
declare let KinkyDungeonInventory: Map<string, Map<string, item>>;
declare let KinkyDungeonPlayerTags: Map<any, any>;
declare let KinkyDungeonCurrentDress: string;
declare let KinkyDungeonUndress: number;
/**
 * @type {spell[]}
 */
declare let KinkyDungeonSpells: spell[];
declare let KinkyDungeonPlayerBuffs: {};
declare let KinkyDungeonPlayers: any[];
declare let KinkyDungeonDifficulty: number;
declare let KinkyDungeonSubmissiveMult: number;
declare let KinkyDungeonSpellPoints: number;
declare let KDMaxVisionDist: number;
declare let KDMinVisionDist: number;
declare let KDNightVision: number;
declare namespace KDBaseDamageTypes {
    const knockbackTypes: string[];
    const knockbackTypesStrong: string[];
    const arouseTypes: string[];
    const bypassTeaseTypes: string[];
    const distractionTypesWeakNeg: string[];
    const distractionTypesWeak: string[];
    const distractionTypesStrong: string[];
    const teaseTypes: string[];
    const staminaTypesWeak: string[];
    const staminaTypesStrong: string[];
    const manaTypesWeak: string[];
    const manaTypesStrong: any[];
    const willTypesVeryWeak: string[];
    const willTypesWeak: string[];
    const willTypesStrong: string[];
}
declare let KDOrigStamina: number;
declare let KDOrigMana: number;
declare let KDOrigWill: number;
declare let KDOrigCharge: number;
declare let KDOrigBalance: number;
declare let KDOrigDistraction: number;
declare let KDOrigDesire: number;
declare let KDBlindnessCap: number;
declare let KDBoundPowerLevel: number;
declare let KDNoRegenFlag: boolean;
declare let KDDamageAmpPerks: number;
declare let KDDamageAmpPerksMelee: number;
declare let KDDamageAmpPerksMagic: number;
declare let KDDamageAmpPerksSpell: number;
declare let KDDamageAmpEnvironmental: number;
declare let KDExtraEnemyTags: {};
/** Percentage of vibe level that is turned into playSelfPower to try to have an orgasm*/
declare let KinkyDungeonOrgasmVibeLevelPlayPowerMult: number;
declare let KinkyDungeonOrgasmChanceBase: number;
declare let KinkyDungeonOrgasmChanceScaling: number;
declare let KinkyDungeonMaxOrgasmStage: number;
declare let KinkyDungeonOrgasmStageVariation: number;
/** Threshold at which the player can play with herself */
declare let KinkyDungeonDistractionSleepDeprivationThreshold: number;
/** Threshold at which the player will automatically play with herself if able*/
declare let KinkyDungeonDistractionPlaySelfThreshold: number;
declare let KinkyDungeonPlaySelfOrgasmThreshold: number;
declare let KinkyDungeonOrgasmTurnsMax: number;
declare let KinkyDungeonOrgasmTurnsCrave: number;
declare let KinkyDungeonPlayWithSelfPowerMin: number;
declare let KinkyDungeonPlayWithSelfPowerMax: number;
declare let KinkyDungeonPlayWithSelfPowerVibeWand: number;
declare let KinkyDungeonPlayWithSelfChastityPenalty: number;
declare let KinkyDungeonPlayWithSelfBoundPenalty: number;
declare let KinkyDungeonOrgasmExhaustionAmount: number;
declare let KinkyDungeonOrgasmExhaustionAmountWillful: number;
declare let KDOrgasmStageTimerMax: number;
declare let KDWillpowerInvolChanceMult: number;
declare let KDInvolChanceBase: number;
declare let KDPassionInvolChanceMult: number;
declare let KDWillpowerMultiplier: number;
declare let KinkyDungeonOrgasmCost: number;
declare let KinkyDungeonOrgasmCostPercent: number;
declare let KinkyDungeonOrgasmWillpowerCost: number;
declare let KinkyDungeonEdgeCost: number;
declare let KinkyDungeonEdgeWillpowerCost: number;
declare let KinkyDungeonPlayCost: number;
declare let KinkyDungeonOrgasmStunTime: number;
declare let KinkyDungeonPlayWithSelfMult: number;
/** This many training turns are requred, any less is scaled down by this amount */
declare let KDTrainingSoftScale: number;
/**
 * @type {Record<string, KDMapTile>}
 */
declare let KDMapTilesList: Record<string, KDMapTile>;
declare function KDInitTileEditor(): void;
declare function KDGetTileIndexImg(index: any): {
    u: any;
    d: any;
    l: any;
    r: any;
};
declare function KDDrawTileEditor(): void;
declare function KDDrawEditorTagsUI(): void;
declare function KDDrawEditorUI(): void;
declare function KDTE_CustomUI(): void;
declare function KDTE_Clear(x: any, y: any, force?: boolean): void;
declare function KDHandleTileEditor(noSwap: any): void;
declare function KDTE_UpdateUI(Load: any): void;
declare function KDTESetIndexToTile(propTile: any): void;
declare function KDTE_CullIndex(tileKeys: any, brushKeys: any): void;
declare function KDTE_CloseUI(): void;
/**
 *
 * @param {number} w
 * @param {number} h
 * @param {string} chkpoint
 */
declare function KDTE_Create(w: number, h: number, chkpoint?: string): void;
declare function KDTE_LoadTile(name: any, loadedTile: any): void;
/**
 * @returns {KDMapTile}
 */
declare function KDTE_ExportTile(): KDMapTile;
declare function KDTE_SaveTile(tile: any): void;
/**
 * @returns {{indX1: number, indY1: number, dir1: string, indX2: number, indY2: number, dir2: string}[]}
 */
declare function KDTEGetInaccessible(): {
    indX1: number;
    indY1: number;
    dir1: string;
    indX2: number;
    indY2: number;
    dir2: string;
}[];
declare function KDObjFromMapArray(array: any): any;
declare function KDReloadAllEditorTiles(): void;
declare function KDTE_GetField(field: any): string | number | string[];
declare let KDMapTilesListEditor: any;
declare let KDTileToTest: any;
declare let KDEditorTileIndex: string;
declare let KDEditorTileFlex: string;
declare let KDEditorTileFlexSuper: string;
declare let KDEditorTileIndexQuery: string;
/**
 * @type {Record<string, string>}
 */
declare let KDEditorTileIndexStore: Record<string, string>;
/**
 * @type {Record<string, string>}
 */
declare let KDEditorTileFlexStore: Record<string, string>;
/**
 * @type {Record<string, string>}
 */
declare let KDEditorTileFlexSuperStore: Record<string, string>;
declare let KDEditorCurrentMapTileName: string;
declare let KDEditorCurrentMapTile: any;
declare namespace KDTileIndices {
    const udlr: boolean;
    const u: boolean;
    const d: boolean;
    const l: boolean;
    const r: boolean;
    const ud: boolean;
    const lr: boolean;
    const ul: boolean;
    const ur: boolean;
    const dl: boolean;
    const dr: boolean;
    const udl: boolean;
    const udr: boolean;
    const dlr: boolean;
    const ulr: boolean;
}
declare let KDEditorTileIndexHover: string;
declare let KDEditorTileNameIndex: number;
declare let KDEditorTileBrush: string;
declare let KDEditorTileBrushIndex: number;
declare let KDEditorTileBrushIndex2: number;
declare let KDTilePalette: {
    Clear: {
        type: string;
        tile: string;
    };
    Wall: {
        type: string;
        tile: string;
    };
    '----Spawns----': {
        type: string;
    };
    Spawn: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: any[];
        };
    };
    SpawnGuard: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: any[];
            AI: string;
        };
    };
    Prisoner: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    SpawnLooseGuard: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: any[];
            AI: string;
        };
    };
    SpawnMiniboss: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            AI: string;
        };
    };
    SpawnBoss: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            AI: string;
        };
    };
    '----SpecifcSpawns----': {
        type: string;
    };
    SpawnStatue: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            Label: string;
        };
    };
    SpawnObstacleDoor: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnSoulCrys: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnSoulCrysActive: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnChaosCrysRare: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
            Chance: number;
        };
    };
    SpawnChaosCrys: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnChaosCrysActive: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnMushroom: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnCustom: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: any[];
            Label: string;
        };
        customfields: {
            required: {
                type: string;
            };
            tags: {
                type: string;
            };
            filterTags: {
                type: string;
            };
            Label: {
                type: string;
            };
            Chance: {
                type: string;
            };
            AI: {
                type: string;
            };
            force: {
                type: string;
            };
            faction: {
                type: string;
            };
            levelBoost: {
                type: string;
            };
            forceIndex: {
                type: string;
            };
        };
    };
    ForceSpawnCustom: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: any[];
            Label: string;
        };
        customfields: {
            required: {
                type: string;
            };
            tags: {
                type: string;
            };
            filterTags: {
                type: string;
            };
            Label: {
                type: string;
            };
            Chance: {
                type: string;
            };
            AI: {
                type: string;
            };
            force: {
                type: string;
            };
            faction: {
                type: string;
            };
            levelBoost: {
                type: string;
            };
            forceIndex: {
                type: string;
            };
        };
    };
    '----Tiles----': {
        type: string;
    };
    Brick: {
        type: string;
        tile: string;
    };
    Doodad: {
        type: string;
        tile: string;
    };
    Grate: {
        type: string;
        tile: string;
    };
    Bars: {
        type: string;
        tile: string;
    };
    Bed: {
        type: string;
        tile: string;
    };
    Crack: {
        type: string;
        tile: string;
    };
    LatexPipe: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Skin: string;
        };
    };
    LatexThin: {
        type: string;
        effectTile: string;
    };
    LatexThinBlue: {
        type: string;
        effectTile: string;
    };
    Latex: {
        type: string;
        effectTile: string;
    };
    LatexBlue: {
        type: string;
        effectTile: string;
    };
    WallHook: {
        type: string;
        tile: string;
    };
    CeilingHook: {
        type: string;
        tile: string;
    };
    '----Deco----': {
        type: string;
    };
    Pipe: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Skin: string;
        };
    };
    InactiveTablet: {
        type: string;
        tile: string;
    };
    BrokenShrine: {
        type: string;
        tile: string;
    };
    BrokenOrb: {
        type: string;
        tile: string;
    };
    BrokenCharger: {
        type: string;
        tile: string;
    };
    Dummy0: {
        type: string;
        tile: string;
        special: {
            Type: string;
            SkinCode: string;
            Skin2: string;
        };
    };
    Dummy1: {
        type: string;
        tile: string;
        special: {
            Type: string;
            SkinCode: string;
            Skin2: string;
        };
    };
    Dummy2: {
        type: string;
        tile: string;
        special: {
            Type: string;
            SkinCode: string;
            Skin2: string;
        };
    };
    '----Doors----': {
        type: string;
    };
    Door: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    DoorAlways: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
            AlwaysClose: boolean;
        };
    };
    Door_RedLock: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
            AlwaysClose: boolean;
            Lock: string;
        };
    };
    Door_PurpleLock: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
            AlwaysClose: boolean;
            Lock: string;
        };
    };
    Door_BlueLock: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
            AlwaysClose: boolean;
            Lock: string;
        };
    };
    AutoDoorToggle: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
        };
    };
    AutoDoorOpenToggle: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
        };
    };
    AutoDoorHoldOpen: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
            Label: string;
        };
    };
    AutoDoorHoldClosed: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
            Label: string;
        };
    };
    AutoDoorOpen: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
            Label: string;
        };
    };
    AutoDoorClose: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
            Label: string;
        };
    };
    '----Furniture----': {
        type: string;
    };
    Table: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    TableFood: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Food: string;
        };
    };
    Rubble: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    Sharp: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    SharpAlways: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Always: boolean;
        };
    };
    Barrel: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    BarrelAlways: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Always: boolean;
        };
    };
    Cage: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    DisplayStand: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    DisplayEgyptian: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    '----Chests----': {
        type: string;
    };
    Chest: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    ChestRed: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Lock: string;
        };
    };
    ChestBlue: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Lock: string;
        };
    };
    ChestOrShrine: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    HighPriorityChest: {
        type: string;
        tile: string;
        special: {
            Priority: boolean;
        };
    };
    SilverChest: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Loot: string;
            Priority: boolean;
        };
    };
    StorageChest: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Loot: string;
            Chance: number;
        };
    };
    ChestCustom: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Loot: string;
        };
        customfields: {
            Loot: {
                type: string;
            };
            Faction: {
                type: string;
            };
            NoTrap: {
                type: string;
            };
            lootTrap: {
                type: string;
            };
            Lock: {
                type: string;
            };
            Priority: {
                type: string;
            };
        };
    };
    GuardedChest: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Label: string;
        };
    };
    GuardedChestLocked: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Lock: string;
            Label: string;
        };
    };
    '----Shrines----': {
        type: string;
    };
    Shrine: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Name: string;
        };
    };
    HighPriorityShrine: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Name: string;
            Priority: boolean;
        };
    };
    '----Hazards----': {
        type: string;
    };
    Trap: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Always: boolean;
        };
    };
    PotentialTrap: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    '----Conveyors----': {
        type: string;
    };
    ConveyorUp: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    ConveyorDown: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    ConveyorLeft: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    ConveyorRight: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    ConveyorUpOn: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorDownOn: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorLeftOn: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorRightOn: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorUpOff: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorDownOff: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorLeftOff: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorRightOff: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorUpSwitch: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorDownSwitch: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorLeftSwitch: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorRightSwitch: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    '----Machines----': {
        type: string;
    };
    DollSupply: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    DollSupplyManual: {
        type: string;
        tile: string;
        special: {
            Type: string;
            count: number;
            wireType: string;
            rate: number;
        };
    };
    DollTerminal: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    BondageMachineLatex: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    BondageMachinePlug: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    BondageMachineChastity: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    BondageMachineTape: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    BondageMachineMetal: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    DollDropoffU: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            Overlay: string;
            direction: {
                x: number;
                y: number;
            };
        };
    };
    DollDropoffD: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            Overlay: string;
            direction: {
                x: number;
                y: number;
            };
        };
    };
    DollDropoffR: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            Overlay: string;
            direction: {
                x: number;
                y: number;
            };
        };
    };
    DollDropoffL: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            Overlay: string;
            direction: {
                x: number;
                y: number;
            };
        };
    };
    '----Signals----': {
        type: string;
    };
    Button: {
        type: string;
        tile: string;
    };
    Wire: {
        type: string;
        effectTile: string;
    };
    PressurePlate: {
        type: string;
        effectTile: string;
    };
    PressurePlateHold: {
        type: string;
        effectTile: string;
    };
    PressurePlateOneUse: {
        type: string;
        effectTile: string;
    };
    ManaPlate: {
        type: string;
        effectTile: string;
    };
    '----Lighting----': {
        type: string;
    };
    Torch: {
        type: string;
        effectTile: string;
    };
    PotentialTorch: {
        type: string;
        effectTile: string;
    };
    PriorityCharger: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
        };
    };
    Charger: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    UnlockedCharger: {
        type: string;
        tile: string;
        special: {
            Type: string;
            NoRemove: boolean;
        };
    };
    MotionLamp: {
        type: string;
        effectTile: string;
    };
    '----Misc----': {
        type: string;
    };
    POI: {
        type: string;
    };
    OffLimits: {
        type: string;
    };
    Jail: {
        type: string;
    };
    Keyring: {
        type: string;
    };
    MazeSeed: {
        type: string;
        customfields: {
            newest: {
                type: string;
            };
            oldest: {
                type: string;
            };
            scale: {
                type: string;
            };
            branchchance: {
                type: string;
            };
            hbias: {
                type: string;
            };
            vbias: {
                type: string;
            };
            wobble: {
                type: string;
            };
            pillarToDoodad: {
                type: string;
            };
        };
    };
    MazeBlock: {
        type: string;
    };
};
declare let KDTE_State: string;
declare let KDEditorTileBrushIndexVisual: number;
declare let KDEditorTileBrushIndex2Visual: number;
declare let KDEditorTileNameIndexVisual: number;
declare let customfieldsElements: any[];
declare let KDTE_lastMouse: number;
declare let KDTEHoldDelay: number;
declare let KDTEmode: number;
declare let KDTE_Scale: number;
declare let KDTE_MAXDIM: number;
declare let KDTELoadConfirm: boolean;
declare namespace KDTE_Brush {
    function clear(brush: any, curr: any, noSwap: any): void;
    function tile(brush: any, curr: any, noSwap: any): void;
    function offlimits(brush: any, curr: any, noSwap: any): void;
    function MazeBlock(brush: any, curr: any, noSwap: any): void;
    function MazeSeed(brush: any, curr: any, noSwap: any): void;
    function jail(brush: any, curr: any, noSwap: any): void;
    function Keyring(brush: any, curr: any, noSwap: any): void;
    function effect(brush: any, curr: any, noSwap: any): void;
    function POI(brush: any, curr: any, noSwap: any): void;
}
declare let KDTE_Inaccessible: boolean;
declare let KDTE_confirmreset: boolean;
declare let KDTE_confirmcommit: boolean;
/**
 *
 * @param {number} w
 * @param {number} h
 * @param {Record<string, string>} indices
 * @param {any} data
 * @param {Record<string, boolean>} requiredAccess
 * @param {Record<string, number>} maxTagFlags
 * @returns {Record<string, KDMapTile>}
 */
declare function KDMapTilesPopulate(w: number, h: number, indices: Record<string, string>, data: any, requiredAccess: Record<string, boolean>, maxTagFlags: Record<string, number>, tagModifiers: any): Record<string, KDMapTile>;
/**
 *
 * @param {KDMapTile} mapTile - Tile to be evaluated for weight
 * @param {Record<string, boolean>} tags - Tags of the INCOMING tile, not the current one
 * @param {Record<string, number>} tagCounts - Counts of all tags on the map at present
 * @param {Record<string, number>} tagModifiers - Tags of the incoming tile will get a multiplier if the incoming tile has it
 * @returns {number}
 */
declare function KDGetTileWeight(mapTile: KDMapTile, tags: Record<string, boolean>, tagCounts: Record<string, number>, tagModifiers: Record<string, number>): number;
/**
 *
 * @param {string} index
 * @param {number} indX
 * @param {number} indY
 * @param {Record<string, KDMapTile>} tilesFilled
 * @param {Record<string, string>} indexFilled
 * @param {Record<string, boolean>} requiredAccess
 * @param {Record<string, boolean>} globalTags
 * @param {Record<string, string>} indices
 * @param {Record<string, number>} tagModifiers
 * @returns {string}
 */
declare function KD_GetMapTile(index: string, indX: number, indY: number, tilesFilled: Record<string, KDMapTile>, indexFilled: Record<string, string>, tagCounts: any, requiredAccess: Record<string, boolean>, globalTags: Record<string, boolean>, indices: Record<string, string>, tagModifiers: Record<string, number>): string;
/**
 *
 * @param {KDMapTile} mapTile
 * @param {number} indX
 * @param {number} indY
 * @param {Record<string, string>} indices
 * @param {Record<string, boolean>} requiredAccess
 * @param {Record<string, string>} indexFilled
 * @returns {boolean}
 */
declare function KDCheckMapTileFilling(mapTile: KDMapTile, indX: number, indY: number, indices: Record<string, string>, requiredAccess: Record<string, boolean>, indexFilled: Record<string, string>): boolean;
/** Suspends the inside of large tiles */
declare function KDLooseIndexRankingSuspend(indexCheck: any, indexTile: any, w: any, h: any, xx: any, yy: any): boolean;
/**
 *
 * @param {KDMapTile} mapTile
 * @param {number} indX
 * @param {number} indY
 * @param {Record<string, string>} indexFilled
 * @param {Record<string, boolean>} requiredAccess
 * @returns {boolean}
 */
declare function KDCheckMapTileAccess(mapTile: KDMapTile, indX: number, indY: number, indexFilled: Record<string, string>, requiredAccess: Record<string, boolean>): boolean;
/**
 *
 * @param {KDMapTile} tile
 * @param {number} x
 * @param {number} y
 * @param {any} y
 * @returns {string[]}
 */
declare function KD_PasteTile(tile: KDMapTile, x: number, y: number, data: any): string[];
/**
 *
 * @param {number} startX
 * @param {number} startY
 * @param {any} tile
 * @param {any} seed
 * @param {{x: number, y: number}[]} MazeBlock
 * @returns {{x: number, y: number}[]}
 */
declare function KDGenMaze(startX: number, startY: number, tile: any, seed: any, MazeBlock: {
    x: number;
    y: number;
}[]): {
    x: number;
    y: number;
}[];
/**
 * Creates a map tile based on a generator tile
 * @param {number} x
 * @param {number} y
 * @param {any} tileGenerator
 * @param {any} data
 * @returns {any}
 */
declare function KDCreateTile(x: number, y: number, tileGenerator: any, data: any): any;
/**
 * Creates a map tile based on a generator tile
 * @param {number} x
 * @param {number} y
 * @param {any} tileGenerator
 * @param {any} data
 * @returns {any}
 */
declare function KDCreateEffectTileTile(x: number, y: number, tileGenerator: any, data: any): any;
/**
 * Aggregates tags from nearby tiles for the specific tile
 * @param {number} x - Top left corner
 * @param {number} y - Top left corner
 * @param {number} w - Tile size
 * @param {number} h - Tile size
 * @param {Record<string, KDMapTile>} tilesFilled
 * @param {Record<string, boolean>} globalTags
 * @return {Record<string, boolean>}
 */
declare function KDAggregateTileTags(x: number, y: number, w: number, h: number, tilesFilled: Record<string, KDMapTile>, globalTags: Record<string, boolean>): Record<string, boolean>;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {{category: string, tags: string[]}}
 */
declare function KDGetCategoryIndex(x: number, y: number): {
    category: string;
    tags: string[];
};
/** If a tile's weight is higher than this, then any time without this much weight will get culled from the list */
declare let KD_GENWEIGHTCUTOFF: number;
declare namespace KDEffectTileGen {
    function TorchUnlit(x: any, y: any, tile: any, tileGenerator: any, data: any): any;
    function Torch(x: any, y: any, tile: any, tileGenerator: any, data: any): any;
    function Wire(x: any, y: any, tile: any, tileGenerator: any, data: any): any;
}
/**
 * @type {Record<string, (x: number, y: number, tile: any, tileGenerator: any, data: {params: floorParams; chestlist: any[]; traps: any[]; shrinelist: any[]; chargerlist: any[]; spawnpoints: any[]}) => any>}
 */
declare let KDTileGen: Record<string, (x: number, y: number, tile: any, tileGenerator: any, data: {
    params: floorParams;
    chestlist: any[];
    traps: any[];
    shrinelist: any[];
    chargerlist: any[];
    spawnpoints: any[];
}) => any>;
/**
 * Sets up the KD crash handler
 */
declare function KinkyDungeonSetupCrashHandler(): void;
/**
 * Tears down the KD crash handler
 */
declare function KinkyDungeonTeardownCrashHandler(): void;
/**
 * Error event handler for uncaught errors
 * @param {ErrorEvent} event - The error event
 */
declare function KinkyDungeonOnUncaughtError(event: ErrorEvent): void;
/**
 * Generates an error report string containing crash debug data
 * @param {ErrorEvent} event - The error event
 * @returns {string} - The report
 */
declare function KinkyDungeonGenerateErrorReport(event: ErrorEvent): string;
/**
 * Generates a report string containing debug data about the current state of the game
 * @returns {string} - The report
 */
declare function KinkyDungeonCrashReportStateData(): string;
/**
 * Generates an error report string containing debug data about the thrown error
 * @param {ErrorEvent} event - The error event
 * @returns {string} - The report
 */
declare function KinkyDungeonCrashReportErrorDetails(event: ErrorEvent): string;
/**
 * Generates a report string containing the current save state of the game
 * @returns {string} - The report
 */
declare function KinkyDungeonCrashReportSaveData(): string;
/**
 * Generates a report string containing debug data with general diagnostics information
 * @returns {string} - The report
 */
declare function KinkyDungeonCrashReportDiagnostics(): string;
/**
 * Generates a report string containing debug data with device detection information
 * @returns {string} - The report
 */
declare function KinkyDungeonCrashReportDeviceDetails(): string;
/**
 * Sanitizes a string to remove beta codes from it
 * @returns {string} - The sanitized string
 */
declare function KinkyDungeonStackSanitize(stack: any): string;
/**
 * Opens the KD crash report modal, displaying the provided report
 * @param {string} report - The report to display
 */
declare function KinkyDungeonShowCrashReportModal(report: string): void;
declare function KinkyDungeonErrorImage(src: any): HTMLImageElement;
declare function KinkyDungeonErrorPreamble(content: any): HTMLParagraphElement;
declare function KinkyDungeonErrorModalButton(text: any): HTMLButtonElement;
declare function KinkyDungeonErrorCopy(report: any, reportElement: any): Promise<boolean>;
declare function KDSetDefaultKeybindings(): void;
declare function KinkyDungeonLeashingEnemy(): any;
/**
 *
 * @returns {entity}
 */
declare function KinkyDungeonJailGuard(): entity;
declare function KinkyDungeonAngel(): any;
declare function KDUnlockPerk(Perk: any): void;
declare function KDLoadPerks(): void;
/**
 *
 * @param {any[]} list
 * @return {Record<any, any>}
 */
declare function KDMapInit(list: any[]): Record<any, any>;
declare function KDistEuclidean(x: any, y: any): number;
declare function KDistChebyshev(x: any, y: any): number;
declare function KDistTaxicab(x: any, y: any): number;
declare function KDLoadToggles(): void;
declare function KDSaveToggles(): void;
/**
 * Loads the kinky dungeon game
 * @returns {void} - Nothing
 */
declare function KinkyDungeonLoad(): void;
/**
 * Restricts Devious Dungeon Challenge to only occur when inside the arcade
 * @returns {boolean} - If the player is in the arcade
 */
declare function KinkyDungeonDeviousDungeonAvailable(): boolean;
/**
 * Returns whether or not the player is the one playing, which determines whether or not to draw the UI and struggle groups
 * @returns {boolean} - If the player is the game player
 */
declare function KinkyDungeonIsPlayer(): boolean;
declare function sleep(msec: any): Promise<any>;
declare function KDOpenFullscreen(): void;
declare function KDCloseFullscreen(): void;
declare function KinkyDungeonRun(): void;
declare function KDCullSprites(): void;
declare function KDCullSpritesList(list: any): void;
/**
 * Draws a button component
 * @param {string} name - Name of the button element
 * @param {boolean} enabled - Whether or not you can click on it
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Label - Text to display in the button
 * @param {string} Color - Color of the component
 * @param {string} [Image] - URL of the image to draw inside the button, if applicable
 * @param {string} [HoveringText] - Text of the tooltip, if applicable
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {boolean} [NoBorder] - Disables the border and stuff
 * @returns {void} - Nothing
 */
declare function DrawButtonKD(name: string, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, HoveringText?: string, Disabled?: boolean, NoBorder?: boolean): void;
/**
 * Draws a button component
 * @param {string} name - Name of the button element
 * @param {(bdata: any) => boolean} func - Whether or not you can click on it
 * @param {boolean} enabled - Whether or not you can click on it
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Label - Text to display in the button
 * @param {string} Color - Color of the component
 * @param {string} [Image] - URL of the image to draw inside the button, if applicable
 * @param {string} [HoveringText] - Text of the tooltip, if applicable
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {boolean} [NoBorder] - Disables border
 * @param {string} [FillColor] - BG color
 * @param {number} [FontSize] - Font size
 * @param {boolean} [ShiftText] - Shift text to make room for the button
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha] - Dont show text backgrounds
 * @param {number} [options.zIndex] - zIndex
 * @param {boolean} [options.scaleImage] - zIndex
 * @param {boolean} [options.centered] - centered
 * @param {boolean} [options.centerText] - centered
 * @param {string} [options.tint] - tint
 * @param {string} [options.hotkey] - hotkey
 * @param {string} [options.hotkeyPress] - hotkey
 * @returns {boolean} - Whether or not the mouse is in the button
 */
declare function DrawButtonKDEx(name: string, func: (bdata: any) => boolean, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
    scaleImage?: boolean;
    centered?: boolean;
    centerText?: boolean;
    tint?: string;
    hotkey?: string;
    hotkeyPress?: string;
}): boolean;
/**
 * Draws a button component
 * @param {string} name - Name of the button element
 * @param {(bdata: any) => boolean} func - Whether or not you can click on it
 * @param {boolean} enabled - Whether or not you can click on it
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Label - Text to display in the button
 * @param {string} Color - Color of the component
 * @param {string} [Image] - URL of the image to draw inside the button, if applicable
 * @param {string} [HoveringText] - Text of the tooltip, if applicable
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {boolean} [NoBorder] - Disables border
 * @param {string} [FillColor] - BG color
 * @param {number} [FontSize] - Font size
 * @param {boolean} [ShiftText] - Shift text to make room for the button
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha] - Dont show text backgrounds
 * @param {number} [options.zIndex] - zIndex
 * @param {boolean} [options.scaleImage] - zIndex
 * @param {boolean} [options.centered] - centered
 * @param {boolean} [options.centerText] - centered
 * @param {string} [options.tint] - tint
 * @param {string} [options.hotkey] - hotkey
 * @param {string} [options.hotkeyPress] - hotkey
 * @returns {boolean} - Whether or not the mouse is in the button
 */
declare function DrawButtonKDExScroll(name: string, scrollfunc: any, func: (bdata: any) => boolean, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
    scaleImage?: boolean;
    centered?: boolean;
    centerText?: boolean;
    tint?: string;
    hotkey?: string;
    hotkeyPress?: string;
}): boolean;
/**
 * Draws a button component
 * @param {any} Container - Container to draw to
 * @param {string} name - Name of the button element
 * @param {(bdata: any) => boolean} func - Whether or not you can click on it
 * @param {boolean} enabled - Whether or not you can click on it
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Label - Text to display in the button
 * @param {string} Color - Color of the component
 * @param {string} [Image] - URL of the image to draw inside the button, if applicable
 * @param {string} [HoveringText] - Text of the tooltip, if applicable
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {boolean} [NoBorder] - Disables border
 * @param {string} [FillColor] - BG color
 * @param {number} [FontSize] - Font size
 * @param {boolean} [ShiftText] - Shift text to make room for the button
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha] - Dont show text backgrounds
 * @param {number} [options.zIndex] - zIndex
 * @param {string} [options.hotkey] - hotkey
 * @param {string} [options.hotkeyPress] - hotkey
 * @param {boolean} [options.unique] - This button is unique, so X and Y are not differentiators
 * @returns {boolean} - Whether or not the mouse is in the button
 */
declare function DrawButtonKDExTo(Container: any, name: string, func: (bdata: any) => boolean, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
    hotkey?: string;
    hotkeyPress?: string;
    unique?: boolean;
}): boolean;
declare function KDMouseWheel(event: any): void;
declare function KDFunctionOptionsScroll(amount: any): boolean;
declare function KDFunctionPerksScroll(amount: any): boolean;
declare function KDFunctionQuestScroll(amount: any): boolean;
declare function KDFunctionCollectionScroll(amount: any): boolean;
declare function KDFunctionSpellPageScroll(amount: any): boolean;
declare function KDFunctionMagicPageScroll(amount: any): boolean;
declare function KDFunctionMagicSpellPageScroll(amount: any): boolean;
declare function KDFunctionInventoryScroll(amount: any): boolean;
declare function KDFunctionMsgScroll(amount: any): boolean;
declare function KDFunctionRestraintIndexScroll(amount: any): boolean;
declare function KDFunctionDialogueScroll(amount: any): boolean;
declare function KDFunctionShopScroll(amount: any): boolean;
/**
 *
 * @param {number} amount
 * @param {number} padV
 * @returns {boolean}
 */
declare function KDProcessButtonScroll(amount: number, padV?: number): boolean;
declare function KDProcessButtons(): boolean;
/**
 * Buttons are clickable one frame later, please factor this in to UI design (especially when enforcing validation)
 * @param {string} name
 * @returns {boolean}
 */
declare function KDClickButton(name: string): boolean;
declare function MouseInKD(name: any, padX?: number, padV?: number): boolean;
declare function KinkyDungeonGetTraitsCount(): number;
declare function KDSendTrait(trait: any): void;
declare function KDSendSpell(spell: any): void;
declare function KDSendSpellCast(spell: any): void;
declare function KDSendWeapon(weapon: any): void;
declare function KDSendStatus(type: any, data: any, data2: any): void;
declare function KDSendEvent(type: any): void;
declare function KinkyDungeonLoadStats(): void;
declare function KDInitializeJourney(Journey: any, Level: any): void;
declare function KDCommitKeybindings(): void;
declare function KinkyDungeonStartNewGame(Load: any): void;
declare function KDUpdatePlugSettings(evalHardMode: any): void;
/** Deprecated */
declare function KDUpdateHardMode(): void;
declare function KinkyDungeonHandleClick(): boolean;
/**
 * Handles clicks during the kinky dungeon game
 * @returns {void} - Nothing
 */
declare function KinkyDungeonClick(): void;
declare function KDClick(): void;
/**
 * Handles exit during the kinky dungeon game
 * @returns {void} - Nothing
 */
declare function KinkyDungeonExit(): void;
/**
 * Handles key presses during the mini game. (Both keyboard and mobile)
 * @returns {void} - Nothing
 */
declare function KinkyDungeonKeyDown(): void;
/**
 * Outputs a savegame
 * @returns {KinkyDungeonSave} - Saved game object
 */
declare function KinkyDungeonGenerateSaveData(): KinkyDungeonSave;
declare function KinkyDungeonSaveGame(ToString: any): string;
declare function KinkyDungeonCompressSave(save: any): string;
declare function KinkyDungeonLoadGame(String: any): boolean;
/**
 *
 * @param {boolean} Native Decides whether or not to use native KDRandom to randomize
 */
declare function KDrandomizeSeed(Native: boolean): void;
declare function KDsetSeed(string: any): void;
/**
 * It takes a string and returns a function that returns a random number
 * @param str - The string to hash.
 * @returns A function that returns a random number.
 */
declare function xmur3(str: any): () => number;
/**
 * It takes four 32-bit integers and returns a function that returns a random number between 0 and 1
 * @param a - The first parameter.
 * @param b - 0x9e3779b9
 * @param c - 0x9e3779b9
 * @param d - The seed.
 * @returns A function that returns a random number between 0 and 1.
 */
declare function sfc32(a: any, b: any, c: any, d: any): () => number;
/**
 *
 * @param {string} Path
 * @param {number} [volume]
 */
declare function AudioPlayInstantSoundKD(Path: string, volume?: number): boolean;
/**
 * From https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0
 */
declare function hashCode(s: any): number;
declare function TextGetKD(Text: any): any;
declare function KinkyDungeonCheckPlayerRefresh(): void;
declare function CJKcheck(text: any, p?: number, o?: string): any;
/**
 * @param {string} id
 * @returns {HTMLCanvasElement}
 */
declare function KinkyDungeonGetCanvas(id: string): HTMLCanvasElement;
declare function KDDrawGameSetupTabs(xOffset: any): void;
/**
 *
 * @param {string} str
 * @returns {string}
 */
declare function DecompressB64(str: string): string;
declare function KDDrawToggleTabs(xOffset: any): void;
declare let KDFullscreen: boolean;
declare let KDExitButton: boolean;
declare let KDDefaultPalette: string;
declare namespace KDStandardRenderException {
    const Consent: any[];
    const Logo: any[];
    const Game: string[];
    const Stats: any[];
    const TileEditor: any[];
    const Wardrobe: any[];
}
declare let KDClipboardDisabled: boolean;
declare let CanvasWidth: number;
declare let CanvasHeight: number;
declare let KDStartTime: number;
declare let KDEasterEgg: boolean;
/** These languages have characters which are rendered bigger than English. */
declare let KDBigLanguages: string[];
declare let KDBigLanguages2: string[];
/** Language List */
declare let KDLanguages: string[];
declare let KinkyDungeonPlayerNeedsRefresh: boolean;
declare let KinkyDungeonNextRefreshCheck: number;
declare const pp: URLSearchParams;
declare let param_branch: string;
declare let param_test: string;
declare let param_localhost: string;
declare let TestMode: string | boolean;
declare let KDDebugMode: boolean;
declare let KDDebug: boolean;
declare let KDDebugPerks: boolean;
declare let KDDebugGold: boolean;
declare let KDDebugLink: boolean;
declare let KDAllModFiles: any[];
declare let KDModFiles: {};
declare let KinkyDungeonPerksConfig: string;
declare let KinkyDungeonSpellsConfig: string;
declare let KDUnlockedPerks: any[];
declare let KinkyDungeonBackground: string;
/**
 * @type {Character}
 */
declare let KinkyDungeonPlayer: Character;
declare let KDSpeakerNPC: any;
declare let KinkyDungeonState: string;
declare let KDIntroProgress: number[];
declare let KDIntroStage: number;
declare let KinkyDungeonRep: number;
declare let KinkyDungeonKeybindings: any;
declare let KinkyDungeonKeybindingsTemp: any;
declare let KinkyDungeonKeybindingCurrentKey: string;
declare let KinkyDungeonKeybindingCurrentKeyRelease: string;
declare let KinkyDungeonNewGame: number;
declare let KinkyDungeonGameRunning: boolean;
declare let KDLose: boolean;
declare let KDLoadingFinished: boolean;
declare let KDLoadingDone: number;
declare let KDLoadingMax: number;
declare let KinkyDungeonKey: string[];
declare let KinkyDungeonKeySpell: string[];
declare let KinkyDungeonKeySpellConfig: string[];
declare let KinkyDungeonKeyWait: string[];
declare let KinkyDungeonKeySkip: string[];
declare let KinkyDungeonKeyEnter: string[];
declare let KinkyDungeonKeySprint: string[];
declare let KinkyDungeonKeyWeapon: string[];
declare let KinkyDungeonKeyUpcast: string[];
declare let KinkyDungeonKeyMenu: string[];
declare let KinkyDungeonKeyToggle: string[];
declare let KinkyDungeonKeySpellPage: string[];
declare let KinkyDungeonKeySwitchWeapon: string[];
declare let KinkyDungeonKeySwitchLoadout: string[];
declare let KinkyDungeonKeyMap: string[];
declare let KDLoadingTextKeys: {};
declare let kdSpecialModePerks: string[];
declare let KinkyDungeonGraphicsQuality: boolean;
declare let KDToggleGroups: string[];
declare namespace KDToggles {
    const HiResModel: boolean;
    const Fullscreen: boolean;
    const SkipIntro: boolean;
    const SkipTutorial: boolean;
    const VibeSounds: boolean;
    const Music: boolean;
    const Sound: boolean;
    const HighResDisplacement: boolean;
    const Bloom: boolean;
    const StunFlash: boolean;
    const AsyncRendering: boolean;
    const ParticlesFX: boolean;
    const ArousalHearts: boolean;
    const VibeHearts: boolean;
    const FancyWalls: boolean;
    const FancyShadows: boolean;
    const LightmapFilter: boolean;
    const EnemyAnimations: boolean;
    const DrawArmor: boolean;
    const CrotchRopeOption: boolean;
    const ChastityOption: boolean;
    const ChastityOption2: boolean;
    const ChastityBraOption: boolean;
    const SimpleColorPicker: boolean;
    const TransparentUI: boolean;
    const Center: boolean;
    const TurnCounter: boolean;
    const ShowNPCStatuses: boolean;
    const ShowSpellRange: boolean;
    const ForceWarnings: boolean;
    const EnableMinimap: boolean;
    const BuffSide: boolean;
    const ShowPath: boolean;
    const ShowFacing: boolean;
    const ShowSameCatSpells: boolean;
    const PlayerAura: boolean;
    const EnemyAura: boolean;
    const OutlineAura: boolean;
    const GreyscaleBlindness: boolean;
    const NearestNeighbor: boolean;
    const ZoomIn: boolean;
    const ZoomOut: boolean;
    const LazyWalk: boolean;
    const ShiftLatch: boolean;
    const Nipples: boolean;
    const NippleToysOption: boolean;
    const NippleToysHide: boolean;
    const NipplePiercingsHide: boolean;
    const FlipStatusBars: boolean;
    const ForcePalette: boolean;
    const AutoLoadMods: boolean;
    const FlipPlayer: boolean;
}
declare namespace KDToggleCategories {
    const HiResModel_1: string;
    export { HiResModel_1 as HiResModel };
    const HighResDisplacement_1: string;
    export { HighResDisplacement_1 as HighResDisplacement };
    const Bloom_1: string;
    export { Bloom_1 as Bloom };
    const StunFlash_1: string;
    export { StunFlash_1 as StunFlash };
    const AsyncRendering_1: string;
    export { AsyncRendering_1 as AsyncRendering };
    const ParticlesFX_1: string;
    export { ParticlesFX_1 as ParticlesFX };
    const ArousalHearts_1: string;
    export { ArousalHearts_1 as ArousalHearts };
    const VibeHearts_1: string;
    export { VibeHearts_1 as VibeHearts };
    const FancyWalls_1: string;
    export { FancyWalls_1 as FancyWalls };
    const FancyShadows_1: string;
    export { FancyShadows_1 as FancyShadows };
    const LightmapFilter_1: string;
    export { LightmapFilter_1 as LightmapFilter };
    const EnemyAnimations_1: string;
    export { EnemyAnimations_1 as EnemyAnimations };
    const DrawArmor_1: string;
    export { DrawArmor_1 as DrawArmor };
    const CrotchRopeOption_1: string;
    export { CrotchRopeOption_1 as CrotchRopeOption };
    const ChastityOption_1: string;
    export { ChastityOption_1 as ChastityOption };
    const ChastityOption2_1: string;
    export { ChastityOption2_1 as ChastityOption2 };
    const ChastityBraOption_1: string;
    export { ChastityBraOption_1 as ChastityBraOption };
    const SimpleColorPicker_1: string;
    export { SimpleColorPicker_1 as SimpleColorPicker };
    const Nipples_1: string;
    export { Nipples_1 as Nipples };
    const NippleToysOption_1: string;
    export { NippleToysOption_1 as NippleToysOption };
    const NippleToysHide_1: string;
    export { NippleToysHide_1 as NippleToysHide };
    const NipplePiercingsHide_1: string;
    export { NipplePiercingsHide_1 as NipplePiercingsHide };
    const TransparentUI_1: string;
    export { TransparentUI_1 as TransparentUI };
    const Center_1: string;
    export { Center_1 as Center };
    const TurnCounter_1: string;
    export { TurnCounter_1 as TurnCounter };
    const ShowNPCStatuses_1: string;
    export { ShowNPCStatuses_1 as ShowNPCStatuses };
    const ShowSpellRange_1: string;
    export { ShowSpellRange_1 as ShowSpellRange };
    const ForceWarnings_1: string;
    export { ForceWarnings_1 as ForceWarnings };
    const EnableMinimap_1: string;
    export { EnableMinimap_1 as EnableMinimap };
    const BuffSide_1: string;
    export { BuffSide_1 as BuffSide };
    const ShowPath_1: string;
    export { ShowPath_1 as ShowPath };
    const ShowFacing_1: string;
    export { ShowFacing_1 as ShowFacing };
    const ShowSameCatSpells_1: string;
    export { ShowSameCatSpells_1 as ShowSameCatSpells };
    const PlayerAura_1: string;
    export { PlayerAura_1 as PlayerAura };
    const EnemyAura_1: string;
    export { EnemyAura_1 as EnemyAura };
    const OutlineAura_1: string;
    export { OutlineAura_1 as OutlineAura };
    const NearestNeighbor_1: string;
    export { NearestNeighbor_1 as NearestNeighbor };
    const ZoomIn_1: string;
    export { ZoomIn_1 as ZoomIn };
    const ZoomOut_1: string;
    export { ZoomOut_1 as ZoomOut };
    const FlipStatusBars_1: string;
    export { FlipStatusBars_1 as FlipStatusBars };
    const ForcePalette_1: string;
    export { ForcePalette_1 as ForcePalette };
    const FlipPlayer_1: string;
    export { FlipPlayer_1 as FlipPlayer };
    const GreyscaleBlindness_1: string;
    export { GreyscaleBlindness_1 as GreyscaleBlindness };
}
declare namespace KDDefaultKB {
    const Down: string;
    const DownLeft: string;
    const DownRight: string;
    const Left: string;
    const Right: string;
    const Up: string;
    const UpLeft: string;
    const UpRight: string;
    const Spell1: string;
    const Spell2: string;
    const Spell3: string;
    const Spell4: string;
    const Spell5: string;
    const Spell6: string;
    const Spell7: string;
    const Spell8: string;
    const Spell9: string;
    const Spell0: string;
    const SpellWeapon: string;
    const SpellConfig1: string;
    const SpellConfig2: string;
    const SpellConfig3: string;
    const Upcast: string;
    const UpcastCancel: string;
    const Wait: string;
    const Skip: string;
    const Enter: string;
    const Map: string;
    const SwitchLoadout1: string;
    const SwitchLoadout2: string;
    const SwitchLoadout3: string;
    const SpellPage: string;
    const SwitchWeapon: string;
    const SwitchWeaponOffhand: string;
    const SwitchWeaponOffhandPrevious: string;
    const SwitchWeaponOffhandPrevious2: string;
    const Sprint: string;
    const QInventory: string;
    const Inventory: string;
    const Reputation: string;
    const Magic: string;
    const Log: string;
    const Quest: string;
    const Collection: string;
    const MsgLog: string;
    const Pass: string;
    const Door: string;
    const AStruggle: string;
    const APathfind: string;
    const AInspect: string;
    const WaitInterrupt: string;
    const MakeNoise: string;
    const PlaySelf: string;
    const Crouch: string;
    const BulletTransparency: string;
}
declare let KinkyDungeonRootDirectory: string;
declare let KinkyDungeonPlayerCharacter: any;
declare let KinkyDungeonGameData: any;
declare let KinkyDungeonGameDataNullTimer: number;
declare let KinkyDungeonGameDataNullTimerTime: number;
declare let KinkyDungeonStreamingPlayers: any[];
declare let KinkyDungeonInitTime: number;
declare let KinkyDungeonSleepTime: number;
declare let KinkyDungeonFreezeTime: number;
declare let KinkyDungeonPlaySelfTime: number;
declare let KinkyDungeonOrgasmTime: number;
declare let KinkyDungeonAutoWait: boolean;
declare let KinkyDungeonAutoWaitStruggle: boolean;
declare let KinkyDungeonConfigAppearance: boolean;
declare const Consumable: "consumable";
declare const Restraint: "restraint";
declare const LooseRestraint: "looserestraint";
declare const Outfit: "outfit";
declare const Accessory: "accessory";
declare const Weapon: "weapon";
declare const Misc: "misc";
declare const Armor: "armor";
declare let KinkyDungeonStatsChoice: Map<any, any>;
declare let KDJourney: string;
declare let KDOptOut: boolean;
declare let KDDefaultMaxParty: number;
declare let KDDefaultJourney: string[];
declare let KDDefaultAlt: string[];
/**
 * ,
 *
 * }} KDGameDataBase
 */
type KDGameDataBase = {
    JourneyProgression: string[];
    AttachedWep: string;
    InventoryAction: string;
    InventoryActionManaCost: number;
    SellMarkup: number;
    CurseLevel: number;
    UsingConsumable: string;
    BondageTarget: number;
    FoodTarget: number;
    KeysNeeded: boolean;
    JailRemoveRestraintsTimer: number;
    KinkyDungeonSpawnJailers: number;
    KinkyDungeonSpawnJailersMax: number;
    KinkyDungeonLeashedPlayer: number;
    KinkyDungeonLeashingEnemy: number;
    JailGuard: number;
    GuardTimer: number;
    GuardTimerMax: number;
    GuardSpawnTimer: number;
    GuardSpawnTimerMax: number;
    GuardSpawnTimerMin: number;
    KinkyDungeonMaxPrisonReduction: number;
    KinkyDungeonPrisonReduction: number;
    KinkyDungeonPrisonExtraGhostRep: number;
    PrisonGoodBehaviorFromLeash: number;
    KinkyDungeonJailTourTimer: number;
    KinkyDungeonJailTourTimerMin: number;
    KinkyDungeonJailTourTimerMax: number;
    KinkyDungeonPenanceCostCurrent: number;
    KinkyDungeonAngel: number;
    KDPenanceStage: number;
    SpawnedPartyPrisoners: Record<string, number>;
    KDPenanceStageEnd: number;
    AngelCurrentRep: string;
    KDPenanceMode: string;
    OrgasmStage: number;
    OrgasmTurns: number;
    OrgasmStamina: number;
    SleepTurns: number;
    SlowMoveTurns: number;
    PlaySelfTurns: number;
    RescueFlag: boolean;
    KinkyDungeonPenance: boolean;
    GuardApplyTime: number;
    WarningLevel: number;
    AncientEnergyLevel: number;
    OrigEnergyLevel: number;
    LastMP: number;
    LastAP: number;
    LastSP: number;
    LastWP: number;
    Outfit: string;
    Champion: string;
    ChampionCurrent: number;
    LastMapSeed: string;
    AlreadyOpened: {
        x: number;
        y: number;
    }[];
    Journey: string;
    CheckpointIndices: number[];
    PrisonerState: string;
    TimesJailed: number;
    JailTurns: number;
    JailKey: boolean;
    CurrentDialog: string;
    CurrentDialogStage: string;
    OrgasmNextStageTimer: number;
    DistractionCooldown: number;
    ConfirmAttack: boolean;
    CurrentDialogMsg: string;
    CurrentDialogMsgSpeaker: string;
    CurrentDialogMsgPersonality: string;
    CurrentDialogMsgID: number;
    CurrentDialogMsgData: Record<string, string>;
    CurrentDialogMsgValue: Record<string, number>;
    AlertTimer: number;
    RespawnQueue: {
        enemy: string;
        faction: string;
    }[];
    HeartTaken: boolean;
    CurrentVibration: KinkyVibration;
    Edged: boolean;
    TimeSinceLastVibeStart: Record<string, number>;
    TimeSinceLastVibeEnd: Record<string, number>;
    OfferFatigue: number;
    Favors: Record<string, number>;
    RoomType: string;
    MapMod: string;
    HunterTimer: number;
    Hunters: number[];
    Quests: string[];
    QuestData: Record<string, any>;
    RevealedTiles: Record<string, number>;
    RevealedFog: Record<string, number>;
    PriorJailbreaks: number;
    PriorJailbreaksDecay: number;
    PreviousWeapon: string[];
    PreviousWeaponLock: boolean[];
    StaminaPause: number;
    StaminaSlow: number;
    ManaSlow: number;
    TempFlagFloorTicks: Record<string, number>;
    KneelTurns: number;
    AllowedSpellPages: Record<string, string[]>;
    KeyringLocations: {
        x: number;
        y: number;
    }[];
    HiddenItems: Record<string, boolean>;
    ItemPriority: Record<string, number>;
    CagedTime: number;
    DelayedActions: KDDelayedAction[];
    OfferCount: number;
    ItemID: number;
    Offhand: string;
    OffhandOld: string;
    OffhandReturn: string;
    ShopkeeperFee: number;
    DollCount: number;
    ChestsGenerated: string[];
    DollRoomCount: number;
    CollectedHearts: number;
    CollectedOrbs: number;
    otherPlaying: number;
    Training: Record<string, KDTrainingRecord>;
    QuickLoadout: KDPresetLoadout[];
    CurrentLoadout: number;
    HighestLevelCurrent: number;
    HighestLevel: number;
    KDChasingEnemies: entity[];
    ShopRewardProgram: number;
    ShopRewardProgramThreshold: number;
    tickAlertTimer: boolean;
    HostileFactions: string[];
    MovePoints: number;
    Wait: number;
    Class: string;
    Party: entity[];
    CapturedParty: entity[];
    PlayerName: string;
    QuickLoadout_Weapon: boolean;
    QuickLoadout_Merge: boolean;
    ItemsSold: Record<string, number>;
    MaxParty: number;
    Crouch: boolean;
    FocusControlToggle: Record<string, boolean>;
    FloorRobotType: Record<string, string>;
    EpicenterLevel: number;
    BlockTokens: number;
    DodgeTokens: number;
    ShieldTokens: number;
    BlockTokensMax: number;
    DodgeTokensMax: number;
    ShieldTokensMax: number;
    Shield: number;
    ShieldDamage: number;
    Balance: number;
    BalancePause: boolean;
    Collection: Record<string, KDCollectionEntry>;
    CollectionSorted: KDCollectionEntry[];
    HeelPower: number;
    visionAdjust: number;
    visionAdjustBlind: number;
    visionBlind: number;
    CollectionGuests: number;
    SelectedEscapeMethod: string;
    Restriction: number;
    JourneyX: number;
    JourneyY: number;
    ShortcutIndex: number;
    JourneyMap: KDJourneyMap;
    JourneyTarget: {
        x: number;
        y: number;
    };
    LastDragon: string;
    ElevatorsUnlocked: Record<number, boolean>;
    TeleportLocations: Record<string, {
        x: number;
        y: number;
        type: string;
        checkpoint: string;
        level: number;
    }>;
    QuickLoadouts: Record<string, string[]>;
};
declare namespace KDGameDataBase {
    export const ShortcutIndex: number;
    export const JourneyProgression: string[];
    export const JourneyTarget: any;
    export const JourneyX: number;
    export const JourneyY: number;
    export const JourneyMap: {};
    export const AttachedWep: string;
    const Collection_1: {};
    export { Collection_1 as Collection };
    export const CollectionSorted: any[];
    export const RevealedTiles: {};
    export const RevealedFog: {};
    export const Balance: number;
    export const BalancePause: boolean;
    export const HeelPower: number;
    export const SlowMoveTurns: number;
    export const Shield: number;
    export const ShieldDamage: number;
    export const PlayerName: string;
    export const Party: any[];
    export const CapturedParty: any[];
    export const BlockTokens: number;
    export const DodgeTokens: number;
    export const ShieldTokens: number;
    export const BlockTokensMax: number;
    export const DodgeTokensMax: number;
    export const ShieldTokensMax: number;
    export { KDDefaultMaxParty as MaxParty };
    export const QuickLoadout_Weapon: boolean;
    export const QuickLoadout_Merge: boolean;
    export const FocusControlToggle: {};
    export const TeleportLocations: {};
    export const ItemsSold: {};
    export const CurseLevel: number;
    export const UsingConsumable: string;
    export const MovePoints: number;
    export const InventoryAction: string;
    export const InventoryActionManaCost: number;
    export const SellMarkup: number;
    export const BondageTarget: number;
    export const FoodTarget: number;
    export const ShopRewardProgram: number;
    export const ShopRewardProgramThreshold: number;
    export const QuickLoadouts: {};
    export const CurrentLoadout: number;
    export const Training: {};
    export const SpawnedPartyPrisoners: {};
    export const CollectedOrbs: number;
    export const CollectedHearts: number;
    export const DollRoomCount: number;
    export const ChestsGenerated: any[];
    export const DollCount: number;
    export const ElevatorsUnlocked: {};
    export const CagedTime: number;
    export const HiddenItems: {};
    export const ItemPriority: {};
    export const KeyringLocations: any[];
    export const AllowedSpellPages: {};
    export const PriorJailbreaks: number;
    export const PriorJailbreaksDecay: number;
    export const KeysNeeded: boolean;
    export const RoomType: string;
    const MapMod_1: string;
    export { MapMod_1 as MapMod };
    export const Quests: any[];
    export const QuestData: {};
    export const HunterTimer: number;
    export const Hunters: any[];
    export const AlertTimer: number;
    export const OrgasmNextStageTimer: number;
    export const DistractionCooldown: number;
    export const JailRemoveRestraintsTimer: number;
    export const KinkyDungeonSpawnJailers: number;
    export const KinkyDungeonSpawnJailersMax: number;
    export const KinkyDungeonLeashedPlayer: number;
    export const KinkyDungeonLeashingEnemy: number;
    export const JailGuard: number;
    export const GuardTimer: number;
    export const GuardTimerMax: number;
    export const GuardSpawnTimer: number;
    export const GuardSpawnTimerMax: number;
    export const GuardSpawnTimerMin: number;
    export const KinkyDungeonMaxPrisonReduction: number;
    export const KinkyDungeonPrisonReduction: number;
    export const KinkyDungeonPrisonExtraGhostRep: number;
    export const PrisonGoodBehaviorFromLeash: number;
    export const KinkyDungeonJailTourTimer: number;
    export const KinkyDungeonJailTourTimerMin: number;
    export const KinkyDungeonJailTourTimerMax: number;
    export const KinkyDungeonPenanceCostCurrent: number;
    export const KinkyDungeonAngel: number;
    export const KDPenanceStage: number;
    export const KDPenanceStageEnd: number;
    export const AngelCurrentRep: string;
    export const KDPenanceMode: string;
    export const OrgasmStage: number;
    export const OrgasmTurns: number;
    export const OrgasmStamina: number;
    export const KinkyDungeonPenance: boolean;
    export const RescueFlag: boolean;
    export const SleepTurns: number;
    export const PlaySelfTurns: number;
    export const GuardApplyTime: number;
    export const AncientEnergyLevel: number;
    export const OrigEnergyLevel: number;
    export const LastAP: number;
    export const LastSP: number;
    export const LastMP: number;
    export const LastWP: number;
    export const Outfit: string;
    export const Champion: string;
    export const ChampionCurrent: number;
    export const WarningLevel: number;
    export const LastMapSeed: string;
    export const AlreadyOpened: any[];
    export const Journey: string;
    export const CheckpointIndices: number[];
    export const TempFlagFloorTicks: {};
    export const PrisonerState: string;
    export const TimesJailed: number;
    export const JailTurns: number;
    export const JailKey: boolean;
    export const CurrentDialog: string;
    export const CurrentDialogStage: string;
    export const CurrentDialogMsg: string;
    export const CurrentDialogMsgSpeaker: string;
    export const CurrentDialogMsgPersonality: string;
    export const CurrentDialogMsgData: {};
    export const CurrentDialogMsgValue: {};
    export const CurrentDialogMsgID: number;
    export const ConfirmAttack: boolean;
    export const RespawnQueue: any[];
    export const HeartTaken: boolean;
    export const CurrentVibration: any;
    export const Edged: boolean;
    export const TimeSinceLastVibeStart: {};
    export const TimeSinceLastVibeEnd: {};
    export const OfferFatigue: number;
    export const Offhand: string;
    export const OffhandOld: string;
    export const OffhandReturn: string;
    export const Favors: {};
    export const PreviousWeapon: string[];
    export const PreviousWeaponLock: boolean[];
    export const QuickLoadout: any[];
    export const StaminaPause: number;
    export const StaminaSlow: number;
    export const ManaSlow: number;
    export const KneelTurns: number;
    export const DelayedActions: any[];
    export const OfferCount: number;
    export const KDChasingEnemies: any[];
    export const ItemID: number;
    export const ShopkeeperFee: number;
    export const otherPlaying: number;
    export const CategoryIndex: {};
    export const HighestLevel: number;
    export const HighestLevelCurrent: number;
    export const tickAlertTimer: boolean;
    export const HostileFactions: any[];
    const Wait_1: number;
    export { Wait_1 as Wait };
    export const Class: string;
    export const EpicenterLevel: number;
    export const CollectionGuests: number;
    export const FloorRobotType: {};
    export const SelectedEscapeMethod: string;
    const Crouch_1: boolean;
    export { Crouch_1 as Crouch };
    export const visionAdjust: number;
    export const visionAdjustBlind: number;
    export const visionBlind: number;
    export const Restriction: number;
    export const LastDragon: string;
}
/**
 * @type {KDGameDataBase}
 */
declare let KDGameData: KDGameDataBase;
declare let KDLeashingEnemy: any;
declare let KDJailGuard: any;
declare let KDAngel: any;
declare let KDBGColor: string;
/**
 * Runs the kinky dungeon game and draws its components on screen
 * @returns {void} - Nothing
 */
declare let KinkyDungeonCreditsPos: number;
declare let KDMaxPatronPerPage: number;
declare let KDMaxPatron: number;
declare let KinkyDungeonPatronPos: number;
declare let KinkyDungeonFastWait: boolean;
declare let KinkyDungeonTempWait: boolean;
declare let KinkyDungeonSexyMode: boolean;
declare let KinkyDungeonClassMode: string;
declare let KinkyDungeonRandomMode: boolean;
declare let KinkyDungeonProgressionMode: string;
declare let KinkyDungeonItemMode: number;
declare let KinkyDungeonEasyMode: number;
declare let KinkyDungeonSaveMode: boolean;
declare let KinkyDungeonHardMode: boolean;
declare let KinkyDungeonExtremeMode: boolean;
declare let KinkyDungeonPerksMode: number;
declare let KinkyDungeonPerkProgressionMode: number;
declare let KinkyDungeonPerkBondageMode: number;
declare let KinkyDungeonPerkBondageVisMode: number;
declare let KinkyDungeonSexyPiercing: boolean;
declare let KinkyDungeonSexyPlug: boolean;
declare let KDOldValue: string;
declare let KDOriginalValue: string;
declare let KDRestart: boolean;
declare let fpscounter: number;
declare let lastfps: number;
declare let dispfps: number;
declare let KDMarkAsCache: any[];
declare let lastGlobalRefresh: number;
declare let GlobalRefreshInterval: number;
declare let KDGlobalRefresh: boolean;
declare let KDGlobalFilterCacheRefresh: boolean;
declare let KDLogoStartTime: number;
declare let KDLogoEndTime: number;
declare let KDLogoEndTime2: number;
declare let KDDrawDelta: number;
declare let kdTrackGameBoard: boolean;
declare let kdTrackGameFog: boolean;
declare let kdTrackGameParticles: boolean;
/**
 * @type {Record<string, {Left: number, Top: number, Width: number, Height: number, enabled: boolean, func?: (bdata: any) => boolean, priority: number, scrollfunc?: (amount: number) => boolean, hotkeyPress?: string}>}
 */
declare let KDButtonsCache: Record<string, {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    enabled: boolean;
    func?: (bdata: any) => boolean;
    priority: number;
    scrollfunc?: (amount: number) => boolean;
    hotkeyPress?: string;
}>;
/**
 * @type {Record<string, {Left: number, Top: number, Width: number, Height: number, enabled: boolean, func?: (bdata: any) => boolean, priority: number}>}
 */
declare let KDLastButtonsCache: Record<string, {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    enabled: boolean;
    func?: (bdata: any) => boolean;
    priority: number;
}>;
declare let KinkyDungeonGameFlag: boolean;
declare let afterLoaded: boolean;
/**
 * Dummy function. You can modify this function as part of your mod like so:
 * let _KDModsAfterLoad = KDModsAfterLoad;
 * KDModsAfterLoad = () => {
 * [Your stuff here]
 * _KDModsAfterLoad();
 * }
 * It is declared with `let` intentionally to allow the above, without suggesting a type error
 */
declare function KDModsAfterLoad(): void;
declare let KDHardModeThresh: number;
declare let KDAwaitingModLoad: boolean;
declare let mouseDown: boolean;
declare let MouseClicked: boolean;
/**
 * Game keyboard input handler object: Handles keyboard inputs.
 * @constant
 * @type {object} - The game keyboard input handler object. Contains the functions and properties required to handle key press events.
 */
declare let KinkyDungeonGameKey: object;
declare let KinkyDungeonSeed: string;
declare function KDRandom(): number;
/**
 * @type {Map<string, HTMLAudioElement>}
 */
declare let kdSoundCache: Map<string, HTMLAudioElement>;
declare let KDToggleTab: string;
declare namespace KDRender {
    function JourneyMap(): void;
}
/**
 *
 * @param {string} RoomType
 * @param {string} MapMod
 * @returns {KDMapDataType}
 */
declare function KDDefaultMapData(RoomType?: string, MapMod?: string): KDMapDataType;
/**
 *
 * @param {string} location
 * @param {Record<string, effectTile>} value
 */
declare function KinkyDungeonEffectTilesSet(location: string, value: Record<string, effectTile>): void;
/**
 *
 * @param {string} location
 * @returns {Record<string, effectTile>}
 */
declare function KinkyDungeonEffectTilesGet(location: string): Record<string, effectTile>;
/**
 *
 * @param {string} location
 * @param {any} value
 */
declare function KinkyDungeonTilesSet(location: string, value: any): any;
/**
 *
 * @param {string} location
 * @returns {any}
 */
declare function KinkyDungeonTilesGet(location: string): any;
/**
 *
 * @param {string} location
 */
declare function KinkyDungeonTilesDelete(location: string): void;
/**
 *
 * @param {string} location
 * @param {any} value
 */
declare function KinkyDungeonSkinSet(location: string, value: any): void;
/**
 *
 * @param {string} location
 * @returns {any}
 */
declare function KinkyDungeonSkinGet(location: string): any;
/**
 *
 * @param {string} location
 */
declare function KinkyDungeonSkinDelete(location: string): void;
declare function KDAlreadyOpened(x: any, y: any): boolean;
declare function KinkyDungeonPlaySound(src: any, entity: any, vol: any): void;
declare function KinkyDungeonSetCheckPoint(Checkpoint: any, AutoSave: any, suppressCheckPoint: any): void;
declare function KinkyDungeonNewGamePlus(): void;
declare function KDResetData(Data: any): void;
declare function KDResetEventData(Data: any): void;
declare function KinkyDungeonInitialize(Level: any, Load: any): void;
declare function KDInitCanvas(): void;
declare function KDCreateBoringness(noBoring: any): void;
/**
 * @returns {number}
 */
declare function KDGetMapSize(): number;
/**
 *
 * @param {{x: number, y: number}} point
 * @returns {KDWorldSlot}
 */
declare function KDGetWorldMapLocation(point: {
    x: number;
    y: number;
}): KDWorldSlot;
/**
 * Creates a new world location at the specific area
 * @param {number} x
 * @param {number} y
 * @param {string} main - The main maptype which you return to
 */
declare function KDCreateWorldLocation(x: number, y: number, main?: string): void;
/**
 *
 * @param {{x: number; y: number;}} slot
 * @param {boolean} saveconstantX
 */
declare function KDSaveRoom(slot: {
    x: number;
    y: number;
}, saveconstantX: boolean): void;
/**
 * Decompress enemies
 * @param {KDMapDataType} data
 */
declare function KDUnPackEnemies(data: KDMapDataType): void;
/**
 * Compress enemies to reduce file size
 * @param {KDMapDataType} data
 */
declare function KDPackEnemies(data: KDMapDataType): void;
/**
 * Loads a map from a world location
 * @param {number} x
 * @param {number} y
 * @param {string} room
 * @param {number} direction - 0 is default (start position), 1 is end, 2 is south shortcut, 3 is north shortcut
 * @param {boolean} constantX
 * @param {boolean} ignoreAware - Enemies will lock the door if this is true and they see you enter
 */
declare function KDLoadMapFromWorld(x: number, y: number, room: string, direction: number, constantX: boolean, ignoreAware?: boolean): boolean;
/**
 *
 * @param {number} direction
 * @param {number} sideRoomIndex
 */
declare function KDPlacePlayerBasedOnDirection(direction?: number, sideRoomIndex?: number): void;
declare function KDInitTempValues(seed: any): void;
/**
 *
 * @param {floorParams} MapParams
 * @param {string} RoomType
 * @param {string} MapMod
 * @param {number} Floor
 * @param {boolean} [testPlacement]
 * @param {boolean} [seed]
 * @param {string} [forceFaction]
 * @param {string} [forceEscape]
 * @param {{x: number, y: number}} [worldLocation]
 * @param {boolean} [useExisting]
 * @param {string} [origMapType]
 * @param {number} [direction]
 */
declare function KinkyDungeonCreateMap(MapParams: floorParams, RoomType: string, MapMod: string, Floor: number, testPlacement?: boolean, seed?: boolean, forceFaction?: string, worldLocation?: {
    x: number;
    y: number;
}, useExisting?: boolean, origMapType?: string, direction?: number, forceEscape?: string): void;
/**
 * Creates a list of all tiles accessible and not hidden by doors
 */
declare function KinkyDungeonGenNavMap(fromPoint: any): void;
/**
 * Create a web of low priority accessways
 */
declare function KDLowPriorityNavMesh(): void;
declare function KinkyDungeonGetAccessible(startX: any, startY: any, testX: any, testY: any): {};
declare function KinkyDungeonGetAccessibleRoom(startX: any, startY: any): string[];
declare function KinkyDungeonIsAccessible(testX: any, testY: any): boolean;
declare function KinkyDungeonIsReachable(testX: any, testY: any, testLockX: any, testLockY: any): boolean;
declare function KinkyDungeonGetAllies(): entity[];
/**
 *
 * @param {entity} e
 * @returns {boolean}
 */
declare function KDCanBringAlly(e: entity): boolean;
declare function KDChooseFactions(factionList: any, Floor: any, Tags: any, BonusTags: any, Set: any): string[];
declare function KinkyDungeonPlaceEnemies(spawnPoints: any, InJail: any, Tags: any, BonusTags: any, Floor: any, width: any, height: any, altRoom: any, randomFactions: any, factionEnemy: any): void;
declare function KinkyDungeonGetClosestSpecialAreaDist(x: any, y: any): number;
declare function KinkyDungeonCreateRectangle(Left: any, Top: any, Width: any, Height: any, Border: any, Fill: any, Padding: any, OffLimits: any, NoWander: any, flexCorner: any, Jail: any): void;
declare function KinkyDungeonPlaceStairs(startpos: any, width: any, height: any, noStairs: any, nostartstairs: any, origMapType: any): void;
declare function KinkyDungeonSkinArea(skin: any, X: any, Y: any, Radius: any, NoStairs: any): void;
declare function KinkyDungeonPlaceChests(params: any, chestlist: any, spawnPoints: any, shrinelist: any, treasurechance: any, treasurecount: any, rubblechance: any, Floor: any, width: any, height: any): void;
declare function KinkyDungeonPlaceLore(width: any, height: any): number;
declare function KinkyDungeonPlaceHeart(width: any, height: any, Floor: any): boolean;
declare function KinkyDungeonPlaceShrines(chestlist: any, shrinelist: any, shrinechance: any, shrineTypes: any, shrinecount: any, shrinefilter: any, ghostchance: any, manaChance: any, orbcount: any, filterTypes: any, Floor: any, width: any, height: any, allowQuests: any): number;
declare function KinkyDungeonPlaceChargers(chargerlist: any, chargerchance: any, litchargerchance: any, chargercount: any, Floor: any, width: any, height: any): void;
/**
 *
 * @param {number} Floor
 * @param {number} manaChance
 * @param {string[]} filterTypes
 * @returns
 */
declare function KinkyDungeonGenerateShrine(Floor: number, filterTypes: string[], manaChance: number): {
    type: string;
    drunk: boolean;
} | {
    type: string;
    drunk?: undefined;
};
declare function KinkyDungeonPlaceSpecialTiles(gaschance: any, gasType: any, Floor: any, width: any, height: any): void;
declare function KinkyDungeonPlaceBrickwork(brickchance: any, Floor: any, width: any, height: any): void;
declare function KinkyDungeonPlaceTraps(traps: any, traptypes: any, trapchance: any, doorlocktrapchance: any, Floor: any, width: any, height: any): void;
declare function KinkyDungeonPlacePatrols(Count: any, width: any, height: any): void;
/**
 *
 * @returns {number}
 */
declare function KDGetEffLevel(): number;
/**
 * @returns {string}
 */
declare function KDRandomizeRedLock(): string;
/**
 * @param {boolean} [Guaranteed]
 * @param {number} [Floor]
 * @param {boolean} [AllowGold]
 * @param {string} [Type] - Used to customize the type
 * @param {any} [Data] - Used to customize the type
 *
 */
declare function KDGetLockList(Guaranteed?: boolean, Floor?: number, AllowGold?: boolean, Type?: string, Data?: any): Record<string, number>;
/**
 * Generates a lock
 * @param {boolean} [Guaranteed]
 * @param {number} [Floor]
 * @param {boolean} [AllowGold]
 * @param {string} [Type] - Used to customize the type
 * @param {any} [Data] - Used to customize the type
 * @returns {string}
 */
declare function KinkyDungeonGenerateLock(Guaranteed?: boolean, Floor?: number, AllowGold?: boolean, Type?: string, Data?: any): string;
declare function KinkyDungeonPlaceDoors(doorchance: any, doortrapchance: any, nodoorchance: any, doorlockchance: any, trapChance: any, grateChance: any, Floor: any, width: any, height: any, placeMode?: number): {
    x: number;
    y: number;
}[];
declare function KinkyDungeonReplaceDoodads(Chance: any, barchance: any, wallRubblechance: any, wallhookchance: any, ceilinghookchance: any, width: any, height: any, altType: any): void;
declare function KinkyDungeonPlaceFurniture(barrelChance: any, cageChance: any, width: any, height: any, altType: any): void;
declare function KinkyDungeonPlaceFood(foodChance: any, width: any, height: any, altType: any): void;
declare function KinkyDungeonPlaceTorches(torchchance: any, torchlitchance: any, torchchanceboring: any, width: any, height: any, altType: any, torchreplace: any): void;
/**
 * Replace vertical wall '1' with '|'
 * @param {number} width
 * @param {number} height
 */
declare function KinkyDungeonReplaceVert(width: number, height: number): void;
declare function KinkyDungeonMazeWalls(Cell: any, Walls: any, WallsList: any): void;
declare function KinkyDungeonMapSet(X: any, Y: any, SetTo: any, VisitedRooms: any): boolean;
declare function KinkyDungeonMapSetForce(X: any, Y: any, SetTo: any, VisitedRooms: any): boolean;
declare function KinkyDungeonBoringGet(X: any, Y: any): number;
declare function KinkyDungeonBoringSet(X: any, Y: any, SetTo: any): boolean;
declare function KinkyDungeonMapGet(X: any, Y: any): string;
declare function KinkyDungeonVisionSet(X: any, Y: any, SetTo: any): boolean;
declare function KinkyDungeonBrightnessSet(X: any, Y: any, SetTo: any, monotonic: any): boolean;
declare function KinkyDungeonColorSet(X: any, Y: any, SetTo: any, monotonic: any): boolean;
declare function KinkyDungeonShadowSet(X: any, Y: any, SetTo: any, monotonic: any): boolean;
declare function KinkyDungeonVisionGet(X: any, Y: any): any;
declare function KinkyDungeonBrightnessGet(X: any, Y: any): any;
declare function KinkyDungeonColorGet(X: any, Y: any): any;
declare function KinkyDungeonShadowGet(X: any, Y: any): any;
declare function KinkyDungeonFogGet(X: any, Y: any): any;
declare function KinkyDungeonGetDirection(dx: any, dy: any): {
    x: number;
    y: number;
    delta: number;
};
declare function KinkyDungeonGetDirectionRandom(dx: any, dy: any): {
    x: number;
    y: number;
    delta: number;
};
declare function KinkyDungeonControlsEnabled(): boolean;
declare function KDStartSpellcast(tx: any, ty: any, SpellToCast: any, enemy: any, player: any, bullet: any, data: any): string;
declare function KinkyDungeonClickGame(Level: any): boolean;
declare function KinkyDungeonGetMovable(): string;
declare function KinkyDungeonListenKeyMove(): boolean;
declare function KinkyDungeonGameKeyDown(): boolean;
declare function KinkyDungeonGameKeyUp(lastPress: any): boolean;
declare function KinkyDungeonSendTextMessage(priority: any, text: any, color: any, time: any, noPush: any, noDupe: any, entity: any): boolean;
declare function KinkyDungeonSendActionMessage(priority: any, text: any, color: any, time: any, noPush: any, noDupe: any, entity: any): boolean;
declare function KDAttackCost(weapon: any): number;
/**
 *
 * @param {entity} Enemy
 * @param {number} [skip]
 * @returns {string}
 */
declare function KinkyDungeonLaunchAttack(Enemy: entity, skip?: number): string;
declare function KinkyDungeonMove(moveDirection: any, delta: any, AllowInteract: any, SuppressSprint: any): boolean;
declare function KinkyDungeonWaitMessage(NoTime: any, delta: any): void;
declare function KinkyDungeonMoveTo(moveX: any, moveY: any, willSprint: any, allowPass: any): number;
declare function KDBalanceSprint(): boolean;
declare function KDCanSprint(): boolean;
declare function KinkyDungeonAdvanceTime(delta: any, NoUpdate: any, NoMsgTick: any): void;
declare function KDGetItemEventCache(): void;
declare function KinkyDungeonTargetTileMsg(): void;
/**
 * Sets an item in the character appearance
 * @param {Character} C - The character whose appearance should be changed
 * @param {string} Group - The name of the corresponding groupr for the item
 * @param {Asset|null} ItemAsset - The asset collection of the item to be changed
 * @param {string|string[]} NewColor - The new color (as "#xxyyzz" hex value) for that item
 * @param {number} [DifficultyFactor=0] - The difficulty, on top of the base asset difficulty, that should be assigned
 * to the item
 * @param {number} [ItemMemberNumber=-1] - The member number of the player adding the item - defaults to -1
 * @param {boolean} [Refresh=true] - Determines, wether the character should be redrawn after the item change
 * @param {item} [item] - The item, to pass to the event
 * @returns {Item} - the item itself
 */
declare function KDAddAppearance(C: Character, Group: string, ItemAsset: Asset | null, NewColor: string | string[], DifficultyFactor?: number, ItemMemberNumber?: number, Refresh?: boolean, item?: item): Item;
/**
 * Sets an item in the character appearance
 * @param {Character} C - The character whose appearance should be changed
 * @param {string} Group - The name of the corresponding groupr for the item
 * @param {Model} ItemModel - The asset collection of the item to be changed
 * @param {string|string[]} NewColor - The new color (as "#xxyyzz" hex value) for that item
 * @param {item} [item] - The item, to pass to the event
 * @param {Record<string, LayerFilter>} filters - The item, to pass to the event
 * @returns {Item} - the item itself
 */
declare function KDAddModel(C: Character, Group: string, ItemModel: Model, NewColor: string | string[], filters: Record<string, LayerFilter>, item?: item): Item;
declare function KinkyDungeonCloseDoor(data: any): void;
declare function KDGetEnemyCache(): Map<string, entity>;
/**
 *
 * @param {number} [x]
 * @param {number} [y]
 */
declare function KDTile(x?: number, y?: number): any;
/**
 *
 * @param {number} [x]
 * @param {number} [y]
 */
declare function KDTileDelete(x?: number, y?: number): void;
/**
 * Stuns the player for [turns] turns
 * @param {number} turns
 * @param {boolean} [noFlag] - Doesn't add the 'stun' flag which makes the game think you are in trouble
 */
declare function KDStunTurns(turns: number, noFlag?: boolean): void;
/**
 * Kneels the player for [turns] turns
 * @param {number} turns
 */
declare function KDKneelTurns(turns: number): void;
/**
 * Picks a string based on weights
 * @param {Record<string, number>} list - a list of weights with string keys
 * @returns {string} - the key that was selected
 */
declare function KDGetByWeight(list: Record<string, number>): string;
/**
 *
 * @param {number} Floor
 * @param {string} [MapMod]
 * @param {string} [RoomType]
 * @returns {any}
 */
declare function KDGetAltType(Floor: number, MapMod?: string, RoomType?: string): any;
/**
 *
 * @param {entity} player
 * @param {entity} Enemy
 * @returns {boolean}
 */
declare function KDCanPassEnemy(player: entity, Enemy: entity): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} pad
 * @returns {boolean}
 */
declare function KDIsInBounds(x: number, y: number, pad?: number): boolean;
/**
 *
 * @param {*} sprintdata
 * @returns {number}
 */
declare function KDSprintCost(sprintdata: any): number;
/**
 *
 * @param {KDMapDataType} map
 * @param {string} flag
 */
declare function KDSetMapFlag(map: KDMapDataType, flag: string): void;
/**
 *
 * @param {Character} C
 */
declare function KDUpdateForceOutfit(C: Character): void;
declare function KDGenerateBaseTraffic(width: any, height: any): void;
/**
 * Prunes all rooms with prune: true
 */
declare function KDPruneWorld(): void;
declare function KDTurnToFace(dx: any, dy: any): void;
declare let KDFocusableTextFields: string[];
declare let KDMAXGODDESSQUESTS: number;
declare let KDBalanceSprintMult: number;
declare let KDBalanceInertiaMult: number;
declare let KDBalanceAttackMult: number;
declare let KDBalanceCastArmsMult: number;
declare let KDBalanceCastLegsMult: number;
declare let KinkyDungeonGagMumbleChanceRestraint: number;
declare let KinkyDungeonGagMumbleChance: number;
declare let KinkyDungeonGagMumbleChancePerRestraint: number;
declare let MiniGameKinkyDungeonCheckpoint: string;
declare let MiniGameKinkyDungeonLevel: number;
/**
 * @type Record<string, string>
 */
declare let KinkyDungeonMapIndex: Record<string, string>;
/** @type {Record<string, KDWorldSlot>} */
declare let KDWorldMap: Record<string, KDWorldSlot>;
declare namespace KDCurrentWorldSlot {
    const x: number;
    const y: number;
}
/** @type {KDMapDataType} */
declare let KDMapData: KDMapDataType;
declare namespace KDMapExtraData {
    const Boringness: number[];
    const VisionGrid: any[];
    const ColorGrid: any[];
    const ShadowGrid: any[];
    const BrightnessGrid: any[];
}
declare let KinkyDungeonUpdateLightGrid: boolean;
declare let KinkyDungeonGrid_Last: string;
declare let KinkyDungeonGridSizeDisplay: number;
declare let KinkyDungeonGridWidthDisplay: number;
declare let KinkyDungeonGridHeightDisplay: number;
declare namespace KinkyDungeonMoveDirection {
    const x_1: number;
    export { x_1 as x };
    const y_1: number;
    export { y_1 as y };
    export const delta: number;
}
declare let KinkyDungeonTextMessagePriority: number;
declare let KinkyDungeonTextMessage: string;
declare let KinkyDungeonTextMessageNoPush: boolean;
declare let KinkyDungeonTextMessageTime: number;
declare let KinkyDungeonTextMessageColor: string;
declare let KinkyDungeonActionMessagePriority: number;
declare let KinkyDungeonActionMessage: string;
declare let KinkyDungeonActionMessageNoPush: boolean;
declare let KinkyDungeonActionMessageTime: number;
declare let KinkyDungeonActionMessageColor: string;
declare let KinkyDungeonSpriteSize: number;
declare let KinkyDungeonCanvas: HTMLCanvasElement;
declare let KinkyDungeonContext: any;
declare let KinkyDungeonCanvasFow: HTMLCanvasElement;
declare let KinkyDungeonContextFow: any;
declare let KinkyDungeonCanvasPlayer: HTMLCanvasElement;
declare let KinkyDungeonContextPlayer: any;
declare let KinkyDungeonPOI: any[];
declare let KinkyDungeonStairTiles: string;
declare let KDDefaultAvoidTiles: string;
declare let KinkyDungeonGroundTiles: string;
declare let KinkyDungeonWallTiles: string;
declare let KinkyDungeonBlockTiles: string;
declare let KinkyDungeonMovableTilesEnemy: string;
declare let KinkyDungeonMovableTilesSmartEnemy: string;
declare let KinkyDungeonMovableTiles: string;
declare let KDRandomDisallowedNeighbors: string;
declare let KDTrappableNeighbors: string;
declare let KDTrappableNeighborsLikely: string;
declare let KinkyDungeonTransparentObjects: string;
declare let KinkyDungeonTransparentMovableObjects: string;
declare let KDOpenDoorTiles: string[];
declare let KinkyDungeonTargetTile: any;
declare let KinkyDungeonTargetTileLocation: string;
declare const KinkyDungeonBaseLockChance: 0.12;
declare const KinkyDungeonScalingLockChance: 0.16;
declare const KinkyDungeonBlueLockChance: -0.1;
declare const KinkyDungeonBlueLockChanceScaling: 0.015;
declare const KinkyDungeonBlueLockChanceScalingMax: 0.4;
declare const KinkyDungeonGoldLockChance: -0.25;
declare const KinkyDungeonGoldLockChanceScaling: 0.015;
declare const KinkyDungeonGoldLockChanceScalingMax: 0.25;
declare const KinkyDungeonPurpleLockChance: 0;
declare const KinkyDungeonPurpleLockChanceScaling: 0.02;
declare const KinkyDungeonPurpleLockChanceScalingMax: 0.6;
declare let KinkyDungeonCurrentMaxEnemies: number;
declare let KinkyDungeonNextDataSendTime: number;
declare const KinkyDungeonNextDataSendTimeDelay: 500;
declare let KinkyDungeonNextDataSendTimeDelayPing: number;
declare let KinkyDungeonNextDataSendStatsTimeDelay: number;
declare let KinkyDungeonNextDataSendStatsTime: number;
declare let KinkyDungeonNextDataLastTimeReceived: number;
declare let KinkyDungeonNextDataLastTimeReceivedTimeout: number;
declare let KinkyDungeonLastMoveDirection: any;
/** @type {spell} */
declare let KinkyDungeonTargetingSpell: spell;
/**
 * Item to decrement by 1 when spell is cast
 */
declare let KinkyDungeonTargetingSpellItem: any;
declare let KinkyDungeonTargetingSpellWeapon: any;
/**
 * Game stops when you reach this level
 */
declare let KinkyDungeonMaxLevel: number;
declare let KinkyDungeonLastMoveTimer: number;
declare let KinkyDungeonLastMoveTimerStart: number;
declare let KinkyDungeonLastMoveTimerCooldown: number;
declare let KinkyDungeonLastMoveTimerCooldownStart: number;
declare let KinkyDungeonJailLeash: number;
declare let KinkyDungeonJailLeashY: number;
declare let KinkyDungeonJailLeashX: number;
declare let KinkyDungeonSaveInterval: number;
declare let KinkyDungeonSFX: any[];
declare let KDStageBossGenerated: boolean;
declare let KinkyDungeonSpecialAreas: any[];
declare let KDMinBoringness: number;
declare let KinkyDungeonCommercePlaced: number;
declare namespace KDPlaceMode {
    const MODE_PLACENEW: number;
    const MODE_MODIFYPOTENTIALANDEXISTING: number;
    const MODE_MODIFYEXISTINGONLY: number;
}
declare let KDFood: {
    "": {
        Food: string;
        Weight: number;
    };
    Plate: {
        Food: string;
        inedible: boolean;
        Weight: number;
    };
    Cookies: {
        Food: string;
        Theft: string;
        Weight: number;
    };
    Pizza: {
        Food: string;
        Weight: number;
    };
};
declare let canvasOffsetX: number;
declare let canvasOffsetY: number;
declare const canvasOffsetX_ui: 500;
declare const canvasOffsetY_ui: 164;
declare let KinkyDungeonAutoWaitSuppress: boolean;
declare let KDShopBuyConfirm: boolean;
declare let KinkyDungeonNoMoveFlag: boolean;
declare let KinkyDungeonLastAction: string;
declare let KinkyDungeonLastTurnAction: string;
declare let KDDrawUpdate: number;
declare let KDVisionUpdate: number;
declare let KDLastTick: number;
declare let KDItemEventCache: Map<any, any>;
declare let KDUpdateItemEventCache: boolean;
declare let KDAllowDialogue: boolean;
declare let lastFloaterRefresh: number;
/**
 * @type {Map<string, entity>}
 */
declare let KDEnemyCache: Map<string, entity>;
/**
 * @type {Map<string, Map<number, boolean>>}
 */
declare let KDEnemyEventCache: Map<string, Map<number, boolean>>;
declare let KDUpdateEnemyCache: boolean;
declare let KDIDCache: Map<any, any>;
declare let KDTileQuery: string;
declare let KDTileLast: any;
declare namespace KDKeyCheckers {
    function Toggles(): boolean;
    function Shop(): boolean;
    function Dialogue(): boolean;
}
declare function KDStopAllVibeSounds(Exceptions: any): void;
declare function KDUpdateVibeSound(Location: any, Sound: any, Volume: any): void;
declare function KDUpdateVibeSounds(): void;
declare function KDSumVibeLocations(): string[];
/**
 * @param {item} item
 * Gets a list of the groups that should be vibrating here. It is the item's group, plus any 'linked' vibrators */
declare function KDGetVibeLocation(item: item): string[];
declare function KDRandomizeVibeSound(): string;
/**
 * Starts a vibration, overriding
 * @param {string} source
 * @param {string} name
 * @param {number} intensity
 * @param {number} duration
 * @param {number} [numLoops]
 * @param {number} [denyTime ]
 * @param {number} [denialsLeft ]
 * @param {number} [edgeTime ]
 * @param {boolean} [edgeOnly ]
 * @param {boolean} [alwaysDeny ]
 * @param {number} [denialChance ]
 * @param {number} [denialChanceLikely ]
 * @param {boolean} [tickEdgeAtMaxArousal ]
 * @param {VibeMod[]} [vibeMods ]
 */
declare function KinkyDungeonStartVibration(source: string, name: string, locations: any, intensity: number, duration: number, numLoops?: number, denyTime?: number, denialsLeft?: number, edgeTime?: number, edgeOnly?: boolean, alwaysDeny?: boolean, denialChance?: number, denialChanceLikely?: number, tickEdgeAtMaxArousal?: boolean, vibeMods?: VibeMod[]): void;
/**
 *
 * @param {Record<string, number>} cooldown
 * @returns {boolean}
 */
declare function KDIsVibeCD(cooldown: Record<string, number>): boolean;
declare function KinkyDungeonAddVibeModifier(source: any, name: any, location: any, intensityMod: any, duration: any, intensitySetpoint: any, edgeOnly: any, forceDeny: any, bypassDeny: any, bypassEdge: any, extendDuration: any, denyChanceMod: any, denyChanceLikelyMod: any): void;
declare function KinkyDungeonGetDenyChance(chance: any): number;
declare function KinkyDungeonVibratorsDeny(chance: any): boolean;
declare function KinkyDungeonCalculateVibeLevel(delta: any): void;
declare function KinkyDungeonEndVibration(): void;
declare function KinkyDungeonCanOrgasm(): boolean;
declare namespace KDVibeSounds {
    namespace ItemVulva {
        const sound: string;
        const Audio: any;
        const update: boolean;
    }
    namespace ItemButt {
        const sound_1: string;
        export { sound_1 as sound };
        const Audio_1: any;
        export { Audio_1 as Audio };
        const update_1: boolean;
        export { update_1 as update };
    }
    namespace ItemNipples {
        const sound_2: string;
        export { sound_2 as sound };
        const Audio_2: any;
        export { Audio_2 as Audio };
        const update_2: boolean;
        export { update_2 as update };
        export const vol: number;
    }
}
declare namespace KDVibeSoundRedirect {
    const ItemVulva_1: string;
    export { ItemVulva_1 as ItemVulva };
    export const ItemVulvaPiercings: string;
    const ItemButt_1: string;
    export { ItemButt_1 as ItemButt };
    export const ItemNipplesPiercings: string;
    const ItemNipples_1: string;
    export { ItemNipples_1 as ItemNipples };
    export const ItemPelvis: string;
    export const ItemBreast: string;
    export const ItemBoots: string;
}
declare namespace KDVibeSound {
    const ItemVulva_2: string;
    export { ItemVulva_2 as ItemVulva };
    const ItemButt_2: string;
    export { ItemButt_2 as ItemButt };
    const ItemNipples_2: string;
    export { ItemNipples_2 as ItemNipples };
}
declare let KDResolutionConfirm: boolean;
declare let KDResolution: number;
declare let KDResolutionList: number[];
declare let KDResolutionListIndex: number;
declare let KDVibeVolume: number;
declare let KDVibeVolumeListIndex: number;
declare let KDVibeVolumeList: number[];
declare let KDMusicVolumeMult: number;
declare let KDMusicVolume: number;
declare let KDMusicVolumeListIndex: number;
declare let KDMusicVolumeList: number[];
declare let KDSfxVolume: number;
declare let KDSfxVolumeListIndex: number;
declare let KDSfxVolumeList: number[];
declare let KDAnimSpeed: number;
declare let KDAnimSpeedListIndex: number;
declare let KDAnimSpeedList: number[];
declare let KDGamma: number;
declare let KDGammaListIndex: number;
declare let KDGammaList: number[];
declare function KDChillWalk(entity: any): boolean;
declare namespace KDConduction {
    const id: string;
    const type: string;
    const aura: string;
    const noAuraColor: boolean;
    const aurasprite: string;
    const power: number;
    const player: boolean;
    const duration: number;
    const enemies: boolean;
    const range: number;
    const events: ({
        type: string;
        duration: number;
        trigger: string;
        power?: undefined;
        damage?: undefined;
        aoe?: undefined;
    } | {
        type: string;
        power: number;
        duration: number;
        damage: string;
        aoe: number;
        trigger: string;
    })[];
}
declare namespace KDDrenched {
    const id_1: string;
    export { id_1 as id };
    const type_1: string;
    export { type_1 as type };
    const aura_1: string;
    export { aura_1 as aura };
    const aurasprite_1: string;
    export { aurasprite_1 as aurasprite };
    const power_1: number;
    export { power_1 as power };
    const player_1: boolean;
    export { player_1 as player };
    const duration_1: number;
    export { duration_1 as duration };
    const enemies_1: boolean;
    export { enemies_1 as enemies };
    const events_1: ({
        type: string;
        duration: number;
        trigger: string;
        kind?: undefined;
    } | {
        type: string;
        duration: number;
        trigger: string;
        kind: string;
    })[];
    export { events_1 as events };
}
declare namespace KDBurning {
    const id_2: string;
    export { id_2 as id };
    const type_2: string;
    export { type_2 as type };
    const aura_2: string;
    export { aura_2 as aura };
    const aurasprite_2: string;
    export { aurasprite_2 as aurasprite };
    const noAuraColor_1: boolean;
    export { noAuraColor_1 as noAuraColor };
    const power_2: number;
    export { power_2 as power };
    const player_2: boolean;
    export { player_2 as player };
    const duration_2: number;
    export { duration_2 as duration };
    const enemies_2: boolean;
    export { enemies_2 as enemies };
    const events_2: ({
        type: string;
        trigger: string;
        power?: undefined;
        damage?: undefined;
        damageTrigger?: undefined;
    } | {
        type: string;
        power: number;
        damage: string;
        trigger: string;
        damageTrigger?: undefined;
    } | {
        type: string;
        power: number;
        damage: string;
        damageTrigger: string;
        trigger: string;
    })[];
    export { events_2 as events };
}
declare namespace KDDisenchant1 {
    const id_3: string;
    export { id_3 as id };
    const type_3: string;
    export { type_3 as type };
    const aura_3: string;
    export { aura_3 as aura };
    const power_3: number;
    export { power_3 as power };
    const player_3: boolean;
    export { player_3 as player };
    const duration_3: number;
    export { duration_3 as duration };
    export const infinite: boolean;
    const enemies_3: boolean;
    export { enemies_3 as enemies };
}
declare namespace KDDisenchant2 {
    const id_4: string;
    export { id_4 as id };
    const type_4: string;
    export { type_4 as type };
    const aura_4: string;
    export { aura_4 as aura };
    const power_4: number;
    export { power_4 as power };
    const player_4: boolean;
    export { player_4 as player };
    const duration_4: number;
    export { duration_4 as duration };
    const infinite_1: boolean;
    export { infinite_1 as infinite };
    const enemies_4: boolean;
    export { enemies_4 as enemies };
}
declare namespace KDVolcanism {
    const id_5: string;
    export { id_5 as id };
    const type_5: string;
    export { type_5 as type };
    const aura_5: string;
    export { aura_5 as aura };
    const power_5: number;
    export { power_5 as power };
    const player_5: boolean;
    export { player_5 as player };
    const duration_5: number;
    export { duration_5 as duration };
    const infinite_2: boolean;
    export { infinite_2 as infinite };
    const enemies_5: boolean;
    export { enemies_5 as enemies };
    const events_3: {
        type: string;
        power: number;
        damage: string;
        trigger: string;
    }[];
    export { events_3 as events };
}
declare namespace KDDrenched2 {
    const id_6: string;
    export { id_6 as id };
    const type_6: string;
    export { type_6 as type };
    const power_6: number;
    export { power_6 as power };
    const player_6: boolean;
    export { player_6 as player };
    const duration_6: number;
    export { duration_6 as duration };
    const enemies_6: boolean;
    export { enemies_6 as enemies };
}
declare namespace KDDrenched3 {
    const id_7: string;
    export { id_7 as id };
    const type_7: string;
    export { type_7 as type };
    const power_7: number;
    export { power_7 as power };
    const player_7: boolean;
    export { player_7 as player };
    const duration_7: number;
    export { duration_7 as duration };
    const enemies_7: boolean;
    export { enemies_7 as enemies };
}
declare namespace KDBoundByFate {
    const id_8: string;
    export { id_8 as id };
    const type_8: string;
    export { type_8 as type };
    const power_8: number;
    export { power_8 as power };
    const player_8: boolean;
    export { player_8 as player };
    const duration_8: number;
    export { duration_8 as duration };
    const enemies_8: boolean;
    export { enemies_8 as enemies };
    const aura_6: string;
    export { aura_6 as aura };
    const events_4: {
        type: string;
        kind: string;
        count: number;
        trigger: string;
        power: number;
        damage: string;
    }[];
    export { events_4 as events };
}
declare namespace KDTaunted {
    const id_9: string;
    export { id_9 as id };
    const type_9: string;
    export { type_9 as type };
    const power_9: number;
    export { power_9 as power };
    const player_9: boolean;
    export { player_9 as player };
    const duration_9: number;
    export { duration_9 as duration };
    const enemies_9: boolean;
    export { enemies_9 as enemies };
    const aura_7: string;
    export { aura_7 as aura };
    const events_5: {
        type: string;
        count: number;
        trigger: string;
        power: number;
        damage: string;
    }[];
    export { events_5 as events };
}
declare namespace KDEager {
    const id_10: string;
    export { id_10 as id };
    const type_10: string;
    export { type_10 as type };
    const power_10: number;
    export { power_10 as power };
    const duration_10: number;
    export { duration_10 as duration };
    const events_6: ({
        type: string;
        duration: number;
        trigger: string;
        power?: undefined;
    } | {
        type: string;
        duration: number;
        power: number;
        trigger: string;
    })[];
    export { events_6 as events };
}
declare namespace KDMasochist {
    const id_11: string;
    export { id_11 as id };
    const type_11: string;
    export { type_11 as type };
    const power_11: number;
    export { power_11 as power };
    const duration_11: number;
    export { duration_11 as duration };
}
declare namespace KDChilled {
    const id_12: string;
    export { id_12 as id };
    const aura_8: string;
    export { aura_8 as aura };
    const type_12: string;
    export { type_12 as type };
    const power_12: number;
    export { power_12 as power };
    const player_10: boolean;
    export { player_10 as player };
    const enemies_10: boolean;
    export { enemies_10 as enemies };
    const duration_12: number;
    export { duration_12 as duration };
}
declare namespace KDSlimed {
    const id_13: string;
    export { id_13 as id };
    const aura_9: string;
    export { aura_9 as aura };
    const aurasprite_3: string;
    export { aurasprite_3 as aurasprite };
    const noAuraColor_2: boolean;
    export { noAuraColor_2 as noAuraColor };
    const type_13: string;
    export { type_13 as type };
    const power_13: number;
    export { power_13 as power };
    const player_11: boolean;
    export { player_11 as player };
    const enemies_11: boolean;
    export { enemies_11 as enemies };
    const duration_13: number;
    export { duration_13 as duration };
    const range_1: number;
    export { range_1 as range };
    export const hideHelpless: boolean;
    export const tags: string[];
    const events_7: ({
        type: string;
        duration: number;
        trigger: string;
        power?: undefined;
    } | {
        type: string;
        trigger: string;
        duration?: undefined;
        power?: undefined;
    } | {
        type: string;
        duration: number;
        power: number;
        trigger: string;
    })[];
    export { events_7 as events };
}
declare namespace KDEncased {
    const id_14: string;
    export { id_14 as id };
    const type_14: string;
    export { type_14 as type };
    const power_14: number;
    export { power_14 as power };
    const player_12: boolean;
    export { player_12 as player };
    const enemies_12: boolean;
    export { enemies_12 as enemies };
    const duration_14: number;
    export { duration_14 as duration };
    const infinite_3: boolean;
    export { infinite_3 as infinite };
    const range_2: number;
    export { range_2 as range };
    export const replaceSpriteBound: string;
    export const replaceSprite: string;
    const tags_1: string[];
    export { tags_1 as tags };
    const events_8: ({
        type: string;
        duration: number;
        trigger: string;
        power?: undefined;
    } | {
        type: string;
        trigger: string;
        duration?: undefined;
        power?: undefined;
    } | {
        type: string;
        duration: number;
        power: number;
        trigger: string;
    })[];
    export { events_8 as events };
}
declare namespace KDEncasedMetal {
    const id_15: string;
    export { id_15 as id };
    const type_15: string;
    export { type_15 as type };
    const power_15: number;
    export { power_15 as power };
    const player_13: boolean;
    export { player_13 as player };
    const enemies_13: boolean;
    export { enemies_13 as enemies };
    const duration_15: number;
    export { duration_15 as duration };
    const infinite_4: boolean;
    export { infinite_4 as infinite };
    const range_3: number;
    export { range_3 as range };
    const replaceSpriteBound_1: string;
    export { replaceSpriteBound_1 as replaceSpriteBound };
    const replaceSprite_1: string;
    export { replaceSprite_1 as replaceSprite };
    const tags_2: string[];
    export { tags_2 as tags };
    const events_9: ({
        type: string;
        duration: number;
        trigger: string;
        power?: undefined;
    } | {
        type: string;
        trigger: string;
        duration?: undefined;
        power?: undefined;
    } | {
        type: string;
        duration: number;
        power: number;
        trigger: string;
    })[];
    export { events_9 as events };
}
declare namespace KDEncasedDoll {
    const id_16: string;
    export { id_16 as id };
    const type_16: string;
    export { type_16 as type };
    const power_16: number;
    export { power_16 as power };
    const player_14: boolean;
    export { player_14 as player };
    const enemies_14: boolean;
    export { enemies_14 as enemies };
    const duration_16: number;
    export { duration_16 as duration };
    const infinite_5: boolean;
    export { infinite_5 as infinite };
    const range_4: number;
    export { range_4 as range };
    const replaceSpriteBound_2: string;
    export { replaceSpriteBound_2 as replaceSpriteBound };
    const replaceSprite_2: string;
    export { replaceSprite_2 as replaceSprite };
    const tags_3: string[];
    export { tags_3 as tags };
    const events_10: ({
        type: string;
        duration: number;
        trigger: string;
        power?: undefined;
    } | {
        type: string;
        trigger: string;
        duration?: undefined;
        power?: undefined;
    } | {
        type: string;
        duration: number;
        power: number;
        trigger: string;
    })[];
    export { events_10 as events };
}
declare namespace KDChastity {
    const id_17: string;
    export { id_17 as id };
    const type_17: string;
    export { type_17 as type };
    const power_17: number;
    export { power_17 as power };
    const aura_10: string;
    export { aura_10 as aura };
    const aurasprite_4: string;
    export { aurasprite_4 as aurasprite };
    const player_15: boolean;
    export { player_15 as player };
    const enemies_15: boolean;
    export { enemies_15 as enemies };
    const duration_17: number;
    export { duration_17 as duration };
    const infinite_6: boolean;
    export { infinite_6 as infinite };
    const range_5: number;
    export { range_5 as range };
    const tags_4: string[];
    export { tags_4 as tags };
    const events_11: {
        type: string;
        power: number;
        trigger: string;
        prereq: string;
    }[];
    export { events_11 as events };
}
declare namespace KDVibrate1 {
    const id_18: string;
    export { id_18 as id };
    const type_18: string;
    export { type_18 as type };
    const power_18: number;
    export { power_18 as power };
    const aura_11: string;
    export { aura_11 as aura };
    const duration_18: number;
    export { duration_18 as duration };
    const tags_5: string[];
    export { tags_5 as tags };
    const events_12: {
        type: string;
        trigger: string;
    }[];
    export { events_12 as events };
}
declare namespace KDVibrate2 {
    const id_19: string;
    export { id_19 as id };
    const type_19: string;
    export { type_19 as type };
    const power_19: number;
    export { power_19 as power };
    const aura_12: string;
    export { aura_12 as aura };
    const duration_19: number;
    export { duration_19 as duration };
    const tags_6: string[];
    export { tags_6 as tags };
    const events_13: {
        type: string;
        trigger: string;
    }[];
    export { events_13 as events };
}
declare namespace KDVibrate3 {
    const id_20: string;
    export { id_20 as id };
    const type_20: string;
    export { type_20 as type };
    const power_20: number;
    export { power_20 as power };
    const aura_13: string;
    export { aura_13 as aura };
    const duration_20: number;
    export { duration_20 as duration };
    const tags_7: string[];
    export { tags_7 as tags };
    const events_14: {
        type: string;
        trigger: string;
    }[];
    export { events_14 as events };
}
declare namespace KDToySecret {
    const id_21: string;
    export { id_21 as id };
    const type_21: string;
    export { type_21 as type };
    const power_21: number;
    export { power_21 as power };
    const duration_21: number;
    export { duration_21 as duration };
    const infinite_7: boolean;
    export { infinite_7 as infinite };
    const range_6: number;
    export { range_6 as range };
    const tags_8: string[];
    export { tags_8 as tags };
}
declare namespace KDToy {
    const id_22: string;
    export { id_22 as id };
    const type_22: string;
    export { type_22 as type };
    const power_22: number;
    export { power_22 as power };
    const aura_14: string;
    export { aura_14 as aura };
    const aurasprite_5: string;
    export { aurasprite_5 as aurasprite };
    const player_16: boolean;
    export { player_16 as player };
    const enemies_16: boolean;
    export { enemies_16 as enemies };
    const duration_22: number;
    export { duration_22 as duration };
    const range_7: number;
    export { range_7 as range };
    const tags_9: string[];
    export { tags_9 as tags };
    const events_15: {
        type: string;
        trigger: string;
    }[];
    export { events_15 as events };
}
declare namespace KDPlugged {
    const id_23: string;
    export { id_23 as id };
    const type_23: string;
    export { type_23 as type };
    const power_23: number;
    export { power_23 as power };
    const aura_15: string;
    export { aura_15 as aura };
    const aurasprite_6: string;
    export { aurasprite_6 as aurasprite };
    const player_17: boolean;
    export { player_17 as player };
    const enemies_17: boolean;
    export { enemies_17 as enemies };
    const duration_23: number;
    export { duration_23 as duration };
    const infinite_8: boolean;
    export { infinite_8 as infinite };
    const range_8: number;
    export { range_8 as range };
    const tags_10: string[];
    export { tags_10 as tags };
    const events_16: ({
        type: string;
        power: number;
        trigger: string;
        prereq?: undefined;
    } | {
        type: string;
        trigger: string;
        prereq: string;
        power?: undefined;
    })[];
    export { events_16 as events };
}
declare namespace KDDoublePlugged {
    const id_24: string;
    export { id_24 as id };
    const type_24: string;
    export { type_24 as type };
    const power_24: number;
    export { power_24 as power };
    const aura_16: string;
    export { aura_16 as aura };
    const aurasprite_7: string;
    export { aurasprite_7 as aurasprite };
    const player_18: boolean;
    export { player_18 as player };
    const enemies_18: boolean;
    export { enemies_18 as enemies };
    const duration_24: number;
    export { duration_24 as duration };
    const range_9: number;
    export { range_9 as range };
    const tags_11: string[];
    export { tags_11 as tags };
    const events_17: ({
        type: string;
        power: number;
        trigger: string;
        prereq?: undefined;
    } | {
        type: string;
        trigger: string;
        prereq: string;
        power?: undefined;
    })[];
    export { events_17 as events };
}
declare namespace KDTaped {
    const id_25: string;
    export { id_25 as id };
    const type_25: string;
    export { type_25 as type };
    const power_25: number;
    export { power_25 as power };
    const duration_25: number;
    export { duration_25 as duration };
    const replaceSpriteBound_3: string;
    export { replaceSpriteBound_3 as replaceSpriteBound };
    const tags_12: string[];
    export { tags_12 as tags };
    const aura_17: string;
    export { aura_17 as aura };
    export const replacePower: number;
    const events_18: {
        type: string;
        trigger: string;
    }[];
    export { events_18 as events };
}
declare namespace KDGlueVulnLow {
    const id_26: string;
    export { id_26 as id };
    const type_26: string;
    export { type_26 as type };
    const power_26: number;
    export { power_26 as power };
    const player_19: boolean;
    export { player_19 as player };
    const enemies_19: boolean;
    export { enemies_19 as enemies };
    const duration_26: number;
    export { duration_26 as duration };
}
declare namespace KDGlueResist {
    const id_27: string;
    export { id_27 as id };
    const type_27: string;
    export { type_27 as type };
    const power_27: number;
    export { power_27 as power };
    const player_20: boolean;
    export { player_20 as player };
    const enemies_20: boolean;
    export { enemies_20 as enemies };
    const duration_27: number;
    export { duration_27 as duration };
}
declare namespace KDDollDebuff {
    const id_28: string;
    export { id_28 as id };
    const type_28: string;
    export { type_28 as type };
    const power_28: number;
    export { power_28 as power };
    const player_21: boolean;
    export { player_21 as player };
    const enemies_21: boolean;
    export { enemies_21 as enemies };
    const duration_28: number;
    export { duration_28 as duration };
    const aura_18: string;
    export { aura_18 as aura };
}
declare namespace KDDollDebuff2 {
    const id_29: string;
    export { id_29 as id };
    const type_29: string;
    export { type_29 as type };
    const power_29: number;
    export { power_29 as power };
    const player_22: boolean;
    export { player_22 as player };
    const enemies_22: boolean;
    export { enemies_22 as enemies };
    const duration_29: number;
    export { duration_29 as duration };
}
declare namespace KDSlowed {
    const id_30: string;
    export { id_30 as id };
    const type_30: string;
    export { type_30 as type };
    const power_30: number;
    export { power_30 as power };
    const player_23: boolean;
    export { player_23 as player };
    const enemies_23: boolean;
    export { enemies_23 as enemies };
    const duration_30: number;
    export { duration_30 as duration };
}
declare namespace KDSlowedSlightly {
    const id_31: string;
    export { id_31 as id };
    const type_31: string;
    export { type_31 as type };
    const power_31: number;
    export { power_31 as power };
    const player_24: boolean;
    export { player_24 as player };
    const enemies_24: boolean;
    export { enemies_24 as enemies };
    const duration_31: number;
    export { duration_31 as duration };
}
declare namespace KDKnockbackable {
    const id_32: string;
    export { id_32 as id };
    const type_32: string;
    export { type_32 as type };
    const power_32: number;
    export { power_32 as power };
    const player_25: boolean;
    export { player_25 as player };
    const enemies_25: boolean;
    export { enemies_25 as enemies };
    const duration_32: number;
    export { duration_32 as duration };
}
declare namespace KDAttackSlow {
    const id_33: string;
    export { id_33 as id };
    const type_33: string;
    export { type_33 as type };
    const power_33: number;
    export { power_33 as power };
    const player_26: boolean;
    export { player_26 as player };
    const enemies_26: boolean;
    export { enemies_26 as enemies };
    const duration_33: number;
    export { duration_33 as duration };
}
declare namespace KDUnsteady {
    const id_34: string;
    export { id_34 as id };
    const aura_19: string;
    export { aura_19 as aura };
    const type_34: string;
    export { type_34 as type };
    const power_34: number;
    export { power_34 as power };
    const player_27: boolean;
    export { player_27 as player };
    const enemies_27: boolean;
    export { enemies_27 as enemies };
    const duration_34: number;
    export { duration_34 as duration };
}
declare namespace KDUnsteady2 {
    const id_35: string;
    export { id_35 as id };
    const aura_20: string;
    export { aura_20 as aura };
    const type_35: string;
    export { type_35 as type };
    const power_35: number;
    export { power_35 as power };
    const player_28: boolean;
    export { player_28 as player };
    const enemies_28: boolean;
    export { enemies_28 as enemies };
    const duration_35: number;
    export { duration_35 as duration };
}
declare namespace KDUnsteady3 {
    const id_36: string;
    export { id_36 as id };
    const type_36: string;
    export { type_36 as type };
    const power_36: number;
    export { power_36 as power };
    const player_29: boolean;
    export { player_29 as player };
    const enemies_29: boolean;
    export { enemies_29 as enemies };
    const duration_36: number;
    export { duration_36 as duration };
}
declare namespace KDWaterSlow {
    const id_37: string;
    export { id_37 as id };
    const type_37: string;
    export { type_37 as type };
    const power_37: number;
    export { power_37 as power };
    const player_30: boolean;
    export { player_30 as player };
    const enemies_30: boolean;
    export { enemies_30 as enemies };
    const duration_37: number;
    export { duration_37 as duration };
}
declare namespace KDNoChill {
    const id_38: string;
    export { id_38 as id };
    const aura_21: string;
    export { aura_21 as aura };
    const type_38: string;
    export { type_38 as type };
    const power_38: number;
    export { power_38 as power };
    const player_31: boolean;
    export { player_31 as player };
    const enemies_31: boolean;
    export { enemies_31 as enemies };
    const duration_38: number;
    export { duration_38 as duration };
}
declare namespace KDNoChillNoAura {
    const id_39: string;
    export { id_39 as id };
    const type_39: string;
    export { type_39 as type };
    const power_39: number;
    export { power_39 as power };
    const player_32: boolean;
    export { player_32 as player };
    const enemies_32: boolean;
    export { enemies_32 as enemies };
    const duration_39: number;
    export { duration_39 as duration };
}
declare namespace KDRestraintDisarmLight {
    const id_40: string;
    export { id_40 as id };
    const aura_22: string;
    export { aura_22 as aura };
    const type_40: string;
    export { type_40 as type };
    const power_40: number;
    export { power_40 as power };
    const player_33: boolean;
    export { player_33 as player };
    const enemies_33: boolean;
    export { enemies_33 as enemies };
    const duration_40: number;
    export { duration_40 as duration };
    const infinite_9: boolean;
    export { infinite_9 as infinite };
    const events_19: {
        type: string;
        trigger: string;
    }[];
    export { events_19 as events };
}
declare namespace KDBuffReference {
    const RestraintDisarmLight: {
        id: string;
        aura: string;
        type: string;
        power: number;
        player: boolean;
        enemies: boolean;
        duration: number;
        infinite: boolean;
        events: {
            type: string;
            trigger: string;
        }[];
    }[];
    const Unsteady: {
        id: string;
        type: string;
        power: number;
        player: boolean;
        enemies: boolean;
        duration: number;
    }[];
    const Plugged: {
        id: string;
        type: string;
        power: number;
        aura: string;
        aurasprite: string;
        player: boolean;
        enemies: boolean;
        duration: number;
        infinite: boolean;
        range: number;
        tags: string[];
        events: ({
            type: string;
            power: number;
            trigger: string;
            prereq?: undefined;
        } | {
            type: string;
            trigger: string;
            prereq: string;
            power?: undefined;
        })[];
    }[];
    const DoublePlugged: {
        id: string;
        type: string;
        power: number;
        aura: string;
        aurasprite: string;
        player: boolean;
        enemies: boolean;
        duration: number;
        range: number;
        tags: string[];
        events: ({
            type: string;
            power: number;
            trigger: string;
            prereq?: undefined;
        } | {
            type: string;
            trigger: string;
            prereq: string;
            power?: undefined;
        })[];
    }[];
    const Chastity: {
        id: string;
        type: string;
        power: number;
        aura: string;
        aurasprite: string;
        player: boolean;
        enemies: boolean;
        duration: number;
        infinite: boolean;
        range: number;
        tags: string[];
        events: {
            type: string;
            power: number;
            trigger: string;
            prereq: string;
        }[];
    }[];
    const Vibrate1: {
        id: string;
        type: string;
        power: number;
        aura: string;
        duration: number;
        tags: string[];
        events: {
            type: string;
            trigger: string;
        }[];
    }[];
    const Vibrate2: {
        id: string;
        type: string;
        power: number;
        aura: string;
        duration: number;
        tags: string[];
        events: {
            type: string;
            trigger: string;
        }[];
    }[];
    const Vibrate3: {
        id: string;
        type: string;
        power: number;
        aura: string;
        duration: number;
        tags: string[];
        events: {
            type: string;
            trigger: string;
        }[];
    }[];
}
declare namespace KDDisenchantSelf {
    const id_41: string;
    export { id_41 as id };
    const aura_23: string;
    export { aura_23 as aura };
    const type_41: string;
    export { type_41 as type };
    const power_41: number;
    export { power_41 as power };
    const player_34: boolean;
    export { player_34 as player };
    const enemies_34: boolean;
    export { enemies_34 as enemies };
    const duration_41: number;
    export { duration_41 as duration };
}
/** @type {Record<string, (entity: entity, buff: any) => void>}>} */
declare let KDCustomBuff: Record<string, (entity: entity, buff: any) => void>;
/**
 * @type {Record<string, (buff, entity) => void>}}
 */
declare let KDBuffClick: Record<string, (buff: any, entity: any) => void>;
declare function KinkyDungeonAltFloor(Type: any): any;
declare function KinkyDungeonCreateMaze(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateCaldera(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
/**
 *
 * @param {*} POI
 * @param {*} VisitedRooms
 * @param {*} width
 * @param {*} height
 * @param {*} openness
 * @param {*} density
 * @param {*} hallopenness
 * @param {{params: floorParams; chestlist: any[]; traps: any[]; shrinelist: any[]; chargerlist: any[]; spawnpoints: any[]}} data
 */
declare function KinkyDungeonCreateTileMaze(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: {
    params: floorParams;
    chestlist: any[];
    traps: any[];
    shrinelist: any[];
    chargerlist: any[];
    spawnpoints: any[];
}): void;
declare function KinkyDungeonCreateRoom(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateDollRoom(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateDemonTransition(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateDollmaker(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateWarden(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateTunnel(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreatePerkRoom(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateJourneyFloor(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateShopStart(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateElevatorRoom(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateTestTile(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KinkyDungeonCreateTutorial(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare namespace KDJourneyMapMod {
    const Random: boolean;
}
declare let KDDragonList: ({
    enemy: string;
    obstacles: {
        ChaoticCrystal: number;
        ChaoticCrystalActive: number;
        SoulCrystal: number;
        SoulCrystalActive: number;
        BarricadeVine?: undefined;
        GiantMushroom?: undefined;
        VinePlant?: undefined;
        BarricadeIce?: undefined;
        ShadowHand?: undefined;
        BarricadeShadow?: undefined;
        BarricadeShadowMetal?: undefined;
    };
} | {
    enemy: string;
    obstacles: {
        BarricadeVine: number;
        GiantMushroom: number;
        VinePlant: number;
        ChaoticCrystal?: undefined;
        ChaoticCrystalActive?: undefined;
        SoulCrystal?: undefined;
        SoulCrystalActive?: undefined;
        BarricadeIce?: undefined;
        ShadowHand?: undefined;
        BarricadeShadow?: undefined;
        BarricadeShadowMetal?: undefined;
    };
} | {
    enemy: string;
    obstacles: {
        BarricadeIce: number;
        ChaoticCrystal?: undefined;
        ChaoticCrystalActive?: undefined;
        SoulCrystal?: undefined;
        SoulCrystalActive?: undefined;
        BarricadeVine?: undefined;
        GiantMushroom?: undefined;
        VinePlant?: undefined;
        ShadowHand?: undefined;
        BarricadeShadow?: undefined;
        BarricadeShadowMetal?: undefined;
    };
} | {
    enemy: string;
    obstacles: {
        ShadowHand: number;
        BarricadeShadow: number;
        BarricadeShadowMetal: number;
        ChaoticCrystal?: undefined;
        ChaoticCrystalActive?: undefined;
        SoulCrystal?: undefined;
        SoulCrystalActive?: undefined;
        BarricadeVine?: undefined;
        GiantMushroom?: undefined;
        VinePlant?: undefined;
        BarricadeIce?: undefined;
    };
})[];
declare namespace KDDefaultMaxFlags {
    const goldchest: number;
    const lessergold: number;
    const silverchest: number;
    const darkchest: number;
    const redchest: number;
    const bluechest: number;
    const forbidden: number;
    const artifact: number;
    const jail: number;
    const playroom: number;
    const supplydepot: number;
    const barracks: number;
    const robotroom: number;
    const laboratory: number;
    const library: number;
    const armory: number;
    const workshop: number;
    const tinker: number;
    const office: number;
    const worship: number;
    const graveyard: number;
    const well: number;
    const wildlife: number;
    const range: number;
    const arena: number;
    const arena_boss: number;
    const arena_miniboss: number;
    const slimespawn: number;
    const beastspawn: number;
    const magicspawn: number;
    const robotspawn: number;
}
declare namespace alts {
    namespace Tunnel {
        const name: string;
        const bossroom: boolean;
        const width: number;
        const height: number;
        const genType: string;
        const skiptunnel: boolean;
        const spawns: boolean;
        const chests: boolean;
        const shrines: boolean;
        const orbs: number;
        const setpieces: {};
        const chargers: boolean;
        const notorches: boolean;
        const heart: boolean;
        const specialtiles: boolean;
        const shortcut: boolean;
        const enemies: boolean;
        const nojail: boolean;
        const nolore: boolean;
        const nokeys: boolean;
        const nostairs: boolean;
        const notraps: boolean;
        const noClutter: boolean;
        const noShrineTypes: string[];
        const tickFlags: boolean;
        const noMusic: boolean;
        const persist: boolean;
        const prune: boolean;
    }
    namespace PerkRoom {
        const tickFlags_1: boolean;
        export { tickFlags_1 as tickFlags };
        const name_1: string;
        export { name_1 as name };
        export const Title: string;
        export const skin: string;
        export const useDefaultMusic: boolean;
        export const useGenParams: string;
        export const lightParams: string;
        const bossroom_1: boolean;
        export { bossroom_1 as bossroom };
        const persist_1: boolean;
        export { persist_1 as persist };
        const prune_1: boolean;
        export { prune_1 as prune };
        const skiptunnel_1: boolean;
        export { skiptunnel_1 as skiptunnel };
        export const requireJourneyTarget: boolean;
        export const events: {
            trigger: string;
            type: string;
        }[];
        export namespace torchreplace {
            const sprite: string;
            const unlitsprite: string;
            const brightness: number;
        }
        const width_1: number;
        export { width_1 as width };
        const height_1: number;
        export { height_1 as height };
        const genType_1: string;
        export { genType_1 as genType };
        export namespace setpieces_1 {
            const PearlChest: number;
        }
        export { setpieces_1 as setpieces };
        const spawns_1: boolean;
        export { spawns_1 as spawns };
        const chests_1: boolean;
        export { chests_1 as chests };
        const shrines_1: boolean;
        export { shrines_1 as shrines };
        const orbs_1: number;
        export { orbs_1 as orbs };
        const chargers_1: boolean;
        export { chargers_1 as chargers };
        const notorches_1: boolean;
        export { notorches_1 as notorches };
        const heart_1: boolean;
        export { heart_1 as heart };
        const specialtiles_1: boolean;
        export { specialtiles_1 as specialtiles };
        const shortcut_1: boolean;
        export { shortcut_1 as shortcut };
        const enemies_1: boolean;
        export { enemies_1 as enemies };
        const nojail_1: boolean;
        export { nojail_1 as nojail };
        const nolore_1: boolean;
        export { nolore_1 as nolore };
        const nokeys_1: boolean;
        export { nokeys_1 as nokeys };
        const nostairs_1: boolean;
        export { nostairs_1 as nostairs };
        const notraps_1: boolean;
        export { notraps_1 as notraps };
        const noClutter_1: boolean;
        export { noClutter_1 as noClutter };
        const noShrineTypes_1: string[];
        export { noShrineTypes_1 as noShrineTypes };
        const noMusic_1: boolean;
        export { noMusic_1 as noMusic };
        export const keepMainPath: boolean;
    }
    namespace Jail {
        const name_2: string;
        export { name_2 as name };
        const bossroom_2: boolean;
        export { bossroom_2 as bossroom };
        const width_2: number;
        export { width_2 as width };
        const height_2: number;
        export { height_2 as height };
        export const enemyMult: number;
        export const alwaysRegen: boolean;
        export namespace setpieces_2 {
            const GuaranteedCell: number;
            const ExtraCell: number;
            const Bedroom: number;
            const QuadCell: number;
            const Storage: number;
        }
        export { setpieces_2 as setpieces };
        export namespace bonusTags {
            namespace construct {
                const bonus: number;
                const mult: number;
            }
        }
        export const factionSpawnsRequired: boolean;
        const genType_2: string;
        export { genType_2 as genType };
        const spawns_2: boolean;
        export { spawns_2 as spawns };
        const chests_2: boolean;
        export { chests_2 as chests };
        const shrines_2: boolean;
        export { shrines_2 as shrines };
        const orbs_2: number;
        export { orbs_2 as orbs };
        const chargers_2: boolean;
        export { chargers_2 as chargers };
        const notorches_2: boolean;
        export { notorches_2 as notorches };
        const heart_2: boolean;
        export { heart_2 as heart };
        const specialtiles_2: boolean;
        export { specialtiles_2 as specialtiles };
        const shortcut_2: boolean;
        export { shortcut_2 as shortcut };
        const enemies_2: boolean;
        export { enemies_2 as enemies };
        const nojail_2: boolean;
        export { nojail_2 as nojail };
        const nokeys_2: boolean;
        export { nokeys_2 as nokeys };
        const nostairs_2: boolean;
        export { nostairs_2 as nostairs };
        const notraps_2: boolean;
        export { notraps_2 as notraps };
        export const noRelease: boolean;
        export const releaseOnLowSec: boolean;
        const noShrineTypes_2: string[];
        export { noShrineTypes_2 as noShrineTypes };
    }
    namespace DollRoom {
        const name_3: string;
        export { name_3 as name };
        const Title_1: string;
        export { Title_1 as Title };
        export const noWear: boolean;
        const bossroom_3: boolean;
        export { bossroom_3 as bossroom };
        const width_3: number;
        export { width_3 as width };
        const height_3: number;
        export { height_3 as height };
        export const nopatrols: boolean;
        const alwaysRegen_1: boolean;
        export { alwaysRegen_1 as alwaysRegen };
        const setpieces_3: {};
        export { setpieces_3 as setpieces };
        export namespace data {
            const dollroom: boolean;
        }
        const genType_3: string;
        export { genType_3 as genType };
        const spawns_3: boolean;
        export { spawns_3 as spawns };
        const chests_3: boolean;
        export { chests_3 as chests };
        const shrines_3: boolean;
        export { shrines_3 as shrines };
        const orbs_3: number;
        export { orbs_3 as orbs };
        const chargers_3: boolean;
        export { chargers_3 as chargers };
        const notorches_3: boolean;
        export { notorches_3 as notorches };
        const heart_3: boolean;
        export { heart_3 as heart };
        const specialtiles_3: boolean;
        export { specialtiles_3 as specialtiles };
        const shortcut_3: boolean;
        export { shortcut_3 as shortcut };
        const enemies_3: boolean;
        export { enemies_3 as enemies };
        const nojail_3: boolean;
        export { nojail_3 as nojail };
        const nokeys_3: boolean;
        export { nokeys_3 as nokeys };
        const nostairs_3: boolean;
        export { nostairs_3 as nostairs };
        export const nostartstairs: boolean;
        const notraps_3: boolean;
        export { notraps_3 as notraps };
        const noClutter_2: boolean;
        export { noClutter_2 as noClutter };
        export const nobrick: boolean;
        const nolore_2: boolean;
        export { nolore_2 as nolore };
        export const noboring: boolean;
    }
    namespace DemonTransition {
        const name_4: string;
        export { name_4 as name };
        const Title_2: string;
        export { Title_2 as Title };
        const noWear_1: boolean;
        export { noWear_1 as noWear };
        const bossroom_4: boolean;
        export { bossroom_4 as bossroom };
        const alwaysRegen_2: boolean;
        export { alwaysRegen_2 as alwaysRegen };
        const width_4: number;
        export { width_4 as width };
        const height_4: number;
        export { height_4 as height };
        const nopatrols_1: boolean;
        export { nopatrols_1 as nopatrols };
        export function onExit(data: any): void;
        export function afterExit(data: any): void;
        const setpieces_4: {};
        export { setpieces_4 as setpieces };
        export namespace data_1 {
            const DemonTransition_1: boolean;
            export { DemonTransition_1 as DemonTransition };
        }
        export { data_1 as data };
        const genType_4: string;
        export { genType_4 as genType };
        const skin_1: string;
        export { skin_1 as skin };
        export const musicParams: string;
        const lightParams_1: string;
        export { lightParams_1 as lightParams };
        const useGenParams_1: string;
        export { useGenParams_1 as useGenParams };
        const spawns_4: boolean;
        export { spawns_4 as spawns };
        const chests_4: boolean;
        export { chests_4 as chests };
        const shrines_4: boolean;
        export { shrines_4 as shrines };
        const orbs_4: number;
        export { orbs_4 as orbs };
        const chargers_4: boolean;
        export { chargers_4 as chargers };
        const notorches_4: boolean;
        export { notorches_4 as notorches };
        const heart_4: boolean;
        export { heart_4 as heart };
        const specialtiles_4: boolean;
        export { specialtiles_4 as specialtiles };
        const shortcut_4: boolean;
        export { shortcut_4 as shortcut };
        const enemies_4: boolean;
        export { enemies_4 as enemies };
        const nojail_4: boolean;
        export { nojail_4 as nojail };
        const nokeys_4: boolean;
        export { nokeys_4 as nokeys };
        const nostairs_4: boolean;
        export { nostairs_4 as nostairs };
        const nostartstairs_1: boolean;
        export { nostartstairs_1 as nostartstairs };
        export const placeDoors: boolean;
        const notraps_4: boolean;
        export { notraps_4 as notraps };
        const noClutter_3: boolean;
        export { noClutter_3 as noClutter };
        const nobrick_1: boolean;
        export { nobrick_1 as nobrick };
        const nolore_3: boolean;
        export { nolore_3 as nolore };
        const noboring_1: boolean;
        export { noboring_1 as noboring };
    }
    namespace BanditFort {
        const name_5: string;
        export { name_5 as name };
        const Title_3: string;
        export { Title_3 as Title };
        const noWear_2: boolean;
        export { noWear_2 as noWear };
        const bossroom_5: boolean;
        export { bossroom_5 as bossroom };
        const width_5: number;
        export { width_5 as width };
        const height_5: number;
        export { height_5 as height };
        const nopatrols_2: boolean;
        export { nopatrols_2 as nopatrols };
        export namespace setpieces_5 {
            export const Cache: number;
            const Bedroom_1: number;
            export { Bedroom_1 as Bedroom };
            const Storage_1: number;
            export { Storage_1 as Storage };
        }
        export { setpieces_5 as setpieces };
        export namespace data_2 {
            const BanditFort_1: boolean;
            export { BanditFort_1 as BanditFort };
        }
        export { data_2 as data };
        const genType_5: string;
        export { genType_5 as genType };
        const skin_2: string;
        export { skin_2 as skin };
        const musicParams_1: string;
        export { musicParams_1 as musicParams };
        const lightParams_2: string;
        export { lightParams_2 as lightParams };
        const useGenParams_2: string;
        export { useGenParams_2 as useGenParams };
        const spawns_5: boolean;
        export { spawns_5 as spawns };
        const chests_5: boolean;
        export { chests_5 as chests };
        const shrines_5: boolean;
        export { shrines_5 as shrines };
        const persist_2: boolean;
        export { persist_2 as persist };
        const orbs_5: number;
        export { orbs_5 as orbs };
        const chargers_5: boolean;
        export { chargers_5 as chargers };
        const notorches_5: boolean;
        export { notorches_5 as notorches };
        const heart_5: boolean;
        export { heart_5 as heart };
        const specialtiles_5: boolean;
        export { specialtiles_5 as specialtiles };
        const shortcut_5: boolean;
        export { shortcut_5 as shortcut };
        const enemies_5: boolean;
        export { enemies_5 as enemies };
        const nojail_5: boolean;
        export { nojail_5 as nojail };
        const nokeys_5: boolean;
        export { nokeys_5 as nokeys };
        const nostairs_5: boolean;
        export { nostairs_5 as nostairs };
        const factionSpawnsRequired_1: boolean;
        export { factionSpawnsRequired_1 as factionSpawnsRequired };
        const placeDoors_1: boolean;
        export { placeDoors_1 as placeDoors };
        const notraps_5: boolean;
        export { notraps_5 as notraps };
        const noClutter_4: boolean;
        export { noClutter_4 as noClutter };
        const nobrick_2: boolean;
        export { nobrick_2 as nobrick };
        const nolore_4: boolean;
        export { nolore_4 as nolore };
        const noboring_2: boolean;
        export { noboring_2 as noboring };
    }
    namespace Caldera {
        const name_6: string;
        export { name_6 as name };
        const Title_4: string;
        export { Title_4 as Title };
        const noWear_3: boolean;
        export { noWear_3 as noWear };
        const bossroom_6: boolean;
        export { bossroom_6 as bossroom };
        const width_6: number;
        export { width_6 as width };
        const height_6: number;
        export { height_6 as height };
        const nopatrols_3: boolean;
        export { nopatrols_3 as nopatrols };
        export namespace setpieces_6 {
            const GuaranteedCell_1: number;
            export { GuaranteedCell_1 as GuaranteedCell };
        }
        export { setpieces_6 as setpieces };
        export namespace data_3 {
            const Caldera_1: boolean;
            export { Caldera_1 as Caldera };
        }
        export { data_3 as data };
        const genType_6: string;
        export { genType_6 as genType };
        const skin_3: string;
        export { skin_3 as skin };
        const musicParams_2: string;
        export { musicParams_2 as musicParams };
        const lightParams_3: string;
        export { lightParams_3 as lightParams };
        const useGenParams_3: string;
        export { useGenParams_3 as useGenParams };
        const brightness_1: number;
        export { brightness_1 as brightness };
        const spawns_6: boolean;
        export { spawns_6 as spawns };
        const chests_6: boolean;
        export { chests_6 as chests };
        const shrines_6: boolean;
        export { shrines_6 as shrines };
        const persist_3: boolean;
        export { persist_3 as persist };
        const orbs_6: number;
        export { orbs_6 as orbs };
        const chargers_6: boolean;
        export { chargers_6 as chargers };
        const notorches_6: boolean;
        export { notorches_6 as notorches };
        const heart_6: boolean;
        export { heart_6 as heart };
        const specialtiles_6: boolean;
        export { specialtiles_6 as specialtiles };
        const shortcut_6: boolean;
        export { shortcut_6 as shortcut };
        const enemies_6: boolean;
        export { enemies_6 as enemies };
        const nojail_6: boolean;
        export { nojail_6 as nojail };
        const nokeys_6: boolean;
        export { nokeys_6 as nokeys };
        const nostairs_6: boolean;
        export { nostairs_6 as nostairs };
        const placeDoors_2: boolean;
        export { placeDoors_2 as placeDoors };
        const notraps_6: boolean;
        export { notraps_6 as notraps };
        const noClutter_5: boolean;
        export { noClutter_5 as noClutter };
        const nobrick_3: boolean;
        export { nobrick_3 as nobrick };
        const nolore_5: boolean;
        export { nolore_5 as nolore };
        const noboring_3: boolean;
        export { noboring_3 as noboring };
    }
    namespace ElevatorRoom {
        const name_7: string;
        export { name_7 as name };
        const Title_5: string;
        export { Title_5 as Title };
        const noWear_4: boolean;
        export { noWear_4 as noWear };
        const bossroom_7: boolean;
        export { bossroom_7 as bossroom };
        const width_7: number;
        export { width_7 as width };
        const height_7: number;
        export { height_7 as height };
        const nopatrols_4: boolean;
        export { nopatrols_4 as nopatrols };
        const setpieces_7: {};
        export { setpieces_7 as setpieces };
        export namespace data_4 {
            const ElevatorRoom_1: boolean;
            export { ElevatorRoom_1 as ElevatorRoom };
        }
        export { data_4 as data };
        const genType_7: string;
        export { genType_7 as genType };
        const skin_4: string;
        export { skin_4 as skin };
        const musicParams_3: string;
        export { musicParams_3 as musicParams };
        const lightParams_4: string;
        export { lightParams_4 as lightParams };
        const useGenParams_4: string;
        export { useGenParams_4 as useGenParams };
        const spawns_7: boolean;
        export { spawns_7 as spawns };
        const chests_7: boolean;
        export { chests_7 as chests };
        const shrines_7: boolean;
        export { shrines_7 as shrines };
        const persist_4: boolean;
        export { persist_4 as persist };
        const orbs_7: number;
        export { orbs_7 as orbs };
        const chargers_7: boolean;
        export { chargers_7 as chargers };
        const notorches_7: boolean;
        export { notorches_7 as notorches };
        const heart_7: boolean;
        export { heart_7 as heart };
        const specialtiles_7: boolean;
        export { specialtiles_7 as specialtiles };
        const shortcut_7: boolean;
        export { shortcut_7 as shortcut };
        const enemies_7: boolean;
        export { enemies_7 as enemies };
        const nojail_7: boolean;
        export { nojail_7 as nojail };
        const nokeys_7: boolean;
        export { nokeys_7 as nokeys };
        const nostairs_7: boolean;
        export { nostairs_7 as nostairs };
        const placeDoors_3: boolean;
        export { placeDoors_3 as placeDoors };
        const notraps_7: boolean;
        export { notraps_7 as notraps };
        const noClutter_6: boolean;
        export { noClutter_6 as noClutter };
        const nobrick_4: boolean;
        export { nobrick_4 as nobrick };
        const nolore_6: boolean;
        export { nolore_6 as nolore };
        const noboring_4: boolean;
        export { noboring_4 as noboring };
        export const noSetpiece: boolean;
    }
    namespace TestTile {
        const name_8: string;
        export { name_8 as name };
        const noWear_5: boolean;
        export { noWear_5 as noWear };
        const bossroom_8: boolean;
        export { bossroom_8 as bossroom };
        const width_8: number;
        export { width_8 as width };
        const height_8: number;
        export { height_8 as height };
        const alwaysRegen_3: boolean;
        export { alwaysRegen_3 as alwaysRegen };
        const setpieces_8: {};
        export { setpieces_8 as setpieces };
        const genType_8: string;
        export { genType_8 as genType };
        const spawns_8: boolean;
        export { spawns_8 as spawns };
        const chests_8: boolean;
        export { chests_8 as chests };
        const shrines_8: boolean;
        export { shrines_8 as shrines };
        const orbs_8: number;
        export { orbs_8 as orbs };
        const chargers_8: boolean;
        export { chargers_8 as chargers };
        const notorches_8: boolean;
        export { notorches_8 as notorches };
        const heart_8: boolean;
        export { heart_8 as heart };
        const specialtiles_8: boolean;
        export { specialtiles_8 as specialtiles };
        const shortcut_8: boolean;
        export { shortcut_8 as shortcut };
        const enemies_8: boolean;
        export { enemies_8 as enemies };
        const nojail_8: boolean;
        export { nojail_8 as nojail };
        const nokeys_8: boolean;
        export { nokeys_8 as nokeys };
        const nostairs_8: boolean;
        export { nostairs_8 as nostairs };
        const nostartstairs_2: boolean;
        export { nostartstairs_2 as nostartstairs };
        const notraps_8: boolean;
        export { notraps_8 as notraps };
        const noClutter_7: boolean;
        export { noClutter_7 as noClutter };
        const nobrick_5: boolean;
        export { nobrick_5 as nobrick };
        const nolore_7: boolean;
        export { nolore_7 as nolore };
        const noboring_5: boolean;
        export { noboring_5 as noboring };
    }
    namespace JourneyFloor {
        const name_9: string;
        export { name_9 as name };
        const Title_6: string;
        export { Title_6 as Title };
        const bossroom_9: boolean;
        export { bossroom_9 as bossroom };
        const prune_2: boolean;
        export { prune_2 as prune };
        const width_9: number;
        export { width_9 as width };
        const height_9: number;
        export { height_9 as height };
        const nostartstairs_3: boolean;
        export { nostartstairs_3 as nostartstairs };
        const skin_5: string;
        export { skin_5 as skin };
        const useDefaultMusic_1: boolean;
        export { useDefaultMusic_1 as useDefaultMusic };
        const lightParams_5: string;
        export { lightParams_5 as lightParams };
        export namespace torchreplace_1 {
            const sprite_1: string;
            export { sprite_1 as sprite };
            const unlitsprite_1: string;
            export { unlitsprite_1 as unlitsprite };
            const brightness_2: number;
            export { brightness_2 as brightness };
        }
        export { torchreplace_1 as torchreplace };
        const setpieces_9: {};
        export { setpieces_9 as setpieces };
        const genType_9: string;
        export { genType_9 as genType };
        const spawns_9: boolean;
        export { spawns_9 as spawns };
        const chests_9: boolean;
        export { chests_9 as chests };
        const shrines_9: boolean;
        export { shrines_9 as shrines };
        const orbs_9: number;
        export { orbs_9 as orbs };
        const chargers_9: boolean;
        export { chargers_9 as chargers };
        const notorches_9: boolean;
        export { notorches_9 as notorches };
        const heart_9: boolean;
        export { heart_9 as heart };
        const specialtiles_9: boolean;
        export { specialtiles_9 as specialtiles };
        const shortcut_9: boolean;
        export { shortcut_9 as shortcut };
        const enemies_9: boolean;
        export { enemies_9 as enemies };
        const nojail_9: boolean;
        export { nojail_9 as nojail };
        const nokeys_9: boolean;
        export { nokeys_9 as nokeys };
        const nolore_8: boolean;
        export { nolore_8 as nolore };
        const nostairs_9: boolean;
        export { nostairs_9 as nostairs };
        const notraps_9: boolean;
        export { notraps_9 as notraps };
        const noClutter_8: boolean;
        export { noClutter_8 as noClutter };
    }
    namespace ShopStart {
        const name_10: string;
        export { name_10 as name };
        const Title_7: string;
        export { Title_7 as Title };
        const skiptunnel_2: boolean;
        export { skiptunnel_2 as skiptunnel };
        const bossroom_10: boolean;
        export { bossroom_10 as bossroom };
        const persist_5: boolean;
        export { persist_5 as persist };
        const width_10: number;
        export { width_10 as width };
        const height_10: number;
        export { height_10 as height };
        const skin_6: string;
        export { skin_6 as skin };
        const useDefaultMusic_2: boolean;
        export { useDefaultMusic_2 as useDefaultMusic };
        const lightParams_6: string;
        export { lightParams_6 as lightParams };
        export namespace torchreplace_2 {
            const sprite_2: string;
            export { sprite_2 as sprite };
            const unlitsprite_2: string;
            export { unlitsprite_2 as unlitsprite };
            const brightness_3: number;
            export { brightness_3 as brightness };
        }
        export { torchreplace_2 as torchreplace };
        const noSetpiece_1: boolean;
        export { noSetpiece_1 as noSetpiece };
        const setpieces_10: {};
        export { setpieces_10 as setpieces };
        const alwaysRegen_4: boolean;
        export { alwaysRegen_4 as alwaysRegen };
        const genType_10: string;
        export { genType_10 as genType };
        const spawns_10: boolean;
        export { spawns_10 as spawns };
        const chests_10: boolean;
        export { chests_10 as chests };
        const shrines_10: boolean;
        export { shrines_10 as shrines };
        const orbs_10: number;
        export { orbs_10 as orbs };
        const chargers_10: boolean;
        export { chargers_10 as chargers };
        const notorches_10: boolean;
        export { notorches_10 as notorches };
        const heart_10: boolean;
        export { heart_10 as heart };
        const specialtiles_10: boolean;
        export { specialtiles_10 as specialtiles };
        const shortcut_10: boolean;
        export { shortcut_10 as shortcut };
        const enemies_10: boolean;
        export { enemies_10 as enemies };
        const nojail_10: boolean;
        export { nojail_10 as nojail };
        const nokeys_10: boolean;
        export { nokeys_10 as nokeys };
        const nolore_9: boolean;
        export { nolore_9 as nolore };
        const nostairs_10: boolean;
        export { nostairs_10 as nostairs };
        const notraps_10: boolean;
        export { notraps_10 as notraps };
        const noClutter_9: boolean;
        export { noClutter_9 as noClutter };
    }
    namespace Tutorial {
        const name_11: string;
        export { name_11 as name };
        const bossroom_11: boolean;
        export { bossroom_11 as bossroom };
        const width_11: number;
        export { width_11 as width };
        const height_11: number;
        export { height_11 as height };
        const setpieces_11: {};
        export { setpieces_11 as setpieces };
        const genType_11: string;
        export { genType_11 as genType };
        const spawns_11: boolean;
        export { spawns_11 as spawns };
        const chests_11: boolean;
        export { chests_11 as chests };
        const shrines_11: boolean;
        export { shrines_11 as shrines };
        const orbs_11: number;
        export { orbs_11 as orbs };
        const chargers_11: boolean;
        export { chargers_11 as chargers };
        const notorches_11: boolean;
        export { notorches_11 as notorches };
        const heart_11: boolean;
        export { heart_11 as heart };
        const specialtiles_11: boolean;
        export { specialtiles_11 as specialtiles };
        const shortcut_11: boolean;
        export { shortcut_11 as shortcut };
        const enemies_11: boolean;
        export { enemies_11 as enemies };
        const nojail_11: boolean;
        export { nojail_11 as nojail };
        const nokeys_11: boolean;
        export { nokeys_11 as nokeys };
        const nolore_10: boolean;
        export { nolore_10 as nolore };
        const nostairs_11: boolean;
        export { nostairs_11 as nostairs };
        const notraps_11: boolean;
        export { notraps_11 as notraps };
        const noClutter_10: boolean;
        export { noClutter_10 as noClutter };
    }
}
declare let KDJourneyList: string[];
declare namespace KDJourneyListSkin {
    const Random_1: string;
    export { Random_1 as Random };
    export const Harder: string;
    export const Temple: string;
    export const Explorer: string;
    export const Doll: string;
}
declare namespace KinkyDungeonCreateMapGenType {
    export function Room(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export function JourneyFloor_1(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export { JourneyFloor_1 as JourneyFloor };
    export function ShopStart_1(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export { ShopStart_1 as ShopStart };
    export function ElevatorRoom_2(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export { ElevatorRoom_2 as ElevatorRoom };
    export function TestTile_1(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export { TestTile_1 as TestTile };
    export function Tutorial_1(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export { Tutorial_1 as Tutorial };
    export function Tunnel_1(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export { Tunnel_1 as Tunnel };
    export function PerkRoom_1(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export { PerkRoom_1 as PerkRoom };
    export function Chamber(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export function Maze(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export function Caldera_2(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export { Caldera_2 as Caldera };
    export function TileMaze(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export function NarrowMaze(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export function DollRoom_1(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export { DollRoom_1 as DollRoom };
    export function DemonTransition_2(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export { DemonTransition_2 as DemonTransition };
    export function Dollmaker(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
    export function Warden(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
}
interface KDLair {
    Name: string;
    RoomType: string;
    OwnerNPC?: number;
}
interface KDPersistentNPC {
    Name: string;
    id: number;
    entity: entity;
}
declare let KDPersonalAlt: {
    [_: string]: KDLair;
};
declare let KDPersistentNPCs: {
    [_: string]: KDPersistentNPC;
};
declare function KDGenerateLairNameFromEnemy(RoomType: string, enemy: entity): string;
declare function KDGetPersistentNPC(enemy: entity): KDPersistentNPC;
/**
 *
 * @param {enemy} Enemy
 * @param {entity} e
 * @param {number} chanceBoost
 * @returns {any}
 */
declare function KDProcessCustomPatron(Enemy: enemy, e: entity, chanceBoost: number): any;
/**
 *
 * @param {any[]} pets
 * @param {entity} e
 * @param {number} index
 * @returns {any}
 */
declare function KDProcessCustomPatronPet(pets: any[], e: entity, index: number): any;
declare let KinkyDungeonBones: {};
declare let KDPatronAdventurers: any[];
declare let KDPatronCustomEnemies: Map<string, {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
}[] | {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
    pets: {
        Frog: {
            name: string;
            color: string;
            prisoner: boolean;
            free: boolean;
            customPlayLine: string;
            customIntro: string;
            customSprite: string;
        }[];
    };
}[]>;
declare let KDPatronsSpecial: {
    "Anonymous ": number;
    cyberjoel: number;
    "finn ": number;
    "Samantha Lear": number;
    "Private ": number;
    "Chet Vargas": number;
    "Siegfried K\u00FCbler": number;
    Song: number;
    "The-Fisher-King": number;
    Churro: number;
    "Laioken ": number;
    "Wyatt Wintersoul": number;
    "Dex\u266A ": number;
    "Anthony Royle": number;
    "Shogo ": number;
    "Gamefan ": number;
    "Blox ": number;
    "Jerome Peterson": number;
    "selly-grim ": number;
    "Alexis Octavia": number;
    "Noxgarm ": number;
    Slacker: number;
    "Hellgete ": number;
    "Flame ": number;
    "WATA ": number;
    FrenzyFlame: number;
    "Kieraakari ": number;
    Loudest_Quiet_Person: number;
    Rest: number;
    "atetete ": number;
    "Mechio ": number;
    "Dazman1234 ": number;
    Thefabulousglaceon: number;
    Rika: number;
    "0xA4C1B842": number;
    "LukeB ": number;
    "devan ": number;
    Physicsphail: number;
    Miro: number;
    "Loony ": number;
    WhiteSniper: number;
    Thatguu: number;
    "Somprad ": number;
    "Geng114514 ": number;
    "John  Toenniessen": number;
    "Cat Hawke": number;
    Míša: number;
    "RappyTheToy ": number;
    Diablo200: number;
    "Cerb ": number;
    "isaiah lewis": number;
    Mellenia: number;
    LordFabricator: number;
    "Zero K": number;
    "Dakra ": number;
    "Victor ": number;
    "damit damit": number;
    "nnm711 ": number;
    Dragokahn: number;
    Meekohi: number;
    "Phoenix ": number;
    "zipidyzap ": number;
    Cera: number;
    "CuvyanTaylor ": number;
    "anton allison": number;
    "Shrimpy ": number;
    "Tatsuya Shiba": number;
    "Snekus ": number;
    nuzzels: number;
    "Minescence ": number;
    "HanQing Zhao": number;
    "James Kirkman": number;
    "OTKTamashii ": number;
    "darklink11 ": number;
    Hannes: number;
    "Arentios ": number;
    Nymjii: number;
    Linex: number;
    "Mister Mythe": number;
    "CMDR Salen": number;
    "bl ah": number;
    Salmon: number;
    Trinan: number;
    sqrt10pi: number;
    "hopefast ": number;
    jeepk36: number;
    Shakymunch: number;
    Samsy: number;
    "Pyros51 ": number;
    Aussie895: number;
    Hungvipbcsok: number;
    "hideki hirose": number;
    "Girador ": number;
    "Traynfreek ": number;
    GRASS: number;
    "Heavy Blues": number;
    "Pyron ": number;
    "Kritsanapong Jarutatpimol": number;
    "Hanqing Zhao": number;
    "Yagami Yami": number;
    "Wossa ": number;
    FlameTail: number;
    "\u706B\u62AB\u85A9 \u6C34": number;
    "Sewdah nim": number;
    Crimson: number;
    X27: number;
    Nyarlato: number;
    Nightkin: number;
    Sylicix: number;
    "Null Fame": number;
    "AdventCirno ": number;
    "Sera The Crocsune": number;
    "Masaki Hara": number;
    "Eric Rothman": number;
    "\uC601\uC2B9 \uBC15": number;
    "Claire Stephens": number;
    "koch ": number;
    Joecoolzx: number;
    "\u68EE \u97E9": number;
    "ComradeArmtyom ": number;
    "Hjake2 ": number;
    "Chen yu": number;
    Sinohisaki: number;
    "linlizheng ": number;
    john1304: number;
    Zora: number;
    "suddys ": number;
    "Robert Gomez": number;
    "\u4EA6\u658C \u9673": number;
    Feltenix: number;
    "Aika ": number;
    sCaREaGle: number;
    "Mike Salot": number;
    "Roger Gamer": number;
};
declare let KDPatrons: string[];
/**
 *
 * @param {number} count
 * @param {Record<string, MapMod>} mods
 * @param {KDJourneySlot} slot
 * @returns {MapMod[]}
 */
declare function KDGetMapGenList(count: number, mods: Record<string, MapMod>, slot: KDJourneySlot): MapMod[];
/**
 * @type {Record<string, MapMod>}
 */
declare let KDMapMods: Record<string, MapMod>;
/**
 * @param {KDJourneySlot} slot
 * @param {boolean} side
 * @param {string[]} ignore
 * @returns {KDSideRoom}
 */
declare function KDGetSideRoom(slot: KDJourneySlot, side: boolean, ignore: string[]): KDSideRoom;
/**
 * @type {Record<string, KDSideRoom>}
 */
declare let KDSideRooms: Record<string, KDSideRoom>;
declare function KinkyDungeonBossFloor(Floor: any): {
    boss: string;
    bossroom: boolean;
    width: number;
    height: number;
    setpieces: {
        GuaranteedCell: number;
        FuukaAltar: number;
    };
    genType: string;
    spawns: boolean;
    chests: boolean;
    shrines: boolean;
    chargers: boolean;
    torches: boolean;
    heart: boolean;
    specialtiles: boolean;
    shortcut: boolean;
    enemies: boolean;
    nokeys: boolean;
    nojail: boolean;
    makeMain: boolean;
    noQuests: boolean;
    escapeMethod: string;
    forceCheckpoint: string;
} | {
    boss: string;
    bossroom: boolean;
    jailType: string;
    guardType: string;
    width: number;
    height: number;
    setpieces: {};
    genType: string;
    spawns: boolean;
    chests: boolean;
    shrines: boolean;
    noWear: boolean;
    chargers: boolean;
    notorches: boolean;
    heart: boolean;
    specialtiles: boolean;
    shortcut: boolean;
    enemies: boolean;
    nokeys: boolean;
    nojail: boolean;
    noClutter: boolean;
    nostairs: boolean;
    nostartstairs: boolean;
    nobrick: boolean;
    nolore: boolean;
    skin: string;
    noboring: boolean;
    makeMain: boolean;
    noQuests: boolean;
    escapeMethod: string;
    forceCheckpoint: string;
};
declare namespace bosses {
    namespace Fuuka {
        const boss: string;
        const bossroom: boolean;
        const width: number;
        const height: number;
        namespace setpieces {
            const GuaranteedCell: number;
            const FuukaAltar: number;
        }
        const genType: string;
        const spawns: boolean;
        const chests: boolean;
        const shrines: boolean;
        const chargers: boolean;
        const torches: boolean;
        const heart: boolean;
        const specialtiles: boolean;
        const shortcut: boolean;
        const enemies: boolean;
        const nokeys: boolean;
        const nojail: boolean;
        const makeMain: boolean;
        const noQuests: boolean;
        const escapeMethod: string;
        const forceCheckpoint: string;
    }
    namespace Dollmaker {
        const boss_1: string;
        export { boss_1 as boss };
        const bossroom_1: boolean;
        export { bossroom_1 as bossroom };
        export const jailType: string;
        export const guardType: string;
        const width_1: number;
        export { width_1 as width };
        const height_1: number;
        export { height_1 as height };
        const setpieces_1: {};
        export { setpieces_1 as setpieces };
        const genType_1: string;
        export { genType_1 as genType };
        export const musicParams: string;
        const spawns_1: boolean;
        export { spawns_1 as spawns };
        const chests_1: boolean;
        export { chests_1 as chests };
        const shrines_1: boolean;
        export { shrines_1 as shrines };
        export const noWear: boolean;
        const chargers_1: boolean;
        export { chargers_1 as chargers };
        export const notorches: boolean;
        const heart_1: boolean;
        export { heart_1 as heart };
        const specialtiles_1: boolean;
        export { specialtiles_1 as specialtiles };
        const shortcut_1: boolean;
        export { shortcut_1 as shortcut };
        const enemies_1: boolean;
        export { enemies_1 as enemies };
        const nokeys_1: boolean;
        export { nokeys_1 as nokeys };
        const nojail_1: boolean;
        export { nojail_1 as nojail };
        export const noClutter: boolean;
        export const nostairs: boolean;
        export const nostartstairs: boolean;
        export const nobrick: boolean;
        export const nolore: boolean;
        export const skin: string;
        export const noboring: boolean;
        const makeMain_1: boolean;
        export { makeMain_1 as makeMain };
        const noQuests_1: boolean;
        export { noQuests_1 as noQuests };
        const escapeMethod_1: string;
        export { escapeMethod_1 as escapeMethod };
        const forceCheckpoint_1: string;
        export { forceCheckpoint_1 as forceCheckpoint };
    }
    namespace TheWarden {
        const boss_2: string;
        export { boss_2 as boss };
        const bossroom_2: boolean;
        export { bossroom_2 as bossroom };
        const jailType_1: string;
        export { jailType_1 as jailType };
        const guardType_1: string;
        export { guardType_1 as guardType };
        const width_2: number;
        export { width_2 as width };
        const height_2: number;
        export { height_2 as height };
        const setpieces_2: {};
        export { setpieces_2 as setpieces };
        const genType_2: string;
        export { genType_2 as genType };
        const spawns_2: boolean;
        export { spawns_2 as spawns };
        const chests_2: boolean;
        export { chests_2 as chests };
        const shrines_2: boolean;
        export { shrines_2 as shrines };
        const noWear_1: boolean;
        export { noWear_1 as noWear };
        const chargers_2: boolean;
        export { chargers_2 as chargers };
        const notorches_1: boolean;
        export { notorches_1 as notorches };
        const heart_2: boolean;
        export { heart_2 as heart };
        const specialtiles_2: boolean;
        export { specialtiles_2 as specialtiles };
        const shortcut_2: boolean;
        export { shortcut_2 as shortcut };
        const enemies_2: boolean;
        export { enemies_2 as enemies };
        const nokeys_2: boolean;
        export { nokeys_2 as nokeys };
        const nojail_2: boolean;
        export { nojail_2 as nojail };
        const noClutter_1: boolean;
        export { noClutter_1 as noClutter };
        const nostairs_1: boolean;
        export { nostairs_1 as nostairs };
        const nostartstairs_1: boolean;
        export { nostartstairs_1 as nostartstairs };
        const nobrick_1: boolean;
        export { nobrick_1 as nobrick };
        const nolore_1: boolean;
        export { nolore_1 as nolore };
        const skin_1: string;
        export { skin_1 as skin };
        const noboring_1: boolean;
        export { noboring_1 as noboring };
        const makeMain_2: boolean;
        export { makeMain_2 as makeMain };
        const noQuests_2: boolean;
        export { noQuests_2 as noQuests };
        const escapeMethod_2: string;
        export { escapeMethod_2 as escapeMethod };
        const forceCheckpoint_2: string;
        export { forceCheckpoint_2 as forceCheckpoint };
    }
}
declare function KDGetPerkCost(perk: any): any;
declare function KinkyDungeonGetStatPoints(Stats: any): number;
/**
 * Determine if a perk can be picked with a certain number of points remaining
 * @param {string} Stat
 * @param {number} [points]
 * @returns {boolean}
 */
declare function KinkyDungeonCanPickStat(Stat: string, points?: number): boolean;
/**
 * General validation for a perk
 * @param {KDPerk} stat
 * @returns {boolean}
 */
declare function KDValidatePerk(stat: KDPerk): boolean;
/**
 * @param {string} perk1
 * @param {string} perk2
 * @returns {boolean}
 * Determines if perk1 is blocked by another perk or in general */
declare function KDPerkBlocked(perk1: string, perk2: string): boolean;
declare function KinkyDungeonCanUnPickStat(Stat: any): boolean;
declare function KinkyDungeonDrawPerks(NonSelectable: any): boolean;
/**
 *
 * @param {any[]} list
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number} max
 * @param {number} fontSize
 * @param {(any) => ((any) => boolean)} clickfnc
 * @param {string} prefix
 */
declare function drawVertList(list: any[], x: number, y: number, w: number, h: number, max: number, fontSize: number, clickfnc: (any: any) => (any: any) => boolean, prefix: string): void;
/**
 *
 * @param {any[]} list
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number} max
 * @param {number} fontSize
 * @param {(any) => ((any) => boolean)} clickfnc
 * @param {string} prefix
 * @param {boolean} reverse
 */
declare function drawHorizList(list: any[], x: number, y: number, w: number, h: number, max: number, fontSize: number, clickfnc: (any: any) => (any: any) => boolean, prefix: string, reverse: boolean): void;
/**
 *
 * @param {Record<string, boolean>} existing
 * @returns {string[]}
 */
declare function KDGetRandomPerks(existing: Record<string, boolean>, debuff: any): string[];
/**
 *
 * @param {string[]} perks
 * @returns {string[]}
 */
declare function KDGetPerkShrineBondage(perks: string[]): string[];
declare let KDDoorKnobChance: number;
declare let KDDoorKnobChanceArms: number;
declare let KDDoorAttractChance: number;
declare let KDDoorAttractChanceArms: number;
/** These weapons can get removed if you start the game with them*/
declare let kdStartWeapons: string[];
declare namespace KDPerkParams {
    const KDEnemyDamageMult: number;
    const KDEnemyResistBuff: number;
    const KDEnemyArmorBoost: number;
}
declare let KDCategoriesStart: {
    name: string;
    buffs: any[];
    debuffs: any[];
}[];
declare namespace KDPerkIcons {
    function Pacifist(): boolean;
    function BerserkerRage(): boolean;
    function BoundPower(): boolean;
    function UnstableMagic(): boolean;
    function BurningDesire(): boolean;
    function FrigidPersonality(): boolean;
    function ImmovableObject(): boolean;
    function GroundedInReality(): boolean;
    function LikeTheWind(): boolean;
    function LeastResistance(): boolean;
}
declare namespace KDPerkUpdateStats {
    export function Rigger(): void;
    export function Ticklish(): void;
    export function Stoic(): void;
    export function Lascivious(): void;
    export function Unperturbed(): void;
    export function PainTolerance(): void;
    export function Sticky(): void;
    export function EnemyResist(): void;
    export function BoundPower_1(): void;
    export { BoundPower_1 as BoundPower };
    export function BerserkerRage_1(): void;
    export { BerserkerRage_1 as BerserkerRage };
    export function Dodge(): void;
    export function StartShadow(): void;
    export function UnstableMagic_1(): void;
    export { UnstableMagic_1 as UnstableMagic };
    export function CommonLatex(): void;
    export function CommonLeather(): void;
    export function CommonMaid(): void;
    export function CommonWolf(): void;
    export function CommonDress(): void;
    export function CommonFuuka(): void;
    export function CommonWarden(): void;
    export function CommonCyber(): void;
    export function CommonExp(): void;
    export function CommonKitty(): void;
    export function CommonToyPleasure(): void;
    export function CommonToyEdge(): void;
    export function CommonToyDeny(): void;
    export function CommonToyTease(): void;
}
/**
 * @type {Record<string, () => string>}
 */
declare let KDPerkCount: Record<string, () => string>;
/**
 * @type {Record<string, KDPerk>}
 */
declare let KinkyDungeonStatsPresets: Record<string, KDPerk>;
declare namespace KDPerkStart {
    export function Studious(): void;
    export function Submissive(): void;
    export function Pacifist_1(): void;
    export { Pacifist_1 as Pacifist };
    export function Rigger_1(): void;
    export { Rigger_1 as Rigger };
    export function Unchained(): void;
    export function FuukaCollar(): void;
    export function WardenBelt(): void;
    export function Prisoner(): void;
    export function Slayer(): void;
    export function Conjurer(): void;
    export function Magician(): void;
    export function Brawler(): void;
    export function NovicePet(): void;
    export function SelfBondage(): void;
    export function HeelTraining(): void;
    export function HeadStartHeels(): void;
    export function StartLatex(): void;
    export function DollmakerVisor(): void;
    export function DollmakerMask(): void;
    export function StartCyberDoll(): void;
    export function StartMaid(): void;
    export function StartWolfgirl(): void;
    export function StartObsidian(): void;
    export function Hogtied(): void;
    export function Bandit(): void;
    export function Stranger(): void;
    export function WrongNeighborhood(): void;
    export function Cursed(): void;
    export function MC_Trainee(): void;
    export function MC_Wizard(): void;
    export function MC_Rogue(): void;
    export function MC_Peasant(): void;
    export function MC_Fighter(): void;
}
declare let KDPerksFilter: string;
declare let KDPerksButtonWidth: number;
declare let KDPerksButtonWidthPad: number;
declare let KDPerksButtonHeight: number;
declare let KDPerksButtonHeightPad: number;
declare let KDPerksXPad: number;
declare let KDPerksYPad: number;
declare let KDPerksYStart: number;
declare let KDPerksXStart: number;
declare let KDPerksMaxY: number;
declare let KDPerksScroll: number;
declare let KDPerksIndex: number;
declare let KDPerksIndexUI: number;
declare let KDPerksIndexUIWeight: number;
declare let KDCategories: any[];
/**
 * @type {Record<mapKey,floorParams>}
 */
declare const KinkyDungeonMapParams: Record<mapKey, floorParams>;
declare function KinkyDungeonCheckProjectileClearance(xx: any, yy: any, x2: any, y2: any): boolean;
declare function KinkyDungeonCheckPathCount(x1: any, y1: any, x2: any, y2: any, allowBars: any, blockEnemies: any, maxFails: any, blockOnlyLOSBlock: any): number;
declare function KinkyDungeonCheckPath(x1: any, y1: any, x2: any, y2: any, allowBars: any, blockEnemies: any, maxFails: number, blockOnlyLOSBlock: any): boolean;
declare function KinkyDungeonResetFog(): void;
declare function KinkyDungeonMakeBrightnessMap(width: any, height: any, mapBrightness: any, Lights: any, delta: any): void;
/** Averages two hex colors according to weights w1 and w2
 * @param {number} color1
 * @param {number} color2
 * @param {number} w1 - Weight of color1
 * @param {number} w2 - Weight of color2
 * @returns {number}
 */
declare function KDAvgColor(color1: number, color2: number, w1: number, w2: number): number;
declare function KinkyDungeonMakeVisionMap(width: any, height: any, Viewports: any, Lights: any, delta: any, mapBrightness: any): void;
declare function KDDrawFog(CamX: any, CamY: any, CamX_offset: any, CamY_offset: any, CamX_offsetVis: any, CamY_offsetVis: any): void;
declare function KDMinimapWidth(): number;
declare function KDMinimapHeight(): number;
declare function KDUpdateMinimapTarget(force?: boolean): void;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number} scale
 * @param {number} alpha
 * @param {boolean} gridborders
 * @param {boolean} blackMap
 */
declare function KDRenderMinimap(x: number, y: number, w: number, h: number, scale: number, alpha: number, gridborders: boolean, blackMap: boolean): void;
/**
 * Allows fog of war to be rendered
 */
declare function KDAllowFog(): boolean;
declare let KDMinimapIcons: {
    G: (x: any, y: any) => string;
    O: (x: any, y: any) => string;
    S: (x: any, y: any) => string;
    s: (x: any, y: any) => string;
    H: (x: any, y: any) => string;
    A: (x: any, y: any) => "UI/MiniMap/ShrineQuest.png" | "UI/MiniMap/ShrineMana.png" | "UI/MiniMap/ShrineManaQuest.png";
    '=': (x: any, y: any) => string;
    '+': (x: any, y: any) => string;
    D: (x: any, y: any) => string;
    d: (x: any, y: any) => string;
    B: (x: any, y: any) => string;
    b: (x: any, y: any) => string;
    g: (x: any, y: any) => string;
};
declare let KDRedrawFog: number;
declare let KDRedrawMM: number;
declare let KinkyDungeonSeeAll: boolean;
declare let KDVisionBlockers: Map<any, any>;
declare let KDLightBlockers: Map<any, any>;
declare let KDPlayerLight: number;
declare let KDMapBrightnessMult: number;
declare let KDLightCropValue: number;
declare let KDExpandMinimap: boolean;
declare let KDMinimapScale: number;
declare let KDMinimapScaleBig: number;
declare let KDMinimapW: number;
declare let KDMinimapH: number;
declare let KDMinimapBaseSize: number;
declare let KDMinimapExpandedSize: number;
declare let KDMinimapExpandedSizeTick: number;
declare let KDMinimapWBig: number;
declare let KDMinimapHBig: number;
declare let KDMinimapAlpha: number;
declare let KDMinimapExpandedZoom: number;
declare let KDMinimapExpandedZoomTick: number;
declare let KDMinimapWCurrent: number;
declare let KDMinimapHCurrent: number;
declare let KDMinimapWTarget: number;
declare let KDMinimapHTarget: number;
declare function KDQuestList(count: any, mods: any, RoomType: any, MapMod: any, data: any): any[];
declare function KDQuestWorldgenStart(quests: any): void;
declare function KDQuestTick(quests: any, delta: any): void;
declare function KDRemoveQuest(quest: any): void;
declare function KDAddQuest(quest: any): void;
declare function KDHasQuest(quest: any): boolean;
declare function KinkyDungeonDrawQuest(): void;
declare function KDGetQuestData(quest: any): any;
declare function KDSetQuestData(quest: any, data: any): void;
/**
 *
 * @param {string} Name
 * @param {string} Icon
 * @param {string} Goddess
 * @param {(Goddess, Flag) => void} spawnFunction
 * @param {number} Rep
 * @param {number} restraintsCountMult
 * @param {string[]} restraintsTags
 * @returns {KDQuest}
 */
declare function KDGenQuestTemplate(Name: string, Icon: string, Goddess: string, spawnFunction: (Goddess: any, Flag: any) => void, restraintsCountMult: number, restraintsTags: string[], Loot: any, Rep?: number): KDQuest;
declare let QuestCompleteWeight: number;
declare let KDDefaultGoddessQuestRep: number;
/**
 * @type {Record<string, KDQuest>}
 */
declare let KDQuests: Record<string, KDQuest>;
declare let KDQuestsIndex: number;
declare let KDQuestsVisible: number;
declare let KDMaxQuests: number;
/**
 * @param {item[]} list
 * @param {boolean} excludeBound - "bound weapons", i.e. magic knives and weapons in really old nomenclature back when there were like 4 weapons
 */
declare function KinkyDungeonAddLostItems(list: item[], excludeBound: boolean): void;
declare function KinkyDungeonLoot(Level: any, Index: any, Type: any, roll: any, tile: any, returnOnly: any, noTrap: any, minWeight?: number, minWeightFallback?: boolean): any;
declare function KinkyDungeonLootEvent(Loot: any, Floor: any, Replacemsg: any, Lock: any): any;
declare function KinkyDungeonAddGold(value: any): void;
declare function KDSpawnLootTrap(x: any, y: any, trap: any, mult: any, duration: any): void;
declare function KDGenChestTrap(guaranteed: any, x: any, y: any, chestType: any, lock: any, noTrap: any): any;
declare function KDTriggerLoot(Loot: any, Type: any): void;
/**
 *
 * @param {Record<string, object>} WeightList - contains values that have a weight param
 */
declare function KDGetWeightedString(WeightList: Record<string, object>, params: any): string;
/**
 * @param {string[]} tags - Type of restraint
 * @returns {boolean}
 */
declare function KDCanCurse(tags: string[]): boolean;
/**
 * Helper function used to summon cursed epicenters
 * @param {number} x
 * @param {number} y
 */
declare function KDSummonCurseTrap(x: number, y: number): void;
/** @type {item[]} */
declare let KinkyDungeonLostItems: item[];
declare let KDTightRestraintsMod: number;
declare let KDTightRestraintsMult: number;
declare let KDPartialLootRecoveryChance: number;
declare let cursedRestraintCache: {};
declare let KinkyDungeonSpecialLoot: boolean;
declare let KinkyDungeonLockedLoot: boolean;
declare namespace KDChestTrapWeights {
    namespace metalTrap {
        function weight(): number;
        const mult: number;
        const time: number;
    }
    namespace leatherTrap {
        export function weight_1(): number;
        export { weight_1 as weight };
        const mult_1: number;
        export { mult_1 as mult };
        const time_1: number;
        export { time_1 as time };
    }
    namespace latexTrap {
        export function weight_2(): number;
        export { weight_2 as weight };
        const mult_2: number;
        export { mult_2 as mult };
        const time_2: number;
        export { time_2 as time };
    }
    namespace ropeTrap {
        export function weight_3(): number;
        export { weight_3 as weight };
        const mult_3: number;
        export { mult_3 as mult };
        const time_3: number;
        export { time_3 as time };
    }
    namespace illusionTrap {
        export function weight_4(): number;
        export { weight_4 as weight };
        const mult_4: number;
        export { mult_4 as mult };
    }
    namespace skeletonTrap {
        export function weight_5(): 0 | 300;
        export { weight_5 as weight };
        const mult_5: number;
        export { mult_5 as mult };
    }
    namespace zombieTrap {
        export function weight_6(): 0 | 300;
        export { weight_6 as weight };
        const mult_6: number;
        export { mult_6 as mult };
    }
    namespace mummyTrap {
        export function weight_7(): 0 | 300;
        export { weight_7 as weight };
        const mult_7: number;
        export { mult_7 as mult };
    }
    namespace mushroomTrap {
        export function weight_8(): 0 | 300;
        export { weight_8 as weight };
        const mult_8: number;
        export { mult_8 as mult };
    }
}
declare namespace KDTrapChestType {
    function _default(guaranteed: any, x: any, y: any, chestType: any, lock: any, noTrap: any): {
        trap: string;
        mult: any;
        time: any;
    };
    export { _default as default };
    export function shadow(guaranteed: any, x: any, y: any, chestType: any, lock: any, noTrap: any): {
        trap: string;
        mult: number;
        duration: number;
        time: number;
    };
}
/**
 * Refreshes the enemies map
 */
declare function KinkyDungeonRefreshEnemiesCache(): void;
/**
 *
 * @param {string} Name
 * @returns {enemy}
 */
declare function KinkyDungeonGetEnemyByName(Name: string): enemy;
declare function KinkyDungeonGetEnemyByName(name: string): enemy;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string[]} [filter]
 * @param {boolean} [any]
 * @param {boolean} [qualified] - Exclude jails where the player doesnt meet conditions
 * @returns {KDJailPoint}
 */
declare function KinkyDungeonNearestJailPoint(x: number, y: number, filter?: string[], any?: boolean, qualified?: boolean): KDJailPoint;
declare function KDLockNearbyJailDoors(x: any, y: any): void;
/**
 *
 * @param {string[]} [filter]
 * @param {{x: number, y: number, type: string, radius: number}[]} [exclude]
 * @returns {{x: number, y: number, type: string, radius: number}}
 */
declare function KinkyDungeonRandomJailPoint(filter?: string[], exclude?: {
    x: number;
    y: number;
    type: string;
    radius: number;
}[]): {
    x: number;
    y: number;
    type: string;
    radius: number;
};
declare function KinkyDungeonNearestPatrolPoint(x: any, y: any): number;
/**
 *
 * @param {string} Flag
 * @param {number} Duration - In turns
 * @param {number} [Floors] - Optional, makes this flag expire in this many floors
 */
declare function KinkyDungeonSetFlag(Flag: string, Duration: number, Floors?: number): void;
declare function KinkyDungeonUpdateFlags(delta: any): void;
declare function KinkyDungeonGetPatrolPoint(index: any, radius: any, Tiles: any): {
    x: number;
    y: number;
};
/**
 *
 * @param {entity} enemy
 * @param {number} [override]
 * @returns {number}
 */
declare function KDGetBindAmp(enemy: entity, override?: number): number;
/**
 * Bound and unable to do anything
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDHelpless(enemy: entity): boolean;
/**
 * Bound with no way out
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDIsHopeless(enemy: entity): boolean;
declare function KinkyDungeonNearestPlayer(enemy: any, requireVision: any, decoy: any, visionRadius: any, AI_Data: any): any;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDEnemyHidden(enemy: entity): boolean;
declare function KinkyDungeonInDanger(): boolean;
declare function KDAmbushAI(enemy: any): boolean;
declare function KinkyDungeonDrawEnemies(canvasOffsetX: any, canvasOffsetY: any, CamX: any, CamY: any): void;
/**
 *
 * @param {entity} enemy
 */
declare function KDDrawEnemySprite(board: any, enemy: entity, tx: any, ty: any, CamX: any, CamY: any, StaticView: any, zIndex?: number, id?: string): string;
/**
 *
 * @param {entity} Entity
 *
 */
declare function KDAnimEnemy(Entity: entity): {
    offX: number;
    offY: number;
};
/**
 *
 * @param {entity} enemy
 * @param {string} flag
 * @returns {boolean}
 */
declare function KDEnemyHasFlag(enemy: entity, flag: string): boolean;
declare function KinkyDungeonDrawEnemiesStatus(canvasOffsetX: any, canvasOffsetY: any, CamX: any, CamY: any): void;
declare function KinkyDungeonDrawEnemiesWarning(canvasOffsetX: any, canvasOffsetY: any, CamX: any, CamY: any): void;
declare function KinkyDungeonBar(x: any, y: any, w: any, h: any, value: any, foreground?: string, background?: string, orig?: any, origColor?: string, notches?: any, notchcolor?: string, notchbg?: string, zIndex?: number): void;
declare function KinkyDungeonBarTo(canvas: any, x: any, y: any, w: any, h: any, value: any, foreground?: string, background?: string, orig?: any, origColor?: string, notches?: any, notchcolor?: string, notchbg?: string, zIndex?: number): void;
/**
 *
 * @param {entity} enemy
 * @param {number} [playerDist]
 * @returns {boolean}
 */
declare function KDCanSeeEnemy(enemy: entity, playerDist?: number): boolean;
declare function KDMaxEnemyViewDist(enemy: any): number;
/**
 *
 * @param {entity} enemy
 * @returns {number}
 */
declare function KDGetEnemyStruggleMod(enemy: entity): number;
/**
 *
 * @param {entity} enemy
 * @param {number} vibe
 * @returns {number}
 */
declare function KDGetEnemyDistractRate(enemy: entity, vibe: number): number;
/**
 *
 * @param {entity} enemy
 * @param {number} vibe
 * @returns {number}
 */
declare function KDGetEnemyDistractionDamage(enemy: entity, vibe: number): number;
/**
 *
 * @param {entity} enemy
 * @returns {any}
 */
declare function KDGetEnemyReleaseDamage(enemy: entity): any;
/**
 *
 * @param {number} currentval
 * @param {number} targetval
 * @param {number} rate
 * @param {number} minrate - Minimum rate
 * @param {number} delta
 * @param {number} eps -epsilon, threshold for making the value eqyal exactly
 * @returns {number}
 */
declare function KDEaseValue(delta: number, currentval: number, targetval: number, rate: number, minrate: number, eps?: number): number;
/**
 *
 * @param {entity} enemy
 * @returns {number}
 */
declare function KDGetMaxShield(enemy: entity): number;
/**
 *
 * @param {entity} enemy
 * @returns {number}
 */
declare function KDGetShieldRegen(enemy: entity): number;
declare function KinkyDungeonDrawEnemiesHP(delta: any, canvasOffsetX: any, canvasOffsetY: any, CamX: any, CamY: any, CamXoffset: any, CamYoffset: any): void;
/**
 *
 * @param {entity} enemy
 * @param {number} offset
 * @returns {number}
 */
declare function KDDrawEnemyTooltip(enemy: entity, offset: number): number;
declare function KDGetColor(enemy: any): any;
/**
 *
 * @param {entity} enemy
 * @returns {boolean} Whether or not it was a Champion capture
 */
declare function KinkyDungeonCapture(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 */
declare function KDDropStolenItems(enemy: entity): void;
/**
 *
 * @param {entity} enemy
 * @param {number} E
 * @returns {boolean}
 */
declare function KinkyDungeonEnemyCheckHP(enemy: entity, E: number): boolean;
/**
 *
 * @param {entity} enemy
 */
declare function KDDropItems(enemy: entity): void;
/**
 *
 * @param {entity} Enemy
 * @returns {boolean} - If the NPC is eligible to use favors
 */
declare function KDFavorNPC(Enemy: entity): boolean;
/**
 *
 * @param {entity} Enemy
 * @returns {number} - Gets the favor with the enemy
 */
declare function KDGetFavor(Enemy: entity): number;
/**
 *
 * @param {entity} Enemy
 * @param {number} Amount
 */
declare function KDChangeFavor(Enemy: entity, Amount: number): void;
declare function KDAddFavor(Faction: any, Amount: any): void;
declare function KDModFavor(Faction: any, Amount: any): void;
declare function KinkyDungeonCheckLOS(enemy: any, player: any, distance: any, maxdistance: any, allowBlind: any, allowBars: any, maxFails: any): boolean;
declare function KinkyDungeonTrackSneak(enemy: any, delta: any, player: any, darkmult: any): number;
declare function KinkyDungeonMultiplicativeStat(Stat: any): number;
declare function KDBlockDodgeStat(Stat: any): number;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} dist
 * @param {entity} [hostileEnemy] - Select enemies hostile to this one
 * @param {boolean} [cheb] - use chebyshev distance
 * @param {entity} [nonhostileEnemy] - Select enemies not hostile to this one
 * @returns {entity[]}
 */
declare function KDNearbyEnemies(x: number, y: number, dist: number, hostileEnemy?: entity, cheb?: boolean, nonhostileEnemy?: entity): entity[];
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} dist
 * @returns {{x: number, y: number, tile: any}[]}
 */
declare function KDNearbyTiles(x: number, y: number, dist: number): {
    x: number;
    y: number;
    tile: any;
}[];
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} dist
 * @returns {{x: number, y: number, tile: any}[]}
 */
declare function KDNearbyMapTiles(x: number, y: number, dist: number): {
    x: number;
    y: number;
    tile: any;
}[];
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} dist
 * @param {entity} [neutralEnemy]
 * @returns {entity[]}
 */
declare function KDNearbyNeutrals(x: number, y: number, dist: number, neutralEnemy?: entity): entity[];
/**
 *
 * @param {*} avoidPlayer
 * @param {*} onlyPlayer
 * @param {*} Enemy
 * @param {*} playerDist
 * @param {*} minDist
 * @returns {{x: number, y: number}}
 */
declare function KinkyDungeonGetRandomEnemyPoint(avoidPlayer: any, onlyPlayer: any, Enemy: any, playerDist?: any, minDist?: any, ignoreOffLimits?: boolean): {
    x: number;
    y: number;
};
/**
 *
 * @param {*} criteria
 * @param {*} avoidPlayer
 * @param {*} onlyPlayer
 * @param {*} Enemy
 * @param {*} playerDist
 * @param {*} minDist
 * @returns {{x: number, y: number}}
 */
declare function KinkyDungeonGetRandomEnemyPointCriteria(criteria: any, avoidPlayer: any, onlyPlayer: any, Enemy: any, playerDist?: any, minDist?: any, ignoreOffLimits?: boolean): {
    x: number;
    y: number;
};
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {boolean} [allowNearPlayer]
 * @param {entity} [Enemy]
 * @param {boolean} [Adjacent]
 * @param {boolean} [ignoreOffLimits]
 * @param {(x: number, y: number) => boolean} [callback]
 * @returns {{x: number, y: number}}
 */
declare function KinkyDungeonGetNearbyPoint(x: number, y: number, allowNearPlayer?: boolean, Enemy?: entity, Adjacent?: boolean, ignoreOffLimits?: boolean, callback?: (x: number, y: number) => boolean): {
    x: number;
    y: number;
};
declare function KinkyDungeonSetEnemyFlag(enemy: any, flag: any, duration: any): void;
/**
 *
 * @param {entity} enemy
 * @param {number} delta
 */
declare function KinkyDungeonTickFlagsEnemy(enemy: entity, delta: number): void;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KinkyDungeonHasStatus(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KinkyDungeonIsStunned(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KinkyDungeonIsDisabled(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KinkyDungeonIsSlowed(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KinkyDungeonCanCastSpells(enemy: entity): boolean;
declare function KDCanBind(enemy: any): boolean;
declare function KDBoundEffects(enemy: any): 1 | 0 | 2 | 3 | 4;
declare function KinkyDungeonUpdateEnemies(maindelta: any, Allied: any): void;
declare function KDMakeHostile(enemy: any, timer: any): void;
/**
 * Makes an enemy vulnerable if you are behind them
 * @param {entity} enemy
 */
declare function KDCheckVulnerableBackstab(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {string}
 */
declare function KDGetAI(enemy: entity): string;
declare function KDAddThought(id: any, name: any, priority: any, duration: any): void;
declare function KDGetEnemyPlayLine(enemy: any): any;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDEnemyCanTalk(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @param {*} player
 * @param {number} delta
 * @param {number} visionMod
 * @param {item[]} playerItems
 * @returns {{idle: boolean, defeat: boolean, defeatEnemy: entity}}
 */
declare function KinkyDungeonEnemyLoop(enemy: entity, player: any, delta: number, visionMod: number, playerItems: item[]): {
    idle: boolean;
    defeat: boolean;
    defeatEnemy: entity;
};
declare function KinkyDungeonGetEnemyID(): number;
declare function KinkyDungeonGetSpellID(): number;
declare function KinkyDungeonGetItemID(): number;
declare function KinkyDungeonNoEnemy(x: any, y: any, Player: any): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDIsImmobile(enemy: entity, strict: any): boolean;
/**
 *
 * @param {entity} e - Target enemy
 * @param {entity} Enemy - Enemy trying to move
 * @returns
 */
declare function KinkyDungeonCanSwapWith(e: entity, Enemy: entity): boolean;
declare function KinkyDungeonNoEnemyExceptSub(x: any, y: any, Player: any, Enemy: any): boolean;
declare function KinkyDungeonEnemyAt(x: any, y: any): entity;
declare function KinkyDungeonEntityAt(x: any, y: any, requireVision: any, vx: any, vy: any): any;
declare function KinkyDungeonEnemyTryMove(enemy: any, Direction: any, delta: any, x: any, y: any, canSprint: any): boolean;
declare function KinkyDungeonEnemyTryAttack(enemy: any, player: any, Tiles: any, delta: any, x: any, y: any, points: any, replace: any, msgColor: any, usingSpecial: any, refreshWarningTiles: any, attack: any, MovableTiles: any): boolean;
declare function KinkyDungeonGetWarningTilesAdj(enemy: any): {
    x: number;
    y: number;
    visual_x: any;
    visual_y: any;
    scale: number;
}[];
/**
 * Returns whether or not the player can be pickpocketed
 * Current conditions are:
 *  - Player has less than 50 willpower
 * @param {entity} player
 * @returns {boolean}
 */
declare function KDCanPickpocketPlayer(player: entity): boolean;
declare function KDCanPickpocket(enemy: any): boolean;
declare function KinkyDungeonGetWarningTiles(dx: any, dy: any, range: any, width: any, forwardOffset: number, enemy: any): {
    x: number;
    y: number;
    visual_x: any;
    visual_y: any;
    scale: number;
}[];
/**
 *
 * @param {entity} enemy
 * @returns {{master: entity; dist: number; info: any;}}
 */
declare function KinkyDungeonFindMaster(enemy: entity): {
    master: entity;
    dist: number;
    info: any;
};
declare function KinkyDungeonEnemyCanMove(enemy: any, dir: any, MovableTiles: any, AvoidTiles: any, ignoreLocks: any, Tries: any): boolean;
/**
 *
 * @param {number} id
 * @returns {entity}
 */
declare function KinkyDungeonFindID(id: number): entity;
declare function KDDash(enemy: any, player: any, MovableTiles: any): {
    happened: number;
    Dash: boolean;
};
declare function KinkyDungeonSendEnemyEvent(Event: any, data: any): void;
/**
 *
 * @param {entity} enemy
 * @param {any} data
 * @param {boolean} aggressive
 * @returns {(enemy, AIData) => void}
 */
declare function KDGetIntentEvent(enemy: entity, data: any, play: any, allied: any, hostile: any, aggressive: boolean): (enemy: any, AIData: any) => void;
/**
 *
 * @param {entity} enemy
 * @param {any} target
 * @returns {{x: number, y: number, delta: number}}
 */
declare function KDGetDir(enemy: entity, target: any, func?: typeof KinkyDungeonGetDirectionRandom): {
    x: number;
    y: number;
    delta: number;
};
/**
 *
 * @param {entity} enemy
 * @returns {number}
 */
declare function KDPullResistance(enemy: entity): number;
/**
 *
 * @param {number} power
 * @param {entity} enemy
 * @param {boolean} allowNeg
 * @returns {number}
 */
declare function KDPushModifier(power: number, enemy: entity, allowNeg?: boolean): number;
/**
 *
 * @param {entity} enemy
 * @param {number} amount
 * @param {string} type
 * @param {any} Damage
 * @returns {*}
 */
declare function KDTieUpEnemy(enemy: entity, amount: number, type: string, Damage: any, Msg: any, Delay: any): any;
/**
 *
 * @param {entity} enemy
 * @param {number} struggleMod
 * @param {number} delta
 * @returns {any}
 */
declare function KDPredictStruggle(enemy: entity, struggleMod: number, delta: number): any;
/**
 * @param {entity} enemy - the enemy to check if the player can domme
 * @param {boolean} ignoreRelative - ignore the relative determinants
 * @returns {boolean}
 */
declare function KDCanDom(enemy: entity, ignoreRelative?: boolean): boolean;
/**
 * Returns true if any non-dominant activities are currently being performed on the player which compromises their ability to dominate
 * @returns {boolean}
 */
declare function KDPlayerIsNotDom(): boolean;
/**
 * Returns true if player has any level of bondage
 * @returns {boolean}
 */
declare function KDPlayerIsTied(): boolean;
/**
 * is this entity objectively subby
 * @param {entity} entity
 * @returns {boolean}
 */
declare function KDIsSubbyPersonality(entity: entity): boolean;
/**
 * is this entity objectively bratty
 * @param {entity} entity
 * @returns {boolean}
 */
declare function KDIsBrattyPersonality(entity: entity): boolean;
/**
 * Is this entity bratty to the player
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDIsBrat(enemy: entity): boolean;
/**
 * Captures helpless enemies near the enemy
 * @param {entity} enemy
 */
declare function KDCaptureNearby(enemy: entity): void;
/**
 *
 * @param {entity} enemy
 * @param {boolean} guaranteed
 * @returns {string}
 */
declare function KinkyDungeonGetLoadoutForEnemy(enemy: entity, guaranteed: boolean): string;
/**
 * Gets the text for a key, suffixed with the enemy faction or name if available. Otherwise falls back to just the key
 * @param {string} key - The base text key
 * @param {entity} enemy - The enemy
 * @param {boolean} useName - Whether to use the enemy name or faction
 * @returns {string}
 */
declare function KinkyDungeonGetTextForEnemy(key: string, enemy: entity, useName?: boolean): string;
declare function KDPlayerIsDefeated(): number;
declare function KDPlayerIsDisabled(): number | boolean;
declare function KDPlayerIsStunned(): number | boolean;
declare function KDPlayerIsImmobilized(): true | item;
declare function KDPlayerIsSlowed(): number | boolean;
declare function KDEnemyReallyAware(enemy: any, player: any): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {{suff: string, color: string}}
 */
declare function KDGetAwareTooltip(enemy: entity): {
    suff: string;
    color: string;
};
/**
 *
 * @param {string} lock
 * @returns {string}
 */
declare function KDProcessLock(lock: string): string;
/**
 *
 * @param {entity} enemy
 * @param {number} restMult
 */
declare function KDRestockRestraints(enemy: entity, restMult: number): void;
/**
 *
 * @param {entity} enemy
 * @param {number} restMult
 * @returns {number}
 */
declare function KDDetermineBaseRestCount(enemy: entity, restMult: number): number;
/**
 *
 * @param {entity} enemy
 * @param {number} restMult
 * @param {number} [count]
 */
declare function KDStockRestraints(enemy: entity, restMult: number, count?: number): void;
/**
 *
 * @param {entity} enemy
 * @param {string} loadout
 */
declare function KDSetLoadout(enemy: entity, loadout: string): void;
declare function KDClearItems(enemy: any): void;
/**
 *
 * @param {string} item
 * @param {number} quantity
 * @returns {boolean}
 */
declare function KDAddLostItemSingle(item: string, quantity?: number): boolean;
/**
 *
 * @param {entity} enemy
 * @param {entity} player
 * @returns {boolean}
 */
declare function KDCanDetect(enemy: entity, player: entity, allowBlind?: boolean): boolean;
/**
 *
 * @param {entity} enemy
 * @param {string} type
 * @returns {number}
 */
declare function KDGetSecurity(enemy: entity, type: string): number;
/**
 * Reduces the enemy's binding by a certain amount
 * @param {entity} enemy
 * @param {number} bonus
 */
declare function KDReduceBinding(enemy: entity, bonus: number): void;
/**
 * Helper function to determine if a character needs punishing
 * @param {entity} enemy
 * @param {entity} player
 */
declare function KDPlayerDeservesPunishment(enemy: entity, player: entity): boolean;
/**
 *
 * @param {entity} enemy
 */
declare function KDPlugEnemy(enemy: entity): void;
/**
 *
 * @param {entity} enemy
 * @param {boolean} removeSpecial
 * @returns {Record<string, boolean>}
 */
declare function KDGetTags(enemy: entity, removeSpecial: boolean): Record<string, boolean>;
/**
 *
 * @param {entity} enemy
 * @param {boolean} useSpecial
 * @returns {Record<string, boolean>}
 */
declare function KDGetExtraTags(enemy: entity, useSpecial: boolean): Record<string, boolean>;
/**
 *
 * @param {entity} enemy
 * @param {string} faction
 * @param {{r:restraint, v: ApplyVariant}[]} restraintsToAdd
 * @param {(item) => void} blockFunction
 * @param {string[]} [restraintFromInventory]
 * @param {spell} [spell]
 * @param {string} [Lock]
 * @param {boolean} [Keep]
 * @returns {{r:restraint, v: ApplyVariant}[]}
 */
declare function KDRunBondageResist(enemy: entity, faction: string, restraintsToAdd: {
    r: restraint;
    v: ApplyVariant;
}[], blockFunction: (item: any) => void, restraintFromInventory?: string[], spell?: spell, Lock?: string, Keep?: boolean): {
    r: restraint;
    v: ApplyVariant;
}[];
/**
 * Assigns the point an enemy leashes the player to
 * @param {entity} enemy
 */
declare function KDAssignLeashPoint(enemy: entity): void;
/**
 * Assigns the point an enemy leashes the player to indirectly
 * @param {entity} enemy
 */
declare function KDSelfishLeash(enemy: entity): boolean;
/**
 * Enemy is not friendly to the jail faction
 * @param {entity} enemy
 */
declare function KDEnemyUnfriendlyToMainFaction(enemy: entity): boolean;
/**
 *
 * @returns {string}
 */
declare function KDGetMainFaction(): string;
/**
 *
 * @param {entity} player
 * @returns {boolean}
 */
declare function KDPlayerLeashed(player: entity): boolean;
/**
 * @param {entity} en
 * @returns {boolean}
 */
declare function KDEnemyCanBeVibed(en: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @param {number} delta
 */
declare function KDEnemySoundDecay(enemy: entity, delta: number): void;
/**
 * Only the noisiest thing counts
 * @param {entity} enemy
 * @param {number} amount
 */
declare function KDEnemyAddSound(enemy: entity, amount: number, novisual?: boolean): void;
/**
 *
 * @param {entity} entity
 * @param {entity} enemy
 * @param {number} mult
 * @returns {boolean}
 */
declare function KDCanHearEnemy(entity: entity, enemy: entity, mult?: number): boolean;
/**
 *
 * @param {entity} entity
 * @param {number} sound
 * @param {number} x
 * @param {number} y
 * @param {number} mult
 * @returns {number}
 */
declare function KDCanHearSound(entity: entity, sound: number, x: number, y: number, mult?: number): number;
/** */
declare function KDPointWanderable(x: any, y: any): {
    x: number;
    y: number;
    tags?: string[];
};
/**
 *
 * @param {entity} enemy
 * @param {entity} player
 * @returns {boolean}
 */
declare function KDOverrideIgnore(enemy: entity, player: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDIsFlying(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDEnemyCanSignal(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDEnemyCanSignalOthers(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @param {KDAITriggerData} Data
 * @param {string[]} [requireTags]
 * @returns {string}
 */
declare function KDGetDialogueTrigger(enemy: entity, Data: KDAITriggerData, requireTags?: string[]): string;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDCanOverrideAI(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @param {string} index
 * @returns {string}
 */
declare function KDGetAIOverride(enemy: entity, index: string): string;
/**
 *
 * @param {enemy} Enemy
 * @param {string} index
 * @returns {string}
 */
declare function KDGetAITypeOverride(Enemy: enemy, index: string): string;
/**
 *
 * @param {entity} enemy
 */
declare function KDMakeHighValue(enemy: entity): void;
/**
 * Gets a list of curses applied to the item
 * @param {entity} enemy
 * @param {string[]} types
 * @returns {Record<string, number>}
 */
declare function KDGetSpecialBuffList(enemy: entity, types: string[]): Record<string, number>;
/**
 *
 * @param {entity} enemy
 * @returns {number}
 */
declare function KDEnemyRank(enemy: entity): number;
/**
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDEnemyCanSprint(enemy: entity): boolean;
/**
 * @param {entity} enemy
 */
declare function KDEnemyChangeSprint(enemy: entity, amt: any): void;
/**
 *
 * @param {entity} enemy
 * @param {boolean} [dontSet]
 * @returns {number}
 */
declare function KDSetShopMoney(enemy: entity, dontSet?: boolean): number;
/**
 *
 * @param {entity} enemy
 * @returns {boolean} true if the NPC is in the party
 */
declare function KDIsInParty(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean} true if the NPC has been previously captured
 */
declare function KDIsInCapturedParty(enemy: entity): boolean;
/**
 * Returns the enemies in the map data based on the party members
 * @returns {entity[]} Array of enemies from KDMapData.Entities
 */
declare function KDGetPartyRefs(): entity[];
/**
 *
 * @param {entity} enemy
 * @returns {entity}
 */
declare function KDCapturedPartyMemberIsOnMap(enemy: entity): entity;
/**
 *
 * @param {entity} enemy
 * @returns {boolean} - Returns true if the NPC was added
 */
declare function KDAddToParty(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean} - Returns true if the NPC was added
 */
declare function KDAddToCapturedParty(enemy: entity): boolean;
/**
 * Removes a party member and optionally adds to capture list
 * @param {entity} enemy - The enemy to be removed
 * @param {boolean} capture - Whether to add to CapturedParty
 * @returns {boolean} - Whether the party member was found or not
 */
declare function KDRemoveFromParty(enemy: entity, capture: boolean): boolean;
declare function KDAddEntity(entity: any): void;
declare function KDSpliceIndex(index: any, num?: number): void;
/**
 * Removes an enemy and does some stuff like party management, etc to keep things sanitary
 * @param {entity} enemy
 * @param {boolean} [kill]
 * @param {boolean} [capture]
 * @param {boolean} [noEvent]
 * @param {number} [forceIndex]
 * @returns {boolean}
 */
declare function KDRemoveEntity(enemy: entity, kill?: boolean, capture?: boolean, noEvent?: boolean, forceIndex?: number): boolean;
/**
 * Gets the max block of an enemy
 * @param {entity} entity
 * @returns {number}
 */
declare function KDGetMaxBlock(entity: entity): number;
/**
 * Gets the max block of an enemy
 * @param {entity} entity
 * @returns {number}
 */
declare function KDGetMaxDodge(entity: entity): number;
/**
 * Gets the max block of an enemy
 * @param {entity} entity
 * @returns {number}
 */
declare function KDGetBaseBlock(entity: entity): number;
/**
 * Gets the max block of an enemy
 * @param {entity} entity
 * @returns {number}
 */
declare function KDGetBaseDodge(entity: entity): number;
/**
 * Returns the amount of hp a single block protects an enemy from
 * @param {entity} entity
 * @returns {number}
 */
declare function KDGetBlockAmount(entity: entity): number;
/**
 * Returns if the enemy can block
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDCanBlock(enemy: entity): boolean;
/**
 * Returns if the enemy can dodge
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDCanDodge(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDIsTimeImmune(enemy: entity): boolean;
/**
 *
 * @param {entity} entity
 * @param {number} amount
 * @param {number} desireMult
 * @returns {number}
 */
declare function KDAddDistraction(entity: entity, amount: number, desireMult?: number): number;
/**
 *
 * @param {entity} entity
 * @returns {boolean}
 */
declare function KDToughArmor(entity: entity): boolean;
/**
 *
 * @param {entity} entity
 * @returns {boolean}
 */
declare function KDAbsoluteArmor(entity: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDIsDisarmed(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDHasArms(enemy: entity): boolean;
/**
 *
 * @param {any} player
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDPlayerFacingAway(player: any, enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @param {entity} player
 * @param {any} AData
 * @returns {KDTeaseAttack}
 */
declare function KDGetTeaseAttack(enemy: entity, player: entity, AData: any): KDTeaseAttack;
declare function KDBasicTeaseAttack(enemy: any, player: any, noglobal: any): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {string[]}
 */
declare function KDGetVibeToys(enemy: entity): string[];
/**
 *
 * @param {entity} enemy
 * @returns {number}
 */
declare function KDGetTeaseDamageMod(enemy: entity): number;
declare let KDDebugOverlay2: boolean;
declare let KDEnemiesCache: Map<any, any>;
declare let KinkyDungeonSummonCount: number;
declare let KinkyDungeonEnemyAlertRadius: number;
declare let KDStealthyMult: number;
declare let KDConspicuousMult: number;
declare let commentChance: number;
declare let actionDialogueChance: number;
declare let actionDialogueChanceIntense: number;
/** Default noisiness level of moving enemies */
declare let KDDefaultEnemyMoveSound: number;
declare let KDDefaultEnemyAttackSound: number;
declare let KDDefaultEnemyCastSound: number;
declare let KDDefaultEnemyIdleSound: number;
declare let KDDefaultEnemyAlertSound: number;
declare let KDEventableAttackTypes: string[];
/** @type {Record<string, (entity) => boolean>} */
declare let KDAnims: Record<string, (entity: any) => boolean>;
/** @type {Map<string, number>} */
declare let KinkyDungeonFlags: Map<string, number>;
declare let KinkyDungeonFastMoveSuppress: boolean;
declare let KinkyDungeonFastStruggleSuppress: boolean;
declare let KDInDanger: boolean;
declare let KDLastEnemyWarningDelta: number;
declare let KDMaxBindingBars: number;
declare let KDBarAdvanceRate: number;
declare let KDBarAdvanceRateMin: number;
declare let KDDialogueSlots: {};
declare let KDChampionMax: number;
declare let KinkyDungeonDamageTaken: boolean;
declare let KinkyDungeonTorsoGrabCD: number;
declare let KinkyDungeonHuntDownPlayer: boolean;
/** @type {string} */
declare let KDCustomDefeat: string;
/** @type {entity} */
declare let KDCustomDefeatEnemy: entity;
/**
 * @type {Map<number, {name: string, priority: number, duration: number, index: number}>}
 */
declare let KDThoughtBubbles: Map<number, {
    name: string;
    priority: number;
    duration: number;
    index: number;
}>;
/** @type {KDAIData} */
declare let AIData: KDAIData;
declare let KinkyDungeonEnemyID: number;
declare let KinkyDungeonSpellID: number;
declare let KDDefaultEnemySprint: number;
declare let KDDomThresh_Loose: number;
declare let KDDomThresh_Normal: number;
declare let KDDomThresh_Strict: number;
declare let KDDomThresh_Variance: number;
declare let KDDomThresh_PerkMod: number;
declare let KDDefaultRestraintThresh: number;
declare let KDShopMoneyBase: number;
declare let KDShopMoneyPerFloor: number;
declare let KDShopMoneyPerRank: number;
/**
 *
 * @param {entity} enemy
 * @returns {string}
 */
declare function KDGetPersonality(enemy: entity): string;
/**
 *
 * @param {entity} enemy
 * @returns {string}
 */
declare function KDJailPersonality(enemy: entity): string;
declare namespace KDJailPersonalities {
    const Robot: boolean;
    const Dom: boolean;
    const Sub: boolean;
}
declare let KDStrictPersonalities: string[];
declare let KDLoosePersonalities: string[];
declare let KDEnemyPersonalities: {
    "": {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        domVariance: number;
        tags: {
            robot: number;
            switch: number;
            veryswitch: number;
            nobrain: number;
        };
    };
    Robot: {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        tags: {
            robot: number;
            cyborg: number;
            nobrain: number;
        };
    };
    NoBrain: {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        tags: {
            nobrain: number;
        };
    };
    Dom: {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        tags: {
            minor: number;
            alchemist: number;
            elite: number;
            boss: number;
            robot: number;
            cyborg: number;
            submissive: number;
            dom: number;
            verydom: number;
            nobrain: number;
        };
    };
    Sub: {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        tags: {
            minor: number;
            human: number;
            elite: number;
            boss: number;
            robot: number;
            cyborg: number;
            submissive: number;
            sub: number;
            verysub: number;
            nobrain: number;
        };
    };
    Brat: {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        domMod: number;
        tags: {
            minor: number;
            brat: number;
            verybrat: number;
            human: number;
            boss: number;
            robot: number;
            nobrain: number;
            cyborg: number;
            submissive: number;
        };
    };
};
/**
 *
 * @param {entity} enemy
 */
declare function KDEndEnemyAction(enemy: entity): void;
/**
 *
 * @param {entity} enemy
 */
declare function KDMaintainEnemyAction(enemy: entity, delta: any): void;
declare let KDNoCaptureTypes: string[];
/**
 * @type {enemy[]}
 */
declare let KinkyDungeonEnemies: enemy[];
declare namespace KDOndeath {
    function DirtPile(enemy: any, o: any): void;
    function summon(enemy: any, o: any): void;
    function dialogue(enemy: any, o: any): void;
    function spellOnSelf(enemy: any, o: any): void;
    function removeQuest(enemy: any, o: any): void;
    function dollID(enemy: any, o: any): void;
    function addQuest(enemy: any, o: any): void;
}
/** @type {Record<string, SpecialCondition>} */
declare let KDSpecialConditions: Record<string, SpecialCondition>;
/**
 * @type {Record<string, KDSpecialEnemyBuff>}
 */
declare let KDSpecialBuffs: Record<string, KDSpecialEnemyBuff>;
/**
 * @type {Record<string, KDEnemyAction>}
 */
declare let KDEnemyAction: Record<string, KDEnemyAction>;
/**
 *
 * @param {entity} enemy
 * @param {any} AIData
 */
declare function KDResetIntent(enemy: entity, AIData: any): void;
/**
 * Helper function called to leash player to the nearest furniture
 * @param {entity} enemy
 * @param {any} AIData
 * @returns {boolean}
 */
declare function KDSettlePlayerInFurniture(enemy: entity, AIData: any, tags: any, guardDelay?: number): boolean;
/**
 * Play is actions enemies do when they are NEUTRAL
 * @type {Record<string, EnemyEvent>}
 */
declare let KDIntentEvents: Record<string, EnemyEvent>;
/**
 * @type {KDTeaseAttackListsType}
 */
declare let KDTeaseAttackLists: KDTeaseAttackListsType;
/**
 * @type {KDTeaseAttacksType}
 */
declare let KDTeaseAttacks: KDTeaseAttacksType;
declare function KDEscapeWorldgenStart(method: any): void;
declare namespace KinkyDungeonEscapeTypes {
    namespace None {
        const selectValid: boolean;
        function check(): boolean;
        function minimaptext(): string;
        function doortext(): string;
    }
    namespace Key {
        const selectValid_1: boolean;
        export { selectValid_1 as selectValid };
        export function worldgenstart(): void;
        export function check_1(): boolean;
        export { check_1 as check };
        export function minimaptext_1(): string;
        export { minimaptext_1 as minimaptext };
        export function doortext_1(): string;
        export { doortext_1 as doortext };
    }
    namespace Kill {
        const selectValid_2: boolean;
        export { selectValid_2 as selectValid };
        export function worldgenstart_1(): void;
        export { worldgenstart_1 as worldgenstart };
        export function check_2(): boolean;
        export { check_2 as check };
        export function minimaptext_2(): string;
        export { minimaptext_2 as minimaptext };
        export function doortext_2(): string;
        export { doortext_2 as doortext };
    }
    namespace Miniboss {
        const selectValid_3: boolean;
        export { selectValid_3 as selectValid };
        export function worldgenstart_2(): void;
        export { worldgenstart_2 as worldgenstart };
        export function check_3(): boolean;
        export { check_3 as check };
        export function minimaptext_3(): string;
        export { minimaptext_3 as minimaptext };
        export function doortext_3(): string;
        export { doortext_3 as doortext };
    }
    namespace Chest {
        const selectValid_4: boolean;
        export { selectValid_4 as selectValid };
        export function worldgenstart_3(): void;
        export { worldgenstart_3 as worldgenstart };
        export function check_4(): boolean;
        export { check_4 as check };
        export function minimaptext_4(): string;
        export { minimaptext_4 as minimaptext };
        export function doortext_4(): string;
        export { doortext_4 as doortext };
    }
    namespace Trap {
        const selectValid_5: boolean;
        export { selectValid_5 as selectValid };
        export function worldgenstart_4(): void;
        export { worldgenstart_4 as worldgenstart };
        export function check_5(): boolean;
        export { check_5 as check };
        export function minimaptext_5(): string;
        export { minimaptext_5 as minimaptext };
        export function doortext_5(): string;
        export { doortext_5 as doortext };
    }
    namespace Quest {
        const selectValid_6: boolean;
        export { selectValid_6 as selectValid };
        export const requireMaxQuests: boolean;
        export function worldgenstart_5(): void;
        export { worldgenstart_5 as worldgenstart };
        export function check_6(): boolean;
        export { check_6 as check };
        export function minimaptext_6(): string;
        export { minimaptext_6 as minimaptext };
        export function doortext_6(): string;
        export { doortext_6 as doortext };
    }
    namespace Boss {
        const selectValid_7: boolean;
        export { selectValid_7 as selectValid };
        export function check_7(): boolean;
        export { check_7 as check };
        export function minimaptext_7(): string;
        export { minimaptext_7 as minimaptext };
        export function doortext_7(): string;
        export { doortext_7 as doortext };
    }
}
/**
 * Bestows an event-type curse onto an item by adding events
 * @param {item} item
 * @param {KinkyDungeonEvent[]} ev
 */
declare function KDBestowCurse(item: item, ev: KinkyDungeonEvent[]): void;
/**
 *
 * @param {restraint} restraint
 * @param {string} newRestraintName
 * @param {KinkyDungeonEvent[]} ev
 * @param {number} power
 * @param {string} lock
 * @param {Record<string, number>} enemyTags
 * @returns {any}
 */
declare function KDAddEventVariant(restraint: restraint, newRestraintName: string, ev: KinkyDungeonEvent[], power?: number, lock?: string, enemyTags?: Record<string, number>): any;
declare function KinkyDungeonCurseInfo(item: any, Curse: any): void;
declare function KinkyDungeonCurseStruggle(item: any, Curse: any): void;
declare function KinkyDungeonCurseAvailable(item: any, Curse: any): boolean;
/**
 *
 * @param {string} group
 * @param {number} index
 * @param {string} Curse
 */
declare function KinkyDungeonCurseUnlock(group: string, index: number, Curse: string): void;
/**
 * @param {string} curse
 * @returns {number}
 */
declare function KDCursePower(curse: string): number;
/**
 * @param {string} curse
 * @returns {number}
 */
declare function KDCurseMult(curse: string): number;
declare namespace KDCurseUnlockList {
    const Common: string[];
    const Divine: string[];
    const CursedCollar: string[];
    const CursedCollar2: string[];
}
/**
 * onApply: occurs when applied
 * condition: required to remove it
 * remove: happens when removing
 * events: these events are added to the restraint
 * @type {Record<string, KDCursedDef>} */
declare let KDCurses: Record<string, KDCursedDef>;
/**
 * TODO
curseInfoAnimation,"Curse of Animation: Causes loose restraints to animate and attack you!"
curseInfoSensitivity,"Curse of Sensitivity: Makes it easier to lose control of yourself."
 */
/** Cursed variants of restraints
 * @type {Record<string, KDCursedVar>}
 */
declare let KDCursedVars: Record<string, KDCursedVar>;
declare function KDGetTightnessEffect(escapeChance: any, struggleType: any, T?: number): number;
/**
 * Returns the multiplier of a restraint based on the player's current restraint counts
 * @param {entity} player
 * @param {restraint} restraint
 * @param {string[]} augmentedInventory
 * @returns {number} - multiplier for apparent power
 */
declare function KDRestraintPowerMult(player: entity, restraint: restraint, augmentedInventory: string[]): number;
/**
 *
 * @returns {number}
 */
declare function KDGetWillPenalty(): number;
/**
 * gets a restraint
 * @param {Named} item
 * @returns {restraint}
 */
declare function KDRestraint(item: Named): restraint;
/**
 * gets a restraint
 * @param {Named} item
 * @returns {string}
 */
declare function KDRestraintBondageType(item: Named): string;
/**
 * gets a restraint
 * @param {Named} item
 * @returns {KDBondageStatus}
 */
declare function KDRestraintBondageStatus(item: Named): KDBondageStatus;
/**
 * gets a restraint
 * @param {item} item
 * @returns {boolean}
 */
declare function KDItemIsMagic(item: item): boolean;
declare function KDGetProgressiveOrderFun(): any;
/**
 *
 * @param {entity} Entity
 * @param {number} CamX
 * @param {number} CamY
 * @returns {void}
 */
declare function KinkyDungeonDrawTethers(Entity: entity, CamX: number, CamY: number): void;
declare function KDIsPlayerTethered(player: any): boolean;
declare function KinkyDungeonAttachTetherToEntity(dist: any, entity: any): boolean;
/**
 *
 * @param {entity} player
 * @param {number} x
 * @param {number} y
 * @param {entity} entity
 */
declare function KDIsPlayerTetheredToLocation(player: entity, x: number, y: number, entity: entity): boolean;
/**
 *
 * @param {entity} player
 * @param {entity} [entity]
 */
declare function KDIsPlayerTetheredToEntity(player: entity, entity?: entity): boolean;
/**
 *
 * @param {entity} player
 * @returns {number}
 */
declare function KDGetTetherEntity(player: entity): number;
/**
 *
 * @param {entity} [player]
 */
declare function KDBreakTether(player?: entity): void;
/**
 *
 * @param {boolean} Msg
 * @param {entity} Entity
 * @param {number} [xTo]
 * @param {number} [yTo]
 * @returns {boolean}
 */
declare function KinkyDungeonUpdateTether(Msg: boolean, Entity: entity, xTo?: number, yTo?: number): boolean;
/**
 * Gets the length of the neck tether
 * @returns {number}
 */
declare function KinkyDungeonTetherLength(): number;
/**
 *
 * @param {number} [modifier]
 * @returns {number}
 */
declare function KinkyDungeonKeyGetPickBreakChance(modifier?: number): number;
/**
 *
 * @param {number} [modifier]
 * @returns {number}
 */
declare function KinkyDungeonGetKnifeBreakChance(modifier?: number): number;
/**
 *
 * @param {number} [modifier]
 * @returns {number}
 */
declare function KinkyDungeonGetEnchKnifeBreakChance(modifier?: number): number;
/**
 *
 * @param {restraint} restraint
 * @returns {boolean}
 */
declare function KinkyDungeonIsLockable(restraint: restraint): boolean;
/**
 *
 * @param {item} item
 * @param {string} lock
 * @param {boolean} NoEvent
 */
declare function KinkyDungeonLock(item: item, lock: string, NoEvent?: boolean, Link?: boolean): void;
/**
 * Gets the curse of an item, ither intrinsic or applied
 * @param {item} item
 * @returns {string}
 */
declare function KDGetCurse(item: item): string;
/**
 *
 * @param {string} shrine
 * @returns {item[]}
 */
declare function KinkyDungeonGetRestraintsWithShrine(shrine: string, ignoreGold: any, recursive: any, ignoreShrine: any): item[];
/**
 *
 * @param {string} shrine
 * @returns {number}
 */
declare function KinkyDungeonRemoveRestraintsWithShrine(shrine: string, maxCount: any, recursive: any, noPlayer: any, ignoreGold: any, ignoreShrine: any, Keep: any): number;
/**
 *
 * @param {item} item
 */
declare function KDRemoveThisItem(item: item, Keep: any, NoEvent: any, Shrine: any, Remover: any): void;
/**
 *
 * @param {string} name
 * @returns {number}
 */
declare function KinkyDungeonRemoveRestraintsWithName(name: string): number;
/**
 *
 * @param {string} shrine
 * @returns {number}
 */
declare function KinkyDungeonUnlockRestraintsWithShrine(shrine: string): number;
/**
 *
 * @returns {item[]}
 */
declare function KinkyDungeonPlayerGetLockableRestraints(): item[];
/**
 * @param {string[]} Locks
 * @returns {item[]}
 */
declare function KinkyDungeonPlayerGetRestraintsWithLocks(Locks: string[], recursive: any): item[];
/**
 *
 * @param {string} lock
 */
declare function KinkyDungeonRemoveKeysUnlock(lock: string): void;
/**
 *
 * @param {string} lock
 * @param {string} keytype
 */
declare function KinkyDungeonRemoveKeysDropped(lock: string, keytype: string): void;
/**
 *
 * @param {string} lock
 * @returns {string}
 */
declare function KinkyDungeonGetKey(lock: string): string;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonHasGhostHelp(): boolean;
declare function KinkyDungeonHasHelp(): boolean;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonHasAllyHelp(): boolean;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonHasAngelHelp(): boolean;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonIsWearingLeash(): boolean;
/**
 *
 * @param {boolean} Message - Show a message?
 * @param {string} affinity
 * @param {string} [group]
 * @param {entity} [entity]
 * @returns {boolean}
 */
declare function KinkyDungeonGetAffinity(Message: boolean, affinity: string, group?: string, entity?: entity): boolean;
declare function KinkyDungeonWallCrackAndKnife(Message: any): boolean;
/**
 * Determines if the entire dynamic item tree has at least one inaccessable item
 * @param {item} item
 * @returns {boolean}
 */
declare function KDIsTreeAccessible(item: item): boolean;
/**
 * Determines if the entire dynamic item tree has at least one chastity item
 * @param {item} item
 * @returns {boolean}
 */
declare function KDIsTreeChastity(item: item): boolean;
/**
 * Determines if the entire dynamic item tree has at least one chastity bra item
 * @param {item} item
 * @returns {boolean}
 */
declare function KDIsTreeChastityBra(item: item): boolean;
/**
 *
 * @param {string} Group - Group
 * @param {boolean} [External] - By enemies or by player?
 * @returns {boolean}
 */
declare function KDGroupBlocked(Group: string, External?: boolean): boolean;
/**
 * @param {string} Group
 * @param {boolean} External
 * @return {item[]}
 * Gets a list of restraints blocking this group */
declare function KDGetBlockingRestraints(Group: string, External: boolean): item[];
/**
 * @param {string} Group
 * @param {boolean} External
 * @return {item[]}
 * Gets a list of restraints with Security that block this */
declare function KDGetBlockingSecurity(Group: string, External: boolean): item[];
/**
 *
 * @param {boolean} Other - false = self, true = other prisoner door etc
 * @returns {boolean} - Can you use keys on target
 */
declare function KinkyDungeonCanUseKey(Other?: boolean): boolean;
/**
 *
 * @param {boolean} [ApplyGhost] - Can you receive help in this context?
 * @param {boolean} [Other] - Is this on yourself or another?
 * @param {number} Threshold - Threshold
 * @returns {boolean}
 */
declare function KinkyDungeonIsHandsBound(ApplyGhost?: boolean, Other?: boolean, Threshold?: number): boolean;
/**
 * Returns the total level of hands bondage, 1.0 or higher meaning unable to use hands
 * @param {boolean} Other - on other or self
 * @return  {number} - The bindhands level, sum of all bindhands properties of worn restraints
 */
declare function KDHandBondageTotal(Other?: boolean): number;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonCanUseFeet(): boolean;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonCanUseFeetLoose(): boolean;
/**
 *
 * @param {boolean} [ApplyGhost]
 * @param {boolean} [Other] - Is this on yourself or another?
 * @returns {boolean}
 */
declare function KinkyDungeonIsArmsBound(ApplyGhost?: boolean, Other?: boolean): boolean;
/**
 * @param {Character} C
 * @param {boolean} [ApplyGhost]
 * @param {boolean} [Other] - Is this on yourself or another?
 * @returns {boolean}
 */
declare function KinkyDungeonIsArmsBoundC(C: Character, ApplyGhost?: boolean, Other?: boolean): boolean;
/**
 *
 * @param {boolean} ApplyGhost
 * @param {string} Group
 * @param {item} [excludeItem]
 * @returns {number}
 */
declare function KinkyDungeonStrictness(ApplyGhost: boolean, Group: string, excludeItem?: item): number;
/**
 * Gets the list of restraint nammes affecting the Group
 * @param {string} Group
 * @param {item} excludeItem
 * @returns {string[]}
 */
declare function KinkyDungeonGetStrictnessItems(Group: string, excludeItem: item): string[];
/**
 *
 * @returns {number}
 */
declare function KinkyDungeonGetPickBaseChance(): number;
/**
 *
 * @returns {number}
 */
declare function KinkyDungeonGetPickBonus(): number;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonPickAttempt(): boolean;
/**
 *
 * @param {string} lock
 * @returns {boolean}
 */
declare function KinkyDungeonUnlockAttempt(lock: string): boolean;
/** Gets the affinity of a restraint */
declare function KDGetRestraintAffinity(item: any, data: any): any;
/**
 *
 */
declare function KDGetEscapeChance(restraint: any, StruggleType: any, escapeChancePre: any, limitChancePre: any, ApplyGhost: any, ApplyPlayerBonus: any, Msg: any): {
    escapeChance: any;
    limitChance: any;
    escapeChanceData: {
        restraint: any;
        escapeChance: any;
        limitChance: any;
        struggleType: any;
        escapeChancePre: any;
        limitChancePre: any;
        ApplyGhost: any;
        ApplyPlayerBonus: any;
        GoddessBonus: number;
        Msg: any;
    };
};
declare function KDGetDynamicItem(group: any, index: any): {
    restraint: item;
    host: item;
};
/**
 * Mutates the GetStruggleData array
 * @param {KDStruggleData} data
 * @returns {string}
 *  */
declare function KDGetStruggleData(data: KDStruggleData): string;
/**
 *
 * @param {string} struggleGroup
 * @param {string} StruggleType
 * @param {boolean} [query]
 * @param {KDStruggleData} [retData]
 * @returns {string}
 */
declare function KinkyDungeonStruggle(struggleGroup: string, StruggleType: string, index: any, query?: boolean, retData?: KDStruggleData): string;
/**
 * "Return the first restraint item in the game that belongs to the given group."
 * @param {string} group - The group of the restraint item you want to get.
 * @param {number} [index] - The index of the restraint item you want to get.
 * @returns {item} The item that matches the group.
 */
declare function KinkyDungeonGetRestraintItem(group: string, index?: number): item;
/**
 * Refreshes the restraints map
 */
declare function KinkyDungeonRefreshRestraintsCache(): void;
/**
 *
 * @param {string} Name
 * @returns {restraint}
 */
declare function KinkyDungeonGetRestraintByName(Name: string): restraint;
/**
 *
 * @param {string} Lock
 * @param {item} [item] - Factoring in curse
 * @param {string} [curse] - Curse to add
 * @param {restraint} [restraint] - restraint to add, checks to make sure its lockable
 * @returns {number}
 */
declare function KinkyDungeonGetLockMult(Lock: string, item?: item, curse?: string, restraint?: restraint): number;
/**
 *
 * @param {KDHasTags} enemy
 * @param {*} Level
 * @param {*} Index
 * @param {*} Bypass
 * @param {*} Lock
 * @param {*} RequireWill
 * @param {*} LeashingOnly
 * @param {*} NoStack
 * @param {*} extraTags
 * @param {boolean} minWeightFallback
 * @param {*} agnostic - Determines if playertags and current bondage are ignored
 * @param {number} filterEps - Anything under this is filtered unless nothing is above it
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {string} [curse] - Going to add this curse
 * @param {boolean} [useAugmented] - useAugmented
 * @param {string[]} [augmentedInventory]
 * @param {object} [options]
 * @param {boolean} [options.dontAugmentWeight]
 * @param {boolean} [options.ApplyVariants]
 * @param {boolean} [options.dontPreferVariant]
 * @param {boolean} [options.allowLowPower]
 * @param {{minPower?: number, maxPower?: number, onlyLimited?: boolean, noUnlimited?: boolean, noLimited?: boolean, onlyUnlimited?: boolean, ignore?: string[], require?: string[], looseLimit?: boolean, ignoreTags?: string[], allowedGroups?: string[]}} [filter] - Filters for items
 * @returns {{restraint: restraint, variant?: ApplyVariant, weight: number}[]}
 */
declare function KDGetRestraintsEligible(enemy: KDHasTags, Level: any, Index: any, Bypass: any, Lock: any, RequireWill: any, LeashingOnly: any, NoStack: any, extraTags: any, agnostic: any, filter?: {
    minPower?: number;
    maxPower?: number;
    onlyLimited?: boolean;
    noUnlimited?: boolean;
    noLimited?: boolean;
    onlyUnlimited?: boolean;
    ignore?: string[];
    require?: string[];
    looseLimit?: boolean;
    ignoreTags?: string[];
    allowedGroups?: string[];
}, securityEnemy?: entity, curse?: string, filterEps?: number, minWeightFallback?: boolean, useAugmented?: boolean, augmentedInventory?: string[], options?: {
    dontAugmentWeight?: boolean;
    ApplyVariants?: boolean;
    dontPreferVariant?: boolean;
    allowLowPower?: boolean;
}): {
    restraint: restraint;
    variant?: ApplyVariant;
    weight: number;
}[];
/**
 *
 * @param {KDHasTags} enemy
 * @param {*} Level
 * @param {*} Index
 * @param {*} Bypass
 * @param {*} Lock
 * @param {*} RequireWill
 * @param {*} LeashingOnly
 * @param {*} NoStack
 * @param {*} extraTags
 * @param {*} agnostic - Determines if playertags and current bondage are ignored
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {string} [curse] - Planning to add this curse
 * @param {boolean} [useAugmented] - useAugmented
 * @param {string[]} [augmentedInventory] -
 * @param {object} [options]
 * @param {boolean} [options.dontAugmentWeight]
 * @param {boolean} [options.ApplyVariants]
 * @param {boolean} [options.dontPreferVariant]
 * @param {{minPower?: number, maxPower?: number, onlyLimited?: boolean, noUnlimited?: boolean, noLimited?: boolean, onlyUnlimited?: boolean, ignore?: string[], require?: string[], looseLimit?: boolean, ignoreTags?: string[], allowedGroups?: string[]}} [filter] - Filters for items
 * @returns
 */
declare function KinkyDungeonGetRestraint(enemy: KDHasTags, Level: any, Index: any, Bypass: any, Lock: any, RequireWill: any, LeashingOnly: any, NoStack: any, extraTags: any, agnostic: any, filter?: {
    minPower?: number;
    maxPower?: number;
    onlyLimited?: boolean;
    noUnlimited?: boolean;
    noLimited?: boolean;
    onlyUnlimited?: boolean;
    ignore?: string[];
    require?: string[];
    looseLimit?: boolean;
    ignoreTags?: string[];
    allowedGroups?: string[];
}, securityEnemy?: entity, curse?: string, useAugmented?: boolean, augmentedInventory?: string[], options?: {
    dontAugmentWeight?: boolean;
    ApplyVariants?: boolean;
    dontPreferVariant?: boolean;
}): restraint;
/**
 *
 * @param {KDHasTags} enemy
 * @param {*} Level
 * @param {*} Index
 * @param {*} Bypass
 * @param {*} Lock
 * @param {*} RequireWill
 * @param {*} LeashingOnly
 * @param {*} NoStack
 * @param {*} extraTags
 * @param {*} agnostic - Determines if playertags and current bondage are ignored
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {string} [curse] - Planning to add this curse
 * @param {boolean} [useAugmented] - useAugmented
 * @param {string[]} [augmentedInventory] -
 * @param {object} [options]
 * @param {boolean} [options.dontAugmentWeight]
 * @param {boolean} [options.ApplyVariants]
 * @param {boolean} [options.dontPreferVariant]
 * @param {{minPower?: number, maxPower?: number, onlyLimited?: boolean, noUnlimited?: boolean, noLimited?: boolean, onlyUnlimited?: boolean, ignore?: string[], require?: string[], looseLimit?: boolean, ignoreTags?: string[], allowedGroups?: string[]}} [filter] - Filters for items
 * @returns {{r: restraint, v: ApplyVariant}}
 */
declare function KDGetRestraintWithVariants(enemy: KDHasTags, Level: any, Index: any, Bypass: any, Lock: any, RequireWill: any, LeashingOnly: any, NoStack: any, extraTags: any, agnostic: any, filter?: {
    minPower?: number;
    maxPower?: number;
    onlyLimited?: boolean;
    noUnlimited?: boolean;
    noLimited?: boolean;
    onlyUnlimited?: boolean;
    ignore?: string[];
    require?: string[];
    looseLimit?: boolean;
    ignoreTags?: string[];
    allowedGroups?: string[];
}, securityEnemy?: entity, curse?: string, useAugmented?: boolean, augmentedInventory?: string[], options?: {
    dontAugmentWeight?: boolean;
    ApplyVariants?: boolean;
    dontPreferVariant?: boolean;
}): {
    r: restraint;
    v: ApplyVariant;
};
declare function KinkyDungeonUpdateRestraints(delta: any): Map<any, any>;
declare function KDGetCursePower(item: any): number;
/**
 *
 * @param {item} item
 * @param {boolean} [NoLink]
 * @param {restraint} [toLink]
 * @param {string} [newLock] - If we are trying to add a new item
 * @param {string} [newCurse] - If we are trying to add a new item
 * @returns
 */
declare function KinkyDungeonRestraintPower(item: item, NoLink?: boolean, toLink?: restraint, newLock?: string, newCurse?: string): number;
/**
 * @param {restraint} oldRestraint
 * @param {restraint} newRestraint
 * @param {item} [item]
 * @param {string} [Lock]
 * @param {string} [Curse]
 * @returns {boolean}
 */
declare function KinkyDungeonLinkableAndStricter(oldRestraint: restraint, newRestraint: restraint, item?: item, Lock?: string, Curse?: string): boolean;
/**
 * Blanket function for stuff needed to select a restraint
 * @param {restraint} restraint
 */
declare function KDIsEligible(restraint: restraint): boolean;
declare function KinkyDungeonGenerateRestraintTrap(): string;
declare function KDGetLockVisual(item: any): string;
/**
 *
 * @param {restraint} restraint
 * @param {boolean} Bypass
 * @param {boolean} NoStack
 * @param {string} Lock
 * @param {item} [r]
 * @param {boolean} [Deep] - allow linking under
 * @param {boolean} [noOverpower] - not allowed to replace items that currently exist
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {boolean} [useAugmentedPower] - Bypass is treated separately for these groups
 * @param {string} [curse] - Bypass is treated separately for these groups
 * @param {string[]} [augmentedInventory]
 * @param {number} [powerBonus]
 * @returns {boolean} - Restraint can be added
 */
declare function KDCanAddRestraint(restraint: restraint, Bypass: boolean, Lock: string, NoStack: boolean, r?: item, Deep?: boolean, noOverpower?: boolean, securityEnemy?: entity, useAugmentedPower?: boolean, curse?: string, augmentedInventory?: string[], powerBonus?: number): boolean;
/**
 *
 * @param {string} Group
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDEnemyPassesSecurity(Group: string, enemy: entity): boolean;
/**
 * Returns the first restraint in the stack that can link the given restraint
 * @param {item} currentRestraint
 * @param {restraint} restraint
 * @param {boolean} [bypass]
 * @param {boolean} [NoStack]
 * @param {boolean} [Deep] - Whether or not it can look deeper into the stack
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {string} [Lock]
 * @param {string} [Curse]
 * @returns {item}
 */
declare function KDGetLinkUnder(currentRestraint: item, restraint: restraint, bypass?: boolean, NoStack?: boolean, Deep?: boolean, securityEnemy?: entity, Lock?: string, Curse?: string): item;
/**
 * Returns whether or not the restraint can go under the currentRestraint
 * @param {item} currentRestraint
 * @param {restraint} restraint
 * @param {boolean} [bypass]
 * @param {boolean} [NoStack]
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {string} [Lock]
 * @param {string} [Curse]
 * @returns {boolean}
 */
declare function KDCanLinkUnder(currentRestraint: item, restraint: restraint, bypass?: boolean, NoStack?: boolean, securityEnemy?: entity, Lock?: string, Curse?: string): boolean;
/**
 *
 * @param {item} currentRestraint
 * @param {item} [ignoreItem] - Item to ignore
 * @param {restraint} restraint
 * @param {boolean} [bypass]
 * @param {boolean} [NoStack]
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {object} [props] - Curse and lock properties
 * @param {string} [props.newLock]
 * @param {string} [props.newCurse]
 * @returns {boolean}
 */
declare function KDCheckLinkSize(currentRestraint: item, restraint: restraint, bypass?: boolean, NoStack?: boolean, securityEnemy?: entity, ignoreItem?: item, props?: {
    newLock?: string;
    newCurse?: string;
}): boolean;
/**
 *
 * @param {restraint} restraint
 * @param {ApplyVariant} variant
 * @returns {KDRestraintVariant}
 */
declare function KDApplyVarToInvVar(restraint: restraint, variant: ApplyVariant): KDRestraintVariant;
/**
 * @param {restraint} restraint
 * @param {number} [Tightness]
 * @param {boolean} [Bypass]
 * @param {string} [Lock]
 * @param {boolean} [Keep]
 * @param {boolean} [Trapped]
 * @param {KinkyDungeonEvent[]} [events]
 * @param {string} [faction]
 * @param {boolean} [Deep] - whether or not it can go deeply in the stack
 * @param {string} [Curse] - Curse to apply
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {boolean} [reserved] - Reserved do not use
 * @param {string} [inventoryAs] - inventoryAs for the item
 * @param {Record<string, any>} [data] - data for the item
 * @returns {number}
 */
declare function KDLinkUnder(restraint: restraint, Tightness?: number, Bypass?: boolean, Lock?: string, Keep?: boolean, Trapped?: boolean, events?: KinkyDungeonEvent[], faction?: string, Deep?: boolean, Curse?: string, securityEnemy?: entity, reserved?: boolean, inventoryAs?: string, data?: Record<string, any>): number;
/**
 * @param {restraint | string} restraint
 * @param {number} [Tightness]
 * @param {boolean} [Bypass]
 * @param {string} [Lock]
 * @param {boolean} [Keep]
 * @param {boolean} [Trapped] - Deprecated do not use
 * @param {KinkyDungeonEvent[]} [events]
 * @param {string} [faction]
 * @param {boolean} [Deep] - whether or not it can go deeply in the stack
 * @param {string} [Curse] - Curse to apply
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {boolean} [useAugmentedPower] - Augment power to keep consistency
 * @param {string} [inventoryAs] - inventoryAs for the item
 * @param {string[]} [augmentedInventory]
 * @param {Record<string, any>} [data] - data for the item
 * @param {ApplyVariant} [variant] - variant for the item
 * @returns {number}
 */
declare function KinkyDungeonAddRestraintIfWeaker(restraint: restraint | string, Tightness?: number, Bypass?: boolean, Lock?: string, Keep?: boolean, Trapped?: boolean, events?: KinkyDungeonEvent[], faction?: string, Deep?: boolean, Curse?: string, securityEnemy?: entity, useAugmentedPower?: boolean, inventoryAs?: string, data?: Record<string, any>, augmentedInventory?: string[], variant?: ApplyVariant): number;
/**
 * @param {object} data
 * @param {restraint} data.oldRestraint - Restraint on bottom
 * @param {restraint} data.newRestraint - Restraint on top
 * @param {item} [data.item] - Current Item
 * @param {boolean} [data.useAugmentedPower]
 * @param {string[]} [data.augmentedInventory]
 * @param {item} [data.ignoreItem] - Item to ignore for purpose of calculating size
 * @param {item} [data.linkUnderItem] - Item to ignore for total link chain calculation
 * @param {object} [data.props] - Curse and lock properties
 * @param {string} [data.props.newLock]
 * @param {string} [data.props.newCurse]
 * @returns {boolean}
 */
declare function KinkyDungeonIsLinkable(data: {
    oldRestraint: restraint;
    newRestraint: restraint;
    item?: item;
    useAugmentedPower?: boolean;
    augmentedInventory?: string[];
    ignoreItem?: item;
    linkUnderItem?: item;
    props?: {
        newLock?: string;
        newCurse?: string;
    };
}): boolean;
/**
 * Checks if all the items linked under allow this item
 * @param {item} oldRestraint
 * @param {restraint} newRestraint
 * @param {item} [ignoreItem]
 * @returns {boolean}
 */
declare function KDCheckLinkTotal(oldRestraint: item, newRestraint: restraint, ignoreItem?: item, lock?: string, curse?: string, useAugmentedPower?: boolean, augmentedInventory?: any): boolean;
/**
 * Gets the linkability cache
 * @param {item} restraint
 */
declare function KDUpdateLinkCaches(restraint: item): void;
/**
 * Gets the linkability cache
 * @param {item} restraint
 * @returns {string[]}
 */
declare function KDGetLinkCache(restraint: item): string[];
/**
 * @param {restraint} restraint
 * @param {number} Tightness
 * @param {boolean} [Bypass]
 * @param {string} [Lock]
 * @param {boolean} [Keep]
 * @param {boolean} [Link]
 * @param {boolean} [SwitchItems]
 * @param {KinkyDungeonEvent[]} [events]
 * @param {boolean} [Unlink]
 * @param {string} [faction]
 * @param {item} [dynamicLink]
 * @param {string} [Curse] - Curse to apply
 * @param {boolean} [autoMessage] - Whether or not to automatically dispatch messages
 * @param {entity} [securityEnemy] - Whether or not to automatically dispatch messages
 * @param {string} [inventoryAs] - InventoryAs for the item
 * @param {Record<string, number>} [data] - data for the item
 * @returns
 */
declare function KinkyDungeonAddRestraint(restraint: restraint, Tightness: number, Bypass?: boolean, Lock?: string, Keep?: boolean, Link?: boolean, SwitchItems?: boolean, events?: KinkyDungeonEvent[], faction?: string, Unlink?: boolean, dynamicLink?: item, Curse?: string, autoMessage?: boolean, securityEnemy?: entity, inventoryAs?: string, data?: Record<string, number>): number;
/**
 * It removes a restraint from the player
 * @param {item} item - The item to remove.
 * @param {boolean} [Keep] - If true, the item will be kept in the player's inventory.
 * @param {boolean} [Add] - If true, this is part of the process of adding another item and should not trigger infinite recursion
 * @param {boolean} [NoEvent] - If true, the item will not trigger any events.
 * @param {boolean} [Shrine] - If the item is being removed from a shrine, this is true.
 * @param {boolean} [UnLink] - If the item is being removed as part of an unlinking process
 * @param {entity} [Remover] - Who removes this
 * @param {boolean} [ForceRemove] - Ignore AlwaysKeep, for example if armor gets confiscated
 * @returns {boolean} true if the item was removed, false if it was not.
 */
declare function KinkyDungeonRemoveRestraintSpecific(item: item, Keep?: boolean, Add?: boolean, NoEvent?: boolean, Shrine?: boolean, UnLink?: boolean, Remover?: entity, ForceRemove?: boolean): boolean;
/**
 * It removes a restraint from the player
 * @param {string} Group - The group of the item to remove.
 * @param {boolean} [Keep] - If true, the item will be kept in the player's inventory.
 * @param {boolean} [Add] - If true, this is part of the process of adding another item and should not trigger infinite recursion
 * @param {boolean} [NoEvent] - If true, the item will not trigger any events.
 * @param {boolean} [Shrine] - If the item is being removed from a shrine, this is true.
 * @param {boolean} [UnLink] - If the item is being removed as part of an unlinking process
 * @param {entity} [Remover] - Who removes this
 * @param {boolean} [ForceRemove] - Ignore AlwaysKeep, for example if armor gets confiscated
 * @returns {boolean} true if the item was removed, false if it was not.
 */
declare function KinkyDungeonRemoveRestraint(Group: string, Keep?: boolean, Add?: boolean, NoEvent?: boolean, Shrine?: boolean, UnLink?: boolean, Remover?: entity, ForceRemove?: boolean): boolean;
declare function KDIInsertRestraintUnderneath(restraint: any): boolean;
/**
 * It removes the item's dynamic link
 * @param {item} hostItem - The group of the item to remove.
 * @param {boolean} [Keep] - If true, the item will be kept in the player's inventory.
 * @param {boolean} [NoEvent] - If true, the item will not trigger any events.
 * @param {entity} [Remover] - Who removes this
 * @param {boolean} [ForceRemove] - Ignore AlwaysKeep, for example if armor gets confiscated
 * @returns {boolean} true if the item was removed, false if it was not.
 */
declare function KinkyDungeonRemoveDynamicRestraint(hostItem: item, Keep?: boolean, NoEvent?: boolean, Remover?: entity, ForceRemove?: boolean): boolean;
/**
 * "Returns an array of all the shrine types that have at least one restraint item."
 *
 * The function takes one argument, `ShrineFilter`, which is an array of shrine types. If the argument is not provided, the
 * function will return all shrine types. If the argument is provided, the function will only return shrine types that are
 * in the argument
 * @param ShrineFilter - An array of strings, each string being the name of a shrine.
 * @returns An array of all the restraint types that can be used in the shrine.
 */
declare function KinkyDungeonRestraintTypes(ShrineFilter: any): string[];
/**
 *
 * @param {restraint} newRestraint
 * @param {item} oldItem
 * @param {number} tightness
 * @param {string} [Lock]
 * @param {boolean} [Keep]
 * @param {string} [faction]
 * @param {string} [Curse]
 * @param {boolean} [autoMessage] - Whether or not to automatically dispatch a message
 * @param {string} [inventoryAs] - inventoryAs for the item
 * @param {KinkyDungeonEvent[]} [events] - inventoryAs for the item
 * @param {Record<string, number>} [data] - data for the item
 * @returns {item} - The new item
 */
declare function KinkyDungeonLinkItem(newRestraint: restraint, oldItem: item, tightness: number, Lock?: string, Keep?: boolean, faction?: string, Curse?: string, autoMessage?: boolean, inventoryAs?: string, events?: KinkyDungeonEvent[], data?: Record<string, number>): item;
/**
 *
 * @param {item} item
 * @param {boolean} Keep
 * @returns
 */
declare function KinkyDungeonUnLinkItem(item: item, Keep: boolean, dynamic: any): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {{aoe: number, number: number, dist: number, kind: string, duration?: number, durationExtra?: number}} options
 */
declare function KDCreateDebris(x: number, y: number, options: {
    aoe: number;
    number: number;
    dist: number;
    kind: string;
    duration?: number;
    durationExtra?: number;
}): void;
/**
 *
 * @param {string} StruggleType
 * @param {item} restraint
 * @param {KDLockType} lockType
 * @param {number} index
 * @param {any} data
 * @param {item} host
 */
declare function KDSuccessRemove(StruggleType: string, restraint: item, lockType: KDLockType, index: number, data: any, host: item): boolean;
declare function KDAddDelayedStruggle(amount: any, time: any, StruggleType: any, struggleGroup: any, index: any, data: any, progress?: number, limit?: number): void;
/**
 *
 * @param {number} bonus
 * @param {number} penalty
 * @param {number} threshold
 * @param {number} bonusscale
 * @param {number} penaltyscale
 * @returns {number}
 */
declare function KDGetManaBonus(bonus: number, penalty: number, threshold: number, bonusscale: number, penaltyscale: number): number;
/**
 * Gets the goddess bonus for this item
 * @param {item} item
 * @param {any} data - Escape chance data
 */
declare function KDGetItemGoddessBonus(item: item, data: any): number;
/**
 * Gets a restraint from a list of eligible restraints and a group prioritization order
 * @param {{restraint: restraint, weight: number}[]} RestraintList
 * @param {string[]} GroupOrder
 * @param {boolean} [skip]
 * @returns {restraint}
 */
declare function KDChooseRestraintFromListGroupPri(RestraintList: {
    restraint: restraint;
    weight: number;
}[], GroupOrder: string[], skip?: boolean): restraint;
/**
 * Gets a restraint from a list of eligible restraints and a group prioritization order
 * @param {{restraint: restraint, variant?: ApplyVariant, weight: number}[]} RestraintList
 * @param {string[]} GroupOrder
 * @param {boolean} [skip]
 * @returns {{r: restraint, v: ApplyVariant}}
 */
declare function KDChooseRestraintFromListGroupPriWithVariants(RestraintList: {
    restraint: restraint;
    variant?: ApplyVariant;
    weight: number;
}[], GroupOrder: string[], skip?: boolean): {
    r: restraint;
    v: ApplyVariant;
};
/**
 *
 * @param {string} CopyOf - The cuff family to copy
 * @param {string} idSuffix - The suffix to add to the cuff family
 * @param {string} ModelSuffix - The suffix for the cuff model to use
 * @param {string} tagBase - The base for the enemy tags
 * @param {Record<string, number>} extraTags - extra enemy tags
 * @param {string[]} allTag - adds a tag to all of the cuffs if specified
 * @param {number} addPower - Base opower level
 * @param {KDRestraintPropsBase} properties - Restraint properties to override
 * @param {KinkyDungeonEvent[]} extraEvents - Extra events to add on to the base cuffs
 * @param {KDEscapeChanceList} addStruggle - Increase to base struggle amounts
 * @param {KDEscapeChanceList} premultStruggle - Multiplier to base struggle amounts, AFTER baseStruggle
 * @param {Record<string, LayerFilter>} [Filters] - Multiplier to base struggle amounts, AFTER baseStruggle
 * @param {boolean} [noGeneric] - does not add this to tagBaseRestraints, only tagBaseCuffs
 * @param {Record<string, string>} [CuffAssets] - mapping of Group to Assets
 * @param {Record<string, string>} [CuffModels] - mapping of Group to Models
 * @param {boolean} [noLockBase] - Removes Pick and Unlock methods of escape
 * @param {boolean} [noLockLink] - Removes Pick and Unlock methods of escape
 * param {{name: string, description: string}} strings - Generic strings for the cuff type
 */
declare function KDAddCuffVariants(CopyOf: string, idSuffix: string, ModelSuffix: string, tagBase: string, extraTags: Record<string, number>, allTag: string[], removeTag: any, addPower: number, properties: KDRestraintPropsBase, extraEvents: KinkyDungeonEvent[], addStruggle: KDEscapeChanceList, premultStruggle: KDEscapeChanceList, addStruggleLink: any, premultStruggleLink: any, Filters?: Record<string, LayerFilter>, baseWeight?: number, noGeneric?: boolean, CuffAssets?: Record<string, string>, CuffModels?: Record<string, string>, noLockBase?: boolean, noLockLink?: boolean): void;
/**
 *
 * @param {string} CopyOf - The rope family to copy
 * @param {string} idSuffix - The suffix to add to the rope family
 * @param {string} ModelSuffix - The suffix for the rope model to use
 * @param {string} tagBase - The base for the enemy tags
 * @param {string[]} allTag - adds a tag to all of the ropes if specified
 * @param {number} basePower - Base opower level
 * @param {KDRestraintPropsBase} properties - Restraint properties to override
 * @param {KinkyDungeonEvent[]} extraEvents - Extra events to add on
 * @param {KDEscapeChanceList} addStruggle - Increase to base struggle amounts
 * @param {KDEscapeChanceList} premultStruggle - Multiplier to base struggle amounts, AFTER baseStruggle
 * @param {Record<string, LayerFilter>} [Filters] - Multiplier to base struggle amounts, AFTER baseStruggle
 * param {{name: string, description: string}} strings - Generic strings for the rope type
 */
declare function KDAddRopeVariants(CopyOf: string, idSuffix: string, ModelSuffix: string, tagBase: string, allTag: string[], removeTag: any, basePower: number, properties: KDRestraintPropsBase, extraEvents: KinkyDungeonEvent[], addStruggle: KDEscapeChanceList, premultStruggle: KDEscapeChanceList, Filters?: Record<string, LayerFilter>, baseWeight?: number): void;
/**
 *
 * @param {string} CopyOf - The rope family to copy
 * @param {string} idSuffix - The suffix to add to the rope family
 * @param {string} ModelSuffix - The suffix for the rope model to use
 * @param {string} tagBase - The base for the enemy tags
 * @param {string[]} allTag - adds a tag to all of the ropes if specified
 * @param {number} basePower - Base opower level
 * @param {KDRestraintPropsBase} properties - Restraint properties to override
 * @param {KinkyDungeonEvent[]} extraEvents - Extra events to add on
 * @param {KDEscapeChanceList} addStruggle - Increase to base struggle amounts
 * @param {KDEscapeChanceList} premultStruggle - Multiplier to base struggle amounts, AFTER baseStruggle
 * @param {Record<string, LayerFilter>} [Filters] - Multiplier to base struggle amounts, AFTER baseStruggle
 * @param {string} [restraintType] - Restrainttype for slime spread event
 * param {{name: string, description: string}} strings - Generic strings for the rope type
 */
declare function KDAddHardSlimeVariants(CopyOf: string, idSuffix: string, ModelSuffix: string, tagBase: string, allTag: string[], removeTag: any, basePower: number, properties: KDRestraintPropsBase, extraEvents: KinkyDungeonEvent[], addStruggle: KDEscapeChanceList, premultStruggle: KDEscapeChanceList, Filters?: Record<string, LayerFilter>, baseWeight?: number, restraintType?: string): void;
/**
 * Converts restraint tags to a copy that is also a list (in case data structure changes)
 * @param {restraint} restraint
 * @returns {string[]}
 */
declare function KDGetRestraintTags(restraint: restraint): string[];
/**
 *
 * @param {item} item
 * @param {string} name
 * @returns {any}
 */
declare function KDItemDataQuery(item: item, name: string): any;
/**
 *
 * @param {item} item
 * @param {string} name
 * @param {number | string} value
 * @returns {any}
 */
declare function KDItemDataSet(item: item, name: string, value: number | string): any;
/**
 * Changes a restraint item's name
 * @param {item} item
 * @param {string} type - Restraint or LooseRestraint
 * @param {string} name
 */
declare function KDChangeItemName(item: item, type: string, name: string): void;
/**
 * Gets the total curse power rating of the player
 * @param {boolean} activatedOnly
 * @returns {number}
 */
declare function KDCurseCount(activatedOnly: boolean): number;
/**
 *
 * @param {entity} player
 * @param {string[]} requireSingleTag
 * @param {string[]} requireAllTags
 * @param {boolean} ignoregold
 * @param {boolean} ignoreShrine
 */
declare function KDGetTotalRestraintPower(player: entity, requireSingleTag: string[], requireAllTags: string[], ignoregold: boolean, ignoreShrine: boolean): number;
declare function KDGetEscapeSFX(restraint: any): {
    Struggle?: string;
    Cut?: string;
    Remove?: string;
    Pick?: string;
    Unlock?: string;
    NoStamina?: string;
    NoWill?: string;
    NoMagic?: string;
    MagicCut?: string;
    PickBreak?: string;
    KnifeBreak?: string;
    KnifeDrop?: string;
    KeyDrop?: string;
    PickDrop?: string;
};
declare function KDGetRestraintSFX(restraint: any): string;
declare function KDGetFinishEscapeSFX(restraint: any): {
    Struggle?: string;
    Cut?: string;
    Remove?: string;
    Pick?: string;
    Unlock?: string;
    Destroy?: string;
};
declare function KDGetRemoveSFX(restraint: any): string;
/**
 *
 * @param {item} item
 * @param {number} level
 * @returns {boolean}
 */
declare function KDHasRemovableCurse(item: item, level: number): boolean;
/**
 *
 * @param {item} item
 * @param {number} level
 * @returns {boolean}
 */
declare function KDHasRemovableHex(item: item, level: number): boolean;
/**
 *
 * @param {item} item
 * @param {number} level
 * @returns {KinkyDungeonEvent[]}
 */
declare function KDGetRemovableHex(item: item, level: number): KinkyDungeonEvent[];
/**
 * The name of an item, includes TextGet call
 * @param {item} item
 */
declare function KDGetItemName(item: item): string;
/**
 *
 * @param {restraint} restraint
 * @param {ApplyVariant} [variant]
 */
declare function KDGetRestraintName(restraint: restraint, variant?: ApplyVariant): string;
/**
 *
 * @param {consumable} consumable
 * @param {ApplyVariant} [variant]
 */
declare function KDGetConsumableName(consumable: consumable, variant?: ApplyVariant): string;
/**
 *
 * @param {weapon} weapon
 * @param {ApplyVariant} [variant]
 */
declare function KDGetWeaponName(weapon: weapon, variant?: ApplyVariant): string;
/**
 *
 * @param {string} name
 */
declare function KDGetItemNameString(name: string): string;
declare function KDGetEventsForRestraint(name: any): any[] & KinkyDungeonEvent[];
/**
 *
 * @param {item} item
 * @param {boolean} [includeItem]
 * @returns {item[]}
 */
declare function KDDynamicLinkList(item: item, includeItem?: boolean): item[];
/**
 * Returns a list of items on the 'surface' of a dynamic link, i.e items that can be accessed
 * @param {item} item
 * @returns {item[]}
 */
declare function KDDynamicLinkListSurface(item: item): item[];
/**
 *
 * @param {restraint} restraint
 * @returns {number}
 */
declare function KDLinkSize(restraint: restraint): number;
/**
 *
 * @param {item} item
 * @param {string} linkCategory
 * @param {item} [ignoreItem]
 * @returns {number}
 */
declare function KDLinkCategorySize(item: item, linkCategory: string, ignoreItem?: item): number;
/**
 *
 * @param {item} item
 * @returns {item}
 */
declare function KDGetRestraintHost(item: item): item;
/**
 *
 * @param {KinkyDungeonEvent} e
 * @param {item} item
 */
declare function KDLinkItemEvent(e: KinkyDungeonEvent, item: item, data: any): void;
/**
 * @returns {number}
 */
declare function KDGetRestriction(): number;
/**
 *
 * @param {item} item
 * @param {entity} [Remover]
 * @returns {boolean}
 */
declare function KDAlwaysKeep(item: item, Remover?: entity): boolean;
declare let KinkyDungeonRestraintsLocked: any[];
declare let KDWillEscapePenalty: number;
declare let KDWillEscapePenaltyArms: number;
declare let KDWillEscapePenaltyStart: number;
declare let KDWillEscapePenaltyStartArms: number;
declare let KDWillEscapePenaltyEnd: number;
declare let KDMinEscapeRate: number;
declare let KDMinPickRate: number;
declare let KDStruggleTime: number;
declare let KDBaseEscapeSpeed: number;
declare namespace StruggleTypeHandThresh {
    const Struggle: number;
    const Unlock: number;
    const Pick: number;
    const Cut: number;
    const Remove: number;
}
declare let KDRestraintArchetypes: string[];
/**
 * @type {Record<string, (data : KDEventData_affinity) => boolean>}
 */
declare let KDCustomAffinity: Record<string, (data: KDEventData_affinity) => boolean>;
declare let KinkyDungeonCurrentEscapingItem: any;
declare let KinkyDungeonCurrentEscapingMethod: any;
declare let KinkyDungeonStruggleTime: number;
declare let KinkyDungeonMultiplayerInventoryFlag: boolean;
declare let KinkyDungeonItemDropChanceArmsBound: number;
declare let KinkyDungeonKeyJamChance: number;
declare let KinkyDungeonKeyPickBreakAmount: number;
declare let KinkyDungeonKeyPickBreakAmountBase: number;
declare let KinkyDungeonPickBreakProgress: number;
declare let KinkyDungeonKnifeBreakAmount: number;
declare let KinkyDungeonKnifeBreakAmountBase: number;
declare let KinkyDungeonKnifeBreakProgress: number;
declare let KinkyDungeonEnchKnifeBreakAmount: number;
declare let KinkyDungeonEnchKnifeBreakAmountBase: number;
declare let KinkyDungeonEnchKnifeBreakProgress: number;
declare let KinkyDungeonMaxImpossibleAttempts: number;
declare let KinkyDungeonEnchantedKnifeBonus: number;
declare let KDLocksmithPickBonus: number;
declare let KDLocksmithBonus: number;
declare let KDLocksmithSpeedBonus: number;
declare let KDCluelessPickBonus: number;
declare let KDCluelessBonus: number;
declare let KDCluelessSpeedBonus: number;
declare let KDFlexibleBonus: number;
declare let KDFlexibleSpeedBonus: number;
declare let KDInflexibleMult: number;
declare let KDInflexibleSpeedBonus: number;
declare let KDUnchainedBonus: number;
declare let KDDamselBonus: number;
declare let KDDamselPickAmount: number;
declare let KDArtistBonus: number;
declare let KDBunnyBonus: number;
declare let KDBunnyKnifeAmount: number;
declare let KDBunnyEnchKnifeAmount: number;
declare let KDSlipperyBonus: number;
declare let KDDollBonus: number;
declare let KDEscapeeBonus: number;
declare let KDDragonBonus: number;
declare let KDStrongBonus: number;
declare let KDWeakBonus: number;
declare let KDBondageLoverAmount: number;
/**
 * @type {Map<string, restraint>}
 */
declare let KinkyDungeonRestraintsCache: Map<string, restraint>;
declare const KinkyDungeonStrictnessTable: Map<string, string[]>;
declare namespace KDProgressiveOrder {
    const Strict: string[];
    const Fun1: string[];
    const Fun2: string[];
    const Fun3: string[];
}
/**
 * @type {Map<string, {r: restraint, w:number}[]>}
 */
declare let KDRestraintsCache: Map<string, {
    r: restraint;
    w: number;
}[]>;
declare let KDTetherGraphics: import("pixi.js").Graphics;
declare let KDGameBoardAddedTethers: boolean;
declare let KDLeashPullCost: number;
declare let KDLeashPullKneelTime: number;
declare let KDAffinityList: string[];
declare namespace KDUnboundAffinityOverride {
    const Sticky: boolean;
    const Edge: boolean;
    const Hook: boolean;
}
declare let KDHeavyRestraintPrefs: string[];
/** Tags which the 'agnostic' option on KinkyDungeonGetRestraint does not override */
declare let KDNoOverrideTags: string[];
declare let KinkyDungeonRestraintAdded: boolean;
declare let KinkyDungeonCancelFlag: boolean;
declare namespace KDSlimeParts {
    namespace Collar {
        const enemyTagSuffix: string;
        namespace enemyTagExtra {
            const livingCollar: number;
        }
    }
    const Boots: {};
    const Feet: {};
    const Legs: {};
    const Arms: {};
    const Head: {};
    const Mouth: {};
    const Hands: {};
}
declare namespace KDRopeParts {
    export namespace Collar_1 {
        const enemyTagSuffix_1: string;
        export { enemyTagSuffix_1 as enemyTagSuffix };
        export namespace enemyTagExtra_1 {
            const livingCollar_1: number;
            export { livingCollar_1 as livingCollar };
        }
        export { enemyTagExtra_1 as enemyTagExtra };
    }
    export { Collar_1 as Collar };
    export const ArmsBoxtie: {};
    export const ArmsWrist: {};
    export const Cuffs: {};
    export const CuffsAdv: {};
    export const CuffsAdv2: {};
    export namespace HogtieLink {
        const enemyTagSuffix_2: string;
        export { enemyTagSuffix_2 as enemyTagSuffix };
    }
    const Feet_1: {};
    export { Feet_1 as Feet };
    export const Feet2: {};
    export const Feet3: {};
    const Legs_1: {};
    export { Legs_1 as Legs };
    export const Legs2: {};
    export const Legs3: {};
    export const Belt: {};
    export const Harness: {};
    export const Crotch: {};
    export const Toes: {};
}
declare namespace KDCuffParts {
    namespace LivingCollar {
        export const base: boolean;
        const enemyTagSuffix_3: string;
        export { enemyTagSuffix_3 as enemyTagSuffix };
        export namespace enemyTagOverride {
            const livingCollar_2: number;
            export { livingCollar_2 as livingCollar };
        }
    }
    namespace AnkleCuffs {
        const base_1: boolean;
        export { base_1 as base };
    }
    namespace LegCuffs {
        const base_2: boolean;
        export { base_2 as base };
    }
    namespace ArmCuffs {
        const base_3: boolean;
        export { base_3 as base };
    }
}
declare let KDRestraintDebugLog: any[];
declare let KDMagicLocks: string[];
declare let KDKeyedLocks: string[];
declare let KDFeetRopeLink: string[];
declare let KDFormFitting: string[];
declare let KDHarnessLink: string[];
declare let KDCorsetLink: string[];
declare let KDBindable: string[];
declare let KDBindableMinusCuffs: string[];
declare let KDDevices: string[];
declare let KDElbowBind: string[];
declare let KDBoxBind: string[];
declare let KDWrappable: string[];
declare let KDArmbinderLink: string[];
declare let KDBoxbinderLink: string[];
declare let KDDressLink: string[];
declare let KDJacketLink: string[];
declare let KDJacketRender: string[];
declare let KDTransportLink: string[];
declare let KDLegbinderLink: string[];
declare let KDLegbinderRender: string[];
declare let KDLegRopesBind: string[];
declare let KDLegRopesRender: string[];
declare let KDArmRopesRender: string[];
declare let KDBeltsBind: string[];
declare let KDBeltsRender: string[];
declare let KDTapeLink: string[];
declare let KDTapeRender: string[];
declare let KDRubberLink: string[];
declare let KDBlindfoldLink: string[];
declare let KDVisorLink: string[];
declare let KDWrappingLink: string[];
declare let KDMaskLink: any[];
declare let KDStuffingLink: string[];
declare let KDBallGagLink: string[];
declare let KDFlatGagLink: string[];
declare let KDPlugGagLink: string[];
declare let KDCollarLink: string[];
declare let KDCollarRender: string[];
declare let KDHighCollarRender: string[];
declare let KDCollarModuleLink: string[];
declare let KDGlovesLink: string[];
declare let KDSocksLink: string[];
declare let KDBeltLink: string[];
/**
 * @type {restraint[]}
 */
declare const KinkyDungeonRestraints: restraint[];
/**
 * @type {Record<string, KDLockType>}
 */
declare let KDLocks: Record<string, KDLockType>;
declare namespace KDControlHarnessCategories {
    namespace Cuffs {
        const activateCount: number;
        const activateTags: string[];
        function activateFunction(e: any, item: any, data: any, invItems: any): void;
        function updateFunction(e: any, item: any, data: any, invItems: any): void;
    }
    namespace Chastity {
        const activateCount_1: number;
        export { activateCount_1 as activateCount };
        const activateTags_1: string[];
        export { activateTags_1 as activateTags };
        export function activateFunction_1(e: any, item: any, data: any, invItems: any): void;
        export { activateFunction_1 as activateFunction };
        export function updateFunction_1(e: any, item: any, data: any, invItems: any): void;
        export { updateFunction_1 as updateFunction };
    }
}
/**
 * @type {Record<string, KDSFXGroup>}
 */
declare let KDSFXGroups: Record<string, KDSFXGroup>;
/**
 *
 * @param {Named} item
 * @returns {weapon}
 */
declare function KDWeapon(item: Named): weapon;
declare function KinkyDungeonFindWeapon(Name: any): weapon;
declare function KinkyDungeonWeaponCanCut(RequireInteract: any, MagicOnly: any): boolean;
/**
 *
 * @param {string} Weapon
 * @param {boolean} [forced]
 */
declare function KDSetWeapon(Weapon: string, forced?: boolean): void;
declare function KinkyDungeonGetPlayerWeaponDamage(HandsFree: any, NoOverride: any): weapon;
/**
 * @param {weapon} weapon
 * @returns true if the weapon represents Unarmed
 */
declare function isUnarmed(weapon: weapon): boolean;
declare function KinkyDungeonGetCrit(accuracy: any, Damage: any, Enemy: any): number;
declare function KinkyDungeonGetBindCrit(accuracy: any, Damage: any, Enemy: any): number;
declare function KDGetSpellAccuracy(): number;
declare function KinkyDungeonGetEvasion(Enemy: any, NoOverride: any, IsSpell: any, IsMagic: any, cost: any): number;
declare function KinkyDungeonAggro(Enemy: any, Spell: any, Attacker: any, Faction: any): void;
declare function KDPlayerEvasionPenalty(): number;
declare function KDPlayerBlockPenalty(): number;
declare function KDRestraintBlockPenalty(): number;
declare function KDCalcRestraintBlock(): number;
declare function KinkyDungeonPlayerEvasion(Event: any): number;
declare function KinkyDungeonPlayerBlock(Event: any): number;
declare function KinkyDungeonPlayerBlockLinear(): number;
declare function KinkyDungeonGetPlayerStat(stat: any, mult: any): number;
declare function KDRestraintBlockPower(block: any, power: any): number;
declare function KinkyDungeonEvasion(Enemy: any, IsSpell: any, IsMagic: any, Attacker: any, chance: any): boolean;
/**
 *
 * @param {Record<string, boolean>} tags
 * @param {string[] | undefined} profile
 * @param {string} type
 * @param {string} resist
 * @returns {boolean}
 */
declare function KinkyDungeonGetImmunity(tags: Record<string, boolean>, profile: string[] | undefined, type: string, resist: string): boolean;
declare function KDArmorFormula(DamageAmount: any, Armor: any): number;
/**
 *
 * @param {entity} Enemy
 * @param {*} Damage
 * @param {*} Ranged
 * @param {*} NoMsg
 * @param {*} Spell
 * @param {*} bullet
 * @param {*} attacker
 * @param {*} Delay
 * @param {*} noAlreadyHit
 * @param {*} noVuln
 * @param {*} Critical
 * @returns
 */
declare function KinkyDungeonDamageEnemy(Enemy: entity, Damage: any, Ranged: any, NoMsg: any, Spell: any, bullet: any, attacker: any, Delay: any, noAlreadyHit: any, noVuln: any, Critical: any): any;
declare function KinkyDungeonDisarm(Enemy: any, suff: any): boolean;
/**
 *
 * @param {entity} Enemy
 * @param {*} Damage
 * @param {number} [chance]
 * @param {any} [bullet]
 * @returns {boolean}
 */
declare function KinkyDungeonAttackEnemy(Enemy: entity, Damage: any, chance?: number, bullet?: any): boolean;
declare function KDUpdateBulletEffects(b: any, d: any): void;
declare function KinkyDungeonUpdateBullets(delta: any, Allied: any): void;
declare function KinkyDungeonUpdateSingleBulletVisual(b: any, end: any, delay: any): void;
declare function KinkyDungeonUpdateBulletVisuals(delta: any): void;
declare function KinkyDungeonUpdateBulletsCollisions(delta: any, Catchup: any): void;
declare function KDCheckCollideableBullets(entity: any, force: any): void;
/**
 *
 * @param {any} b
 * @param {number} born
 * @param {boolean} [outOfTime]
 * @param {boolean} [outOfRange]
 * @param {number} [d] - Fraction of the timestep that this hit happened in
 * @param {number} [dt] - Timestep
 * @param {boolean} [end] - If the bullet is dying
 */
declare function KinkyDungeonBulletHit(b: any, born: number, outOfTime?: boolean, outOfRange?: boolean, d?: number, dt?: number, end?: boolean): void;
/**
 *
 * @param {*} x
 * @param {*} y
 * @param {*} summonType
 * @param {*} count
 * @param {*} rad
 * @param {*} strict
 * @param {*} lifetime
 * @param {*} hidden
 * @param {*} goToTarget
 * @param {*} faction
 * @param {*} hostile
 * @param {*} minrad
 * @param {*} startAware
 * @param {*} noBullet
 * @param {*} hideTimer
 * @param {*} pathfind
 * @param {*} mod
 * @param {*} boundTo
 * @param {*} weakBinding
 * @returns {entity[]}
 */
declare function KinkyDungeonSummonEnemy(x: any, y: any, summonType: any, count: any, rad: any, strict: any, lifetime: any, hidden: any, goToTarget: any, faction: any, hostile: any, minrad: any, startAware: any, noBullet: any, hideTimer: any, pathfind: any, mod: any, boundTo: any, weakBinding: any, teleportTime: any, ox: any, oy: any): entity[];
declare function KinkyDungeonBulletDoT(b: any): void;
declare function KinkyDungeonBulletTrail(b: any): boolean;
declare function KinkyDungeonBulletsCheckCollision(bullet: any, AoE: any, force: any, d: any, inWarningOnly: any, delta: any): boolean;
declare function KDBulletAoECanHitEntity(bullet: any, enemy: any): boolean;
declare function KDBulletCanHitEntity(bullet: any, enemy: any, inWarningOnly: any, overrideCollide: any): boolean;
/**
 *
 * @param {any} bullet
 */
declare function KDBulletEffectTiles(bullet: any): void;
declare function KDBulletHitPlayer(bullet: any, player: any): void;
/**
 *
 * @param {any} bullet
 * @param {entity} enemy
 * @param {number} d
 * @param {boolean} nomsg
 */
declare function KDBulletHitEnemy(bullet: any, enemy: entity, d: number, nomsg: boolean): void;
declare function KDBulletID(bullet: any, enemy: any): string;
declare function KinkyDungeonLaunchBullet(x: any, y: any, targetx: any, targety: any, speed: any, bullet: any, miscast: any, ox: any, oy: any): {
    born: number;
    time: any;
    x: any;
    y: any;
    vx: number;
    vy: number;
    xx: any;
    yy: any;
    spriteID: any;
    ox: any;
    oy: any;
    bullet: any;
    trail: any;
    trailEffectTile: any;
};
declare function KinkyDungeonDrawFight(canvasOffsetX: any, canvasOffsetY: any, CamX: any, CamY: any): void;
declare function KinkyDungeonSendWeaponEvent(Event: any, data: any): void;
declare function KinkyDungeonSendBulletEvent(Event: any, b: any, data: any): void;
declare function KDHealRepChange(enemy: any, amount: any): void;
declare function KDApplyGenBuffs(entity: any, buff: any, time: any): void;
declare function KDSilenceEnemy(enemy: any, time: any): void;
declare function KDBlindEnemy(enemy: any, time: any): void;
declare function KDDisarmEnemy(enemy: any, time: any): void;
declare function KDCheckCondition(e: any, data: any): any;
declare function KDCheckPrereq(enemy: any, prereq: any, e: any, data: any): any;
declare function KDBulletAoEMod(b: any): any;
declare function KDBulletTrailAoEMod(b: any): any;
/**
 *
 * @param {number} bx
 * @param {number} by
 * @param {number} xx
 * @param {number} yy
 * @param {number} rad
 * @param {string} modifier
 * @param {originx} xx
 * @param {originy} yy
 */
declare function AOECondition(bx: number, by: number, xx: number, yy: number, rad: number, modifier: string, originx: any, originy: any): any;
/**
 *
 * @param {number} xx
 * @param {number} yy
 * @param {string} name
 */
declare function KDCreateParticle(xx: number, yy: number, name: string): void;
declare function KDIsTeasing(Damage: any): any;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} aoe
 * @param {any} Damage
 * @param {entity} Damage
 */
declare function KDDealEnvironmentalDamage(x: number, y: number, aoe: number, Damage: any, Attacker: any): void;
declare function KDCanOffhand(item: any): boolean;
/**
 * @param {Named} weapon
 * @returns {boolean}
 */
declare function KDWeaponIsMagic(weapon: Named): boolean;
declare function KDEvasiveManeuversCost(): number;
declare let KinkyDungeonKilledEnemy: any;
declare let KinkyDungeonAlert: number;
declare let KDMaxPreviousWeapon: number;
declare let KDMINDAMAGENOISE: number;
declare let KDDMGSOUNDMULT: number;
declare let KDBrawlerAmount: number;
declare let KDClumsyAmount: number;
declare namespace KDUnfocusedParams {
    const AmountMin: number;
    const AmountMax: number;
    const ThreshMin: number;
    const ThreshMax: number;
}
declare let KDDodgeAmount: number;
declare let KinkyDungeonMissChancePerBlind: number;
declare let KinkyDungeonBlockMissChancePerBlind: number;
declare let KinkyDungeonMissChancePerSlow: number;
/**
 * @type {Map<string, {end: boolean, temporary: boolean, zIndex: number, spin: number, spinAngle: number, name: string, size: number, spriteID: string, xx:number, yy:number, visual_x: number, visual_y: number, aoe?: boolean, updated: boolean, vx: number, vy: number, scale: number, alpha: number, delay: number}>}
 */
declare let KinkyDungeonBulletsVisual: Map<string, {
    end: boolean;
    temporary: boolean;
    zIndex: number;
    spin: number;
    spinAngle: number;
    name: string;
    size: number;
    spriteID: string;
    xx: number;
    yy: number;
    visual_x: number;
    visual_y: number;
    aoe?: boolean;
    updated: boolean;
    vx: number;
    vy: number;
    scale: number;
    alpha: number;
    delay: number;
}>;
declare let KinkyDungeonBulletsID: {};
declare let KDVulnerableDmg: number;
declare let KDVulnerableHitMult: number;
declare let KDVulnerableBlockHitMult: number;
declare let KDPacifistReduction: number;
declare let KDEnemyResistHPMult: number;
declare let KDRiggerDmgBoost: number;
declare let KDRiggerBindBoost: number;
declare let KDStealthyHPMult: number;
declare let KDStealthyEvaMult: number;
declare let KDResilientHPMult: number;
declare let KDStealthyEnemyCountMult: number;
declare let KDBoundPowerMult: number;
declare let KDBerserkerAmp: number;
declare let KDUnstableAmp: number;
declare namespace KDFightParams {
    const KDFreezeMeleeMult: number;
    const KDFreezeShatterMult: number;
}
declare let KinkyDungeonOpenObjects: string;
declare let KinkyDungeonMeleeDamageTypes: string[];
declare let KinkyDungeonTeaseDamageTypes: string[];
declare let KinkyDungeonPacifistDamageTypes: string[];
declare let KinkyDungeonStunDamageTypes: string[];
declare let KinkyDungeonBindDamageTypes: string[];
declare let KinkyDungeonFreezeDamageTypes: string[];
declare let KinkyDungeonSlowDamageTypes: string[];
declare let KinkyDungeonVulnerableDamageTypes: string[];
declare let KinkyDungeonMeltDamageTypes: string[];
declare let KinkyDungeonShatterDamageTypes: string[];
declare let KinkyDungeonIgnoreShieldTypes: string[];
declare let KinkyDungeonIgnoreBlockTypes: string[];
declare namespace KDDamageEquivalencies {
    const frost: string;
    const souldrain: string;
    const drain: string;
    const shock: string;
    const blast: string;
}
declare namespace KDDamageBinds {
    export const glue: string;
    export const ice: string;
    const frost_1: string;
    export { frost_1 as frost };
    export const crush: string;
}
declare namespace KDSpellTagBinds {
    const rope: string;
    const leather: string;
    const chain: string;
    const metal: string;
    const vine: string;
    const nature: string;
}
declare namespace KDResistanceProfiles {
    const rope_1: Record<any, any>;
    export { rope_1 as rope };
    export const construct: Record<any, any>;
    export const catgirl: Record<any, any>;
    export const alchemist: Record<any, any>;
}
declare namespace KinkyDungeonDamageTypesExtension {
    const tickle: string;
    const grope: string;
    const pain: string;
    const happygas: string;
    const charm: string;
}
declare let KinkyDungeonBindingDamageTypes: string[];
declare let KinkyDungeonDistractDamageTypes: string[];
declare let KinkyDungeonMasochistDamageTypes: string[];
declare let KinkyDungeonPlayerWeapon: string;
declare let KinkyDungeonPlayerWeaponLastEquipped: string;
/** @type {weapon} */
declare let KinkyDungeonPlayerDamageDefault: weapon;
/** @type {weapon} */
declare let KinkyDungeonPlayerDamage: weapon;
declare namespace KinkyDungeonDamageTypes {
    export namespace heal {
        const name_1: string;
        export { name_1 as name };
        export const color: string;
        export const bg: string;
        export const harmless: boolean;
    }
    export namespace holy {
        const name_2: string;
        export { name_2 as name };
        const color_1: string;
        export { color_1 as color };
        const bg_1: string;
        export { bg_1 as bg };
    }
    export namespace acid {
        const name_3: string;
        export { name_3 as name };
        const color_2: string;
        export { color_2 as color };
        const bg_2: string;
        export { bg_2 as bg };
    }
    export namespace cold {
        const name_4: string;
        export { name_4 as name };
        const color_3: string;
        export { color_3 as color };
        const bg_3: string;
        export { bg_3 as bg };
    }
    export namespace arcane {
        const name_5: string;
        export { name_5 as name };
        const color_4: string;
        export { color_4 as color };
        const bg_4: string;
        export { bg_4 as bg };
    }
    export namespace ice_1 {
        const name_6: string;
        export { name_6 as name };
        const color_5: string;
        export { color_5 as color };
        const bg_5: string;
        export { bg_5 as bg };
    }
    export { ice_1 as ice };
    export namespace frost_2 {
        const name_7: string;
        export { name_7 as name };
        const color_6: string;
        export { color_6 as color };
        const bg_6: string;
        export { bg_6 as bg };
    }
    export { frost_2 as frost };
    export namespace fire {
        const name_8: string;
        export { name_8 as name };
        const color_7: string;
        export { color_7 as color };
        const bg_7: string;
        export { bg_7 as bg };
    }
    export namespace poison {
        const name_9: string;
        export { name_9 as name };
        const color_8: string;
        export { color_8 as color };
        const bg_8: string;
        export { bg_8 as bg };
    }
    export namespace happygas_1 {
        const name_10: string;
        export { name_10 as name };
        const color_9: string;
        export { color_9 as color };
        const bg_9: string;
        export { bg_9 as bg };
    }
    export { happygas_1 as happygas };
    export namespace charm_1 {
        const name_11: string;
        export { name_11 as name };
        const color_10: string;
        export { color_10 as color };
        const bg_10: string;
        export { bg_10 as bg };
    }
    export { charm_1 as charm };
    export namespace soul {
        const name_12: string;
        export { name_12 as name };
        const color_11: string;
        export { color_11 as color };
        const bg_11: string;
        export { bg_11 as bg };
    }
    export namespace drain_1 {
        const name_13: string;
        export { name_13 as name };
        const color_12: string;
        export { color_12 as color };
        const bg_12: string;
        export { bg_12 as bg };
    }
    export { drain_1 as drain };
    export namespace souldrain_1 {
        const name_14: string;
        export { name_14 as name };
        const color_13: string;
        export { color_13 as color };
        const bg_13: string;
        export { bg_13 as bg };
    }
    export { souldrain_1 as souldrain };
    export namespace electric {
        const name_15: string;
        export { name_15 as name };
        const color_14: string;
        export { color_14 as color };
        const bg_14: string;
        export { bg_14 as bg };
    }
    export namespace glue_1 {
        const name_16: string;
        export { name_16 as name };
        const color_15: string;
        export { color_15 as color };
        const bg_15: string;
        export { bg_15 as bg };
    }
    export { glue_1 as glue };
    export namespace stun {
        const name_17: string;
        export { name_17 as name };
        const color_16: string;
        export { color_16 as color };
        const bg_16: string;
        export { bg_16 as bg };
    }
    export namespace chain_1 {
        const name_18: string;
        export { name_18 as name };
        const color_17: string;
        export { color_17 as color };
        const bg_17: string;
        export { bg_17 as bg };
    }
    export { chain_1 as chain };
    export namespace tickle_1 {
        const name_19: string;
        export { name_19 as name };
        const color_18: string;
        export { color_18 as color };
        const bg_18: string;
        export { bg_18 as bg };
    }
    export { tickle_1 as tickle };
    export namespace plush {
        const name_20: string;
        export { name_20 as name };
        const color_19: string;
        export { color_19 as color };
        const bg_19: string;
        export { bg_19 as bg };
    }
    export namespace crush_1 {
        const name_21: string;
        export { name_21 as name };
        const color_20: string;
        export { color_20 as color };
        const bg_20: string;
        export { bg_20 as bg };
    }
    export { crush_1 as crush };
    export namespace grope_1 {
        const name_22: string;
        export { name_22 as name };
        const color_21: string;
        export { color_21 as color };
        const bg_21: string;
        export { bg_21 as bg };
    }
    export { grope_1 as grope };
    export namespace slash {
        const name_23: string;
        export { name_23 as name };
        const color_22: string;
        export { color_22 as color };
        const bg_22: string;
        export { bg_22 as bg };
    }
    export namespace pierce {
        const name_24: string;
        export { name_24 as name };
        const color_23: string;
        export { color_23 as color };
        const bg_23: string;
        export { bg_23 as bg };
    }
    export namespace pain_1 {
        const name_25: string;
        export { name_25 as name };
        const color_24: string;
        export { color_24 as color };
        const bg_24: string;
        export { bg_24 as bg };
    }
    export { pain_1 as pain };
    export namespace unarmed {
        const name_26: string;
        export { name_26 as name };
        const color_25: string;
        export { color_25 as color };
        const bg_25: string;
        export { bg_25 as bg };
    }
    export namespace magic {
        const name_27: string;
        export { name_27 as name };
        const color_26: string;
        export { color_26 as color };
        const bg_26: string;
        export { bg_26 as bg };
    }
    export namespace melee {
        const name_28: string;
        export { name_28 as name };
        const color_27: string;
        export { color_27 as color };
        const bg_27: string;
        export { bg_27 as bg };
    }
    export namespace spell {
        const name_29: string;
        export { name_29 as name };
        const color_28: string;
        export { color_28 as color };
        const bg_28: string;
        export { bg_28 as bg };
    }
}
declare let KinkyDungeonEvasionPityModifier: number;
declare let KinkyDungeonEvasionPityModifierIncrementPercentage: number;
declare let KDDefaultCrit: number;
declare let KDDefaultBindCrit: number;
declare let KDDamageQueue: any[];
declare let KDBulletWarnings: any[];
declare let KDUniqueBulletHits: Map<any, any>;
declare let KinkyDungeonCurrentTick: number;
declare let KDLastFightDelta: number;
declare namespace KDConditions {
    function DamageTypeTeasing(e: any, data: any): any;
    function spellType(e: any, data: any): any;
}
declare namespace KDPrereqs {
    function HasWill(enemy: any, e: any, data: any): boolean;
    function noCorruption(enemy: any, e: any, data: any): boolean;
    function AlreadyCursed(enemy: any, e: any, data: any): boolean;
    function NoChastity(enemy: any, e: any, data: any): boolean;
    function blinded(enemy: any, e: any, data: any): boolean;
    function silenced(enemy: any, e: any, data: any): boolean;
    function disarmed(enemy: any, e: any, data: any): boolean;
    function bound(enemy: any, e: any, data: any): boolean;
    function Waiting(enemy: any, e: any, data: any): any;
    function damageType(enemy: any, e: any, data: any): boolean;
    function wepDamageType(enemy: any, e: any, data: any): boolean;
    function afterAmbush(enemy: any, e: any, data: any): boolean;
    function HaveDildoBatPlus(enemy: any, e: any, data: any): boolean;
    function LightLoad(enemy: any, e: any, data: any): boolean;
    function HeavyLoad(enemy: any, e: any, data: any): boolean;
    function Loaded(enemy: any, e: any, data: any): boolean;
}
declare namespace KDAOETypes {
    export function slash_1(bx: any, by: any, xx: any, yy: any, rad: any, modifier: string, ox: any, oy: any): boolean;
    export { slash_1 as slash };
    export function arc(bx: any, by: any, xx: any, yy: any, rad: any, modifier: string, ox: any, oy: any): boolean;
}
declare let KinkyDungeonStatStaminaCostAttack: number;
/** @type {Record<string, Record<string, number>>} */
declare let KDWeaponLootList: Record<string, Record<string, number>>;
/**
 * @type {Record<string, weapon>}
 */
declare let KinkyDungeonWeapons: Record<string, weapon>;
/**
 * @returns {string}
 * Delegate to KDProcessInputs */
declare function KDProcessInput(type: any, data: any): string;
/**
 *
 * @param {string} type
 * @param {any} data
 * @returns {string}
 */
declare function KDSendInput(type: string, data: any, frame: any, noUpdate: any): string;
/**
 * Handles inputs once per frame
 * @returns {string}
 */
declare function KDProcessInputs(ReturnResult: any): string;
/**
 * @type {{type: string, data: any}[]}
 */
declare let KinkyDungeonInputQueue: {
    type: string;
    data: any;
}[];
declare function KDHandleGame(): boolean;
declare function KinkyDungeonDrawInterface(showControls: any): void;
declare function KDDrawSpellChoices(): void;
declare function KDCycleSpellPage(reverse: any, noWrap: any, force: any): void;
declare function KinkyDungeonCanSleep(): boolean;
declare function KDLinspace(min: any, max: any, steps: any): any[];
declare function KDSteps(max: any, step: any, maxStep?: number): any[];
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} width
 */
declare function KDDrawStatusBars(x: number, y: number, width?: number): void;
declare function KDDrawWeaponSwap(x: any, y: any): boolean;
declare function KinkyDungeonDrawActionBar(x: any, y: any): void;
declare function KDAutoStruggleClick(): void;
declare function KinkyDungeonActivateWeaponSpell(instant: any): boolean;
declare function KinkyDungeonRangedAttack(): boolean;
declare function KinkyDungeonHandleHUD(): boolean;
declare function KinkyDungeonUpdateStruggleGroups(): void;
/**
 *
 * @param {item} item
 * @returns {boolean}
 */
declare function KDCanStruggle(item: item): boolean;
/**
 *
 * @param {item} item
 * @returns {boolean}
 */
declare function KDCanRemove(item: item): boolean;
/**
 *
 * @param {item} inv
 * @param {boolean} allowInaccessible
 */
declare function KDGetItemLinkIndex(inv: item, allowInaccessible: boolean): number;
/**
 *
 * @param {number} skip - Skips the button being drawn in this instance
 */
declare function KDDrawNavBar(skip: number, quit?: boolean): void;
declare function KDCullSpellChoices(): void;
/**
 * Sets the focus control and also initializes default settings
 * @param {string} control
 */
declare function KDSetFocusControl(control: string): void;
/**
 * Sets the focus control and also initializes default settings
 * @param {string} control
 */
declare function KDInitFocusControl(control: string): void;
declare function KDSetFocusControlToggle(key: any, value: any): void;
declare function KDInputFocusControlToggle(key: any, value: any): void;
declare function KDDrawMinimap(MinimapX: any, MinimapY: any): void;
/**
 * Draws the party member display
 * @param {number} PartyX
 * @param {number} PartyY
 * @param {object[]} tooltips
 */
declare function KDDrawPartyMembers(PartyX: number, PartyY: number, tooltips: object[]): void;
declare function KDGetStatsWeaponCast(): Record<string, {
    text: string;
    icon?: string;
    count?: string;
    category: string;
    priority?: number;
    color: string;
    bgcolor: string;
    countcolor?: string;
    click?: string;
    buffid?: string;
}>;
declare function KDProcessBuffIcons(minXX: any, minYY: any, side: any): void;
declare function KDDrawBuffIcons(minXX: any, minYY: any, statsDraw: any, side: any): void;
declare function KDDrawStruggleGroups(): void;
/**
 *
 * @param {number} tightness
 * @returns {string}
 */
declare function KDTightnessRank(tightness: number): string;
declare let KDUISmoothness: number;
declare let KinkyDungeonStruggleGroups: any[];
declare let KinkyDungeonStruggleGroupsBase: string[];
declare namespace KDDrawStruggleEnum {
    const MOST: number;
    const FULL: number;
    const STRUGGLE: number;
    const NONE: number;
}
declare let KinkyDungeonDrawStruggle: number;
declare let KDPlayerSetPose: boolean;
declare let KDToggleXRay: number;
declare let KDBulletTransparency: boolean;
declare let KD_XRayHidden: string[];
declare let KinkyDungeonDrawStruggleHover: boolean;
declare let KinkyDungeonDrawState: string;
declare let KinkyDungeonDrawStatesModal: string[];
declare let KinkyDungeonSpellValid: boolean;
declare let KinkyDungeonCamX: number;
declare let KinkyDungeonCamY: number;
declare let KinkyDungeonCamXVis: number;
declare let KinkyDungeonCamYVis: number;
declare let KinkyDungeonTargetX: number;
declare let KinkyDungeonTargetY: number;
declare let KinkyDungeonLastDraw: number;
declare let KinkyDungeonLastDraw2: number;
declare let KinkyDungeonDrawDelta: number;
declare let KD_HUD_RESTRAINTINFOFONTSIZE: number;
declare let KD_HUD_RESTRAINTINFOLINESIZE: number;
declare const KinkyDungeonLastChatTimeout: 10000;
declare let KinkyDungeonStatBarHeight: number;
declare let KinkyDungeonToggleAutoDoor: boolean;
declare let KinkyDungeonToggleAutoPass: boolean;
declare let KinkyDungeonToggleAutoSprint: boolean;
declare let KinkyDungeonInspect: boolean;
declare let KinkyDungeonFastMove: boolean;
declare let KinkyDungeonFastMovePath: any[];
declare let KinkyDungeonFastStruggle: boolean;
declare let KinkyDungeonFastStruggleType: string;
declare let KinkyDungeonFastStruggleGroup: string;
declare let KDMinBuffX: number;
declare let KDMinBuffXTarget: number;
declare let KDToggleShowAllBuffs: boolean;
declare let KDFocusControls: string;
declare namespace KDFocusControlButtons {
    namespace AutoPass {
        const HelplessEnemies: boolean;
        const HelplessAllies: boolean;
        const Summons: boolean;
        const Allies: boolean;
        const Neutral: boolean;
        const Shop: boolean;
        const Special: boolean;
    }
    namespace AutoPath {
        const SuppressBeforeCombat: boolean;
        const SuppressDuringCombat: boolean;
    }
}
declare namespace KDBuffSprites {
    const Camo: boolean;
    const Drenched: boolean;
    const StoneSkin: boolean;
    const Conduction: boolean;
    const Ignite: boolean;
    const Burning: boolean;
    const Unsteady: boolean;
    const Unsteady2: boolean;
    const Chilled: boolean;
    const ChillWalk: boolean;
    const Slimed: boolean;
    const LightningRod: boolean;
    const PoisonDagger: boolean;
    const Cutting: boolean;
    const Slippery: boolean;
    const ScrollVerbal: boolean;
    const ScrollArms: boolean;
    const ScrollLegs: boolean;
    const Empower: boolean;
    const SlimeMimic: boolean;
    const d_SlimeMimic: boolean;
    const DisenchantSelf: boolean;
    const LeatherBurst: boolean;
    const TabletElements: boolean;
    const TabletConjure: boolean;
    const TabletIllusion: boolean;
    const TabletRope: boolean;
    const TabletWill: boolean;
    const TabletMetal: boolean;
    const TabletLatex: boolean;
    const TabletLeather: boolean;
    const AvatarFire: boolean;
    const AvatarWater: boolean;
    const AvatarEarth: boolean;
    const AvatarAir: boolean;
    const DistractionCast: boolean;
    const BoundByFate: boolean;
    const Taunted: boolean;
    const GreaterInvisibility: boolean;
    const Invisibility: boolean;
    const Haunted: boolean;
    const Cursed: boolean;
    const DildoBatBuff: boolean;
    const Corrupted: boolean;
    const CursedDistract: boolean;
    const ForcedSubmission: boolean;
    const CursingCircle: boolean;
}
declare namespace KDStatsSkipLine {
    const info: number;
    const status: number;
    const dmg: number;
    const resist: number;
}
declare namespace KDStatsSkipLineBefore {
    const kinky: number;
    const curse: number;
    const perk: number;
}
declare namespace KDStatsOrder {
    const info_1: number;
    export { info_1 as info };
    const status_1: number;
    export { status_1 as status };
    const resist_1: number;
    export { resist_1 as resist };
    const dmg_1: number;
    export { dmg_1 as dmg };
    export const help: number;
    export const buffs: number;
    const perk_1: number;
    export { perk_1 as perk };
    const kinky_1: number;
    export { kinky_1 as kinky };
    const curse_1: number;
    export { curse_1 as curse };
}
declare let KDUIColor: string;
declare let KDUIAlpha: number;
declare let KDUIColorHighlight: string;
declare let KDUIAlphaHighlight: number;
declare let KDModalArea_x: number;
declare let KDModalArea_y: number;
declare let KDModalArea_width: number;
declare let KDModalArea_height: number;
declare let KDModalArea: boolean;
declare let KDConfirmDeleteSave: boolean;
declare let KDStruggleGroupLinkIndex: {};
declare let currentDrawnSG: any;
declare let currentDrawnSGLength: number;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string} [noReplace]
 * @returns {boolean}
 */
declare function KDWallVert(x: number, y: number, noReplace?: string): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string} [noReplace]
 * @returns {boolean}
 */
declare function KDWallVertAbove(x: number, y: number, noReplace?: string): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string} [noReplace]
 * @returns {boolean}
 */
declare function KDWallVertBoth(x: number, y: number, noReplace?: string): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
declare function KDWallHorizTunnel(x: number, y: number): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
declare function KDWallVertTunnel(x: number, y: number): boolean;
declare function KinkyDungeonGetSprite(code: any, x: any, y: any, Fog: any, noReplace: any): string;
/** For multilayer sprites */
declare function KinkyDungeonGetSpriteOverlay2(code: any, x: any, y: any, Fog: any, noReplace: any): string;
declare function KinkyDungeonGetSpriteOverlay(code: any, x: any, y: any, Fog: any, noReplace: any): string;
declare function KinkyDungeonDrawGame(): void;
/**
 * Draws arousal screen filter
 * @param {number} y1 - Y to draw filter at.
 * @param {number} h - Height of filter
 * @param {number} Width - Width of filter
 * @param {number} ArousalOverride - Override to the existing arousal value
 * @returns {void} - Nothing.
 */
declare function KDDrawArousalScreenFilter(y1: number, h: number, Width: number, ArousalOverride: number, Color?: string, AlphaBonus?: number): void;
declare function KDCanAttack(): boolean;
declare function KinkyDungeonSendFloater(Entity: any, Amount: any, Color: any, Time: any, LocationOverride: any, suff?: string): void;
declare function KinkyDungeonDrawFloaters(CamX: any, CamY: any): void;
/**
 * Easing function makes things smooth
 * @param {number} value
 * @returns {number}
 */
declare function KDEase(value: number): number;
declare function KinkyDungeonDrawMessages(NoLog: any): void;
declare function KDhexToRGB(h: any): {
    r: string;
    g: string;
    b: string;
};
declare function KinkyDungeonUpdateVisualPosition(Entity: any, amount: any): number;
/**
 * Sets the target location based on MOUSE location
 */
declare function KinkyDungeonSetTargetLocation(): void;
declare function KDGetMoveDirection(): {
    x: number;
    y: number;
};
/**
 * Sets the move direction based on MOUSE location
 */
declare function KinkyDungeonSetMoveDirection(): void;
/**
 * Draws a box component
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Color - Color of the component
 * @param {boolean} [NoBorder] - Color of the component
 * @param {number} [Alpha] - Transparency of the box
 * @param {number} [zIndex] - z Index
 *  @returns {void} - Nothing
 */
declare function DrawBoxKD(Left: number, Top: number, Width: number, Height: number, Color: string, NoBorder?: boolean, Alpha?: number, zIndex?: number): void;
/**
 * Draws a box component
 * @param {any} Container - Container to draw to
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Color - Color of the component
 * @param {boolean} [NoBorder] - Color of the component
 * @param {number} [Alpha] - Transparency of the box
 * @param {number} [zIndex] - z Index
 *  @returns {void} - Nothing
 */
declare function DrawBoxKDTo(Container: any, Left: number, Top: number, Width: number, Height: number, Color: string, NoBorder?: boolean, Alpha?: number, zIndex?: number): void;
/**
 *
 * @param {*} Text
 * @param {*} X
 * @param {*} Y
 * @param {*} Width
 * @param {*} Color
 * @param {*} [BackColor]
 * @param {*} [FontSize]
 * @param {*} [Align]
 * @param {*} [zIndex]
 * @param {*} [alpha]
 * @param {*} [border]
 * @param {boolean} [unique] - This button is not differentiated by position
 */
declare function DrawTextFitKD(Text: any, X: any, Y: any, Width: any, Color: any, BackColor?: any, FontSize?: any, Align?: any, zIndex?: any, alpha?: any, border?: any, unique?: boolean): void;
/**
 *
 * @param {any} Container
 * @param {*} Text
 * @param {*} X
 * @param {*} Y
 * @param {*} Width
 * @param {*} Color
 * @param {*} [BackColor]
 * @param {*} [FontSize]
 * @param {*} [Align]
 * @param {*} [zIndex]
 * @param {*} [alpha]
 * @param {*} [border]
 * @param {boolean} [unique] - This button is not differentiated by position
 */
declare function DrawTextFitKDTo(Container: any, Text: any, X: any, Y: any, Width: any, Color: any, BackColor?: any, FontSize?: any, Align?: any, zIndex?: any, alpha?: any, border?: any, unique?: boolean): void;
/**
 *
 * @param {*} Text
 * @param {*} X
 * @param {*} Y
 * @param {*} Color
 * @param {*} [BackColor]
 * @param {*} [FontSize]
 * @param {*} [Align]
 * @param {*} [zIndex]
 * @param {*} [alpha]
 */
declare function DrawTextKD(Text: any, X: any, Y: any, Color: any, BackColor?: any, FontSize?: any, Align?: any, zIndex?: any, alpha?: any, border?: any): void;
/**
 *
 * @param {{Text: string, X: number, Y: number, Width?: number, Color: string, BackColor: string, FontSize?: number, align?: string, zIndex?: number, alpha?: number, border?: number, unique?: boolean}} Params
 * @returns {boolean} - If it worked
 */
declare function DrawTextVisKD(Container: any, Map: any, id: any, Params: {
    Text: string;
    X: number;
    Y: number;
    Width?: number;
    Color: string;
    BackColor: string;
    FontSize?: number;
    align?: string;
    zIndex?: number;
    alpha?: number;
    border?: number;
    unique?: boolean;
}): boolean;
/**
 * Draws a basic rectangle filled with a given color
 * @param {any} Container
 * @param {Map<string, any>} Map
 * @param {{Left: number, Top: number, Width: number, Height: number, Color: string, LineWidth: number, zIndex: number, alpha?: number}} Params - rect parameters
 * @returns {boolean} - If it worked
 */
declare function DrawRectKD(Container: any, Map: Map<string, any>, id: any, Params: {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Color: string;
    LineWidth: number;
    zIndex: number;
    alpha?: number;
}): boolean;
/**
 * Draws a hollow circle
 * @param {any} Container
 * @param {Map<string, any>} Map
 * @param {{Left: number, Top: number, Width: number, Height: number, Color: string, LineWidth: number, zIndex: number, alpha?: number}} Params - rect parameters
 * @returns {boolean} - If it worked
 */
declare function DrawCircleKD(Container: any, Map: Map<string, any>, id: any, Params: {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Color: string;
    LineWidth: number;
    zIndex: number;
    alpha?: number;
}): boolean;
/**
 * Draws a +
 * @param {any} Container
 * @param {Map<string, any>} Map
 * @param {{Left: number, Top: number, Width: number, Height: number, Color: string, LineWidth: number, zIndex: number, alpha?: number}} Params - rect parameters
 * @returns {boolean} - If it worked
 */
declare function DrawCrossKD(Container: any, Map: Map<string, any>, id: any, Params: {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Color: string;
    LineWidth: number;
    zIndex: number;
    alpha?: number;
}): boolean;
/**
 * Draws a basic rectangle filled with a given color
 * @param {any} Container
 * @param {Map<string, any>} Map
 * @param {{Left: number, Top: number, Width: number, Height: number, Color: string, LineWidth?: number, zIndex: number, alpha?: number}} Params - rect parameters
 * @returns {boolean} - If it worked
 */
declare function FillRectKD(Container: any, Map: Map<string, any>, id: any, Params: {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Color: string;
    LineWidth?: number;
    zIndex: number;
    alpha?: number;
}): boolean;
/**
 * Draws a button component
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Label - Text to display in the button
 * @param {string} Color - Color of the component
 * @param {string} [Image] - URL of the image to draw inside the button, if applicable
 * @param {string} [HoveringText] - Text of the tooltip, if applicable
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {boolean} [NoBorder] - Disables the button border and only draws the image and selection halo
 * @param {string} [FillColor] - Color of the background
 * @param {number} [FontSize] - Color of the background
 * @param {boolean} [ShiftText] - Shift text to make room for the button
 * @param {boolean} [Stretch] - Stretch the image to fit
 * @param {number} [zIndex] - Stretch the image to fit
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha]
 * @param {number} [options.zIndex] - zIndex
 * @param {boolean} [options.scaleImage] - zIndex
 * @param {boolean} [options.centered] - centered
 * @param {boolean} [options.centerText] - centered
 * @param {string} [options.tint] - tint
 * @param {string} [options.hotkey] - hotkey
 * @param {string} [options.hotkeyPress] - hotkey
 * @returns {void} - Nothing
 */
declare function DrawButtonVis(Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, Stretch?: boolean, zIndex?: number, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
    scaleImage?: boolean;
    centered?: boolean;
    centerText?: boolean;
    tint?: string;
    hotkey?: string;
    hotkeyPress?: string;
}): void;
/**
 * Draws a button component
 * @param {any} Container - Container to draw to
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Label - Text to display in the button
 * @param {string} Color - Color of the component
 * @param {string} [Image] - URL of the image to draw inside the button, if applicable
 * @param {string} [HoveringText] - Text of the tooltip, if applicable
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {boolean} [NoBorder] - Disables the button border and only draws the image and selection halo
 * @param {string} [FillColor] - Color of the background
 * @param {number} [FontSize] - Color of the background
 * @param {boolean} [ShiftText] - Shift text to make room for the button
 * @param {boolean} [Stretch] - Stretch the image to fit
 * @param {number} [zIndex] - Stretch the image to fit
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha]
 * @param {number} [options.zIndex] - zIndex
 * @param {boolean} [options.unique] - This button is not differentiated by position
 * @param {boolean} [options.scaleImage] - zIndex
 * @param {boolean} [options.centered] - centered
 * @param {boolean} [options.centerText] - centered
 * @param {string} [options.tint] - tint
 * @param {string} [options.hotkey] - hotkey
 * @param {string} [options.hotkeyPress] - hotkey
 * @returns {void} - Nothing
 */
declare function DrawButtonVisTo(Container: any, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, Stretch?: boolean, zIndex?: number, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
    unique?: boolean;
    scaleImage?: boolean;
    centered?: boolean;
    centerText?: boolean;
    tint?: string;
    hotkey?: string;
    hotkeyPress?: string;
}): void;
/**
 * Draws a checkbox component
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Text - Label associated with the checkbox
 * @param {boolean} IsChecked - Whether or not the checkbox is checked
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {string} [TextColor] - Color of the text
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha]
 * @param {number} [options.zIndex] - zIndex
 * @returns {void} - Nothing
 */
declare function DrawCheckboxVis(Left: number, Top: number, Width: number, Height: number, Text: string, IsChecked: boolean, Disabled?: boolean, TextColor?: string, CheckImage?: string, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
}): void;
/**
 * Draws a checkbox component
 * @param {string} name - Name of the button element
 * @param {(bdata: any) => boolean} func - Whether or not you can click on it
 * @param {boolean} enabled - Whether or not you can click on it
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Text - Label associated with the checkbox
 * @param {boolean} IsChecked - Whether or not the checkbox is checked
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {string} [TextColor] - Color of the text
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha]
 * @param {number} [options.zIndex] - zIndex
 * @param {number} [options.maxWidth] - Max width
 * @param {number} [options.fontSize] - fontSize
 * @param {boolean} [options.scaleImage] - zIndex
 * @returns {void} - Nothing
 */
declare function DrawCheckboxKDEx(name: string, func: (bdata: any) => boolean, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Text: string, IsChecked: boolean, Disabled?: boolean, TextColor?: string, CheckImage?: string, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
    maxWidth?: number;
    fontSize?: number;
    scaleImage?: boolean;
}): void;
/**
 * Draw a back & next button component
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Label - Text inside the component
 * @param {string} Color - Color of the component
 * @param {string} [Image] - Image URL to draw in the component
 * @param {() => string} [BackText] - Text for the back button tooltip
 * @param {() => string} [NextText] - Text for the next button tooltip
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {number} [ArrowWidth] - How much of the button the previous/next sections cover. By default, half each.
 * @param {boolean} [NoBorder] - Disables the hovering options if set to true
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha]
 * @returns {void} - Nothing
 */
declare function DrawBackNextButtonVis(Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, BackText?: () => string, NextText?: () => string, Disabled?: boolean, ArrowWidth?: number, NoBorder?: boolean, options?: {
    noTextBG?: boolean;
    alpha?: number;
}): void;
/**
 *
 * @param {number} CamX
 * @param {number} CamY
 * @param {number} CamX_offset
 * @param {number} CamY_offset
 * @param {boolean} [Debug]
 * @returns {any}
 */
declare function KDDrawMap(CamX: number, CamY: number, CamX_offset: number, CamY_offset: number, CamX_offsetVis: any, CamY_offsetVis: any, Debug?: boolean): any;
/**
 *
 * @param {any} Container
 * @param {Map<string, any>} Map
 * @param {string} Image
 * @param {number} Left
 * @param {number} Top
 * @param {number} Width
 * @param {number} Height
 * @param {number} [Rotation]
 * @param {any} [options]
 * @param {boolean} [Centered]
 * @param {Map<string, boolean>} [SpritesDrawn]
 * @param {number} [Scale]
 * @param {boolean} [Nearest]
 * @returns {any}
 */
declare function KDDraw(Container: any, Map: Map<string, any>, id: any, Image: string, Left: number, Top: number, Width: number, Height: number, Rotation?: number, options?: any, Centered?: boolean, SpritesDrawn?: Map<string, boolean>, Scale?: number, Nearest?: boolean): any;
/**
 * Returns a PIXI.Texture, or null if there isnt one
 * @param {string} Image
 * @returns {any}
 */
declare function KDTex(Image: string, Nearest: any): any;
/**
 *
 * @param {string} str
 * @returns
 */
declare function string2hex(str: string): number;
declare function GetAdjacentList(list: any, index: any, width: any): {
    left: any;
    right: any;
};
declare function KDUpdateVision(CamX: any, CamY: any, CamX_offset: any, CamY_offset: any): void;
declare function KDGetTileColor(x: any, y: any): string;
declare function KDDrawTileTooltip(maptile: any, x: any, y: any, offset: any): number;
/**
 *
 * @param {effectTile} tile
 * @param {any[]} TooltipList
 * @param {string} color
 * @param {string} [extra]
 * @param {string} [descColor]
 * @param {string} [extraColor]
 */
declare function KDETileTooltipSimple(tile: effectTile, TooltipList: any[], color: string, extra?: string, descColor?: string, extraColor?: string): void;
/**
 *
 * @param {effectTile} tile
 * @param {number} x
 * @param {number} y
 * @param {number} offset
 * @returns {number}
 */
declare function KDDrawEffectTileTooltip(tile: effectTile, x: number, y: number, offset: number): number;
/**
 *
 * @param {any[]} TooltipList
 * @param {number} offset
 * @returns {number}
 */
declare function KDDrawTooltip(TooltipList: any[], offset: number): number;
/**
 * Creates a text field with the specified params
 * @param {string} Name
 * @param {number} Left
 * @param {number} Top
 * @param {number} Width
 * @param {number} Height
 */
declare function KDTextArea(Name: string, Left: number, Top: number, Width: number, Height: number): {
    Element: any;
    Created: boolean;
};
/**
 * Creates a text field with the specified params
 * @param {string} Name
 * @param {number} Left
 * @param {number} Top
 * @param {number} Width
 * @param {number} Height
 * @param {string} Type
 * @param {string} Value
 * @param {string} MaxLength
 */
declare function KDTextField(Name: string, Left: number, Top: number, Width: number, Height: number, Type?: string, Value?: string, MaxLength?: string): {
    Element: any;
    Created: boolean;
};
/**
 * Culls the text fields and other DOM elements created
 */
declare function KDCullTempElements(): void;
/**
 * Draws an existing HTML element at a specific position within the document. The element is "centered" on the given coordinates by dividing its height and width by two.
 * @param {string} ElementID - The id of the input tag to (re-)position.
 * @param {number} X - Center point of the element on the X axis.
 * @param {number} Y - Center point of the element on the Y axis.
 * @param {number} W - Width of the element.
 * @param {number} [H] - Height of the element.
 * @returns {void} - Nothing
 */
declare function KDElementPosition(ElementID: string, X: number, Y: number, W: number, H?: number): void;
/** Whether or not to show the quick inv
 * @returns {boolean}
*/
declare function KDShowQuickInv(): boolean;
declare function KDPlayerDrawPoseButtons(C: any): void;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} - the color in hex
 */
declare function KDGetLightColor(x: number, y: number): number;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} - the color in hex
 */
declare function KDGetLightColorGreyscale(x: number, y: number): number;
/**
 *
 * @returns {boolean}
 */
declare function KDMouseInPlayableArea(): boolean;
/**
 *
 * @param {string} hotkey
 * @returns {string}
 */
declare function KDHotkeyToText(hotkey: string): string;
declare function KDGetTargetRetType(x: any, y: any): "Action" | "Talk" | "Sub" | "Move" | "Attack" | "Pass";
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} scale
 */
declare function KDDrawPalettes(x: number, y: number, w: number, scale?: number): void;
/**
 *
 * @param {number} color
 * @param {number} alpha
 * @param {number} quality
 * @param {number} thickness
 * @returns {PIXIFilter}
 */
declare function KDGetOutlineFilter(color: number, alpha: number, quality: number, thickness: number): PIXIFilter;
declare function KDClearOutlineFilterCache(): void;
declare let KDDebugOverlay: boolean;
declare namespace KDInspectCamera {
    const x: number;
    const y: number;
}
declare let KDRecentRepIndex: number;
declare let ShowBoringness: boolean;
declare let KDWallReplacers: string;
declare let KinkyDungeonSuppressSprint: boolean;
declare let KDReturnButtonXX: number;
declare let KDIntenseFilter: any;
declare let KDButtonHovering: boolean;
declare let KDAnimTick: number;
declare let KDAnimTickInterval: number;
declare let KDAnimTime: number;
declare let KDFloatAnimTime: number;
declare let KDSquishyAnimTime: number;
declare let KDBreathAnimTime: number;
declare let KDFlipPlayer: boolean;
/** @type HTMLCanvasElement */
declare let pixiview: HTMLCanvasElement;
declare let pixirenderer: any;
declare let pixirendererKD: any;
declare let kdgamefog: import("pixi.js").Graphics;
declare let kdgamefogsmoothDark: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdgamefogsmooth: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdgamesound: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdsolidcolorfilter: import("pixi.js").Filter;
declare let kdoutlinefilter: import("pixi-filters").OutlineFilter;
declare let KDOutlineFilterCache: Map<any, any>;
declare let kdminimap: import("pixi.js").Graphics;
declare let kdmapboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdlightmap: any;
declare let kdlightmapGFX: any;
declare let kdbrightnessmap: any;
declare let kdbrightnessmapGFX: any;
declare let kddarkdesaturatefilter: import("pixi.js").Filter;
declare let kdfogfilter: import("pixi.js").Filter;
declare let kdgammafilterstore: number[];
declare let kdgammafilter: import("pixi.js").Filter;
declare let kdmultiplyfilter: import("pixi.js").Filter;
declare let KDBoardFilters: import("pixi.js").Filter[];
declare let kdenemyboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdenemystatusboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdbulletboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdeffecttileboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdUItext: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdstatusboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdfloatercanvas: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kddialoguecanvas: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdenemydialoguecanvas: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kditemsboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdwarningboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdwarningboardOver: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdgameboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdui: import("pixi.js").Graphics;
declare let kdcanvas: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let statusOffset: number;
declare let kdparticles: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let KDTextWhite: string;
declare let KDTextGray3: string;
declare let KDTextTan: string;
declare let KDTextGray2: string;
declare let KDTextGray1: string;
declare let KDTextGray05: string;
declare let KDTextGray0: string;
declare let KDTextGreen1: string;
declare let KDTextBlue1: string;
declare let KDTextRed1: string;
declare let KDCurseColor: string;
declare let KDGoodColor: string;
/**
 * @type {Map<string, boolean>}
 */
declare let kdSpritesDrawn: Map<string, boolean>;
/**
 * @type {Map<string, any>}
 */
declare let kdlightsprites: Map<string, any>;
/**
 * @type {Map<string, any>}
 */
declare let kdpixisprites: Map<string, any>;
/**
 * @type {Map<string, any>}
 */
declare let kdminimapsprites: Map<string, any>;
/**
 * @type {Map<string, any>}
 */
declare let kdpixifogsprites: Map<string, any>;
/**
 * @type {Map<string, any>}
 */
declare let kdpixibrisprites: Map<string, any>;
/**
 * @type {Map<string, any>}
 */
declare let kdprimitiveparams: Map<string, any>;
/**
  * @type {Map<string, any>}
  */
declare let kdpixitex: Map<string, any>;
declare let KDChainablePillar: string;
/** @type KDSprites */
declare const KDSprites: KDSprites;
/** @type KDSprites */
declare const KDOverlays: KDSprites;
/** @type KDSprites */
declare const KDOverlays2: KDSprites;
declare namespace KDSpecialChests {
    const silver: string;
    const shadow: string;
    const lessershadow: string;
    const kitty: string;
    const robot: string;
}
/**
 * @type {Record<string, number>}
 */
declare let KDLastKeyTime: Record<string, number>;
declare let KinkyDungeonFloaters: any[];
declare let KinkyDungeonLastFloaterTime: number;
declare let KDTimescale: number;
declare let KDBulletSpeed: number;
declare let KDEntitiesFloaterRegisty: Map<any, any>;
declare let KDFloaterSpacing: number;
declare let KinkyDungeonMessageToggle: boolean;
declare let KinkyDungeonMessageLog: any[];
declare let KDLogDist: number;
declare let KDMSGFontSize: number;
declare let KDLogHeight: number;
declare let KDMaxLog: number;
declare let KDLogTopPad: number;
declare let KDLogIndex: number;
declare let KDLogIndexInc: number;
declare let KDMsgWidth: number;
declare let KDMsgWidthMin: number;
declare let KDMsgX: number;
declare let KDMsgFadeTime: number;
declare let KDMaxConsoleMsg: number;
declare let KDBoxThreshold: number;
declare let KDButtonColor: string;
declare let KDButtonColorIntense: string;
declare let KDBorderColor: string;
declare let KDFont: string;
declare let KDFontName: string;
declare let KDAllowText: boolean;
/**
 * @type {Record<string, (x: number, y: number) => {color: string, text: string, desc?: string, noInspect?: boolean}>}
 */
declare let KDTileTooltips: Record<string, (x: number, y: number) => {
    color: string;
    text: string;
    desc?: string;
    noInspect?: boolean;
}>;
/**
 * @type {Record<string, {color: string, code: (tile, x, y, TooltipList) => void}>}
 */
declare let KDEffectTileTooltips: Record<string, {
    color: string;
    code: (tile: any, x: any, y: any, TooltipList: any) => void;
}>;
/**
 * Elements which are temporary and drawn using a declarative style
 * If not redrawn at the end of a frame, they will be removed
 */
declare let KDTempElements: Map<any, any>;
/**
 * Elements which are temporary and drawn using a declarative style
 * If not redrawn at the end of a frame, they will be removed
 */
declare let KDDrawnElements: Map<any, any>;
declare let KDUpdateFog: boolean;
declare namespace KDLastCamPos {
    const x_1: number;
    export { x_1 as x };
    const y_1: number;
    export { y_1 as y };
}
declare let KDDrawPlayer: boolean;
declare let KDDesiredPlayerPose: {};
declare namespace KDFurniture {
    namespace Cage {
        const floor: string;
        const sprite: string;
        const restraintTag: string;
        function tickFunction(delta: any): void;
    }
    namespace DisplayStand {
        const floor_1: string;
        export { floor_1 as floor };
        const sprite_1: string;
        export { sprite_1 as sprite };
        const restraintTag_1: string;
        export { restraintTag_1 as restraintTag };
        export function tickFunction_1(delta: any): void;
        export { tickFunction_1 as tickFunction };
    }
    namespace DisplayEgyptian {
        const floor_2: string;
        export { floor_2 as floor };
        const sprite_2: string;
        export { sprite_2 as sprite };
        const restraintTag_2: string;
        export { restraintTag_2 as restraintTag };
        export function tickFunction_2(delta: any): void;
        export { tickFunction_2 as tickFunction };
    }
}
declare function KinkyDungeonSearchSpell(list: any, name: any): any;
/**
 *
 * @param {string} name
 * @param {boolean} SearchEnemies
 * @returns {spell}
 */
declare function KinkyDungeonFindSpell(name: string, SearchEnemies?: boolean): spell;
declare function KinkyDungeonDisableSpell(Name: any): void;
declare function KinkyDungeonResetMagic(): void;
declare function KDPushSpell(spell: any): void;
declare function KDUpdateSpellCache(): void;
/**
 *
 * @param {string} name
 * @returns {boolean}
 */
declare function KDHasSpell(name: string): boolean;
/**
 *
 * @param {string} name
 * @param {number} Level - Spell level. Set to -1 to allow any level
 * @returns {spell}
 */
declare function KDGetUpcast(name: string, Level: number): spell;
/**
 *
 * @param {string} name
 * @returns {boolean}
 */
declare function KDHasUpcast(name: string): boolean;
/**
 *
 * @returns {boolean}
 */
declare function KDCanUpcast(): boolean;
declare function KDEmpower(data: any, entity: any): void;
declare function KinkyDungeoCheckComponentsPartial(spell: any, x: any, y: any, includeFull: any, noOverride: any): any[];
declare function KinkyDungeoCheckComponents(spell: any, x: any, y: any, noOverride: any): any[];
declare function KinkyDungeonHandleSpellChoice(SpellChoice: any): any;
/**
 *
 * @param {spell} spell
 * @param {number} [x]
 * @param {number} [y]
 * @returns {boolean}
 */
declare function KDSpellIgnoreComp(spell: spell, x?: number, y?: number): boolean;
declare function KinkyDungeonHandleSpellCast(spell: any): any;
declare function KinkyDungeonClickSpell(i: any): {
    spell: any;
    clicked: boolean;
};
declare function KinkyDungeonHandleSpell(ind: any): boolean;
/**
 *
 * @param {spell} Spell
 * @returns {number}
 */
declare function KinkyDungeonGetStaminaCost(Spell: spell, Passive: any, Toggle: any): number;
/**
 *
 * @param {spell} Spell
 * @returns {number}
 */
declare function KinkyDungeonGetManaCost(Spell: spell, Passive: any, Toggle: any): number;
/**
 *
 * @param {spell} Spell
 * @returns {number}
 */
declare function KinkyDungeonGetChargeCost(Spell: spell, Passive: any, Toggle: any): number;
/**
 *
 * @param {spell} Spell
 * @returns {number}
 */
declare function KinkyDungeonGetCost(Spell: spell): number;
declare function KinkyDungeonMakeNoise(radius: any, noiseX: any, noiseY: any, hideShockwave: any): void;
/**
 *
 * @param {number} targetX
 * @param {number} targetY
 * @param {spell} spell
 * @param {*} enemy
 * @param {*} player
 * @param {*} bullet
 * @param {string} [forceFaction]
 * @param {any} [castData]
 * @returns {{result: string, data: any}}
 */
declare function KinkyDungeonCastSpell(targetX: number, targetY: number, spell: spell, enemy: any, player: any, bullet: any, forceFaction?: string, castData?: any): {
    result: string;
    data: any;
};
declare function KinkyDungeonClickSpellChoice(I: any, CurrentSpell: any): void;
declare function KinkyDungeonClickItemChoice(I: any, name: any): void;
declare function KinkyDungeonHandleMagic(): boolean;
declare function KDGetPrerequisite(spell: any): string;
/**
 *
 * @param {spell} spell
 * @returns {boolean}
 */
declare function KinkyDungeonCheckSpellPrerequisite(spell: spell): boolean;
declare function KinkyDungeonDetectLanguageForMaxWidth(str: any, maxWidthTranslate: any, maxWidthEnglish: any): any;
declare function KinkyDungeonWordWrap(str: any, maxWidthTranslate: any, maxWidthEnglish: any): string;
declare function KinkyDungeonTestWhite(x: any, language: any): any;
declare function KDSchoolColor(school: any): any;
declare function KinkyDungeonDrawMagic(): void;
declare function KDFilterSpellPages(): string[][][];
declare function KDFilterSpellPageNames(): string[];
declare function KDCorrectCurrentSpellPage(pages: any): number;
/**
 *
 * @param {spell} spell
 * @returns {boolean}
 */
declare function KDFilterSpell(spell: spell): boolean;
declare function KinkyDungeonListSpells(Mode: any): spell;
declare function KinkyDungeonDrawMagicSpells(): void;
declare function KinkyDungeonHandleMagicSpells(): boolean;
declare function KinkyDungeonSpellIndex(Name: any): number;
declare function KinkyDungeonSetPreviewSpell(spell: any): void;
declare function KinkyDungeonGetCompList(spell: any): string;
declare function KinkyDungeonSendMagicEvent(Event: any, data: any, forceSpell: any): void;
declare function KDCastSpellToEnemies(fn: any, tX: any, tY: any, spell: any): boolean;
/**
 * Returns true if the enemy matches one of the tags
 * @param {string[]} tags
 * @param {entity} entity
 * @returns {boolean}
 */
declare function KDMatchTags(tags: string[], entity: entity): boolean;
declare function KinkyDungeonLoadSpellsConfig(): void;
declare function KinkyDungeonSaveSpellsConfig(): void;
declare function KDDrawHotbar(xLoc: any, yLoc: any, name: any, fn: any): void;
declare function KDClearChoices(): void;
declare function KDGetRandomSpell(maxSpellLevel?: number): spell;
declare function KinkyDungeonGetUnlearnedSpells(minlevel: any, maxlevel: any, SpellList: any): any[];
declare let KinkyDungeonManaCost: number;
declare let KDEmpowerSprite: string;
declare let KDMaxEmpower: number;
declare let KDConfirmClearSpells: boolean;
declare let KinkyDungeonBookScale: number;
declare let KDFlashMana: number;
declare let KinkyDungeonMysticSeals: number;
declare let KinkyDungeonCurrentBook: string;
declare let KinkyDungeonCurrentPage: number;
declare let KinkyDungeonCurrentSpellsPage: number;
declare let KinkyDungeonBooks: string[];
declare let KinkyDungeonPreviewSpell: any;
declare let KinkyDungeonSpellChoices: number[];
/** @type {string[]} */
declare let KinkyDungeonWeaponChoices: string[];
/** @type {string[]} */
declare let KinkyDungeonArmorChoices: string[];
/** @type {string[]} */
declare let KinkyDungeonConsumableChoices: string[];
declare let KinkyDungeonSpellChoicesToggle: boolean[];
declare let KinkyDungeonSpellChoiceCount: number;
declare let KinkyDungeonSpellChoiceCountPerPage: number;
declare let KDSpellPage: number;
declare let KinkyDungeonSpellOffset: number;
declare let KinkyDungeonSpellChoiceOffset: number;
declare let KDPlayerHitBy: any[];
declare namespace KDSchoolColors {
    const Elements: string;
    const Conjure: string;
    const Illusion: string;
}
declare let KinkyDungeonMiscastPityModifier: number;
declare let KinkyDungeonMiscastPityModifierIncrementPercentage: number;
/** @type {Record<string, KDSpellComponent>} */
declare let KDSpellComponentTypes: Record<string, KDSpellComponent>;
declare let KDSpellMemo: {};
declare let KinkyDungeonSpellPress: string;
declare let KDRefreshSpellCache: boolean;
declare let KDSpellCache: Map<any, any>;
declare let KDUpcastFromCache: Map<any, any>;
declare let KDEventSpells: Map<any, any>;
declare let KDSwapSpell: number;
declare let selectedFilters: string[];
declare let genericfilters: string[];
declare let KDSpellListIndex: number;
declare let KDSpellListIndexVis: number;
declare let KDMaxSpellPerColumn: number;
declare let KDMaxSpellYY: number;
declare let KDMagicFilter: string;
declare let MagicSpellsUIShift: number;
/**
 * @type {Record<string, (spell: any, data: any, targetX: any, targetY: any, tX: any, tY: any, entity: any, enemy: any, moveDirection: any, bullet: any, miscast: any, faction: any, cast: any, selfCast: any) => void | string>}
 */
declare let KinkyDungeonSpellSpecials: Record<string, (spell: any, data: any, targetX: any, targetY: any, tX: any, tY: any, entity: any, enemy: any, moveDirection: any, bullet: any, miscast: any, faction: any, cast: any, selfCast: any) => void | string>;
declare namespace KDCommandCaptureBindings {
    function vine(spell: any, entity: any, faction: any, bullet: any, miscast: any, attacker: any, counter: any): void;
    function rope(spell: any, entity: any, faction: any, bullet: any, miscast: any, attacker: any, counter: any): void;
    function fabric(spell: any, entity: any, faction: any, bullet: any, miscast: any, attacker: any, counter: any): void;
    function belt(spell: any, entity: any, faction: any, bullet: any, miscast: any, attacker: any, counter: any): void;
    function chain(spell: any, entity: any, faction: any, bullet: any, miscast: any, attacker: any, counter: any): void;
}
declare namespace KDCommandBindBindings {
    export function vine_1(spell: any, x: any, y: any, faction: any, bullet: any, miscast: any, attacker: any, counter: any): void;
    export { vine_1 as vine };
    export function rope_1(spell: any, x: any, y: any, faction: any, bullet: any, miscast: any, attacker: any, counter: any): void;
    export { rope_1 as rope };
    export function fabric_1(spell: any, x: any, y: any, faction: any, bullet: any, miscast: any, attacker: any, counter: any): void;
    export { fabric_1 as fabric };
    export function chain_1(spell: any, x: any, y: any, faction: any, bullet: any, miscast: any, attacker: any, counter: any): void;
    export { chain_1 as chain };
    export function belt_1(spell: any, x: any, y: any, faction: any, bullet: any, miscast: any, attacker: any, counter: any): void;
    export { belt_1 as belt };
}
declare function KDAddSpellPage(page: any, columnLabels?: any[]): void;
/**
 *
 * @param {string} page
 * @param {string[][]} list
 */
declare function KDDefineSpellPage(page: string, list: string[][]): void;
declare namespace KDCommandWord {
    const name: string;
    const tags: string[];
    const sfx: string;
    const school: string;
    const manacost: number;
    const components: string[];
    const level: number;
    const type: string;
    const special: string;
    const noMiscast: boolean;
    const onhit: string;
    const time: number;
    const power: number;
    const range: number;
    const size: number;
    const damage: string;
}
declare namespace KDBondageSpell {
    const name_1: string;
    export { name_1 as name };
    const tags_1: string[];
    export { tags_1 as tags };
    export const quick: boolean;
    const school_1: string;
    export { school_1 as school };
    const manacost_1: number;
    export { manacost_1 as manacost };
    const components_1: string[];
    export { components_1 as components };
    const level_1: number;
    export { level_1 as level };
    export const spellPointCost: number;
    const type_1: string;
    export { type_1 as type };
    const special_1: string;
    export { special_1 as special };
    const noMiscast_1: boolean;
    export { noMiscast_1 as noMiscast };
    const onhit_1: string;
    export { onhit_1 as onhit };
    const time_1: number;
    export { time_1 as time };
    const power_1: number;
    export { power_1 as power };
    const range_1: number;
    export { range_1 as range };
    const size_1: number;
    export { size_1 as size };
    const damage_1: string;
    export { damage_1 as damage };
}
declare namespace KDZeroResistanceSpell {
    const name_2: string;
    export { name_2 as name };
    const tags_2: string[];
    export { tags_2 as tags };
    const quick_1: boolean;
    export { quick_1 as quick };
    const school_2: string;
    export { school_2 as school };
    const manacost_2: number;
    export { manacost_2 as manacost };
    const components_2: string[];
    export { components_2 as components };
    const level_2: number;
    export { level_2 as level };
    const spellPointCost_1: number;
    export { spellPointCost_1 as spellPointCost };
    const type_2: string;
    export { type_2 as type };
    const noMiscast_2: boolean;
    export { noMiscast_2 as noMiscast };
    export const events: {
        type: string;
        trigger: string;
    }[];
    const onhit_2: string;
    export { onhit_2 as onhit };
    const time_2: number;
    export { time_2 as time };
    const power_2: number;
    export { power_2 as power };
    const range_2: number;
    export { range_2 as range };
    const size_2: number;
    export { size_2 as size };
    const damage_2: string;
    export { damage_2 as damage };
}
/**
 * These are starting spells
 */
declare let KinkyDungeonSpellsStart: any[];
declare let filters: string[];
/** Extra filters, indexed according to the learnable spells menu */
declare let filtersExtra: string[][];
declare let KDColumnLabels: string[][];
declare let KinkyDungeonSpellPages: string[];
declare namespace KinkyDungeonSpellPagesDefault {
    const All: boolean;
    const Upgrade: boolean;
    const Class: boolean;
    const Upgrades: boolean;
    const Elements: boolean;
    const Conjure: boolean;
    const Illusion: boolean;
}
declare let KDSpellColumns: {};
/**
 * These spells occur in the menu and the player can learn them
 * Spells with NoBuy cannot be bought, but can be looked at.
 * Spells with NoMenu do not appear in the menu until the player has them
 */
declare let KinkyDungeonLearnableSpells: string[][][];
/**
 * Spells that the player can choose
 * @type {Record<string, spell[]>}
 */
declare let KinkyDungeonSpellList: Record<string, spell[]>;
/**
 * Spells that are not in the base spell lists
 * @type {spell[]}
 */
declare let KinkyDungeonSpellListEnemies: spell[];
/** @type {Record<string, KDBondage>} */
declare let KDSpecialBondage: Record<string, KDBondage>;
declare namespace KDMagicDefs {
    const RopeKraken_TentacleCost: number;
    const RopeKraken_TentacleThreshold: number;
    const RopeKraken_TentacleCountMin: number;
    const RopeKraken_TentacleCountShare: number;
    const SarcoKraken_TentacleCost: number;
    const SarcoKraken_TentacleThreshold: number;
    const SarcoKraken_TentacleCountMin: number;
    const SarcoKraken_TentacleCountMax: number;
    const SarcoKraken_TentacleCountShare: number;
    const SlimeKraken_TentacleCost: number;
    const SlimeKraken_TentacleThreshold: number;
    const SlimeKraken_TentacleCountMin: number;
    const SlimeKraken_TentacleCountShare: number;
}
/** @type {Record<string, (enemy: entity, target: entity, spell?: spell) => boolean>} */
declare let KDCastConditions: Record<string, (enemy: entity, target: entity, spell?: spell) => boolean>;
/** @type {Record<string, (player: entity, x: number, y: number) => boolean>} */
declare let KDPlayerCastConditions: Record<string, (player: entity, x: number, y: number) => boolean>;
declare namespace KDCustomCost {
    function SprintPlusAttack(data: any): void;
    function LimitSurge(data: any): void;
    function stamina(data: any): void;
    function arcane_blast(data: any): void;
    function arcane_akashic(data: any): void;
    function rhythm(data: any): void;
    function evasive(data: any): void;
    function Enrage(data: any): void;
}
/**
 *
 * @param {any} spell
 * @param {number} count
 * @param {string[]} tags
 * @param {string} faction
 * @param {boolean} [noDeep]
 * @param {boolean} [bypass] - Bypass inaccessible things
 * @param {string} [Lock]
 * @param {object} [options]
 * @param {boolean} [options.Progressive]
 * @param {boolean} [options.ProgressiveSkip] - Will skip over stuff already equipped
 * @param {boolean} [options.DontPreferWill]
 * @param {boolean} [options.Keep]
 * @param {boolean} [options.RequireWill]
 * @returns {{r:restraint, v: ApplyVariant}[]}
 */
declare function KDPlayerEffectRestrain(spell: any, count: number, tags: string[], faction: string, noDeep?: boolean, bypass?: boolean, allowEvade?: boolean, allowBlock?: boolean, allowBondageResist?: boolean, Lock?: string, options?: {
    Progressive?: boolean;
    ProgressiveSkip?: boolean;
    DontPreferWill?: boolean;
    Keep?: boolean;
    RequireWill?: boolean;
}): {
    r: restraint;
    v: ApplyVariant;
}[];
declare function KDTestSpellHits(spell: any, allowEvade?: number, allowBlock?: number): boolean;
declare function KinkyDungeonPlayerEffect(target: any, damage: any, playerEffect: any, spell: any, faction: any, bullet: any, entity: any): boolean;
/**
 * For those 'three strikes you're out' effects
 * @param {string} Name
 * @param {entity} Target
 * @param {number} time - Time for the buff to wear off
 * @param {(target: entity) => void} FinalEffect
 * @param {string} buffType - Buff effect
 */
declare function KDTripleBuffKill(Name: string, Target: entity, time: number, FinalEffect?: (target: entity) => void, buffType?: string, FirstEffect?: (target: any) => void, SecondEffect?: (target: any) => void, ThirdEffect?: (target: any) => void): void;
/**
 *
 * @param {boolean} resetSlimeLevel
 * @param {string} restraint
 */
declare function KDAdvanceSlime(resetSlimeLevel: boolean, restraint?: string): boolean;
/**
 * @type {Record<string, (target, damage, playerEffect, spell, faction, bullet, entity) => {sfx: string, effect: boolean}>}
 */
declare let KDPlayerEffects: Record<string, (target: any, damage: any, playerEffect: any, spell: any, faction: any, bullet: any, entity: any) => {
    sfx: string;
    effect: boolean;
}>;
declare function KinkyDungeonShrineInit(): void;
/**
 *
 * @param {string} Name
 * @returns {string}
 */
declare function KDGoddessColor(Name: string): string;
declare function KinkyDungeonShrineAvailable(type: any): boolean;
/**
 *
 * @param {number} Level
 */
declare function KinkyDungeonGenerateShop(Level: number): {
    name: any;
    shoptype: any;
    consumable: any;
    quantity: any;
    rarity: any;
    cost: any;
}[];
/**
 *
 * @param {any} item
 * @param {boolean} [noScale]
 * @param {boolean} [sell]
 * @returns {number}
 */
declare function KinkyDungeonItemCost(item: any, noScale?: boolean, sell?: boolean): number;
declare function KinkyDungeonShrineCost(type: any): number;
declare function KDAddBasic(item: any): void;
declare function KinkyDungeonPayShrine(type: any, mult?: number): void;
declare function KinkyDungeonHandleShrine(): boolean;
declare function KinkyDungeonDrawShrine(): void;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string} Goddess
 * @param {number} [mult]
 * @param {number} [LevelBoost]
 * @returns {number}
 */
declare function KDSummonRevengeMobs(x: number, y: number, Goddess: string, mult?: number, LevelBoost?: number): number;
/**
 *
 * @param {boolean} Bottle - Is this bottling or drinking?
 * @returns {boolean}
 */
declare function KDCanDrinkShrine(Bottle: boolean): boolean;
declare function KinkyDungeonGetSetPieces(Dict: any): any[];
declare function KinkyDungeonGetMapShrines(Dict: any): any[];
declare function KinkyDungeonTakeOrb(Amount: any, X: any, Y: any): void;
declare function KinkyDungeonDrawOrb(): void;
declare function KinkyDungeonHandleOrb(): boolean;
declare function KinkyDungeonTakePerk(Amount: any, X: any, Y: any): void;
declare function KinkyDungeonDrawPerkOrb(): void;
declare function KDGetPosNegColor(value: any): string;
declare function KDGetGoddessBonus(shrine: any): number;
declare function KDDrawRestraintBonus(shrine: any, x: any, y: any, width: number, FontSize: any, align: any, zIndex: any, alpha: any, forceColor: any): void;
/**
 *
 * @param {KDMapDataType} map
 * @param {*} tile
 * @returns {string}
 */
declare function KDGetShrineQuest(map: KDMapDataType, tile: any): string;
/**
 *
 * @param {KDMapDataType} map
 * @param {*} tile
 */
declare function KDSetShrineQuest(map: KDMapDataType, tile: any, quest: any): void;
/**
 * Base costs for all the shrines. Starts at this value, increases thereafter
 * @type {Record<string, number>}
 */
declare let KinkyDungeonShrineBaseCosts: Record<string, number>;
declare let KDRewardProgramScaling: number;
declare let KDRewardProgramBase: number;
declare let KDWillShrineWill: number;
declare let KinkyDungeonOrbAmount: number;
declare let KDShrineRemoveCount: number;
declare let KDMaxGoddessBonus: number;
declare let KDMinGoddessBonus: number;
/**
 * Cost growth, overrides the default amount
 * @type {Record<string, number>}
 */
declare let KinkyDungeonShrineBaseCostGrowth: Record<string, number>;
declare let KinkyDungeonShopIndex: number;
declare let KinkyDungeonShrinePoolChancePerUse: number;
/**
 * Current costs multipliers for shrines
 * @type {Record<string, number>}
 */
declare let KinkyDungeonShrineCosts: Record<string, number>;
declare let KinkyDungeonShrineTypeRemove: string[];
declare let KDLevelsPerCheckpoint: number;
/**
 * @type {Record<string, {require: string[], requireSingle: string[], filter?: string[]}>}
 */
declare let KDGoddessRevengeMobTypes: Record<string, {
    require: string[];
    requireSingle: string[];
    filter?: string[];
}>;
declare let KDOrbX: number;
declare let KDOrbY: number;
declare let KDPerkConfirm: boolean;
declare let KDPerkOrbPerks: any[];
declare let KDPerkOrbBondage: any[];
declare let KDPerkOrbMethod: string;
declare function KinkyDungeonDrawDoor(): void;
/** Chest lock */
declare function KinkyDungeonDrawLock(): void;
declare function KinkyDungeonDrawGhost(): void;
declare function KinkyDungeonDrawAngel(): void;
declare function KinkyDungeonElevatorMessage(): void;
declare function KinkyDungeonGhostMessage(): void;
declare function KinkyDungeonAngelMessage(): void;
declare function KinkyDungeonFoodMessage(Tile: any): void;
declare function KinkyDungeonMakeGhostDecision(): void;
declare function KinkyDungeonDrawCharger(): void;
declare function KinkyDungeonDrawTablet(): void;
declare function KinkyDungeonDrawFood(): void;
declare function KinkyDungeonHandleCharger(): boolean;
declare function KDHandleModalArea(): boolean;
/**
 *
 * @param {number} floor
 */
declare function KDElevatorToFloor(floor: number): void;
/**
 * Script happens when you display an object message
 * @type {Record<string,() => void>}
 */
declare let KDObjectMessages: Record<string, () => void>;
/**
 * Script happens when you move to an object
 * MUTUALLY exclusive with KDObjectDraw, as this
 * overrides the default behavior of clicking on the object and bringing up a modal
 * @type {Record<string,(x: number, y: number) => void>}
 */
declare let KDObjectClick: Record<string, (x: number, y: number) => void>;
/**
 * Script to handle click in an object's modal
 * tbh should remove this soon
 * @type {Record<string,() => boolean>}
 */
declare let KDObjectHandle: Record<string, () => boolean>;
/**
 * Determines if an object has an interface and also if it pauses the game when you click on it
 * You dont need an interface (for example the updated food table) but then you need
 * an entry in KDObjectClick instead.
 * @type {Record<string,() => void>}
 */
declare let KDObjectDraw: Record<string, () => void>;
declare let KDChargerLight: number;
declare let KDChargerColor: number;
declare let KDLeylineLightColor: number;
declare let KDLeylineLight: number;
declare function KinkyDungeonItemDrop(x: any, y: any, dropTable: any, summoned: any): false | {
    x: any;
    y: any;
    name: any;
    amount: any;
};
declare function KinkyDungeonDropItem(Item: any, Origin: any, PreferOrigin: any, noMsg: any, allowEnemies: any): boolean;
declare function KinkyDungeonItemEvent(Item: any, nomsg: any): boolean;
declare function KDAllowUseItems(Message: any, x: any, y: any): boolean;
declare function KinkyDungeonItemCheck(x: any, y: any, Index: any, autoEquip: any): void;
declare function KDCanSeeDroppedItem(item: any): boolean;
/**
 *
 * @param {Named} item
 * @returns {string};
 */
declare function KDGetItemType(item: Named): string;
declare function KinkyDungeonDrawItems(canvasOffsetX: any, canvasOffsetY: any, CamX: any, CamY: any): void;
declare function KinkyDungeonDrawHeart(): void;
declare function KinkyDungeonHandleHeart(): boolean;
/**
 *
 * @param {any[]} items
 * @param {number} offset
 * @returns {number}
 */
declare function KDDrawItemsTooltip(items: any[], offset: number): number;
/** Certain items, when dropped, have specific properties
 * @type {Record<string, KDDroppedItemProp>}
*/
declare let KDDroppedItemProperties: Record<string, KDDroppedItemProp>;
declare namespace KDCustomItems {
    function LeylineMap(): {
        sfx: any;
        replace: any;
        priority: any;
        color: any;
    };
}
/**
 *
 * @param {Named} item
 * @returns {outfit}
 */
declare function KDOutfit(item: Named): outfit;
declare function KinkyDungeonRefreshOutfitCache(): void;
declare function KDGetDressList(): Record<string, KinkyDungeonDress>;
declare function KinkyDungeonInitializeDresses(): void;
declare function KinkyDungeonDressSet(C: any): void;
declare function KinkyDungeonSetDress(Dress: any, Outfit: any, Character: any, NoRestraints: any): void;
/**
 * It sets the player's appearance based on their stats.
 */
declare function KinkyDungeonDressPlayer(Character: any, NoRestraints: any, Force: any): void;
/**
 * Initializes protected groups like ears and tail
 * @param {Character} C
 */
declare function KDInitProtectedGroups(C: Character): void;
/**
 * If the player is wearing a restraint that has a `alwaysDress` property, and the player is not wearing the item specified
 * in the `alwaysDress` property, the player will be forced to wear the items.
 */
/**
 *
 * @param {item[]} [restraints]
 * @param {Character} C
 */
declare function KinkyDungeonWearForcedClothes(C: Character, restraints?: item[]): void;
declare function KDCharacterAppearanceSetColorForGroup(Player: any, Color: any, Group: any): void;
declare function KinkyDungeonGetOutfit(Name: any): {};
/**
 * Makes the KinkyDungeonPlayer wear an item on a body area
 * @param {Character} Character
 * @param {string} AssetName - The name of the asset to wear
 * @param {string} AssetGroup - The name of the asset group to wear
 * @param {string} [par] - parent item
 * @param {string | string[]} [color] - parent item
 * @param {Record<string, LayerFilter>} [filters] - parent item
 */
declare function KDInventoryWear(Character: Character, AssetName: string, AssetGroup: string, par?: string, color?: string | string[], filters?: Record<string, LayerFilter>): Item;
declare function KDCharacterNaked(Character: any): void;
/**
 * Removes all items that can be removed, making the player naked. Checks for a blocking of CosPlayItem removal.
 * @param {Character} C
 * @returns {void} - Nothing
 */
declare function KDCharacterAppearanceNaked(C: Character): void;
/**
 *
 * @param {Character} C
 * @param {*} inv
 * @param {*} tags
 * @returns
 */
declare function KDApplyItem(C: Character, inv: any, tags: any): void;
/** Legacy */
declare function KDApplyItemLegacy(C: any, inv: any, tags: any): void;
declare function KinkyDungeonSendOutfitEvent(Event: any, data: any): void;
/**
 *
 * @param {Character} C
 * @returns {string[]}
 */
declare function KDGetExtraPoses(C: Character): string[];
/**
 *
 * @param {Character} Character
 */
declare function KDUpdateTempPoses(Character: Character): void;
declare function KDGetFactionFilters(faction: any): Record<string, LayerFilter>;
declare let KDNaughtySetting: boolean;
declare let KinkyDungeonOutfitCache: Map<any, any>;
/**@type {string[]} Contains protected zones*/
declare let KDProtectedCosplay: string[];
/**
 * These priorities override the default BC
 * @type {Record<string, Record<string, number>>}
 */
declare let KDClothOverrides: Record<string, Record<string, number>>;
/** @type {KinkyDungeonDress} */
declare let KinkyDungeonDefaultDefaultDress: KinkyDungeonDress;
declare let KinkyDungeonCheckClothesLoss: boolean;
declare let KinkyDungeonNewDress: boolean;
declare let KDCharacterDress: Map<any, any>;
declare let KDNaked: boolean;
declare let KDRefresh: boolean;
declare let KDLastForceRefresh: number;
declare let KDLastForceRefreshInterval: number;
/** @type {Record<string, KDExpression>} */
declare let KDExpressions: Record<string, KDExpression>;
declare let KDLatexDmg: number;
declare let KDLatexBind: number;
/**
 * @type {Record<string, effectTile>}
 */
declare let KDEffectTiles: Record<string, effectTile>;
/**
 * @type {outfit[]}
 */
declare let KinkyDungeonOutfitsBase: outfit[];
/**
 * List off all dresses items
 * @type {Record<string,KinkyDungeonDress>}
 */
declare let KinkyDungeonDresses: Record<string, KinkyDungeonDress>;
/**
 *
 * @param {Named} item
 * @returns {consumable}
 */
declare function KDConsumable(item: Named): consumable;
declare function KinkyDungeonFindConsumable(Name: any): consumable;
declare function KinkyDungeonFindBasic(Name: any): {
    name: string;
    rarity: number;
    shop: boolean;
};
declare function KinkyDungeonFindConsumableOrBasic(Name: any): consumable | {
    name: string;
    rarity: number;
    shop: boolean;
};
declare function KinkyDungeonGetInventoryItem(Name: any, Filter?: string): {
    name: any;
    item: any;
    preview: string;
    preview2?: string;
    previewcolor?: string;
    previewcolorbg?: string;
};
declare function KinkyDungeonItemCount(Name: any): any;
declare function KinkyDungeonGetShopItem(Level: any, Rarity: any, Shop: any, ShopItems: any): any;
/**
 *
 * @param {consumable} consumable
 * @param {number} Quantity
 * @return {boolean}
 */
declare function KinkyDungeonChangeConsumable(consumable: consumable, Quantity: number): boolean;
declare function KinkyDungeonConsumableEffect(Consumable: any, type: any): void;
declare function KinkyDungeonPotionCollar(): boolean;
declare function KinkyDungeonCanDrink(byEnemy: any): boolean;
declare function KinkyDungeonAttemptConsumable(Name: any, Quantity: any): boolean;
declare function KinkyDungeonUseConsumable(Name: any, Quantity: any): boolean;
declare let KDMaxRarity: number;
/**
 * @type {Record<string, consumable>}
 */
declare let KinkyDungeonConsumables: Record<string, consumable>;
/**
 * @type {Record<string, consumable>}
 */
declare let KDCookies: Record<string, consumable>;
declare let KDRechargeCost: number;
declare let KinkyDungneonBasic: {
    Key: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    Keyring: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    RedKey: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    BlueKey: {
        name: string;
        rarity: number;
        costMod: number;
        shop: boolean;
    };
    Lockpick: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    Pick: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    "3Bola": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    "3Bomb": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    "3Flash": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    "3Flashbang": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    "3Smoke": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    MaidUniform: {
        name: string;
        rarity: number;
        shop: boolean;
        ignoreInventory: string;
    };
};
declare namespace KinkyDungneonShopRestraints {
    namespace SlimeWalkers {
        const name: string;
        const rarity: number;
        const shop: boolean;
    }
    namespace SarielPanties {
        const name_1: string;
        export { name_1 as name };
        const rarity_1: number;
        export { rarity_1 as rarity };
        const shop_1: boolean;
        export { shop_1 as shop };
    }
    namespace ElvenPanties {
        const name_2: string;
        export { name_2 as name };
        const rarity_2: number;
        export { rarity_2 as rarity };
        const shop_2: boolean;
        export { shop_2 as shop };
    }
    namespace DivineBelt {
        const name_3: string;
        export { name_3 as name };
        const rarity_3: number;
        export { rarity_3 as rarity };
        const shop_3: boolean;
        export { shop_3 as shop };
    }
    namespace DivineBelt2 {
        const name_4: string;
        export { name_4 as name };
        const rarity_4: number;
        export { rarity_4 as rarity };
        const shop_4: boolean;
        export { shop_4 as shop };
    }
    namespace DivineBra {
        const name_5: string;
        export { name_5 as name };
        const rarity_5: number;
        export { rarity_5 as rarity };
        const shop_5: boolean;
        export { shop_5 as shop };
    }
    namespace DivineBra2 {
        const name_6: string;
        export { name_6 as name };
        const rarity_6: number;
        export { rarity_6 as rarity };
        const shop_6: boolean;
        export { shop_6 as shop };
    }
    namespace DusterGag {
        const name_7: string;
        export { name_7 as name };
        const rarity_7: number;
        export { rarity_7 as rarity };
        const shop_7: boolean;
        export { shop_7 as shop };
    }
    namespace GasMask {
        const name_8: string;
        export { name_8 as name };
        const rarity_8: number;
        export { rarity_8 as rarity };
        const shop_8: boolean;
        export { shop_8 as shop };
    }
    namespace PotionCollar {
        const name_9: string;
        export { name_9 as name };
        const rarity_9: number;
        export { rarity_9 as rarity };
        const shop_9: boolean;
        export { shop_9 as shop };
    }
    namespace Sunglasses {
        const name_10: string;
        export { name_10 as name };
        const rarity_10: number;
        export { rarity_10 as rarity };
        const shop_10: boolean;
        export { shop_10 as shop };
    }
    namespace Sunglasses2 {
        const name_11: string;
        export { name_11 as name };
        const rarity_11: number;
        export { rarity_11 as rarity };
        const shop_11: boolean;
        export { shop_11 as shop };
    }
}
/** @type {Record<string, (consumable) => void>} */
declare let KDConsumableEffects: Record<string, (consumable: any) => void>;
/** @type {Record<string, (item: item, Quantity: number) => boolean>} */
declare let KDConsumablePrereq: Record<string, (item: item, Quantity: number) => boolean>;
/**
 *
 * @param {item} item
 * @returns {KDRestraintVariant}
 */
declare function KDGetRestraintVariant(item: item): KDRestraintVariant;
/**
 *
 * @param {item} item
 * @returns {KDConsumableVariant}
 */
declare function KDGetConsumableVariant(item: item): KDConsumableVariant;
/**
 *
 * @param {item} item
 * @returns {KDWeaponVariant}
 */
declare function KDGetWeaponVariant(item: item): KDWeaponVariant;
declare function KDCloseQuickInv(): void;
declare function KDRestraintSpecial(item: any): any;
declare function KDSwitchWeapon(weapon: any, pref: any): void;
declare function KinkyDungeonHandleInventory(): boolean;
declare function KinkyDungeonInventoryAddWeapon(Name: any): void;
declare function KinkyDungeonInventoryAddLoose(Name: any, UnlockCurse: any, faction: any): void;
declare function KinkyDungeonInventoryAddOutfit(Name: any): void;
/**
 *
 * @param item {item}
 * @return {string}
 */
declare function KDInventoryType(item: item): string;
declare function KinkyDungeonFullInventory(): item[];
declare function KinkyDungeonInventoryLength(): number;
/**
 *
 * @param item {item}
 */
declare function KinkyDungeonInventoryAdd(item: item): void;
/**
 *
 * @param item {item}
 */
declare function KinkyDungeonInventoryRemove(item: item): void;
/**
 * Does not remove equipped restraints
 * @param item {item}
 */
declare function KinkyDungeonInventoryRemoveSafe(item: item): void;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGet(Name: any): null | item;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGetSafe(Name: any): null | item;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGetLoose(Name: any): null | item;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGetConsumable(Name: any): null | item;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGetWeapon(Name: any): null | item;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGetOutfit(Name: any): null | item;
/**
 * Returns list
 * @return {item[]}
 */
declare function KinkyDungeonAllRestraint(): item[];
/**
 * Returns list of tuples of restraints, including dynamics and their hosts
 * @return {{item: item, host: item}[]}
 */
declare function KinkyDungeonAllRestraintDynamic(): {
    item: item;
    host: item;
}[];
/**
 * Returns list
 * @return {item[]}
 */
declare function KinkyDungeonAllLooseRestraint(): item[];
/**
 * Returns list
 * @return {item[]}
 */
declare function KinkyDungeonAllConsumable(): item[];
/**
 * Returns list
 * @return {item[]}
 */
declare function KinkyDungeonAllOutfit(): item[];
/**
 * Returns list
 * @return {item[]}
 */
declare function KinkyDungeonAllWeapon(): item[];
/**
 *
 * @param {NamedAndTyped} item
 * @returns {{name: any; item: any; preview: string, preview2?: string, previewcolor?: string; previewcolorbg?: string;}}
 */
declare function KDGetItemPreview(item: NamedAndTyped): {
    name: any;
    item: any;
    preview: string;
    preview2?: string;
    previewcolor?: string;
    previewcolorbg?: string;
};
/**
 *
 * @param {string} Group
 * @returns {string}
 */
declare function KDGetGroupPreviewImage(Group: string): string;
/**
 *
 * @param {restraint} restraint
 * @returns {string}
 */
declare function KDGetRestraintPreviewImage(restraint: restraint): string;
/**
 *
 * @param {string} Filter
 * @param {boolean} [enchanted]
 * @param {boolean} [ignoreHidden]
 * @param {boolean} [ignoreFilters]
 * @param {string} [click] - this filter will be handled and thus updates the filters
 * @param {string} [namefilter]
 * @returns {{name: any; item: any; preview: string; preview2?: string; previewcolor?: string; previewcolorbg?: string}[]}
 */
declare function KinkyDungeonFilterInventory(Filter: string, enchanted?: boolean, ignoreHidden?: boolean, ignoreFilters?: boolean, click?: string, namefilter?: string): {
    name: any;
    item: any;
    preview: string;
    preview2?: string;
    previewcolor?: string;
    previewcolorbg?: string;
}[];
/**
 *
 * @param {{name: any, item: item, preview: string, preview2?: string}} item
 * @param {boolean} [noscroll]
 * @param {boolean} [treatAsHover]
 * @param {number} xOffset
 * @returns {boolean}
 */
declare function KinkyDungeonDrawInventorySelected(item: {
    name: any;
    item: item;
    preview: string;
    preview2?: string;
}, noscroll?: boolean, treatAsHover?: boolean, xOffset?: number): boolean;
declare function KinkyDungeonDrawInventory(): void;
declare function KinkyDungeonSendInventoryEvent(Event: any, data: any): void;
declare function KinkyDungeonSendInventorySelectedEvent(Event: any, data: any): void;
declare function KinkyDungeonSendInventoryIconEvent(Event: any, data: any): void;
declare function KinkyDungeonQuickGrid(I: any, Width: any, Height: any, Xcount: any): {
    x: number;
    y: number;
};
declare function KinkyDungeonDrawQuickInv(): void;
declare function KinkyDungeonhandleQuickInv(NoUse: any): boolean;
/**
 *
 * @param {string} name
 * @param {entity} [player]
 * @param {boolean} playerDropped
 */
declare function KDDropItemInv(name: string, player?: entity, playerDropped?: boolean): void;
/**
 *
 * @param {entity} player
 */
declare function KDSortInventory(player: entity): void;
declare function KDLoadQuickLoadout(num: any, clearFirst: any): void;
declare function KDSaveQuickLoadout(num: any): void;
/**
 * @param {string} Name
 */
declare function KDRemoveInventoryVariant(Name: string, Prefix?: string): void;
/**
 * @param {string} Name
 */
declare function KDRemoveWeaponVariant(Name: string, Prefix?: string): void;
/**
 * @param {string} Name
 */
declare function KDRemoveConsumableVariant(Name: string, Prefix?: string): void;
/**
 *
 * @param {boolean} worn
 * @param {boolean} loose
 * @param {boolean} lost
 */
declare function KDPruneInventoryVariants(worn?: boolean, loose?: boolean, lost?: boolean, ground?: boolean, hotbar?: boolean, entities?: boolean): void;
/**
 * Changes an inventory variant of an item
 * @param {item} item
 * @param {KDRestraintVariant} variant
 * @param {string} prefix
 * @param {string} curse
 */
declare function KDMorphToInventoryVariant(item: item, variant: KDRestraintVariant, prefix: string, curse: string): void;
/**
 * Adds an weapon variant to the player's inventory
 * @param {KDWeaponVariant} variant
 * @param {string} prefix
 */
declare function KDGiveWeaponVariant(variant: KDWeaponVariant, prefix: string, forceName: any, suffix?: string): void;
/**
 * Adds an Consumable variant to the player's inventory
 * @param {KDConsumableVariant} variant
 * @param {string} prefix
 */
declare function KDGiveConsumableVariant(variant: KDConsumableVariant, prefix: string, forceName: any, suffix?: string, Quantity?: number): void;
/**
 * Adds an inventory variant to the player's inventory
 * @param {KDRestraintVariant} variant
 * @param {string} prefix
 * @param {string} curse
 * @param {string} ID
 * @param {string} [forceName]
 */
declare function KDGiveInventoryVariant(variant: KDRestraintVariant, prefix?: string, curse?: string, ID?: string, forceName?: string, suffix?: string, faction?: string): void;
/**
 * Adds an inventory variant to the player's inventory
 * @param {KDRestraintVariant} variant
 * @param {number} [Tightness]
 * @param {boolean} [Bypass]
 * @param {string} [Lock]
 * @param {boolean} [Keep]
 * @param {boolean} [Trapped]
 * @param {string} [faction]
 * @param {boolean} [Deep] - whether or not it can go deeply in the stack
 * @param {string} [curse] - Curse to apply
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {boolean} [useAugmentedPower] - Augment power to keep consistency
 * @param {string} [inventoryAs] - inventoryAs for the item
 * @param {string} prefix
 * @param {string} ID
 */
declare function KDEquipInventoryVariant(variant: KDRestraintVariant, prefix?: string, Tightness?: number, Bypass?: boolean, Lock?: string, Keep?: boolean, Trapped?: boolean, faction?: string, Deep?: boolean, curse?: string, securityEnemy?: entity, useAugmentedPower?: boolean, inventoryAs?: string, ID?: string, suffix?: string): number;
/**
 *
 * @param {Named} item
 * @returns {weapon | restraint | outfit | consumable}
 */
declare function KDItem(item: Named): weapon | restraint | outfit | consumable;
/**
 *
 * @param {string} name
 * @returns {boolean}
 */
declare function KDGiveItem(name: string, quantity?: number): boolean;
declare function KDDrawHotbarBottom(selected: any, spells: any, selectSpell: any, xshift?: number): void;
declare let KDPreventAccidentalClickTime: number;
declare let KDInventoryActionSpacing: number;
declare let KDInventoryActionPerRow: number;
declare let KinkyDungeonFilters: string[];
declare namespace KDInventoryActionsDefault {
    export function restraint_1(item: any): string[];
    export { restraint_1 as restraint };
    export function looserestraint(item: any): string[];
    export function weapon_1(item: any): string[];
    export { weapon_1 as weapon };
    export function consumable_1(item: any): string[];
    export { consumable_1 as consumable };
    export function outfit_1(item: any): string[];
    export { outfit_1 as outfit };
}
declare let KDConfigHotbar: boolean;
declare namespace KDWeaponTags {
    const magic: boolean;
    const light: boolean;
    const bow: boolean;
    const noHands: boolean;
    const clumsy: boolean;
    const offhand: boolean;
    const shield: boolean;
    const heavy: boolean;
    const massive: boolean;
    const illum: boolean;
}
declare let KDInvFilter: string;
declare namespace KDFilterTransform {
    const armor: string;
}
/** @type {Record<string, KDRestraintVariant>} */
declare let KinkyDungeonRestraintVariants: Record<string, KDRestraintVariant>;
/** @type {Record<string, KDWeaponVariant>} */
declare let KinkyDungeonWeaponVariants: Record<string, KDWeaponVariant>;
/** @type {Record<string, KDConsumableVariant>} */
declare let KinkyDungeonConsumableVariants: Record<string, KDConsumableVariant>;
/**
 * @type {Record<string, boolean>}
 */
declare let KDInventoryUseIconConfig: Record<string, boolean>;
/** List of current filters for each filter type */
/**
 * @type {Record<string, Record<string, boolean>>}
 */
declare let KDFilterFilters: Record<string, Record<string, boolean>>;
/** @type {Record<string, Record<string, (item: item, handle: boolean) => boolean>>} */
declare let KDSpecialFilters: Record<string, Record<string, (item: item, handle: boolean) => boolean>>;
declare let KinkyDungeonCurrentFilter: string;
declare let KinkyDungeonCurrentPageInventory: number;
declare let KinkyDungeonShowInventory: boolean;
declare let KinkyDungeonInventoryOffset: number;
declare let KDConfirmOverInventoryAction: boolean;
declare let KDWeaponSwitchPref: number;
declare let KinkyDungeonInvDraw: any[];
declare namespace KDScrollOffset {
    const Consumable: number;
    const Restraint: number;
    const Weapon: number;
}
declare namespace KDItemsPerScreen {
    const Consumable_1: number;
    export { Consumable_1 as Consumable };
    const Restraint_1: number;
    export { Restraint_1 as Restraint };
    const Weapon_1: number;
    export { Weapon_1 as Weapon };
}
declare let KDNumOfQuickLoadouts: number;
declare let KDQuickLoadoutSave: boolean;
declare let KDScrollAmount: number;
declare namespace KDInventoryStatus {
    const HideQuickInv: boolean;
    const DropQuickInv: boolean;
    const SortQuickInv: boolean;
    const FilterQuickInv: boolean;
}
/**
 * Sends a multiplayer update, trimming off stuff that doesnt need to get sent yet
 * @returns {void}
 */
declare function KinkyDungeonMultiplayerUpdate(Delay: any): void;
/**
 * Converts a string into Kinky Game Data
 * @returns {void}
 */
declare function KinkyDungeonUnpackData(KinkyData: any): void;
declare function KinkyDungeonUpdateFromData(): boolean;
/**
 * Turns the game state into a string that can be sent over
 * @returns {string} - String containing game data
 */
declare function KinkyDungeonPackData(IncludeMap: any, IncludeItems: any, IncludeInventory: any, IncludeStats: any): string;
/**
 * Sends kinky dungeon data to the target member
 * @returns {void}
 */
declare function KinkyDungeonSendData(data: any): void;
/**
 * Handles kinky dungeon data after receiving it from another player
 * @returns {void}
 */
declare function KinkyDungeonHandleData(data: any, SourceMemberNumber: any): void;
declare function KinkyDungeonNewLore(): boolean;
declare function KinkyDungeonUpdateTabs(exploredLore: any): void;
declare function KinkyDungeonDrawLore(): void;
declare function KDDrawLoreRepTabs(xOffset: any): void;
declare function KinkyDungeonUpdateLore(exploredLore: any): void;
declare function KinkyDungeonHandleLore(): boolean;
declare let KinkyDungeonCurrentLore: number;
/**
 * @type {any}
 */
declare let KinkyDungeonCurrentLoreTab: any;
/**
 * @type {any[]}
 */
declare let KinkyDungeonCurrentLoreTabs: any[];
declare let KinkyDungeonCurrentLoreItems: any[];
declare let KinkyDungeonCurrentLoreItemOffset: number;
declare let KinkyDungeonCurrentLoreTabOffset: number;
declare let KinkyDungeonLore: number[];
declare namespace KinkyDungeonCheckpointLore {
    const Combat: number[];
    const School: number[];
    const History: number[];
    const Enemy: number[];
    const grv: number[];
    const tmb: number[];
    const cat: number[];
    const lib: number[];
    const jng: number[];
    const cry: number[];
    const tmp: number[];
    const ore: number[];
    const bel: number[];
}
declare let KinkyDungeonLoreScale: number;
declare let KinkyDungeonRepeatLoreChance: number;
declare let KinkyDungeonGenericLoreChance: number;
declare let KinkyDungeonNewLoreList: any;
/**
 * Returns whether or not the player meets a requirement for a pearl reward chest
 * @returns {boolean}
 */
declare function KDPearlRequirement(): boolean;
declare function KinkyDungeonInitReputation(): void;
/**
 *
 * @param {number} Amount
 * @returns {string}
 */
declare function KinkyDungeonRepName(Amount: number): string;
/**
 *
 * @param {number} Amount
 * @returns {string}
 */
declare function KinkyDungeonRepNameFaction(Amount: number): string;
/**
 *
 * @param {string} Rep
 * @param {number} Amount
 * @returns {boolean}
 */
declare function KinkyDungeonChangeFactionRep(Rep: string, Amount: number): boolean;
/**
 *
 * @param {string} Rep
 * @param {number} Amount
 * @returns {boolean}
 */
declare function KinkyDungeonChangeRep(Rep: string, Amount: number): boolean;
declare function KinkyDungeonHandleReputation(): boolean;
declare function KinkyDungeonDrawReputation(): void;
declare function KinkyDungeonDrawFactionRep(): string;
/**
 *
 * @param {string} rep
 * @returns {number}
 */
declare function KinkyDungeonPenanceCost(rep: string): number;
/**
 *
 * @param {string} rep
 * @param {number} value
 * @returns {boolean}
 */
declare function KinkyDungeonCanPenance(rep: string, value: number): boolean;
/**
 *
 * @param {string} rep
 * @returns {number}
 */
declare function KinkyDungeonAidManaCost(rep: string, value: any): number;
/**
 *
 * @param {string} rep
 * @param {number} value
 * @returns {number}
 */
declare function KinkyDungeonAidManaAmount(rep: string, value: number): number;
/**
 *
 * @param {string} rep
 * @param {number} value
 * @returns {boolean}
 */
declare function KinkyDungeonCanAidMana(rep: string, value: number): boolean;
declare function KinkyDungeonRescueTiles(): {
    x: number;
    y: number;
}[];
/**
 *
 * @param {string} rep
 * @param {number} value
 * @returns {boolean}
 */
declare function KinkyDungeonCanRescue(rep: string, value: number): boolean;
/**
 *
 * @param {number} delta
 */
declare function KinkyDungeonUpdateAngel(delta: number): void;
/**
 *
 * @param {number} x
 * @param {number} y
 */
declare function KinkyDungeonCreateAngel(x: number, y: number): void;
declare const KDANGER: -19;
declare const KDRAGE: -31;
declare const KDPLEASED: 15;
declare const KDFRIENDLY: 35;
declare let KDStatRep: string[];
declare namespace KDRepColor {
    const Passion: string;
    const Frustration: string;
}
declare namespace KDRepNameColor {
    const Leather: string;
    const Latex: string;
    const Rope: string;
    const Metal: string;
    const Will: string;
    const Elements: string;
    const Conjure: string;
    const Illusion: string;
}
declare namespace KDFactionGoddess {
    export namespace Metal_1 {
        const Angel: number;
        const Demon: number;
        const Nevermere: number;
        const AncientRobot: number;
        const Elemental: number;
    }
    export { Metal_1 as Metal };
    export namespace Rope_1 {
        const Angel_1: number;
        export { Angel_1 as Angel };
        const Demon_1: number;
        export { Demon_1 as Demon };
        export const KinkyConstruct: number;
        export const Dressmaker: number;
        export const Bountyhunter: number;
        export const Bast: number;
        const AncientRobot_1: number;
        export { AncientRobot_1 as AncientRobot };
    }
    export { Rope_1 as Rope };
    export namespace Elements_1 {
        const Angel_2: number;
        export { Angel_2 as Angel };
        const Demon_2: number;
        export { Demon_2 as Demon };
        export const Witch: number;
        export const Apprentice: number;
        const Elemental_1: number;
        export { Elemental_1 as Elemental };
        const AncientRobot_2: number;
        export { AncientRobot_2 as AncientRobot };
    }
    export { Elements_1 as Elements };
    export namespace Leather_1 {
        const Angel_3: number;
        export { Angel_3 as Angel };
        const Demon_3: number;
        export { Demon_3 as Demon };
        export const Elf: number;
        export const Dragon: number;
        export const Bandit: number;
        const Elemental_2: number;
        export { Elemental_2 as Elemental };
        const AncientRobot_3: number;
        export { AncientRobot_3 as AncientRobot };
    }
    export { Leather_1 as Leather };
    export namespace Latex_1 {
        const Angel_4: number;
        export { Angel_4 as Angel };
        const Demon_4: number;
        export { Demon_4 as Demon };
        export const Maidforce: number;
        export const Alchemist: number;
        const Nevermere_1: number;
        export { Nevermere_1 as Nevermere };
        const AncientRobot_4: number;
        export { AncientRobot_4 as AncientRobot };
    }
    export { Latex_1 as Latex };
    export namespace Will_1 {
        const Angel_5: number;
        export { Angel_5 as Angel };
        const Demon_5: number;
        export { Demon_5 as Demon };
        const Elf_1: number;
        export { Elf_1 as Elf };
        const Bast_1: number;
        export { Bast_1 as Bast };
        const Apprentice_1: number;
        export { Apprentice_1 as Apprentice };
        const AncientRobot_5: number;
        export { AncientRobot_5 as AncientRobot };
    }
    export { Will_1 as Will };
    export namespace Conjure_1 {
        const Angel_6: number;
        export { Angel_6 as Angel };
        const Demon_6: number;
        export { Demon_6 as Demon };
        const Alchemist_1: number;
        export { Alchemist_1 as Alchemist };
        const Witch_1: number;
        export { Witch_1 as Witch };
        const Apprentice_2: number;
        export { Apprentice_2 as Apprentice };
        const Dressmaker_1: number;
        export { Dressmaker_1 as Dressmaker };
        const AncientRobot_6: number;
        export { AncientRobot_6 as AncientRobot };
    }
    export { Conjure_1 as Conjure };
    export namespace Illusion_1 {
        const Angel_7: number;
        export { Angel_7 as Angel };
        const Demon_7: number;
        export { Demon_7 as Demon };
        const Witch_2: number;
        export { Witch_2 as Witch };
        const Apprentice_3: number;
        export { Apprentice_3 as Apprentice };
        const Maidforce_1: number;
        export { Maidforce_1 as Maidforce };
        const Bountyhunter_1: number;
        export { Bountyhunter_1 as Bountyhunter };
        const AncientRobot_7: number;
        export { AncientRobot_7 as AncientRobot };
    }
    export { Illusion_1 as Illusion };
}
/**
 * @type {Record<string, number>}
 */
declare let KinkyDungeonGoddessRep: Record<string, number>;
/**
 * @type {Record<string, boolean>}
 */
declare let KinkyDungeonRescued: Record<string, boolean>;
/**
 * @type {Record<string, boolean>}
 */
declare let KinkyDungeonAid: Record<string, boolean>;
declare let KDRepSelectionMode: string;
/**
 *
 * @type {Object.<string, string[]>}
 */
declare let KDBlessedRewards: {
    [x: string]: string[];
};
declare let KDFactionRepIndex: number;
declare let KDMaxFactionsPerBar: number;
/**
 * Current costs multipliers for shrines
 * @type {Record<string, number>}
 */
declare let KinkyDungeonPenanceCosts: Record<string, number>;
declare let KinkyDungeonPenanceRepBonus: number;
declare let KinkyDungeonPenanceRepBonusFail: number;
declare let KinkyDungeonPenanceCostGrowth: number;
declare let KinkyDungeonPenanceCostDefault: number;
declare function KinkyDungeonHandleStepOffTraps(entity: any, x: any, y: any, moveX: any, moveY: any): void;
declare function KinkyDungeonHandleTraps(entity: any, x: any, y: any, Moved: any): void;
declare function KDTrigPanic(chest: any): void;
/**
 *
 * @returns {{ Name: string; Enemy?: string; Spell?: string; Level: number; Power: number; Weight: number; strict?: true; teleportTime?: number}[]}
 */
declare function KinkyDungeonGetGoddessTrapTypes(): {
    Name: string;
    Enemy?: string;
    Spell?: string;
    Level: number;
    Power: number;
    Weight: number;
    strict?: true;
    teleportTime?: number;
}[];
declare function KinkyDungeonGetTrap(trapTypes: any, Level: any, tags: any): {
    StepOffTrap: any;
    Name: any;
    Restraint: any;
    Enemy: any;
    FilterTag: any;
    FilterBackup: any;
    Spell: any;
    Power: any;
    extraTag: any;
};
declare function KDSmokePuff(x: any, y: any, radius: any, density: any, nomsg: any): void;
declare function KDSteamPuff(x: any, y: any, radius: any, density: any, nomsg: any): void;
/** @type {Record<string, KDTrapType>} */
declare let KDTrapTypes: Record<string, KDTrapType>;
declare namespace KDTrapTypesStepOff {
    function DoorLock(tile: any, entity: any, x: any, y: any): {
        msg: string;
    };
}
declare let KinkyDungeonTrapMoved: boolean;
/**
 *
 * @param {entity} entity
 * @returns {boolean}
 */
declare function KDWettable(entity: entity): boolean;
/**
 *
 * @param {entity} entity
 * @returns {boolean}
 */
declare function KDConducting(entity: entity): boolean;
declare function KinkyDungeonHandleTilesEnemy(enemy: any, delta: any): void;
/**
 * Applies effects based on nearby tiles. Affects only the player
 * @param {number} delta
 */
declare function KDPeripheralTileEffects(delta: number): void;
/**
 * Applies effects based on the tile you are standing on. Affects only the player
 * @param {number} delta
 */
declare function KinkyDungeonUpdateTileEffects(delta: number): void;
declare function KinkyDungeonHandleMoveToTile(toTile: any): void;
declare function KDCanEscape(method: any): any;
declare function KDGetEscapeMinimapText(method: any): any;
declare function KDGetEscapeDoorText(method: any): any;
declare function KDGetEscapeMethod(level: any): any;
declare function KDGetRandomEscapeMethod(): string;
/**
 * Creates combined record of tags
 * @param {number} x
 * @param {number} y
 * @returns {Record<String, boolean>}
 */
declare function KDEffectTileTags(x: number, y: number): Record<string, boolean>;
declare function KinkyDungeonHandleStairs(toTile: any, suppressCheckPoint: any): void;
declare function KinkyDungeonHandleMoveObject(moveX: any, moveY: any, moveObject: any): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
declare function KDHasEffectTile(x: number, y: number): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {Record<string, effectTile>}
 */
declare function KDGetEffectTiles(x: number, y: number): Record<string, effectTile>;
declare function KDGetSpecificEffectTile(x: any, y: any, tile: any): effectTile;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {effectTileRef} tile
 * @param {number} durationMod
 * @returns {effectTile}
 */
declare function KDCreateEffectTile(x: number, y: number, tile: effectTileRef, durationMod: number): effectTile;
declare function KDInteractNewTile(newTile: any): void;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {effectTileRef} tile
 * @param {number} [durationMod]
 * @param {number} [rad]
 * @param {{x: number, y: number}} [avoidPoint]
 * @param {number} [density]
 * @param {string} mod - explosion modifier
 */
declare function KDCreateAoEEffectTiles(x: number, y: number, tile: effectTileRef, durationMod?: number, rad?: number, avoidPoint?: {
    x: number;
    y: number;
}, density?: number, mod?: string): void;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string[]} tagsToRemove
 * @param {number} [rad]
 * @param {{x: number, y: number}} [avoidPoint]
 * @param {number} [density]
 * @param {string} mod - explosion modifier
 */
declare function KDRemoveAoEEffectTiles(x: number, y: number, tagsToRemove: string[], rad?: number, avoidPoint?: {
    x: number;
    y: number;
}, density?: number, mod?: string): void;
/**
 * Current alpha vs fade type
 * @param {string} id
 * @param {number} alpha
 * @param {string} fade
 * @param {number} delta
 */
declare function KDApplyAlpha(id: string, alpha: number, fade: string, delta: number): number;
declare function KDDrawEffectTiles(canvasOffsetX: any, canvasOffsetY: any, CamX: any, CamY: any): void;
/**
 *
 * @param {effectTile} tile
 * @returns {boolean}
 */
declare function KDCanSeeEffectTile(tile: effectTile): boolean;
declare function KDUpdateEffectTiles(delta: any): void;
/**
 *
 * @param {number} delta
 * @param {entity} entity
 * @param {effectTile} tile
 */
declare function KinkyDungeonUpdateSingleEffectTile(delta: number, entity: entity, tile: effectTile): void;
/**
 *
 * @param {number} delta
 * @param {effectTile} tile
 */
declare function KinkyDungeonUpdateSingleEffectTileStandalone(delta: number, tile: effectTile): void;
/**
 *
 * @param {any} b
 * @param {effectTile} tile
 * @param {number} d
 */
declare function KinkyDungeonBulletInteractionSingleEffectTile(b: any, tile: effectTile, d: number): void;
declare function KDEffectTileInteractions(x: any, y: any, b: any, d: any): void;
/**
 * Moves an entity
 * @param {entity} enemy
 * @param {number} x
 * @param {number} y
 * @param {boolean} willing
 * @param {boolean} [ignoreBlocked] - Ignore if the target is blocked--important if swapping
 */
declare function KDMoveEntity(enemy: entity, x: number, y: number, willing: boolean, dash: any, forceHitBullets: any, ignoreBlocked?: boolean): boolean;
declare function KDStaggerEnemy(enemy: any): void;
declare function KDMovePlayer(moveX: any, moveY: any, willing: any, sprint: any, forceHitBullets: any, suppressNoise: any): boolean;
declare function KDSlip(dir: any): boolean;
/**
 * Helper function for flammable tiles
 */
declare function KDInferno(existingTile: any, newTile: any, duration: any): boolean;
/**
 *
 * @param {effectTile} tile
 * @param {string} type
 * @param {number} duration
 * @param {number} chance
 * @returns {boolean}
 */
declare function KDGrow(tile: effectTile, type: string, duration?: number, chance?: number, refreshDuration?: number): boolean;
/**
 * Helper function for flammables
 * @param {*} b
 * @param {effectTile} tile
 * @param {*} d
 */
declare function KDIgnition(b: any, tile: effectTile, d: any): void;
/**
 * Code for a conveyor tile. DY and DX enable this functionality
 * @param {number} delta
 * @param {number} X
 * @param {number} Y
 */
declare function KDConveyor(delta: number, X: number, Y: number): void;
declare function KDAdvanceLevel(data: any, closeConnections?: boolean): {
    x: any;
    y: any;
};
declare namespace KDCancelEvents {
    function JourneyChoice(x: any, y: any, tile: any, data: any): void;
}
declare namespace KDCancelFilters {
    export function JourneyChoice_1(x: any, y: any, tile: any, data: any): "" | "JourneyChoice";
    export { JourneyChoice_1 as JourneyChoice };
}
declare let KinkyDungeonChestConfirm: boolean;
declare let KinkyDungeonConfirmStairs: boolean;
/** @type {Record<string, boolean>} */
declare let KDTileModes: Record<string, boolean>;
declare let KDLastEffTileUpdate: number;
declare namespace KDAdvanceAmount {
    function S(altRoom: any, altRoomPrevious: any): -1 | 0;
    function s(altRoom: any, altRoomPrevious: any): 1 | 0;
    function H(altRoom: any, altRoomPrevious: any): number;
}
/**
 *
 * @param {string[]} tags
 * @param {number} count
 * @param {string} msg
 */
declare function KDBasicRestraintsMachine_Player(tags: string[], count: number, msg: string): number;
declare function KDSlimeImmuneEntity(entity: any): any;
declare function KDSlimeWalker(entity: any): boolean;
declare function KDSlimeImmune(enemy: any): any;
declare let KDHandsfreeChestTypes: string[];
declare let KDCornerTiles: {
    A: boolean;
    a: boolean;
    c: boolean;
    o: boolean;
    O: boolean;
    '-': boolean;
    '=': boolean;
    '+': boolean;
    B: boolean;
    M: boolean;
    m: boolean;
    F: boolean;
};
/**
 * Updates local tiles such as conveyors
 * @type {Record<string, (delta: number, X?: number, Y?: number) => void>}
 */
declare let KDTileUpdateFunctionsLocal: Record<string, (delta: number, X?: number, Y?: number) => void>;
/**
 * Return value: whether or not to continue to allow peripheral tile updates
 * @type {Record<string, KDBondageMachineFunc>}
 */
declare let KDBondageMachineFunctions: Record<string, KDBondageMachineFunc>;
/**
 * Return value: whether or not to continue to allow peripheral tile updates
 * @type {Record<string, (delta: number) => boolean>}
 */
declare let KDTileUpdateFunctions: Record<string, (delta: number) => boolean>;
/**
 * Return true if movement is stopped
 * @type {Record<string, (moveX, moveY) => boolean>}
 */
declare let KDMoveObjectFunctions: Record<string, (moveX: any, moveY: any) => boolean>;
/**
 * Return is whether or not something the player should know about happened
 * @type {Record<string, (delta, tile: effectTile) => boolean>}
 */
declare let KDEffectTileFunctionsStandalone: Record<string, (delta: any, tile: effectTile) => boolean>;
/**
 * These happen when stepped on
 * Return is whether or not something the player should know about happened
 * @type {Record<string, (delta, entity: entity, tile: effectTile) => boolean>}
 */
declare let KDEffectTileFunctions: Record<string, (delta: any, entity: entity, tile: effectTile) => boolean>;
/**
 * Return is whether or not something the player should know about happened
 * @type {Record<string, (newTile: effectTile, existingTile: effectTile) => boolean>}
 */
declare let KDEffectTileCreateFunctionsCreator: Record<string, (newTile: effectTile, existingTile: effectTile) => boolean>;
/**
 * Return is whether or not something the player should know about happened
 * Return type is whether or not the signal should stop (true) or pass (false)
 * @type {Record<string, (tile: any, x: number, y: number) => boolean>}
 */
declare let KDActivateMapTile: Record<string, (tile: any, x: number, y: number) => boolean>;
/**
 * Return is whether or not something the player should know about happened
 * @type {Record<string, (newTile: effectTile, existingTile: effectTile) => boolean>}
 */
declare let KDEffectTileCreateFunctionsExisting: Record<string, (newTile: effectTile, existingTile: effectTile) => boolean>;
/**
 * Return is whether or not the move should be interrupted
 * @type {Record<string, (entity, tile: effectTile, willing, dir, sprint) => {cancelmove: boolean, returnvalue: boolean}>}
 */
declare let KDEffectTileMoveOnFunctions: Record<string, (entity: any, tile: effectTile, willing: any, dir: any, sprint: any) => {
    cancelmove: boolean;
    returnvalue: boolean;
}>;
declare let KDTorchExtinguishTypes: string[];
declare let KDSlimeExtinguishTypes: string[];
declare let KDIgnitionSources: string[];
/**
 * Return is idk
 * @type {Record<string, (b, tile: effectTile, d) => boolean>}
 */
declare let KDEffectTileBulletFunctions: Record<string, (b: any, tile: effectTile, d: any) => boolean>;
declare namespace KDStairsAltAction {
    function RandomTeleport(toTile: any, suppressCheckPoint: any): void;
    function Null(toTile: any, suppressCheckPoint: any): void;
}
declare function KDUpdateDoorNavMap(): void;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
declare function KDIsMovable(x: number, y: number): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
declare function KDIsSmartMovable(x: number, y: number): boolean;
/**
 * @param {number} startx - the start position
 * @param {number} starty - the start position
 * @param {number} endx - the end positon
 * @param {number} endy - the end positon
 * @param {boolean} blockEnemy - Do enemies block movement?
 * @param {boolean} blockPlayer - Does player block movement?
 * @param {string} Tiles - Allowed move tiles!
 * @param {entity} [Enemy] - Enemy trying to pathfind
 * @param {boolean} [trimLongDistance] - Give up after 1000 or so tiles checked
 * @param {(x: number, y: number, xx: number, yy: number) => number} [heuristicOverride]
 * @param {boolean} [taxicab]
 * @param {boolean} [ignoreTrafficLaws]
 * @returns {any} - Returns an array of x, y points in order
 */
declare function KinkyDungeonFindPath(startx: number, starty: number, endx: number, endy: number, blockEnemy: boolean, blockPlayer: boolean, ignoreLocks: any, Tiles: string, RequireLight: any, noDoors: any, needDoorMemory: any, Enemy?: entity, trimLongDistance?: boolean, heuristicOverride?: (x: number, y: number, xx: number, yy: number) => number, taxicab?: boolean, ignoreTrafficLaws?: boolean): any;
declare function KinkyDungeonGetPath(closed: any, xx: any, yy: any, endx: any, endy: any): {
    x: any;
    y: any;
}[];
declare function KDSetPathfindCache(PathMap: any, newPath: any, endx: any, endy: any, Tiles: any, Finalindex: any): void;
/**
 * @type {Map<string, {x: number, y: number}[]>}
 */
declare let KDPathCache: Map<string, {
    x: number;
    y: number;
}[]>;
/**
 * @type {Map<string, {x: number, y: number}[]>}
 */
declare let KDPathCacheIgnoreLocks: Map<string, {
    x: number;
    y: number;
}[]>;
declare let KDSmartMovable: Map<any, any>;
declare let KDMovable: Map<any, any>;
declare let KDPathfindingCacheHits: number;
declare let KDPathfindingCacheFails: number;
declare let KDPFTrim: number;
declare function KinkyDungeonSendBuffEvent(Event: any, data: any): void;
/**
 *
 * @param {entity} entity
 * @param {number} delta
 * @param {boolean} endFloor
 */
declare function KinkyDungeonTickBuffs(entity: entity, delta: number, endFloor: boolean): void;
/**
 *
 * @param {entity} entity
 * @param {string} tag
 * @param {number} Amount
 */
declare function KinkyDungeonTickBuffTag(entity: entity, tag: string, Amount?: number): void;
/**
 *
 * @param {entity} entity
 * @param {string} tag
 * @returns {boolean}
 */
declare function KDEntityHasBuffTags(entity: entity, tag: string): boolean;
/**
 *
 * @param {entity} entity
 * @param {string} tag
 * @returns {Record<string, any>}
 */
declare function KDGetBuffsWithTag(entity: entity, tag: string): Record<string, any>;
/**
 *
 * @param {entity} entity
 * @param {string[]} tags
 */
declare function KinkyDungeonRemoveBuffsWithTag(entity: entity, tags: string[]): void;
declare function KinkyDungeonUpdateBuffs(delta: any, endFloor: any): void;
declare function KDUpdatePlayerShield(PlayerBuffs: any): void;
declare function KDDamagePlayerShield(Amount: any, Player: any): void;
/**  */
declare function KDBuffEnabled(list: any, buff: any, onlyPositiveDuration: any): boolean;
declare function KinkyDungeonGetBuffedStat(list: any, Stat: any, onlyPositiveDuration: any): number;
declare function KinkyDungeonGetMaxBuffedStat(list: any, Stat: any, onlyPositiveDuration: any): number;
/**
 *
 * @param {entity} entity
 * @param {string} key
 */
declare function KinkyDungeonExpireBuff(entity: entity, key: string): void;
/**
 *
 * @param {entity} entity
 * @param {any} origbuff
 * @param {any} changes
 */
declare function KinkyDungeonApplyBuffToEntity(entity: entity, origbuff: any, changes: any): {};
declare function KDApplyBuff(list: any, origbuff: any, changes: any, entity: any): {};
declare function KinkyDungeonGetbuff(list: any, Buff: any): any;
declare function KinkyDungeonHasBuff(list: any, Buff: any, excludeNoDuration: any): boolean;
/**
 *
 * @param {entity} entity
 * @param {string} buff
 * @param {boolean} excludeNoDuration
 * @returns {boolean}
 */
declare function KDEntityHasBuff(entity: entity, buff: string, excludeNoDuration?: boolean): boolean;
/**
 *
 * @param {entity} entity
 * @param {string} stat
 * @param {boolean} [onlyPositiveDuration]
 * @returns {number}
 */
declare function KDEntityBuffedStat(entity: entity, stat: string, onlyPositiveDuration?: boolean): number;
/**
 *
 * @param {entity} entity
 * @param {string} stat
 * @param {boolean} [onlyPositiveDuration]
 * @returns {number}
 */
declare function KDEntityMaxBuffedStat(entity: entity, stat: string, onlyPositiveDuration?: boolean): number;
/**
 *
 * @param {entity} entity
 */
declare function KDEntityGetBuff(entity: entity, buff: any): any;
declare function KDMapHasEvent(map: any, event: any): boolean;
declare function KinkyDungeonSendEvent(Event: any, data: any, forceSpell: any): void;
/** Called during initialization */
declare function KinkyDungeonResetEventVariables(): void;
/** Called every tick */
declare function KinkyDungeonResetEventVariablesTick(delta: any): void;
/**
 *
 * @param {string} Event
 * @param {KinkyDungeonEvent} e
 * @param {item} item
 * @param {*} data
 */
declare function KinkyDungeonHandleInventoryIconEvent(Event: string, e: KinkyDungeonEvent, item: item, data: any): void;
/**
 *
 * @param {string} Event
 * @param {KinkyDungeonEvent} kinkyDungeonEvent
 * @param {item} item
 * @param {*} data
 */
declare function KinkyDungeonHandleInventorySelectedEvent(Event: string, kinkyDungeonEvent: KinkyDungeonEvent, item: item, data: any): void;
/**
 *
 * @param {string} Event
 * @param {KinkyDungeonEvent} e
 * @param {item} item
 * @param {*} data
 */
declare function KinkyDungeonHandleInventoryEvent(Event: string, e: KinkyDungeonEvent, item: item, data: any): void;
/**
 *
 * @param {string} Event
 * @param {any} buff
 * @param {any} entity
 * @param {*} data
 */
declare function KinkyDungeonHandleBuffEvent(Event: string, e: any, buff: any, entity: any, data: any): void;
/**
 *
 * @param {string} Event
 * @param {any} outfit
 * @param {*} data
 */
declare function KinkyDungeonHandleOutfitEvent(Event: string, e: any, outfit: any, data: any): void;
/**
 *
 * @param {string} Event
 * @param {KinkyDungeonEvent} e
 * @param {any} spell
 * @param {*} data
 */
declare function KinkyDungeonHandleMagicEvent(Event: string, e: KinkyDungeonEvent, spell: any, data: any): void;
/**
 *
 * @param {string} Event
 * @param {KinkyDungeonEvent} e
 * @param {weapon} weapon
 * @param {*} data
 */
declare function KinkyDungeonHandleWeaponEvent(Event: string, e: KinkyDungeonEvent, weapon: weapon, data: any): void;
/**
 *
 * @param {string} Event
 * @param {KinkyDungeonEvent} e
 * @param {any} b
 * @param {*} data
 */
declare function KinkyDungeonHandleBulletEvent(Event: string, e: KinkyDungeonEvent, b: any, data: any): void;
/**
 *
 * @param {string} Event
 * @param {KinkyDungeonEvent} e
 * @param {entity} enemy
 * @param {*} data
 */
declare function KinkyDungeonHandleEnemyEvent(Event: string, e: KinkyDungeonEvent, enemy: entity, data: any): void;
/**
 *
 * @param {string} Event
 * @param {*} data
 */
declare function KinkyDungeonHandleGenericEvent(Event: string, data: any): void;
declare function KDEventPrereq(e: any, item: any, tags: any): any;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDIsHumanoid(enemy: entity): boolean;
/**
 * For spells that arent cast, like toggles and flame blade
 * @param {spell} spell
 * @param {*} data
 * @param {boolean} Passive
 * @param {boolean} Toggle
 */
declare function KDTriggerSpell(spell: spell, data: any, Passive: boolean, Toggle: boolean): void;
declare function KDAddArcaneEnergy(player: any, powerAdded: any): void;
declare function KinkyDungeonSendAltEvent(Event: any, data: any): void;
/**
 *
 * @param {string} Event
 * @param {KinkyDungeonEvent} e
 * @param {any} alt
 * @param {*} data
 */
declare function KinkyDungeonHandleAltEvent(Event: string, e: KinkyDungeonEvent, alt: any, data: any): void;
declare let KinkyDungeonAttackTwiceFlag: boolean;
declare let KinkyDungeonSlimeParts: ({
    group: string;
    restraint: string;
    noUnmasked: boolean;
} | {
    group: string;
    restraint: string;
    noUnmasked?: undefined;
})[];
declare let KDAlertCD: number;
declare let KDEventDataReset: {};
declare namespace KDEventDataBase {
    const SlimeLevel: number;
    const SlimeLevelStart: number;
    const CurseHintTick: boolean;
    const ActivationsThisTurn: number;
}
declare namespace KDEventData { }
/**
 * Function mapping
 * to expand, keep (e, item, data) => {...} as a constant API call
 * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, item, *): void>>}
 */
declare let KDEventMapInventoryIcon: {
    [x: string]: {
        [x: string]: (arg0: KinkyDungeonEvent, arg1: item, arg2: any) => void;
    };
};
/**
 * Function mapping
 * to expand, keep (e, item, data) => {...} as a constant API call
 * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, item, *): void>>}
 */
declare let KDEventMapInventorySelected: {
    [x: string]: {
        [x: string]: (arg0: KinkyDungeonEvent, arg1: item, arg2: any) => void;
    };
};
/**
 * Function mapping
 * to expand, keep (e, item, data) => {...} as a constant API call
 * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, item, *): void>>}
 */
declare let KDEventMapInventory: {
    [x: string]: {
        [x: string]: (arg0: KinkyDungeonEvent, arg1: item, arg2: any) => void;
    };
};
/**
 * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, *, entity, *): void>>}
 */
declare const KDEventMapBuff: {
    [x: string]: {
        [x: string]: (arg0: KinkyDungeonEvent, arg1: any, arg2: entity, arg3: any) => void;
    };
};
/**
 * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, *, *): void>>}
 */
declare let KDEventMapOutfit: {
    [x: string]: {
        [x: string]: (arg0: KinkyDungeonEvent, arg1: any, arg2: any) => void;
    };
};
/**
 * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, *, *): void>>}
 */
declare let KDEventMapSpell: {
    [x: string]: {
        [x: string]: (arg0: KinkyDungeonEvent, arg1: any, arg2: any) => void;
    };
};
/**
 * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, weapon, *): void>>}
 */
declare let KDEventMapWeapon: {
    [x: string]: {
        [x: string]: (arg0: KinkyDungeonEvent, arg1: weapon, arg2: any) => void;
    };
};
/**
 * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, *, *): void>>}
 */
declare let KDEventMapBullet: {
    [x: string]: {
        [x: string]: (arg0: KinkyDungeonEvent, arg1: any, arg2: any) => void;
    };
};
/**
 * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, entity, *): void>>}
 */
declare let KDEventMapEnemy: {
    [x: string]: {
        [x: string]: (arg0: KinkyDungeonEvent, arg1: entity, arg2: any) => void;
    };
};
/**
 * @type {Object.<string, Object.<string, function(string, *): void>>}
 */
declare let KDEventMapGeneric: {
    [x: string]: {
        [x: string]: (arg0: string, arg1: any) => void;
    };
};
declare namespace KDHardModeReplace {
    const WitchShock: string;
    const WitchChain: string;
    const Drone: string;
    const CaptureBot: string;
    const EnforcerBot: string;
    const Alchemist: string;
    const WolfgirlPet: string;
    const WolfApprentice: string;
    const WolfTapeDrones: string;
    const Bandit: string;
    const BanditHunter: string;
    const BanditGrappler: string;
    const SmallSlime: string;
    const FastSlime: string;
    const LatexCubeSmall: string;
    const Dragon: string;
    const DragonShield: string;
    const ElementalFire: string;
    const Pixie: string;
    const Statue: string;
    const SoulCrystal: string;
    const ShadowHand: string;
    const ShadowGhast: string;
    const Gag: string;
    const Scarves: string;
    const RopeSnake: string;
    const LearnedRope: string;
    const Apprentice: string;
    const Apprentice2: string;
    const HighWizard: string;
    const Dressmaker: string;
    const Cleric: string;
    const BlindZombie: string;
    const FastZombie: string;
    const Ninja: string;
    const Maidforce: string;
    const MaidforcePara: string;
    const LesserSkeleton: string;
    const Skeleton: string;
    const OldDrone: string;
}
/**
 * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, *, *): void>>}
 */
declare let KDEventMapAlt: {
    [x: string]: {
        [x: string]: (arg0: KinkyDungeonEvent, arg1: any, arg2: any) => void;
    };
};
declare function KinkyDungeonAddTags(tags: any, Floor: any): any[];
/**
 *
 * @param {string[]} enemytags
 * @param {number} Level
 * @param {string} Index
 * @param {string} Tile
 * @param {string[]} [requireTags]
 * @param {{requireHostile?: string, requireAllied?: string, requireNonHostile?: string}} [alliances]
 * @param {Record<string, {bonus: number, mult: number}>} [bonusTags]
 * @param {string[]} [filterTags]
 * @param {string[]} [requireSingleTag]
 * @param {number} minWeight - Cut off weights below this one
 * @param {boolean} minWeightFallback - Fallback to 0 minweight
 * @returns {enemy}
 */
declare function KinkyDungeonGetEnemy(enemytags: string[], Level: number, Index: string, Tile: string, requireTags?: string[], alliances?: {
    requireHostile?: string;
    requireAllied?: string;
    requireNonHostile?: string;
}, bonusTags?: Record<string, {
    bonus: number;
    mult: number;
}>, filterTags?: string[], requireSingleTag?: string[], minWeight?: number, minWeightFallback?: boolean, noOverrideFloor?: boolean): enemy;
declare function KinkyDungeonGetEnemyByName(Name: string): enemy;
/**
 *
 * @param {string} name
 * @returns {enemy}
 */
declare function KinkyDungeonGetEnemyByName(name: string): enemy;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {boolean} noTransgress
 * @param {boolean} normalDrops
 * @param {string[]} [requireTags]
 * @returns {entity}
 */
declare function KinkyDungeonCallGuard(x: number, y: number, noTransgress: boolean, normalDrops: boolean, requireTags?: string[]): entity;
declare function KinkyDungeonHandleWanderingSpawns(delta: any): void;
declare let KDPerkToggleTags: string[];
declare let KinkyDungeonTotalSleepTurns: number;
declare let KinkyDungeonSearchTimer: number;
declare let KinkyDungeonSearchTimerMin: number;
declare let KinkyDungeonFirstSpawn: boolean;
declare let KinkyDungeonSearchStartAmount: number;
declare let KinkyDungeonSearchHuntersAmount: number;
declare let KinkyDungeonSearchEntranceAdjustAmount: number;
declare let KinkyDungeonSearchEntranceChaseAmount: number;
/** The defauilt interval between hunter checks */
declare let HunterPulse: number;
/** Cooldown for hunter spawns */
declare let HunterSpawnTimer: number;
declare function KDAssignGuardAction(guard: any, xx: any, yy: any): void;
declare function KDGetJailEvent(guard: any, xx: any, yy: any): (g: any, x: any, y: any) => void;
declare function KinkyDungeonLoseJailKeys(Taken: any, boss: any, enemy: any): void;
declare function KinkyDungeonUpdateJailKeys(): void;
declare function KinkyDungeonAggroFaction(faction: any, noAllyRepPenalty: any, securityPenalty?: number): boolean;
declare function KinkyDungeonPlayerIsVisibleToJailers(): entity;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KinkyDungeonCanPlay(enemy: entity): boolean;
declare function KinkyDungeonCheckRelease(): number;
/**
 *
 * @param {string} action
 * @param {{enemy?: entity, x?: number, y?: number, faction?: string}} data
 */
declare function KinkyDungeonAggroAction(action: string, data: {
    enemy?: entity;
    x?: number;
    y?: number;
    faction?: string;
}): void;
/**
 *
 * @param {entity} enemy
 * @param {string} Type
 * @param {string} [faction]
 * @param {boolean} [force]
 */
declare function KinkyDungeonStartChase(enemy: entity, Type: string, faction?: string, force?: boolean): void;
/**
 *
 * @param {entity} enemy
 * @param {string} Type
 */
declare function KinkyDungeonPlayExcuse(enemy: entity, Type: string): void;
/**
 *
 * @param {entity} enemy
 * @param {number} mult
 * @param {number} base
 */
declare function KDSetPlayCD(enemy: entity, mult: number, base?: number): void;
/**
 *
 * @param {string} Group
 * @returns {{restraint: restraint, variant: string}}
 */
declare function KinkyDungeonGetJailRestraintForGroup(Group: string): {
    restraint: restraint;
    variant: string;
};
/**
 *
 * @param {KDJailRestraint} r
 * @returns {boolean}
 */
declare function KDJailCondition(r: KDJailRestraint): boolean;
/**
 *
 * @param {KDJailRestraint} r
 * @returns {boolean}
 */
declare function KDPriorityCondition(r: KDJailRestraint): boolean;
declare function KinkyDungeonGetJailRestraintLevelFor(Name: any): number;
/**
 *
 * @param {string[]} [filter] - Have to be in a jail, not a dropoff
 * @returns {boolean}
 */
declare function KinkyDungeonInJail(filter?: string[]): boolean;
declare function KinkyDungeonPlaceJailKeys(): void;
declare function KinkyDungeonHandleJailSpawns(delta: any): void;
declare function KinkyDungeonLockableItems(): string[];
declare function KinkyDungeonMissingJailUniform(): string[];
declare function KinkyDungeonTooMuchRestraint(): string[];
/**
 *
 * @param {entity} player
 * @param {entity} enemy
 * @param {{x: number, y: number}} point
 */
declare function KDPutInJail(player: entity, enemy: entity, point: {
    x: number;
    y: number;
}): void;
/**
 *
 * @param {number} xx
 * @param {number} yy
 * @param {string} type
 */
declare function KinkyDungeonHandleLeashTour(xx: number, yy: number, type: string): void;
declare function KDGetEffSecurityLevel(faction: any, Cap: any): number;
/**
 *
 * @param {number} xx
 * @param {number} yy
 * @param {string} type
 */
declare function KinkyDungeonJailGuardGetLeashWaypoint(xx: number, yy: number, type: string): void;
declare function KinkyDungeonJailGetLeashPoint(xx: any, yy: any, enemy: any): {
    x: any;
    y: any;
};
/**
 * @param {boolean} [any]
 * @param {boolean} [qualified] - Makes sure the player is qualified
 * @param {string[]} [filter]
 * @returns {boolean} - Returns if the player is inside the nearest jail cell
 */
declare function KinkyDungeonPlayerInCell(any?: boolean, qualified?: boolean, filter?: string[]): boolean;
declare function KinkyDungeonPointInCell(x: any, y: any, radius?: number): boolean;
declare function KinkyDungeonPassOut(noteleport: any): void;
declare function KDGetJailDoor(x: any, y: any): {
    tile: any;
    x: any;
    y: any;
};
declare function KDDefeatedPlayerTick(nodefeat: any): void;
declare function KDEnterDemonTransition(): void;
declare function KDEnterDollTerminal(willing: any, cancelDialogue?: boolean): void;
declare function KDApplyLivingCollars(): void;
declare function KinkyDungeonDefeat(PutInJail: any, leashEnemy: any): void;
/**
 *
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDEnemyIsTemporary(enemy: entity): boolean;
/**
 * Kicks enemies away, and also out of offlimits zones if they are aware
 * @param {any} nearestJail
 * @param {boolean} ignoreAware
 * @param {number} Level
 * @param {boolean} [noCull]
 * @returns
 */
declare function KDKickEnemies(nearestJail: any, ignoreAware: boolean, Level: number, noCull?: boolean): boolean;
declare function KDResetAllIntents(nonHostileOnly: any): void;
declare function KDResetAllAggro(): void;
/**
 * Moves an enemy to a random position on the map
 * @param {entity} e
 */
declare function KDKickEnemy(e: entity, minDist?: number): void;
/**
 * Moves an enemy to a random position nearby
 * @param {entity} e
 */
declare function KDKickEnemyLocal(e: entity): void;
declare function KinkyDungeonStripInventory(KeepPicks: any): void;
declare function KDExpireFlags(enemy: any): void;
/**
 * Gets the jail outfit of the guard, or using overrideTags instead of the guard's taggs
 * @param {string[]} [overrideTags]
 * @param {boolean} [requireJail]
 * @param {boolean} [requireParole]
 * @returns {KDJailRestraint[]}
 */
declare function KDGetJailRestraints(overrideTags?: string[], requireJail?: boolean, requireParole?: boolean): KDJailRestraint[];
declare function KDFixPlayerClothes(faction: any): void;
declare function KDResetGuardSpawnTimer(): void;
/**
 *
 * @param {{enemy?: entity, x?: number, y?: number, faction?: string}} data
 * @returns {number}
 */
declare function KDChestSecurity(data: {
    enemy?: entity;
    x?: number;
    y?: number;
    faction?: string;
}): number;
/** Affects security level based on owning faction */
declare let KDMainFactionSecurityMod: number;
/** Time spent in cage before guards start getting teleported */
declare let KDMaxCageTime: number;
/** max keys on the map at once **/
declare let KDMaxKeys: number;
/** Only these have jail events */
declare let KDJailFilters: string[];
/** Max turns for the alert timer until the whole map becomes hostile */
declare let KDMaxAlertTimer: number;
declare let KDMaxAlertTimerAggro: number;
/**
 * @type {string[]}
 */
declare let KDLocalChaseTypes: string[];
/**
 * @type {string[]}
 */
declare let KDSevereTypes: string[];
/**
 * @type {Record<string, (enemy: entity) => void>}
 */
declare let KDCustomDefeats: Record<string, (enemy: entity) => void>;
declare namespace KDCustomDefeatUniforms {
    function WolfgirlHunters(): void;
    function MaidSweeper(): void;
    function DollShoppe(): void;
    function CyberDoll(): void;
    function RopeDojo(): void;
    function ElementalSlave(): void;
}
declare namespace KDChestRank {
    const gold: number;
    const lessergold: number;
    const silver: number;
    const storage: number;
}
declare function KinkyDungeonPlaceSetPieces(POI: any, trapLocations: any, chestlist: any, shrinelist: any, chargerlist: any, spawnPoints: any, InJail: any, width: any, height: any): void;
declare function KDGetFavoredSetpieces(POI: any, setpieces: any): any;
declare function KDGetFavoringSetpieces(Name: any, tags: any, POI: any, POIBlacklist: any): any;
declare function KinkyDungeonGetSetPiece(POI: any, setpieces: any, pieces: any): any;
declare function KinkyDungeonGenerateSetpiece(POI: any, Piece: any, InJail: any, trapLocations: any, chestlist: any, shrinelist: any, chargerlist: any, spawnPoints: any, forcePOI: any, altType: any, MapParams: any): {
    Pass: boolean;
    Traps: any;
};
/**
 * This function unblocks movement to ensure a map is pathable
 * @param {number} x
 * @param {number} y
 * @returns {boolean} - whether it's possible
 */
declare function KDUnblock(x: number, y: number): boolean;
declare function SetpieceSpawnPrisoner(x: any, y: any): void;
declare function KDTorch(X: any, Y: any, altType: any, MapParams: any): void;
declare function KDTorchUnlit(X: any, Y: any, altType: any, MapParams: any): void;
declare function KDChest(X: any, Y: any, loot?: string, faction?: string): void;
declare function KDCreateDoors(Left: any, Top: any, Width: any, Height: any, openChance?: number, convertDoodads?: boolean): void;
declare function KDPlaceChest(cornerX: any, cornerY: any, radius: any, chestlist: any, spawnPoints: any, NoAddToChestList: any): string;
declare function KDAddPipes(pipechance: any, pipelatexchance: any, thinlatexchance: any, heavylatexspreadchance: any): void;
declare let KDSetpieceAttempts: number;
declare let KDSetPieces: ({
    Name: string;
    tags: string[];
    Radius: number;
    xPad?: undefined;
    yPad?: undefined;
    xPadEnd?: undefined;
    yPadEnd?: undefined;
    Max?: undefined;
    Prereqs?: undefined;
    noPOI?: undefined;
} | {
    Name: string;
    tags: string[];
    Radius: number;
    xPad: number;
    yPad: number;
    xPadEnd: number;
    yPadEnd: number;
    Max?: undefined;
    Prereqs?: undefined;
    noPOI?: undefined;
} | {
    Name: string;
    tags: string[];
    Radius: number;
    Max: number;
    xPad?: undefined;
    yPad?: undefined;
    xPadEnd?: undefined;
    yPadEnd?: undefined;
    Prereqs?: undefined;
    noPOI?: undefined;
} | {
    Name: string;
    tags: string[];
    Radius: number;
    Prereqs: string[];
    Max: number;
    xPad: number;
    yPad: number;
    xPadEnd: number;
    yPadEnd: number;
    noPOI?: undefined;
} | {
    Name: string;
    tags: string[];
    Radius: number;
    Max: number;
    xPad: number;
    yPad?: undefined;
    xPadEnd?: undefined;
    yPadEnd?: undefined;
    Prereqs?: undefined;
    noPOI?: undefined;
} | {
    Name: string;
    tags: string[];
    noPOI: boolean;
    Radius: number;
    xPad: number;
    yPad: number;
    xPadEnd: number;
    yPadEnd: number;
    Max?: undefined;
    Prereqs?: undefined;
})[];
declare let KDCountSetpiece: Map<any, any>;
/**
 *
 * @param {number} Min
 * @param {number} Avg
 * @param {number} Max
 * @param {entity} [Enemy]
 * @returns {number}
 */
declare function KDPersonalitySpread(Min: number, Avg: number, Max: number, Enemy?: entity): number;
declare function KinkyDungeonCanPutNewDialogue(): boolean;
declare function KDBasicCheck(PositiveReps: any, NegativeReps: any, Modifier?: number): number;
declare function KDDialogueApplyPersonality(allowed: any): void;
declare function KDGetDialogue(): KinkyDialogue;
declare function KDDrawDialogue(delta: any): void;
/**
 * @param {number} Amount
 */
declare function KDIncreaseOfferFatigue(Amount: number): void;
/**
 * @param {entity} enemy
 * @returns {number}
 */
declare function KDEnemyHelpfulness(enemy: entity): number;
/**
 *
 * @returns {entity}
 */
declare function KDGetSpeaker(): entity;
/**
 *
 * @returns {string}
 */
declare function KDGetSpeakerFaction(): string;
/**
 *
 * @param {number} Amount
 */
declare function KDPleaseSpeaker(Amount: number): void;
/**
 *
 * @param {entity} enemy
 * @param {number} Amount
 */
declare function KDAddOpinion(enemy: entity, Amount: number): void;
declare function KDAllySpeaker(Turns: any, Follow: any): void;
/**
 *
 * @param {number} Turns
 * @param {boolean} NoAlertFlag
 */
declare function KDAggroSpeaker(Turns?: number, NoAlertFlag?: boolean): void;
declare function KDBasicDialogueSuccessChance(checkResult: any): number;
declare function KDAgilityDialogueSuccessChance(checkResult: any): number;
declare function KDOffensiveDialogueSuccessChance(checkResult: any): number;
/**
 *
 * @param {string} Dialogue
 * @param {string} [Speaker]
 * @param {boolean} [Click]
 * @param {string} [Personality]
 * @param {entity} [enemy]
 */
declare function KDStartDialog(Dialogue: string, Speaker?: string, Click?: boolean, Personality?: string, enemy?: entity): void;
declare function KDDoDialogue(data: any): void;
/**
 *
 * @param {string} Dialogue
 * @param {string} [Speaker]
 * @param {boolean} [Click]
 * @param {string} [Personality]
 * @param {entity} [enemy]
 */
declare function KDStartDialogInput(Dialogue: string, Speaker?: string, Click?: boolean, Personality?: string, enemy?: entity): void;
declare function KDDialogueGagged(): boolean;
declare function KDHandleDialogue(): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string} Name
 * @returns {entity}
 */
declare function DialogueCreateEnemy(x: number, y: number, Name: string): entity;
/**
 *
 * @returns {entity}
 */
declare function KDDialogueEnemy(): entity;
declare function KDAllyDialogue(name: any, requireTags: any, requireSingleTag: any, excludeTags: any, weight: any): KinkyDialogue;
/**
 *
 * @param {string} name
 * @param {string} faction
 * @param {string[]} enemytypes
 * @returns {KinkyDialogue}
 */
declare function KDPrisonerRescue(name: string, faction: string, enemytypes: string[]): KinkyDialogue;
declare function KDRecruitDialogue(name: any, faction: any, outfitName: any, goddess: any, restraints: any, restraintscount: any, restraintsAngry: any, restraintscountAngry: any, requireTags: any, requireSingleTag: any, excludeTags: any, chance: any): KinkyDialogue;
declare function KDShopDialogue(name: any, items: any, requireTags: any, requireSingleTag: any, chance: any, itemsdrop: any): KinkyDialogue;
declare function KDShopBuyDialogue(name: any): KinkyDialogue;
/**
 *
 * @param {(firstRefused) => boolean} setupFunction - firstRefused is if the player said no first. Happens after the user clicks
 * @param {(firstRefused) => boolean} yesFunction - firstRefused is if the player said no then yes. Happens whenever the user submits
 * @param {(firstRefused) => boolean} noFunction - firstRefused is if the player said no then no. Happens whenever the user successfully avoids
 * @param {(firstRefused) => boolean} domFunction - firstRefused is if the player said no then no. Happens when the user clicks the Dominant response
 * @returns {KinkyDialogue}
 */
declare function KDYesNoTemplate(setupFunction: (firstRefused: any) => boolean, yesFunction: (firstRefused: any) => boolean, noFunction: (firstRefused: any) => boolean, domFunction: (firstRefused: any) => boolean): KinkyDialogue;
/**
 *
 * @param {string} name
 * @param {string[]} goddess
 * @param {string[]} allowedPrisonStates
 * @param {string[]} allowedPersonalities
 * @param {string[]} requireTagsSingle
 * @param {string[]} requireTags
 * @param {string[]} excludeTags
 * @param {string[]} requireFlags
 * @param {string[]} excludeFlags
 * @param {string[]} restraintTags
 * @param {string} Lock
 * @param {number} WeightMult
 * @returns {KinkyDialogueTrigger}
 */
declare function KDDialogueTriggerOffer(name: string, goddess: string[], restraintTags: string[], allowedPrisonStates: string[], allowedPersonalities: string[], requireTagsSingle: string[], requireTagsSingle2: any, requireTags: string[], excludeTags: string[], requireFlags: string[], excludeFlags: string[], Lock?: string, WeightMult?: number): KinkyDialogueTrigger;
/**
 *
 * @param {string} name
 * @param {string[]} goddess
 * @param {string[]} antigoddess
 * @param {string[]} restraint
 * @param {number[]} diffSpread - 0 is yesfunction diff, 2 is nofunction diff, 1 is yesfunction dom (should be lower), 3 is nofunction dom (should be lower)
 * @param {number[]} OffdiffSpread - 0 is submissive diff, 1 is normal diff, 2 is dom diff, 3 is dom diff if you have dom personality (should be between 1 and 2)
 * @param {number} count
 * @param {number} countAngry
 * @param {string} countAngry
 * @param {boolean} Ally
 * @param {{name: string, duration: number, floors?: number}[]} Flags - Sets flags on setup
 * @returns {KinkyDialogue}
 */
declare function KDYesNoBasic(name: string, goddess: string[], antigoddess: string[], restraint: string[], diffSpread: number[], OffdiffSpread: number[], count?: number, countAngry?: number, Lock?: string, Ally?: boolean, Flags?: {
    name: string;
    duration: number;
    floors?: number;
}[]): KinkyDialogue;
/**
 * A shop where the seller sells items
 * @returns {KinkyDialogue}
 */
declare function KDSaleShop(name: any, items: any, requireTags: any, requireSingleTag: any, chance: any, markup: any, itemsdrop: any): KinkyDialogue;
/** Yoinks a nearby enemy and brings them next to x */
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {boolean} [unaware]
 * @returns {entity}
 */
declare function DialogueBringNearbyEnemy(x: number, y: number, radius: number, unaware?: boolean): entity;
/** Yoinks a nearby enemy and brings them next to x */
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {entity} enemy
 * @returns {entity}
 */
declare function DialogueBringSpecific(x: number, y: number, enemy: entity): entity;
/**
 * Returns if you are submissive enough to be played with by this enemy
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDIsSubmissiveEnough(enemy: entity): boolean;
/**
 *
 * @param {entity} enemy
 * @returns {number}
 */
declare function KDGetModifiedOpinion(enemy: entity): number;
/**
 *
 * @param {number} Amount
 */
declare function KDAddOffer(Amount: number): void;
/**
 * @returns {number}
 */
declare function KDGetOfferLevelMod(): number;
/**
 *
 * @param {entity} player
 */
declare function KDRunChefChance(player: entity): void;
/**
 *
 * @param {string} item
 * @returns {number}
 */
declare function KDItemSubThreshold(item: string, nomult: any): number;
declare function KDGetShopCost(enemy: any): number;
declare function KDAggroMapFaction(): void;
declare namespace KDDialogueData {
    const CurrentDialogueIndex: number;
}
declare let KDMaxDialogue: number;
declare let KDOptionOffset: number;
declare let KinkyDungeonDialogueTimer: number;
/**
 * @type {Record<string, {speaker: string, faction: string}>}
 */
declare let KDPrisonRescues: Record<string, {
    speaker: string;
    faction: string;
}>;
declare let KDMaxSellItems: number;
declare let KDOfferCooldown: number;
/**
 * Generic condition for Bondage Offers
 * @param {entity} enemy
 * @param {any} AIData
 * @param {number} dist - Current player dist, its sent as a param for faster runtime
 * @param {number} maxdist
 * @param {number} chance
 * @param {string[]} restraintTags - Tags of required restraints
 * @param {string} Lock
 * @returns {boolean}
 */
declare function KDDefaultPrereqs(enemy: entity, AIData: any, dist: number, maxdist: number, chance: number, restraintTags: string[], force: any, Lock?: string): boolean;
declare function KDShopTrigger(name: any): {
    dialogue: any;
    allowedPrisonStates: string[];
    nonHostile: boolean;
    noCombat: boolean;
    talk: boolean;
    excludeTags: string[];
    blockDuringPlaytime: boolean;
    prerequisite: (enemy: any, dist: any, AIData: any) => boolean;
    weight: (enemy: any, dist: any) => number;
};
/**
 *
 * @param {string} name
 * @param {KinkyDialogue} name
 * @returns {KinkyDialogueTrigger}
 */
declare function KDRecruitTrigger(name: string, dialogue: any): KinkyDialogueTrigger;
/** Boss intro dialogue */
declare function KDBossTrigger(name: any, enemyName: any): {
    dialogue: any;
    nonHostile: boolean;
    prerequisite: (enemy: any, dist: any, AIData: any) => boolean;
    weight: (enemy: any, dist: any) => number;
};
/**
 * Lose to a boss
 * @param {string} name
 * @param {string[]} enemyName
 * @param {string[]} tags
 * @returns {KinkyDialogueTrigger}
 */
declare function KDBossLose(name: string, enemyName: string[], tags: string[], condition: any): KinkyDialogueTrigger;
declare function KinkyDungeonGetShopForEnemy(enemy: any, guaranteed: any): string;
/** No dialogues will trigger when the player dist is higher than this */
declare let KinkyDungeonMaxDialogueTriggerDist: number;
/** @type {Record<string, KinkyDialogueTrigger>} */
declare let KDDialogueTriggers: Record<string, KinkyDialogueTrigger>;
declare namespace KDDialogueParams {
    const ShopkeeperHelpFee: number;
    const ShopkeeperHelpFeePerLevel: number;
    const ShopkeeperHelpFeePerPower: number;
    const ShopkeeperHelpFeeFreebiePower: number;
    const ShopkeeperFee: number;
    const ShopkeeperFeePerLevel: number;
    const ShopkeeperFeePunishThresh: number;
    const ChefChance: number;
}
/**
 * Tags that are deleted on ng++
 * @type {string[]}
 */
declare let KDResertNGTags: string[];
declare let KDShopPersonalities: string[];
/**
 * @type {Record<string, {name: string, tags: string[], singletag: string[], chance: number, items?: string[], itemsdrop?: string[]}>}
 */
declare let KDShops: Record<string, {
    name: string;
    tags: string[];
    singletag: string[];
    chance: number;
    items?: string[];
    itemsdrop?: string[];
}>;
/**
 * @type {Record<string, {name: string, outfit: string, tags: string[], singletag: string[], excludeTags: string[], chance: number}>}
 */
declare let KDRecruitDialog: Record<string, {
    name: string;
    outfit: string;
    tags: string[];
    singletag: string[];
    excludeTags: string[];
    chance: number;
}>;
/**
 * @type {Record<string, {name: string, tags: string[], singletag: string[], excludeTags: string[], weight: number}>}
 */
declare let KDAllyDialog: Record<string, {
    name: string;
    tags: string[];
    singletag: string[];
    excludeTags: string[];
    weight: number;
}>;
declare let KDSleepBedPercentage: number;
/** @type {Record<string, KinkyDialogue>} */
declare let KDDialogue: Record<string, KinkyDialogue>;
/**
 * Determines if the enemy (which can be hostile) is aggressive, i.e. will pursue the player or ignore
 * @param {entity} [enemy]
 * @param {entity} [player]
 * @returns {boolean}
 */
declare function KinkyDungeonAggressive(enemy?: entity, player?: entity): boolean;
/**
 * Returns whether or not the enemy is ALLIED, i.e it will follow the player
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDAllied(enemy: entity): boolean;
/**
 * Returns whether the enemy is HOSTILE to the player (if no optional argument) or the optional enemy
 * @param {entity} enemy
 * @param {entity} [enemy2]
 * @returns {boolean}
 */
declare function KDHostile(enemy: entity, enemy2?: entity): boolean;
/**
 * Gets the faction of the enemy, returning "Player" if its an ally, or "Enemy" if no faction
 * @param {entity} enemy
 * @returns {string}
 */
declare function KDGetFaction(enemy: entity): string;
/**
 * Gets the faction of the enemy, returning "Player" if its an ally, or "Enemy" if no faction
 * @param {entity} enemy
 * @returns {string}
 */
declare function KDGetFactionOriginal(enemy: entity): string;
/**
 * Consults the faction table and decides if the two mentioned factions are hostile
 * @param {string} a - Faction 1
 * @param {string | entity} b - Faction 2
 * @returns {boolean}
 */
declare function KDFactionHostile(a: string, b: string | entity): boolean;
/**
 * Consults the faction table and decides if the two mentioned factions are allied
 * @param {string} a - Faction 1
 * @param {string | entity} b - Faction 2
 * @param {number} [threshold] - Faction 2
 * @returns {boolean}
 */
declare function KDFactionAllied(a: string, b: string | entity, threshold?: number): boolean;
/**
 * Consults the faction table and decides if the two mentioned factions are favorable (i.e no friendly fire)
 * @param {string} a - Faction 1
 * @param {string | entity} b - Faction 2
 * @returns {boolean}
 */
declare function KDFactionFavorable(a: string, b: string | entity): boolean;
/**
 *
 * @param {string[]} list
 * @param {number} Floor
 * @param {string} Checkpoint
 * @param {string[]} tags
 * @param {any} bonustags
 * @param {number} [X]
 * @param {number} [Y]
 * @returns {Record<string, number>}
 */
declare function KDGetFactionProps(list: string[], Floor: number, Checkpoint: string, tags: string[], bonustags: any, X?: number, Y?: number): Record<string, number>;
/**
 * Gets the honor from faction a toward faction b
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
declare function KDGetHonor(a: string, b: string): number;
declare function KDFactionRelation(a: any, b: any): number;
declare function KDInitFactions(Reset: any): void;
/**
 * Sets faction relation and refreshes the map
 * @param {string} a
 * @param {string} b
 * @param {number} relation
 */
declare function KDSetFactionRelation(a: string, b: string, relation: number): void;
/**
 * Changes faction relation and refreshes the map
 * @param {string} a
 * @param {string} b
 * @param {number} amount
 */
declare function KDChangeFactionRelation(a: string, b: string, amount: number, AffectRivals: any): void;
declare namespace KinkyDungeonFactionColors {
    const Jail: string[];
    const Slime: string[];
    const Latex: string[];
    const Dressmaker: string[];
    const Alchemist: string[];
    const Elf: string[];
    const Bountyhunter: string[];
    const AncientRobot: string[];
    const Dollsmith: string[];
    const Mushy: string[];
    const Apprentice: string[];
    const Witch: string[];
}
declare let KDFactionNoCollection: string[];
/**
 * @type {Record<string, Record<string, LayerFilter>>}
 */
declare let KinkyDungeonFactionFilters: Record<string, Record<string, LayerFilter>>;
/**
 * @type {Record<string, KDFactionProps>}
 */
declare let KDFactionProperties: Record<string, KDFactionProps>;
/** Hidden factions do not auto-rep change when you attack them */
declare let KinkyDungeonHiddenFactions: string[];
declare namespace KDFactionSecurityMod {
    export namespace Dressmaker_1 {
        const level_magic: number;
        const level_key: number;
    }
    export { Dressmaker_1 as Dressmaker };
    export namespace Witch_1 {
        const level_magic_1: number;
        export { level_magic_1 as level_magic };
        const level_key_1: number;
        export { level_key_1 as level_key };
    }
    export { Witch_1 as Witch };
    export namespace Elemental {
        const level_magic_2: number;
        export { level_magic_2 as level_magic };
    }
    export namespace Mushy_1 {
        const level_magic_3: number;
        export { level_magic_3 as level_magic };
        export const level_tech: number;
    }
    export { Mushy_1 as Mushy };
    export namespace Apprentice_1 {
        const level_magic_4: number;
        export { level_magic_4 as level_magic };
        const level_key_2: number;
        export { level_key_2 as level_key };
    }
    export { Apprentice_1 as Apprentice };
    export namespace Elf_1 {
        const level_magic_5: number;
        export { level_magic_5 as level_magic };
        const level_key_3: number;
        export { level_key_3 as level_key };
    }
    export { Elf_1 as Elf };
    export namespace Bast {
        const level_magic_6: number;
        export { level_magic_6 as level_magic };
    }
    export namespace AncientRobot_1 {
        const level_tech_1: number;
        export { level_tech_1 as level_tech };
        const level_key_4: number;
        export { level_key_4 as level_key };
    }
    export { AncientRobot_1 as AncientRobot };
    export namespace Nevermere {
        const level_tech_2: number;
        export { level_tech_2 as level_tech };
        const level_key_5: number;
        export { level_key_5 as level_key };
    }
    export namespace Maidforce {
        const level_tech_3: number;
        export { level_tech_3 as level_tech };
        const level_magic_7: number;
        export { level_magic_7 as level_magic };
        const level_key_6: number;
        export { level_key_6 as level_key };
    }
    export namespace Alchemist_1 {
        const level_tech_4: number;
        export { level_tech_4 as level_tech };
        const level_magic_8: number;
        export { level_magic_8 as level_magic };
    }
    export { Alchemist_1 as Alchemist };
    export namespace Bountyhunter_1 {
        const level_tech_5: number;
        export { level_tech_5 as level_tech };
        const level_key_7: number;
        export { level_key_7 as level_key };
    }
    export { Bountyhunter_1 as Bountyhunter };
}
declare namespace KDBaseSecurity {
    const level_key_8: number;
    export { level_key_8 as level_key };
}
declare namespace KDPiousFactions {
    const Angel: number;
}
/** Shows tooltips for these factions even though they are hidden */
declare let KinkyDungeonTooltipFactions: string[];
declare namespace KinkyDungeonFactionTag {
    const Bountyhunter_2: string;
    export { Bountyhunter_2 as Bountyhunter };
    export const Bandit: string;
    const Alchemist_2: string;
    export { Alchemist_2 as Alchemist };
    const Nevermere_1: string;
    export { Nevermere_1 as Nevermere };
    const Apprentice_2: string;
    export { Apprentice_2 as Apprentice };
    export const RopeDojo: string;
    const Dressmaker_2: string;
    export { Dressmaker_2 as Dressmaker };
    export const DollShoppe: string;
    const Elemental_1: string;
    export { Elemental_1 as Elemental };
    export const Owners: string;
    export const Dragon: string;
    const Maidforce_1: string;
    export { Maidforce_1 as Maidforce };
    export const Delinquent: string;
    const Bast_1: string;
    export { Bast_1 as Bast };
    const Elf_2: string;
    export { Elf_2 as Elf };
    const AncientRobot_2: string;
    export { AncientRobot_2 as AncientRobot };
    export const ShadowClan: string;
    export const Debate: string;
    export const Wolfhunter: string;
    export const Extraplanar: string;
    export const DubiousWitch: string;
    export const Virus: string;
    const Dollsmith_1: string;
    export { Dollsmith_1 as Dollsmith };
    export const Warden: string;
}
declare namespace KinkyDungeonFactionRelationsBase {
    export namespace Player {
        export const Enemy: number;
        const Jail_1: number;
        export { Jail_1 as Jail };
        export const Chase: number;
        export const Prisoner: number;
        export const KinkyConstruct: number;
        export const Plant: number;
        const Slime_1: number;
        export { Slime_1 as Slime };
        const Latex_1: number;
        export { Latex_1 as Latex };
        export const Mold: number;
        export const Beast: number;
        export const DragonQueen: number;
        const Bountyhunter_3: number;
        export { Bountyhunter_3 as Bountyhunter };
        const Bandit_1: number;
        export { Bandit_1 as Bandit };
        const Alchemist_3: number;
        export { Alchemist_3 as Alchemist };
        const Nevermere_2: number;
        export { Nevermere_2 as Nevermere };
        const Apprentice_3: number;
        export { Apprentice_3 as Apprentice };
        const Dressmaker_3: number;
        export { Dressmaker_3 as Dressmaker };
        const Witch_2: number;
        export { Witch_2 as Witch };
        const Elemental_2: number;
        export { Elemental_2 as Elemental };
        const Dragon_1: number;
        export { Dragon_1 as Dragon };
        const Maidforce_2: number;
        export { Maidforce_2 as Maidforce };
        const Bast_2: number;
        export { Bast_2 as Bast };
        const Elf_3: number;
        export { Elf_3 as Elf };
        const Mushy_2: number;
        export { Mushy_2 as Mushy };
        const AncientRobot_3: number;
        export { AncientRobot_3 as AncientRobot };
        const Angel_1: number;
        export { Angel_1 as Angel };
        export const Demon: number;
    }
    export namespace Angel_2 {
        const Demon_1: number;
        export { Demon_1 as Demon };
        export const Ghost: number;
        const Elemental_3: number;
        export { Elemental_3 as Elemental };
        const Dragon_2: number;
        export { Dragon_2 as Dragon };
        const AncientRobot_4: number;
        export { AncientRobot_4 as AncientRobot };
        const Nevermere_3: number;
        export { Nevermere_3 as Nevermere };
        const Enemy_1: number;
        export { Enemy_1 as Enemy };
    }
    export { Angel_2 as Angel };
    export namespace Natural {
        const Player_1: number;
        export { Player_1 as Player };
        const Jail_2: number;
        export { Jail_2 as Jail };
        const Chase_1: number;
        export { Chase_1 as Chase };
    }
    export namespace Barrel {
        const Jail_3: number;
        export { Jail_3 as Jail };
        const Chase_2: number;
        export { Chase_2 as Chase };
    }
    export namespace Door {
        const Player_2: number;
        export { Player_2 as Player };
        const Jail_4: number;
        export { Jail_4 as Jail };
        const Chase_3: number;
        export { Chase_3 as Chase };
    }
    export namespace Ghost_1 {
        const Player_3: number;
        export { Player_3 as Player };
        const Jail_5: number;
        export { Jail_5 as Jail };
        const Chase_4: number;
        export { Chase_4 as Chase };
    }
    export { Ghost_1 as Ghost };
    export namespace Observer {
        const Player_4: number;
        export { Player_4 as Player };
        const Jail_6: number;
        export { Jail_6 as Jail };
        const Chase_5: number;
        export { Chase_5 as Chase };
    }
    export namespace Rock {
        const Player_5: number;
        export { Player_5 as Player };
        const Jail_7: number;
        export { Jail_7 as Jail };
        const Chase_6: number;
        export { Chase_6 as Chase };
    }
    export namespace Rebel {
        const Jail_8: number;
        export { Jail_8 as Jail };
        const Chase_7: number;
        export { Chase_7 as Chase };
    }
    export namespace Adventurer {
        const Jail_9: number;
        export { Jail_9 as Jail };
        const Chase_8: number;
        export { Chase_8 as Chase };
    }
    export namespace Demon_2 {
        const Elf_4: number;
        export { Elf_4 as Elf };
        const Bast_3: number;
        export { Bast_3 as Bast };
        const Witch_3: number;
        export { Witch_3 as Witch };
        const Jail_10: number;
        export { Jail_10 as Jail };
        const Chase_9: number;
        export { Chase_9 as Chase };
        const Bountyhunter_4: number;
        export { Bountyhunter_4 as Bountyhunter };
        const Bandit_2: number;
        export { Bandit_2 as Bandit };
        const Alchemist_4: number;
        export { Alchemist_4 as Alchemist };
        const Nevermere_4: number;
        export { Nevermere_4 as Nevermere };
        const Apprentice_4: number;
        export { Apprentice_4 as Apprentice };
        const Dressmaker_4: number;
        export { Dressmaker_4 as Dressmaker };
        const Elemental_4: number;
        export { Elemental_4 as Elemental };
        const Dragon_3: number;
        export { Dragon_3 as Dragon };
        const Maidforce_3: number;
        export { Maidforce_3 as Maidforce };
        const Mushy_3: number;
        export { Mushy_3 as Mushy };
        const AncientRobot_5: number;
        export { AncientRobot_5 as AncientRobot };
    }
    export { Demon_2 as Demon };
    export namespace Enemy_2 {
        const KinkyConstruct_1: number;
        export { KinkyConstruct_1 as KinkyConstruct };
        const Dragon_4: number;
        export { Dragon_4 as Dragon };
        const Bountyhunter_5: number;
        export { Bountyhunter_5 as Bountyhunter };
        const Bandit_3: number;
        export { Bandit_3 as Bandit };
        const Alchemist_5: number;
        export { Alchemist_5 as Alchemist };
        const Nevermere_5: number;
        export { Nevermere_5 as Nevermere };
        const Apprentice_5: number;
        export { Apprentice_5 as Apprentice };
        const Dressmaker_5: number;
        export { Dressmaker_5 as Dressmaker };
        const Witch_4: number;
        export { Witch_4 as Witch };
        const Elemental_5: number;
        export { Elemental_5 as Elemental };
        const Maidforce_4: number;
        export { Maidforce_4 as Maidforce };
        const Bast_4: number;
        export { Bast_4 as Bast };
        const Elf_5: number;
        export { Elf_5 as Elf };
        const Mushy_4: number;
        export { Mushy_4 as Mushy };
        const AncientRobot_6: number;
        export { AncientRobot_6 as AncientRobot };
    }
    export { Enemy_2 as Enemy };
    export const dollsmith: {};
    export namespace Dollsmith_2 {
        const KinkyConstruct_2: number;
        export { KinkyConstruct_2 as KinkyConstruct };
        const Dragon_5: number;
        export { Dragon_5 as Dragon };
        const Bountyhunter_6: number;
        export { Bountyhunter_6 as Bountyhunter };
        const Bandit_4: number;
        export { Bandit_4 as Bandit };
        const Alchemist_6: number;
        export { Alchemist_6 as Alchemist };
        const Nevermere_6: number;
        export { Nevermere_6 as Nevermere };
        const Apprentice_6: number;
        export { Apprentice_6 as Apprentice };
        const Dressmaker_6: number;
        export { Dressmaker_6 as Dressmaker };
        const Witch_5: number;
        export { Witch_5 as Witch };
        const Elemental_6: number;
        export { Elemental_6 as Elemental };
        const Maidforce_5: number;
        export { Maidforce_5 as Maidforce };
        const Bast_5: number;
        export { Bast_5 as Bast };
        const Elf_6: number;
        export { Elf_6 as Elf };
        const Mushy_5: number;
        export { Mushy_5 as Mushy };
        const AncientRobot_7: number;
        export { AncientRobot_7 as AncientRobot };
        const Player_6: number;
        export { Player_6 as Player };
    }
    export { Dollsmith_2 as Dollsmith };
    export namespace Warden_1 {
        const KinkyConstruct_3: number;
        export { KinkyConstruct_3 as KinkyConstruct };
        const AncientRobot_8: number;
        export { AncientRobot_8 as AncientRobot };
        const Player_7: number;
        export { Player_7 as Player };
        const Jail_11: number;
        export { Jail_11 as Jail };
    }
    export { Warden_1 as Warden };
    export namespace Virus_1 {
        const Player_8: number;
        export { Player_8 as Player };
        const Chase_10: number;
        export { Chase_10 as Chase };
        const Jail_12: number;
        export { Jail_12 as Jail };
    }
    export { Virus_1 as Virus };
    export namespace DubiousWitch_1 {
        const Player_9: number;
        export { Player_9 as Player };
        const Witch_6: number;
        export { Witch_6 as Witch };
        const Chase_11: number;
        export { Chase_11 as Chase };
        const Jail_13: number;
        export { Jail_13 as Jail };
    }
    export { DubiousWitch_1 as DubiousWitch };
    export namespace Extraplanar_1 {
        const Player_10: number;
        export { Player_10 as Player };
        const Demon_3: number;
        export { Demon_3 as Demon };
        const Chase_12: number;
        export { Chase_12 as Chase };
        const Jail_14: number;
        export { Jail_14 as Jail };
    }
    export { Extraplanar_1 as Extraplanar };
    export namespace Owners_1 {
        const Player_11: number;
        export { Player_11 as Player };
        const Demon_4: number;
        export { Demon_4 as Demon };
        const Elemental_7: number;
        export { Elemental_7 as Elemental };
        const Chase_13: number;
        export { Chase_13 as Chase };
        const Jail_15: number;
        export { Jail_15 as Jail };
    }
    export { Owners_1 as Owners };
    export namespace Delinquent_1 {
        const Player_12: number;
        export { Player_12 as Player };
        const Maidforce_6: number;
        export { Maidforce_6 as Maidforce };
        const Chase_14: number;
        export { Chase_14 as Chase };
        const Jail_16: number;
        export { Jail_16 as Jail };
    }
    export { Delinquent_1 as Delinquent };
    export namespace ShadowClan_1 {
        const Player_13: number;
        export { Player_13 as Player };
        const Demon_5: number;
        export { Demon_5 as Demon };
        const Angel_3: number;
        export { Angel_3 as Angel };
        const Chase_15: number;
        export { Chase_15 as Chase };
        const Jail_17: number;
        export { Jail_17 as Jail };
    }
    export { ShadowClan_1 as ShadowClan };
    export namespace Fuuka {
        const Player_14: number;
        export { Player_14 as Player };
        const Chase_16: number;
        export { Chase_16 as Chase };
        const Jail_18: number;
        export { Jail_18 as Jail };
    }
    export namespace RopeDojo_1 {
        const Player_15: number;
        export { Player_15 as Player };
        const Chase_17: number;
        export { Chase_17 as Chase };
        const Jail_19: number;
        export { Jail_19 as Jail };
    }
    export { RopeDojo_1 as RopeDojo };
    export namespace DollShoppe_1 {
        const Player_16: number;
        export { Player_16 as Player };
        const Chase_18: number;
        export { Chase_18 as Chase };
        const Dressmaker_7: number;
        export { Dressmaker_7 as Dressmaker };
        const Jail_20: number;
        export { Jail_20 as Jail };
    }
    export { DollShoppe_1 as DollShoppe };
    export namespace Debate_1 {
        const Player_17: number;
        export { Player_17 as Player };
        const Chase_19: number;
        export { Chase_19 as Chase };
        const Jail_21: number;
        export { Jail_21 as Jail };
    }
    export { Debate_1 as Debate };
    export namespace Wolfhunter_1 {
        const Player_18: number;
        export { Player_18 as Player };
        const Nevermere_7: number;
        export { Nevermere_7 as Nevermere };
        const Chase_20: number;
        export { Chase_20 as Chase };
        const Jail_22: number;
        export { Jail_22 as Jail };
    }
    export { Wolfhunter_1 as Wolfhunter };
    export namespace Trap {
        const Enemy_3: number;
        export { Enemy_3 as Enemy };
        const Jail_23: number;
        export { Jail_23 as Jail };
        const Prisoner_1: number;
        export { Prisoner_1 as Prisoner };
        export const Ambush: number;
        export const Boss: number;
        const KinkyConstruct_4: number;
        export { KinkyConstruct_4 as KinkyConstruct };
        const Plant_1: number;
        export { Plant_1 as Plant };
        const Slime_2: number;
        export { Slime_2 as Slime };
        const Mold_1: number;
        export { Mold_1 as Mold };
        const Beast_1: number;
        export { Beast_1 as Beast };
        const DragonQueen_1: number;
        export { DragonQueen_1 as DragonQueen };
        const Bountyhunter_7: number;
        export { Bountyhunter_7 as Bountyhunter };
        const Bandit_5: number;
        export { Bandit_5 as Bandit };
        const Alchemist_7: number;
        export { Alchemist_7 as Alchemist };
        const Nevermere_8: number;
        export { Nevermere_8 as Nevermere };
        const Apprentice_7: number;
        export { Apprentice_7 as Apprentice };
        const Dressmaker_8: number;
        export { Dressmaker_8 as Dressmaker };
        const Witch_7: number;
        export { Witch_7 as Witch };
        const Elemental_8: number;
        export { Elemental_8 as Elemental };
        const Dragon_6: number;
        export { Dragon_6 as Dragon };
        const Maidforce_7: number;
        export { Maidforce_7 as Maidforce };
        const Bast_6: number;
        export { Bast_6 as Bast };
        const Elf_7: number;
        export { Elf_7 as Elf };
        const Mushy_6: number;
        export { Mushy_6 as Mushy };
        const AncientRobot_9: number;
        export { AncientRobot_9 as AncientRobot };
        const Delinquent_2: number;
        export { Delinquent_2 as Delinquent };
        const Virus_2: number;
        export { Virus_2 as Virus };
        const ShadowClan_2: number;
        export { ShadowClan_2 as ShadowClan };
        const DollShoppe_2: number;
        export { DollShoppe_2 as DollShoppe };
        const RopeDojo_2: number;
        export { RopeDojo_2 as RopeDojo };
        const Fuuka_1: number;
        export { Fuuka_1 as Fuuka };
        const DubiousWitch_2: number;
        export { DubiousWitch_2 as DubiousWitch };
        const Extraplanar_2: number;
        export { Extraplanar_2 as Extraplanar };
        const Owners_2: number;
        export { Owners_2 as Owners };
        const Debate_2: number;
        export { Debate_2 as Debate };
        const Dollsmith_3: number;
        export { Dollsmith_3 as Dollsmith };
        const Wolfhunter_2: number;
        export { Wolfhunter_2 as Wolfhunter };
        const Observer_1: number;
        export { Observer_1 as Observer };
        const Angel_4: number;
        export { Angel_4 as Angel };
        const Demon_6: number;
        export { Demon_6 as Demon };
        const Chase_21: number;
        export { Chase_21 as Chase };
    }
    export namespace Boss_1 {
        const Chase_22: number;
        export { Chase_22 as Chase };
        const Enemy_4: number;
        export { Enemy_4 as Enemy };
    }
    export { Boss_1 as Boss };
    const Chase_23: {};
    export { Chase_23 as Chase };
    export namespace Ambush_1 {
        const Player_19: number;
        export { Player_19 as Player };
        const Jail_24: number;
        export { Jail_24 as Jail };
        const Chase_24: number;
        export { Chase_24 as Chase };
    }
    export { Ambush_1 as Ambush };
    export namespace Curse {
        const Player_20: number;
        export { Player_20 as Player };
        const Jail_25: number;
        export { Jail_25 as Jail };
        const Chase_25: number;
        export { Chase_25 as Chase };
    }
    const Prisoner_2: {};
    export { Prisoner_2 as Prisoner };
    const Jail_26: {};
    export { Jail_26 as Jail };
    export namespace Slime_3 {
        const Jail_27: number;
        export { Jail_27 as Jail };
        const Chase_26: number;
        export { Chase_26 as Chase };
        const Bountyhunter_8: number;
        export { Bountyhunter_8 as Bountyhunter };
        const Bandit_6: number;
        export { Bandit_6 as Bandit };
        const Alchemist_8: number;
        export { Alchemist_8 as Alchemist };
        const Nevermere_9: number;
        export { Nevermere_9 as Nevermere };
        const Apprentice_8: number;
        export { Apprentice_8 as Apprentice };
        const Dressmaker_9: number;
        export { Dressmaker_9 as Dressmaker };
        const Elemental_9: number;
        export { Elemental_9 as Elemental };
        const Dragon_7: number;
        export { Dragon_7 as Dragon };
        const Maidforce_8: number;
        export { Maidforce_8 as Maidforce };
        const Bast_7: number;
        export { Bast_7 as Bast };
        const Elf_8: number;
        export { Elf_8 as Elf };
        const Mushy_7: number;
        export { Mushy_7 as Mushy };
    }
    export { Slime_3 as Slime };
    export namespace Latex_2 {
        const Jail_28: number;
        export { Jail_28 as Jail };
        const Chase_27: number;
        export { Chase_27 as Chase };
        const Maidforce_9: number;
        export { Maidforce_9 as Maidforce };
    }
    export { Latex_2 as Latex };
    export namespace Mold_2 {
        const Jail_29: number;
        export { Jail_29 as Jail };
        const Chase_28: number;
        export { Chase_28 as Chase };
        const Enemy_5: number;
        export { Enemy_5 as Enemy };
        const Bountyhunter_9: number;
        export { Bountyhunter_9 as Bountyhunter };
        const Bandit_7: number;
        export { Bandit_7 as Bandit };
        const Alchemist_9: number;
        export { Alchemist_9 as Alchemist };
        const Nevermere_10: number;
        export { Nevermere_10 as Nevermere };
        const Apprentice_9: number;
        export { Apprentice_9 as Apprentice };
        const Dressmaker_10: number;
        export { Dressmaker_10 as Dressmaker };
        const Witch_8: number;
        export { Witch_8 as Witch };
        const Elemental_10: number;
        export { Elemental_10 as Elemental };
        const Dragon_8: number;
        export { Dragon_8 as Dragon };
        const Maidforce_10: number;
        export { Maidforce_10 as Maidforce };
        const Bast_8: number;
        export { Bast_8 as Bast };
        const Elf_9: number;
        export { Elf_9 as Elf };
        const Mushy_8: number;
        export { Mushy_8 as Mushy };
        const AncientRobot_10: number;
        export { AncientRobot_10 as AncientRobot };
    }
    export { Mold_2 as Mold };
    export namespace Beast_2 {
        const Jail_30: number;
        export { Jail_30 as Jail };
        const Chase_29: number;
        export { Chase_29 as Chase };
        const Bountyhunter_10: number;
        export { Bountyhunter_10 as Bountyhunter };
        const Bandit_8: number;
        export { Bandit_8 as Bandit };
        const Alchemist_10: number;
        export { Alchemist_10 as Alchemist };
        const Nevermere_11: number;
        export { Nevermere_11 as Nevermere };
        const Apprentice_10: number;
        export { Apprentice_10 as Apprentice };
        const Dressmaker_11: number;
        export { Dressmaker_11 as Dressmaker };
        const Witch_9: number;
        export { Witch_9 as Witch };
        const Elemental_11: number;
        export { Elemental_11 as Elemental };
        const Dragon_9: number;
        export { Dragon_9 as Dragon };
        const Maidforce_11: number;
        export { Maidforce_11 as Maidforce };
        const Mushy_9: number;
        export { Mushy_9 as Mushy };
        const AncientRobot_11: number;
        export { AncientRobot_11 as AncientRobot };
    }
    export { Beast_2 as Beast };
    export namespace DragonQueen_2 {
        const Jail_31: number;
        export { Jail_31 as Jail };
        const Chase_30: number;
        export { Chase_30 as Chase };
        const Bountyhunter_11: number;
        export { Bountyhunter_11 as Bountyhunter };
        const Bandit_9: number;
        export { Bandit_9 as Bandit };
        const Alchemist_11: number;
        export { Alchemist_11 as Alchemist };
        const Nevermere_12: number;
        export { Nevermere_12 as Nevermere };
        const Apprentice_11: number;
        export { Apprentice_11 as Apprentice };
        const Dressmaker_12: number;
        export { Dressmaker_12 as Dressmaker };
        const Witch_10: number;
        export { Witch_10 as Witch };
        const Elemental_12: number;
        export { Elemental_12 as Elemental };
        const Dragon_10: number;
        export { Dragon_10 as Dragon };
        const Maidforce_12: number;
        export { Maidforce_12 as Maidforce };
        const Mushy_10: number;
        export { Mushy_10 as Mushy };
        const AncientRobot_12: number;
        export { AncientRobot_12 as AncientRobot };
    }
    export { DragonQueen_2 as DragonQueen };
    export namespace KinkyConstruct_5 {
        const Jail_32: number;
        export { Jail_32 as Jail };
        const Chase_31: number;
        export { Chase_31 as Chase };
        const Apprentice_12: number;
        export { Apprentice_12 as Apprentice };
        const Dragon_11: number;
        export { Dragon_11 as Dragon };
    }
    export { KinkyConstruct_5 as KinkyConstruct };
    export namespace Plant_2 {
        const Jail_33: number;
        export { Jail_33 as Jail };
        const Chase_32: number;
        export { Chase_32 as Chase };
    }
    export { Plant_2 as Plant };
    export namespace Nevermere_13 {
        const Alchemist_12: number;
        export { Alchemist_12 as Alchemist };
        const Bast_9: number;
        export { Bast_9 as Bast };
        const Mushy_11: number;
        export { Mushy_11 as Mushy };
        const Bandit_10: number;
        export { Bandit_10 as Bandit };
        const Apprentice_13: number;
        export { Apprentice_13 as Apprentice };
        const AncientRobot_13: number;
        export { AncientRobot_13 as AncientRobot };
    }
    export { Nevermere_13 as Nevermere };
    export namespace Alchemist_13 {
        const Bandit_11: number;
        export { Bandit_11 as Bandit };
        const AncientRobot_14: number;
        export { AncientRobot_14 as AncientRobot };
        const Dressmaker_13: number;
        export { Dressmaker_13 as Dressmaker };
    }
    export { Alchemist_13 as Alchemist };
    export namespace Bountyhunter_12 {
        const Jail_34: number;
        export { Jail_34 as Jail };
        const Dragon_12: number;
        export { Dragon_12 as Dragon };
        const Bandit_12: number;
        export { Bandit_12 as Bandit };
        const Maidforce_13: number;
        export { Maidforce_13 as Maidforce };
        const Witch_11: number;
        export { Witch_11 as Witch };
        const Dressmaker_14: number;
        export { Dressmaker_14 as Dressmaker };
        const Nevermere_14: number;
        export { Nevermere_14 as Nevermere };
    }
    export { Bountyhunter_12 as Bountyhunter };
    export namespace Elf_10 {
        const Mushy_12: number;
        export { Mushy_12 as Mushy };
        const Beast_3: number;
        export { Beast_3 as Beast };
        const Plant_3: number;
        export { Plant_3 as Plant };
    }
    export { Elf_10 as Elf };
    export namespace Bast_10 {
        const Elf_11: number;
        export { Elf_11 as Elf };
        const Witch_12: number;
        export { Witch_12 as Witch };
        const Beast_4: number;
        export { Beast_4 as Beast };
    }
    export { Bast_10 as Bast };
    export namespace Bandit_13 {
        const Mushy_13: number;
        export { Mushy_13 as Mushy };
        const Apprentice_14: number;
        export { Apprentice_14 as Apprentice };
        const Witch_13: number;
        export { Witch_13 as Witch };
    }
    export { Bandit_13 as Bandit };
    export namespace Elemental_13 {
        const KinkyConstruct_6: number;
        export { KinkyConstruct_6 as KinkyConstruct };
        const Bandit_14: number;
        export { Bandit_14 as Bandit };
        const Elf_12: number;
        export { Elf_12 as Elf };
        const Bast_11: number;
        export { Bast_11 as Bast };
        const Dragon_13: number;
        export { Dragon_13 as Dragon };
        const AncientRobot_15: number;
        export { AncientRobot_15 as AncientRobot };
    }
    export { Elemental_13 as Elemental };
    export namespace AncientRobot_16 {
        const Bast_12: number;
        export { Bast_12 as Bast };
        const Elf_13: number;
        export { Elf_13 as Elf };
    }
    export { AncientRobot_16 as AncientRobot };
    export namespace Dragon_14 {
        const Jail_35: number;
        export { Jail_35 as Jail };
        const Apprentice_15: number;
        export { Apprentice_15 as Apprentice };
        const Bandit_15: number;
        export { Bandit_15 as Bandit };
        const Witch_14: number;
        export { Witch_14 as Witch };
        const Alchemist_14: number;
        export { Alchemist_14 as Alchemist };
        const Beast_5: number;
        export { Beast_5 as Beast };
        const Mushy_14: number;
        export { Mushy_14 as Mushy };
    }
    export { Dragon_14 as Dragon };
    export namespace Mushy_15 {
        const Alchemist_15: number;
        export { Alchemist_15 as Alchemist };
        const Elemental_14: number;
        export { Elemental_14 as Elemental };
    }
    export { Mushy_15 as Mushy };
    export namespace Witch_15 {
        const Elf_14: number;
        export { Elf_14 as Elf };
    }
    export { Witch_15 as Witch };
    export namespace Dressmaker_15 {
        const Witch_16: number;
        export { Witch_16 as Witch };
        const Nevermere_15: number;
        export { Nevermere_15 as Nevermere };
        const Bandit_16: number;
        export { Bandit_16 as Bandit };
        const Dragon_15: number;
        export { Dragon_15 as Dragon };
    }
    export { Dressmaker_15 as Dressmaker };
    export namespace Apprentice_16 {
        const Jail_36: number;
        export { Jail_36 as Jail };
        const Elf_15: number;
        export { Elf_15 as Elf };
    }
    export { Apprentice_16 as Apprentice };
    export namespace Necromancer {
        const Jail_37: number;
        export { Jail_37 as Jail };
        const Witch_17: number;
        export { Witch_17 as Witch };
        const Apprentice_17: number;
        export { Apprentice_17 as Apprentice };
        const Dragon_16: number;
        export { Dragon_16 as Dragon };
        const Maidforce_14: number;
        export { Maidforce_14 as Maidforce };
        const Alchemist_16: number;
        export { Alchemist_16 as Alchemist };
        const Nevermere_16: number;
        export { Nevermere_16 as Nevermere };
    }
    export namespace Maidforce_15 {
        const Alchemist_17: number;
        export { Alchemist_17 as Alchemist };
        const Jail_38: number;
        export { Jail_38 as Jail };
        const Dragon_17: number;
        export { Dragon_17 as Dragon };
        const Apprentice_18: number;
        export { Apprentice_18 as Apprentice };
        const Bandit_17: number;
        export { Bandit_17 as Bandit };
        const Witch_18: number;
        export { Witch_18 as Witch };
    }
    export { Maidforce_15 as Maidforce };
}
declare namespace KinkyDungeonFactionRelations { }
/**
 * @type {Map<string, Map<string, number>>};
 */
declare let KDFactionRelations: Map<string, Map<string, number>>;
/** Runs upon loading in case old save */
declare function KDFixNeeds(): void;
declare function KDTickNeeds(delta: any): void;
/**
 *
 * @param {any} data
 * @param {number} mult
 */
declare function KDNeedsPlaySelf(data: any, mult?: number): void;
/**
 *
 * @param {any} data
 * @param {number} mult
 */
declare function KDNeedsOrgasm(data: any, mult?: number): void;
/**
 *
 * @param {any} data
 * @param {number} mult
 */
declare function KDNeedsEdge(data: any, mult?: number): void;
/**
 *
 * @param {any} data
 * @param {number} mult
 */
declare function KDNeedsDeny(data: any, mult?: number): void;
declare namespace KDNeedsParams {
    const FrustrationPerTurn: number;
    const FrustrationPerDesire: number;
    const FrustrationPerOrgasm: number;
    const FrustrationPerVibeLevel: number;
    const PassionPerTurn: number;
    const PassionPerDesire: number;
    const PassionPerOrgasm: number;
    const PassionPerVibeLevel: number;
    const PassionPerPlay: number;
}
declare let Ally: string;
declare let Sub: string;
declare let Enemy: string;
declare let Jailer: string;
declare namespace KDMistress {
    namespace Adventurer {
        export const name: string;
        export { Ally as alignment };
    }
}
/**
 *
 * @param {boolean} [override] - Override jailing requirement
 * @returns {boolean}
 */
declare function KDCanSpawnShopkeeper(override?: boolean): boolean;
/**
 * @type {Record<string, {weight: (guard: any, xx: any, yy: any) => number, trigger: (guard: any, xx: any, yy: any) => void}>}
 */
declare let KDJailEvents: Record<string, {
    weight: (guard: any, xx: any, yy: any) => number;
    trigger: (guard: any, xx: any, yy: any) => void;
}>;
declare namespace KDGuardActions {
    namespace jailWander {
        function weight(guard: any, xx: any, yy: any): number;
        function assignable(guard: any, xx: any, yy: any): boolean;
        function assign(guard: any, xx: any, yy: any): void;
        function handle(guard: any, xx: any, yy: any): void;
    }
    namespace release {
        export function weight_1(guard: any, xx: any, yy: any): 0 | 1000;
        export { weight_1 as weight };
        export function assign_1(guard: any, xx: any, yy: any): void;
        export { assign_1 as assign };
        export function handle_1(guard: any, xx: any, yy: any): void;
        export { handle_1 as handle };
    }
    namespace jailTease {
        export function weight_2(guard: any, xx: any, yy: any): number;
        export { weight_2 as weight };
        export function assign_2(guard: any, xx: any, yy: any): void;
        export { assign_2 as assign };
        export function handle_2(guard: any, xx: any, yy: any, delta: any): void;
        export { handle_2 as handle };
    }
    namespace bindings {
        export function weight_3(guard: any, xx: any, yy: any): number;
        export { weight_3 as weight };
        export function assign_3(guard: any, xx: any, yy: any): void;
        export { assign_3 as assign };
        export function handle_3(guard: any, xx: any, yy: any, delta: any): void;
        export { handle_3 as handle };
    }
    namespace jailRemoveRestraints {
        export function weight_4(guard: any, xx: any, yy: any): number;
        export { weight_4 as weight };
        export function assign_4(guard: any, xx: any, yy: any): void;
        export { assign_4 as assign };
        export function handle_4(guard: any, xx: any, yy: any, delta: any): void;
        export { handle_4 as handle };
    }
    namespace jailAddRestraints {
        export function weight_5(guard: any, xx: any, yy: any): number;
        export { weight_5 as weight };
        export function assign_5(guard: any, xx: any, yy: any): void;
        export { assign_5 as assign };
        export function handle_5(guard: any, xx: any, yy: any, delta: any): void;
        export { handle_5 as handle };
    }
    namespace jailLockRestraints {
        export function weight_6(guard: any, xx: any, yy: any): number;
        export { weight_6 as weight };
        export function assign_6(guard: any, xx: any, yy: any): void;
        export { assign_6 as assign };
        export function handle_6(guard: any, xx: any, yy: any, delta: any): void;
        export { handle_6 as handle };
    }
    namespace jailLeashTour {
        export function weight_7(guard: any, xx: any, yy: any): number;
        export { weight_7 as weight };
        export function assign_7(guard: any, xx: any, yy: any): void;
        export { assign_7 as assign };
        export function handle_7(guard: any, xx: any, yy: any, delta: any): void;
        export { handle_7 as handle };
    }
    namespace jailLeashTransfer {
        export function weight_8(guard: any, xx: any, yy: any): 0 | 5;
        export { weight_8 as weight };
        export function assign_8(guard: any, xx: any, yy: any): void;
        export { assign_8 as assign };
        export function handle_8(guard: any, xx: any, yy: any, delta: any): void;
        export { handle_8 as handle };
    }
}
declare let KinkyDungeonJailRemoveRestraintsTimerMin: number;
declare let KinkyDungeonJailedOnce: boolean;
declare let KDJailReleaseTurns: {
    minSub: number;
    releaseTurns: number;
}[];
declare let KDSecurityLevelHiSec: number;
/**
 * @type {Record<string, {overridelowerpriority: boolean, priority: number, jail: boolean, parole: boolean, restraints: KDJailRestraint[]}>}
*/
declare let KDJailOutfits: Record<string, {
    overridelowerpriority: boolean;
    priority: number;
    jail: boolean;
    parole: boolean;
    restraints: KDJailRestraint[];
}>;
/**
 * @type {Record<string, (r: KDJailRestraint) => boolean>}
 */
declare let KDJailConditions: Record<string, (r: KDJailRestraint) => boolean>;
declare function KDRunTests(): void;
declare function KDTestMapGen(count: any, Ranges: any, Checkpoints: any): boolean;
declare function KDTestFullRunthrough(GameLoops: any, Init: any, NGP: any): boolean;
declare function KDTestjailer(iter: any): void;
declare function KDExportTranslationFile(cull: any): Promise<void>;
/**
 * Tests the variant item system
 * @param {string} name
 */
declare function KDAddTestVariant(name: string): void;
declare function KDListMissingModels(): void;
declare function KDCheckForMissingModelLayers(): void;
declare function KDCheckForBadModels(): void;
declare let KDBasicArmorWeight: number;
declare let KDBasicArmorWeight_Cursed: number;
declare let KDEnchantedRestraintsWeight: number;
declare let KDAdvancedArmorWeight: number;
declare let KDAdvancedArmorWeight_Cursed: number;
declare let KD_hexchance_Default: number;
declare let KD_hexscale_Default: number;
declare let KD_enchantchance_Default: number;
declare let KD_enchantscale_Default: number;
declare let KD_hexchance_EnchantedRestraints: number;
declare let KD_hexscale_EnchantedRestraints: number;
declare let KDBasicArmor: {
    name: string;
    minLevel: number;
    weight: number;
    armor: string;
    hexlist: string;
    enchantlist: string;
    hexchance: number;
    enchantchance: number;
    alwaysenchanthex: boolean;
    hexscale: number;
    enchantscale: number;
    unlockcurse: string[];
    hexlevelmin: number;
    hexlevelmax: number;
    enchantlevelmin: number;
    enchantlevelmax: number;
    nouncursed: string[];
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
}[];
declare let KDAdvancedArmor: {
    name: string;
    minLevel: number;
    weight: number;
    armor: string;
    hexlist: string;
    enchantlist: string;
    hexchance: number;
    enchantchance: number;
    alwaysenchanthex: boolean;
    hexscale: number;
    enchantscale: number;
    unlockcurse: string[];
    hexlevelmin: number;
    hexlevelmax: number;
    enchantlevelmin: number;
    enchantlevelmax: number;
    nouncursed: string[];
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
}[];
declare let KDGoldArmor: any[];
declare let KDGoldArmor2: any[];
declare let KDGoldArmorGoddess: any[];
declare let KDGoldArmor2Goddess: any[];
declare let KDSilverArmor: any[];
declare let KDEnchantedRestraints: ({
    name: string;
    minLevel: number;
    weight: number;
    armortags: string[];
    armor: string;
    cursesuffix: string;
    maxEnchants: number;
    faction: string;
    hexlist: string;
    enchantlist: string;
    hexchance: number;
    enchantchance: number;
    alwaysenchanthex: boolean;
    hexscale: number;
    unlockcurse: string[];
    hexlevelmin: number;
    hexlevelmax: number;
    enchantlevelmin: number;
    enchantlevelmax: number;
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
    amtMult?: undefined;
} | {
    name: string;
    minLevel: number;
    weight: number;
    armortags: string[];
    armor: string;
    cursesuffix: string;
    amtMult: number;
    maxEnchants: number;
    faction: string;
    hexlist: string;
    enchantlist: string;
    hexchance: number;
    enchantchance: number;
    alwaysenchanthex: boolean;
    hexscale: number;
    unlockcurse: string[];
    hexlevelmin: number;
    hexlevelmax: number;
    enchantlevelmin: number;
    enchantlevelmax: number;
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
} | {
    name: string;
    minLevel: number;
    weight: number;
    armortags: string[];
    armor: string;
    cursesuffix: string;
    amtMult: number;
    faction: string;
    hexlist: string;
    enchantlist: string;
    hexchance: number;
    enchantchance: number;
    alwaysenchanthex: boolean;
    unlockcurse: string[];
    hexlevelmin: number;
    hexlevelmax: number;
    enchantlevelmin: number;
    enchantlevelmax: number;
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
    maxEnchants?: undefined;
    hexscale?: undefined;
})[];
declare let KDShadowRestraints: any[];
declare namespace KinkyDungeonLootTable {
    const rubble: ({
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites?: undefined;
        key?: undefined;
        count?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        key?: undefined;
        count?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites?: undefined;
        count?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        count: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites?: undefined;
        key?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        minLevel: number;
        weapon: string;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        prerequisites?: undefined;
        key?: undefined;
        count?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        prerequisites?: undefined;
        key?: undefined;
        count?: undefined;
        weapon?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites?: undefined;
        key?: undefined;
        count?: undefined;
    })[];
    const shelf: ({
        name: string;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        key?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        minLevel: number;
        weapon: string;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        key?: undefined;
    })[];
    const pearl: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
    }[];
    const shadow: any[];
    const kitty: ({
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        amtMult: number;
        maxEnchants: number;
        cursesuffix: string;
        prerequisites: string[];
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        armor?: undefined;
        amtMult?: undefined;
        maxEnchants?: undefined;
        cursesuffix?: undefined;
        prerequisites?: undefined;
        hexlist?: undefined;
        enchantlist?: undefined;
        hexchance?: undefined;
        enchantchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        goddess: string;
        goddessWeight: number;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        armor?: undefined;
        amtMult?: undefined;
        maxEnchants?: undefined;
        cursesuffix?: undefined;
        prerequisites?: undefined;
        hexlist?: undefined;
        enchantlist?: undefined;
        hexchance?: undefined;
        enchantchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        armor?: undefined;
        amtMult?: undefined;
        maxEnchants?: undefined;
        cursesuffix?: undefined;
        prerequisites?: undefined;
        hexlist?: undefined;
        enchantlist?: undefined;
        hexchance?: undefined;
        enchantchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    } | {
        name: string;
        max: number;
        minLevel: number;
        weight: number;
        count: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        submissive: number;
        armor?: undefined;
        amtMult?: undefined;
        maxEnchants?: undefined;
        cursesuffix?: undefined;
        prerequisites?: undefined;
        hexlist?: undefined;
        enchantlist?: undefined;
        hexchance?: undefined;
        enchantchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    })[];
    const robot: ({
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        max: number;
        minLevel: number;
        weight: number;
        count: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        submissive: number;
        weapon?: undefined;
        noweapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        goddess: string;
        goddessWeight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    })[];
    const lessershadow: any[];
    const storage: ({
        name: string;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        key?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        key?: undefined;
    })[];
    const blue: {
        name: string;
        magic: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max: number;
    }[];
    const tutorial1: {
        name: string;
        minLevel: number;
        weight: number;
        lock: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
    }[];
    const tutorial2: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
    }[];
    const magicWeapon: {
        name: string;
        weaponlist: string;
        enchantlist: string;
        enchantchance: number;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    }[];
    const chest: ({
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        enchantscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        nouncursed: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        spell: string;
        nospell: string[];
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        noweapon?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        noweapon?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        redspecial: number;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        noweapon?: undefined;
        weapon?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        redspecial?: undefined;
        key?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        weaponlist: string;
        enchantlist: string;
        enchantchance: number;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        noweapon?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        notag: string[];
        arousalMode: boolean;
        trap: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
        spell?: undefined;
        nospell?: undefined;
        noweapon?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        spell?: undefined;
        nospell?: undefined;
        noweapon?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    })[];
    const lost_items: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
    }[];
    const lost_clothes: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    }[];
    const cache: ({
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        maxEnchants: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        amtMult?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        amtMult: number;
        maxEnchants: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        amtMult: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        maxEnchants?: undefined;
        hexscale?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        enchantscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        nouncursed: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon?: undefined;
        weapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        weapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        goddess: string;
        goddessWeight: number;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    })[];
    const magicrestraint: ({
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        maxEnchants: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        amtMult?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        amtMult: number;
        maxEnchants: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        amtMult: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        maxEnchants?: undefined;
        hexscale?: undefined;
    })[];
    const wizard: ({
        name: string;
        magic: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        armor?: undefined;
        hexlist?: undefined;
        enchantlist?: undefined;
        hexchance?: undefined;
        enchantchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        enchantscale?: undefined;
        maxEnchants?: undefined;
        minEnchants?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        nouncursed?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        enchantscale: number;
        maxEnchants: number;
        minEnchants: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        nouncursed: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        magic?: undefined;
        prerequisites?: undefined;
    })[];
    const gold: ({
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        maxEnchants: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        amtMult?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        amtMult: number;
        maxEnchants: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        amtMult: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        maxEnchants?: undefined;
        hexscale?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        arousalMode?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        max: number;
        minLevel: number;
        weight: number;
        count: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        submissive: number;
        arousalMode?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint: string[];
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint: string[];
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        arousalMode?: undefined;
    })[];
    const lessergold: any[];
    const silver: any[];
    const RopeQuest: any[];
    const LatexQuest: any[];
    const LeatherQuest: any[];
    const MetalQuest: any[];
    const WillQuest: any[];
    const ElementsQuest: any[];
    const ConjureQuest: any[];
    const IllusionQuest: any[];
}
declare namespace KDLootEvents {
    function Armor(Loot: any, Floor: any, Replacemsg: any, Lock: any): {
        value: number;
        Replacemsg: any;
    };
    function archerykit(Loot: any, Floor: any, Replacemsg: any, Lock: any): {
        value: number;
        Replacemsg: any;
    };
}
declare function KDSendMusicToast(song: any): void;
declare function KDDrawMusic(delta: any): void;
declare function KDGetCurrentCheckpoint(): any;
declare function KDGetMusicCheckpoint(): any;
declare function KDUpdateMusic(): void;
declare function KDPlayMusic(Sound: any, Volume: any): void;
declare function KDEndMusic(): void;
/** These tracks will loop with a certain chance of forcibly continuing the loop. 0 = no loop*/
declare let KDMusicLoopTracksChance: {
    "AREA1-GRAVEYARD.ogg": number;
    "AREA2-ANCIENTTOMBS.ogg": number;
    "GENERIC-DOLLRACK.ogg": number;
    "AREA4-MAGICLIBRARY.ogg": number;
    "AREA5-UNDERGROUNDJUNGLE.ogg": number;
    "AREA6-CRYSTALCAVE.ogg": number;
    "AREA7-LOSTTEMPLE.ogg": number;
    "AREA8-ORRERY.ogg": number;
    "AREA9-BELLOWS.ogg": number;
    "Shopping.ogg": number;
    "slimy_science_1.ogg": number;
};
declare let KDMusicUpdateTime: number;
declare let KDMusicUpdateDuration: number;
declare let KDMusicY: number;
declare let KDMusicYMax: number;
declare let KDMusicYSpeed: number;
declare let KDMusicToast: string;
declare let KDCurrentSong: string;
declare let KDNewSong: string;
declare let KDLastSong: string;
declare let KDCurrentLoops: number;
declare let KDCurrentFade: number;
declare let KDMusicFadeTime: number;
declare let KDMusicFadeInTime: number;
declare let KDMusicTickRate: number;
/** @type {HTMLAudioElement} */
declare let KDCurrentMusicSound: HTMLAudioElement;
declare let KDCurrentMusicSoundUpdate: any;
declare let lastKDMusicTick: number;
declare function KinkyDungeonDrawCollection(xOffset?: number): void;
/**
 *
 * @param {entity} enemy
 * @param {string} [status]
 * @param {string} [status]
 * @param {string} [servantclass]
 * @param {string} [type]
 */
declare function KDAddCollection(enemy: entity, type?: string, status?: string, servantclass?: string): void;
/**
 *
 * @param {KDCollectionEntry} value
 * @param {number} x
 * @param {number} y
 * @param {number} index
 */
declare function KDDrawSelectedCollectionMember(value: KDCollectionEntry, x: number, y: number, index: number): void;
declare function KDDrawCollectionInventory(x: any, y: any): void;
declare function KDSortCollection(): void;
/**
 *
 * @param {entity} enemy
 * @returns {string}
 */
declare function KDGetEnemyName(enemy: entity): string;
declare let KDNPCChar: Map<any, any>;
declare let KDNPCStyle: Map<any, any>;
declare let KDCollectionSelected: number;
declare let KDCollectionIndex: number;
declare let KDCollectionGuestRows: number;
declare let KDCollectionRows: number;
declare let KDCollectionColumns: number;
declare let KDCollectionSpacing: number;
declare namespace KDNameList {
    const _default: string[];
    export { _default as default };
    export const nevermere: string[];
    export const bountyhunter: string[];
    export const japanese: string[];
    export const elf: string[];
    export const dragonheart: string[];
    export const maid: string[];
    export const russian: string[];
    export const elemental: string[];
    export const witch: string[];
    export const aztec: string[];
    export const space: string[];
    export const italian: string[];
    export const Fuuka: string[];
    export const TheWarden: string[];
    export const TheWardenFighter: string[];
    export const TheWardenWizard: string[];
    export const TheWardenRogue: string[];
    export const TheWardenDoll: string[];
    export const Dollmaker: string[];
    export const chinese: string[];
    export const vampire: string[];
    export const french: string[];
    export const science: string[];
    export const cthulu: string[];
    export const demon: string[];
    export const cyborg: string[];
    export const bast: string[];
    export const DragonGirl: string[];
}
/** Prunes delayed actions with tags
 * @param {string[]} tags
*/
declare function KDDelayedActionPrune(tags: string[]): void;
/**
 * Adds a delayed action
 * @param {KDDelayedAction} action
 */
declare function KDAddDelayedAction(action: KDDelayedAction): void;
/** This is processed for delayed actions
 * @type {Record<string, (action: KDDelayedAction) => void>}
 */
declare let KDDelayedActionUpdate: Record<string, (action: KDDelayedAction) => void>;
/** This is processed for delayed actions
 * @type {Record<string, (action: KDDelayedAction) => void>}
 */
declare let KDDelayedActionCommit: Record<string, (action: KDDelayedAction) => void>;
/**
 * The Commander determines role assignments and orders enemies
 * @param {number} delta
 */
declare function KDCommanderUpdate(delta: number): void;
/**
 * Updates the current chokes on the map
 * @param {KDCommanderOrderData} data
 */
declare function KDCommanderUpdateChokes(data: KDCommanderOrderData): void;
/**
 * Updates the current roles of enemies
 * @param {KDCommanderOrderData} data
 */
declare function KDCommanderUpdateRoles(data: KDCommanderOrderData): void;
/**
 * Updates the current roles of enemies
 * @param {KDCommanderOrderData} data
 */
declare function KDCommanderUpdateOrders(data: KDCommanderOrderData): void;
/**
 * Updates the current roles of enemies
 * @param {entity} enemy
 * @param {KDCommanderOrderData} data
 */
declare function KDGetOrdersList(enemy: entity, data: KDCommanderOrderData): Record<string, number>;
/**
 *
 * @param {entity} enemy
 * @param {number} x
 * @param {number} y
 * @param {boolean} checkpoint
 * @returns {string}
 */
declare function KDGetBarricade(enemy: entity, x: number, y: number, checkpoint?: boolean, type?: any[]): string;
/**
 *
 * @param {entity} enemy
 * @param {number} x
 * @param {number} y
 * @param {boolean} checkpoint
 * @param {string[]} type
 * @returns {string}
 */
declare function KDGetTrapSpell(enemy: entity, x: number, y: number, checkpoint?: boolean, type?: string[]): string;
/**
 * Location and location/neighbors
 * @type {Record<string, {x: number, y: number, neighbors: number}>} */
declare let KDCommanderChokes: Record<string, {
    x: number;
    y: number;
    neighbors: number;
}>;
declare let KDUpdateChokes: boolean;
/**
 * Who is helping the struggler
 * @type {Record<string, number>} */
declare let KDStruggleAssisters: Record<string, number>;
/**
 * Enemy ID and role
 * @type {Map<number, string>} */
declare let KDCommanderRoles: Map<number, string>;
declare let KDCOMMANDERMAXNEIGHBORS: number;
declare let KDChokeTiles: string[];
declare let KDAwareEnemies: number;
declare let KDEnemiesTargetingPlayer: number;
declare let KDAssaulters: number;
declare let KDAssaulterList: any[];
declare let KDMaxAssaulters: number;
declare let KDStationedChokepoints: {};
declare let KDStationedChokepointsDist: {};
declare let KD_Avg_VX: number;
declare let KD_Avg_VY: number;
/**
 * @type {Record<string, KDCommanderOrder>}
 */
declare let KDCommanderOrders: Record<string, KDCommanderOrder>;
/**
 * @type {Record<string, KDBoobyTrap>}
 */
declare let KDBarricades: Record<string, KDBoobyTrap>;
/**
 * @type {Record<string, KDBoobyTrap>}
 */
declare let KDBoobyTraps: Record<string, KDBoobyTrap>;
declare let KDJourneyGraphics: import("pixi.js").Graphics;
declare let KDJourneyGraphicsLower: import("pixi.js").Graphics;
declare let KDJourneyGraphicsUpper: import("pixi.js").Graphics;
declare let KDGameBoardAddedJourney: boolean;
declare let KDMapModRefreshList: MapMod[];
declare let KDJourneySlotTypes: Record<string, (Predecessor: KDJourneySlot, x: number, y: number, forceCheckpoint?: string) => KDJourneySlot>;
/**
 *
 * @param Width - Length of the JourneyArea being created
 * @param PreviousSlot - the JourneySlot preceding this one
 */
declare function KDCreateJourneyArea(Width: number, PreviousSlot: KDJourneySlot, FinalConnection: KDJourneySlot, continueCheckpoints?: boolean): KDJourneySlot[];
declare function KDCommitJourneySlots(slots: KDJourneySlot[]): void;
declare function KDJourneySlotSuccessor(Slot: KDJourneySlot, xOffset: number, yOffset: number, forceCheckpoint?: string): KDJourneySlot;
/**
 * Culls the journey map
 * Removes all slots with no connections
 * Max of 100 to prevent infinite loops
 * Does not affect protected slots
 */
declare function KDCullJourneyMap(): void;
declare function KDRenderJourneyMap(X: number, Y: number, Width?: number, Height?: number, ScaleX?: number, ScaleY?: number, xOffset?: number, yOffset?: number, spriteSize?: number, TextOffset?: number): void;
declare function KDInitJourneyMap(Level?: number): void;
declare function KDDrawJourneyLine(x1: number, y1: number, x2: number, y2: number, color: number, Canvas?: import("pixi.js").Graphics): void;
declare function KDGetJourneySuccessorCheckpoint(previousCheckpoint: any, x: any): string;
declare let KDModsLoaded: boolean;
declare let KDMods: {};
declare let KDModIndex: number;
declare let KDModCount: number;
declare let KDModSpacing: number;
declare let KDGetMods: boolean;
declare let KDOffline: boolean;
declare function KDGetModsLoad(execute: any): Promise<void>;
declare function KDDrawMods(): void;
declare function getFileInput(): void;
declare function KDLoadMod(files: any[]): void;
declare let KDExecuted: boolean;
declare function KDExecuteModsAndStart(): Promise<void>;
declare function KDExecuteMods(): Promise<void>;
declare const model: {
    getEntries(file: any, options: any): any;
    getURL(entry: any, options: any): Promise<string>;
    getEntryFile: (entry: any, creationMethod: any, onend: any, onprogress: any) => void;
};
declare const PIXIWidth = 2000;
declare const PIXIHeight = 1000;
declare let resolution: number;
declare var PIXIapp: import("pixi.js").Application<import("pixi.js").ICanvas>;
declare let ticker: import("pixi.js").Ticker;
declare let TimerRunInterval: number;
declare let TimerLastTime: number;
declare let CurrentTime: number;
declare let TimerLastCycleCall: number;
/**
 * Main game running state, runs the drawing
 */
declare function MainRun(Timestamp: number): void;
/**
 * When the user presses a key, we send the KeyDown event to the current screen if it can accept it
 */
declare function KeyDown(event: KeyboardEvent): void;
/**
 * When the user clicks, we fire the click event for other screens
 */
declare function Click(event: MouseEvent): void;
/**
 * When the user touches the screen (mobile only), we fire the click event for other screens
 */
declare function TouchStart(event: TouchEvent): void;
/**
 * When the user touches the screen (mobile only), we fire the click event for other screens
 */
declare function TouchEnd(event: TouchEvent): void;
/**
 * When touch moves, we keep it's position for other scripts
 */
declare function TouchMove(touch: Touch): void;
/**
 * When mouse move, we keep the mouse position for other scripts
 */
declare function MouseMove(event: MouseEvent): void;
/**
 * When the mouse is away from the control, we stop keeping the coordinates,
 * we also check for false positives with "relatedTarget"
 */
declare function LoseFocus(event: MouseEvent): void;
declare let erasefragment: string;
declare let erasevertex: string;
declare class EraseFilter extends PIXI.Filter {
    maskSprite: ISpriteMaskTarget;
    maskMatrix: PIXIMatrix;
    /**
     * @param {PIXI.Sprite} sprite - The sprite used for the displacement map. (make sure its added to the scene!)
     * @param scale - The scale of the displacement
     */
    constructor(sprite: ISpriteMaskTarget);
    /**
     * Applies the filter.
     * @param filterManager - The manager.
     * @param input - The input target.
     * @param output - The output target.
     * @param clearMode - clearMode.
     */
    apply(filterManager: PIXIFilterSystem, input: PIXIRenderTexture, output: PIXIRenderTexture, clearMode: PIXICLEAR_MODES): void;
    /** The texture used for the displacement map. Must be power of 2 sized texture. */
    get map(): PIXITexture;
    set map(value: PIXITexture);
}
declare let DisplacementMaps: string[];
declare let DisplacementScale: number;
declare let displacementList: string[];
declare let linearList: string[];
declare let nearestList: string[];
declare let CurrentLoading: string;
declare let lastProgress: number;
declare function incrementProgress(amount: any): (progress: any) => void;
declare function LoadTextureAtlas(list: any, scale_mode: any, preload?: boolean): Promise<void>;
declare function PreloadDisplacement(list: any): Promise<void>;
declare function load(): Promise<void>;
/**
 * Returns a map from a list
 */
declare function ToNamedMap<N extends Namable>(Named: N[]): {
    [_: string]: N;
};
declare function ToMap(Array: string[], ...Extra: string[]): {
    [_: string]: boolean;
};
declare function ToMapSubtract(Array: string[], Subtract: string[], ...Extra: string[]): {
    [_: string]: boolean;
};
declare function ToMapDefault(Array: string[], Default?: string): {
    [_: string]: string;
};
declare function ToMapDupe(Array: string[], ExtraMap?: Record<string, string>): {
    [_: string]: string;
};
declare function GenPlaceholderModelNames(): string;
declare let LAYERS_BASE: string[];
/** Handy way of referencing multiple layers */
declare let LayerGroups: {
    Breastplate: {
        [_: string]: boolean;
    };
    ChestBinding: {
        [_: string]: boolean;
    };
    TopBinding: {
        [_: string]: boolean;
    };
    CrotchRope: {
        [_: string]: boolean;
    };
    ButtSleeves: {
        [_: string]: boolean;
    };
    BustierPoses: {
        [_: string]: boolean;
    };
    BustierPoses2: {
        [_: string]: boolean;
    };
    BustSize: {
        [_: string]: boolean;
    };
    SlimeLegs: {
        [_: string]: boolean;
    };
    SlimeFeet: {
        [_: string]: boolean;
    };
    Shoes: {
        [_: string]: boolean;
    };
    BelowShoes: {
        [_: string]: boolean;
    };
    SlimeAnkles: {
        [_: string]: boolean;
    };
    SlimeTorsoLower: {
        [_: string]: boolean;
    };
    Petsuit: {
        [_: string]: boolean;
    };
    Legbinder: {
        [_: string]: boolean;
    };
    SlimeThighs: {
        [_: string]: boolean;
    };
    Boots: {
        [_: string]: boolean;
    };
    Heels: {
        [_: string]: boolean;
    };
    BalletHeels: {
        [_: string]: boolean;
    };
    BalletHeelsCuffs: {
        [_: string]: boolean;
    };
    HeelRight: {
        [_: string]: boolean;
    };
    BalletHeelRight: {
        [_: string]: boolean;
    };
    Arms: {
        [_: string]: boolean;
    };
    ArmsAll: {
        [_: string]: boolean;
    };
    ArmsAllAndHarness: {
        [_: string]: boolean;
    };
    Rope1: {
        [_: string]: boolean;
    };
    RopeTorso: {
        [_: string]: boolean;
    };
    CorsetTorso: {
        [_: string]: boolean;
    };
    TightChastityBelt: {
        [_: string]: boolean;
    };
    PetsuitArms: {
        [_: string]: boolean;
    };
    RopeFore: {
        [_: string]: boolean;
    };
    RopeThighs: {
        [_: string]: boolean;
    };
    RopeCalf: {
        [_: string]: boolean;
    };
    ToeTie: {
        [_: string]: boolean;
    };
    Ribbon1: {
        [_: string]: boolean;
    };
    RibbonTorso: {
        [_: string]: boolean;
    };
    RibbonFore: {
        [_: string]: boolean;
    };
    CorsetBra: {
        [_: string]: boolean;
    };
    ShirtCutoffBra: {
        [_: string]: boolean;
    };
    RibbonThighs: {
        [_: string]: boolean;
    };
    RibbonCalf: {
        [_: string]: boolean;
    };
    RibbonToeTie: {
        [_: string]: boolean;
    };
    LegCuffs: {
        [_: string]: boolean;
    };
    Yoke: {
        [_: string]: boolean;
    };
    Fiddle: {
        [_: string]: boolean;
    };
    Cuffs: {
        [_: string]: boolean;
    };
    Mitts: {
        [_: string]: boolean;
    };
    HairHelmet: {
        [_: string]: boolean;
    };
    Xray: {
        [_: string]: boolean;
    };
    XrayFace: {
        [_: string]: boolean;
    };
    XrayPanties: {
        [_: string]: boolean;
    };
    XrayBra: {
        [_: string]: boolean;
    };
    Bubble: {
        [_: string]: boolean;
    };
    All: {
        [_: string]: boolean;
    };
};
declare let LayerProperties: {
    ShoeLeftOver: {
        Parent: string;
    };
    ShoeLeftUnder: {
        Parent: string;
    };
    ShoeRightOver: {
        Parent: string;
    };
    ShoeRightUnder: {
        Parent: string;
    };
    FurnitureFront: {
        Parent: string;
    };
    FurnitureBack: {
        Parent: string;
    };
    Glasses: {
        Parent: string;
    };
    Eyes: {
        Parent: string;
    };
    Hair: {
        Parent: string;
    };
    HairFront: {
        Parent: string;
    };
    HairOver: {
        Parent: string;
    };
    HairMiddle: {
        Parent: string;
    };
    HairBack: {
        Parent: string;
    };
    Mouth: {
        Parent: string;
    };
    Blush: {
        Parent: string;
    };
    Brows: {
        Parent: string;
    };
    Ears: {
        Parent: string;
    };
    Nose: {
        Parent: string;
    };
    InflatableHead: {
        Parent: string;
    };
    Hat: {
        Parent: string;
    };
    Hood: {
        Parent: string;
    };
    HeadbandDeco: {
        Parent: string;
    };
    Headband: {
        Parent: string;
    };
    Mask: {
        Parent: string;
    };
    MaskOver: {
        Parent: string;
    };
    MouthProp: {
        Parent: string;
    };
    Goggles: {
        Parent: string;
    };
    BlindfoldWrap: {
        Parent: string;
    };
    Blindfold: {
        Parent: string;
    };
    GagOver: {
        Parent: string;
    };
    GagMuzzleStraps: {
        Parent: string;
    };
    GagMuzzle: {
        Parent: string;
    };
    GagFlatStraps: {
        Parent: string;
    };
    GagFlat: {
        Parent: string;
    };
    GagStraps: {
        Parent: string;
    };
    Gag: {
        Parent: string;
    };
    GagUnder: {
        Parent: string;
    };
    Circlet: {
        Parent: string;
    };
    CircletUnder: {
        Parent: string;
    };
    HatBack: {
        Parent: string;
    };
    AnimalEars: {
        Parent: string;
    };
    AnimalEarsFront: {
        Parent: string;
    };
    Tail: {
        Parent: string;
    };
};
declare let Hardpoints: {
    Front: {
        Parent: string;
        X: number;
        Y: number;
        Angle: number;
    };
    Rear: {
        Parent: string;
        X: number;
        Y: number;
        Angle: number;
    };
    Chest: {
        Parent: string;
        X: number;
        Y: number;
        Angle: number;
    };
    BreastLeft: {
        Parent: string;
        X: number;
        Y: number;
        Angle: number;
    };
    BreastRight: {
        Parent: string;
        X: number;
        Y: number;
        Angle: number;
    };
};
/** Internal value for layering */
declare let LAYER_INCREMENT: number;
declare let MODELHEIGHT: number;
declare let MODELWIDTH: number;
/** Model scale to UI scalee */
declare let MODEL_SCALE: number;
declare let MODEL_XOFFSET: number;
declare let ARMPOSES: string[];
/** List of poses where the left wrist is invisible */
declare let WRISTHIDELEFT: string[];
/** List of poses where the right wrist is invisible */
declare let WRISTHIDERIGHT: string[];
/** Poses where the torso needs a correction */
declare let SHOULDERPOSES: string[];
/** Poses where the arms are hidden (usually b/c forearms are visible) */
declare let HIDEARMPOSES: any[];
declare let FOREARMPOSES: string[];
declare let CROSSARMPOSES: string[];
declare let HANDRIGHTPOSES: string[];
declare let HANDLEFTPOSES: string[];
declare let FOREHANDRIGHTPOSES: string[];
declare let FOREHANDLEFTPOSES: string[];
declare let LEGPOSES: string[];
declare let ANKLERIGHTPOSES: string[];
declare let ANKLELEFTPOSES: string[];
declare let FOOTRIGHTPOSES: string[];
declare let FOOTLEFTPOSES: string[];
declare let CALFRIGHTPOSES: string[];
declare let CALFLEFTPOSES: string[];
declare let KNEELPOSES: string[];
declare let HOGTIEPOSES: string[];
declare let STANDPOSES: string[];
declare let CLOSEDPOSES: string[];
declare let SPREADPOSES: string[];
declare let SPREADCLOSEDPOSES: string[];
/** Expressions */
declare let EYETYPES: string[];
declare let EYEPOSES: string[];
declare let EYE2POSES: string[];
declare let BROWTYPES: string[];
declare let BROWPOSES: string[];
declare let BROW2POSES: string[];
declare let MOUTHPOSES: string[];
declare let BLUSHPOSES: string[];
/** Standard GlobalDefaultOverrides, this should be for any pose that's meant to use mostly normal assets */
declare let STANDARD_DEFAULTS: string[];
declare let PoseProperties: {
    [_: string]: PoseProperty;
};
/**
 * Get the pose from the pose array with the highest value of checkvar
 */
declare function ModelGetMaxPose(Poses: {
    [_: string]: boolean;
}, CheckVar: string, FilterVar?: string | null): string;
declare function ModelGetPoseOffsets(Poses: {
    [_: string]: boolean;
}, Flip: boolean): {
    X_Offset: number;
    Y_Offset: number;
};
declare function ModelGetPoseRotation(Poses: {
    [_: string]: boolean;
}): {
    rotation: number;
    X_Anchor: number;
    Y_Anchor: number;
};
declare function ModelGetPoseMods(Poses: {
    [_: string]: boolean;
}): {
    [_: string]: PoseMod[];
};
declare function CheckPoseOrTags(C: Character, tag: string): boolean;
declare function KDGetAvailablePosesLegs(C: Character): string[];
declare function KDGetAvailablePosesArms(C: Character): string[];
declare function RefreshTempPoses(Character: Character, Restraints: boolean, Buffs?: boolean): void;
declare function KDRefreshPoseOptions(Character: Character): void;
declare function KDRefreshPoseOptionsMC(MC: ModelContainer): void;
declare let SHOWMESHPOINTS: boolean;
declare let StruggleAnimation: boolean;
declare let RenderCharacterQueue: Map<any, any>;
declare let RenderCharacterLock: Map<any, any>;
/**
 * Returns a table with the priorities for each layer based on order of the array
 */
declare function InitLayers(layers: string[]): {
    [_: string]: number;
};
declare let ModelLayers: {
    [_: string]: number;
};
declare let ModelDefs: {
    [_: string]: Model;
};
declare function AddModel(Model: Model, Strings?: Record<string, string>): void;
declare let KDCurrentModels: Map<Character, ModelContainer>;
interface ContainerInfo {
    readonly SpriteList: Map<string, any>;
    readonly SpritesDrawn: Map<string, any>;
    readonly Container: PIXIContainer;
    readonly Mesh: PIXIMesh;
    readonly RenderTexture: PIXIRenderTexture;
    readonly Matrix: PIXIArray;
}
declare class ModelContainer {
    HighestPriority: {
        [_: string]: number;
    };
    HiddenLayers: {
        [_: string]: number;
    };
    XRayFilters: string[];
    Character: Character;
    Models: Map<string, Model>;
    Containers: Map<string, ContainerInfo>;
    ContainersDrawn: Map<string, ContainerInfo>;
    Poses: Record<string, boolean>;
    TempPoses: Record<string, boolean>;
    readonly Update: Set<string>;
    readonly ForceUpdate: Set<string>;
    readonly Refresh: Set<string>;
    readonly Mods: Map<string, PoseMod[]>;
    constructor(Character: Character, Models: Map<string, Model>, Containers: Map<string, ContainerInfo>, ContainersDrawn: Map<string, ContainerInfo>, Poses: Record<string, boolean>);
    /**
     * Adds a model to the modelcontainer
     */
    addModel(Model: Model, Filters?: Record<string, LayerFilter>, LockType?: string): void;
    /** Updates a model, usually after adding all the models*/
    updateModel(Name: string): void;
    /**
     * Deletes a model to the modelcontainer
     */
    removeModel(Model: string): void;
}
declare function ToLayerMap(Layers: ModelLayer[]): {
    [_: string]: ModelLayer;
};
declare function GetModelLayers(ModelName: string, PrependString?: string, AppendString?: string, InheritColor?: string, PriBonus?: number, layerSwap?: string, Folder?: string): ModelLayer[];
declare function GetModelLayersNoOverride(ModelName: string, PrependString?: string, AppendString?: string, InheritColor?: string, PriBonus?: number, layerSwap?: string, Folder?: string): ModelLayer[];
declare function GetModelWithExtraLayers(NewModel: string, BaseModel: string, Layers: ModelLayer[], Parent?: string, TopLevel?: boolean, ExtraProps?: object): Model;
declare function GetModelRestraintVersion(BaseModel: string, Parent: boolean): Model;
declare function GetModelFashionVersion(BaseModel: string, Parent: boolean): Model;
declare function GetOverCorset(BaseModel: string): Model;
declare function DisposeCharacter(C: Character): void;
/**
 * Refreshes the character if not all images are loaded and draw the character canvas on the main game screen
 * @param C - Character to draw
 * @param X - Position of the character on the X axis
 * @param Y - Position of the character on the Y axis
 * @param Zoom - Zoom factor
 * @param IsHeightResizeAllowed - Whether or not the settings allow for the height modifier to be applied
 * @param DrawCanvas - Pixi container to draw to
 * @param Blend - The blend mode to use
 * @param StartMods - Mods applied
 * @param flip - Mods applied
 */
declare function DrawCharacter(C: Character, X: number, Y: number, Zoom: number, IsHeightResizeAllowed?: boolean, DrawCanvas?: any, Blend?: any, StartMods?: PoseMod[], zIndex?: number, flip?: boolean): void;
/** Future function */
declare let DrawModel: typeof DrawCharacter;
declare function LayerIsHidden(MC: ModelContainer, l: ModelLayer, m: Model, Mods: any): boolean;
declare function LayerLayer(MC: ModelContainer, l: ModelLayer, m: Model, Mods?: any): string;
declare function LayerPri(MC: ModelContainer, l: ModelLayer, m: Model, Mods?: any): number;
/**
 * Setup sprites from the modelcontainer
 */
declare function DrawCharacterModels(MC: ModelContainer, X: any, Y: any, Zoom: any, StartMods: any, ContainerContainer: any, refreshfilters: boolean, flip: boolean): boolean;
declare function FilterHash(filter: any): string;
declare const KDAdjustmentFilterCache: Map<string, PIXIFilter[]>;
/**
 * Determines if we should draw this layer or not
 * @param {ModelContainer} MC
 * @param {Model} Model
 * @param {ModelLayer} Layer
 * @param {Record<string, boolean>} Poses
 * @returns {boolean}
 */
declare function ModelDrawLayer(MC: ModelContainer, Model: Model, Layer: ModelLayer, Poses: Record<string, boolean>): boolean;
/**
 * Determines if we should draw this layer or not
 */
declare function ModelLayerHidden(drawLayers: {
    [_: string]: boolean;
}, MC: ModelContainer, Model: Model, Layer: ModelLayer, Poses: {
    [_: string]: boolean;
}): boolean;
declare function ModelLayerString(Model: Model, Layer: ModelLayer, Poses: {
    [_: string]: boolean;
}): string;
declare function ModelLayerStringCustom(Model: Model, Layer: ModelLayer, Poses: {
    [_: string]: boolean;
}, Sprite: string, Path?: string, useModelFolder?: boolean, forceInvariant?: boolean, forceMorph?: Record<string, string>, noAppend?: boolean): string;
/**
 * Gets the sprite name for a layer for a given pose
 */
declare function LayerSprite(Layer: ModelLayer, Poses: {
    [_: string]: boolean;
}): string;
/**
* Gets a sprite formatted for the restraint or object
*/
declare function LayerSpriteCustom(Layer: ModelLayer, Poses: {
    [_: string]: boolean;
}, Sprite: string, forceInvariant?: boolean, forceMorph?: Record<string, string>, noAppend?: boolean): string;
declare function GetTrimmedAppearance(C: Character): Item[];
declare function IsModelLost(C: Character, Name: string): boolean;
declare function UpdateModels(C: Character, Xray?: string[]): void;
declare function ForceRefreshModels(C: Character): void;
declare function ForceRefreshModelsAsync(C: Character, ms?: number): Promise<void>;
/**
 * Returns a list of colorable layer names
 */
declare function KDGetColorableLayers(Model: Model): string[];
declare function KDGeneratePoseArray(ArmsPose?: string | undefined, LegsPose?: string | undefined, EyesPose?: string | undefined, BrowsPose?: string | undefined, BlushPose?: string | undefined, MouthPose?: string | undefined, Eyes2Pose?: string | undefined, Brows2Pose?: string | undefined, ExtraPose?: string | undefined): {
    [_: string]: boolean;
};
declare function KDGetPoseOfType(C: Character, Type: string): string;
declare function GetUnnamedModels(): void;
declare function GetHardpointLoc(C: Character, X: number, Y: number, ZoomInit: number, Hardpoint: string, Flip: boolean): {
    x: number;
    y: number;
    angle: any;
};
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
declare let slimefilter: {
    gamma: number;
    saturation: number;
    contrast: number;
    brightness: number;
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
declare let tapefilter: {
    gamma: number;
    saturation: number;
    contrast: number;
    brightness: number;
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */
/**
 * List off all face styles
 */
declare let KDModelStyles: Record<string, Record<string, string[]>>;
/**
 * List off all face styles
 */
declare let KDModelFace: {
    [_: string]: KinkyDungeonDress;
};
/**
 * List off all hair styles
 */
declare let KDModelHair: {
    [_: string]: KinkyDungeonDress;
};
/**
 * List off all bodies
 */
declare let KDModelBody: {
    [_: string]: KinkyDungeonDress;
};
/**
 * List off all ears and tails and stuff
 */
declare let KDModelCosplay: {
    [_: string]: KinkyDungeonDress;
};
/**
 * List off all dresses items
 */
declare let KDModelDresses: {
    [_: string]: KinkyDungeonDress;
};
declare function KDInitCurrentPose(blank: any): void;
declare function KDDrawSavedColors(X: any, y: any, max: any, C: any): void;
/**
 *
 * @param {number} X
 * @param {number} Y
 * @param {Character} C
 * @param {Model} Model
 */
declare function KDDrawColorSliders(X: number, Y: number, C: Character, Model: Model): void;
declare function KDDrawPoseButtons(C: any, X?: number, Y?: number, allowRemove?: boolean, dress?: boolean, updateDesired?: boolean): void;
/**
 * Updates the mopel list, only altering a level if the specified altered level is that low
 * @param {*} level
 */
declare function KDUpdateModelList(level?: any): void;
/** Call BEFORE making any changes */
declare function KDChangeWardrobe(C: any): void;
/**
 *
 * @param {Character} C
 */
declare function KDDrawModelList(X: any, C: Character): void;
declare function KDDrawWardrobe(screen: any, Character: any): void;
declare function KDSaveCodeOutfit(C: any, clothesOnly?: boolean): void;
declare function KDRestoreOutfit(): void;
declare function KDSaveOutfitInfo(): void;
declare function KDRefreshOutfitInfo(): void;
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from https://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {number[]}           The RGB representation
 */
declare function hslToRgb(h: number, s: number, l: number): number[];
declare function hueToRgb(p: any, q: any, t: any): any;
/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 1] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @return  {number[]}           The HSL representation
 */
declare function rgbToHsl(r: number, g: number, b: number): number[];
declare let KDConfirmType: string;
declare let KinkyDungeonReplaceConfirm: number;
declare let KDCurrentOutfit: number;
declare let KDMaxOutfits: number;
declare let KDMaxOutfitsDisplay: number;
declare let KDMaxOutfitsIndex: number;
declare let KDOutfitInfo: any[];
declare let KDOutfitStore: {};
declare let KDOutfitOriginalStore: {};
declare let lastFilterUpdate: number;
declare let FilterUpdateInterval: number;
declare let KDModelListMax: number;
declare let KDModelListViewSkip: number;
declare let KDModelList_Categories_index: number;
declare namespace KDModelList_Categories_viewindex {
    const index: number;
}
declare let KDModelList_Categories: any[];
declare let KDModelList_Toplevel_index: number;
declare namespace KDModelList_Toplevel_viewindex {
    const index_1: number;
    export { index_1 as index };
}
declare let KDModelList_Toplevel: any[];
declare let KDModelList_Sublevel_index: number;
declare namespace KDModelList_Sublevel_viewindex {
    const index_2: number;
    export { index_2 as index };
}
declare let KDModelList_Sublevel: any[];
declare let KDModelListFilter: string;
declare let KDWardrobeCategories: string[];
declare let KDSelectedModel: any;
/** @type {LayerFilter} */
declare let KDColorSliders: LayerFilter;
declare namespace KDColorSliderColor {
    const red: string;
    const green: string;
    const blue: string;
}
declare let KDCurrentLayer: string;
declare let KDSavedColorCount: number;
declare let KDSavedColorPerRow: number;
declare let KDSavedColors: any[];
declare let KDWardrobe_PoseArms: string[];
declare let KDWardrobe_PoseLegs: string[];
declare let KDWardrobe_PoseEyes: string[];
declare let KDWardrobe_PoseEyes2: string[];
declare let KDWardrobe_PoseBrows: string[];
declare let KDWardrobe_PoseBrows2: string[];
declare let KDWardrobe_PoseMouth: string[];
declare let KDWardrobe_PoseBlush: string[];
declare let KDWardrobe_CurrentPoseArms: string;
declare let KDWardrobe_CurrentPoseLegs: string;
declare let KDWardrobe_CurrentPoseEyes: string;
declare let KDWardrobe_CurrentPoseEyes2: string;
declare let KDWardrobe_CurrentPoseBrows: string;
declare let KDWardrobe_CurrentPoseBrows2: string;
declare let KDWardrobe_CurrentPoseMouth: string;
declare let KDWardrobe_CurrentPoseBlush: string;
declare let KDWardrobeCallback: any;
declare let KDWardrobeRevertCallback: any;
declare let KDWardrobeResetCallback: any;
declare let KDVisualBrightness: number;
