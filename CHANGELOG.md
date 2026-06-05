# Changelog

---

### Version: _0.19.0_

### Date: _2026-06-06_

### Changes:

**Files:**

- **Updated:**
    - `README.md`.

**Mods:**

- **Updated:**

| Mod                         | Previous       | Current        |
| --------------------------- | -------------- | -------------- |
| `GregTech Modern Utilities` | `2.9.1`        | `2.9.2`        |
| `ModernFix`                 | `5.27.40`      | `5.27.44`      |
| `Sophisticated Backpacks`   | `3.24.46.1803` | `3.24.47.1814` |
| `Sophisticated Core`        | `1.3.40.1925`  | `1.3.41.1939`  |
| `Sophisticated Storage`     | `1.4.51.1769`  | `1.4.52.1783`  |

**Items:**

- **Removed:**
    - **Replacements:**
        - `farmersdelight:flint_knife` -> `gtceu:flint_knife`.
        - `farmersdelight:iron_knife` -> `gtceu:iron_knife`.

- **Added:**
    - **Replacements:**
        - `productivebees:honey_bucket` -> `create:honey_bucket`.
        - `ceramicbucket:ceramic_bucket` with `productivebees:honey` -> `ceramicbucket:ceramic_bucket` with `create:honey`.

**Fluids:**

- **Changed:**
    - **Replacements:**
        - `#forge:honey` -> `create:honey` => `productivebees:honey` -> `create:honey`.

---

### Version: _0.18.0_

### Date: _2026-06-05_

### Changes:

**Files:**

- **Updated:** `README.md`.

**Mods:**

- **Updated:**

| Mod                                  | Previous       | Current        |
| ------------------------------------ | -------------- | -------------- |
| `Botanical Machinery Extra Reforked` | `1.2.9.6`      | `1.2.9.7`      |
| `Compressed Engineering`             | `1.4.5`        | `1.4.6`        |
| `Create: Rainbow Compound`           | `1.3.4c`       | `1.3.5.a`      |
| `Create: Vintage`                    | `1.5.9`        | `1.6.0`        |
| `ExtraLib`                           | `3.0.4`        | `3.0.5-FIXED`  |
| `Just Dire Things [Forge]`           | `1.0.29`       | `1.0.30`       |
| `Masterful Machinery Fork`           | `0.1.33.4`     | `0.1.33.6`     |
| `Sophisticated Backpacks`            | `3.24.43.1789` | `3.24.46.1803` |
| `Sophisticated Core`                 | `1.3.38.1893`  | `1.3.40.1925`  |
| `Sophisticated Storage`              | `1.4.48.1754`  | `1.4.51.1769`  |

**Items:**

- **Changed:**
    - **Tags:** Added compatibility tags for item unification.

    - **Replacements:** Added batch replacement mappings to unify items and tags.

**Recipes:**

- **Removed:**
    - **Used IDs:**
        - `apotheosis:cobweb`.
        - `bucketlib:cake`.
        - `create:brass_casing`.
        - `create:crafting/curiosities/cake`.
        - `create:crushing/blaze_rod`, `create:crushing/diamond_horse_armor`, `create:crushing/diorite`, `create:crushing/diorite_recycling`, `create:crushing/gravel`, `create:crushing/leather_horse_armor`, `create:crushing/netherrack`, `create:crushing/obsidian`, `create:crushing/wool`.
        - `create:crushing/compat/immersiveengineering/coke_block`.
        - `create:milling/granite`, `create:milling/saddle`, `create:milling/sandstone`, `create:milling/terracotta`, `create:milling/wheat`.
        - `createaddition:compat/immersiveengineering/crushing/coal_coke`, `createaddition:compat/immersiveengineering/crushing/coke_block`, `createaddition:compat/immersiveengineering/crushing/steel_ingot`.
        - `createfood:minecraft/crafting/shaped/cake_from_shaped`.
        - `createmetallurgy:milling/crushed_raw_iron`.
        - `farmersdelight:cake_from_milk_bottle`.
        - `gtceu:shaped/cake`.
        - `gtmfo:shaped/cake_bottom_by_hand`, `gtmfo:cake_bottom_baked`.
        - `immersiveengineering:crafting/raw_hammercrushing_osmium`.

    - **Used Types:**
        - `immersiveengineering:alloy`: all recipes.

    - **Used Type and Input:**
        - `create:crushing`: input `#forge:ores`.

    - **Used Type and Output:**
        - `minecraft:crafting_shapeless`: output `minecraft:black_wool`, `minecraft:green_wool`, `minecraft:orange_wool`, `minecraft:red_wool`.
        - `create:crushing`: output `apotheosis:gem_dust`, `#forge:crushed_ores`, `#forge:nuggets`.

- **Added:**
    - `botanypots:crop`: `minecraft:melon_seeds`.

    - `cagedmobs:entity_data`: `minecraft:cow`, `minecraft:spider`.

    - `compactcrafting:miniaturization`: `minecraft:cow_spawn_egg`, `minecraft:spider_spawn_egg`.

    - `create:milling`:
        - `botania:blue_petal` -> `minecraft:blue_dye`.
        - `botania:brown_petal` -> `minecraft:brown_dye`.
        - `botania:cyan_petal` -> `minecraft:cyan_dye`.
        - `botania:gray_petal` -> `minecraft:gray_dye`.
        - `botania:light_blue_petal` -> `minecraft:light_blue_dye`.
        - `botania:light_gray_petal` -> `minecraft:light_gray_dye`.
        - `botania:magenta_petal` -> `minecraft:magenta_dye`.
        - `botania:pink_petal` -> `minecraft:pink_dye`.
        - `botania:purple_petal` -> `minecraft:purple_dye`.
        - `botania:white_petal` -> `minecraft:white_dye`.
        - `botania:yellow_petal` -> `minecraft:yellow_dye`.
        - `gtceu:raw_sphalerite` -> `2x gtceu:crushed_sphalerite_ore` + `gtceu:stone_dust`.
        - `minecraft:obsidian` -> `gtceu:obsidian_dust`.
        - `minecraft:raw_gold` -> `2x gtceu:crushed_gold_ore` + `gtceu:stone_dust`.

    - `create:splashing`:
        - `gtceu:crushed_gold_ore` -> `gtceu:purified_gold_ore` + `gtceu:stone_dust` + `gtceu:tiny_copper_dust`.
        - `gtceu:crushed_iron_ore` -> `gtceu:purified_iron_ore` + `gtceu:stone_dust` + `gtceu:tiny_nickel_dust`.
        - `gtceu:crushed_sphalerite_ore` -> `gtceu:purified_sphalerite_ore` + `gtceu:stone_dust` + `gtceu:tiny_yellow_garnet_dust`.
        - `minecraft:black_wool` -> `minecraft:white_wool`.
        - `minecraft:blue_wool` -> `minecraft:white_wool`.
        - `minecraft:brown_wool` -> `minecraft:white_wool`.
        - `minecraft:cyan_wool` -> `minecraft:white_wool`.
        - `minecraft:gray_wool` -> `minecraft:white_wool`.
        - `minecraft:green_wool` -> `minecraft:white_wool`.
        - `minecraft:light_blue_wool` -> `minecraft:white_wool`.
        - `minecraft:light_gray_wool` -> `minecraft:white_wool`.
        - `minecraft:lime_wool` -> `minecraft:white_wool`.
        - `minecraft:magenta_wool` -> `minecraft:white_wool`.
        - `minecraft:orange_wool` -> `minecraft:white_wool`.
        - `minecraft:pink_wool` -> `minecraft:white_wool`.
        - `minecraft:purple_wool` -> `minecraft:white_wool`.
        - `minecraft:red_wool` -> `minecraft:white_wool`.
        - `minecraft:yellow_wool` -> `minecraft:white_wool`.

    - `createmetallurgy:alloying`:
        - `gtceu:copper (144mb)` + `gtceu:zinc (144mb)` -> `gtceu:brass (288mb)`.

    - `createmetallurgy:casting_in_table`:
        - `gtceu:blaze (144mb)` + `minecraft:ender_pearl` -> `minecraft:ender_eye`.
        - `gtceu:brass (144mb)` + `gtceu:ingot_casting_mold` -> `gtceu:brass_ingot`.
        - `gtceu:gold (144mb)` + `gtceu:ingot_casting_mold` -> `minecraft:gold_ingot`.
        - `gtceu:zinc (144mb)` + `gtceu:ingot_casting_mold` -> `gtceu:zinc_ingot`.

    - `createmetallurgy:melting`:
        - `gtceu:refined_gold_ore` -> `gtceu:gold (216mb)`.
        - `gtceu:refined_sphalerite_ore` -> `gtceu:zinc (216mb)`.
        - `gtceu:zinc_block` -> `gtceu:zinc (1296mb)`.
        - `gtceu:zinc_ingot` -> `gtceu:zinc (144mb)`.
        - `minecraft:blaze_rod` -> `gtceu:blaze (432mb)`.
        - `minecraft:gold_block` -> `gtceu:gold (1296mb)`.
        - `minecraft:gold_ingot` -> `gtceu:gold (144mb)`.

    - `immersiveengineering:alloy`:
        - `4x gtceu:brass_ingot` + `#forge:stripped_logs` -> `create:brass_casing`.

    - `lychee:block_interacting`:
        - `botania:brown_petal_block` + `gtceu:sulfur_ore` -> `gtceu:sphalerite_ore`.
        - `botania:orange_petal_block` + `gtceu:sulfur_ore` -> `gtceu:gold_ore`.
        - `botania:yellow_petal_block` + `gtceu:copper_ore` -> `gtceu:gold_ore`.

    - `melter:melting`:
        - `#kubejs:stones` -> `minecraft:lava (125mb)`.
        - `#kubejs:netherracks` -> `minecraft:lava (200mb)`.

    - `minecraft:crafting_shaped`:
        - `mythicbotany:alfsteel_ingot` + `gtceu:obsidian_plate` -> `createmetallurgy:sturdy_whisk`.
        - `gtmfo:sugary_dough` + `gtceu:cylinder_casting_mold` -> `gtmfo:cake_bottom`.

    - `minecraft:crafting_shapeless`:
        - `minecraft:white_wool` + `minecraft:blue_dye` -> `minecraft:blue_wool`.
        - `minecraft:white_wool` + `minecraft:brown_dye` -> `minecraft:brown_wool`.
        - `minecraft:white_wool` + `minecraft:cyan_dye` -> `minecraft:cyan_wool`.
        - `minecraft:white_wool` + `minecraft:gray_dye` -> `minecraft:gray_wool`.
        - `minecraft:white_wool` + `minecraft:light_blue_dye` -> `minecraft:light_blue_wool`.
        - `minecraft:white_wool` + `minecraft:light_gray_dye` -> `minecraft:light_gray_wool`.
        - `minecraft:white_wool` + `minecraft:lime_dye` -> `minecraft:lime_wool`.
        - `minecraft:white_wool` + `minecraft:magenta_dye` -> `minecraft:magenta_wool`.
        - `minecraft:white_wool` + `minecraft:pink_dye` -> `minecraft:pink_wool`.
        - `minecraft:white_wool` + `minecraft:purple_dye` -> `minecraft:purple_wool`.
        - `minecraft:white_wool` + `minecraft:yellow_dye` -> `minecraft:yellow_wool`.

    - `minecraft:smelting`:
        - `gtmfo:cake_bottom` -> `gtmfo:cake_bottom_baked`.

    - `vintage:centrifugation`:
        - `gtceu:purified_gold_ore` -> `gtceu:refined_gold_ore` + `gtceu:stone_dust` + `gtceu:tiny_nickel_dust`.
        - `gtceu:purified_sphalerite_ore` -> `gtceu:refined_sphalerite_ore` + `gtceu:stone_dust` + `gtceu:tiny_gallium_dust`.

    - `vintage:curving`: `gtceu:empty_mold` + `create_hc:shaft` -> `gtceu:cylinder_casting_mold`.

    - `vintage:pressurizing`:
        - `9x minecraft:coal_block` -> `minecraft:diamond`.
        - `gtceu:obsidian_dust` -> `gtceu:obsidian_plate`.

- **Changed:**
    - `botanypots:crop`: tag of `#botania:double_flowers` -> `#botania:double_mystical_flowers`.

    - `cagedmobs:entity_data`: output of `minecraft:chicken`: added normal output `minecraft:egg` and cooked output `farmersdelight:fried_egg`.

    - `lychee:block_interacting`: output of `gtceu:coal_ore`, `gtceu:copper_ore`, `gtceu:iron_ore`, `gtceu:redstone_ore`, `gtceu:sulfur_ore`, `mysticalagriculture:soulium_ore`: `1x` -> `2x`.

    - `melter:melting`: input of `#forge:cobblestone` -> `#kubejs:cobblestones`.

**Quests:**

- **Removed:**
    - `Botania Age II` chapter: `create:powdered_obsidian`, `gtceu:brass_dust`, `gtceu:zinc_dust`, `gtceu:zinc_ingot`, `minecraft:prismarine_crystals`.

    - `Iron Age` chapter: `minecraft:wheat`.

    - `Stone Age` chapter: `strainers:mulch`.

- **Added:**
    - `Botania Age I` chapter: `gtceu:copper_nugget`.

    - `Botania Age II` chapter: `botania:dreamwood`, `botania:dreamwood_log`, `botania:glimmering_livingwood_log`, `botania:mana_diamond`, `botania:mana_pylon`, `botania:rune_autumn`, `botania:rune_pride`, `botania:rune_spring`, `botania:rune_summer`, `botania:rune_winter`, `cagedmobs:milk_drop`, `gtceu:brass_bucket`, `gtceu:crushed_gold_ore`, `gtceu:crushed_sphalerite_ore`, `gtceu:gold_ore`, `gtceu:obsidian_dust`, `gtceu:purified_gold_ore`, `gtceu:refined_gold_ore`, `gtmfo:cake_bottom`, `gtmfo:cake_bottom_baked`, `gtmfo:sugary_dough`, `minecraft:cake`, `minecraft:cobweb`, `minecraft:cow_spawn_egg`, `minecraft:egg`, `minecraft:ender_eye`, `minecraft:gold_ingot`, `minecraft:gray_wool`, `minecraft:light_gray_wool`, `minecraft:melon_seeds`, `minecraft:melon_slice`, `minecraft:milk_bucket`, `minecraft:raw_gold`, `minecraft:snow_block`, `minecraft:spider_eye`, `minecraft:spider_spawn_egg`, `minecraft:sugar`, `mythicbotany:asgard_rune`.

- **Changed:**
    - `Andesite Age` chapter:
        - `create_hc:gear_small`, `create:turntable` quests: added prerequisite `minecraft:oak_slab`.

    - `Botania Age II` chapter: made visible.

    - `Copper Age` chapter:
        - `create:copper_casing`, `botania:mana_string`, `gtceu:andesite_alloy_dust`, `create:andesite_casing` quests: added description.

    - `Iron Age` chapter:
        - `botania:blue_double_flower`, `botania:cyan_double_flower`, `botania:green_double_flower`, `botania:yellow_double_flower` quests: set to optional.

---

### Version: _0.17.0_

### Date: _2026-06-01_

### Changes:

**Files:**

- **Added:** `README.md`, `LICENSE-MIT`, `LICENSE-CC-BY-NC-SA-4.0`.

**Mods:**

- **Removed:** `ae2alchemistryaddon`, `alchemistry`, `alchemylib`, `bonsaitrees3`, `brickfurnace`, `chemlib`, `kubejsalchem`, `legendarytooltips`.

- **Added:** `enderbotanypots`, `globalgamerules`.

- **Updated:** `justdirethings`: `1.0.28` -> `1.0.29`.

**Recipes:**

- **Removed:**
    - `bonsaitrees3:sapling`: `#botania:mystical_flowers`, `minecraft:crimson_fungus`, `minecraft:oak_sapling`, `minecraft:sugar_cane`.

    - `bonsaitrees3:soil`: `botania:vivid_grass`, `minecraft:crimson_nylium`, `minecraft:dirt`, `minecraft:grass_block`, `minecraft:netherrack`, `minecraft:red_sand`, `minecraft:sand`.

    - `brickfurnace:smelting`: `ceramicbucket:ceramic_bucket`, `minecraft:brick`, `minecraft:glass`, `minecraft:smooth_stone`, `minecraft:stone`.

    - `minecraft:crafting_shaped`: `brickfurnace:brick_furnace`.

- **Added:**
    - `botanypots:crop`: `#botania:double_flowers`, `#botania:mystical_flowers`, `minecraft:crimson_fungus`, `minecraft:oak_sapling`, `minecraft:sugar_cane`.

    - `botanypots:soil`: `botania:vivid_grass`, `minecraft:crimson_nylium`, `minecraft:dirt`, `minecraft:grass_block`, `minecraft:netherrack`, `minecraft:sand`.

    - `create:milling`:
        - `botania:lime_petal` -> `minecraft:lime_dye`.
        - `botania:green_petal` -> `minecraft:green_dye`.
        - `botania:black_petal` -> `minecraft:black_dye`.
        - `botania:red_petal` -> `minecraft:red_dye`.
        - `botania:orange_petal` -> `minecraft:orange_dye`.

    - `createmetallurgy:casting_in_table`: `gtceu:copper (144mb)` + `gtceu:ingot_casting_mold` -> `minecraft:copper_ingot`.

    - `createmetallurgy:melting`: `minecraft:iron_ingot` -> `gtceu:iron (144mb)`.

    - `minecraft:campfire_cooking`:
        - `minecraft:cobblestone` -> `minecraft:stone`.
        - `minecraft:stone` -> `minecraft:smooth_stone`.
        - `gtceu:glass_dust` -> `minecraft:glass`.
        - `minecraft:potato` -> `minecraft:baked_potato`.

    - `minecraft:crafting_shaped`: `minecraft:flower_pot`, `rechiseled:chisel`.

    - `minecraft:crafting_shapeless`: `botanypots:terracotta_hopper_botany_pot`.

    - `minecraft:smelting`:
        - `gtceu:compressed_clay` -> `minecraft:brick`.
        - `minecraft:clay` -> `minecraft:terracotta`.
        - `minecraft:potato` -> `minecraft:baked_potato`.
        - `minecraft:cobblestone` -> `minecraft:stone`.
        - `minecraft:stone` -> `minecraft:smooth_stone`.

    - `minecraft:smoking`: `minecraft:potato` -> `minecraft:baked_potato`.

- **Changed:**
    - `create:milling`: processing time of `minecraft:raw_iron`, `minecraft:iron_ingot`, `minecraft:sugar_cane`, `minecraft:raw_copper`, `#minecraft:planks`, `minecraft:wheat`, `minecraft:copper_ingot`, `minecraft:andesite`, `minecraft:nether_wart_block`, `minecraft:stone`, `minecraft:cobblestone`, `minecraft:gravel`: `100t` -> `default`.

    - `minecraft:blasting`: cooking time of `minecraft:copper_ingot`, `gtceu:andesite_alloy_ingot`: `150t` -> `100t`.

    - `minecraft:campfire_cooking`: cooking time and xp of `minecraft:brick`, `ceramicbucket:ceramic_bucket`: `400t` `0.1xp` -> `300t` `0xp`.

    - `minecraft:crafting_shaped`:
        - `woodenhopper:wooden_hopper` + `minecraft:flower_pot` -> `botanypots:terracotta_hopper_botany_pot`.

        - output of `compactcrafting:base`, `compactcrafting:projector_dish`: `4x` -> `1x`.

    - `minecraft:smelting`: output of `minecraft:coal`: `1x` -> `2x`.

**Quests:**

- **Removed:**
    - `Brass Age` chapter: `botania:blaze_block`, `create:powdered_obsidian`, `minecraft:obsidian`.

    - `Stone Age` chapter: `bonsaitrees3:bonsaipot`, `brickfurnace:brick_furnace`, `minecraft:chest`, `minecraft:clay`, `minecraft:terracotta`.

- **Added:**
    - `Botania Age I` chapter: `botanypots:terracotta_hopper_botany_pot`, `minecraft:chest`, `minecraft:clay`, `minecraft:flower_pot`, `minecraft:terracotta`, `woodenhopper:wooden_hopper`.

    - `Botania Age II` chapter: `botania:blaze_block`, `create:powdered_obsidian`, `minecraft:obsidian`.

    - `Stone Age` chapter: `gtceu:brick_wooden_form`, `gtceu:compressed_clay`, `gtceu:empty_wooden_form`, `minecraft:brick`, `minecraft:oak_planks`, `minecraft:oak_slab`, `minecraft:stripped_oak_log`.

- **Changed:**
    - `Brass Age` chapter:
        - `create:chromatic_compound` quest: removed prerequisite `minecraft:obsidian`.

        - `minecraft:ancient_debris` quest: added prerequisite `rainbowcompound:strange_colored_ingot`.

        - `gtceu:obsidian_plate` quest: added prerequisite `create:powdered_obsidian`.

        - `minecraft:amethyst_shard` quest: replaced prerequisite `botania:blaze_block` -> `minecraft:dragon_breath`.

    - `Create Age` chapter: `botania:green_mystical_flower` quest: added prerequisite `create:millstone`.

    - `Productive Bees` chapter: `productivebees:configurable_honeycomb (iron)` quest: removed prerequisite `minecraft:beehive`.

---

### Version: _0.16.0_

### Date: _2026-05-29_

### Changes:

**Mods:**

- **Removed:** `logisticsnetwork`, `summoningrituals`.

- **Updated:** `justdirethings`: `1.0.27` -> `1.0.28`.

**Recipes:**

- **Removed:**
    - `create:milling`: `minecraft:cobblestone`, `minecraft:gravel`, `minecraft:andesite`, `minecraft:bone`.

    - `create:splashing`: `#minecraft:all_small_flowers`.

    - `createaddition:item_application`: `createmetallurgy:kiln_brick`.

    - `create_mechanical_extruder:extruding`: all recipes.

    - `immersiveengineering:crafting`: `immersiveengineering:alloybrick`, `immersiveengineering:sawdust`.

    - `minecraft:crafting_shaped`: `minecraft:blast_furnace`, `#forge:double_plates`, `gtceu:iron_rod`, `createmetallurgy:foundry_basin`.

    - `melter:melting`: `#minecraft:leaves` -> `minecraft:water`.

    - `summoningrituals:altar`: all recipes.

- **Added:**
    - `create:milling`:
        - `minecraft:andesite` -> `gtceu:andesite_dust`.
        - `minecraft:copper_ingot` -> `gtceu:copper_dust`.
        - `minecraft:wheat` -> `gtceu:wheat_dust`.

    - `create:cutting`: `gtceu:iron_rod` -> `2x gtceu:iron_bolt`.

    - `createaddition:rolling`: `minecraft:iron_ingot` -> `gtceu:iron_rod`.

    - `createmetallurgy:casting_in_table`:
        - `gtceu:copper (144mb)` + `gtceu:plate_casting_mold` -> `gtceu:copper_plate`.
        - `gtceu:iron (144mb)` + `gtceu:plate_casting_mold` -> `gtceu:iron_plate`.

    - `createmetallurgy:casting_in_basin`: `gtceu:copper (288mb)` + `minecraft:sandstone` -> `immersiveengineering:alloybrick`.

    - `create_mechanical_extruder:extruding`:
        - `minecraft:water` + `minecraft:lava` -> `minecraft:stone`.
        - `strainers:eroding_water_fluid` + `minecraft:lava` -> `minecraft:andesite`.
        - `strainers:purified_water_fluid` + `minecraft:lava` -> `minecraft:diorite`.
        - `strainers:eroding_water_fluid` + `strainers:purified_water_fluid` -> `minecraft:granite`.

    - `farmersdelight:cutting`:
        - `gtceu:andesite_alloy_block` + `#forge:tools/paxels` -> `create:basin`.
        - `create:basin` + `#forge:tools/paxels` -> `create:chute`.

    - `immersiveengineering:alloy`:
        - `gtceu:copper_dust` + `gtceu:andesite_dust` -> `gtceu:andesite_alloy_dust`.
        - `4x gtceu:andesite_alloy_ingot` + `#forge:stripped_logs` -> `create:andesite_casing`.

    - `lychee:block_interacting`:
        - `botania:orange_petal_block` + `minecraft:stone` -> `gtceu:copper_ore`.
        - `botania:white_petal_block` + `minecraft:stone` -> `gtceu:iron_ore`.
        - `botania:black_petal_block` + `minecraft:stone` -> `gtceu:coal_ore`.
        - `botania:black_petal_block` + `gtceu:iron_ore` -> `gtceu:graphite_ore`.
        - `botania:white_petal_block` + `gtceu:coal_ore` -> `gtceu:graphite_ore`.
        - `botania:red_petal_block` + `minecraft:stone` -> `gtceu:redstone_ore`.
        - `botania:blue_petal_block` + `gtceu:iron_ore` -> `gtceu:lapis_ore`.
        - `botania:yellow_petal_block` + `minecraft:stone` -> `gtceu:sulfur_ore`.
        - `botania:light_gray_petal_block` + `gtceu:iron_ore` -> `gtceu:saltpeter_ore`.
        - `createmetallurgy:refractory_mortar` + `create:basin` -> `createmetallurgy:foundry_basin`.
        - `thermal_extra:soul_sand_dust` + `minecraft:stone` -> `mysticalagriculture:soulstone`.
        - `botania:cyan_petal_block` + `gtceu:iron_ore` -> `mysticalagriculture:prosperity_ore`.
        - `botania:brown_petal_block` + `mysticalagriculture:soulstone` -> `mysticalagriculture:soulium_ore`.

    - `melter:melting`:
        - `gtceu:andesite_alloy_block` -> `gtceu:andesite_alloy (1296mb)`.
        - `minecraft:copper_block` -> `gtceu:copper (1296mb)`.

    - `minecraft:blasting`:
        - `gtceu:andesite_alloy_dust` -> `gtceu:andesite_alloy_ingot`.
        - `minecraft:raw_copper` -> `minecraft:copper_ingot`.

    - `minecraft:crafting_shaped`: `minecraft:blast_furnace`.

- **Changed:**
    - `create:milling`: processing time of `minecraft:raw_iron`, `minecraft:iron_ingot`, `minecraft:sugar_cane`, `minecraft:raw_copper`, `#minecraft:planks`, `minecraft:wheat`, `minecraft:copper_ingot`, `minecraft:andesite`, `minecraft:nether_wart_block`, `minecraft:stone`, `minecraft:cobblestone`, `minecraft:gravel`, `thermal_extra:soul_sand_dust`: `default` -> `100t`.

    - `createmetallurgy:casting_in_basin`, `createmetallurgy:casting_in_table`: casting time of all recipes: `200t` -> `150t`.

    - `vintage:centrifugation`: processing time of all recipes: `200t` -> `150t`.

    - `object_tags`: added `gtceu:wood_plate` to `#forge:bricks`.

    - `replace_objects`: `#forge:dusts/wood` -> `gtceu:wood_dust`.

**Quests:**

- **Removed:**
    - `Botania Age I` chapter: `botania:livingwood_planks`, `botania:livingwood_planks_slab`, `botania:mana_powder`, `botania:stripped_livingwood_log`, `minecraft:red_dye`, `minecraft:red_wool`, `minecraft:sugar`, `minecraft:sugar_cane`, `minecraft:white_wool`, `summoningrituals:altar`.

    - `Create Age` chapter: `minecraft:iron_block`.

- **Added:** `Iron Age` chapter: `minecraft:sugar_cane`.

- **Changed:**
    - `Create Age` chapter: `vintage:centrifuge` quest: added `create:basin`: `0x` -> `4x`.

    - `Botania Age I`, `Create Age`, `Copper Age`, `Stone Age` chapters: adjusted dependency chains.

---

### Version: _0.15.0_

### Date: _2026-05-27_

### Changes:

**Mods:**

- **Removed:** `createdieselgenerators`, `expandedae`, `industrialforegoingsouls`, `spiceoflifeonion`, `survivalfiresticks`, `thermalcultivation`, `tomssimplestorage`, `tomsstoragestaroptimized`, `unlitcampfire`, `youkaisfeasts`.

- **Added:** `ae2alchemistryaddon`, `alchemistry`, `alchemylib`, `caelus`, `chemlib`, `createsifter`, `createhalitosis`, `framedblocks`, `justdirethings`, `kubejsalchem`, `oworld2create`, `pccard`, `rainbowcompound`, `rftoolsbase`, `soulpliedenergistics`, `summoningrituals`, `ultiminerewind`, `xnet`.

- **Updated:**

| Mod                       | Previous       | Current        |
| ------------------------- | -------------- | -------------- |
| `Better Advancements`     | `0.4.2.59`     | `0.4.2.60`     |
| `Botania`                 | `1.20.1-452`   | `1.20.1-453`   |
| `Cognition`               | `2.4.11`       | `2.4.12`       |
| `Create: Connected`       | `1.1.13`       | `1.2.0`        |
| `CreativeCore`            | `2.12.37`      | `2.12.38`      |
| `Cultural Delights`       | `0.16.5`       | `0.16.7`       |
| `ExtraLib`                | `3.0.3`        | `3.0.4`        |
| `GTCEu Terminals`         | `4.6.1`        | `5.6.2`        |
| `ItemPhysic`              | `1.8.12`       | `1.8.13`       |
| `Just Enough Characters`  | `4.6.3`        | `4.6.4`        |
| `Logistics Network`       | `1.3.2`        | `1.3.3`        |
| `ModernFix`               | `5.27.25`      | `5.27.40`      |
| `Sophisticated Backpacks` | `3.24.39.1743` | `3.24.43.1789` |
| `Sophisticated Core`      | `1.3.35.1851`  | `1.3.38.1893`  |
| `Sophisticated Storage`   | `1.4.44.1725`  | `1.4.48.1754`  |
| `Structurify`             | `2.0.24`       | `2.0.25`       |
| `Too Many Recipe Viewers` | `0.7.3`        | `0.8.1`        |
| `XaeroPlus`               | `2.31.3`       | `2.31.5`       |

**Recipes:**

- **Removed:**
    - `ae2cs:pulverizer`: `minecraft:cobblestone`, `minecraft:gravel`, `minecraft:sand`.

    - `create:splashing`: `#forge:crushed_ores`.

    - `minecraft:crafting_shaped`: `#forge:bolts`, `#forge:double_plates`, `#forge:flawless_gems`, `#forge:gems`, `#forge:plates`, `#minecraft:dyes`, `create:encased_chain_drive`, `create:mechanical_mixer`, `immersiveengineering:gunpowder`, `immersiveengineering:lead_white`, `mysticalagriculture:infusion_altar`, `mysticalagriculture:infusion_pedestal`, `thermal:gunpowder_4`.

    - `minecraft:crafting_shapeless`: `hostilenetworks:end_prediction`, `hostilenetworks:nether_prediction`, `hostilenetworks:overworld_prediction`.

    - `mysticalagriculture:infusion`: `#mysticalagriculture:seeds`.

- **Added:**
    - `bonsaitrees3:sapling`: `minecraft:crimson_fungus`, `minecraft:sugar_cane`.

    - `bonsaitrees3:soil`: `minecraft:netherrack`, `minecraft:red_sand`, `minecraft:sand`.

    - `create:compacting`: `2x gtceu:wood_dust` -> `gtceu:wood_plate`.

    - `create:milling`: `#minecraft:planks` -> `6x gtceu:wood_dust`.

    - `create:sequenced_assembly`: `gtceu:brass_ingot` -> `rainbowcompound:strange_colored_ingot`.

    - `createmetallurgy:casting_in_basin`:
        - `minecraft:lava (500mb)` + `minecraft:blackstone` -> `minecraft:magma_block`.
        - `minecraft:water (1000mb)` + `minecraft:magma_block` -> `minecraft:netherrack`.

    - `createmetallurgy:casting_in_table`: `manaliquidizer:mana_fluid (144mb)` + `gtceu:iron_dust` -> `gtceu:manasteel_dust`.

    - `farmersdelight:cutting`: `minecraft:clay_ball` + `gtceu:brick_wooden_form` -> `gtceu:compressed_clay`.

    - `lychee:block_interacting`:
        - `create_hc:gear_small` + `create:shaft` -> `create:cogwheel`.
        - `create_hc:gear_large` + `create:shaft` -> `create:large_cogwheel`.
        - `create_hc:saw_blade` + `create:gearbox` -> `create:mechanical_saw`.
        - `create:gearbox` + `#forge:stone` -> `create:millstone`.
        - `create:copper_valve_handle` + `create:fluid_tank` -> `create:spout`.
        - `#forge:glass_panes` + `create:copper_casing` -> `create:fluid_tank`.
        - `create_hc:gear_small` + `create:andesite_casing` -> `create:gearbox`.
        - `gtceu:copper_plate` + `create:chute` -> `create:fluid_pipe`.
        - `create_hc:gear_small` + `create:fluid_pipe` -> `create:mechanical_pump`.
        - `gtceu:andesite_alloy_nugget` + `create_hc:shaft` -> `create:shaft`.
        - `create_hc:press_head` + `create:gearbox` -> `create:mechanical_press`.
        - `create:turntable` + `create:andesite_casing` -> `create:depot`.
        - `gtceu:andesite_alloy_ingot` + `#minecraft:wooden_slabs` -> `create:turntable`.
        - `create:propeller` + `create:gearshift` -> `create:encased_fan`.
        - `create_hc:gear_small` + `create:clutch` -> `create:gearshift`.
        - `minecraft:redstone_torch` + `create:gearbox` -> `create:clutch`.
        - `create:whisk` + `create:gearbox` -> `create:mechanical_mixer`.
        - `thermal_extra:soul_sand_dust` + `minecraft:stone` -> `mysticalagriculture:soulstone`.

    - `minecraft:crafting_shaped`: `ftbmaterials:niter_block`, `ftbmaterials:sulfur_block`, `gtceu:andesite_alloy_ingot`, `industrialforegoing:pitiful_generator`, `minecraft:clay`, `minecraft:copper_ingot`, `mysticalagriculture:soulium_gemstone`, `pipez:fluid_pipe`, `pipez:wrench`, `summoningrituals:altar`.

    - `minecraft:crafting_shapeless`: `ftbmaterials:niter`, `ftbmaterials:sulfur`, `minecraft:black_wool`, `minecraft:flint`, `minecraft:green_wool`, `minecraft:orange_wool`.

    - `minecraft:smelting`:
        - `gtceu:manasteel_dust` -> `botania:manasteel_ingot`.
        - `gtceu:raw_lapis` -> `6x minecraft:lapis_lazuli`.
        - `gtceu:raw_redstone` -> `5x minecraft:redstone`.

    - `minecraft:shapeless`:
        - `gtceu:andesite_alloy_ingot` -> `9x gtceu:andesite_alloy_nugget`.
        - `minecraft:copper_ingot` -> `9x gtceu:copper_nugget`.

    - `summoningrituals:altar`: `gtceu:coal_ore`, `gtceu:copper_ore`, `gtceu:graphite_ore`, `gtceu:iron_ore`, `gtceu:lapis_ore`, `gtceu:redstone_ore`, `gtceu:saltpeter_ore`, `gtceu:sulfur_ore`, `mysticalagriculture:prosperity_ore`, `mysticalagriculture:soulium_ore`.

    - `vintage:centrifugation`: `minecraft:mycelium` -> `#minecraft:mushrooms`.

    - `vintage:curving`: `gtceu:empty_mold` + `gtceu:wood_plate` -> `gtceu:plate_casting_mold`.

    - `replace_objects`:
        - `create:cinder_flour` -> `gtceu:netherrack_dust`.
        - `#forge:gems/niter` -> `ftbmaterials:niter`.
        - `#forge:gems/sulfur` -> `ftbmaterials:sulfur`.
        - `#forge:dusts/saltpeter` -> `gtceu:saltpeter_dust`.
        - `#forge:dusts/sulfur` -> `gtceu:sulfur_dust`.

- **Changed:**
    - `createmetallurgy:casting_in_table`: fluid of `gtceu:andesite_alloy_dust`: `gtceu:copper`: `216mb` -> `144mb`.

    - `createmetallurgy:shaped`: ingredient of `createmetallurgy:refractory_brick`: `minecraft:nether_brick` -> `minecraft:brick`.

    - `farmersdelight:cutting`: input of `#minecraft:all_logs_and_woods` -> `#kubejs:all_logs_and_woods`.

    - `minecraft:crafting_shaped`: replaced input of:
        - `#gtceu:tools/crafting_knives` -> `silentgear:knife`.
        - `#gtceu:tools/crafting_saws` -> `silentgear:saw`.
        - `#gtceu:tools/crafting_hammers` -> `silentgear:hammer`.

    - `minecraft:smelting`: output of `gtceu:raw_redstone`: `minecraft:redstone`: `1x` -> `5x`.

    - `vintage:centrifugation`: processing time of:
        - `minecraft:netherrack`: `200t` -> `150t`.
        - `minecraft:nether_bricks`: `600t` -> `400t`.

**Quests:**

- **Removed:**
    - `Pneumatic Age`, `Logistics Network`, `Tom's Storage` chapters.

    - `Botania Age I` chapter: `botania:grass_seeds`, `botania:vivid_seeds`, `minecraft:green_dye`, `mysticalagriculture:infusion_altar`.

    - `Create Age` chapter: `botania:red_petal_block`, `gtceu:raw_redstone`, `gtceu:redstone_ore`.

    - `Logistics Network` chapter: `logisticsnetworks:wrench`.

    - `Tom's Storage` chapter: `toms_storage:ts.inventory_connector`.

- **Added:**
    - `Botania Age III`, `Xnet`, `Bronze Steam Age` chapters.

    - `Botania Age I` chapter: `summoningrituals:altar`, `botania:livingwood_planks`, `botania:livingwood_planks_slab`, `botania:stripped_livingwood_log`.

    - `Copper Age` chapter: `botania:red_petal_block`, `gtceu:raw_redstone`, `gtceu:redstone_ore`, `pipez:fluid_pipe`, `pipez:wrench`.

    - `Create Age` chapter: `gtceu:andesite_alloy_nugget`, `gtceu:charcoal_dust`.

    - `Iron Age` chapter: `botania:blue_mystical_flower`, `botania:brown_petal_block`, `botania:cyan_petal_block`, `botania:cyan_mystical_flower`, `botania:green_mystical_flower`, `botania:light_gray_petal_block`, `botania:yellow_mystical_flower`, `cagedmobs:hopping_mob_cage`, `create:mechanical_saw`, `create_hc:saw_blade`, `ftbmaterials:niter`, `ftbmaterials:niter_block`, `ftbmaterials:sulfur`, `ftbmaterials:sulfur_block`, `gtceu:iron_plate`, `gtceu:plate_casting_mold`, `gtceu:raw_saltpeter`, `gtceu:raw_sulfur`, `gtceu:saltpeter_ore`, `gtceu:small_iron_gear`, `gtceu:small_iron_spring`, `gtceu:sulfur_ore`, `gtceu:wood_dust`, `gtceu:wood_plate`, `mysticalagriculture:soulstone`, `thermal_extra:soul_sand_dust`.

    - `Stone Age` chapter: `industrialforegoing:pitiful_generator`, `minecraft:chest`, `minecraft:clay`, `minecraft:oak_planks`, `minecraft:oak_slab`, `minecraft:stripped_oak_log`.

- **Changed:** `Botania Age I`, `Create Age`, `Copper Age`, `Stone Age`, `Iron Age` chapters: adjusted dependency chains.

---

### Version: _0.14.0_

### Date: _2026-05-19_

### Changes:

**Mods:**

- **Removed:** `brewingandchewin`, `ceramicshears`, `compatdelight`, `compressedcreativity`, `delightfulcreators`, `farmersrespite`, `inventorysorter`, `removereloadingscreen`, `biggertrees`, `watercondenser`, `woodenshears`.

- **Added:** `angelring`, `antiportals`, `apotheosis`, `apotheosisadditions`, `apothicattributes`, `baguettelib`, `chargers`, `cognition`, `colorfulhearts`, `corpse`, `corpse_curios`, `createjetpack`, `customportalapi`, `customportalbuilder`, `dysonsphereproject`, `extrahostilenetworks`, `ftbessentials`, `ftbmaterials`, `fluxnetworks`, `freecam`, `gtceufo`, `hostilenetworks`, `inventorysorterconf`, `ironjetpacks`, `justenoughtime`, `logisticsnetwork`, `modnamtooltip`, `observable`, `rechiseled`, `rechiseled_ae2`, `rechiseled_create`, `silentgear`, `silentlib`, `sfm`, `ubedelight`, `whenwasthatagain`, `apotheosis`, `appliedflux`.

- **Updated:**

| Mod                            | Previous            | Current             |
| ------------------------------ | ------------------- | ------------------- |
| `AE2 Crystal Science`          | `1.1.4.514`         | `1.1.4.515`         |
| `Better Advancements`          | `0.4.2.25`          | `0.4.2.59`          |
| `Chloride`                     | `1.7.5`             | `1.7.7`             |
| `Expanded AE`                  | `1.3.3`             | `1.4.1.b`           |
| `ExtraLib`                     | `3.0.2`             | `3.0.3`             |
| `Farmer's Delight`             | `1.3.1`             | `1.3.2`             |
| `FTB Quests`                   | `2001.4.21`         | `2001.4.22`         |
| `Fright's Delight`             | `1.4.6`             | `1.4.8`             |
| `GTCEu: The True Age of Steam` | `0.2.3`             | `0.3.0`             |
| `KubeJS Thermal`               | `2001.1.10-build.2` | `2001.1.10-build.5` |
| `Lychee`                       | `5.2.0`             | `5.2.1`             |
| `Masterful Manufacturing`      | `0.1.33.3`          | `0.1.33.4`          |
| `ModernFix`                    | `5.27.15`           | `5.27.25`           |
| `Mystical Agriculture`         | `7.0.23`            | `7.0.24`            |
| `EMI`                          | `1.1.22`            | `1.1.24`            |
| `Open Parties and Claims`      | `0.26.2`            | `0.26.3`            |
| `Certain Questing Additions`   | `1.1.6`             | `1.1.7`             |
| `Sophisticated Backpacks`      | `3.24.36.1713`      | `3.24.39.1743`      |
| `Sophisticated Core`           | `1.3.30.1809`       | `1.3.35.1851`       |
| `Sophisticated Storage`        | `1.4.42.1701`       | `1.4.44.1725`       |
| `Structurify`                  | `2.0.22`            | `2.0.24`            |
| `Xaero's Minimap`              | `25.3.10`           | `25.3.13`           |
| `Xaero's World Map`            | `1.40.11`           | `1.40.16`           |
| `XaeroPlus`                    | `2.31.1`            | `2.31.3`            |

**Recipes:**

- **Removed:**
    - `create:milling`: `createmetallurgy:crushed_raw_gold`, `createmetallurgy:crushed_raw_zinc`.

    - `minecraft:crafting_shaped`: `create_netherless:coal_rod`, `createmetallurgy:faucet`, `farmersdelight:flint_knife`, `farmersdelight:iron_knife`, `gtceu:flint_axe`, `immersiveengineering:hammercrushing_aluminum`, `immersiveengineering:hammercrushing_cobalt`, `immersiveengineering:hammercrushing_copper`, `immersiveengineering:hammercrushing_gold`, `immersiveengineering:hammercrushing_iron`, `immersiveengineering:hammercrushing_lead`, `immersiveengineering:hammercrushing_nickel`, `immersiveengineering:hammercrushing_platinum`, `immersiveengineering:hammercrushing_silver`, `immersiveengineering:hammercrushing_tin`, `immersiveengineering:hammercrushing_tungsten`, `immersiveengineering:hammercrushing_uranium`, `immersiveengineering:lead_red`, `immersiveengineering:torch`.

    - `minecraft:smelting`: `thermal:redstone_from_spores_smelting`.

- **Added:**
    - `create:splashing`:
        - `gtceu:crushed_iron_ore` -> `gtceu:purified_iron_ore` + `gtceu:stone_dust` + `gtceu:tiny_nickel_dust`.
        - `gtceu:crushed_copper_ore` -> `gtceu:purified_copper_ore` + `gtceu:stone_dust` + `gtceu:tiny_cobalt_dust`.

    - `createmetallurgy:casting_in_basin`:
        - `gtceu:copper (1296mb)` -> `minecraft:copper_block`.
        - `gtceu:iron (1296mb)` -> `minecraft:iron_block`.

    - `createmetallurgy:casting_in_table`: `minecraft:water (125mb)` + `gtceu:paper_dust` -> `minecraft:paper`.

    - `farmersdelight:cutting`: `create:gearbox` + `create:whisk` -> `create:mechanical_mixer`.

    - `lychee:item_inside`: `minecraft:bone_meal` + `strainers:purified_water_block` -> `botania:fertilizer`.

    - `melter:melting`:
        - `#minecraft:leaves` -> `minecraft:water (125mb)`.
        - `#forge:cobblestone` -> `minecraft:lava (100mb)`.

    - `minecraft:crafting_shaped`: `mysticalagriculture:infusion_altar`, `mysticalagriculture:infusion_pedestal`, `gtceu:wood_gear`, `youkaisfeasts:wood_basin`, `botanypots:terracotta_botany_pot`, `botanypots:terracotta_hopper_botany_pot`, `create:propeller`.

    - `minecraft:crafting_shapeless`: `9x minecraft:coal`, `minecraft:red_wool`.

    - `minecraft:smelting`:
        - `minecraft:raw_copper` -> `minecraft:copper_ingot`.
        - `#forge:rods/wooden` -> `minecraft:torch`.
        - `gtceu:raw_redstone` -> `minecraft:redstone`.
        - `gtceu:raw_graphite` -> `ftbmaterials:graphite_ingot`.

    - `mysticalagriculture:infusion`: `gtceu:coal_ore`, `gtceu:copper_ore`, `gtceu:graphite_ore`, `gtceu:iron_ore`, `gtceu:lapis_ore`, `gtceu:redstone_ore`, `gtceu:saltpeter_ore`, `gtceu:sulfur_ore`.

    - `thermal:centrifuge`: `productivebees:configurable_honeycomb (copper)` -> `minecraft:raw_copper` + `productivebees:wax` + `create:honey (250mb)`.

    - `vintage:centrifugation`: `productivebees:configurable_honeycomb (copper)` -> `minecraft:raw_copper` + `productivebees:wax` + `create:honey (250mb)`.

    - `vintage:curving`: `gtceu:empty_mold` + `minecraft:brick` -> `gtceu:ingot_casting_mold`.

    - `vintage:polishing`: `minecraft:coal_block` -> `create_netherless:coal_rod`.

    - `youkaisfeasts:simple_basin`: `#kubejs:organic_matters` -> `minecraft:water (50mb)`.

- **Changed:**
    - `create:compacting`: `gtceu:empty_mold`: input of `minecraft:iron_ingot` -> `ftbmaterials:graphite_ingot`.

    - `create:milling`: `minecraft:raw_iron`: output of `gtceu:crushed_iron_ore` -> `2x gtceu:crushed_iron_ore` + `gtceu:stone_dust`.

    - `createmetallurgy:casting_in_table`: `gtceu:andesite_alloy_dust`, `minecraft:iron_ingot`: ingredient of `createmetallurgy:graphite_ingot_mold` -> `gtceu:ingot_casting_mold`.

    - `farmersdelight:cutting`: tool of `#minecraft:pickaxes` -> `#forge:tools/pickaxes`.

    - `minecraft:crafting_shaped`: `minecraft:stick`: ingredient of `kubejs:flint_saw` -> `silentgear:saw`.

    - `vintage:centrifugation`: `gtceu:purified_iron_ore`: added output `gtceu:tiny_tin_dust`.

    - `replace_objects`:
        - `#forge:dusts/lead` -> `gtceu:lead_dust`.
        - `#forge:dusts/nickel` -> `gtceu:nickel_dust`.
        - `#forge:dusts/silver` -> `gtceu:silver_dust`.
        - `#forge:dusts/tin` -> `gtceu:tin_dust`.
        - `#forge:dusts/uranium` -> `gtceu:uranium_dust`.

**Quests:**

- **Removed:**
    - `Copper Age` chapter: `melter:melter`.

    - `Create Age` chapter: `botania:mana_pool`, `create:mechanical_saw`, `create_hc:saw_blade`, `createmetallurgy:graphite`, `createmetallurgy:graphite_blank_mold`, `createmetallurgy:graphite_ingot_mold`, `minecraft:sugar_cane`.

- **Added:**
    - `AE2`, `Logistics Network`, `Productive Bees`, `SFM` chapters.

    - `Botania Age I` chapter: `botania:mana_powder`, `minecraft:lever`, `minecraft:red_dye`, `minecraft:red_wool`, `minecraft:sugar`, `minecraft:sugar_cane`, `minecraft:white_wool`, `mysticalagriculture:infusion_altar`.

    - `Copper Age` chapter: `minecraft:copper_block`.

    - `Create Age` chapter: `botania:red_petal_block`, `create:clutch`, `create:cogwheel`, `create:encased_fan`, `create:gearshift`, `create:propeller`, `ftbmaterials:graphite_ingot`, `gtceu:empty_mold`, `gtceu:ingot_casting_mold`, `gtceu:paper_dust`, `gtceu:raw_redstone`, `gtceu:redstone_ore`, `minecraft:iron_block`, `minecraft:redstone`, `minecraft:redstone_torch`, `minecraft:torch`, `vintage:curving_press`.

    - `Iron Age` chapter: `botania:blue_petal_block`, `botania:manasteel_block`, `botania:manasteel_ingot`, `botania:mana_tablet`, `botania:mycelium_seeds`, `botania:rune_air`, `botania:rune_earth`, `botania:rune_fire`, `botania:rune_mana`, `botania:rune_water`, `botania:terra_plate`, `cagedmobs:mob_cage`, `create:chute`, `create:fluid_pipe`, `create:mechanical_pump`, `ftbmaterials:niter_block`, `ftbmaterials:sulfur_block`, `gtceu:copper_plate`, `gtceu:iron_bolt`, `gtceu:iron_ring`, `gtceu:iron_rod`, `gtceu:iron_screw`, `gtceu:lapis_ore`, `gtceu:manasteel_dust`, `gtceu:raw_lapis`, `manaliquidizer:mana_fluid_bucket`, `manaliquidizer:mana_liquidizer`, `minecraft:chain`, `minecraft:chicken_spawn_egg`, `minecraft:coal_block`, `minecraft:creeper_spawn_egg`, `minecraft:crimson_fungus`, `minecraft:diamond`, `minecraft:feather`, `minecraft:gunpowder`, `minecraft:hay_block`, `minecraft:iron_bars`, `minecraft:iron_block`, `minecraft:lapis_block`, `minecraft:lapis_lazuli`, `minecraft:mycelium`, `minecraft:nether_wart`, `minecraft:nether_wart_block`, `minecraft:orange_wool`, `minecraft:red_mushroom`, `minecraft:white_carpet`, `mysticalagriculture:prosperity_gemstone`, `mysticalagriculture:prosperity_ore`, `mysticalagriculture:prosperity_shard`, `mysticalagriculture:soulium_dust`, `mysticalagriculture:soulium_gemstone`, `mysticalagriculture:soulium_ore`, `vintage:vacuum_chamber`.

    - `Stone Age` chapter: `botanypots:terracotta_botany_pot`, `minecraft:terracotta`, `strainers:mulch`.

---

### Version: _0.13.0_

### Date: _2026-05-02_

### Changes:

**Mods:**

- **Removed:** `alltheleaks`, `botanicadditions`, `createhenry`, `entityculling`, `hammerlib`, `immediatelyn`, `immersiveindustry`, `inventoryessentials`, `neverp`, `nono`, `simpleprocessingmachines`.

- **Added:** `alternatingcurrent`, `biggertrees`, `brewinandchewin`, `buildingpadgets`, `cofhcore`, `compactmachines`, `compatdelight`, `connectivity`, `createaddition`, `createhandcrafting`, `cucumber`, `cullleaves`, `culturaldelights`, `cupboard`, `delightfulcreators`, `dimban`, `endsdelight`, `enderstorage`, `entangled`, `fallingleaves`, `frightsdelight`, `industrialforegoing`, `industrialforegoingextraupgrades`, `industrialforegoingsouls`, `jeimultiblocks`, `kubejsindustrialforegoing`, `kubejsmysticalag`, `kubejsthermal`, `kubejsthermalaugments`, `lightspeedre`, `mifa`, `midnightlib`, `modelgapfix`, `mysticalag`, `mysticalagadditions`, `mysticalagtieredcrystals`, `mystianapiary`, `mysticalextendedtier`, `mynethersdelight`, `nohandbreak`, `productivebees`, `saturn`, `smoothboot`, `thermalcultivation`, `thermalendergy`, `thermalexpansion`, `thermalextra`, `thermalfoundation`, `thermalinnovation`, `thermalintegration`, `thermallocomotion`, `watercondenser`.

- **Updated:**

| Mod                                  | Previous            | Current             |
| ------------------------------------ | ------------------- | ------------------- |
| `AE2 Overclocked`                    | `1.2.3-fix2`        | `1.2.3-fix3`        |
| `Botanical Machinery Extra Reforked` | `1.2.9.5`           | `1.2.9.6`           |
| `Botania`                            | `1.20.1-451`        | `1.20.1-452`        |
| `Collective`                         | `1.20.1-8.20`       | `1.20.1-8.22`       |
| `Compact Crafting`                   | `4.0.5`             | `4.0.6`             |
| `CraftTweaks`                        | `18.2.8`            | `18.2.9`            |
| `CreativeCore`                       | `2.12.36`           | `2.12.37`           |
| `Cyclops Core`                       | `1.22.0`            | `1.22.1`            |
| `ExtendedAE`                         | `1.4.14`            | `1.4.15`            |
| `ExtraLib`                           | `2.1.4`             | `3.0.2`             |
| `Extra Quests`                       | `1.6.2`             | `1.7.0`             |
| `Farmer's Delight`                   | `1.2.11a`           | `1.3.1`             |
| `Fright's Delight`                   | `1.3.4`             | `1.4.6`             |
| `ItemPhysic`                         | `1.8.11`            | `1.8.12`            |
| `KubeJS`                             | `2001.6.5-build.16` | `2001.6.5-build.26` |
| `Masterful Manufacturing`            | `0.1.33.2`          | `0.1.33.3`          |
| `ModernFix`                          | `5.27.12`           | `5.27.15`           |
| `Open Parties and Claims`            | `0.26.1`            | `0.26.2`            |
| `Sophisticated Backpacks`            | `3.24.35.1675`      | `3.24.36.1713`      |
| `Sophisticated Core`                 | `1.3.22.1715`       | `1.3.30.1809`       |
| `Sophisticated Storage`              | `1.4.41.1679`       | `1.4.42.1701`       |
| `Titanium`                           | `3.8.32`            | `3.8.34`            |
| `Too Many Recipe Viewers`            | `0.7.2`             | `0.7.3`             |

**Recipes:**

- **Removed:**
    - `botania:runic_altar`: `gtceu:copper_ore`.

    - `minecraft:blasting`: `#forge:crushed_ores`, `#forge:dusts`, `#forge:impure_dusts`, `#forge:pure_dusts`, `#forge:purified_ores`, `#forge:refined_ores`.

    - `minecraft:crafting_shaped`: `gtceu:gem_to_dust_charcoal_gem`, `gtceu:gem_to_dust_coal_exquisite_gem`, `gtceu:gem_to_dust_coal_flawless_gem`, `gtceu:gem_to_dust_coke_exquisite_gem`, `gtceu:gem_to_dust_coke_flawless_gem`, `gtceu:gem_to_dust_coke_gem`, `gtceu:mortar_grind_antimony`, `gtceu:mortar_grind_brass`, `gtceu:mortar_grind_bronze`, `gtceu:mortar_grind_invar`, `gtceu:mortar_grind_iron`, `gtceu:mortar_grind_lead`, `gtceu:mortar_grind_nickel`, `gtceu:mortar_grind_silver`, `gtceu:mortar_grind_steel`, `gtceu:mortar_grind_tin`, `gtceu:mortar_grind_wrought_iron`, `#forge:plates`, `#forge:impure_dusts`, `#forge:pure_dusts`.

    - `minecraft:crafting_shapeless`: `#forge:exquisite_gems`, `#forge:flawless_gems`, `#forge:impure_dusts`, `#forge:pure_dusts`, `#forge:refined_ores`.

    - `minecraft:smelting`: `#forge:crushed_ores`, `#forge:dusts`, `#forge:impure_dusts`, `#forge:pure_dusts`, `#forge:purified_ores`, `#forge:refined_ores`.

    - `minecraft:stonecutting`: `createmetallurgy:graphite_blank_mold`.

- **Added:**
    - `botania:runic_altar`:
        - `4x botania:orange_petal` + `4x botania:orange_petal_block` -> `gtceu:copper_ore`.
        - `4x botania:white_petal` + `4x botania:white_petal_block` -> `gtceu:iron_ore`.
        - `4x botania:black_petal` + `4x botania:black_petal_block` -> `gtceu:coal_ore`.
        - `2x botania:white_petal` + `2x botania:black_petal` + `2x botania:white_petal_block` + `2x botania:black_petal_block` -> `gtceu:graphite_ore`.
        - `3x gtceu:andesite_alloy_ingot` + `4x botania:livingrock` + `botania:diluted_pool` -> `botania:mana_pool`.

    - `brewinandchewin:fermenting`:
        - `minecraft:bone_meal` + `strainers:purified_water_fluid (250mb)` -> `botania:fertilizer`.
        - `minecraft:dirt` + `minecraft:water (500mb)` -> `minecraft:mud`.

    - `create:compacting`:
        - `2x gtceu:andesite_alloy_ingot` -> `vintage:andesite_sheet`.
        - `2x minecraft:iron_ingot` -> `gtceu:iron_plate`.
        - `2x createmetallurgy:graphite` -> `createmetallurgy:graphite_blank_mold`.

    - `create:cutting`: `createmetallurgy:graphite_blank_mold` -> `createmetallurgy:graphite_ingot_mold` + `createmetallurgy:graphite_plate_mold`.

    - `create:filling`: `gtceu:crushed_iron_ore` + `minecraft:water (250mb)` -> `gtceu:purified_iron_ore`.

    - `create:haunting`: `botania:grass_seeds` -> `botania:mycelium_seeds`.

    - `create:milling`:
        - `minecraft:raw_iron` -> `gtceu:crushed_iron_ore`.
        - `minecraft:iron_ingot` -> `gtceu:iron_dust`.
        - `minecraft:sugar_cane` -> `gtceu:paper_dust`.
        - `minecraft:soul_sand` -> `thermal_extra:soul_sand_dust`.

    - `create:mixing`: `minecraft:iron_ingot` + `2x thermal_extra:soul_sand_dust` + `minecraft:copper_ingot` -> `2x thermal_extra:soul_infused_ingot`.

    - `createaddition:rolling`: `gtceu:andesite_alloy_ingot` -> `vintage:andesite_rod`.

    - `createmetallurgy:casting_in_basin`: `gtceu:andesite_alloy (1296mb)` -> `gtceu:andesite_alloy_block`.

    - `createmetallurgy:casting_in_table`: `gtceu:andesite_alloy (144mb)` + `createmetallurgy:graphite_ingot_mold` -> `gtceu:andesite_alloy_ingot`.

    - `createmetallurgy:melting`:
        - `minecraft:copper_ingot` -> `gtceu:copper (144mb)`.
        - `gtceu:andesite_alloy_dust` -> `gtceu:andesite_alloy (144mb)`.
        - `gtceu:refined_iron_ore` -> `gtceu:iron (216mb)`.

    - `farmersdelight:cutting`:
        - `gtceu:andesite_alloy_block` + `#minecraft:pickaxes` -> `create:basin`.
        - `create:basin` + `#minecraft:pickaxes` -> `create:chute`.
        - `create:shaft` + `create_hc:gear_small` -> `create:cogwheel`.
        - `create:shaft` + `create_hc:gear_large` -> `create:large_cogwheel`.

    - `minecraft:crafting_shaped`: `brewinandchewin:keg`, `create:copper_valve_handle`, `create:empty_blaze_burner`, `create:whisk`, `createaddition:rolling_mill`, `create_hc:press_head`, `create_hc:saw_blade`, `minecraft:paper`, `minecraft:white_wool`, `vintage:centrifuge`, `vintage:spring_coiling_machine`, `vintage:spring_coiling_machine_wheel`.

    - `minecraft:smelting`:
        - `gtceu:raw_graphite` -> `createmetallurgy:graphite`.
        - `gtceu:raw_coal` -> `minecraft:coal`.

    - `vintage:centrifugation`: `gtceu:purified_iron_ore` -> `gtceu:refined_iron_ore` + `gtceu:stone_dust`.

    - `replace_objects`:
        - `farmersdelight:flint_knife` -> `gtceu:flint_knife`.
        - `farmersdelight:iron_knife` -> `gtceu:iron_knife`.
        - `minecraft:copper_ore` -> `gtceu:copper_ore`.
        - `minecraft:coal_ore` -> `gtceu:coal_ore`.

- **Changed:**
    - `minecraft:crafting_shaped`: `createmetallurgy:refractory_brick`: ingredient of `minecraft:brick` -> `minecraft:nether_brick`.

    - `melter:melting`: processing time of all recipes: `200t` -> `400t`.

**Quests:**

- **Removed:**
    - `Copper Age` chapter: `minecraft:dried_kelp`, `minecraft:kelp`.

    - `Origin Age` chapter: `simpleprocessingmachines:atmospheric_condenser`, `simpleprocessingmachines:crystallizing_station`, `simpleprocessingmachines:organic_composter`.

    - `Tom's Storage` chapter: `toms_storage:ts.storage_terminal`.

- **Added:**
    - `Iron Age`, `Brass Age`, `Pneumatic Age`, `Modpack Introduction` chapters.

    - `Botania Age II` chapter: `botania:alfheim_portal`, `botania:dragonstone`, `botania:elementium_ingot`, `botania:gaia_ingot`, `botania:gaia_pylon`, `botania:glimmering_dreamwood`, `botania:glimmering_livingwood`, `botania:life_essence`, `botania:pixie_dust`, `botania:terrasteel_ingot`, `botania:terrasteel_nugget`, `create:brass_casing`, `create:encased_fan`, `createmetallurgy:foundry_mixer`, `extrabotany:orichalcos_ingot`, `gtceu:brass_dust`, `gtceu:brass_ingot`, `gtceu:purified_sphalerite_ore`, `gtceu:raw_sphalerite`, `gtceu:refined_sphalerite_ore`, `gtceu:sphalerite_ore`, `gtceu:zinc_dust`, `gtceu:zinc_ingot`, `minecraft:glowstone_dust`, `minecraft:prismarine_crystals`, `mythicbotany:alfsteel_ingot`, `mythicbotany:alfsteel_nugget`, `mythicbotany:alfsteel_pylon`, `mythicbotany:mana_infuser`.

    - `Copper Age` chapter: `create:copper_valve_handle`, `create:fluid_tank`.

    - `Create Age` chapter: `botania:black_petal_block`, `botania:mana_pool`, `botania:white_petal_block`, `create:basin`, `create:blaze_burner`, `create:cogwheel`, `create:depot`, `create:empty_blaze_burner`, `create:gearbox`, `create:mechanical_mixer`, `create:mechanical_press`, `create:mechanical_saw`, `create:millstone`, `create:shaft`, `create:turntable`, `create:whisk`, `create_hc:gear_small`, `create_hc:press_head`, `create_hc:saw_blade`, `create_hc:shaft`, `create_netherless:coal_rod`, `createaddition:rolling_mill`, `createmetallurgy:foundry_basin`, `createmetallurgy:foundry_lid`, `createmetallurgy:graphite`, `createmetallurgy:graphite_blank_mold`, `createmetallurgy:graphite_ingot_mold`, `createmetallurgy:refractory_mortar`, `gtceu:andesite_alloy_block`, `gtceu:coal_ore`, `gtceu:crushed_iron_ore`, `gtceu:graphite_ore`, `gtceu:iron_ore`, `gtceu:paper_dust`, `gtceu:purified_iron_ore`, `gtceu:raw_coal`, `gtceu:raw_graphite`, `gtceu:raw_iron`, `gtceu:refined_iron_ore`, `minecraft:blaze_rod`, `minecraft:coal`, `minecraft:coal_block`, `minecraft:paper`, `minecraft:sugar_cane`, `vintage:andesite_rod`, `vintage:andesite_sheet`, `vintage:andesite_spring`, `vintage:belt_grinder`, `vintage:centrifuge`, `vintage:grinder_belt`, `vintage:spring_coiling_machine`, `vintage:spring_coiling_machine_wheel`.

    - `Origin Age` chapter: `brewinandchewin:keg`, `watercondenser:watercondenser`.

    - `Tom's Storage` chapter: `toms_storage:ts.inventory_connector`.

---

### Version: _0.12.0_

### Date: _2026-04-25_

### Changes:

- Removed items: `kubejs:twig`, `kubejs:flint_shard`.
- Added new items: `kubejs:mossy_twig`, `kubejs:mossy_flint_shard`.
- Adjusted some recipes.
- Adjusted quest chapter: `Stone Age`.
- Adjusted quest chapter: `Botania Age I`.
- Adjusted quest chapter: `Copper Age`.

---

### Version: _0.11.0_

### Date: _2026-04-17_

### Changes:

- Adjusted some recipes.
- Adjusted quest chapter: `Stone Age`.
- Adjusted quest chapter: `Botania Age I`.

---

### Version: _0.10.0_

### Date: _2026-04-16_

### Changes:

- Adjusted Skyblock world type default map preset.
- Adjusted some recipes.
- Adjusted quest chapter: `Stone Age`.
- Added quest chapter: `Botania Age I`.

---

### Version: _0.9.0_

### Date: _2026-04-15_

### Changes:

- Adjusted Skyblock world type default map preset.
- Adjusted some recipes.
- Adjusted quest chapter: `Origin Age`.
- Adjusted quest chapter: `Stone Age`.
- Added quest chapter: `Botania Age I`.
- Adjusted Chinese translations.

---

### Version: _0.8.0_

### Date: _2026-04-13_

### Changes:

- Adjusted some recipes.
- Adjusted quest chapter: `Origin Age`.
- Adjusted quest chapter: `Stone Age`.

---

### Version: _0.7.0_

### Date: _2026-04-13_

### Changes:

- Adjusted some recipes.
- Adjusted quest chapter: `Origin Age`.
- Adjusted quest chapter: `Stone Age`.

---

### Version: _0.6.0_

### Date: _2026-04-12_

### Changes:

- Adjusted some recipes.
- Adjusted quest chapter: `Origin Age`.
- Adjusted quest chapter: `Stone Age`.
- Added quest chapter: `Heat Age`.

---

### Version: _0.5.0_

### Date: _2026-04-11_

### Changes:

- Adjusted item icons: `kubejs:dirt_pile`, `kubejs:humus_pile`, `kubejs:flint_shard`, `kubejs:twig`, and `kubejs:flint_saw`.
- Adjusted multiblock structure: `kubejs:furnace`.
- Adjusted some recipes.
- Adjusted quest chapter: `Origin Age`.
- Adjusted quest chapter: `Stone Age`.

---

### Version: _0.4.0_

### Date: _2026-04-10_

### Changes:

- Removed items: `kubejs:organic_matter_pile`.
- Adjusted some recipes.
- Adjusted the quest chapter: `Origin Age`.
- Completed the quest chapter: `Stone Age`.

---

### Version: _0.3.0_

### Date: _2026-04-10_

### Changes:

- Removed items: `kubejs:dirt_dust`, and `kubejs:dirt_stick`.
- Added new items: `kubejs:dirt_pile`, `kubejs:humus_pile`, `kubejs:organic_matter_pile`, `kubejs:twig`, and `kubejs:flint_saw`.
- Adjusted some recipes.
- Completed the quest chapter: `Origin Age`.

---

### Version: _0.2.0_

### Date: _2026-04-09_

### Changes:

- Added new items: `kubejs:dirt_dust`, `kubejs:dirt_stick`, and `kubejs:flint_shard`.
- Added new recipes for `kubejs:dirt_dust`, `kubejs:dirt_stick`, `kubejs:flint_shard`, `minecraft:flint`, `minecraft:dead_bush`, `minecraft:oak_sapling`, and `botania:living_root`.
- Added new quests.

---

### Version: _0.1.0_

### Date: _2026-04-08_

### Changes:

- Adjusted `config/sidebar_buttons.json`.
- Created a new Skyblock world preset in the `config/skyblockbuilder/` directory.
- Changed the default world type to the Skyblock preset.

---

### Version: _0.0.0_

### Date: _2026-04-08_

### Changes:

- Initial project setup.
