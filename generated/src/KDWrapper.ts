export const WardrobeGetExpression = WardrobeGetExpression;
export const ServerAppearanceBundle = ServerAppearanceBundle;
export const AssetGet = AssetGet;
export const ReputationGet = ReputationGet;
export const DialogSetReputation = DialogSetReputation;
export const ChatRoomPublishCustomAction = ChatRoomPublishCustomAction;

interface ITypedItemSetOptionParameters {
    C: PlayerCharacter;
    item: Item;
    options: any;
    option: any;
    push?: boolean;
}

export function PackedTypedItemSetOption(args: ITypedItemSetOptionParameters) {
    TypedItemSetOption(args.C, args.item, args.options, args.option, args.push)
}

export const TypedItemSetOptionByName = TypedItemSetOptionByName;
export const ModularItemMergeModuleValues = ModularItemMergeModuleValues;
export const ExtendedItemSetType = ExtendedItemSetType;
export const ExtendedItemExit = ExtendedItemExit;
export const InventoryRemove = InventoryRemove;
export const InventoryGetLock = InventoryGetLock;
export const InventoryAllow = InventoryAllow;

interface IInventoryWearParameters {
    C: Character;
    AssetName: any;
    AssetGroup: any;
    ItemColor: any;
    Difficulty: undefined;
    MemberNumber: undefined;
    Craft: undefined;
    Refresh?: boolean;
}

export function PackedInventoryWear(args: IInventoryWearParameters) {
    InventoryWear(args.C, args.AssetName, args.AssetGroup, args.ItemColor, args.Difficulty, args.MemberNumber, args.Craft, args.Refresh)
}

interface IInventoryLockParameters {
    C: Character;
    Item: Item;
    Lock: string;
    MemberNumber: number;
    Update?: boolean;
}

export function PackedInventoryLock(args: IInventoryLockParameters) {
    InventoryLock(args.C, args.Item, args.Lock, args.MemberNumber, args.Update)
}

export const InventoryUnlock = InventoryUnlock;
export const ServerSend = ServerSend;
export const ServerPlayerIsInChatRoom = ServerPlayerIsInChatRoom;
export const CharacterAppearanceLoadCharacter = CharacterAppearanceLoadCharacter;
export const CharacterChangeMoney = CharacterChangeMoney;
export const DrawImage = DrawImage;
export const suppressCanvasUpdate = suppressCanvasUpdate;
export const CommonIsNumeric = CommonIsNumeric;
export const CommonGetFormatDate = CommonGetFormatDate;
export const CommonDetectMobile = CommonDetectMobile;
export const CommonGetBrowser = CommonGetBrowser;
export const CommonParseCSV = CommonParseCSV;
export const CommonReadCSV = CommonReadCSV;
export const CommonGet = CommonGet;
export const CommonGetRetry = CommonGetRetry;
export const CommonClick = CommonClick;

interface ICommonTouchActiveParameters {
    X: number;
    Y: number;
    W: number;
    H: number;
    TL: any;
}

export function PackedCommonTouchActive(args: ICommonTouchActiveParameters) {
    CommonTouchActive(args.X, args.Y, args.W, args.H, args.TL)
}

export const CommonKeyDown = CommonKeyDown;
export const CommonDynamicFunction = CommonDynamicFunction;
export const CommonDynamicFunctionParams = CommonDynamicFunctionParams;
export const CommonCallFunctionByName = CommonCallFunctionByName;
export const CommonCallFunctionByNameWarn = CommonCallFunctionByNameWarn;
export const CommonSetScreen = CommonSetScreen;
export const CommonTime = CommonTime;
export const CommonIsColor = CommonIsColor;
export const CommonColorIsValid = CommonColorIsValid;
export const CommonRandomItemFromList = CommonRandomItemFromList;
export const CommonColorsEqual = CommonColorsEqual;
export const CommonArraysEqual = CommonArraysEqual;
export const CommonMemoize = CommonMemoize;
export const CommonPackItemArray = CommonPackItemArray;
export const CommonUnpackItemArray = CommonUnpackItemArray;
export const CommonDeepEqual = CommonDeepEqual;
export const CommonArrayConcatDedupe = CommonArrayConcatDedupe;
export const CommonNoop = CommonNoop;
export const CommonGetServer = CommonGetServer;
export const MouseIn = MouseIn;
export const MouseXIn = MouseXIn;
export const MouseYIn = MouseYIn;
export const MouseHovering = MouseHovering;
export const DrawHexToRGB = DrawHexToRGB;
export const DrawRGBToHex = DrawRGBToHex;
export const DrawLoad = DrawLoad;
export const DrawGetImage = DrawGetImage;
export const DrawGetImageOnLoad = DrawGetImageOnLoad;
export const DrawGetImageOnError = DrawGetImageOnError;

interface IDrawCircleParameters {
    CenterX: number;
    CenterY: number;
    Radius: number;
    LineWidth: number;
    LineColor: string;
    FillColor?: string;
    Canvas?: CanvasRenderingContext2D;
}

export function PackedDrawCircle(args: IDrawCircleParameters) {
    DrawCircle(args.CenterX, args.CenterY, args.Radius, args.LineWidth, args.LineColor, args.FillColor, args.Canvas)
}

interface IDrawProgressBarParameters {
    x: number;
    y: number;
    w: number;
    h: number;
    value: number;
    foreground?: string;
    background?: string;
}

export function PackedDrawProgressBar(args: IDrawProgressBarParameters) {
    DrawProgressBar(args.x, args.y, args.w, args.h, args.value, args.foreground, args.background)
}

export const DrawProcess = DrawProcess;
export const DrawProcessHoverElements = DrawProcessHoverElements;
export const CharacterReset = CharacterReset;
export const CharacterRandomName = CharacterRandomName;
export const CharacterLoadSimple = CharacterLoadSimple;
export const CharacterDelete = CharacterDelete;
export const CharacterAddPose = CharacterAddPose;
export const CharacterItemsHavePoseAvailable = CharacterItemsHavePoseAvailable;
export const CharacterDoItemsSetPose = CharacterDoItemsSetPose;
export const CharacterLoadCanvas = CharacterLoadCanvas;
export const CharacterLoadCanvasAll = CharacterLoadCanvasAll;
export const CharacterNaked = CharacterNaked;
export const CharacterSetActivePose = CharacterSetActivePose;

interface ICharacterSetFacialExpressionParameters {
    C: Character;
    AssetGroup: string;
    Expression: string;
    Timer?: number;
    Color?: string | string[];
}

export function PackedCharacterSetFacialExpression(args: ICharacterSetFacialExpressionParameters) {
    CharacterSetFacialExpression(args.C, args.AssetGroup, args.Expression, args.Timer, args.Color)
}

export const CharacterResetFacialExpression = CharacterResetFacialExpression;
export const CharacterGetCurrent = CharacterGetCurrent;
export const CharacterNickname = CharacterNickname;
export const CharacterLoadNPC = CharacterLoadNPC;
export const CharacterReleaseTotal = CharacterReleaseTotal;
export const TextGet = TextGet;
export const TextLoad = TextLoad;
export const TextPrefetch = TextPrefetch;
export const InventoryGet = InventoryGet;
export const ElementValue = ElementValue;
export const ElementContent = ElementContent;
export const ElementCreateTextArea = ElementCreateTextArea;
export const ElementCreateInput = ElementCreateInput;

interface IElementCreateRangeInputParameters {
    id: string;
    value: number;
    min: number;
    max: number;
    step: number;
    thumbIcon?: string;
    vertical?: boolean;
}

export function PackedElementCreateRangeInput(args: IElementCreateRangeInputParameters) {
    ElementCreateRangeInput(args.id, args.value, args.min, args.max, args.step, args.thumbIcon, args.vertical)
}

export const ElementCreateDropdown = ElementCreateDropdown;
export const ElementCloseAllSelect = ElementCloseAllSelect;
export const ElementCreateDiv = ElementCreateDiv;
export const ElementRemove = ElementRemove;

interface IElementPositionParameters {
    ElementID: string;
    X: number;
    Y: number;
    W: number;
    H?: number;
}

export function PackedElementPosition(args: IElementPositionParameters) {
    ElementPosition(args.ElementID, args.X, args.Y, args.W, args.H)
}

interface IElementPositionFixParameters {
    ElementID: string;
    Font: number;
    X: number;
    Y: number;
    W: number;
    H: number;
}

export function PackedElementPositionFix(args: IElementPositionFixParameters) {
    ElementPositionFix(args.ElementID, args.Font, args.X, args.Y, args.W, args.H)
}

export const ElementSetDataAttribute = ElementSetDataAttribute;
export const ElementSetAttribute = ElementSetAttribute;
export const ElementScrollToEnd = ElementScrollToEnd;
export const ElementGetScrollPercentage = ElementGetScrollPercentage;
export const ElementIsScrolledToEnd = ElementIsScrolledToEnd;
export const ElementFocus = ElementFocus;
export const ElementToggleGeneratedElements = ElementToggleGeneratedElements;
export const TranslationAvailable = TranslationAvailable;
export const TranslationParseTXT = TranslationParseTXT;
export const TranslationString = TranslationString;
export const TranslationStringCachePreBuild = TranslationStringCachePreBuild;
export const TranslationStringCache = TranslationStringCache;
export const TranslationTextArray = TranslationTextArray;
export const TranslationText = TranslationText;
export const TranslationNextLanguage = TranslationNextLanguage;
export const TranslationLoad = TranslationLoad;
export const CharacterAppearanceSetDefault = CharacterAppearanceSetDefault;
export const CharacterAppearanceNaked = CharacterAppearanceNaked;

interface ICharacterAppearanceSetItemParameters {
    C: Character;
    Group: string;
    ItemAsset: any;
    NewColor: string | string[];
    DifficultyFactor?: number;
    ItemMemberNumber?: number;
    Refresh?: boolean;
}

export function PackedCharacterAppearanceSetItem(args: ICharacterAppearanceSetItemParameters) {
    CharacterAppearanceSetItem(args.C, args.Group, args.ItemAsset, args.NewColor, args.DifficultyFactor, args.ItemMemberNumber, args.Refresh)
}

export const CharacterAppearanceStringify = CharacterAppearanceStringify;
export const AppearanceItemStringify = AppearanceItemStringify;
export const CharacterAppearanceRestore = CharacterAppearanceRestore;
export const AppearanceItemParse = AppearanceItemParse;
export const AppearanceCleanup = AppearanceCleanup;
export const addTextKey = addTextKey;
export const deleteTextKey = deleteTextKey;
export const KinkyDungeonCreateRestraint = KinkyDungeonCreateRestraint;
export const KinkyDungeonAddCursedVariants = KinkyDungeonAddCursedVariants;
export const KinkyDungeonGetCurses = KinkyDungeonGetCurses;
export const KinkyDungeonGetVariantEffectByList = KinkyDungeonGetVariantEffectByList;

interface IKinkyDungeonGetVariantEffectByListWeightedParameters {
    List: string | string[];
    Type: ModifierEnum;
    item: string;
    minLevel?: number;
    maxLevel?: number;
    positive?: PosNeutNeg;
}

export function PackedKinkyDungeonGetVariantEffectByListWeighted(args: IKinkyDungeonGetVariantEffectByListWeightedParameters) {
    KinkyDungeonGetVariantEffectByListWeighted(args.List, args.Type, args.item, args.minLevel, args.maxLevel, args.positive)
}

export const KinkyDungeonGetVariantConditionByList = KinkyDungeonGetVariantConditionByList;

interface IKinkyDungeonGetVariantConditionByListWeightedParameters {
    List: string | string[];
    Type: ModifierEnum;
    item: string;
    minLevel?: number;
    maxLevel?: number;
    effect_positive?: KDModifierEffect[];
    effect_neutral?: KDModifierEffect[];
    effect_negative?: KDModifierEffect[];
}

export function PackedKinkyDungeonGetVariantConditionByListWeighted(args: IKinkyDungeonGetVariantConditionByListWeightedParameters) {
    KinkyDungeonGetVariantConditionByListWeighted(args.List, args.Type, args.item, args.minLevel, args.maxLevel, args.effect_positive, args.effect_neutral, args.effect_negative)
}

interface IKDGenerateEffectConditionPairParameters {
    ListEffect: string | string[];
    ListCondition: string | string[];
    Type: ModifierEnum;
    item: string;
    minLevel: number;
    maxLevel: number;
    pos: PosNeutNeg;
}

export function PackedKDGenerateEffectConditionPair(args: IKDGenerateEffectConditionPairParameters) {
    KDGenerateEffectConditionPair(args.ListEffect, args.ListCondition, args.Type, args.item, args.minLevel, args.maxLevel, args.pos)
}

export const KinkyDungeonGetHexByList = KinkyDungeonGetHexByList;

interface IKinkyDungeonGetHexByListWeightedParameters {
    List: string | string[];
    item: string;
    includeOrig?: boolean;
    minLevel?: number;
    maxLevel?: number;
    allHex?: string[];
}

export function PackedKinkyDungeonGetHexByListWeighted(args: IKinkyDungeonGetHexByListWeightedParameters) {
    KinkyDungeonGetHexByListWeighted(args.List, args.item, args.includeOrig, args.minLevel, args.maxLevel, args.allHex)
}

interface IKinkyDungeonGetEnchantmentsByListParameters {
    List: string | string[];
    Type: ModifierEnum;
    includeOrig?: boolean;
    minLevel?: number;
    maxLevel?: number;
}

export function PackedKinkyDungeonGetEnchantmentsByList(args: IKinkyDungeonGetEnchantmentsByListParameters) {
    KinkyDungeonGetEnchantmentsByList(args.List, args.Type, args.includeOrig, args.minLevel, args.maxLevel)
}

interface IKinkyDungeonGetEnchantmentsByListWeightedParameters {
    List: string | string[];
    Type: ModifierEnum;
    item: string;
    includeOrig?: boolean;
    minLevel?: number;
    maxLevel?: number;
    allEnchant?: string[];
}

export function PackedKinkyDungeonGetEnchantmentsByListWeighted(args: IKinkyDungeonGetEnchantmentsByListWeightedParameters) {
    KinkyDungeonGetEnchantmentsByListWeighted(args.List, args.Type, args.item, args.includeOrig, args.minLevel, args.maxLevel, args.allEnchant)
}

export const KinkyDungeonGetWeaponsByList = KinkyDungeonGetWeaponsByList;
export const KinkyDungeonGetWeaponsByListWeighted = KinkyDungeonGetWeaponsByListWeighted;
export const KinkyDungeonGetCurseByList = KinkyDungeonGetCurseByList;

interface IKinkyDungeonGetCurseByListWeightedParameters {
    List: string | string[];
    item: string;
    includeOrig?: boolean;
    minLevel?: number;
    maxLevel?: number;
}

export function PackedKinkyDungeonGetCurseByListWeighted(args: IKinkyDungeonGetCurseByListWeightedParameters) {
    KinkyDungeonGetCurseByListWeighted(args.List, args.item, args.includeOrig, args.minLevel, args.maxLevel)
}

export const KinkyDungeonCloneRestraint = KinkyDungeonCloneRestraint;
export const KinkyDungeonAddRestraintText = KinkyDungeonAddRestraintText;
export const KinkyDungeonDupeRestraintText = KinkyDungeonDupeRestraintText;
export const cloneDeep = cloneDeep;
export const KDInitAutoStruggle = KDInitAutoStruggle;
export const KDAS_UpdateWigglePoint = KDAS_UpdateWigglePoint;
export const KDAS_InWigglePoint = KDAS_InWigglePoint;
export const KDAS_GetMovableWigglePoint = KDAS_GetMovableWigglePoint;
export const KDAS_SwitchFavor = KDAS_SwitchFavor;
export const KDAS_SwitchDelay = KDAS_SwitchDelay;
export const KDHandleAutoStruggle = KDHandleAutoStruggle;
export const KDAutoStruggleEvaluate = KDAutoStruggleEvaluate;
export const KDAutoStruggleMakeDecision = KDAutoStruggleMakeDecision;
export const KDAutoStruggleRunDecision = KDAutoStruggleRunDecision;
export const KDAutoWaitIndexID = KDAutoWaitIndexID;

interface IKDAddParticleParameters {
    x: number;
    y: number;
    img: string;
    type: string;
    data: KDParticleData;
}

export function PackedKDAddParticle(args: IKDAddParticleParameters) {
    KDAddParticle(args.x, args.y, args.img, args.type, args.data)
}

export const KDUpdateParticles = KDUpdateParticles;
export const KDRemoveParticle = KDRemoveParticle;
export const KDDrawArousalParticles = KDDrawArousalParticles;
export const KDDrawVibeParticles = KDDrawVibeParticles;

interface IKDAddShockwaveParameters {
    x: any;
    y: any;
    size: any;
    spr?: string;
    attachToCamera?: boolean;
}

export function PackedKDAddShockwave(args: IKDAddShockwaveParameters) {
    KDAddShockwave(args.x, args.y, args.size, args.spr, args.attachToCamera)
}

export const KDCreateVibeParticle = KDCreateVibeParticle;
export const KDCreateArousalParticle = KDCreateArousalParticle;

interface IKDGenericEffectsParameters {
    item: string;
    type: ModifierEnum;
    pos: KDModifierEffect[];
    neut: KDModifierEffect[];
    neg: KDModifierEffect[];
}

export function PackedKDGenericEffects(args: IKDGenericEffectsParameters) {
    KDGenericEffects(args.item, args.type, args.pos, args.neut, args.neg)
}

interface IKDGenericMultEnchantmentAmountParameters {
    amt: number;
    item: string;
    Loot: any;
    curse: string;
    primaryEnchantment: string;
}

export function PackedKDGenericMultEnchantmentAmount(args: IKDGenericMultEnchantmentAmountParameters) {
    KDGenericMultEnchantmentAmount(args.amt, args.item, args.Loot, args.curse, args.primaryEnchantment)
}

interface IKDNormalizedMultEnchantmentAmountParameters {
    amt: number;
    item: string;
    Loot: any;
    curse: string;
    primaryEnchantment: string;
}

export function PackedKDNormalizedMultEnchantmentAmount(args: IKDNormalizedMultEnchantmentAmountParameters) {
    KDNormalizedMultEnchantmentAmount(args.amt, args.item, args.Loot, args.curse, args.primaryEnchantment)
}

export const KDGetItemPower = KDGetItemPower;
export const KDGetItemRarity = KDGetItemRarity;

interface IKDEnchantDetermineKindParameters {
    item: string;
    Loot: any;
    curse: string;
    primaryEnchantment: string;
    enchantments: string[];
    data: KDHexEnchantEventsData;
    types: string[];
}

export function PackedKDEnchantDetermineKind(args: IKDEnchantDetermineKindParameters) {
    KDEnchantDetermineKind(args.item, args.Loot, args.curse, args.primaryEnchantment, args.enchantments, args.data, args.types)
}

export const KDGetSleepWillFraction = KDGetSleepWillFraction;
export const KDInitInventory = KDInitInventory;
export const KinkyDungeonDefaultStats = KinkyDungeonDefaultStats;
export const KinkyDungeonGetVisionRadius = KinkyDungeonGetVisionRadius;
export const KDEntitySenses = KDEntitySenses;
export const KinkyDungeonGetHearingRadius = KinkyDungeonGetHearingRadius;
export const KDIsAutoAction = KDIsAutoAction;
export const KDDisableAutoWait = KDDisableAutoWait;
export const KinkyDungeonInterruptSleep = KinkyDungeonInterruptSleep;
export const KDGetStamDamageThresh = KDGetStamDamageThresh;
export const KDBulletAlreadyHit = KDBulletAlreadyHit;

interface IKinkyDungeonDealDamageParameters {
    Damage: any;
    bullet: any;
    noAlreadyHit: any;
    noInterrupt: any;
    noMsg: any;
}

export function PackedKinkyDungeonDealDamage(args: IKinkyDungeonDealDamageParameters) {
    KinkyDungeonDealDamage(args.Damage, args.bullet, args.noAlreadyHit, args.noInterrupt, args.noMsg)
}

export const KinkyDungeonUpdateDialogue = KinkyDungeonUpdateDialogue;

interface IKinkyDungeonSendDialogueParameters {
    entity: entity;
    dialogue: string;
    color: string;
    duration: number;
    priority: number;
    force?: boolean;
    nooverride?: boolean;
}

export function PackedKinkyDungeonSendDialogue(args: IKinkyDungeonSendDialogueParameters) {
    KinkyDungeonSendDialogue(args.entity, args.dialogue, args.color, args.duration, args.priority, args.force, args.nooverride)
}

export const KinkyDungeonChangeDistraction = KinkyDungeonChangeDistraction;
export const KinkyDungeonChangeDesire = KinkyDungeonChangeDesire;

interface IKinkyDungeonChangeStaminaParameters {
    Amount: any;
    NoFloater: any;
    Pause: any;
    NoSlow: any;
    minimum?: number;
    slowFloor?: number;
    Regen?: boolean;
}

export function PackedKinkyDungeonChangeStamina(args: IKinkyDungeonChangeStaminaParameters) {
    KinkyDungeonChangeStamina(args.Amount, args.NoFloater, args.Pause, args.NoSlow, args.minimum, args.slowFloor, args.Regen)
}

interface IKinkyDungeonChangeManaParameters {
    Amount: number;
    NoFloater?: boolean;
    PoolAmount?: number;
    Pause?: boolean;
    spill?: boolean;
    minimum?: number;
}

export function PackedKinkyDungeonChangeMana(args: IKinkyDungeonChangeManaParameters) {
    KinkyDungeonChangeMana(args.Amount, args.NoFloater, args.PoolAmount, args.Pause, args.spill, args.minimum)
}

export const KinkyDungeonChangeWill = KinkyDungeonChangeWill;
export const KDChangeBalance = KDChangeBalance;
export const KinkyDungeonChangeCharge = KinkyDungeonChangeCharge;
export const KinkyDungeonHasStamina = KinkyDungeonHasStamina;
export const KinkyDungeonHasWill = KinkyDungeonHasWill;
export const KinkyDungeonHasMana = KinkyDungeonHasMana;
export const KinkyDungeonSetMaxStats = KinkyDungeonSetMaxStats;
export const KinkyDungeonCanUseWeapon = KinkyDungeonCanUseWeapon;
export const KDGetDistractionRate = KDGetDistractionRate;
export const KDGetDistractionDesireRate = KDGetDistractionDesireRate;
export const KinkyDungeonUpdateStats = KinkyDungeonUpdateStats;
export const KDGetEnvironmentalDmg = KDGetEnvironmentalDmg;
export const KDUpdatePerksBonus = KDUpdatePerksBonus;
export const KinkyDungeonCalculateMiscastChance = KinkyDungeonCalculateMiscastChance;
export const KinkyDungeonGetBlindLevel = KinkyDungeonGetBlindLevel;
export const KinkyDungeonCapStats = KinkyDungeonCapStats;
export const KDIsHogtied = KDIsHogtied;
export const KDIsKneeling = KDIsKneeling;
export const KinkyDungeonLegsBlocked = KinkyDungeonLegsBlocked;
export const KinkyDungeonCanStand = KinkyDungeonCanStand;
export const KinkyDungeonCanKneel = KinkyDungeonCanKneel;
export const KinkyDungeonCalculateHeelLevel = KinkyDungeonCalculateHeelLevel;
export const KinkyDungeonCalculateSlowLevel = KinkyDungeonCalculateSlowLevel;
export const KinkyDungeonGagTotal = KinkyDungeonGagTotal;
export const KinkyDungeonCanTalk = KinkyDungeonCanTalk;
export const KinkyDungeonCalculateSubmissiveMult = KinkyDungeonCalculateSubmissiveMult;
export const KinkyDungeonCanPlayWithSelf = KinkyDungeonCanPlayWithSelf;
export const KinkyDungeonCanTryOrgasm = KinkyDungeonCanTryOrgasm;
export const KDGetOrgasmCost = KDGetOrgasmCost;
export const KDGetPlaySelfPower = KDGetPlaySelfPower;
export const KinkyDungeonDoPlayWithSelf = KinkyDungeonDoPlayWithSelf;
export const KDGetPlaySelfThreshold = KDGetPlaySelfThreshold;
export const KinkyDungeonDoTryOrgasm = KinkyDungeonDoTryOrgasm;
export const KinkyDungeonIsChaste = KinkyDungeonIsChaste;
export const KinkyDungeonChastityMult = KinkyDungeonChastityMult;
export const KDBuffResist = KDBuffResist;
export const KDIsEdged = KDIsEdged;
export const KDGetHeelTraining = KDGetHeelTraining;
export const KDTrip = KDTrip;
export const KDGetRecoverBalance = KDGetRecoverBalance;
export const KDGetBalanceRate = KDGetBalanceRate;
export const KDTripDuration = KDTripDuration;
export const KDGetBalanceCost = KDGetBalanceCost;
export const KDAdvanceTraining = KDAdvanceTraining;

interface IKDTickTrainingParameters {
    Name: string;
    trained: boolean;
    skipped: boolean;
    total: number;
    bonus?: number;
}

export function PackedKDTickTraining(args: IKDTickTrainingParameters) {
    KDTickTraining(args.Name, args.trained, args.skipped, args.total, args.bonus)
}

export const KDForcedToGround = KDForcedToGround;
export const KDBalanceDmgMult = KDBalanceDmgMult;
export const KDFitnessMult = KDFitnessMult;
export const KDInitTileEditor = KDInitTileEditor;
export const KDGetTileIndexImg = KDGetTileIndexImg;
export const KDDrawTileEditor = KDDrawTileEditor;
export const KDDrawEditorTagsUI = KDDrawEditorTagsUI;
export const KDDrawEditorUI = KDDrawEditorUI;
export const KDTE_CustomUI = KDTE_CustomUI;
export const KDTE_Clear = KDTE_Clear;
export const KDHandleTileEditor = KDHandleTileEditor;
export const KDTE_UpdateUI = KDTE_UpdateUI;
export const KDTESetIndexToTile = KDTESetIndexToTile;
export const KDTE_CullIndex = KDTE_CullIndex;
export const KDTE_CloseUI = KDTE_CloseUI;
export const KDTE_Create = KDTE_Create;
export const KDTE_LoadTile = KDTE_LoadTile;
export const KDTE_ExportTile = KDTE_ExportTile;
export const KDTE_SaveTile = KDTE_SaveTile;
export const KDTEGetInaccessible = KDTEGetInaccessible;
export const KDObjFromMapArray = KDObjFromMapArray;
export const KDReloadAllEditorTiles = KDReloadAllEditorTiles;
export const KDTE_GetField = KDTE_GetField;

interface IKDMapTilesPopulateParameters {
    w: number;
    h: number;
    indices: Record<string, string>;
    data: any;
    requiredAccess: Record<string, boolean>;
    maxTagFlags: Record<string, number>;
    tagModifiers: any;
}

export function PackedKDMapTilesPopulate(args: IKDMapTilesPopulateParameters) {
    KDMapTilesPopulate(args.w, args.h, args.indices, args.data, args.requiredAccess, args.maxTagFlags, args.tagModifiers)
}

export const KDGetTileWeight = KDGetTileWeight;

interface IKD_GetMapTileParameters {
    index: string;
    indX: number;
    indY: number;
    tilesFilled: Record<string, KDMapTile>;
    indexFilled: Record<string, string>;
    tagCounts: any;
    requiredAccess: Record<string, boolean>;
    globalTags: Record<string, boolean>;
    indices: Record<string, string>;
    tagModifiers: Record<string, number>;
}

export function PackedKD_GetMapTile(args: IKD_GetMapTileParameters) {
    KD_GetMapTile(args.index, args.indX, args.indY, args.tilesFilled, args.indexFilled, args.tagCounts, args.requiredAccess, args.globalTags, args.indices, args.tagModifiers)
}

interface IKDCheckMapTileFillingParameters {
    mapTile: KDMapTile;
    indX: number;
    indY: number;
    indices: Record<string, string>;
    requiredAccess: Record<string, boolean>;
    indexFilled: Record<string, string>;
}

export function PackedKDCheckMapTileFilling(args: IKDCheckMapTileFillingParameters) {
    KDCheckMapTileFilling(args.mapTile, args.indX, args.indY, args.indices, args.requiredAccess, args.indexFilled)
}

interface IKDLooseIndexRankingSuspendParameters {
    indexCheck: any;
    indexTile: any;
    w: any;
    h: any;
    xx: any;
    yy: any;
}

export function PackedKDLooseIndexRankingSuspend(args: IKDLooseIndexRankingSuspendParameters) {
    KDLooseIndexRankingSuspend(args.indexCheck, args.indexTile, args.w, args.h, args.xx, args.yy)
}

interface IKDCheckMapTileAccessParameters {
    mapTile: KDMapTile;
    indX: number;
    indY: number;
    indexFilled: Record<string, string>;
    requiredAccess: Record<string, boolean>;
}

export function PackedKDCheckMapTileAccess(args: IKDCheckMapTileAccessParameters) {
    KDCheckMapTileAccess(args.mapTile, args.indX, args.indY, args.indexFilled, args.requiredAccess)
}

export const KD_PasteTile = KD_PasteTile;

interface IKDGenMazeParameters {
    startX: number;
    startY: number;
    tile: any;
    seed: any;
    MazeBlock: { x: number; y: number; }[];
}

export function PackedKDGenMaze(args: IKDGenMazeParameters) {
    KDGenMaze(args.startX, args.startY, args.tile, args.seed, args.MazeBlock)
}

export const KDCreateTile = KDCreateTile;
export const KDCreateEffectTileTile = KDCreateEffectTileTile;

interface IKDAggregateTileTagsParameters {
    x: number;
    y: number;
    w: number;
    h: number;
    tilesFilled: Record<string, KDMapTile>;
    globalTags: Record<string, boolean>;
}

export function PackedKDAggregateTileTags(args: IKDAggregateTileTagsParameters) {
    KDAggregateTileTags(args.x, args.y, args.w, args.h, args.tilesFilled, args.globalTags)
}

export const KDGetCategoryIndex = KDGetCategoryIndex;
export const KinkyDungeonSetupCrashHandler = KinkyDungeonSetupCrashHandler;
export const KinkyDungeonTeardownCrashHandler = KinkyDungeonTeardownCrashHandler;
export const KinkyDungeonOnUncaughtError = KinkyDungeonOnUncaughtError;
export const KinkyDungeonGenerateErrorReport = KinkyDungeonGenerateErrorReport;
export const KinkyDungeonCrashReportStateData = KinkyDungeonCrashReportStateData;
export const KinkyDungeonCrashReportErrorDetails = KinkyDungeonCrashReportErrorDetails;
export const KinkyDungeonCrashReportSaveData = KinkyDungeonCrashReportSaveData;
export const KinkyDungeonCrashReportDiagnostics = KinkyDungeonCrashReportDiagnostics;
export const KinkyDungeonCrashReportDeviceDetails = KinkyDungeonCrashReportDeviceDetails;
export const KinkyDungeonStackSanitize = KinkyDungeonStackSanitize;
export const KinkyDungeonShowCrashReportModal = KinkyDungeonShowCrashReportModal;
export const KinkyDungeonErrorImage = KinkyDungeonErrorImage;
export const KinkyDungeonErrorPreamble = KinkyDungeonErrorPreamble;
export const KinkyDungeonErrorModalButton = KinkyDungeonErrorModalButton;
export const KinkyDungeonErrorCopy = KinkyDungeonErrorCopy;
export const KDSetDefaultKeybindings = KDSetDefaultKeybindings;
export const KinkyDungeonLeashingEnemy = KinkyDungeonLeashingEnemy;
export const KinkyDungeonJailGuard = KinkyDungeonJailGuard;
export const KinkyDungeonAngel = KinkyDungeonAngel;
export const KDUnlockPerk = KDUnlockPerk;
export const KDLoadPerks = KDLoadPerks;
export const KDMapInit = KDMapInit;
export const KDistEuclidean = KDistEuclidean;
export const KDistChebyshev = KDistChebyshev;
export const KDistTaxicab = KDistTaxicab;
export const KDLoadToggles = KDLoadToggles;
export const KDSaveToggles = KDSaveToggles;
export const KinkyDungeonLoad = KinkyDungeonLoad;
export const KinkyDungeonDeviousDungeonAvailable = KinkyDungeonDeviousDungeonAvailable;
export const KinkyDungeonIsPlayer = KinkyDungeonIsPlayer;
export const sleep = sleep;
export const KDOpenFullscreen = KDOpenFullscreen;
export const KDCloseFullscreen = KDCloseFullscreen;
export const KinkyDungeonRun = KinkyDungeonRun;
export const KDCullSprites = KDCullSprites;
export const KDCullSpritesList = KDCullSpritesList;

interface IDrawButtonKDParameters {
    name: string;
    enabled: boolean;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Label: string;
    Color: string;
    Image?: string;
    HoveringText?: string;
    Disabled?: boolean;
    NoBorder?: boolean;
}

export function PackedDrawButtonKD(args: IDrawButtonKDParameters) {
    DrawButtonKD(args.name, args.enabled, args.Left, args.Top, args.Width, args.Height, args.Label, args.Color, args.Image, args.HoveringText, args.Disabled, args.NoBorder)
}

interface IDrawButtonKDExParameters {
    name: string;
    func: (bdata: any) => boolean;
    enabled: boolean;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Label: string;
    Color: string;
    Image?: string;
    HoveringText?: string;
    Disabled?: boolean;
    NoBorder?: boolean;
    FillColor?: string;
    FontSize?: number;
    ShiftText?: boolean;
    options?: { noTextBG?: boolean; alpha?: number; zIndex?: number; scaleImage?: boolean; centered?: boolean; centerText?: boolean; tint?: string; hotkey?: string; hotkeyPress?: string; };
}

export function PackedDrawButtonKDEx(args: IDrawButtonKDExParameters) {
    DrawButtonKDEx(args.name, args.func, args.enabled, args.Left, args.Top, args.Width, args.Height, args.Label, args.Color, args.Image, args.HoveringText, args.Disabled, args.NoBorder, args.FillColor, args.FontSize, args.ShiftText, args.options)
}

interface IDrawButtonKDExScrollParameters {
    name: string;
    scrollfunc: any;
    func: (bdata: any) => boolean;
    enabled: boolean;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Label: string;
    Color: string;
    Image?: string;
    HoveringText?: string;
    Disabled?: boolean;
    NoBorder?: boolean;
    FillColor?: string;
    FontSize?: number;
    ShiftText?: boolean;
    options?: { noTextBG?: boolean; alpha?: number; zIndex?: number; scaleImage?: boolean; centered?: boolean; centerText?: boolean; tint?: string; hotkey?: string; hotkeyPress?: string; };
}

export function PackedDrawButtonKDExScroll(args: IDrawButtonKDExScrollParameters) {
    DrawButtonKDExScroll(args.name, args.scrollfunc, args.func, args.enabled, args.Left, args.Top, args.Width, args.Height, args.Label, args.Color, args.Image, args.HoveringText, args.Disabled, args.NoBorder, args.FillColor, args.FontSize, args.ShiftText, args.options)
}

interface IDrawButtonKDExToParameters {
    Container: any;
    name: string;
    func: (bdata: any) => boolean;
    enabled: boolean;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Label: string;
    Color: string;
    Image?: string;
    HoveringText?: string;
    Disabled?: boolean;
    NoBorder?: boolean;
    FillColor?: string;
    FontSize?: number;
    ShiftText?: boolean;
    options?: { noTextBG?: boolean; alpha?: number; zIndex?: number; hotkey?: string; hotkeyPress?: string; unique?: boolean; };
}

export function PackedDrawButtonKDExTo(args: IDrawButtonKDExToParameters) {
    DrawButtonKDExTo(args.Container, args.name, args.func, args.enabled, args.Left, args.Top, args.Width, args.Height, args.Label, args.Color, args.Image, args.HoveringText, args.Disabled, args.NoBorder, args.FillColor, args.FontSize, args.ShiftText, args.options)
}

export const KDMouseWheel = KDMouseWheel;
export const KDFunctionOptionsScroll = KDFunctionOptionsScroll;
export const KDFunctionPerksScroll = KDFunctionPerksScroll;
export const KDFunctionQuestScroll = KDFunctionQuestScroll;
export const KDFunctionCollectionScroll = KDFunctionCollectionScroll;
export const KDFunctionSpellPageScroll = KDFunctionSpellPageScroll;
export const KDFunctionMagicPageScroll = KDFunctionMagicPageScroll;
export const KDFunctionMagicSpellPageScroll = KDFunctionMagicSpellPageScroll;
export const KDFunctionInventoryScroll = KDFunctionInventoryScroll;
export const KDFunctionMsgScroll = KDFunctionMsgScroll;
export const KDFunctionRestraintIndexScroll = KDFunctionRestraintIndexScroll;
export const KDFunctionDialogueScroll = KDFunctionDialogueScroll;
export const KDFunctionShopScroll = KDFunctionShopScroll;
export const KDProcessButtonScroll = KDProcessButtonScroll;
export const KDProcessButtons = KDProcessButtons;
export const KDClickButton = KDClickButton;
export const MouseInKD = MouseInKD;
export const KinkyDungeonGetTraitsCount = KinkyDungeonGetTraitsCount;
export const KDSendTrait = KDSendTrait;
export const KDSendSpell = KDSendSpell;
export const KDSendSpellCast = KDSendSpellCast;
export const KDSendWeapon = KDSendWeapon;
export const KDSendStatus = KDSendStatus;
export const KDSendEvent = KDSendEvent;
export const KinkyDungeonLoadStats = KinkyDungeonLoadStats;
export const KDInitializeJourney = KDInitializeJourney;
export const KDCommitKeybindings = KDCommitKeybindings;
export const KinkyDungeonStartNewGame = KinkyDungeonStartNewGame;
export const KDUpdatePlugSettings = KDUpdatePlugSettings;
export const KDUpdateHardMode = KDUpdateHardMode;
export const KinkyDungeonHandleClick = KinkyDungeonHandleClick;
export const KinkyDungeonClick = KinkyDungeonClick;
export const KDClick = KDClick;
export const KinkyDungeonExit = KinkyDungeonExit;
export const KinkyDungeonKeyDown = KinkyDungeonKeyDown;
export const KinkyDungeonGenerateSaveData = KinkyDungeonGenerateSaveData;
export const KinkyDungeonSaveGame = KinkyDungeonSaveGame;
export const KinkyDungeonCompressSave = KinkyDungeonCompressSave;
export const KinkyDungeonLoadGame = KinkyDungeonLoadGame;
export const KDrandomizeSeed = KDrandomizeSeed;
export const KDsetSeed = KDsetSeed;
export const xmur3 = xmur3;
export const sfc32 = sfc32;
export const AudioPlayInstantSoundKD = AudioPlayInstantSoundKD;
export const hashCode = hashCode;
export const TextGetKD = TextGetKD;
export const KinkyDungeonCheckPlayerRefresh = KinkyDungeonCheckPlayerRefresh;
export const CJKcheck = CJKcheck;
export const KinkyDungeonGetCanvas = KinkyDungeonGetCanvas;
export const KDDrawGameSetupTabs = KDDrawGameSetupTabs;
export const DecompressB64 = DecompressB64;
export const KDDrawToggleTabs = KDDrawToggleTabs;
export const KDModsAfterLoad = KDModsAfterLoad;
export const KDRandom = KDRandom;
export const KDDefaultMapData = KDDefaultMapData;
export const KinkyDungeonEffectTilesSet = KinkyDungeonEffectTilesSet;
export const KinkyDungeonEffectTilesGet = KinkyDungeonEffectTilesGet;
export const KinkyDungeonTilesSet = KinkyDungeonTilesSet;
export const KinkyDungeonTilesGet = KinkyDungeonTilesGet;
export const KinkyDungeonTilesDelete = KinkyDungeonTilesDelete;
export const KinkyDungeonSkinSet = KinkyDungeonSkinSet;
export const KinkyDungeonSkinGet = KinkyDungeonSkinGet;
export const KinkyDungeonSkinDelete = KinkyDungeonSkinDelete;
export const KDAlreadyOpened = KDAlreadyOpened;
export const KinkyDungeonPlaySound = KinkyDungeonPlaySound;
export const KinkyDungeonSetCheckPoint = KinkyDungeonSetCheckPoint;
export const KinkyDungeonNewGamePlus = KinkyDungeonNewGamePlus;
export const KDResetData = KDResetData;
export const KDResetEventData = KDResetEventData;
export const KinkyDungeonInitialize = KinkyDungeonInitialize;
export const KDInitCanvas = KDInitCanvas;
export const KDCreateBoringness = KDCreateBoringness;
export const KDGetMapSize = KDGetMapSize;
export const KDGetWorldMapLocation = KDGetWorldMapLocation;
export const KDCreateWorldLocation = KDCreateWorldLocation;
export const KDSaveRoom = KDSaveRoom;
export const KDUnPackEnemies = KDUnPackEnemies;
export const KDPackEnemies = KDPackEnemies;

interface IKDLoadMapFromWorldParameters {
    x: number;
    y: number;
    room: string;
    direction: number;
    constantX: boolean;
    ignoreAware?: boolean;
}

export function PackedKDLoadMapFromWorld(args: IKDLoadMapFromWorldParameters) {
    KDLoadMapFromWorld(args.x, args.y, args.room, args.direction, args.constantX, args.ignoreAware)
}

export const KDPlacePlayerBasedOnDirection = KDPlacePlayerBasedOnDirection;
export const KDInitTempValues = KDInitTempValues;

interface IKinkyDungeonCreateMapParameters {
    MapParams: floorParams;
    RoomType: string;
    MapMod: string;
    Floor: number;
    testPlacement?: boolean;
    seed?: boolean;
    forceFaction?: string;
    worldLocation?: { x: number; y: number; };
    useExisting?: boolean;
    origMapType?: string;
    direction?: number;
    forceEscape?: string;
}

export function PackedKinkyDungeonCreateMap(args: IKinkyDungeonCreateMapParameters) {
    KinkyDungeonCreateMap(args.MapParams, args.RoomType, args.MapMod, args.Floor, args.testPlacement, args.seed, args.forceFaction, args.worldLocation, args.useExisting, args.origMapType, args.direction, args.forceEscape)
}

export const KinkyDungeonGenNavMap = KinkyDungeonGenNavMap;
export const KDLowPriorityNavMesh = KDLowPriorityNavMesh;
export const KinkyDungeonGetAccessible = KinkyDungeonGetAccessible;
export const KinkyDungeonGetAccessibleRoom = KinkyDungeonGetAccessibleRoom;
export const KinkyDungeonIsAccessible = KinkyDungeonIsAccessible;
export const KinkyDungeonIsReachable = KinkyDungeonIsReachable;
export const KinkyDungeonGetAllies = KinkyDungeonGetAllies;
export const KDCanBringAlly = KDCanBringAlly;

interface IKDChooseFactionsParameters {
    factionList: any;
    Floor: any;
    Tags: any;
    BonusTags: any;
    Set: any;
}

export function PackedKDChooseFactions(args: IKDChooseFactionsParameters) {
    KDChooseFactions(args.factionList, args.Floor, args.Tags, args.BonusTags, args.Set)
}

interface IKinkyDungeonPlaceEnemiesParameters {
    spawnPoints: any;
    InJail: any;
    Tags: any;
    BonusTags: any;
    Floor: any;
    width: any;
    height: any;
    altRoom: any;
    randomFactions: any;
    factionEnemy: any;
}

export function PackedKinkyDungeonPlaceEnemies(args: IKinkyDungeonPlaceEnemiesParameters) {
    KinkyDungeonPlaceEnemies(args.spawnPoints, args.InJail, args.Tags, args.BonusTags, args.Floor, args.width, args.height, args.altRoom, args.randomFactions, args.factionEnemy)
}

export const KinkyDungeonGetClosestSpecialAreaDist = KinkyDungeonGetClosestSpecialAreaDist;

interface IKinkyDungeonCreateRectangleParameters {
    Left: any;
    Top: any;
    Width: any;
    Height: any;
    Border: any;
    Fill: any;
    Padding: any;
    OffLimits: any;
    NoWander: any;
    flexCorner: any;
    Jail: any;
}

export function PackedKinkyDungeonCreateRectangle(args: IKinkyDungeonCreateRectangleParameters) {
    KinkyDungeonCreateRectangle(args.Left, args.Top, args.Width, args.Height, args.Border, args.Fill, args.Padding, args.OffLimits, args.NoWander, args.flexCorner, args.Jail)
}

interface IKinkyDungeonPlaceStairsParameters {
    startpos: any;
    width: any;
    height: any;
    noStairs: any;
    nostartstairs: any;
    origMapType: any;
}

export function PackedKinkyDungeonPlaceStairs(args: IKinkyDungeonPlaceStairsParameters) {
    KinkyDungeonPlaceStairs(args.startpos, args.width, args.height, args.noStairs, args.nostartstairs, args.origMapType)
}

interface IKinkyDungeonSkinAreaParameters {
    skin: any;
    X: any;
    Y: any;
    Radius: any;
    NoStairs: any;
}

export function PackedKinkyDungeonSkinArea(args: IKinkyDungeonSkinAreaParameters) {
    KinkyDungeonSkinArea(args.skin, args.X, args.Y, args.Radius, args.NoStairs)
}

interface IKinkyDungeonPlaceChestsParameters {
    params: any;
    chestlist: any;
    spawnPoints: any;
    shrinelist: any;
    treasurechance: any;
    treasurecount: any;
    rubblechance: any;
    Floor: any;
    width: any;
    height: any;
}

export function PackedKinkyDungeonPlaceChests(args: IKinkyDungeonPlaceChestsParameters) {
    KinkyDungeonPlaceChests(args.params, args.chestlist, args.spawnPoints, args.shrinelist, args.treasurechance, args.treasurecount, args.rubblechance, args.Floor, args.width, args.height)
}

export const KinkyDungeonPlaceLore = KinkyDungeonPlaceLore;
export const KinkyDungeonPlaceHeart = KinkyDungeonPlaceHeart;

interface IKinkyDungeonPlaceShrinesParameters {
    chestlist: any;
    shrinelist: any;
    shrinechance: any;
    shrineTypes: any;
    shrinecount: any;
    shrinefilter: any;
    ghostchance: any;
    manaChance: any;
    orbcount: any;
    filterTypes: any;
    Floor: any;
    width: any;
    height: any;
    allowQuests: any;
}

export function PackedKinkyDungeonPlaceShrines(args: IKinkyDungeonPlaceShrinesParameters) {
    KinkyDungeonPlaceShrines(args.chestlist, args.shrinelist, args.shrinechance, args.shrineTypes, args.shrinecount, args.shrinefilter, args.ghostchance, args.manaChance, args.orbcount, args.filterTypes, args.Floor, args.width, args.height, args.allowQuests)
}

interface IKinkyDungeonPlaceChargersParameters {
    chargerlist: any;
    chargerchance: any;
    litchargerchance: any;
    chargercount: any;
    Floor: any;
    width: any;
    height: any;
}

export function PackedKinkyDungeonPlaceChargers(args: IKinkyDungeonPlaceChargersParameters) {
    KinkyDungeonPlaceChargers(args.chargerlist, args.chargerchance, args.litchargerchance, args.chargercount, args.Floor, args.width, args.height)
}

export const KinkyDungeonGenerateShrine = KinkyDungeonGenerateShrine;

interface IKinkyDungeonPlaceSpecialTilesParameters {
    gaschance: any;
    gasType: any;
    Floor: any;
    width: any;
    height: any;
}

export function PackedKinkyDungeonPlaceSpecialTiles(args: IKinkyDungeonPlaceSpecialTilesParameters) {
    KinkyDungeonPlaceSpecialTiles(args.gaschance, args.gasType, args.Floor, args.width, args.height)
}

export const KinkyDungeonPlaceBrickwork = KinkyDungeonPlaceBrickwork;

interface IKinkyDungeonPlaceTrapsParameters {
    traps: any;
    traptypes: any;
    trapchance: any;
    doorlocktrapchance: any;
    Floor: any;
    width: any;
    height: any;
}

export function PackedKinkyDungeonPlaceTraps(args: IKinkyDungeonPlaceTrapsParameters) {
    KinkyDungeonPlaceTraps(args.traps, args.traptypes, args.trapchance, args.doorlocktrapchance, args.Floor, args.width, args.height)
}

export const KinkyDungeonPlacePatrols = KinkyDungeonPlacePatrols;
export const KDGetEffLevel = KDGetEffLevel;
export const KDRandomizeRedLock = KDRandomizeRedLock;

interface IKDGetLockListParameters {
    Guaranteed?: boolean;
    Floor?: number;
    AllowGold?: boolean;
    Type?: string;
    Data?: any;
}

export function PackedKDGetLockList(args: IKDGetLockListParameters) {
    KDGetLockList(args.Guaranteed, args.Floor, args.AllowGold, args.Type, args.Data)
}

interface IKinkyDungeonGenerateLockParameters {
    Guaranteed?: boolean;
    Floor?: number;
    AllowGold?: boolean;
    Type?: string;
    Data?: any;
}

export function PackedKinkyDungeonGenerateLock(args: IKinkyDungeonGenerateLockParameters) {
    KinkyDungeonGenerateLock(args.Guaranteed, args.Floor, args.AllowGold, args.Type, args.Data)
}

interface IKinkyDungeonPlaceDoorsParameters {
    doorchance: any;
    doortrapchance: any;
    nodoorchance: any;
    doorlockchance: any;
    trapChance: any;
    grateChance: any;
    Floor: any;
    width: any;
    height: any;
    placeMode?: number;
}

export function PackedKinkyDungeonPlaceDoors(args: IKinkyDungeonPlaceDoorsParameters) {
    KinkyDungeonPlaceDoors(args.doorchance, args.doortrapchance, args.nodoorchance, args.doorlockchance, args.trapChance, args.grateChance, args.Floor, args.width, args.height, args.placeMode)
}

interface IKinkyDungeonReplaceDoodadsParameters {
    Chance: any;
    barchance: any;
    wallRubblechance: any;
    wallhookchance: any;
    ceilinghookchance: any;
    width: any;
    height: any;
    altType: any;
}

export function PackedKinkyDungeonReplaceDoodads(args: IKinkyDungeonReplaceDoodadsParameters) {
    KinkyDungeonReplaceDoodads(args.Chance, args.barchance, args.wallRubblechance, args.wallhookchance, args.ceilinghookchance, args.width, args.height, args.altType)
}

interface IKinkyDungeonPlaceFurnitureParameters {
    barrelChance: any;
    cageChance: any;
    width: any;
    height: any;
    altType: any;
}

export function PackedKinkyDungeonPlaceFurniture(args: IKinkyDungeonPlaceFurnitureParameters) {
    KinkyDungeonPlaceFurniture(args.barrelChance, args.cageChance, args.width, args.height, args.altType)
}

export const KinkyDungeonPlaceFood = KinkyDungeonPlaceFood;

interface IKinkyDungeonPlaceTorchesParameters {
    torchchance: any;
    torchlitchance: any;
    torchchanceboring: any;
    width: any;
    height: any;
    altType: any;
    torchreplace: any;
}

export function PackedKinkyDungeonPlaceTorches(args: IKinkyDungeonPlaceTorchesParameters) {
    KinkyDungeonPlaceTorches(args.torchchance, args.torchlitchance, args.torchchanceboring, args.width, args.height, args.altType, args.torchreplace)
}

export const KinkyDungeonReplaceVert = KinkyDungeonReplaceVert;
export const KinkyDungeonMazeWalls = KinkyDungeonMazeWalls;
export const KinkyDungeonMapSet = KinkyDungeonMapSet;
export const KinkyDungeonMapSetForce = KinkyDungeonMapSetForce;
export const KinkyDungeonBoringGet = KinkyDungeonBoringGet;
export const KinkyDungeonBoringSet = KinkyDungeonBoringSet;
export const KinkyDungeonMapGet = KinkyDungeonMapGet;
export const KinkyDungeonVisionSet = KinkyDungeonVisionSet;
export const KinkyDungeonBrightnessSet = KinkyDungeonBrightnessSet;
export const KinkyDungeonColorSet = KinkyDungeonColorSet;
export const KinkyDungeonShadowSet = KinkyDungeonShadowSet;
export const KinkyDungeonVisionGet = KinkyDungeonVisionGet;
export const KinkyDungeonBrightnessGet = KinkyDungeonBrightnessGet;
export const KinkyDungeonColorGet = KinkyDungeonColorGet;
export const KinkyDungeonShadowGet = KinkyDungeonShadowGet;
export const KinkyDungeonFogGet = KinkyDungeonFogGet;
export const KinkyDungeonGetDirection = KinkyDungeonGetDirection;
export const KinkyDungeonGetDirectionRandom = KinkyDungeonGetDirectionRandom;
export const KinkyDungeonControlsEnabled = KinkyDungeonControlsEnabled;

interface IKDStartSpellcastParameters {
    tx: any;
    ty: any;
    SpellToCast: any;
    enemy: any;
    player: any;
    bullet: any;
    data: any;
}

export function PackedKDStartSpellcast(args: IKDStartSpellcastParameters) {
    KDStartSpellcast(args.tx, args.ty, args.SpellToCast, args.enemy, args.player, args.bullet, args.data)
}

export const KinkyDungeonClickGame = KinkyDungeonClickGame;
export const KinkyDungeonGetMovable = KinkyDungeonGetMovable;
export const KinkyDungeonListenKeyMove = KinkyDungeonListenKeyMove;
export const KinkyDungeonGameKeyDown = KinkyDungeonGameKeyDown;
export const KinkyDungeonGameKeyUp = KinkyDungeonGameKeyUp;

interface IKinkyDungeonSendTextMessageParameters {
    priority: any;
    text: any;
    color: any;
    time: any;
    noPush: any;
    noDupe: any;
    entity: any;
}

export function PackedKinkyDungeonSendTextMessage(args: IKinkyDungeonSendTextMessageParameters) {
    KinkyDungeonSendTextMessage(args.priority, args.text, args.color, args.time, args.noPush, args.noDupe, args.entity)
}

interface IKinkyDungeonSendActionMessageParameters {
    priority: any;
    text: any;
    color: any;
    time: any;
    noPush: any;
    noDupe: any;
    entity: any;
}

export function PackedKinkyDungeonSendActionMessage(args: IKinkyDungeonSendActionMessageParameters) {
    KinkyDungeonSendActionMessage(args.priority, args.text, args.color, args.time, args.noPush, args.noDupe, args.entity)
}

export const KDAttackCost = KDAttackCost;
export const KinkyDungeonLaunchAttack = KinkyDungeonLaunchAttack;
export const KinkyDungeonMove = KinkyDungeonMove;
export const KinkyDungeonWaitMessage = KinkyDungeonWaitMessage;
export const KinkyDungeonMoveTo = KinkyDungeonMoveTo;
export const KDBalanceSprint = KDBalanceSprint;
export const KDCanSprint = KDCanSprint;
export const KinkyDungeonAdvanceTime = KinkyDungeonAdvanceTime;
export const KDGetItemEventCache = KDGetItemEventCache;
export const KinkyDungeonTargetTileMsg = KinkyDungeonTargetTileMsg;

interface IKDAddAppearanceParameters {
    C: Character;
    Group: string;
    ItemAsset: any;
    NewColor: string | string[];
    DifficultyFactor?: number;
    ItemMemberNumber?: number;
    Refresh?: boolean;
    item?: item;
}

export function PackedKDAddAppearance(args: IKDAddAppearanceParameters) {
    KDAddAppearance(args.C, args.Group, args.ItemAsset, args.NewColor, args.DifficultyFactor, args.ItemMemberNumber, args.Refresh, args.item)
}

interface IKDAddModelParameters {
    C: Character;
    Group: string;
    ItemModel: Model;
    NewColor: string | string[];
    filters: Record<string, LayerFilter>;
    item?: item;
}

export function PackedKDAddModel(args: IKDAddModelParameters) {
    KDAddModel(args.C, args.Group, args.ItemModel, args.NewColor, args.filters, args.item)
}

export const KinkyDungeonCloseDoor = KinkyDungeonCloseDoor;
export const KDGetEnemyCache = KDGetEnemyCache;
export const KDTile = KDTile;
export const KDTileDelete = KDTileDelete;
export const KDStunTurns = KDStunTurns;
export const KDKneelTurns = KDKneelTurns;
export const KDGetByWeight = KDGetByWeight;
export const KDGetAltType = KDGetAltType;
export const KDCanPassEnemy = KDCanPassEnemy;
export const KDIsInBounds = KDIsInBounds;
export const KDSprintCost = KDSprintCost;
export const KDSetMapFlag = KDSetMapFlag;
export const KDUpdateForceOutfit = KDUpdateForceOutfit;
export const KDGenerateBaseTraffic = KDGenerateBaseTraffic;
export const KDPruneWorld = KDPruneWorld;
export const KDTurnToFace = KDTurnToFace;
export const KDStopAllVibeSounds = KDStopAllVibeSounds;
export const KDUpdateVibeSound = KDUpdateVibeSound;
export const KDUpdateVibeSounds = KDUpdateVibeSounds;
export const KDSumVibeLocations = KDSumVibeLocations;
export const KDGetVibeLocation = KDGetVibeLocation;
export const KDRandomizeVibeSound = KDRandomizeVibeSound;

interface IKinkyDungeonStartVibrationParameters {
    source: string;
    name: string;
    locations: any;
    intensity: number;
    duration: number;
    numLoops?: number;
    denyTime?: number;
    denialsLeft?: number;
    edgeTime?: number;
    edgeOnly?: boolean;
    alwaysDeny?: boolean;
    denialChance?: number;
    denialChanceLikely?: number;
    tickEdgeAtMaxArousal?: boolean;
    vibeMods?: VibeMod[];
}

export function PackedKinkyDungeonStartVibration(args: IKinkyDungeonStartVibrationParameters) {
    KinkyDungeonStartVibration(args.source, args.name, args.locations, args.intensity, args.duration, args.numLoops, args.denyTime, args.denialsLeft, args.edgeTime, args.edgeOnly, args.alwaysDeny, args.denialChance, args.denialChanceLikely, args.tickEdgeAtMaxArousal, args.vibeMods)
}

export const KDIsVibeCD = KDIsVibeCD;

interface IKinkyDungeonAddVibeModifierParameters {
    source: any;
    name: any;
    location: any;
    intensityMod: any;
    duration: any;
    intensitySetpoint: any;
    edgeOnly: any;
    forceDeny: any;
    bypassDeny: any;
    bypassEdge: any;
    extendDuration: any;
    denyChanceMod: any;
    denyChanceLikelyMod: any;
}

export function PackedKinkyDungeonAddVibeModifier(args: IKinkyDungeonAddVibeModifierParameters) {
    KinkyDungeonAddVibeModifier(args.source, args.name, args.location, args.intensityMod, args.duration, args.intensitySetpoint, args.edgeOnly, args.forceDeny, args.bypassDeny, args.bypassEdge, args.extendDuration, args.denyChanceMod, args.denyChanceLikelyMod)
}

export const KinkyDungeonGetDenyChance = KinkyDungeonGetDenyChance;
export const KinkyDungeonVibratorsDeny = KinkyDungeonVibratorsDeny;
export const KinkyDungeonCalculateVibeLevel = KinkyDungeonCalculateVibeLevel;
export const KinkyDungeonEndVibration = KinkyDungeonEndVibration;
export const KinkyDungeonCanOrgasm = KinkyDungeonCanOrgasm;
export const KDChillWalk = KDChillWalk;
export const KinkyDungeonAltFloor = KinkyDungeonAltFloor;

interface IKinkyDungeonCreateMazeParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateMaze(args: IKinkyDungeonCreateMazeParameters) {
    KinkyDungeonCreateMaze(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateCalderaParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateCaldera(args: IKinkyDungeonCreateCalderaParameters) {
    KinkyDungeonCreateCaldera(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateTileMazeParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: { params: floorParams; chestlist: any[]; traps: any[]; shrinelist: any[]; chargerlist: any[]; spawnpoints: any[]; };
}

export function PackedKinkyDungeonCreateTileMaze(args: IKinkyDungeonCreateTileMazeParameters) {
    KinkyDungeonCreateTileMaze(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateRoomParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateRoom(args: IKinkyDungeonCreateRoomParameters) {
    KinkyDungeonCreateRoom(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateDollRoomParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateDollRoom(args: IKinkyDungeonCreateDollRoomParameters) {
    KinkyDungeonCreateDollRoom(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateDemonTransitionParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateDemonTransition(args: IKinkyDungeonCreateDemonTransitionParameters) {
    KinkyDungeonCreateDemonTransition(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateDollmakerParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateDollmaker(args: IKinkyDungeonCreateDollmakerParameters) {
    KinkyDungeonCreateDollmaker(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateWardenParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateWarden(args: IKinkyDungeonCreateWardenParameters) {
    KinkyDungeonCreateWarden(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateTunnelParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateTunnel(args: IKinkyDungeonCreateTunnelParameters) {
    KinkyDungeonCreateTunnel(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreatePerkRoomParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreatePerkRoom(args: IKinkyDungeonCreatePerkRoomParameters) {
    KinkyDungeonCreatePerkRoom(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateJourneyFloorParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateJourneyFloor(args: IKinkyDungeonCreateJourneyFloorParameters) {
    KinkyDungeonCreateJourneyFloor(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateShopStartParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateShopStart(args: IKinkyDungeonCreateShopStartParameters) {
    KinkyDungeonCreateShopStart(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateElevatorRoomParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateElevatorRoom(args: IKinkyDungeonCreateElevatorRoomParameters) {
    KinkyDungeonCreateElevatorRoom(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateTestTileParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateTestTile(args: IKinkyDungeonCreateTestTileParameters) {
    KinkyDungeonCreateTestTile(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

interface IKinkyDungeonCreateTutorialParameters {
    POI: any;
    VisitedRooms: any;
    width: any;
    height: any;
    openness: any;
    density: any;
    hallopenness: any;
    data: any;
}

export function PackedKinkyDungeonCreateTutorial(args: IKinkyDungeonCreateTutorialParameters) {
    KinkyDungeonCreateTutorial(args.POI, args.VisitedRooms, args.width, args.height, args.openness, args.density, args.hallopenness, args.data)
}

export const KDGenerateLairNameFromEnemy = KDGenerateLairNameFromEnemy;
export const KDGetPersistentNPC = KDGetPersistentNPC;
export const KDProcessCustomPatron = KDProcessCustomPatron;
export const KDProcessCustomPatronPet = KDProcessCustomPatronPet;
export const KDGetMapGenList = KDGetMapGenList;
export const KDGetSideRoom = KDGetSideRoom;
export const KinkyDungeonBossFloor = KinkyDungeonBossFloor;
export const KDGetPerkCost = KDGetPerkCost;
export const KinkyDungeonGetStatPoints = KinkyDungeonGetStatPoints;
export const KinkyDungeonCanPickStat = KinkyDungeonCanPickStat;
export const KDValidatePerk = KDValidatePerk;
export const KDPerkBlocked = KDPerkBlocked;
export const KinkyDungeonCanUnPickStat = KinkyDungeonCanUnPickStat;
export const KinkyDungeonDrawPerks = KinkyDungeonDrawPerks;

interface IdrawVertListParameters {
    list: any[];
    x: number;
    y: number;
    w: number;
    h: number;
    max: number;
    fontSize: number;
    clickfnc: (any: any) => (any: any) => boolean;
    prefix: string;
}

export function PackeddrawVertList(args: IdrawVertListParameters) {
    drawVertList(args.list, args.x, args.y, args.w, args.h, args.max, args.fontSize, args.clickfnc, args.prefix)
}

interface IdrawHorizListParameters {
    list: any[];
    x: number;
    y: number;
    w: number;
    h: number;
    max: number;
    fontSize: number;
    clickfnc: (any: any) => (any: any) => boolean;
    prefix: string;
    reverse: boolean;
}

export function PackeddrawHorizList(args: IdrawHorizListParameters) {
    drawHorizList(args.list, args.x, args.y, args.w, args.h, args.max, args.fontSize, args.clickfnc, args.prefix, args.reverse)
}

export const KDGetRandomPerks = KDGetRandomPerks;
export const KDGetPerkShrineBondage = KDGetPerkShrineBondage;
export const KinkyDungeonCheckProjectileClearance = KinkyDungeonCheckProjectileClearance;

interface IKinkyDungeonCheckPathCountParameters {
    x1: any;
    y1: any;
    x2: any;
    y2: any;
    allowBars: any;
    blockEnemies: any;
    maxFails: any;
    blockOnlyLOSBlock: any;
}

export function PackedKinkyDungeonCheckPathCount(args: IKinkyDungeonCheckPathCountParameters) {
    KinkyDungeonCheckPathCount(args.x1, args.y1, args.x2, args.y2, args.allowBars, args.blockEnemies, args.maxFails, args.blockOnlyLOSBlock)
}

interface IKinkyDungeonCheckPathParameters {
    x1: any;
    y1: any;
    x2: any;
    y2: any;
    allowBars: any;
    blockEnemies: any;
    maxFails: number;
    blockOnlyLOSBlock: any;
}

export function PackedKinkyDungeonCheckPath(args: IKinkyDungeonCheckPathParameters) {
    KinkyDungeonCheckPath(args.x1, args.y1, args.x2, args.y2, args.allowBars, args.blockEnemies, args.maxFails, args.blockOnlyLOSBlock)
}

export const KinkyDungeonResetFog = KinkyDungeonResetFog;

interface IKinkyDungeonMakeBrightnessMapParameters {
    width: any;
    height: any;
    mapBrightness: any;
    Lights: any;
    delta: any;
}

export function PackedKinkyDungeonMakeBrightnessMap(args: IKinkyDungeonMakeBrightnessMapParameters) {
    KinkyDungeonMakeBrightnessMap(args.width, args.height, args.mapBrightness, args.Lights, args.delta)
}

export const KDAvgColor = KDAvgColor;

interface IKinkyDungeonMakeVisionMapParameters {
    width: any;
    height: any;
    Viewports: any;
    Lights: any;
    delta: any;
    mapBrightness: any;
}

export function PackedKinkyDungeonMakeVisionMap(args: IKinkyDungeonMakeVisionMapParameters) {
    KinkyDungeonMakeVisionMap(args.width, args.height, args.Viewports, args.Lights, args.delta, args.mapBrightness)
}

interface IKDDrawFogParameters {
    CamX: any;
    CamY: any;
    CamX_offset: any;
    CamY_offset: any;
    CamX_offsetVis: any;
    CamY_offsetVis: any;
}

export function PackedKDDrawFog(args: IKDDrawFogParameters) {
    KDDrawFog(args.CamX, args.CamY, args.CamX_offset, args.CamY_offset, args.CamX_offsetVis, args.CamY_offsetVis)
}

export const KDMinimapWidth = KDMinimapWidth;
export const KDMinimapHeight = KDMinimapHeight;
export const KDUpdateMinimapTarget = KDUpdateMinimapTarget;

interface IKDRenderMinimapParameters {
    x: number;
    y: number;
    w: number;
    h: number;
    scale: number;
    alpha: number;
    gridborders: boolean;
    blackMap: boolean;
}

export function PackedKDRenderMinimap(args: IKDRenderMinimapParameters) {
    KDRenderMinimap(args.x, args.y, args.w, args.h, args.scale, args.alpha, args.gridborders, args.blackMap)
}

export const KDAllowFog = KDAllowFog;

interface IKDQuestListParameters {
    count: any;
    mods: any;
    RoomType: any;
    MapMod: any;
    data: any;
}

export function PackedKDQuestList(args: IKDQuestListParameters) {
    KDQuestList(args.count, args.mods, args.RoomType, args.MapMod, args.data)
}

export const KDQuestWorldgenStart = KDQuestWorldgenStart;
export const KDQuestTick = KDQuestTick;
export const KDRemoveQuest = KDRemoveQuest;
export const KDAddQuest = KDAddQuest;
export const KDHasQuest = KDHasQuest;
export const KinkyDungeonDrawQuest = KinkyDungeonDrawQuest;
export const KDGetQuestData = KDGetQuestData;
export const KDSetQuestData = KDSetQuestData;

interface IKDGenQuestTemplateParameters {
    Name: string;
    Icon: string;
    Goddess: string;
    spawnFunction: (Goddess: any, Flag: any) => void;
    restraintsCountMult: number;
    restraintsTags: string[];
    Loot: any;
    Rep?: number;
}

export function PackedKDGenQuestTemplate(args: IKDGenQuestTemplateParameters) {
    KDGenQuestTemplate(args.Name, args.Icon, args.Goddess, args.spawnFunction, args.restraintsCountMult, args.restraintsTags, args.Loot, args.Rep)
}

export const KinkyDungeonAddLostItems = KinkyDungeonAddLostItems;

interface IKinkyDungeonLootParameters {
    Level: any;
    Index: any;
    Type: any;
    roll: any;
    tile: any;
    returnOnly: any;
    noTrap: any;
    minWeight?: number;
    minWeightFallback?: boolean;
}

export function PackedKinkyDungeonLoot(args: IKinkyDungeonLootParameters) {
    KinkyDungeonLoot(args.Level, args.Index, args.Type, args.roll, args.tile, args.returnOnly, args.noTrap, args.minWeight, args.minWeightFallback)
}

export const KinkyDungeonLootEvent = KinkyDungeonLootEvent;
export const KinkyDungeonAddGold = KinkyDungeonAddGold;

interface IKDSpawnLootTrapParameters {
    x: any;
    y: any;
    trap: any;
    mult: any;
    duration: any;
}

export function PackedKDSpawnLootTrap(args: IKDSpawnLootTrapParameters) {
    KDSpawnLootTrap(args.x, args.y, args.trap, args.mult, args.duration)
}

interface IKDGenChestTrapParameters {
    guaranteed: any;
    x: any;
    y: any;
    chestType: any;
    lock: any;
    noTrap: any;
}

export function PackedKDGenChestTrap(args: IKDGenChestTrapParameters) {
    KDGenChestTrap(args.guaranteed, args.x, args.y, args.chestType, args.lock, args.noTrap)
}

export const KDTriggerLoot = KDTriggerLoot;
export const KDGetWeightedString = KDGetWeightedString;
export const KDCanCurse = KDCanCurse;
export const KDSummonCurseTrap = KDSummonCurseTrap;
export const KinkyDungeonRefreshEnemiesCache = KinkyDungeonRefreshEnemiesCache;
export const KinkyDungeonGetEnemyByName = KinkyDungeonGetEnemyByName;
export const KinkyDungeonGetEnemyByName = KinkyDungeonGetEnemyByName;

interface IKinkyDungeonNearestJailPointParameters {
    x: number;
    y: number;
    filter?: string[];
    any?: boolean;
    qualified?: boolean;
}

export function PackedKinkyDungeonNearestJailPoint(args: IKinkyDungeonNearestJailPointParameters) {
    KinkyDungeonNearestJailPoint(args.x, args.y, args.filter, args.any, args.qualified)
}

export const KDLockNearbyJailDoors = KDLockNearbyJailDoors;
export const KinkyDungeonRandomJailPoint = KinkyDungeonRandomJailPoint;
export const KinkyDungeonNearestPatrolPoint = KinkyDungeonNearestPatrolPoint;
export const KinkyDungeonSetFlag = KinkyDungeonSetFlag;
export const KinkyDungeonUpdateFlags = KinkyDungeonUpdateFlags;
export const KinkyDungeonGetPatrolPoint = KinkyDungeonGetPatrolPoint;
export const KDGetBindAmp = KDGetBindAmp;
export const KDHelpless = KDHelpless;
export const KDIsHopeless = KDIsHopeless;

interface IKinkyDungeonNearestPlayerParameters {
    enemy: any;
    requireVision: any;
    decoy: any;
    visionRadius: any;
    AI_Data: any;
}

export function PackedKinkyDungeonNearestPlayer(args: IKinkyDungeonNearestPlayerParameters) {
    KinkyDungeonNearestPlayer(args.enemy, args.requireVision, args.decoy, args.visionRadius, args.AI_Data)
}

export const KDEnemyHidden = KDEnemyHidden;
export const KinkyDungeonInDanger = KinkyDungeonInDanger;
export const KDAmbushAI = KDAmbushAI;
export const KinkyDungeonDrawEnemies = KinkyDungeonDrawEnemies;

interface IKDDrawEnemySpriteParameters {
    board: any;
    enemy: entity;
    tx: any;
    ty: any;
    CamX: any;
    CamY: any;
    StaticView: any;
    zIndex?: number;
    id?: string;
}

export function PackedKDDrawEnemySprite(args: IKDDrawEnemySpriteParameters) {
    KDDrawEnemySprite(args.board, args.enemy, args.tx, args.ty, args.CamX, args.CamY, args.StaticView, args.zIndex, args.id)
}

export const KDAnimEnemy = KDAnimEnemy;
export const KDEnemyHasFlag = KDEnemyHasFlag;
export const KinkyDungeonDrawEnemiesStatus = KinkyDungeonDrawEnemiesStatus;
export const KinkyDungeonDrawEnemiesWarning = KinkyDungeonDrawEnemiesWarning;

interface IKinkyDungeonBarParameters {
    x: any;
    y: any;
    w: any;
    h: any;
    value: any;
    foreground?: string;
    background?: string;
    orig?: any;
    origColor?: string;
    notches?: any;
    notchcolor?: string;
    notchbg?: string;
    zIndex?: number;
}

export function PackedKinkyDungeonBar(args: IKinkyDungeonBarParameters) {
    KinkyDungeonBar(args.x, args.y, args.w, args.h, args.value, args.foreground, args.background, args.orig, args.origColor, args.notches, args.notchcolor, args.notchbg, args.zIndex)
}

interface IKinkyDungeonBarToParameters {
    canvas: any;
    x: any;
    y: any;
    w: any;
    h: any;
    value: any;
    foreground?: string;
    background?: string;
    orig?: any;
    origColor?: string;
    notches?: any;
    notchcolor?: string;
    notchbg?: string;
    zIndex?: number;
}

export function PackedKinkyDungeonBarTo(args: IKinkyDungeonBarToParameters) {
    KinkyDungeonBarTo(args.canvas, args.x, args.y, args.w, args.h, args.value, args.foreground, args.background, args.orig, args.origColor, args.notches, args.notchcolor, args.notchbg, args.zIndex)
}

export const KDCanSeeEnemy = KDCanSeeEnemy;
export const KDMaxEnemyViewDist = KDMaxEnemyViewDist;
export const KDGetEnemyStruggleMod = KDGetEnemyStruggleMod;
export const KDGetEnemyDistractRate = KDGetEnemyDistractRate;
export const KDGetEnemyDistractionDamage = KDGetEnemyDistractionDamage;
export const KDGetEnemyReleaseDamage = KDGetEnemyReleaseDamage;

interface IKDEaseValueParameters {
    delta: number;
    currentval: number;
    targetval: number;
    rate: number;
    minrate: number;
    eps?: number;
}

export function PackedKDEaseValue(args: IKDEaseValueParameters) {
    KDEaseValue(args.delta, args.currentval, args.targetval, args.rate, args.minrate, args.eps)
}

export const KDGetMaxShield = KDGetMaxShield;
export const KDGetShieldRegen = KDGetShieldRegen;

interface IKinkyDungeonDrawEnemiesHPParameters {
    delta: any;
    canvasOffsetX: any;
    canvasOffsetY: any;
    CamX: any;
    CamY: any;
    CamXoffset: any;
    CamYoffset: any;
}

export function PackedKinkyDungeonDrawEnemiesHP(args: IKinkyDungeonDrawEnemiesHPParameters) {
    KinkyDungeonDrawEnemiesHP(args.delta, args.canvasOffsetX, args.canvasOffsetY, args.CamX, args.CamY, args.CamXoffset, args.CamYoffset)
}

export const KDDrawEnemyTooltip = KDDrawEnemyTooltip;
export const KDGetColor = KDGetColor;
export const KinkyDungeonCapture = KinkyDungeonCapture;
export const KDDropStolenItems = KDDropStolenItems;
export const KinkyDungeonEnemyCheckHP = KinkyDungeonEnemyCheckHP;
export const KDDropItems = KDDropItems;
export const KDFavorNPC = KDFavorNPC;
export const KDGetFavor = KDGetFavor;
export const KDChangeFavor = KDChangeFavor;
export const KDAddFavor = KDAddFavor;
export const KDModFavor = KDModFavor;

interface IKinkyDungeonCheckLOSParameters {
    enemy: any;
    player: any;
    distance: any;
    maxdistance: any;
    allowBlind: any;
    allowBars: any;
    maxFails: any;
}

export function PackedKinkyDungeonCheckLOS(args: IKinkyDungeonCheckLOSParameters) {
    KinkyDungeonCheckLOS(args.enemy, args.player, args.distance, args.maxdistance, args.allowBlind, args.allowBars, args.maxFails)
}

export const KinkyDungeonTrackSneak = KinkyDungeonTrackSneak;
export const KinkyDungeonMultiplicativeStat = KinkyDungeonMultiplicativeStat;
export const KDBlockDodgeStat = KDBlockDodgeStat;

interface IKDNearbyEnemiesParameters {
    x: number;
    y: number;
    dist: number;
    hostileEnemy?: entity;
    cheb?: boolean;
    nonhostileEnemy?: entity;
}

export function PackedKDNearbyEnemies(args: IKDNearbyEnemiesParameters) {
    KDNearbyEnemies(args.x, args.y, args.dist, args.hostileEnemy, args.cheb, args.nonhostileEnemy)
}

export const KDNearbyTiles = KDNearbyTiles;
export const KDNearbyMapTiles = KDNearbyMapTiles;
export const KDNearbyNeutrals = KDNearbyNeutrals;

interface IKinkyDungeonGetRandomEnemyPointParameters {
    avoidPlayer: any;
    onlyPlayer: any;
    Enemy: any;
    playerDist?: any;
    minDist?: any;
    ignoreOffLimits?: boolean;
}

export function PackedKinkyDungeonGetRandomEnemyPoint(args: IKinkyDungeonGetRandomEnemyPointParameters) {
    KinkyDungeonGetRandomEnemyPoint(args.avoidPlayer, args.onlyPlayer, args.Enemy, args.playerDist, args.minDist, args.ignoreOffLimits)
}

interface IKinkyDungeonGetRandomEnemyPointCriteriaParameters {
    criteria: any;
    avoidPlayer: any;
    onlyPlayer: any;
    Enemy: any;
    playerDist?: any;
    minDist?: any;
    ignoreOffLimits?: boolean;
}

export function PackedKinkyDungeonGetRandomEnemyPointCriteria(args: IKinkyDungeonGetRandomEnemyPointCriteriaParameters) {
    KinkyDungeonGetRandomEnemyPointCriteria(args.criteria, args.avoidPlayer, args.onlyPlayer, args.Enemy, args.playerDist, args.minDist, args.ignoreOffLimits)
}

interface IKinkyDungeonGetNearbyPointParameters {
    x: number;
    y: number;
    allowNearPlayer?: boolean;
    Enemy?: entity;
    Adjacent?: boolean;
    ignoreOffLimits?: boolean;
    callback?: (x: number, y: number) => boolean;
}

export function PackedKinkyDungeonGetNearbyPoint(args: IKinkyDungeonGetNearbyPointParameters) {
    KinkyDungeonGetNearbyPoint(args.x, args.y, args.allowNearPlayer, args.Enemy, args.Adjacent, args.ignoreOffLimits, args.callback)
}

export const KinkyDungeonSetEnemyFlag = KinkyDungeonSetEnemyFlag;
export const KinkyDungeonTickFlagsEnemy = KinkyDungeonTickFlagsEnemy;
export const KinkyDungeonHasStatus = KinkyDungeonHasStatus;
export const KinkyDungeonIsStunned = KinkyDungeonIsStunned;
export const KinkyDungeonIsDisabled = KinkyDungeonIsDisabled;
export const KinkyDungeonIsSlowed = KinkyDungeonIsSlowed;
export const KinkyDungeonCanCastSpells = KinkyDungeonCanCastSpells;
export const KDCanBind = KDCanBind;
export const KDBoundEffects = KDBoundEffects;
export const KinkyDungeonUpdateEnemies = KinkyDungeonUpdateEnemies;
export const KDMakeHostile = KDMakeHostile;
export const KDCheckVulnerableBackstab = KDCheckVulnerableBackstab;
export const KDGetAI = KDGetAI;
export const KDAddThought = KDAddThought;
export const KDGetEnemyPlayLine = KDGetEnemyPlayLine;
export const KDEnemyCanTalk = KDEnemyCanTalk;

interface IKinkyDungeonEnemyLoopParameters {
    enemy: entity;
    player: any;
    delta: number;
    visionMod: number;
    playerItems: item[];
}

export function PackedKinkyDungeonEnemyLoop(args: IKinkyDungeonEnemyLoopParameters) {
    KinkyDungeonEnemyLoop(args.enemy, args.player, args.delta, args.visionMod, args.playerItems)
}

export const KinkyDungeonGetEnemyID = KinkyDungeonGetEnemyID;
export const KinkyDungeonGetSpellID = KinkyDungeonGetSpellID;
export const KinkyDungeonGetItemID = KinkyDungeonGetItemID;
export const KinkyDungeonNoEnemy = KinkyDungeonNoEnemy;
export const KDIsImmobile = KDIsImmobile;
export const KinkyDungeonCanSwapWith = KinkyDungeonCanSwapWith;
export const KinkyDungeonNoEnemyExceptSub = KinkyDungeonNoEnemyExceptSub;
export const KinkyDungeonEnemyAt = KinkyDungeonEnemyAt;

interface IKinkyDungeonEntityAtParameters {
    x: any;
    y: any;
    requireVision: any;
    vx: any;
    vy: any;
}

export function PackedKinkyDungeonEntityAt(args: IKinkyDungeonEntityAtParameters) {
    KinkyDungeonEntityAt(args.x, args.y, args.requireVision, args.vx, args.vy)
}

interface IKinkyDungeonEnemyTryMoveParameters {
    enemy: any;
    Direction: any;
    delta: any;
    x: any;
    y: any;
    canSprint: any;
}

export function PackedKinkyDungeonEnemyTryMove(args: IKinkyDungeonEnemyTryMoveParameters) {
    KinkyDungeonEnemyTryMove(args.enemy, args.Direction, args.delta, args.x, args.y, args.canSprint)
}

interface IKinkyDungeonEnemyTryAttackParameters {
    enemy: any;
    player: any;
    Tiles: any;
    delta: any;
    x: any;
    y: any;
    points: any;
    replace: any;
    msgColor: any;
    usingSpecial: any;
    refreshWarningTiles: any;
    attack: any;
    MovableTiles: any;
}

export function PackedKinkyDungeonEnemyTryAttack(args: IKinkyDungeonEnemyTryAttackParameters) {
    KinkyDungeonEnemyTryAttack(args.enemy, args.player, args.Tiles, args.delta, args.x, args.y, args.points, args.replace, args.msgColor, args.usingSpecial, args.refreshWarningTiles, args.attack, args.MovableTiles)
}

export const KinkyDungeonGetWarningTilesAdj = KinkyDungeonGetWarningTilesAdj;
export const KDCanPickpocketPlayer = KDCanPickpocketPlayer;
export const KDCanPickpocket = KDCanPickpocket;

interface IKinkyDungeonGetWarningTilesParameters {
    dx: any;
    dy: any;
    range: any;
    width: any;
    forwardOffset: number;
    enemy: any;
}

export function PackedKinkyDungeonGetWarningTiles(args: IKinkyDungeonGetWarningTilesParameters) {
    KinkyDungeonGetWarningTiles(args.dx, args.dy, args.range, args.width, args.forwardOffset, args.enemy)
}

export const KinkyDungeonFindMaster = KinkyDungeonFindMaster;

interface IKinkyDungeonEnemyCanMoveParameters {
    enemy: any;
    dir: any;
    MovableTiles: any;
    AvoidTiles: any;
    ignoreLocks: any;
    Tries: any;
}

export function PackedKinkyDungeonEnemyCanMove(args: IKinkyDungeonEnemyCanMoveParameters) {
    KinkyDungeonEnemyCanMove(args.enemy, args.dir, args.MovableTiles, args.AvoidTiles, args.ignoreLocks, args.Tries)
}

export const KinkyDungeonFindID = KinkyDungeonFindID;
export const KDDash = KDDash;
export const KinkyDungeonSendEnemyEvent = KinkyDungeonSendEnemyEvent;

interface IKDGetIntentEventParameters {
    enemy: entity;
    data: any;
    play: any;
    allied: any;
    hostile: any;
    aggressive: boolean;
}

export function PackedKDGetIntentEvent(args: IKDGetIntentEventParameters) {
    KDGetIntentEvent(args.enemy, args.data, args.play, args.allied, args.hostile, args.aggressive)
}

export const KDGetDir = KDGetDir;
export const KDPullResistance = KDPullResistance;
export const KDPushModifier = KDPushModifier;

interface IKDTieUpEnemyParameters {
    enemy: entity;
    amount: number;
    type: string;
    Damage: any;
    Msg: any;
    Delay: any;
}

export function PackedKDTieUpEnemy(args: IKDTieUpEnemyParameters) {
    KDTieUpEnemy(args.enemy, args.amount, args.type, args.Damage, args.Msg, args.Delay)
}

export const KDPredictStruggle = KDPredictStruggle;
export const KDCanDom = KDCanDom;
export const KDPlayerIsNotDom = KDPlayerIsNotDom;
export const KDPlayerIsTied = KDPlayerIsTied;
export const KDIsSubbyPersonality = KDIsSubbyPersonality;
export const KDIsBrattyPersonality = KDIsBrattyPersonality;
export const KDIsBrat = KDIsBrat;
export const KDCaptureNearby = KDCaptureNearby;
export const KinkyDungeonGetLoadoutForEnemy = KinkyDungeonGetLoadoutForEnemy;
export const KinkyDungeonGetTextForEnemy = KinkyDungeonGetTextForEnemy;
export const KDPlayerIsDefeated = KDPlayerIsDefeated;
export const KDPlayerIsDisabled = KDPlayerIsDisabled;
export const KDPlayerIsStunned = KDPlayerIsStunned;
export const KDPlayerIsImmobilized = KDPlayerIsImmobilized;
export const KDPlayerIsSlowed = KDPlayerIsSlowed;
export const KDEnemyReallyAware = KDEnemyReallyAware;
export const KDGetAwareTooltip = KDGetAwareTooltip;
export const KDProcessLock = KDProcessLock;
export const KDRestockRestraints = KDRestockRestraints;
export const KDDetermineBaseRestCount = KDDetermineBaseRestCount;
export const KDStockRestraints = KDStockRestraints;
export const KDSetLoadout = KDSetLoadout;
export const KDClearItems = KDClearItems;
export const KDAddLostItemSingle = KDAddLostItemSingle;
export const KDCanDetect = KDCanDetect;
export const KDGetSecurity = KDGetSecurity;
export const KDReduceBinding = KDReduceBinding;
export const KDPlayerDeservesPunishment = KDPlayerDeservesPunishment;
export const KDPlugEnemy = KDPlugEnemy;
export const KDGetTags = KDGetTags;
export const KDGetExtraTags = KDGetExtraTags;

interface IKDRunBondageResistParameters {
    enemy: entity;
    faction: string;
    restraintsToAdd: { r: restraint; v: ApplyVariant; }[];
    blockFunction: (item: any) => void;
    restraintFromInventory?: string[];
    spell?: spell;
    Lock?: string;
    Keep?: boolean;
}

export function PackedKDRunBondageResist(args: IKDRunBondageResistParameters) {
    KDRunBondageResist(args.enemy, args.faction, args.restraintsToAdd, args.blockFunction, args.restraintFromInventory, args.spell, args.Lock, args.Keep)
}

export const KDAssignLeashPoint = KDAssignLeashPoint;
export const KDSelfishLeash = KDSelfishLeash;
export const KDEnemyUnfriendlyToMainFaction = KDEnemyUnfriendlyToMainFaction;
export const KDGetMainFaction = KDGetMainFaction;
export const KDPlayerLeashed = KDPlayerLeashed;
export const KDEnemyCanBeVibed = KDEnemyCanBeVibed;
export const KDEnemySoundDecay = KDEnemySoundDecay;
export const KDEnemyAddSound = KDEnemyAddSound;
export const KDCanHearEnemy = KDCanHearEnemy;

interface IKDCanHearSoundParameters {
    entity: entity;
    sound: number;
    x: number;
    y: number;
    mult?: number;
}

export function PackedKDCanHearSound(args: IKDCanHearSoundParameters) {
    KDCanHearSound(args.entity, args.sound, args.x, args.y, args.mult)
}

export const KDPointWanderable = KDPointWanderable;
export const KDOverrideIgnore = KDOverrideIgnore;
export const KDIsFlying = KDIsFlying;
export const KDEnemyCanSignal = KDEnemyCanSignal;
export const KDEnemyCanSignalOthers = KDEnemyCanSignalOthers;
export const KDGetDialogueTrigger = KDGetDialogueTrigger;
export const KDCanOverrideAI = KDCanOverrideAI;
export const KDGetAIOverride = KDGetAIOverride;
export const KDGetAITypeOverride = KDGetAITypeOverride;
export const KDMakeHighValue = KDMakeHighValue;
export const KDGetSpecialBuffList = KDGetSpecialBuffList;
export const KDEnemyRank = KDEnemyRank;
export const KDEnemyCanSprint = KDEnemyCanSprint;
export const KDEnemyChangeSprint = KDEnemyChangeSprint;
export const KDSetShopMoney = KDSetShopMoney;
export const KDIsInParty = KDIsInParty;
export const KDIsInCapturedParty = KDIsInCapturedParty;
export const KDGetPartyRefs = KDGetPartyRefs;
export const KDCapturedPartyMemberIsOnMap = KDCapturedPartyMemberIsOnMap;
export const KDAddToParty = KDAddToParty;
export const KDAddToCapturedParty = KDAddToCapturedParty;
export const KDRemoveFromParty = KDRemoveFromParty;
export const KDAddEntity = KDAddEntity;
export const KDSpliceIndex = KDSpliceIndex;

interface IKDRemoveEntityParameters {
    enemy: entity;
    kill?: boolean;
    capture?: boolean;
    noEvent?: boolean;
    forceIndex?: number;
}

export function PackedKDRemoveEntity(args: IKDRemoveEntityParameters) {
    KDRemoveEntity(args.enemy, args.kill, args.capture, args.noEvent, args.forceIndex)
}

export const KDGetMaxBlock = KDGetMaxBlock;
export const KDGetMaxDodge = KDGetMaxDodge;
export const KDGetBaseBlock = KDGetBaseBlock;
export const KDGetBaseDodge = KDGetBaseDodge;
export const KDGetBlockAmount = KDGetBlockAmount;
export const KDCanBlock = KDCanBlock;
export const KDCanDodge = KDCanDodge;
export const KDIsTimeImmune = KDIsTimeImmune;
export const KDAddDistraction = KDAddDistraction;
export const KDToughArmor = KDToughArmor;
export const KDAbsoluteArmor = KDAbsoluteArmor;
export const KDIsDisarmed = KDIsDisarmed;
export const KDHasArms = KDHasArms;
export const KDPlayerFacingAway = KDPlayerFacingAway;
export const KDGetTeaseAttack = KDGetTeaseAttack;
export const KDBasicTeaseAttack = KDBasicTeaseAttack;
export const KDGetVibeToys = KDGetVibeToys;
export const KDGetTeaseDamageMod = KDGetTeaseDamageMod;
export const KDGetPersonality = KDGetPersonality;
export const KDJailPersonality = KDJailPersonality;
export const KDEndEnemyAction = KDEndEnemyAction;
export const KDMaintainEnemyAction = KDMaintainEnemyAction;
export const KDResetIntent = KDResetIntent;
export const KDSettlePlayerInFurniture = KDSettlePlayerInFurniture;
export const KDEscapeWorldgenStart = KDEscapeWorldgenStart;
export const KDBestowCurse = KDBestowCurse;

interface IKDAddEventVariantParameters {
    restraint: restraint;
    newRestraintName: string;
    ev: KinkyDungeonEvent[];
    power?: number;
    lock?: string;
    enemyTags?: Record<string, number>;
}

export function PackedKDAddEventVariant(args: IKDAddEventVariantParameters) {
    KDAddEventVariant(args.restraint, args.newRestraintName, args.ev, args.power, args.lock, args.enemyTags)
}

export const KinkyDungeonCurseInfo = KinkyDungeonCurseInfo;
export const KinkyDungeonCurseStruggle = KinkyDungeonCurseStruggle;
export const KinkyDungeonCurseAvailable = KinkyDungeonCurseAvailable;
export const KinkyDungeonCurseUnlock = KinkyDungeonCurseUnlock;
export const KDCursePower = KDCursePower;
export const KDCurseMult = KDCurseMult;
export const KDGetTightnessEffect = KDGetTightnessEffect;
export const KDRestraintPowerMult = KDRestraintPowerMult;
export const KDGetWillPenalty = KDGetWillPenalty;
export const KDRestraint = KDRestraint;
export const KDRestraintBondageType = KDRestraintBondageType;
export const KDRestraintBondageStatus = KDRestraintBondageStatus;
export const KDItemIsMagic = KDItemIsMagic;
export const KDGetProgressiveOrderFun = KDGetProgressiveOrderFun;
export const KinkyDungeonDrawTethers = KinkyDungeonDrawTethers;
export const KDIsPlayerTethered = KDIsPlayerTethered;
export const KinkyDungeonAttachTetherToEntity = KinkyDungeonAttachTetherToEntity;
export const KDIsPlayerTetheredToLocation = KDIsPlayerTetheredToLocation;
export const KDIsPlayerTetheredToEntity = KDIsPlayerTetheredToEntity;
export const KDGetTetherEntity = KDGetTetherEntity;
export const KDBreakTether = KDBreakTether;
export const KinkyDungeonUpdateTether = KinkyDungeonUpdateTether;
export const KinkyDungeonTetherLength = KinkyDungeonTetherLength;
export const KinkyDungeonKeyGetPickBreakChance = KinkyDungeonKeyGetPickBreakChance;
export const KinkyDungeonGetKnifeBreakChance = KinkyDungeonGetKnifeBreakChance;
export const KinkyDungeonGetEnchKnifeBreakChance = KinkyDungeonGetEnchKnifeBreakChance;
export const KinkyDungeonIsLockable = KinkyDungeonIsLockable;
export const KinkyDungeonLock = KinkyDungeonLock;
export const KDGetCurse = KDGetCurse;
export const KinkyDungeonGetRestraintsWithShrine = KinkyDungeonGetRestraintsWithShrine;

interface IKinkyDungeonRemoveRestraintsWithShrineParameters {
    shrine: string;
    maxCount: any;
    recursive: any;
    noPlayer: any;
    ignoreGold: any;
    ignoreShrine: any;
    Keep: any;
}

export function PackedKinkyDungeonRemoveRestraintsWithShrine(args: IKinkyDungeonRemoveRestraintsWithShrineParameters) {
    KinkyDungeonRemoveRestraintsWithShrine(args.shrine, args.maxCount, args.recursive, args.noPlayer, args.ignoreGold, args.ignoreShrine, args.Keep)
}

interface IKDRemoveThisItemParameters {
    item: item;
    Keep: any;
    NoEvent: any;
    Shrine: any;
    Remover: any;
}

export function PackedKDRemoveThisItem(args: IKDRemoveThisItemParameters) {
    KDRemoveThisItem(args.item, args.Keep, args.NoEvent, args.Shrine, args.Remover)
}

export const KinkyDungeonRemoveRestraintsWithName = KinkyDungeonRemoveRestraintsWithName;
export const KinkyDungeonUnlockRestraintsWithShrine = KinkyDungeonUnlockRestraintsWithShrine;
export const KinkyDungeonPlayerGetLockableRestraints = KinkyDungeonPlayerGetLockableRestraints;
export const KinkyDungeonPlayerGetRestraintsWithLocks = KinkyDungeonPlayerGetRestraintsWithLocks;
export const KinkyDungeonRemoveKeysUnlock = KinkyDungeonRemoveKeysUnlock;
export const KinkyDungeonRemoveKeysDropped = KinkyDungeonRemoveKeysDropped;
export const KinkyDungeonGetKey = KinkyDungeonGetKey;
export const KinkyDungeonHasGhostHelp = KinkyDungeonHasGhostHelp;
export const KinkyDungeonHasHelp = KinkyDungeonHasHelp;
export const KinkyDungeonHasAllyHelp = KinkyDungeonHasAllyHelp;
export const KinkyDungeonHasAngelHelp = KinkyDungeonHasAngelHelp;
export const KinkyDungeonIsWearingLeash = KinkyDungeonIsWearingLeash;
export const KinkyDungeonGetAffinity = KinkyDungeonGetAffinity;
export const KinkyDungeonWallCrackAndKnife = KinkyDungeonWallCrackAndKnife;
export const KDIsTreeAccessible = KDIsTreeAccessible;
export const KDIsTreeChastity = KDIsTreeChastity;
export const KDIsTreeChastityBra = KDIsTreeChastityBra;
export const KDGroupBlocked = KDGroupBlocked;
export const KDGetBlockingRestraints = KDGetBlockingRestraints;
export const KDGetBlockingSecurity = KDGetBlockingSecurity;
export const KinkyDungeonCanUseKey = KinkyDungeonCanUseKey;
export const KinkyDungeonIsHandsBound = KinkyDungeonIsHandsBound;
export const KDHandBondageTotal = KDHandBondageTotal;
export const KinkyDungeonCanUseFeet = KinkyDungeonCanUseFeet;
export const KinkyDungeonCanUseFeetLoose = KinkyDungeonCanUseFeetLoose;
export const KinkyDungeonIsArmsBound = KinkyDungeonIsArmsBound;
export const KinkyDungeonIsArmsBoundC = KinkyDungeonIsArmsBoundC;
export const KinkyDungeonStrictness = KinkyDungeonStrictness;
export const KinkyDungeonGetStrictnessItems = KinkyDungeonGetStrictnessItems;
export const KinkyDungeonGetPickBaseChance = KinkyDungeonGetPickBaseChance;
export const KinkyDungeonGetPickBonus = KinkyDungeonGetPickBonus;
export const KinkyDungeonPickAttempt = KinkyDungeonPickAttempt;
export const KinkyDungeonUnlockAttempt = KinkyDungeonUnlockAttempt;
export const KDGetRestraintAffinity = KDGetRestraintAffinity;

interface IKDGetEscapeChanceParameters {
    restraint: any;
    StruggleType: any;
    escapeChancePre: any;
    limitChancePre: any;
    ApplyGhost: any;
    ApplyPlayerBonus: any;
    Msg: any;
}

export function PackedKDGetEscapeChance(args: IKDGetEscapeChanceParameters) {
    KDGetEscapeChance(args.restraint, args.StruggleType, args.escapeChancePre, args.limitChancePre, args.ApplyGhost, args.ApplyPlayerBonus, args.Msg)
}

export const KDGetDynamicItem = KDGetDynamicItem;
export const KDGetStruggleData = KDGetStruggleData;

interface IKinkyDungeonStruggleParameters {
    struggleGroup: string;
    StruggleType: string;
    index: any;
    query?: boolean;
    retData?: KDStruggleData;
}

export function PackedKinkyDungeonStruggle(args: IKinkyDungeonStruggleParameters) {
    KinkyDungeonStruggle(args.struggleGroup, args.StruggleType, args.index, args.query, args.retData)
}

export const KinkyDungeonGetRestraintItem = KinkyDungeonGetRestraintItem;
export const KinkyDungeonRefreshRestraintsCache = KinkyDungeonRefreshRestraintsCache;
export const KinkyDungeonGetRestraintByName = KinkyDungeonGetRestraintByName;
export const KinkyDungeonGetLockMult = KinkyDungeonGetLockMult;

interface IKDGetRestraintsEligibleParameters {
    enemy: KDHasTags;
    Level: any;
    Index: any;
    Bypass: any;
    Lock: any;
    RequireWill: any;
    LeashingOnly: any;
    NoStack: any;
    extraTags: any;
    agnostic: any;
    filter?: { minPower?: number; maxPower?: number; onlyLimited?: boolean; noUnlimited?: boolean; noLimited?: boolean; onlyUnlimited?: boolean; ignore?: string[]; require?: string[]; looseLimit?: boolean; ignoreTags?: string[]; allowedGroups?: string[]; };
    securityEnemy?: entity;
    curse?: string;
    filterEps?: number;
    minWeightFallback?: boolean;
    useAugmented?: boolean;
    augmentedInventory?: string[];
    options?: { dontAugmentWeight?: boolean; ApplyVariants?: boolean; dontPreferVariant?: boolean; allowLowPower?: boolean; };
}

export function PackedKDGetRestraintsEligible(args: IKDGetRestraintsEligibleParameters) {
    KDGetRestraintsEligible(args.enemy, args.Level, args.Index, args.Bypass, args.Lock, args.RequireWill, args.LeashingOnly, args.NoStack, args.extraTags, args.agnostic, args.filter, args.securityEnemy, args.curse, args.filterEps, args.minWeightFallback, args.useAugmented, args.augmentedInventory, args.options)
}

interface IKinkyDungeonGetRestraintParameters {
    enemy: KDHasTags;
    Level: any;
    Index: any;
    Bypass: any;
    Lock: any;
    RequireWill: any;
    LeashingOnly: any;
    NoStack: any;
    extraTags: any;
    agnostic: any;
    filter?: { minPower?: number; maxPower?: number; onlyLimited?: boolean; noUnlimited?: boolean; noLimited?: boolean; onlyUnlimited?: boolean; ignore?: string[]; require?: string[]; looseLimit?: boolean; ignoreTags?: string[]; allowedGroups?: string[]; };
    securityEnemy?: entity;
    curse?: string;
    useAugmented?: boolean;
    augmentedInventory?: string[];
    options?: { dontAugmentWeight?: boolean; ApplyVariants?: boolean; dontPreferVariant?: boolean; };
}

export function PackedKinkyDungeonGetRestraint(args: IKinkyDungeonGetRestraintParameters) {
    KinkyDungeonGetRestraint(args.enemy, args.Level, args.Index, args.Bypass, args.Lock, args.RequireWill, args.LeashingOnly, args.NoStack, args.extraTags, args.agnostic, args.filter, args.securityEnemy, args.curse, args.useAugmented, args.augmentedInventory, args.options)
}

interface IKDGetRestraintWithVariantsParameters {
    enemy: KDHasTags;
    Level: any;
    Index: any;
    Bypass: any;
    Lock: any;
    RequireWill: any;
    LeashingOnly: any;
    NoStack: any;
    extraTags: any;
    agnostic: any;
    filter?: { minPower?: number; maxPower?: number; onlyLimited?: boolean; noUnlimited?: boolean; noLimited?: boolean; onlyUnlimited?: boolean; ignore?: string[]; require?: string[]; looseLimit?: boolean; ignoreTags?: string[]; allowedGroups?: string[]; };
    securityEnemy?: entity;
    curse?: string;
    useAugmented?: boolean;
    augmentedInventory?: string[];
    options?: { dontAugmentWeight?: boolean; ApplyVariants?: boolean; dontPreferVariant?: boolean; };
}

export function PackedKDGetRestraintWithVariants(args: IKDGetRestraintWithVariantsParameters) {
    KDGetRestraintWithVariants(args.enemy, args.Level, args.Index, args.Bypass, args.Lock, args.RequireWill, args.LeashingOnly, args.NoStack, args.extraTags, args.agnostic, args.filter, args.securityEnemy, args.curse, args.useAugmented, args.augmentedInventory, args.options)
}

export const KinkyDungeonUpdateRestraints = KinkyDungeonUpdateRestraints;
export const KDGetCursePower = KDGetCursePower;

interface IKinkyDungeonRestraintPowerParameters {
    item: item;
    NoLink?: boolean;
    toLink?: restraint;
    newLock?: string;
    newCurse?: string;
}

export function PackedKinkyDungeonRestraintPower(args: IKinkyDungeonRestraintPowerParameters) {
    KinkyDungeonRestraintPower(args.item, args.NoLink, args.toLink, args.newLock, args.newCurse)
}

interface IKinkyDungeonLinkableAndStricterParameters {
    oldRestraint: restraint;
    newRestraint: restraint;
    item?: item;
    Lock?: string;
    Curse?: string;
}

export function PackedKinkyDungeonLinkableAndStricter(args: IKinkyDungeonLinkableAndStricterParameters) {
    KinkyDungeonLinkableAndStricter(args.oldRestraint, args.newRestraint, args.item, args.Lock, args.Curse)
}

export const KDIsEligible = KDIsEligible;
export const KinkyDungeonGenerateRestraintTrap = KinkyDungeonGenerateRestraintTrap;
export const KDGetLockVisual = KDGetLockVisual;

interface IKDCanAddRestraintParameters {
    restraint: restraint;
    Bypass: boolean;
    Lock: string;
    NoStack: boolean;
    r?: item;
    Deep?: boolean;
    noOverpower?: boolean;
    securityEnemy?: entity;
    useAugmentedPower?: boolean;
    curse?: string;
    augmentedInventory?: string[];
    powerBonus?: number;
}

export function PackedKDCanAddRestraint(args: IKDCanAddRestraintParameters) {
    KDCanAddRestraint(args.restraint, args.Bypass, args.Lock, args.NoStack, args.r, args.Deep, args.noOverpower, args.securityEnemy, args.useAugmentedPower, args.curse, args.augmentedInventory, args.powerBonus)
}

export const KDEnemyPassesSecurity = KDEnemyPassesSecurity;

interface IKDGetLinkUnderParameters {
    currentRestraint: item;
    restraint: restraint;
    bypass?: boolean;
    NoStack?: boolean;
    Deep?: boolean;
    securityEnemy?: entity;
    Lock?: string;
    Curse?: string;
}

export function PackedKDGetLinkUnder(args: IKDGetLinkUnderParameters) {
    KDGetLinkUnder(args.currentRestraint, args.restraint, args.bypass, args.NoStack, args.Deep, args.securityEnemy, args.Lock, args.Curse)
}

interface IKDCanLinkUnderParameters {
    currentRestraint: item;
    restraint: restraint;
    bypass?: boolean;
    NoStack?: boolean;
    securityEnemy?: entity;
    Lock?: string;
    Curse?: string;
}

export function PackedKDCanLinkUnder(args: IKDCanLinkUnderParameters) {
    KDCanLinkUnder(args.currentRestraint, args.restraint, args.bypass, args.NoStack, args.securityEnemy, args.Lock, args.Curse)
}

interface IKDCheckLinkSizeParameters {
    currentRestraint: item;
    restraint: restraint;
    bypass?: boolean;
    NoStack?: boolean;
    securityEnemy?: entity;
    ignoreItem?: item;
    props?: { newLock?: string; newCurse?: string; };
}

export function PackedKDCheckLinkSize(args: IKDCheckLinkSizeParameters) {
    KDCheckLinkSize(args.currentRestraint, args.restraint, args.bypass, args.NoStack, args.securityEnemy, args.ignoreItem, args.props)
}

export const KDApplyVarToInvVar = KDApplyVarToInvVar;

interface IKDLinkUnderParameters {
    restraint: restraint;
    Tightness?: number;
    Bypass?: boolean;
    Lock?: string;
    Keep?: boolean;
    Trapped?: boolean;
    events?: KinkyDungeonEvent[];
    faction?: string;
    Deep?: boolean;
    Curse?: string;
    securityEnemy?: entity;
    reserved?: boolean;
    inventoryAs?: string;
    data?: Record<string, any>;
}

export function PackedKDLinkUnder(args: IKDLinkUnderParameters) {
    KDLinkUnder(args.restraint, args.Tightness, args.Bypass, args.Lock, args.Keep, args.Trapped, args.events, args.faction, args.Deep, args.Curse, args.securityEnemy, args.reserved, args.inventoryAs, args.data)
}

interface IKinkyDungeonAddRestraintIfWeakerParameters {
    restraint: string | restraint;
    Tightness?: number;
    Bypass?: boolean;
    Lock?: string;
    Keep?: boolean;
    Trapped?: boolean;
    events?: KinkyDungeonEvent[];
    faction?: string;
    Deep?: boolean;
    Curse?: string;
    securityEnemy?: entity;
    useAugmentedPower?: boolean;
    inventoryAs?: string;
    data?: Record<string, any>;
    augmentedInventory?: string[];
    variant?: ApplyVariant;
}

export function PackedKinkyDungeonAddRestraintIfWeaker(args: IKinkyDungeonAddRestraintIfWeakerParameters) {
    KinkyDungeonAddRestraintIfWeaker(args.restraint, args.Tightness, args.Bypass, args.Lock, args.Keep, args.Trapped, args.events, args.faction, args.Deep, args.Curse, args.securityEnemy, args.useAugmentedPower, args.inventoryAs, args.data, args.augmentedInventory, args.variant)
}

export const KinkyDungeonIsLinkable = KinkyDungeonIsLinkable;

interface IKDCheckLinkTotalParameters {
    oldRestraint: item;
    newRestraint: restraint;
    ignoreItem?: item;
    lock?: string;
    curse?: string;
    useAugmentedPower?: boolean;
    augmentedInventory?: any;
}

export function PackedKDCheckLinkTotal(args: IKDCheckLinkTotalParameters) {
    KDCheckLinkTotal(args.oldRestraint, args.newRestraint, args.ignoreItem, args.lock, args.curse, args.useAugmentedPower, args.augmentedInventory)
}

export const KDUpdateLinkCaches = KDUpdateLinkCaches;
export const KDGetLinkCache = KDGetLinkCache;

interface IKinkyDungeonAddRestraintParameters {
    restraint: restraint;
    Tightness: number;
    Bypass?: boolean;
    Lock?: string;
    Keep?: boolean;
    Link?: boolean;
    SwitchItems?: boolean;
    events?: KinkyDungeonEvent[];
    faction?: string;
    Unlink?: boolean;
    dynamicLink?: item;
    Curse?: string;
    autoMessage?: boolean;
    securityEnemy?: entity;
    inventoryAs?: string;
    data?: Record<string, number>;
}

export function PackedKinkyDungeonAddRestraint(args: IKinkyDungeonAddRestraintParameters) {
    KinkyDungeonAddRestraint(args.restraint, args.Tightness, args.Bypass, args.Lock, args.Keep, args.Link, args.SwitchItems, args.events, args.faction, args.Unlink, args.dynamicLink, args.Curse, args.autoMessage, args.securityEnemy, args.inventoryAs, args.data)
}

interface IKinkyDungeonRemoveRestraintSpecificParameters {
    item: item;
    Keep?: boolean;
    Add?: boolean;
    NoEvent?: boolean;
    Shrine?: boolean;
    UnLink?: boolean;
    Remover?: entity;
    ForceRemove?: boolean;
}

export function PackedKinkyDungeonRemoveRestraintSpecific(args: IKinkyDungeonRemoveRestraintSpecificParameters) {
    KinkyDungeonRemoveRestraintSpecific(args.item, args.Keep, args.Add, args.NoEvent, args.Shrine, args.UnLink, args.Remover, args.ForceRemove)
}

interface IKinkyDungeonRemoveRestraintParameters {
    Group: string;
    Keep?: boolean;
    Add?: boolean;
    NoEvent?: boolean;
    Shrine?: boolean;
    UnLink?: boolean;
    Remover?: entity;
    ForceRemove?: boolean;
}

export function PackedKinkyDungeonRemoveRestraint(args: IKinkyDungeonRemoveRestraintParameters) {
    KinkyDungeonRemoveRestraint(args.Group, args.Keep, args.Add, args.NoEvent, args.Shrine, args.UnLink, args.Remover, args.ForceRemove)
}

export const KDIInsertRestraintUnderneath = KDIInsertRestraintUnderneath;

interface IKinkyDungeonRemoveDynamicRestraintParameters {
    hostItem: item;
    Keep?: boolean;
    NoEvent?: boolean;
    Remover?: entity;
    ForceRemove?: boolean;
}

export function PackedKinkyDungeonRemoveDynamicRestraint(args: IKinkyDungeonRemoveDynamicRestraintParameters) {
    KinkyDungeonRemoveDynamicRestraint(args.hostItem, args.Keep, args.NoEvent, args.Remover, args.ForceRemove)
}

export const KinkyDungeonRestraintTypes = KinkyDungeonRestraintTypes;

interface IKinkyDungeonLinkItemParameters {
    newRestraint: restraint;
    oldItem: item;
    tightness: number;
    Lock?: string;
    Keep?: boolean;
    faction?: string;
    Curse?: string;
    autoMessage?: boolean;
    inventoryAs?: string;
    events?: KinkyDungeonEvent[];
    data?: Record<string, number>;
}

export function PackedKinkyDungeonLinkItem(args: IKinkyDungeonLinkItemParameters) {
    KinkyDungeonLinkItem(args.newRestraint, args.oldItem, args.tightness, args.Lock, args.Keep, args.faction, args.Curse, args.autoMessage, args.inventoryAs, args.events, args.data)
}

export const KinkyDungeonUnLinkItem = KinkyDungeonUnLinkItem;
export const KDCreateDebris = KDCreateDebris;

interface IKDSuccessRemoveParameters {
    StruggleType: string;
    restraint: item;
    lockType: KDLockType;
    index: number;
    data: any;
    host: item;
}

export function PackedKDSuccessRemove(args: IKDSuccessRemoveParameters) {
    KDSuccessRemove(args.StruggleType, args.restraint, args.lockType, args.index, args.data, args.host)
}

interface IKDAddDelayedStruggleParameters {
    amount: any;
    time: any;
    StruggleType: any;
    struggleGroup: any;
    index: any;
    data: any;
    progress?: number;
    limit?: number;
}

export function PackedKDAddDelayedStruggle(args: IKDAddDelayedStruggleParameters) {
    KDAddDelayedStruggle(args.amount, args.time, args.StruggleType, args.struggleGroup, args.index, args.data, args.progress, args.limit)
}

interface IKDGetManaBonusParameters {
    bonus: number;
    penalty: number;
    threshold: number;
    bonusscale: number;
    penaltyscale: number;
}

export function PackedKDGetManaBonus(args: IKDGetManaBonusParameters) {
    KDGetManaBonus(args.bonus, args.penalty, args.threshold, args.bonusscale, args.penaltyscale)
}

export const KDGetItemGoddessBonus = KDGetItemGoddessBonus;
export const KDChooseRestraintFromListGroupPri = KDChooseRestraintFromListGroupPri;
export const KDChooseRestraintFromListGroupPriWithVariants = KDChooseRestraintFromListGroupPriWithVariants;

interface IKDAddCuffVariantsParameters {
    CopyOf: string;
    idSuffix: string;
    ModelSuffix: string;
    tagBase: string;
    extraTags: Record<string, number>;
    allTag: string[];
    removeTag: any;
    addPower: number;
    properties: KDRestraintPropsBase;
    extraEvents: KinkyDungeonEvent[];
    addStruggle: KDEscapeChanceList;
    premultStruggle: KDEscapeChanceList;
    addStruggleLink: any;
    premultStruggleLink: any;
    Filters?: Record<string, LayerFilter>;
    baseWeight?: number;
    noGeneric?: boolean;
    CuffAssets?: Record<string, string>;
    CuffModels?: Record<string, string>;
    noLockBase?: boolean;
    noLockLink?: boolean;
}

export function PackedKDAddCuffVariants(args: IKDAddCuffVariantsParameters) {
    KDAddCuffVariants(args.CopyOf, args.idSuffix, args.ModelSuffix, args.tagBase, args.extraTags, args.allTag, args.removeTag, args.addPower, args.properties, args.extraEvents, args.addStruggle, args.premultStruggle, args.addStruggleLink, args.premultStruggleLink, args.Filters, args.baseWeight, args.noGeneric, args.CuffAssets, args.CuffModels, args.noLockBase, args.noLockLink)
}

interface IKDAddRopeVariantsParameters {
    CopyOf: string;
    idSuffix: string;
    ModelSuffix: string;
    tagBase: string;
    allTag: string[];
    removeTag: any;
    basePower: number;
    properties: KDRestraintPropsBase;
    extraEvents: KinkyDungeonEvent[];
    addStruggle: KDEscapeChanceList;
    premultStruggle: KDEscapeChanceList;
    Filters?: Record<string, LayerFilter>;
    baseWeight?: number;
}

export function PackedKDAddRopeVariants(args: IKDAddRopeVariantsParameters) {
    KDAddRopeVariants(args.CopyOf, args.idSuffix, args.ModelSuffix, args.tagBase, args.allTag, args.removeTag, args.basePower, args.properties, args.extraEvents, args.addStruggle, args.premultStruggle, args.Filters, args.baseWeight)
}

interface IKDAddHardSlimeVariantsParameters {
    CopyOf: string;
    idSuffix: string;
    ModelSuffix: string;
    tagBase: string;
    allTag: string[];
    removeTag: any;
    basePower: number;
    properties: KDRestraintPropsBase;
    extraEvents: KinkyDungeonEvent[];
    addStruggle: KDEscapeChanceList;
    premultStruggle: KDEscapeChanceList;
    Filters?: Record<string, LayerFilter>;
    baseWeight?: number;
    restraintType?: string;
}

export function PackedKDAddHardSlimeVariants(args: IKDAddHardSlimeVariantsParameters) {
    KDAddHardSlimeVariants(args.CopyOf, args.idSuffix, args.ModelSuffix, args.tagBase, args.allTag, args.removeTag, args.basePower, args.properties, args.extraEvents, args.addStruggle, args.premultStruggle, args.Filters, args.baseWeight, args.restraintType)
}

export const KDGetRestraintTags = KDGetRestraintTags;
export const KDItemDataQuery = KDItemDataQuery;
export const KDItemDataSet = KDItemDataSet;
export const KDChangeItemName = KDChangeItemName;
export const KDCurseCount = KDCurseCount;

interface IKDGetTotalRestraintPowerParameters {
    player: entity;
    requireSingleTag: string[];
    requireAllTags: string[];
    ignoregold: boolean;
    ignoreShrine: boolean;
}

export function PackedKDGetTotalRestraintPower(args: IKDGetTotalRestraintPowerParameters) {
    KDGetTotalRestraintPower(args.player, args.requireSingleTag, args.requireAllTags, args.ignoregold, args.ignoreShrine)
}

export const KDGetEscapeSFX = KDGetEscapeSFX;
export const KDGetRestraintSFX = KDGetRestraintSFX;
export const KDGetFinishEscapeSFX = KDGetFinishEscapeSFX;
export const KDGetRemoveSFX = KDGetRemoveSFX;
export const KDHasRemovableCurse = KDHasRemovableCurse;
export const KDHasRemovableHex = KDHasRemovableHex;
export const KDGetRemovableHex = KDGetRemovableHex;
export const KDGetItemName = KDGetItemName;
export const KDGetRestraintName = KDGetRestraintName;
export const KDGetConsumableName = KDGetConsumableName;
export const KDGetWeaponName = KDGetWeaponName;
export const KDGetItemNameString = KDGetItemNameString;
export const KDGetEventsForRestraint = KDGetEventsForRestraint;
export const KDDynamicLinkList = KDDynamicLinkList;
export const KDDynamicLinkListSurface = KDDynamicLinkListSurface;
export const KDLinkSize = KDLinkSize;
export const KDLinkCategorySize = KDLinkCategorySize;
export const KDGetRestraintHost = KDGetRestraintHost;
export const KDLinkItemEvent = KDLinkItemEvent;
export const KDGetRestriction = KDGetRestriction;
export const KDAlwaysKeep = KDAlwaysKeep;
export const KDWeapon = KDWeapon;
export const KinkyDungeonFindWeapon = KinkyDungeonFindWeapon;
export const KinkyDungeonWeaponCanCut = KinkyDungeonWeaponCanCut;
export const KDSetWeapon = KDSetWeapon;
export const KinkyDungeonGetPlayerWeaponDamage = KinkyDungeonGetPlayerWeaponDamage;
export const isUnarmed = isUnarmed;
export const KinkyDungeonGetCrit = KinkyDungeonGetCrit;
export const KinkyDungeonGetBindCrit = KinkyDungeonGetBindCrit;
export const KDGetSpellAccuracy = KDGetSpellAccuracy;

interface IKinkyDungeonGetEvasionParameters {
    Enemy: any;
    NoOverride: any;
    IsSpell: any;
    IsMagic: any;
    cost: any;
}

export function PackedKinkyDungeonGetEvasion(args: IKinkyDungeonGetEvasionParameters) {
    KinkyDungeonGetEvasion(args.Enemy, args.NoOverride, args.IsSpell, args.IsMagic, args.cost)
}

export const KinkyDungeonAggro = KinkyDungeonAggro;
export const KDPlayerEvasionPenalty = KDPlayerEvasionPenalty;
export const KDPlayerBlockPenalty = KDPlayerBlockPenalty;
export const KDRestraintBlockPenalty = KDRestraintBlockPenalty;
export const KDCalcRestraintBlock = KDCalcRestraintBlock;
export const KinkyDungeonPlayerEvasion = KinkyDungeonPlayerEvasion;
export const KinkyDungeonPlayerBlock = KinkyDungeonPlayerBlock;
export const KinkyDungeonPlayerBlockLinear = KinkyDungeonPlayerBlockLinear;
export const KinkyDungeonGetPlayerStat = KinkyDungeonGetPlayerStat;
export const KDRestraintBlockPower = KDRestraintBlockPower;

interface IKinkyDungeonEvasionParameters {
    Enemy: any;
    IsSpell: any;
    IsMagic: any;
    Attacker: any;
    chance: any;
}

export function PackedKinkyDungeonEvasion(args: IKinkyDungeonEvasionParameters) {
    KinkyDungeonEvasion(args.Enemy, args.IsSpell, args.IsMagic, args.Attacker, args.chance)
}

export const KinkyDungeonGetImmunity = KinkyDungeonGetImmunity;
export const KDArmorFormula = KDArmorFormula;

interface IKinkyDungeonDamageEnemyParameters {
    Enemy: entity;
    Damage: any;
    Ranged: any;
    NoMsg: any;
    Spell: any;
    bullet: any;
    attacker: any;
    Delay: any;
    noAlreadyHit: any;
    noVuln: any;
    Critical: any;
}

export function PackedKinkyDungeonDamageEnemy(args: IKinkyDungeonDamageEnemyParameters) {
    KinkyDungeonDamageEnemy(args.Enemy, args.Damage, args.Ranged, args.NoMsg, args.Spell, args.bullet, args.attacker, args.Delay, args.noAlreadyHit, args.noVuln, args.Critical)
}

export const KinkyDungeonDisarm = KinkyDungeonDisarm;
export const KinkyDungeonAttackEnemy = KinkyDungeonAttackEnemy;
export const KDUpdateBulletEffects = KDUpdateBulletEffects;
export const KinkyDungeonUpdateBullets = KinkyDungeonUpdateBullets;
export const KinkyDungeonUpdateSingleBulletVisual = KinkyDungeonUpdateSingleBulletVisual;
export const KinkyDungeonUpdateBulletVisuals = KinkyDungeonUpdateBulletVisuals;
export const KinkyDungeonUpdateBulletsCollisions = KinkyDungeonUpdateBulletsCollisions;
export const KDCheckCollideableBullets = KDCheckCollideableBullets;

interface IKinkyDungeonBulletHitParameters {
    b: any;
    born: number;
    outOfTime?: boolean;
    outOfRange?: boolean;
    d?: number;
    dt?: number;
    end?: boolean;
}

export function PackedKinkyDungeonBulletHit(args: IKinkyDungeonBulletHitParameters) {
    KinkyDungeonBulletHit(args.b, args.born, args.outOfTime, args.outOfRange, args.d, args.dt, args.end)
}

interface IKinkyDungeonSummonEnemyParameters {
    x: any;
    y: any;
    summonType: any;
    count: any;
    rad: any;
    strict: any;
    lifetime: any;
    hidden: any;
    goToTarget: any;
    faction: any;
    hostile: any;
    minrad: any;
    startAware: any;
    noBullet: any;
    hideTimer: any;
    pathfind: any;
    mod: any;
    boundTo: any;
    weakBinding: any;
    teleportTime: any;
    ox: any;
    oy: any;
}

export function PackedKinkyDungeonSummonEnemy(args: IKinkyDungeonSummonEnemyParameters) {
    KinkyDungeonSummonEnemy(args.x, args.y, args.summonType, args.count, args.rad, args.strict, args.lifetime, args.hidden, args.goToTarget, args.faction, args.hostile, args.minrad, args.startAware, args.noBullet, args.hideTimer, args.pathfind, args.mod, args.boundTo, args.weakBinding, args.teleportTime, args.ox, args.oy)
}

export const KinkyDungeonBulletDoT = KinkyDungeonBulletDoT;
export const KinkyDungeonBulletTrail = KinkyDungeonBulletTrail;

interface IKinkyDungeonBulletsCheckCollisionParameters {
    bullet: any;
    AoE: any;
    force: any;
    d: any;
    inWarningOnly: any;
    delta: any;
}

export function PackedKinkyDungeonBulletsCheckCollision(args: IKinkyDungeonBulletsCheckCollisionParameters) {
    KinkyDungeonBulletsCheckCollision(args.bullet, args.AoE, args.force, args.d, args.inWarningOnly, args.delta)
}

export const KDBulletAoECanHitEntity = KDBulletAoECanHitEntity;
export const KDBulletCanHitEntity = KDBulletCanHitEntity;
export const KDBulletEffectTiles = KDBulletEffectTiles;
export const KDBulletHitPlayer = KDBulletHitPlayer;
export const KDBulletHitEnemy = KDBulletHitEnemy;
export const KDBulletID = KDBulletID;

interface IKinkyDungeonLaunchBulletParameters {
    x: any;
    y: any;
    targetx: any;
    targety: any;
    speed: any;
    bullet: any;
    miscast: any;
    ox: any;
    oy: any;
}

export function PackedKinkyDungeonLaunchBullet(args: IKinkyDungeonLaunchBulletParameters) {
    KinkyDungeonLaunchBullet(args.x, args.y, args.targetx, args.targety, args.speed, args.bullet, args.miscast, args.ox, args.oy)
}

export const KinkyDungeonDrawFight = KinkyDungeonDrawFight;
export const KinkyDungeonSendWeaponEvent = KinkyDungeonSendWeaponEvent;
export const KinkyDungeonSendBulletEvent = KinkyDungeonSendBulletEvent;
export const KDHealRepChange = KDHealRepChange;
export const KDApplyGenBuffs = KDApplyGenBuffs;
export const KDSilenceEnemy = KDSilenceEnemy;
export const KDBlindEnemy = KDBlindEnemy;
export const KDDisarmEnemy = KDDisarmEnemy;
export const KDCheckCondition = KDCheckCondition;
export const KDCheckPrereq = KDCheckPrereq;
export const KDBulletAoEMod = KDBulletAoEMod;
export const KDBulletTrailAoEMod = KDBulletTrailAoEMod;

interface IAOEConditionParameters {
    bx: number;
    by: number;
    xx: number;
    yy: number;
    rad: number;
    modifier: string;
    originx: any;
    originy: any;
}

export function PackedAOECondition(args: IAOEConditionParameters) {
    AOECondition(args.bx, args.by, args.xx, args.yy, args.rad, args.modifier, args.originx, args.originy)
}

export const KDCreateParticle = KDCreateParticle;
export const KDIsTeasing = KDIsTeasing;

interface IKDDealEnvironmentalDamageParameters {
    x: number;
    y: number;
    aoe: number;
    Damage: any;
    Attacker: any;
}

export function PackedKDDealEnvironmentalDamage(args: IKDDealEnvironmentalDamageParameters) {
    KDDealEnvironmentalDamage(args.x, args.y, args.aoe, args.Damage, args.Attacker)
}

export const KDCanOffhand = KDCanOffhand;
export const KDWeaponIsMagic = KDWeaponIsMagic;
export const KDEvasiveManeuversCost = KDEvasiveManeuversCost;
export const KDProcessInput = KDProcessInput;
export const KDSendInput = KDSendInput;
export const KDProcessInputs = KDProcessInputs;
export const KDHandleGame = KDHandleGame;
export const KinkyDungeonDrawInterface = KinkyDungeonDrawInterface;
export const KDDrawSpellChoices = KDDrawSpellChoices;
export const KDCycleSpellPage = KDCycleSpellPage;
export const KinkyDungeonCanSleep = KinkyDungeonCanSleep;
export const KDLinspace = KDLinspace;
export const KDSteps = KDSteps;
export const KDDrawStatusBars = KDDrawStatusBars;
export const KDDrawWeaponSwap = KDDrawWeaponSwap;
export const KinkyDungeonDrawActionBar = KinkyDungeonDrawActionBar;
export const KDAutoStruggleClick = KDAutoStruggleClick;
export const KinkyDungeonActivateWeaponSpell = KinkyDungeonActivateWeaponSpell;
export const KinkyDungeonRangedAttack = KinkyDungeonRangedAttack;
export const KinkyDungeonHandleHUD = KinkyDungeonHandleHUD;
export const KinkyDungeonUpdateStruggleGroups = KinkyDungeonUpdateStruggleGroups;
export const KDCanStruggle = KDCanStruggle;
export const KDCanRemove = KDCanRemove;
export const KDGetItemLinkIndex = KDGetItemLinkIndex;
export const KDDrawNavBar = KDDrawNavBar;
export const KDCullSpellChoices = KDCullSpellChoices;
export const KDSetFocusControl = KDSetFocusControl;
export const KDInitFocusControl = KDInitFocusControl;
export const KDSetFocusControlToggle = KDSetFocusControlToggle;
export const KDInputFocusControlToggle = KDInputFocusControlToggle;
export const KDDrawMinimap = KDDrawMinimap;
export const KDDrawPartyMembers = KDDrawPartyMembers;
export const KDGetStatsWeaponCast = KDGetStatsWeaponCast;
export const KDProcessBuffIcons = KDProcessBuffIcons;
export const KDDrawBuffIcons = KDDrawBuffIcons;
export const KDDrawStruggleGroups = KDDrawStruggleGroups;
export const KDTightnessRank = KDTightnessRank;
export const KDWallVert = KDWallVert;
export const KDWallVertAbove = KDWallVertAbove;
export const KDWallVertBoth = KDWallVertBoth;
export const KDWallHorizTunnel = KDWallHorizTunnel;
export const KDWallVertTunnel = KDWallVertTunnel;

interface IKinkyDungeonGetSpriteParameters {
    code: any;
    x: any;
    y: any;
    Fog: any;
    noReplace: any;
}

export function PackedKinkyDungeonGetSprite(args: IKinkyDungeonGetSpriteParameters) {
    KinkyDungeonGetSprite(args.code, args.x, args.y, args.Fog, args.noReplace)
}

interface IKinkyDungeonGetSpriteOverlay2Parameters {
    code: any;
    x: any;
    y: any;
    Fog: any;
    noReplace: any;
}

export function PackedKinkyDungeonGetSpriteOverlay2(args: IKinkyDungeonGetSpriteOverlay2Parameters) {
    KinkyDungeonGetSpriteOverlay2(args.code, args.x, args.y, args.Fog, args.noReplace)
}

interface IKinkyDungeonGetSpriteOverlayParameters {
    code: any;
    x: any;
    y: any;
    Fog: any;
    noReplace: any;
}

export function PackedKinkyDungeonGetSpriteOverlay(args: IKinkyDungeonGetSpriteOverlayParameters) {
    KinkyDungeonGetSpriteOverlay(args.code, args.x, args.y, args.Fog, args.noReplace)
}

export const KinkyDungeonDrawGame = KinkyDungeonDrawGame;

interface IKDDrawArousalScreenFilterParameters {
    y1: number;
    h: number;
    Width: number;
    ArousalOverride: number;
    Color?: string;
    AlphaBonus?: number;
}

export function PackedKDDrawArousalScreenFilter(args: IKDDrawArousalScreenFilterParameters) {
    KDDrawArousalScreenFilter(args.y1, args.h, args.Width, args.ArousalOverride, args.Color, args.AlphaBonus)
}

export const KDCanAttack = KDCanAttack;

interface IKinkyDungeonSendFloaterParameters {
    Entity: any;
    Amount: any;
    Color: any;
    Time: any;
    LocationOverride: any;
    suff?: string;
}

export function PackedKinkyDungeonSendFloater(args: IKinkyDungeonSendFloaterParameters) {
    KinkyDungeonSendFloater(args.Entity, args.Amount, args.Color, args.Time, args.LocationOverride, args.suff)
}

export const KinkyDungeonDrawFloaters = KinkyDungeonDrawFloaters;
export const KDEase = KDEase;
export const KinkyDungeonDrawMessages = KinkyDungeonDrawMessages;
export const KDhexToRGB = KDhexToRGB;
export const KinkyDungeonUpdateVisualPosition = KinkyDungeonUpdateVisualPosition;
export const KinkyDungeonSetTargetLocation = KinkyDungeonSetTargetLocation;
export const KDGetMoveDirection = KDGetMoveDirection;
export const KinkyDungeonSetMoveDirection = KinkyDungeonSetMoveDirection;

interface IDrawBoxKDParameters {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Color: string;
    NoBorder?: boolean;
    Alpha?: number;
    zIndex?: number;
}

export function PackedDrawBoxKD(args: IDrawBoxKDParameters) {
    DrawBoxKD(args.Left, args.Top, args.Width, args.Height, args.Color, args.NoBorder, args.Alpha, args.zIndex)
}

interface IDrawBoxKDToParameters {
    Container: any;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Color: string;
    NoBorder?: boolean;
    Alpha?: number;
    zIndex?: number;
}

export function PackedDrawBoxKDTo(args: IDrawBoxKDToParameters) {
    DrawBoxKDTo(args.Container, args.Left, args.Top, args.Width, args.Height, args.Color, args.NoBorder, args.Alpha, args.zIndex)
}

interface IDrawTextFitKDParameters {
    Text: any;
    X: any;
    Y: any;
    Width: any;
    Color: any;
    BackColor?: any;
    FontSize?: any;
    Align?: any;
    zIndex?: any;
    alpha?: any;
    border?: any;
    unique?: boolean;
}

export function PackedDrawTextFitKD(args: IDrawTextFitKDParameters) {
    DrawTextFitKD(args.Text, args.X, args.Y, args.Width, args.Color, args.BackColor, args.FontSize, args.Align, args.zIndex, args.alpha, args.border, args.unique)
}

interface IDrawTextFitKDToParameters {
    Container: any;
    Text: any;
    X: any;
    Y: any;
    Width: any;
    Color: any;
    BackColor?: any;
    FontSize?: any;
    Align?: any;
    zIndex?: any;
    alpha?: any;
    border?: any;
    unique?: boolean;
}

export function PackedDrawTextFitKDTo(args: IDrawTextFitKDToParameters) {
    DrawTextFitKDTo(args.Container, args.Text, args.X, args.Y, args.Width, args.Color, args.BackColor, args.FontSize, args.Align, args.zIndex, args.alpha, args.border, args.unique)
}

interface IDrawTextKDParameters {
    Text: any;
    X: any;
    Y: any;
    Color: any;
    BackColor?: any;
    FontSize?: any;
    Align?: any;
    zIndex?: any;
    alpha?: any;
    border?: any;
}

export function PackedDrawTextKD(args: IDrawTextKDParameters) {
    DrawTextKD(args.Text, args.X, args.Y, args.Color, args.BackColor, args.FontSize, args.Align, args.zIndex, args.alpha, args.border)
}

export const DrawTextVisKD = DrawTextVisKD;
export const DrawRectKD = DrawRectKD;
export const DrawCircleKD = DrawCircleKD;
export const DrawCrossKD = DrawCrossKD;
export const FillRectKD = FillRectKD;

interface IDrawButtonVisParameters {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Label: string;
    Color: string;
    Image?: string;
    HoveringText?: string;
    Disabled?: boolean;
    NoBorder?: boolean;
    FillColor?: string;
    FontSize?: number;
    ShiftText?: boolean;
    Stretch?: boolean;
    zIndex?: number;
    options?: { noTextBG?: boolean; alpha?: number; zIndex?: number; scaleImage?: boolean; centered?: boolean; centerText?: boolean; tint?: string; hotkey?: string; hotkeyPress?: string; };
}

export function PackedDrawButtonVis(args: IDrawButtonVisParameters) {
    DrawButtonVis(args.Left, args.Top, args.Width, args.Height, args.Label, args.Color, args.Image, args.HoveringText, args.Disabled, args.NoBorder, args.FillColor, args.FontSize, args.ShiftText, args.Stretch, args.zIndex, args.options)
}

interface IDrawButtonVisToParameters {
    Container: any;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Label: string;
    Color: string;
    Image?: string;
    HoveringText?: string;
    Disabled?: boolean;
    NoBorder?: boolean;
    FillColor?: string;
    FontSize?: number;
    ShiftText?: boolean;
    Stretch?: boolean;
    zIndex?: number;
    options?: { noTextBG?: boolean; alpha?: number; zIndex?: number; unique?: boolean; scaleImage?: boolean; centered?: boolean; centerText?: boolean; tint?: string; hotkey?: string; hotkeyPress?: string; };
}

export function PackedDrawButtonVisTo(args: IDrawButtonVisToParameters) {
    DrawButtonVisTo(args.Container, args.Left, args.Top, args.Width, args.Height, args.Label, args.Color, args.Image, args.HoveringText, args.Disabled, args.NoBorder, args.FillColor, args.FontSize, args.ShiftText, args.Stretch, args.zIndex, args.options)
}

interface IDrawCheckboxVisParameters {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Text: string;
    IsChecked: boolean;
    Disabled?: boolean;
    TextColor?: string;
    CheckImage?: string;
    options?: { noTextBG?: boolean; alpha?: number; zIndex?: number; };
}

export function PackedDrawCheckboxVis(args: IDrawCheckboxVisParameters) {
    DrawCheckboxVis(args.Left, args.Top, args.Width, args.Height, args.Text, args.IsChecked, args.Disabled, args.TextColor, args.CheckImage, args.options)
}

interface IDrawCheckboxKDExParameters {
    name: string;
    func: (bdata: any) => boolean;
    enabled: boolean;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Text: string;
    IsChecked: boolean;
    Disabled?: boolean;
    TextColor?: string;
    CheckImage?: string;
    options?: { noTextBG?: boolean; alpha?: number; zIndex?: number; maxWidth?: number; fontSize?: number; scaleImage?: boolean; };
}

export function PackedDrawCheckboxKDEx(args: IDrawCheckboxKDExParameters) {
    DrawCheckboxKDEx(args.name, args.func, args.enabled, args.Left, args.Top, args.Width, args.Height, args.Text, args.IsChecked, args.Disabled, args.TextColor, args.CheckImage, args.options)
}

interface IDrawBackNextButtonVisParameters {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Label: string;
    Color: string;
    Image?: string;
    BackText?: () => string;
    NextText?: () => string;
    Disabled?: boolean;
    ArrowWidth?: number;
    NoBorder?: boolean;
    options?: { noTextBG?: boolean; alpha?: number; };
}

export function PackedDrawBackNextButtonVis(args: IDrawBackNextButtonVisParameters) {
    DrawBackNextButtonVis(args.Left, args.Top, args.Width, args.Height, args.Label, args.Color, args.Image, args.BackText, args.NextText, args.Disabled, args.ArrowWidth, args.NoBorder, args.options)
}

interface IKDDrawMapParameters {
    CamX: number;
    CamY: number;
    CamX_offset: number;
    CamY_offset: number;
    CamX_offsetVis: any;
    CamY_offsetVis: any;
    Debug?: boolean;
}

export function PackedKDDrawMap(args: IKDDrawMapParameters) {
    KDDrawMap(args.CamX, args.CamY, args.CamX_offset, args.CamY_offset, args.CamX_offsetVis, args.CamY_offsetVis, args.Debug)
}

interface IKDDrawParameters {
    Container: any;
    Map: Map<string, any>;
    id: any;
    Image: string;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Rotation?: number;
    options?: any;
    Centered?: boolean;
    SpritesDrawn?: Map<string, boolean>;
    Scale?: number;
    Nearest?: boolean;
}

export function PackedKDDraw(args: IKDDrawParameters) {
    KDDraw(args.Container, args.Map, args.id, args.Image, args.Left, args.Top, args.Width, args.Height, args.Rotation, args.options, args.Centered, args.SpritesDrawn, args.Scale, args.Nearest)
}

export const KDTex = KDTex;
export const string2hex = string2hex;
export const GetAdjacentList = GetAdjacentList;
export const KDUpdateVision = KDUpdateVision;
export const KDGetTileColor = KDGetTileColor;
export const KDDrawTileTooltip = KDDrawTileTooltip;

interface IKDETileTooltipSimpleParameters {
    tile: effectTile;
    TooltipList: any[];
    color: string;
    extra?: string;
    descColor?: string;
    extraColor?: string;
}

export function PackedKDETileTooltipSimple(args: IKDETileTooltipSimpleParameters) {
    KDETileTooltipSimple(args.tile, args.TooltipList, args.color, args.extra, args.descColor, args.extraColor)
}

export const KDDrawEffectTileTooltip = KDDrawEffectTileTooltip;
export const KDDrawTooltip = KDDrawTooltip;

interface IKDTextAreaParameters {
    Name: string;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
}

export function PackedKDTextArea(args: IKDTextAreaParameters) {
    KDTextArea(args.Name, args.Left, args.Top, args.Width, args.Height)
}

interface IKDTextFieldParameters {
    Name: string;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Type?: string;
    Value?: string;
    MaxLength?: string;
}

export function PackedKDTextField(args: IKDTextFieldParameters) {
    KDTextField(args.Name, args.Left, args.Top, args.Width, args.Height, args.Type, args.Value, args.MaxLength)
}

export const KDCullTempElements = KDCullTempElements;

interface IKDElementPositionParameters {
    ElementID: string;
    X: number;
    Y: number;
    W: number;
    H?: number;
}

export function PackedKDElementPosition(args: IKDElementPositionParameters) {
    KDElementPosition(args.ElementID, args.X, args.Y, args.W, args.H)
}

export const KDShowQuickInv = KDShowQuickInv;
export const KDPlayerDrawPoseButtons = KDPlayerDrawPoseButtons;
export const KDGetLightColor = KDGetLightColor;
export const KDGetLightColorGreyscale = KDGetLightColorGreyscale;
export const KDMouseInPlayableArea = KDMouseInPlayableArea;
export const KDHotkeyToText = KDHotkeyToText;
export const KDGetTargetRetType = KDGetTargetRetType;
export const KDDrawPalettes = KDDrawPalettes;
export const KDGetOutlineFilter = KDGetOutlineFilter;
export const KDClearOutlineFilterCache = KDClearOutlineFilterCache;
export const KinkyDungeonSearchSpell = KinkyDungeonSearchSpell;
export const KinkyDungeonFindSpell = KinkyDungeonFindSpell;
export const KinkyDungeonDisableSpell = KinkyDungeonDisableSpell;
export const KinkyDungeonResetMagic = KinkyDungeonResetMagic;
export const KDPushSpell = KDPushSpell;
export const KDUpdateSpellCache = KDUpdateSpellCache;
export const KDHasSpell = KDHasSpell;
export const KDGetUpcast = KDGetUpcast;
export const KDHasUpcast = KDHasUpcast;
export const KDCanUpcast = KDCanUpcast;
export const KDEmpower = KDEmpower;

interface IKinkyDungeoCheckComponentsPartialParameters {
    spell: any;
    x: any;
    y: any;
    includeFull: any;
    noOverride: any;
}

export function PackedKinkyDungeoCheckComponentsPartial(args: IKinkyDungeoCheckComponentsPartialParameters) {
    KinkyDungeoCheckComponentsPartial(args.spell, args.x, args.y, args.includeFull, args.noOverride)
}

export const KinkyDungeoCheckComponents = KinkyDungeoCheckComponents;
export const KinkyDungeonHandleSpellChoice = KinkyDungeonHandleSpellChoice;
export const KDSpellIgnoreComp = KDSpellIgnoreComp;
export const KinkyDungeonHandleSpellCast = KinkyDungeonHandleSpellCast;
export const KinkyDungeonClickSpell = KinkyDungeonClickSpell;
export const KinkyDungeonHandleSpell = KinkyDungeonHandleSpell;
export const KinkyDungeonGetStaminaCost = KinkyDungeonGetStaminaCost;
export const KinkyDungeonGetManaCost = KinkyDungeonGetManaCost;
export const KinkyDungeonGetChargeCost = KinkyDungeonGetChargeCost;
export const KinkyDungeonGetCost = KinkyDungeonGetCost;
export const KinkyDungeonMakeNoise = KinkyDungeonMakeNoise;

interface IKinkyDungeonCastSpellParameters {
    targetX: number;
    targetY: number;
    spell: spell;
    enemy: any;
    player: any;
    bullet: any;
    forceFaction?: string;
    castData?: any;
}

export function PackedKinkyDungeonCastSpell(args: IKinkyDungeonCastSpellParameters) {
    KinkyDungeonCastSpell(args.targetX, args.targetY, args.spell, args.enemy, args.player, args.bullet, args.forceFaction, args.castData)
}

export const KinkyDungeonClickSpellChoice = KinkyDungeonClickSpellChoice;
export const KinkyDungeonClickItemChoice = KinkyDungeonClickItemChoice;
export const KinkyDungeonHandleMagic = KinkyDungeonHandleMagic;
export const KDGetPrerequisite = KDGetPrerequisite;
export const KinkyDungeonCheckSpellPrerequisite = KinkyDungeonCheckSpellPrerequisite;
export const KinkyDungeonDetectLanguageForMaxWidth = KinkyDungeonDetectLanguageForMaxWidth;
export const KinkyDungeonWordWrap = KinkyDungeonWordWrap;
export const KinkyDungeonTestWhite = KinkyDungeonTestWhite;
export const KDSchoolColor = KDSchoolColor;
export const KinkyDungeonDrawMagic = KinkyDungeonDrawMagic;
export const KDFilterSpellPages = KDFilterSpellPages;
export const KDFilterSpellPageNames = KDFilterSpellPageNames;
export const KDCorrectCurrentSpellPage = KDCorrectCurrentSpellPage;
export const KDFilterSpell = KDFilterSpell;
export const KinkyDungeonListSpells = KinkyDungeonListSpells;
export const KinkyDungeonDrawMagicSpells = KinkyDungeonDrawMagicSpells;
export const KinkyDungeonHandleMagicSpells = KinkyDungeonHandleMagicSpells;
export const KinkyDungeonSpellIndex = KinkyDungeonSpellIndex;
export const KinkyDungeonSetPreviewSpell = KinkyDungeonSetPreviewSpell;
export const KinkyDungeonGetCompList = KinkyDungeonGetCompList;
export const KinkyDungeonSendMagicEvent = KinkyDungeonSendMagicEvent;
export const KDCastSpellToEnemies = KDCastSpellToEnemies;
export const KDMatchTags = KDMatchTags;
export const KinkyDungeonLoadSpellsConfig = KinkyDungeonLoadSpellsConfig;
export const KinkyDungeonSaveSpellsConfig = KinkyDungeonSaveSpellsConfig;
export const KDDrawHotbar = KDDrawHotbar;
export const KDClearChoices = KDClearChoices;
export const KDGetRandomSpell = KDGetRandomSpell;
export const KinkyDungeonGetUnlearnedSpells = KinkyDungeonGetUnlearnedSpells;
export const KDAddSpellPage = KDAddSpellPage;
export const KDDefineSpellPage = KDDefineSpellPage;

interface IKDPlayerEffectRestrainParameters {
    spell: any;
    count: number;
    tags: string[];
    faction: string;
    noDeep?: boolean;
    bypass?: boolean;
    allowEvade?: boolean;
    allowBlock?: boolean;
    allowBondageResist?: boolean;
    Lock?: string;
    options?: { Progressive?: boolean; ProgressiveSkip?: boolean; DontPreferWill?: boolean; Keep?: boolean; RequireWill?: boolean; };
}

export function PackedKDPlayerEffectRestrain(args: IKDPlayerEffectRestrainParameters) {
    KDPlayerEffectRestrain(args.spell, args.count, args.tags, args.faction, args.noDeep, args.bypass, args.allowEvade, args.allowBlock, args.allowBondageResist, args.Lock, args.options)
}

export const KDTestSpellHits = KDTestSpellHits;

interface IKinkyDungeonPlayerEffectParameters {
    target: any;
    damage: any;
    playerEffect: any;
    spell: any;
    faction: any;
    bullet: any;
    entity: any;
}

export function PackedKinkyDungeonPlayerEffect(args: IKinkyDungeonPlayerEffectParameters) {
    KinkyDungeonPlayerEffect(args.target, args.damage, args.playerEffect, args.spell, args.faction, args.bullet, args.entity)
}

interface IKDTripleBuffKillParameters {
    Name: string;
    Target: entity;
    time: number;
    FinalEffect?: (target: entity) => void;
    buffType?: string;
    FirstEffect?: (target: any) => void;
    SecondEffect?: (target: any) => void;
    ThirdEffect?: (target: any) => void;
}

export function PackedKDTripleBuffKill(args: IKDTripleBuffKillParameters) {
    KDTripleBuffKill(args.Name, args.Target, args.time, args.FinalEffect, args.buffType, args.FirstEffect, args.SecondEffect, args.ThirdEffect)
}

export const KDAdvanceSlime = KDAdvanceSlime;
export const KinkyDungeonShrineInit = KinkyDungeonShrineInit;
export const KDGoddessColor = KDGoddessColor;
export const KinkyDungeonShrineAvailable = KinkyDungeonShrineAvailable;
export const KinkyDungeonGenerateShop = KinkyDungeonGenerateShop;
export const KinkyDungeonItemCost = KinkyDungeonItemCost;
export const KinkyDungeonShrineCost = KinkyDungeonShrineCost;
export const KDAddBasic = KDAddBasic;
export const KinkyDungeonPayShrine = KinkyDungeonPayShrine;
export const KinkyDungeonHandleShrine = KinkyDungeonHandleShrine;
export const KinkyDungeonDrawShrine = KinkyDungeonDrawShrine;

interface IKDSummonRevengeMobsParameters {
    x: number;
    y: number;
    Goddess: string;
    mult?: number;
    LevelBoost?: number;
}

export function PackedKDSummonRevengeMobs(args: IKDSummonRevengeMobsParameters) {
    KDSummonRevengeMobs(args.x, args.y, args.Goddess, args.mult, args.LevelBoost)
}

export const KDCanDrinkShrine = KDCanDrinkShrine;
export const KinkyDungeonGetSetPieces = KinkyDungeonGetSetPieces;
export const KinkyDungeonGetMapShrines = KinkyDungeonGetMapShrines;
export const KinkyDungeonTakeOrb = KinkyDungeonTakeOrb;
export const KinkyDungeonDrawOrb = KinkyDungeonDrawOrb;
export const KinkyDungeonHandleOrb = KinkyDungeonHandleOrb;
export const KinkyDungeonTakePerk = KinkyDungeonTakePerk;
export const KinkyDungeonDrawPerkOrb = KinkyDungeonDrawPerkOrb;
export const KDGetPosNegColor = KDGetPosNegColor;
export const KDGetGoddessBonus = KDGetGoddessBonus;

interface IKDDrawRestraintBonusParameters {
    shrine: any;
    x: any;
    y: any;
    width: number;
    FontSize: any;
    align: any;
    zIndex: any;
    alpha: any;
    forceColor: any;
}

export function PackedKDDrawRestraintBonus(args: IKDDrawRestraintBonusParameters) {
    KDDrawRestraintBonus(args.shrine, args.x, args.y, args.width, args.FontSize, args.align, args.zIndex, args.alpha, args.forceColor)
}

export const KDGetShrineQuest = KDGetShrineQuest;
export const KDSetShrineQuest = KDSetShrineQuest;
export const KinkyDungeonDrawDoor = KinkyDungeonDrawDoor;
export const KinkyDungeonDrawLock = KinkyDungeonDrawLock;
export const KinkyDungeonDrawGhost = KinkyDungeonDrawGhost;
export const KinkyDungeonDrawAngel = KinkyDungeonDrawAngel;
export const KinkyDungeonElevatorMessage = KinkyDungeonElevatorMessage;
export const KinkyDungeonGhostMessage = KinkyDungeonGhostMessage;
export const KinkyDungeonAngelMessage = KinkyDungeonAngelMessage;
export const KinkyDungeonFoodMessage = KinkyDungeonFoodMessage;
export const KinkyDungeonMakeGhostDecision = KinkyDungeonMakeGhostDecision;
export const KinkyDungeonDrawCharger = KinkyDungeonDrawCharger;
export const KinkyDungeonDrawTablet = KinkyDungeonDrawTablet;
export const KinkyDungeonDrawFood = KinkyDungeonDrawFood;
export const KinkyDungeonHandleCharger = KinkyDungeonHandleCharger;
export const KDHandleModalArea = KDHandleModalArea;
export const KDElevatorToFloor = KDElevatorToFloor;
export const KinkyDungeonItemDrop = KinkyDungeonItemDrop;

interface IKinkyDungeonDropItemParameters {
    Item: any;
    Origin: any;
    PreferOrigin: any;
    noMsg: any;
    allowEnemies: any;
}

export function PackedKinkyDungeonDropItem(args: IKinkyDungeonDropItemParameters) {
    KinkyDungeonDropItem(args.Item, args.Origin, args.PreferOrigin, args.noMsg, args.allowEnemies)
}

export const KinkyDungeonItemEvent = KinkyDungeonItemEvent;
export const KDAllowUseItems = KDAllowUseItems;
export const KinkyDungeonItemCheck = KinkyDungeonItemCheck;
export const KDCanSeeDroppedItem = KDCanSeeDroppedItem;
export const KDGetItemType = KDGetItemType;
export const KinkyDungeonDrawItems = KinkyDungeonDrawItems;
export const KinkyDungeonDrawHeart = KinkyDungeonDrawHeart;
export const KinkyDungeonHandleHeart = KinkyDungeonHandleHeart;
export const KDDrawItemsTooltip = KDDrawItemsTooltip;
export const KDOutfit = KDOutfit;
export const KinkyDungeonRefreshOutfitCache = KinkyDungeonRefreshOutfitCache;
export const KDGetDressList = KDGetDressList;
export const KinkyDungeonInitializeDresses = KinkyDungeonInitializeDresses;
export const KinkyDungeonDressSet = KinkyDungeonDressSet;
export const KinkyDungeonSetDress = KinkyDungeonSetDress;
export const KinkyDungeonDressPlayer = KinkyDungeonDressPlayer;
export const KDInitProtectedGroups = KDInitProtectedGroups;
export const KinkyDungeonWearForcedClothes = KinkyDungeonWearForcedClothes;
export const KDCharacterAppearanceSetColorForGroup = KDCharacterAppearanceSetColorForGroup;
export const KinkyDungeonGetOutfit = KinkyDungeonGetOutfit;

interface IKDInventoryWearParameters {
    Character: Character;
    AssetName: string;
    AssetGroup: string;
    par?: string;
    color?: string | string[];
    filters?: Record<string, LayerFilter>;
}

export function PackedKDInventoryWear(args: IKDInventoryWearParameters) {
    KDInventoryWear(args.Character, args.AssetName, args.AssetGroup, args.par, args.color, args.filters)
}

export const KDCharacterNaked = KDCharacterNaked;
export const KDCharacterAppearanceNaked = KDCharacterAppearanceNaked;
export const KDApplyItem = KDApplyItem;
export const KDApplyItemLegacy = KDApplyItemLegacy;
export const KinkyDungeonSendOutfitEvent = KinkyDungeonSendOutfitEvent;
export const KDGetExtraPoses = KDGetExtraPoses;
export const KDUpdateTempPoses = KDUpdateTempPoses;
export const KDGetFactionFilters = KDGetFactionFilters;
export const KDConsumable = KDConsumable;
export const KinkyDungeonFindConsumable = KinkyDungeonFindConsumable;
export const KinkyDungeonFindBasic = KinkyDungeonFindBasic;
export const KinkyDungeonFindConsumableOrBasic = KinkyDungeonFindConsumableOrBasic;
export const KinkyDungeonGetInventoryItem = KinkyDungeonGetInventoryItem;
export const KinkyDungeonItemCount = KinkyDungeonItemCount;
export const KinkyDungeonGetShopItem = KinkyDungeonGetShopItem;
export const KinkyDungeonChangeConsumable = KinkyDungeonChangeConsumable;
export const KinkyDungeonConsumableEffect = KinkyDungeonConsumableEffect;
export const KinkyDungeonPotionCollar = KinkyDungeonPotionCollar;
export const KinkyDungeonCanDrink = KinkyDungeonCanDrink;
export const KinkyDungeonAttemptConsumable = KinkyDungeonAttemptConsumable;
export const KinkyDungeonUseConsumable = KinkyDungeonUseConsumable;
export const KDGetRestraintVariant = KDGetRestraintVariant;
export const KDGetConsumableVariant = KDGetConsumableVariant;
export const KDGetWeaponVariant = KDGetWeaponVariant;
export const KDCloseQuickInv = KDCloseQuickInv;
export const KDRestraintSpecial = KDRestraintSpecial;
export const KDSwitchWeapon = KDSwitchWeapon;
export const KinkyDungeonHandleInventory = KinkyDungeonHandleInventory;
export const KinkyDungeonInventoryAddWeapon = KinkyDungeonInventoryAddWeapon;
export const KinkyDungeonInventoryAddLoose = KinkyDungeonInventoryAddLoose;
export const KinkyDungeonInventoryAddOutfit = KinkyDungeonInventoryAddOutfit;
export const KDInventoryType = KDInventoryType;
export const KinkyDungeonFullInventory = KinkyDungeonFullInventory;
export const KinkyDungeonInventoryLength = KinkyDungeonInventoryLength;
export const KinkyDungeonInventoryAdd = KinkyDungeonInventoryAdd;
export const KinkyDungeonInventoryRemove = KinkyDungeonInventoryRemove;
export const KinkyDungeonInventoryRemoveSafe = KinkyDungeonInventoryRemoveSafe;
export const KinkyDungeonInventoryGet = KinkyDungeonInventoryGet;
export const KinkyDungeonInventoryGetSafe = KinkyDungeonInventoryGetSafe;
export const KinkyDungeonInventoryGetLoose = KinkyDungeonInventoryGetLoose;
export const KinkyDungeonInventoryGetConsumable = KinkyDungeonInventoryGetConsumable;
export const KinkyDungeonInventoryGetWeapon = KinkyDungeonInventoryGetWeapon;
export const KinkyDungeonInventoryGetOutfit = KinkyDungeonInventoryGetOutfit;
export const KinkyDungeonAllRestraint = KinkyDungeonAllRestraint;
export const KinkyDungeonAllRestraintDynamic = KinkyDungeonAllRestraintDynamic;
export const KinkyDungeonAllLooseRestraint = KinkyDungeonAllLooseRestraint;
export const KinkyDungeonAllConsumable = KinkyDungeonAllConsumable;
export const KinkyDungeonAllOutfit = KinkyDungeonAllOutfit;
export const KinkyDungeonAllWeapon = KinkyDungeonAllWeapon;
export const KDGetItemPreview = KDGetItemPreview;
export const KDGetGroupPreviewImage = KDGetGroupPreviewImage;
export const KDGetRestraintPreviewImage = KDGetRestraintPreviewImage;

interface IKinkyDungeonFilterInventoryParameters {
    Filter: string;
    enchanted?: boolean;
    ignoreHidden?: boolean;
    ignoreFilters?: boolean;
    click?: string;
    namefilter?: string;
}

export function PackedKinkyDungeonFilterInventory(args: IKinkyDungeonFilterInventoryParameters) {
    KinkyDungeonFilterInventory(args.Filter, args.enchanted, args.ignoreHidden, args.ignoreFilters, args.click, args.namefilter)
}

export const KinkyDungeonDrawInventorySelected = KinkyDungeonDrawInventorySelected;
export const KinkyDungeonDrawInventory = KinkyDungeonDrawInventory;
export const KinkyDungeonSendInventoryEvent = KinkyDungeonSendInventoryEvent;
export const KinkyDungeonSendInventorySelectedEvent = KinkyDungeonSendInventorySelectedEvent;
export const KinkyDungeonSendInventoryIconEvent = KinkyDungeonSendInventoryIconEvent;
export const KinkyDungeonQuickGrid = KinkyDungeonQuickGrid;
export const KinkyDungeonDrawQuickInv = KinkyDungeonDrawQuickInv;
export const KinkyDungeonhandleQuickInv = KinkyDungeonhandleQuickInv;
export const KDDropItemInv = KDDropItemInv;
export const KDSortInventory = KDSortInventory;
export const KDLoadQuickLoadout = KDLoadQuickLoadout;
export const KDSaveQuickLoadout = KDSaveQuickLoadout;
export const KDRemoveInventoryVariant = KDRemoveInventoryVariant;
export const KDRemoveWeaponVariant = KDRemoveWeaponVariant;
export const KDRemoveConsumableVariant = KDRemoveConsumableVariant;

interface IKDPruneInventoryVariantsParameters {
    worn?: boolean;
    loose?: boolean;
    lost?: boolean;
    ground?: boolean;
    hotbar?: boolean;
    entities?: boolean;
}

export function PackedKDPruneInventoryVariants(args: IKDPruneInventoryVariantsParameters) {
    KDPruneInventoryVariants(args.worn, args.loose, args.lost, args.ground, args.hotbar, args.entities)
}

export const KDMorphToInventoryVariant = KDMorphToInventoryVariant;
export const KDGiveWeaponVariant = KDGiveWeaponVariant;

interface IKDGiveConsumableVariantParameters {
    variant: KDConsumableVariant;
    prefix: string;
    forceName: any;
    suffix?: string;
    Quantity?: number;
}

export function PackedKDGiveConsumableVariant(args: IKDGiveConsumableVariantParameters) {
    KDGiveConsumableVariant(args.variant, args.prefix, args.forceName, args.suffix, args.Quantity)
}

interface IKDGiveInventoryVariantParameters {
    variant: KDRestraintVariant;
    prefix?: string;
    curse?: string;
    ID?: string;
    forceName?: string;
    suffix?: string;
    faction?: string;
}

export function PackedKDGiveInventoryVariant(args: IKDGiveInventoryVariantParameters) {
    KDGiveInventoryVariant(args.variant, args.prefix, args.curse, args.ID, args.forceName, args.suffix, args.faction)
}

interface IKDEquipInventoryVariantParameters {
    variant: KDRestraintVariant;
    prefix?: string;
    Tightness?: number;
    Bypass?: boolean;
    Lock?: string;
    Keep?: boolean;
    Trapped?: boolean;
    faction?: string;
    Deep?: boolean;
    curse?: string;
    securityEnemy?: entity;
    useAugmentedPower?: boolean;
    inventoryAs?: string;
    ID?: string;
    suffix?: string;
}

export function PackedKDEquipInventoryVariant(args: IKDEquipInventoryVariantParameters) {
    KDEquipInventoryVariant(args.variant, args.prefix, args.Tightness, args.Bypass, args.Lock, args.Keep, args.Trapped, args.faction, args.Deep, args.curse, args.securityEnemy, args.useAugmentedPower, args.inventoryAs, args.ID, args.suffix)
}

export const KDItem = KDItem;
export const KDGiveItem = KDGiveItem;
export const KDDrawHotbarBottom = KDDrawHotbarBottom;
export const KinkyDungeonMultiplayerUpdate = KinkyDungeonMultiplayerUpdate;
export const KinkyDungeonUnpackData = KinkyDungeonUnpackData;
export const KinkyDungeonUpdateFromData = KinkyDungeonUpdateFromData;
export const KinkyDungeonPackData = KinkyDungeonPackData;
export const KinkyDungeonSendData = KinkyDungeonSendData;
export const KinkyDungeonHandleData = KinkyDungeonHandleData;
export const KinkyDungeonNewLore = KinkyDungeonNewLore;
export const KinkyDungeonUpdateTabs = KinkyDungeonUpdateTabs;
export const KinkyDungeonDrawLore = KinkyDungeonDrawLore;
export const KDDrawLoreRepTabs = KDDrawLoreRepTabs;
export const KinkyDungeonUpdateLore = KinkyDungeonUpdateLore;
export const KinkyDungeonHandleLore = KinkyDungeonHandleLore;
export const KDPearlRequirement = KDPearlRequirement;
export const KinkyDungeonInitReputation = KinkyDungeonInitReputation;
export const KinkyDungeonRepName = KinkyDungeonRepName;
export const KinkyDungeonRepNameFaction = KinkyDungeonRepNameFaction;
export const KinkyDungeonChangeFactionRep = KinkyDungeonChangeFactionRep;
export const KinkyDungeonChangeRep = KinkyDungeonChangeRep;
export const KinkyDungeonHandleReputation = KinkyDungeonHandleReputation;
export const KinkyDungeonDrawReputation = KinkyDungeonDrawReputation;
export const KinkyDungeonDrawFactionRep = KinkyDungeonDrawFactionRep;
export const KinkyDungeonPenanceCost = KinkyDungeonPenanceCost;
export const KinkyDungeonCanPenance = KinkyDungeonCanPenance;
export const KinkyDungeonAidManaCost = KinkyDungeonAidManaCost;
export const KinkyDungeonAidManaAmount = KinkyDungeonAidManaAmount;
export const KinkyDungeonCanAidMana = KinkyDungeonCanAidMana;
export const KinkyDungeonRescueTiles = KinkyDungeonRescueTiles;
export const KinkyDungeonCanRescue = KinkyDungeonCanRescue;
export const KinkyDungeonUpdateAngel = KinkyDungeonUpdateAngel;
export const KinkyDungeonCreateAngel = KinkyDungeonCreateAngel;

interface IKinkyDungeonHandleStepOffTrapsParameters {
    entity: any;
    x: any;
    y: any;
    moveX: any;
    moveY: any;
}

export function PackedKinkyDungeonHandleStepOffTraps(args: IKinkyDungeonHandleStepOffTrapsParameters) {
    KinkyDungeonHandleStepOffTraps(args.entity, args.x, args.y, args.moveX, args.moveY)
}

export const KinkyDungeonHandleTraps = KinkyDungeonHandleTraps;
export const KDTrigPanic = KDTrigPanic;
export const KinkyDungeonGetGoddessTrapTypes = KinkyDungeonGetGoddessTrapTypes;
export const KinkyDungeonGetTrap = KinkyDungeonGetTrap;

interface IKDSmokePuffParameters {
    x: any;
    y: any;
    radius: any;
    density: any;
    nomsg: any;
}

export function PackedKDSmokePuff(args: IKDSmokePuffParameters) {
    KDSmokePuff(args.x, args.y, args.radius, args.density, args.nomsg)
}

interface IKDSteamPuffParameters {
    x: any;
    y: any;
    radius: any;
    density: any;
    nomsg: any;
}

export function PackedKDSteamPuff(args: IKDSteamPuffParameters) {
    KDSteamPuff(args.x, args.y, args.radius, args.density, args.nomsg)
}

export const KDWettable = KDWettable;
export const KDConducting = KDConducting;
export const KinkyDungeonHandleTilesEnemy = KinkyDungeonHandleTilesEnemy;
export const KDPeripheralTileEffects = KDPeripheralTileEffects;
export const KinkyDungeonUpdateTileEffects = KinkyDungeonUpdateTileEffects;
export const KinkyDungeonHandleMoveToTile = KinkyDungeonHandleMoveToTile;
export const KDCanEscape = KDCanEscape;
export const KDGetEscapeMinimapText = KDGetEscapeMinimapText;
export const KDGetEscapeDoorText = KDGetEscapeDoorText;
export const KDGetEscapeMethod = KDGetEscapeMethod;
export const KDGetRandomEscapeMethod = KDGetRandomEscapeMethod;
export const KDEffectTileTags = KDEffectTileTags;
export const KinkyDungeonHandleStairs = KinkyDungeonHandleStairs;
export const KinkyDungeonHandleMoveObject = KinkyDungeonHandleMoveObject;
export const KDHasEffectTile = KDHasEffectTile;
export const KDGetEffectTiles = KDGetEffectTiles;
export const KDGetSpecificEffectTile = KDGetSpecificEffectTile;
export const KDCreateEffectTile = KDCreateEffectTile;
export const KDInteractNewTile = KDInteractNewTile;

interface IKDCreateAoEEffectTilesParameters {
    x: number;
    y: number;
    tile: effectTileRef;
    durationMod?: number;
    rad?: number;
    avoidPoint?: { x: number; y: number; };
    density?: number;
    mod?: string;
}

export function PackedKDCreateAoEEffectTiles(args: IKDCreateAoEEffectTilesParameters) {
    KDCreateAoEEffectTiles(args.x, args.y, args.tile, args.durationMod, args.rad, args.avoidPoint, args.density, args.mod)
}

interface IKDRemoveAoEEffectTilesParameters {
    x: number;
    y: number;
    tagsToRemove: string[];
    rad?: number;
    avoidPoint?: { x: number; y: number; };
    density?: number;
    mod?: string;
}

export function PackedKDRemoveAoEEffectTiles(args: IKDRemoveAoEEffectTilesParameters) {
    KDRemoveAoEEffectTiles(args.x, args.y, args.tagsToRemove, args.rad, args.avoidPoint, args.density, args.mod)
}

export const KDApplyAlpha = KDApplyAlpha;
export const KDDrawEffectTiles = KDDrawEffectTiles;
export const KDCanSeeEffectTile = KDCanSeeEffectTile;
export const KDUpdateEffectTiles = KDUpdateEffectTiles;
export const KinkyDungeonUpdateSingleEffectTile = KinkyDungeonUpdateSingleEffectTile;
export const KinkyDungeonUpdateSingleEffectTileStandalone = KinkyDungeonUpdateSingleEffectTileStandalone;
export const KinkyDungeonBulletInteractionSingleEffectTile = KinkyDungeonBulletInteractionSingleEffectTile;
export const KDEffectTileInteractions = KDEffectTileInteractions;

interface IKDMoveEntityParameters {
    enemy: entity;
    x: number;
    y: number;
    willing: boolean;
    dash: any;
    forceHitBullets: any;
    ignoreBlocked?: boolean;
}

export function PackedKDMoveEntity(args: IKDMoveEntityParameters) {
    KDMoveEntity(args.enemy, args.x, args.y, args.willing, args.dash, args.forceHitBullets, args.ignoreBlocked)
}

export const KDStaggerEnemy = KDStaggerEnemy;

interface IKDMovePlayerParameters {
    moveX: any;
    moveY: any;
    willing: any;
    sprint: any;
    forceHitBullets: any;
    suppressNoise: any;
}

export function PackedKDMovePlayer(args: IKDMovePlayerParameters) {
    KDMovePlayer(args.moveX, args.moveY, args.willing, args.sprint, args.forceHitBullets, args.suppressNoise)
}

export const KDSlip = KDSlip;
export const KDInferno = KDInferno;

interface IKDGrowParameters {
    tile: effectTile;
    type: string;
    duration?: number;
    chance?: number;
    refreshDuration?: number;
}

export function PackedKDGrow(args: IKDGrowParameters) {
    KDGrow(args.tile, args.type, args.duration, args.chance, args.refreshDuration)
}

export const KDIgnition = KDIgnition;
export const KDConveyor = KDConveyor;
export const KDAdvanceLevel = KDAdvanceLevel;
export const KDBasicRestraintsMachine_Player = KDBasicRestraintsMachine_Player;
export const KDSlimeImmuneEntity = KDSlimeImmuneEntity;
export const KDSlimeWalker = KDSlimeWalker;
export const KDSlimeImmune = KDSlimeImmune;
export const KDUpdateDoorNavMap = KDUpdateDoorNavMap;
export const KDIsMovable = KDIsMovable;
export const KDIsSmartMovable = KDIsSmartMovable;

interface IKinkyDungeonFindPathParameters {
    startx: number;
    starty: number;
    endx: number;
    endy: number;
    blockEnemy: boolean;
    blockPlayer: boolean;
    ignoreLocks: any;
    Tiles: string;
    RequireLight: any;
    noDoors: any;
    needDoorMemory: any;
    Enemy?: entity;
    trimLongDistance?: boolean;
    heuristicOverride?: (x: number, y: number, xx: number, yy: number) => number;
    taxicab?: boolean;
    ignoreTrafficLaws?: boolean;
}

export function PackedKinkyDungeonFindPath(args: IKinkyDungeonFindPathParameters) {
    KinkyDungeonFindPath(args.startx, args.starty, args.endx, args.endy, args.blockEnemy, args.blockPlayer, args.ignoreLocks, args.Tiles, args.RequireLight, args.noDoors, args.needDoorMemory, args.Enemy, args.trimLongDistance, args.heuristicOverride, args.taxicab, args.ignoreTrafficLaws)
}

interface IKinkyDungeonGetPathParameters {
    closed: any;
    xx: any;
    yy: any;
    endx: any;
    endy: any;
}

export function PackedKinkyDungeonGetPath(args: IKinkyDungeonGetPathParameters) {
    KinkyDungeonGetPath(args.closed, args.xx, args.yy, args.endx, args.endy)
}

interface IKDSetPathfindCacheParameters {
    PathMap: any;
    newPath: any;
    endx: any;
    endy: any;
    Tiles: any;
    Finalindex: any;
}

export function PackedKDSetPathfindCache(args: IKDSetPathfindCacheParameters) {
    KDSetPathfindCache(args.PathMap, args.newPath, args.endx, args.endy, args.Tiles, args.Finalindex)
}

export const KinkyDungeonSendBuffEvent = KinkyDungeonSendBuffEvent;
export const KinkyDungeonTickBuffs = KinkyDungeonTickBuffs;
export const KinkyDungeonTickBuffTag = KinkyDungeonTickBuffTag;
export const KDEntityHasBuffTags = KDEntityHasBuffTags;
export const KDGetBuffsWithTag = KDGetBuffsWithTag;
export const KinkyDungeonRemoveBuffsWithTag = KinkyDungeonRemoveBuffsWithTag;
export const KinkyDungeonUpdateBuffs = KinkyDungeonUpdateBuffs;
export const KDUpdatePlayerShield = KDUpdatePlayerShield;
export const KDDamagePlayerShield = KDDamagePlayerShield;
export const KDBuffEnabled = KDBuffEnabled;
export const KinkyDungeonGetBuffedStat = KinkyDungeonGetBuffedStat;
export const KinkyDungeonGetMaxBuffedStat = KinkyDungeonGetMaxBuffedStat;
export const KinkyDungeonExpireBuff = KinkyDungeonExpireBuff;
export const KinkyDungeonApplyBuffToEntity = KinkyDungeonApplyBuffToEntity;
export const KDApplyBuff = KDApplyBuff;
export const KinkyDungeonGetbuff = KinkyDungeonGetbuff;
export const KinkyDungeonHasBuff = KinkyDungeonHasBuff;
export const KDEntityHasBuff = KDEntityHasBuff;
export const KDEntityBuffedStat = KDEntityBuffedStat;
export const KDEntityMaxBuffedStat = KDEntityMaxBuffedStat;
export const KDEntityGetBuff = KDEntityGetBuff;
export const KDMapHasEvent = KDMapHasEvent;
export const KinkyDungeonSendEvent = KinkyDungeonSendEvent;
export const KinkyDungeonResetEventVariables = KinkyDungeonResetEventVariables;
export const KinkyDungeonResetEventVariablesTick = KinkyDungeonResetEventVariablesTick;
export const KinkyDungeonHandleInventoryIconEvent = KinkyDungeonHandleInventoryIconEvent;
export const KinkyDungeonHandleInventorySelectedEvent = KinkyDungeonHandleInventorySelectedEvent;
export const KinkyDungeonHandleInventoryEvent = KinkyDungeonHandleInventoryEvent;

interface IKinkyDungeonHandleBuffEventParameters {
    Event: string;
    e: any;
    buff: any;
    entity: any;
    data: any;
}

export function PackedKinkyDungeonHandleBuffEvent(args: IKinkyDungeonHandleBuffEventParameters) {
    KinkyDungeonHandleBuffEvent(args.Event, args.e, args.buff, args.entity, args.data)
}

export const KinkyDungeonHandleOutfitEvent = KinkyDungeonHandleOutfitEvent;
export const KinkyDungeonHandleMagicEvent = KinkyDungeonHandleMagicEvent;
export const KinkyDungeonHandleWeaponEvent = KinkyDungeonHandleWeaponEvent;
export const KinkyDungeonHandleBulletEvent = KinkyDungeonHandleBulletEvent;
export const KinkyDungeonHandleEnemyEvent = KinkyDungeonHandleEnemyEvent;
export const KinkyDungeonHandleGenericEvent = KinkyDungeonHandleGenericEvent;
export const KDEventPrereq = KDEventPrereq;
export const KDIsHumanoid = KDIsHumanoid;
export const KDTriggerSpell = KDTriggerSpell;
export const KDAddArcaneEnergy = KDAddArcaneEnergy;
export const KinkyDungeonSendAltEvent = KinkyDungeonSendAltEvent;
export const KinkyDungeonHandleAltEvent = KinkyDungeonHandleAltEvent;
export const KinkyDungeonAddTags = KinkyDungeonAddTags;

interface IKinkyDungeonGetEnemyParameters {
    enemytags: string[];
    Level: number;
    Index: string;
    Tile: string;
    requireTags?: string[];
    alliances?: { requireHostile?: string; requireAllied?: string; requireNonHostile?: string; };
    bonusTags?: Record<string, { bonus: number; mult: number; }>;
    filterTags?: string[];
    requireSingleTag?: string[];
    minWeight?: number;
    minWeightFallback?: boolean;
    noOverrideFloor?: boolean;
}

export function PackedKinkyDungeonGetEnemy(args: IKinkyDungeonGetEnemyParameters) {
    KinkyDungeonGetEnemy(args.enemytags, args.Level, args.Index, args.Tile, args.requireTags, args.alliances, args.bonusTags, args.filterTags, args.requireSingleTag, args.minWeight, args.minWeightFallback, args.noOverrideFloor)
}

export const KinkyDungeonGetEnemyByName = KinkyDungeonGetEnemyByName;
export const KinkyDungeonGetEnemyByName = KinkyDungeonGetEnemyByName;

interface IKinkyDungeonCallGuardParameters {
    x: number;
    y: number;
    noTransgress: boolean;
    normalDrops: boolean;
    requireTags?: string[];
}

export function PackedKinkyDungeonCallGuard(args: IKinkyDungeonCallGuardParameters) {
    KinkyDungeonCallGuard(args.x, args.y, args.noTransgress, args.normalDrops, args.requireTags)
}

export const KinkyDungeonHandleWanderingSpawns = KinkyDungeonHandleWanderingSpawns;
export const KDAssignGuardAction = KDAssignGuardAction;
export const KDGetJailEvent = KDGetJailEvent;
export const KinkyDungeonLoseJailKeys = KinkyDungeonLoseJailKeys;
export const KinkyDungeonUpdateJailKeys = KinkyDungeonUpdateJailKeys;
export const KinkyDungeonAggroFaction = KinkyDungeonAggroFaction;
export const KinkyDungeonPlayerIsVisibleToJailers = KinkyDungeonPlayerIsVisibleToJailers;
export const KinkyDungeonCanPlay = KinkyDungeonCanPlay;
export const KinkyDungeonCheckRelease = KinkyDungeonCheckRelease;
export const KinkyDungeonAggroAction = KinkyDungeonAggroAction;
export const KinkyDungeonStartChase = KinkyDungeonStartChase;
export const KinkyDungeonPlayExcuse = KinkyDungeonPlayExcuse;
export const KDSetPlayCD = KDSetPlayCD;
export const KinkyDungeonGetJailRestraintForGroup = KinkyDungeonGetJailRestraintForGroup;
export const KDJailCondition = KDJailCondition;
export const KDPriorityCondition = KDPriorityCondition;
export const KinkyDungeonGetJailRestraintLevelFor = KinkyDungeonGetJailRestraintLevelFor;
export const KinkyDungeonInJail = KinkyDungeonInJail;
export const KinkyDungeonPlaceJailKeys = KinkyDungeonPlaceJailKeys;
export const KinkyDungeonHandleJailSpawns = KinkyDungeonHandleJailSpawns;
export const KinkyDungeonLockableItems = KinkyDungeonLockableItems;
export const KinkyDungeonMissingJailUniform = KinkyDungeonMissingJailUniform;
export const KinkyDungeonTooMuchRestraint = KinkyDungeonTooMuchRestraint;
export const KDPutInJail = KDPutInJail;
export const KinkyDungeonHandleLeashTour = KinkyDungeonHandleLeashTour;
export const KDGetEffSecurityLevel = KDGetEffSecurityLevel;
export const KinkyDungeonJailGuardGetLeashWaypoint = KinkyDungeonJailGuardGetLeashWaypoint;
export const KinkyDungeonJailGetLeashPoint = KinkyDungeonJailGetLeashPoint;
export const KinkyDungeonPlayerInCell = KinkyDungeonPlayerInCell;
export const KinkyDungeonPointInCell = KinkyDungeonPointInCell;
export const KinkyDungeonPassOut = KinkyDungeonPassOut;
export const KDGetJailDoor = KDGetJailDoor;
export const KDDefeatedPlayerTick = KDDefeatedPlayerTick;
export const KDEnterDemonTransition = KDEnterDemonTransition;
export const KDEnterDollTerminal = KDEnterDollTerminal;
export const KDApplyLivingCollars = KDApplyLivingCollars;
export const KinkyDungeonDefeat = KinkyDungeonDefeat;
export const KDEnemyIsTemporary = KDEnemyIsTemporary;
export const KDKickEnemies = KDKickEnemies;
export const KDResetAllIntents = KDResetAllIntents;
export const KDResetAllAggro = KDResetAllAggro;
export const KDKickEnemy = KDKickEnemy;
export const KDKickEnemyLocal = KDKickEnemyLocal;
export const KinkyDungeonStripInventory = KinkyDungeonStripInventory;
export const KDExpireFlags = KDExpireFlags;
export const KDGetJailRestraints = KDGetJailRestraints;
export const KDFixPlayerClothes = KDFixPlayerClothes;
export const KDResetGuardSpawnTimer = KDResetGuardSpawnTimer;
export const KDChestSecurity = KDChestSecurity;

interface IKinkyDungeonPlaceSetPiecesParameters {
    POI: any;
    trapLocations: any;
    chestlist: any;
    shrinelist: any;
    chargerlist: any;
    spawnPoints: any;
    InJail: any;
    width: any;
    height: any;
}

export function PackedKinkyDungeonPlaceSetPieces(args: IKinkyDungeonPlaceSetPiecesParameters) {
    KinkyDungeonPlaceSetPieces(args.POI, args.trapLocations, args.chestlist, args.shrinelist, args.chargerlist, args.spawnPoints, args.InJail, args.width, args.height)
}

export const KDGetFavoredSetpieces = KDGetFavoredSetpieces;
export const KDGetFavoringSetpieces = KDGetFavoringSetpieces;
export const KinkyDungeonGetSetPiece = KinkyDungeonGetSetPiece;

interface IKinkyDungeonGenerateSetpieceParameters {
    POI: any;
    Piece: any;
    InJail: any;
    trapLocations: any;
    chestlist: any;
    shrinelist: any;
    chargerlist: any;
    spawnPoints: any;
    forcePOI: any;
    altType: any;
    MapParams: any;
}

export function PackedKinkyDungeonGenerateSetpiece(args: IKinkyDungeonGenerateSetpieceParameters) {
    KinkyDungeonGenerateSetpiece(args.POI, args.Piece, args.InJail, args.trapLocations, args.chestlist, args.shrinelist, args.chargerlist, args.spawnPoints, args.forcePOI, args.altType, args.MapParams)
}

export const KDUnblock = KDUnblock;
export const SetpieceSpawnPrisoner = SetpieceSpawnPrisoner;
export const KDTorch = KDTorch;
export const KDTorchUnlit = KDTorchUnlit;
export const KDChest = KDChest;

interface IKDCreateDoorsParameters {
    Left: any;
    Top: any;
    Width: any;
    Height: any;
    openChance?: number;
    convertDoodads?: boolean;
}

export function PackedKDCreateDoors(args: IKDCreateDoorsParameters) {
    KDCreateDoors(args.Left, args.Top, args.Width, args.Height, args.openChance, args.convertDoodads)
}

interface IKDPlaceChestParameters {
    cornerX: any;
    cornerY: any;
    radius: any;
    chestlist: any;
    spawnPoints: any;
    NoAddToChestList: any;
}

export function PackedKDPlaceChest(args: IKDPlaceChestParameters) {
    KDPlaceChest(args.cornerX, args.cornerY, args.radius, args.chestlist, args.spawnPoints, args.NoAddToChestList)
}

export const KDAddPipes = KDAddPipes;
export const KDPersonalitySpread = KDPersonalitySpread;
export const KinkyDungeonCanPutNewDialogue = KinkyDungeonCanPutNewDialogue;
export const KDBasicCheck = KDBasicCheck;
export const KDDialogueApplyPersonality = KDDialogueApplyPersonality;
export const KDGetDialogue = KDGetDialogue;
export const KDDrawDialogue = KDDrawDialogue;
export const KDIncreaseOfferFatigue = KDIncreaseOfferFatigue;
export const KDEnemyHelpfulness = KDEnemyHelpfulness;
export const KDGetSpeaker = KDGetSpeaker;
export const KDGetSpeakerFaction = KDGetSpeakerFaction;
export const KDPleaseSpeaker = KDPleaseSpeaker;
export const KDAddOpinion = KDAddOpinion;
export const KDAllySpeaker = KDAllySpeaker;
export const KDAggroSpeaker = KDAggroSpeaker;
export const KDBasicDialogueSuccessChance = KDBasicDialogueSuccessChance;
export const KDAgilityDialogueSuccessChance = KDAgilityDialogueSuccessChance;
export const KDOffensiveDialogueSuccessChance = KDOffensiveDialogueSuccessChance;

interface IKDStartDialogParameters {
    Dialogue: string;
    Speaker?: string;
    Click?: boolean;
    Personality?: string;
    enemy?: entity;
}

export function PackedKDStartDialog(args: IKDStartDialogParameters) {
    KDStartDialog(args.Dialogue, args.Speaker, args.Click, args.Personality, args.enemy)
}

export const KDDoDialogue = KDDoDialogue;

interface IKDStartDialogInputParameters {
    Dialogue: string;
    Speaker?: string;
    Click?: boolean;
    Personality?: string;
    enemy?: entity;
}

export function PackedKDStartDialogInput(args: IKDStartDialogInputParameters) {
    KDStartDialogInput(args.Dialogue, args.Speaker, args.Click, args.Personality, args.enemy)
}

export const KDDialogueGagged = KDDialogueGagged;
export const KDHandleDialogue = KDHandleDialogue;
export const DialogueCreateEnemy = DialogueCreateEnemy;
export const KDDialogueEnemy = KDDialogueEnemy;

interface IKDAllyDialogueParameters {
    name: any;
    requireTags: any;
    requireSingleTag: any;
    excludeTags: any;
    weight: any;
}

export function PackedKDAllyDialogue(args: IKDAllyDialogueParameters) {
    KDAllyDialogue(args.name, args.requireTags, args.requireSingleTag, args.excludeTags, args.weight)
}

export const KDPrisonerRescue = KDPrisonerRescue;

interface IKDRecruitDialogueParameters {
    name: any;
    faction: any;
    outfitName: any;
    goddess: any;
    restraints: any;
    restraintscount: any;
    restraintsAngry: any;
    restraintscountAngry: any;
    requireTags: any;
    requireSingleTag: any;
    excludeTags: any;
    chance: any;
}

export function PackedKDRecruitDialogue(args: IKDRecruitDialogueParameters) {
    KDRecruitDialogue(args.name, args.faction, args.outfitName, args.goddess, args.restraints, args.restraintscount, args.restraintsAngry, args.restraintscountAngry, args.requireTags, args.requireSingleTag, args.excludeTags, args.chance)
}

interface IKDShopDialogueParameters {
    name: any;
    items: any;
    requireTags: any;
    requireSingleTag: any;
    chance: any;
    itemsdrop: any;
}

export function PackedKDShopDialogue(args: IKDShopDialogueParameters) {
    KDShopDialogue(args.name, args.items, args.requireTags, args.requireSingleTag, args.chance, args.itemsdrop)
}

export const KDShopBuyDialogue = KDShopBuyDialogue;
export const KDYesNoTemplate = KDYesNoTemplate;

interface IKDDialogueTriggerOfferParameters {
    name: string;
    goddess: string[];
    restraintTags: string[];
    allowedPrisonStates: string[];
    allowedPersonalities: string[];
    requireTagsSingle: string[];
    requireTagsSingle2: any;
    requireTags: string[];
    excludeTags: string[];
    requireFlags: string[];
    excludeFlags: string[];
    Lock?: string;
    WeightMult?: number;
}

export function PackedKDDialogueTriggerOffer(args: IKDDialogueTriggerOfferParameters) {
    KDDialogueTriggerOffer(args.name, args.goddess, args.restraintTags, args.allowedPrisonStates, args.allowedPersonalities, args.requireTagsSingle, args.requireTagsSingle2, args.requireTags, args.excludeTags, args.requireFlags, args.excludeFlags, args.Lock, args.WeightMult)
}

interface IKDYesNoBasicParameters {
    name: string;
    goddess: string[];
    antigoddess: string[];
    restraint: string[];
    diffSpread: number[];
    OffdiffSpread: number[];
    count?: number;
    countAngry?: number;
    Lock?: string;
    Ally?: boolean;
    Flags?: { name: string; duration: number; floors?: number; }[];
}

export function PackedKDYesNoBasic(args: IKDYesNoBasicParameters) {
    KDYesNoBasic(args.name, args.goddess, args.antigoddess, args.restraint, args.diffSpread, args.OffdiffSpread, args.count, args.countAngry, args.Lock, args.Ally, args.Flags)
}

interface IKDSaleShopParameters {
    name: any;
    items: any;
    requireTags: any;
    requireSingleTag: any;
    chance: any;
    markup: any;
    itemsdrop: any;
}

export function PackedKDSaleShop(args: IKDSaleShopParameters) {
    KDSaleShop(args.name, args.items, args.requireTags, args.requireSingleTag, args.chance, args.markup, args.itemsdrop)
}

export const DialogueBringNearbyEnemy = DialogueBringNearbyEnemy;
export const DialogueBringSpecific = DialogueBringSpecific;
export const KDIsSubmissiveEnough = KDIsSubmissiveEnough;
export const KDGetModifiedOpinion = KDGetModifiedOpinion;
export const KDAddOffer = KDAddOffer;
export const KDGetOfferLevelMod = KDGetOfferLevelMod;
export const KDRunChefChance = KDRunChefChance;
export const KDItemSubThreshold = KDItemSubThreshold;
export const KDGetShopCost = KDGetShopCost;
export const KDAggroMapFaction = KDAggroMapFaction;

interface IKDDefaultPrereqsParameters {
    enemy: entity;
    AIData: any;
    dist: number;
    maxdist: number;
    chance: number;
    restraintTags: string[];
    force: any;
    Lock?: string;
}

export function PackedKDDefaultPrereqs(args: IKDDefaultPrereqsParameters) {
    KDDefaultPrereqs(args.enemy, args.AIData, args.dist, args.maxdist, args.chance, args.restraintTags, args.force, args.Lock)
}

export const KDShopTrigger = KDShopTrigger;
export const KDRecruitTrigger = KDRecruitTrigger;
export const KDBossTrigger = KDBossTrigger;
export const KDBossLose = KDBossLose;
export const KinkyDungeonGetShopForEnemy = KinkyDungeonGetShopForEnemy;
export const KinkyDungeonAggressive = KinkyDungeonAggressive;
export const KDAllied = KDAllied;
export const KDHostile = KDHostile;
export const KDGetFaction = KDGetFaction;
export const KDGetFactionOriginal = KDGetFactionOriginal;
export const KDFactionHostile = KDFactionHostile;
export const KDFactionAllied = KDFactionAllied;
export const KDFactionFavorable = KDFactionFavorable;

interface IKDGetFactionPropsParameters {
    list: string[];
    Floor: number;
    Checkpoint: string;
    tags: string[];
    bonustags: any;
    X?: number;
    Y?: number;
}

export function PackedKDGetFactionProps(args: IKDGetFactionPropsParameters) {
    KDGetFactionProps(args.list, args.Floor, args.Checkpoint, args.tags, args.bonustags, args.X, args.Y)
}

export const KDGetHonor = KDGetHonor;
export const KDFactionRelation = KDFactionRelation;
export const KDInitFactions = KDInitFactions;
export const KDSetFactionRelation = KDSetFactionRelation;
export const KDChangeFactionRelation = KDChangeFactionRelation;
export const KDFixNeeds = KDFixNeeds;
export const KDTickNeeds = KDTickNeeds;
export const KDNeedsPlaySelf = KDNeedsPlaySelf;
export const KDNeedsOrgasm = KDNeedsOrgasm;
export const KDNeedsEdge = KDNeedsEdge;
export const KDNeedsDeny = KDNeedsDeny;
export const KDCanSpawnShopkeeper = KDCanSpawnShopkeeper;
export const KDRunTests = KDRunTests;
export const KDTestMapGen = KDTestMapGen;
export const KDTestFullRunthrough = KDTestFullRunthrough;
export const KDTestjailer = KDTestjailer;
export const KDExportTranslationFile = KDExportTranslationFile;
export const KDAddTestVariant = KDAddTestVariant;
export const KDListMissingModels = KDListMissingModels;
export const KDCheckForMissingModelLayers = KDCheckForMissingModelLayers;
export const KDCheckForBadModels = KDCheckForBadModels;
export const KDSendMusicToast = KDSendMusicToast;
export const KDDrawMusic = KDDrawMusic;
export const KDGetCurrentCheckpoint = KDGetCurrentCheckpoint;
export const KDGetMusicCheckpoint = KDGetMusicCheckpoint;
export const KDUpdateMusic = KDUpdateMusic;
export const KDPlayMusic = KDPlayMusic;
export const KDEndMusic = KDEndMusic;
export const KinkyDungeonDrawCollection = KinkyDungeonDrawCollection;
export const KDAddCollection = KDAddCollection;
export const KDDrawSelectedCollectionMember = KDDrawSelectedCollectionMember;
export const KDDrawCollectionInventory = KDDrawCollectionInventory;
export const KDSortCollection = KDSortCollection;
export const KDGetEnemyName = KDGetEnemyName;
export const KDDelayedActionPrune = KDDelayedActionPrune;
export const KDAddDelayedAction = KDAddDelayedAction;
export const KDCommanderUpdate = KDCommanderUpdate;
export const KDCommanderUpdateChokes = KDCommanderUpdateChokes;
export const KDCommanderUpdateRoles = KDCommanderUpdateRoles;
export const KDCommanderUpdateOrders = KDCommanderUpdateOrders;
export const KDGetOrdersList = KDGetOrdersList;

interface IKDGetBarricadeParameters {
    enemy: entity;
    x: number;
    y: number;
    checkpoint?: boolean;
    type?: any[];
}

export function PackedKDGetBarricade(args: IKDGetBarricadeParameters) {
    KDGetBarricade(args.enemy, args.x, args.y, args.checkpoint, args.type)
}

interface IKDGetTrapSpellParameters {
    enemy: entity;
    x: number;
    y: number;
    checkpoint?: boolean;
    type?: string[];
}

export function PackedKDGetTrapSpell(args: IKDGetTrapSpellParameters) {
    KDGetTrapSpell(args.enemy, args.x, args.y, args.checkpoint, args.type)
}

export const KDCreateJourneyArea = KDCreateJourneyArea;
export const KDCommitJourneySlots = KDCommitJourneySlots;
export const KDJourneySlotSuccessor = KDJourneySlotSuccessor;
export const KDCullJourneyMap = KDCullJourneyMap;

interface IKDRenderJourneyMapParameters {
    X: number;
    Y: number;
    Width?: number;
    Height?: number;
    ScaleX?: number;
    ScaleY?: number;
    xOffset?: number;
    yOffset?: number;
    spriteSize?: number;
    TextOffset?: number;
}

export function PackedKDRenderJourneyMap(args: IKDRenderJourneyMapParameters) {
    KDRenderJourneyMap(args.X, args.Y, args.Width, args.Height, args.ScaleX, args.ScaleY, args.xOffset, args.yOffset, args.spriteSize, args.TextOffset)
}

export const KDInitJourneyMap = KDInitJourneyMap;

interface IKDDrawJourneyLineParameters {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color: number;
    Canvas?: any;
}

export function PackedKDDrawJourneyLine(args: IKDDrawJourneyLineParameters) {
    KDDrawJourneyLine(args.x1, args.y1, args.x2, args.y2, args.color, args.Canvas)
}

export const KDGetJourneySuccessorCheckpoint = KDGetJourneySuccessorCheckpoint;
export const KDGetModsLoad = KDGetModsLoad;
export const KDDrawMods = KDDrawMods;
export const getFileInput = getFileInput;
export const KDLoadMod = KDLoadMod;
export const KDExecuteModsAndStart = KDExecuteModsAndStart;
export const KDExecuteMods = KDExecuteMods;
export const MainRun = MainRun;
export const KeyDown = KeyDown;
export const Click = Click;
export const TouchStart = TouchStart;
export const TouchEnd = TouchEnd;
export const TouchMove = TouchMove;
export const MouseMove = MouseMove;
export const LoseFocus = LoseFocus;
export const incrementProgress = incrementProgress;
export const LoadTextureAtlas = LoadTextureAtlas;
export const PreloadDisplacement = PreloadDisplacement;
export const load = load;
export const ToNamedMap = ToNamedMap;
export const ToMap = ToMap;
export const ToMapSubtract = ToMapSubtract;
export const ToMapDefault = ToMapDefault;
export const ToMapDupe = ToMapDupe;
export const GenPlaceholderModelNames = GenPlaceholderModelNames;
export const ModelGetMaxPose = ModelGetMaxPose;
export const ModelGetPoseOffsets = ModelGetPoseOffsets;
export const ModelGetPoseRotation = ModelGetPoseRotation;
export const ModelGetPoseMods = ModelGetPoseMods;
export const CheckPoseOrTags = CheckPoseOrTags;
export const KDGetAvailablePosesLegs = KDGetAvailablePosesLegs;
export const KDGetAvailablePosesArms = KDGetAvailablePosesArms;
export const RefreshTempPoses = RefreshTempPoses;
export const KDRefreshPoseOptions = KDRefreshPoseOptions;
export const KDRefreshPoseOptionsMC = KDRefreshPoseOptionsMC;
export const InitLayers = InitLayers;
export const AddModel = AddModel;
export const ToLayerMap = ToLayerMap;

interface IGetModelLayersParameters {
    ModelName: string;
    PrependString?: string;
    AppendString?: string;
    InheritColor?: string;
    PriBonus?: number;
    layerSwap?: string;
    Folder?: string;
}

export function PackedGetModelLayers(args: IGetModelLayersParameters) {
    GetModelLayers(args.ModelName, args.PrependString, args.AppendString, args.InheritColor, args.PriBonus, args.layerSwap, args.Folder)
}

interface IGetModelLayersNoOverrideParameters {
    ModelName: string;
    PrependString?: string;
    AppendString?: string;
    InheritColor?: string;
    PriBonus?: number;
    layerSwap?: string;
    Folder?: string;
}

export function PackedGetModelLayersNoOverride(args: IGetModelLayersNoOverrideParameters) {
    GetModelLayersNoOverride(args.ModelName, args.PrependString, args.AppendString, args.InheritColor, args.PriBonus, args.layerSwap, args.Folder)
}

interface IGetModelWithExtraLayersParameters {
    NewModel: string;
    BaseModel: string;
    Layers: ModelLayer[];
    Parent?: string;
    TopLevel?: boolean;
    ExtraProps?: object;
}

export function PackedGetModelWithExtraLayers(args: IGetModelWithExtraLayersParameters) {
    GetModelWithExtraLayers(args.NewModel, args.BaseModel, args.Layers, args.Parent, args.TopLevel, args.ExtraProps)
}

export const GetModelRestraintVersion = GetModelRestraintVersion;
export const GetModelFashionVersion = GetModelFashionVersion;
export const GetOverCorset = GetOverCorset;
export const DisposeCharacter = DisposeCharacter;

interface IDrawCharacterParameters {
    C: Character;
    X: number;
    Y: number;
    Zoom: number;
    IsHeightResizeAllowed?: boolean;
    DrawCanvas?: any;
    Blend?: any;
    StartMods?: PoseMod[];
    zIndex?: number;
    flip?: boolean;
}

export function PackedDrawCharacter(args: IDrawCharacterParameters) {
    DrawCharacter(args.C, args.X, args.Y, args.Zoom, args.IsHeightResizeAllowed, args.DrawCanvas, args.Blend, args.StartMods, args.zIndex, args.flip)
}

export const LayerIsHidden = LayerIsHidden;
export const LayerLayer = LayerLayer;
export const LayerPri = LayerPri;

interface IDrawCharacterModelsParameters {
    MC: ModelContainer;
    X: any;
    Y: any;
    Zoom: any;
    StartMods: any;
    ContainerContainer: any;
    refreshfilters: boolean;
    flip: boolean;
}

export function PackedDrawCharacterModels(args: IDrawCharacterModelsParameters) {
    DrawCharacterModels(args.MC, args.X, args.Y, args.Zoom, args.StartMods, args.ContainerContainer, args.refreshfilters, args.flip)
}

export const FilterHash = FilterHash;
export const ModelDrawLayer = ModelDrawLayer;

interface IModelLayerHiddenParameters {
    drawLayers: { [_: string]: boolean; };
    MC: ModelContainer;
    Model: Model;
    Layer: ModelLayer;
    Poses: { [_: string]: boolean; };
}

export function PackedModelLayerHidden(args: IModelLayerHiddenParameters) {
    ModelLayerHidden(args.drawLayers, args.MC, args.Model, args.Layer, args.Poses)
}

export const ModelLayerString = ModelLayerString;

interface IModelLayerStringCustomParameters {
    Model: Model;
    Layer: ModelLayer;
    Poses: { [_: string]: boolean; };
    Sprite: string;
    Path?: string;
    useModelFolder?: boolean;
    forceInvariant?: boolean;
    forceMorph?: Record<string, string>;
    noAppend?: boolean;
}

export function PackedModelLayerStringCustom(args: IModelLayerStringCustomParameters) {
    ModelLayerStringCustom(args.Model, args.Layer, args.Poses, args.Sprite, args.Path, args.useModelFolder, args.forceInvariant, args.forceMorph, args.noAppend)
}

export const LayerSprite = LayerSprite;

interface ILayerSpriteCustomParameters {
    Layer: ModelLayer;
    Poses: { [_: string]: boolean; };
    Sprite: string;
    forceInvariant?: boolean;
    forceMorph?: Record<string, string>;
    noAppend?: boolean;
}

export function PackedLayerSpriteCustom(args: ILayerSpriteCustomParameters) {
    LayerSpriteCustom(args.Layer, args.Poses, args.Sprite, args.forceInvariant, args.forceMorph, args.noAppend)
}

export const GetTrimmedAppearance = GetTrimmedAppearance;
export const IsModelLost = IsModelLost;
export const UpdateModels = UpdateModels;
export const ForceRefreshModels = ForceRefreshModels;
export const ForceRefreshModelsAsync = ForceRefreshModelsAsync;
export const KDGetColorableLayers = KDGetColorableLayers;

interface IKDGeneratePoseArrayParameters {
    ArmsPose?: string;
    LegsPose?: string;
    EyesPose?: string;
    BrowsPose?: string;
    BlushPose?: string;
    MouthPose?: string;
    Eyes2Pose?: string;
    Brows2Pose?: string;
    ExtraPose?: string;
}

export function PackedKDGeneratePoseArray(args: IKDGeneratePoseArrayParameters) {
    KDGeneratePoseArray(args.ArmsPose, args.LegsPose, args.EyesPose, args.BrowsPose, args.BlushPose, args.MouthPose, args.Eyes2Pose, args.Brows2Pose, args.ExtraPose)
}

export const KDGetPoseOfType = KDGetPoseOfType;
export const GetUnnamedModels = GetUnnamedModels;

interface IGetHardpointLocParameters {
    C: Character;
    X: number;
    Y: number;
    ZoomInit: number;
    Hardpoint: string;
    Flip: boolean;
}

export function PackedGetHardpointLoc(args: IGetHardpointLocParameters) {
    GetHardpointLoc(args.C, args.X, args.Y, args.ZoomInit, args.Hardpoint, args.Flip)
}

export const KDInitCurrentPose = KDInitCurrentPose;
export const KDDrawSavedColors = KDDrawSavedColors;
export const KDDrawColorSliders = KDDrawColorSliders;

interface IKDDrawPoseButtonsParameters {
    C: any;
    X?: number;
    Y?: number;
    allowRemove?: boolean;
    dress?: boolean;
    updateDesired?: boolean;
}

export function PackedKDDrawPoseButtons(args: IKDDrawPoseButtonsParameters) {
    KDDrawPoseButtons(args.C, args.X, args.Y, args.allowRemove, args.dress, args.updateDesired)
}

export const KDUpdateModelList = KDUpdateModelList;
export const KDChangeWardrobe = KDChangeWardrobe;
export const KDDrawModelList = KDDrawModelList;
export const KDDrawWardrobe = KDDrawWardrobe;
export const KDSaveCodeOutfit = KDSaveCodeOutfit;
export const KDRestoreOutfit = KDRestoreOutfit;
export const KDSaveOutfitInfo = KDSaveOutfitInfo;
export const KDRefreshOutfitInfo = KDRefreshOutfitInfo;
export const hslToRgb = hslToRgb;
export const hueToRgb = hueToRgb;
export const rgbToHsl = rgbToHsl;
